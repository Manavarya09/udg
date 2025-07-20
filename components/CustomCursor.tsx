import React, { useRef, useEffect, useState } from 'react';
import useMousePosition from '@/utils/useMousePosition';

const TRAIL_COUNT = 5;

const isInteractive = (el: HTMLElement | null) => {
  if (!el) return false;
  return (
    el.tagName === 'A' ||
    el.tagName === 'BUTTON' ||
    el.getAttribute('role') === 'button' ||
    el.classList.contains('cursor-pointer')
  );
};

const CustomCursor: React.FC = () => {
  const { x, y } = useMousePosition();
  const [isHover, setIsHover] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [isInteractiveElem, setIsInteractiveElem] = useState(false);
  const trails = useRef(
    Array.from({ length: TRAIL_COUNT }, () => ({ x: x, y: y }))
  );
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Animate the trailing cursor particles
  useEffect(() => {
    let frame: number;
    const animate = () => {
      let prev = { x, y };
      trails.current.forEach((pos, i) => {
        pos.x += (prev.x - pos.x) * (0.18 - i * 0.02);
        pos.y += (prev.y - pos.y) * (0.18 - i * 0.02);
        if (trailRefs.current[i]) {
          trailRefs.current[i]!.style.transform = `translate3d(${pos.x - 20}px, ${pos.y - 20}px, 0)`;
          trailRefs.current[i]!.className =
            'custom-cursor-trail' + (i > 1 ? ' custom-cursor-trail--fade' : '');
        }
        prev = pos;
      });
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, [x, y]);

  // Handle hover/click/interactive states
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement;
      setIsHover(!!el && (el.tagName === 'A' || el.tagName === 'BUTTON' || el.classList.contains('cursor-pointer')));
      setIsInteractiveElem(isInteractive(el));
      // Hide cursor if over input, textarea, or select
      if (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT')) {
        setShowCursor(false);
      } else {
        setShowCursor(true);
      }
    };
    const handleDown = () => setIsClick(true);
    const handleUp = () => setIsClick(false);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
    };
  }, []);

  const [showCursor, setShowCursor] = useState(true);

  let cursorClass = 'custom-cursor';
  if (isClick) cursorClass += ' custom-cursor--click';
  else if (isHover) cursorClass += ' custom-cursor--hover';
  if (isInteractiveElem) cursorClass += ' custom-cursor--interactive';

  return (
    <>
      {showCursor && (
        <div
          className={cursorClass}
          style={{
            transform: `translate3d(${x - 16}px, ${y - 16}px, 0)`
          }}
        />
      )}
      {showCursor && Array.from({ length: TRAIL_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={el => (trailRefs.current[i] = el)}
          className="custom-cursor-trail"
        />
      ))}
    </>
  );
};

export default CustomCursor; 