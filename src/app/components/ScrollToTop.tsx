'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Force the window to scroll to the very top (0,0)
    window.scrollTo(0, 0);
  }, [pathname]); // Runs every time the URL changes

  return null;
}