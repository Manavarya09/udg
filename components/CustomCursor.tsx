import React, { useRef, useEffect } from 'react';
import useMousePosition from '@/utils/useMousePosition';

const CustomCursor: React.FC = () => {
  const { x, y } = useMousePosition();
  const trailRef = useRef<HTMLDivElement>(null);

  // Animate the trailing cursor
  useEffect(() => {
    if (!trailRef.current) return;
    const trail = trailRef.current;
    let frame: number;
    let lastX = x, lastY = y;
    const animate = () => {
      lastX += (x - lastX) * 0.15;
      lastY += (y - lastY) * 0.15;
      trail.style.transform = `translate3d(${lastX - 16}px, ${lastY - 16}px, 0)`;
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, [x, y]);

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          transform: `translate3d(${x - 8}px, ${y - 8}px, 0)`
        }}
      />
      <div
        className="custom-cursor-trail"
        ref={trailRef}
      />
    </>
  );
};

export default CustomCursor; 