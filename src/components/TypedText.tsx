import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypedTextProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
  startDelay?: number;
  loop?: boolean;
  showCursor?: boolean;
  cursorChar?: string;
  className?: string;
  onComplete?: () => void;
}

export default function TypedText({
  strings,
  typeSpeed = 50,
  backSpeed = 30,
  backDelay = 1500,
  startDelay = 0,
  loop = true,
  showCursor = true,
  cursorChar = '|',
  className = '',
  onComplete,
}: TypedTextProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const typedRef = useRef<Typed | null>(null);

  useEffect(() => {
    if (elementRef.current) {
      const options = {
        strings,
        typeSpeed,
        backSpeed,
        backDelay,
        startDelay,
        loop,
        showCursor,
        cursorChar,
        onComplete: onComplete || undefined,
      };

      typedRef.current = new Typed(elementRef.current, options);
    }

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, [strings, typeSpeed, backSpeed, backDelay, startDelay, loop, showCursor, cursorChar, onComplete]);

  return <span ref={elementRef} className={className} />;
}
