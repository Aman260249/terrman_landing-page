'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/HeroSection.module.css';

const badges = ['Est. 2016', 'MoRT&H Approved', 'Pan India'];

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // slight delay for cinematic entry
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  // subtle parallax on scroll
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className={styles.hero}>

      {/* ── VIDEO BACKGROUND ── */}
      <div className={styles.bgContainer}>
        <video
          autoPlay muted loop playsInline
          className={styles.bgVideo}
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <source
            src="https://res.cloudinary.com/datklzcrj/video/upload/v1774185051/14626346_3840_2160_30fps_ny9ue7.mp4"
            type="video/mp4"
          />
        </video>

        {/* layered overlays */}
        <div className={styles.overlayLeft}   />
        <div className={styles.overlayBottom} />
        <div className={styles.overlayVignette} />
      </div>

      {/* ── GRID TEXTURE ── */}
      <div className={styles.gridLines} />

      {/* ── CONTENT ── */}
      <div className={styles.content}>

        {/* badge row */}
        <div className={`${styles.badgeRow} ${loaded ? styles.badgeRowIn : ''}`}>
          {badges.map((b, i) => (
            <span
              key={i}
              className={styles.badge}
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
            >
              <span className={styles.badgeDot} />
              {b}
            </span>
          ))}
        </div>

        {/* headline — split lines, each animated */}
        <h1 className={styles.headline}>
          <span className={`${styles.hLine} ${loaded ? styles.hLineIn : ''}`} style={{ transitionDelay: '0.3s' }}>
            Engineering
          </span>
          <span className={`${styles.hLine} ${styles.hLineAccent} ${loaded ? styles.hLineIn : ''}`} style={{ transitionDelay: '0.45s' }}>
            Excellence.
          </span>
          <span className={`${styles.hLineSmall} ${loaded ? styles.hLineIn : ''}`} style={{ transitionDelay: '0.6s' }}>
            For <em>India&apos;s</em> Infrastructure Growth
          </span>
        </h1>

        {/* divider line draw */}
        <div className={`${styles.headlineDivider} ${loaded ? styles.headlineDividerGrow : ''}`} />

        {/* subtext */}
        <p className={`${styles.subtext} ${loaded ? styles.subtextIn : ''}`}>
          Delivering Feasibility Studies, DPRs, Bridge Surveys, Traffic Analysis,
          and Turn-key Engineering Solutions since 2016.
        </p>

        {/* CTA buttons */}
        <div className={`${styles.btnGroup} ${loaded ? styles.btnGroupIn : ''}`}>
          <Link href="/#contact">
            <button className={styles.primaryBtn}>
              <span>Request Callback</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M1 9h16M10 2l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </Link>

          <Link href="/#projects">
            <button className={styles.secondaryBtn}>
              <span>View Projects</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M1 9h16M10 2l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </Link>
        </div>

        {/* scroll hint */}
        <div className={`${styles.scrollHint} ${loaded ? styles.scrollHintIn : ''}`}>
          <div className={styles.scrollLine} />
          <span className={styles.scrollText}>Scroll</span>
        </div>

      </div>

      {/* ── BOTTOM RIGHT STATS ── */}
      <div className={`${styles.cornerStats} ${loaded ? styles.cornerStatsIn : ''}`}>
        {[
          { num: '150+', label: 'Projects' },
          { num: '8+',   label: 'Years'    },
          { num: '06',   label: 'Sectors'  },
        ].map((s, i) => (
          <div
            key={i}
            className={styles.cStat}
            style={{ transitionDelay: `${0.9 + i * 0.12}s` }}
          >
            <span className={styles.cStatNum}>{s.num}</span>
            <span className={styles.cStatLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── BOTTOM LEFT TAGLINE ── */}
      <div className={`${styles.bottomTagline} ${loaded ? styles.bottomTaglineIn : ''}`}>
        <span>Terraman Infratech Consultants</span>
        <div className={styles.taglineLine} />
      </div>

    </section>
  );
};

export default HeroSection;