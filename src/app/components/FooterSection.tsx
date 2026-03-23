'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/FooterSection.module.css';

const IconMap = {
  Email: (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  Phone: (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-4.71-4.71 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.08 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  Location: (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
    </svg>
  ),
  Instagram: (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
  LinkedIn: (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  X: (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l16 16M4 20L20 4"/>
    </svg>
  ),
  ArrowUp: (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19V5M5 12l7-7 7 7"/>
    </svg>
  ),
};

const companyLinks = [
  { label: 'Home',    href: '/'         },
  { label: 'About',   href: '/about'    },
  { label: 'Careers', href: '/careers'  },
  { label: 'Contact', href: '/#contact' },
];

const serviceLinks = [
  { label: 'Structural Design',     href: '/services/structural'  },
  { label: 'Land Surveying',        href: '/services/survey'      },
  { label: 'Project Management',    href: '/services/pmc'         },
  { label: 'Urban Planning',        href: '/services/urban'       },
  { label: 'Highway Design',        href: '/services/highway'     },
  { label: 'BIM Modeling',          href: '/services/bim'         },
];

const contactDetails = [
  { Icon: IconMap.Phone,    value: '+91 9893369133'  },
  { Icon: IconMap.Email,    value: 'info@terraman.in' },
  { Icon: IconMap.Location, value: 'New Delhi, India'  },
];

const FooterSection: React.FC = () => {
  const year = new Date().getFullYear();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className={styles.footer}>

      {/* ── TOP BAND ── */}
      <div className={styles.topBand}>
        <div className={styles.topBandInner}>
          <span className={styles.topBandText}>
            Ready to start your next infrastructure project?
          </span>
          <Link href="/#contact" className={styles.topBandBtn}>
            <span>Get In Touch</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* ── MAIN FOOTER ── */}
      <div className={styles.main}>
        <div className={styles.mainInner}>

          {/* ── BRAND COL ── */}
          <div className={styles.brandCol}>

            {/* logo */}
            <div className={styles.logoWrap}>
              <Image
                src="/images/logo_com.png"
                alt="Terraman Infratech Consultants"
                width={220}
                height={52}
                style={{ width: 'auto', height: 'auto', maxWidth: '220px' }}
                priority
              />
            </div>

            <p className={styles.tagline}>
              Engineering the foundations of tomorrow. We combine traditional civil expertise with cutting-edge technology to deliver precision, speed, and sustainability.
            </p>

            {/* social icons */}
            <div className={styles.socials}>
              {[
                { Icon: IconMap.Instagram, label: 'Instagram', href: '#' },
                { Icon: IconMap.LinkedIn,  label: 'LinkedIn',  href: '#' },
                { Icon: IconMap.X,         label: 'X',         href: '#' },
              ].map(({ Icon, label, href }) => (
                <a key={label} href={href} className={styles.socialBtn} aria-label={label}>
                  <Icon className={styles.socialIcon} />
                </a>
              ))}
            </div>

            {/* certifications */}
            <div className={styles.certs}>
              {['MoRT&H', 'NHAI', 'ISO'].map(c => (
                <span key={c} className={styles.cert}>{c}</span>
              ))}
            </div>

          </div>

          {/* ── LINKS ── */}
          <div className={styles.linksWrap}>

            {/* Company */}
            <div className={styles.linkCol}>
              <div className={styles.colHeader}>
                <span className={styles.colTitle}>Company</span>
                <div className={styles.colLine} />
              </div>
              {companyLinks.map(l => (
                <Link key={l.label} href={l.href} className={styles.link}>
                  <span className={styles.linkDot} />
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Services */}
            <div className={styles.linkCol}>
              <div className={styles.colHeader}>
                <span className={styles.colTitle}>Services</span>
                <div className={styles.colLine} />
              </div>
              {serviceLinks.map(l => (
                <Link key={l.label} href={l.href} className={styles.link}>
                  <span className={styles.linkDot} />
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Connect */}
            <div className={styles.linkCol}>
              <div className={styles.colHeader}>
                <span className={styles.colTitle}>Connect</span>
                <div className={styles.colLine} />
              </div>
              {contactDetails.map(({ Icon, value }, i) => (
                <div key={i} className={styles.contactItem}>
                  <div className={styles.contactIconBox}>
                    <Icon className={styles.contactIcon} />
                  </div>
                  <span className={styles.contactVal}>{value}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ── COPYRIGHT BAR ── */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>

          <p className={styles.copyright}>
            © {year} Terraman Infratech Consultants · All Rights Reserved
          </p>

          <div className={styles.bottomLinks}>
            <Link href="/privacy" className={styles.bottomLink}>Privacy Policy</Link>
            <span className={styles.bottomDot} />
            <Link href="/terms"   className={styles.bottomLink}>Terms of Use</Link>
          </div>

          {/* scroll to top */}
          <button className={styles.scrollTop} onClick={scrollTop} aria-label="Scroll to top">
            <IconMap.ArrowUp className={styles.scrollTopIcon} />
          </button>

        </div>
      </div>

    </footer>
  );
};

export default FooterSection;