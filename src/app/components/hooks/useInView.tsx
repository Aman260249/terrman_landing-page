import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions extends IntersectionObserverInit {}

export default function useInView(
  options: UseInViewOptions = { threshold: 0.2 }
) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // SSR safety
    if (typeof window === 'undefined') return;
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      options
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, inView] as const;
}
