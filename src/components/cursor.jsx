import { useRef, useEffect } from 'react';

// styles
import styles from '../styles/cursor.module.scss';

const Cursor = () => {
  const delay = 18;

  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(false);

  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);
  const _x = useRef(0);
  const _y = useRef(0);

  const requestRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', mouseOverEvent);
    document.addEventListener('mouseup', mouseOutEvent);
    document.addEventListener('mousemove', mouseMoveEvent);
    document.addEventListener('mouseenter', mouseEnterEvent);
    document.addEventListener('mouseleave', mouseLeaveEvent);

    animateDotOutline();

    return () => {
      document.removeEventListener('mousedown', mouseOverEvent);
      document.removeEventListener('mouseup', mouseOutEvent);
      document.removeEventListener('mousemove', mouseMoveEvent);
      document.removeEventListener('mouseenter', mouseEnterEvent);
      document.removeEventListener('mouseleave', mouseLeaveEvent);

      cancelAnimationFrame(requestRef.current);
    };
  });

  const toggleCursorVisibility = () => {
    if (cursorVisible.current) {
      dotRef.current.style.opacity = 1;
      outlineRef.current.style.opacity = 1;
    } else {
      dotRef.current.style.opacity = 0;
      outlineRef.current.style.opacity = 0;
    }
  };

  const toggleCursorSize = () => {
    if (cursorEnlarged.current) {
      dotRef.current.style.transform = 'translate(-50%, -50%) scale(0.75)';
      outlineRef.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
    } else {
      dotRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
      outlineRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
    }
  };

  const mouseOverEvent = () => {
    cursorEnlarged.current = true;
    toggleCursorSize();
  };

  const mouseOutEvent = () => {
    cursorEnlarged.current = false;
    toggleCursorSize();
  };

  const mouseEnterEvent = () => {
    cursorVisible.current = true;
    toggleCursorVisibility();
  };

  const mouseLeaveEvent = () => {
    cursorVisible.current = false;
    toggleCursorVisibility();
  };

  const mouseMoveEvent = e => {
    cursorVisible.current = true;
    toggleCursorVisibility();

    endX.current = e.pageX;
    endY.current = e.pageY;

    dotRef.current.style.top = endY.current + 'px';
    dotRef.current.style.left = endX.current + 'px';
  };

  const animateDotOutline = () => {
    _x.current += (endX.current - _x.current) / delay;
    _y.current += (endY.current - _y.current) / delay;

    outlineRef.current.style.top = _y.current + 'px';
    outlineRef.current.style.left = _x.current + 'px';

    requestRef.current = requestAnimationFrame(animateDotOutline);
  };


  return (
    <>
      <div ref={outlineRef} className={styles.cursor__outline}></div>
      <div ref={dotRef} className={styles.cursor__dot}></div>
    </>
  );
};

export default Cursor;