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
      try {
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
      } catch (error) {
        console.error('TypedText initialization error:', error);
        // Fallback to show first string if Typed.js fails
        if (elementRef.current && strings.length > 0) {
          elementRef.current.textContent = strings[0];
        }
      }
    }

    return () => {
      if (typedRef.current) {
        try {
          typedRef.current.destroy();
        } catch (error) {
          console.error('TypedText cleanup error:', error);
        }
      }
    };
  }, [strings, typeSpeed, backSpeed, backDelay, startDelay, loop, showCursor, cursorChar, onComplete]);

  return <span ref={elementRef} className={className} />;
}
