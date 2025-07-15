"use client";

import { useEffect, useState, useRef } from "react";
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Simplex noise GLSL (classic 2D noise)
const noiseGLSL = `
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                      -0.577350269189626, 0.024390243902439);
  // First corner
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  // Other corners
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec2 x1 = x0.xy - i1 + C.xx;
  vec2 x2 = x0.xy - 1.0 + 2.0 * C.xx;
  // Permutations
  i = mod289(i); // Avoid truncation effects in permutation
  vec3 p = permute( permute(
                vec3(i.y + vec3(0.0, i1.y, 1.0))
              + i.x + vec3(0.0, i1.x, 1.0)));
  vec3 x_ = fract(p * C.w) * 2.0 - 1.0;
  vec3 h = abs(x_) - 0.5;
  vec3 ox = floor(x_ + 0.5);
  vec3 a0 = x_ - ox;
  // Normalise gradients
  vec2 g0 = vec2(a0.x, h.x);
  vec2 g1 = vec2(a0.y, h.y);
  vec2 g2 = vec2(a0.z, h.z);
  float t0 = 0.5 - dot(x0,x0);
  float t1 = 0.5 - dot(x1,x1);
  float t2 = 0.5 - dot(x2,x2);
  float n0 = 0.0;
  float n1 = 0.0;
  float n2 = 0.0;
  if(t0 >= 0.0) { n0 = pow(t0, 4.0) * dot(g0, x0); }
  if(t1 >= 0.0) { n1 = pow(t1, 4.0) * dot(g1, x1); }
  if(t2 >= 0.0) { n2 = pow(t2, 4.0) * dot(g2, x2); }
  return 70.0 * (n0 + n1 + n2);
}
`;

function FestivalShaderPlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { size, gl } = useThree();
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  // Mouse move handler
  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const rect = gl.domElement.getBoundingClientRect();
      setMouse({
        x: (e.clientX - rect.left) / rect.width,
        y: 1 - (e.clientY - rect.top) / rect.height,
      });
    }
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [gl]);

  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.uResolution.value = new THREE.Vector2(size.width, size.height);
    }
  }, [size]);

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
      materialRef.current.uniforms.uMouse.value = new THREE.Vector2(mouse.x, mouse.y);
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[200, 200]} />
      <shaderMaterial
        ref={materialRef}
        attach="material"
        uniforms={{
          uTime: { value: 0 },
          uResolution: { value: new THREE.Vector2(size.width, size.height) },
          uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uTime;
          uniform vec2 uMouse;
          varying vec2 vUv;
          ${noiseGLSL}

          void main() {
            float t = uTime * 0.12;
            // Mouse affects flow direction and speed
            float mx = uMouse.x * 2.0 - 1.0;
            float my = uMouse.y * 2.0 - 1.0;
            float n1 = snoise(vUv * (3.0 + mx * 2.0) + vec2(t * (1.0 + mx), t * (1.0 + my)));
            float n2 = snoise(vUv * (6.0 + my * 2.0) - vec2(t * 0.7 * (1.0 + mx), t * 0.5 * (1.0 + my)));
            float n3 = snoise(vUv * 10.0 + vec2(-t * 0.3 * (1.0 + mx), t * 0.8 * (1.0 + my)));
            float blend = 0.5 + 0.5 * n1 + 0.25 * n2 + 0.15 * n3;

            // More vibrant orange gradient
            vec3 orange = vec3(1.2, 0.38, 0.0); // even more saturated orange
            vec3 yellow = vec3(1.0, 0.95, 0.3);
            vec3 white = vec3(1.0, 1.0, 1.0);

            vec3 color = mix(orange, yellow, smoothstep(0.0, 0.75, blend));
            color = mix(color, white, smoothstep(0.85, 1.0, blend));

            // Add a soft vignette
            float dist = distance(vUv, vec2(0.5));
            color *= 1.0 - 0.18 * dist;

            gl_FragColor = vec4(color, 1.0);
          }
        `}
      />
    </mesh>
  );
}

export default function FestivalBackground() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: -1,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      overflow: 'hidden',
      margin: 0,
      padding: 0,
    }}>
      <Canvas style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} camera={{ position: [0, 0, 32], fov: 60 }}>
        <ambientLight intensity={0.8} />
        <FestivalShaderPlane />
      </Canvas>
    </div>
  );
} 