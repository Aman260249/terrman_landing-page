// components/FooterSection.tsx - CORRECTED
'use client';
import React from 'react';
import Image from "next/image";
import styles from '../styles/FooterSection.module.css';

// Reusing icons from the Contact Form for consistency
const IconMap = {
    Email: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    Phone: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-4.71-4.71 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.08 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
    Website: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
    Instagram: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>,
    LinkedIn: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
    X: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1C10.74 9.42 7.5 7.7 4.7 4.19 3.5 6.02 4.02 8.76 5.5 10.12a4.4 4.4 0 0 1-2.9-1.4V10c0 1.95 1.4 3.56 3.24 3.96-.68.18-1.44.24-2.2.08.5 1.5 1.8 2.5 3.16 2.5a9 9 0 0 1-5.64 1.96 11.1 11.1 0 0 0 6 1.74c7.6 0 11.8-6.6 11.8-12.2A12.33 12.33 0 0 0 23 3z"/></svg>,
};

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContentWrapper}>

        {/* --- BRAND COLUMN (LOGO ONLY) --- */}
        <div className={styles.brandColumn}>
          <div className={styles.logoWrapper}>
            <Image
              src="/images/logo_com.png"   /* 🔁 YOUR PNG LOGO PATH */
              alt="Terraman Logo"
              width={250}
              height={56}
              style={{ width: 'auto', height: 'auto' }}
              priority
            />
          </div>

          <p className={styles.tagline}>
            Engineering the foundations of tomorrow. We combine traditional civil expertise with modern AI technology to deliver precision, speed, and sustainability.
          </p>

          <div className={styles.socialIcons}>
            <a href="#"><IconMap.Instagram className={styles.socialIcon} /></a>
            <a href="#"><IconMap.LinkedIn className={styles.socialIcon} /></a>
            <a href="#"><IconMap.X className={styles.socialIcon} /></a>
          </div>
        </div>

        {/* --- LINKS GRID (UNCHANGED) --- */}
        <div className={styles.linksGrid}>
          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>COMPANY</h4>
            <a href="/" className={styles.link}>Home</a>
            <a href="/about" className={styles.link}>About</a>
            <a href="/careers" className={styles.link}>Careers</a>
            <a href="/#contact" className={styles.link}>Contact</a>
          </div>

          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>SERVICES</h4>
            <a className={styles.link}>Structural Design</a>
            <a className={styles.link}>Land Surveying</a>
            <a className={styles.link}>Project Management</a>
            <a className={styles.link}>Urban Planning</a>
          </div>

          <div className={styles.linkColumn}>
            <h4 className={styles.columnTitle}>CONNECT</h4>

            <div className={styles.connectItem}>
              <IconMap.Phone className={styles.connectIcon} />
              <p className={styles.connectDetail}>+91 9893369133</p>
            </div>

            <div className={styles.connectItem}>
              <IconMap.Email className={styles.connectIcon} />
              <p className={styles.connectDetail}>info@terraman.in</p>
            </div>

            <div className={styles.connectItem}>
              <IconMap.Website className={styles.connectIcon} />
              <p className={styles.connectDetail}>terraman.in</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copyrightBar}>
        <p className={styles.copyrightText}>
          © {currentYear} Terraman Infratech Consultants — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
