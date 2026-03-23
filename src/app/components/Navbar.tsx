'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from '../styles/Navbar.module.css';

const navItems = [
  { name: 'Home',     href: '/'         },
  { name: 'Services', href: '/#services' },
  { name: 'About',    href: '/about'    },
  { name: 'Careers',  href: '/careers'  },
  { name: 'Blog',     href: '/blog'     },
  { name: 'Contact',  href: '/#contact' },
];

const Navbar = () => {
  const [isOpen,    setIsOpen]    = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const [mounted,   setMounted]   = useState(false);
  const pathname = usePathname();

  // mount animation
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  // scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // close menu on route change
  useEffect(() => { setIsOpen(false); }, [pathname]);

  return (
    <>
      <nav className={`
        ${styles.navbar}
        ${mounted  ? styles.mounted  : ''}
        ${scrolled ? styles.scrolled : ''}
      `}>

        {/* ── LOGO ── */}
        <Link href="/" className={styles.logoLink} onClick={() => setIsOpen(false)}>
          <div className={styles.logoWrap}>
            <Image
              src="/images/logo_44.png"
              alt="Terraman Infratech Consultants"
              width={160}
              height={50}
              className={styles.logoImg}
              style={{ width: 'auto', height: 'auto' }}
              priority
            />
          </div>
        </Link>

        {/* ── DESKTOP NAV ── */}
        <ul className={styles.desktopLinks}>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`${styles.navItem} ${pathname === item.href ? styles.active : ''}`}
              >
                {item.name}
                <span className={styles.navUnderline} />
              </Link>
            </li>
          ))}
        </ul>

        {/* ── CTA + BURGER ── */}
        <div className={styles.rightGroup}>
          <Link href="/#contact" className={styles.ctaBtn}>
            Get in Touch
          </Link>

          <button
            className={`${styles.burger} ${isOpen ? styles.burgerOpen : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
          </button>
        </div>
      </nav>

      {/* ── MOBILE MENU OVERLAY ── */}
      <div
        className={`${styles.mobileOverlay} ${isOpen ? styles.mobileOverlayOpen : ''}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* ── MOBILE DRAWER ── */}
      <div className={`${styles.mobileDrawer} ${isOpen ? styles.mobileDrawerOpen : ''}`}>

        {/* drawer header */}
        <div className={styles.drawerHeader}>
          <Link href="/" className={styles.drawerLogoLink} onClick={() => setIsOpen(false)}>
            <div className={styles.drawerLogoWrap}>
              <Image
                src="/images/logo_44.png"
                alt="Terraman"
                width={140}
                height={44}
                className={styles.drawerLogoImg}
                style={{ width: 'auto', height: 'auto' }}
                priority
              />
            </div>
          </Link>
          <button
            className={styles.drawerClose}
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* drawer links */}
        <nav className={styles.drawerNav}>
          {navItems.map((item, i) => (
            <Link
              key={item.name}
              href={item.href}
              className={`${styles.drawerLink} ${isOpen ? styles.drawerLinkVisible : ''}`}
              style={{ transitionDelay: `${0.05 + i * 0.07}s` }}
              onClick={() => setIsOpen(false)}
            >
              <span className={styles.drawerLinkNum}>0{i + 1}</span>
              <span className={styles.drawerLinkName}>{item.name}</span>
              <svg className={styles.drawerArrow} width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          ))}
        </nav>

        {/* drawer footer */}
        <div className={styles.drawerFooter}>
          <Link href="/#contact" className={styles.drawerCta} onClick={() => setIsOpen(false)}>
            <span>Get In Touch</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <p className={styles.drawerContact}>+91 9893369133 · info@terraman.in</p>
        </div>

      </div>
    </>
  );
};

export default Navbar;