'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import styles from '../styles/Navbar.module.css';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/#services' },
  { name: 'Careers', href: '/careers' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`${styles.navbar} ${styles.loaded}`}>
      
      {/* LOGO */}
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/images/logo_44.png"
            alt="Terraman logo"
            width={160}
            height={50}
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        </Link>
      </div>

      {/* NAV LINKS */}
      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={styles.navItem}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* MOBILE MENU BUTTON */}
      <button
        className={styles.menuToggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? '✕' : '☰'}
      </button>
    </nav>
  );
};

export default Navbar;
