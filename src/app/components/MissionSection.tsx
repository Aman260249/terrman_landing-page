'use client';
import { useState } from 'react';
import useInView from './hooks/useInView';
import styles from '../styles/MissionSection.module.css';

const missionPoints = [
  {
    label: '01',
    title: 'Quality Solutions',
    text: 'Delivering high-quality and reliable engineering solutions consistently across multiple sectors and scales.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="2" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: '02',
    title: 'Latest Technology',
    text: 'Adopting cutting-edge technologies like LiDAR, drone mapping, GIS, BIM, and advanced digital modelling tools.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="4" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M11 2v2M11 18v2M2 11h2M18 11h2M4.9 4.9l1.4 1.4M15.7 15.7l1.4 1.4M4.9 17.1l1.4-1.4M15.7 6.3l1.4-1.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: '03',
    title: 'Ethical Practices',
    text: 'Maintaining transparent communication and upholding the highest ethical work standards on every project.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L3 6v7c0 5 3.6 9 8 10 4.4-1 8-5 8-10V6L11 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M8 11l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: '04',
    title: 'Client Relationships',
    text: 'Strengthening trust through consistent performance, proactive communication, and guaranteed on-time delivery.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="8" cy="7" r="3" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="15" cy="7" r="3" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M2 19c0-3.3 2.7-6 6-6M11 19c0-3.3 2.7-6 6-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: '05',
    title: 'Sustainable Design',
    text: 'Creating value-driven designs that perfectly balance cost, quality, and long-term environmental sustainability.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3C7 3 4 7 4 11c0 2 .8 3.8 2 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M11 3c4 0 7 4 7 8 0 2-.8 3.8-2 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M8 19c1-2 2-5 3-8M14 19c-1-2-2-5-3-8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function MissionSection() {
  const [visionRef, visionInView] = useInView({ threshold: 0.15 });
  const [missionRef, missionInView] = useInView({ threshold: 0.08 });
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <>
      {/* ══════════════════════════════════
          VISION BLOCK — full-width dark
      ══════════════════════════════════ */}
      <section ref={visionRef} className={styles.visionSection}>

        {/* grid texture */}
        <div className={styles.visionGrid} />

        {/* ambient glow */}
        <div className={styles.visionGlow} />

        <div className={styles.visionInner}>

          {/* eyebrow */}
          <div className={`${styles.eyebrow} ${visionInView ? styles.eyebrowVisible : ''}`}>
            <div className={styles.eyebrowDot} />
            <span className={styles.eyebrowText}>Our Vision</span>
            <div className={styles.eyebrowDot} />
          </div>

          {/* big quote */}
          <blockquote className={`${styles.visionQuote} ${visionInView ? styles.visionQuoteVisible : ''}`}>
            <span className={styles.quoteMark}>"</span>
            Stepping into{' '}
            <em>Evolution</em>{' '}
            catalyses a{' '}
            <em>Paradigm Shift</em>{' '}
            fuelled by strategic{' '}
            <em>Brilliance</em>{' '}
            and fearless{' '}
            <em>Execution</em>
          </blockquote>

          {/* animated underline */}
          <div className={`${styles.visionLine} ${visionInView ? styles.visionLineGrow : ''}`} />

          {/* bottom stat row */}
          <div className={`${styles.visionStats} ${visionInView ? styles.visionStatsVisible : ''}`}>
            <div className={styles.vStat}>
              <span className={styles.vStatNum}>2016</span>
              <span className={styles.vStatLabel}>Founded</span>
            </div>
            <div className={styles.vStatBar} />
            <div className={styles.vStat}>
              <span className={styles.vStatNum}>150<em>+</em></span>
              <span className={styles.vStatLabel}>Projects</span>
            </div>
            <div className={styles.vStatBar} />
            <div className={styles.vStat}>
              <span className={styles.vStatNum}>06</span>
              <span className={styles.vStatLabel}>Core Sectors</span>
            </div>
            <div className={styles.vStatBar} />
            <div className={styles.vStat}>
              <span className={styles.vStatNum}>Pan</span>
              <span className={styles.vStatLabel}>India Presence</span>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════
          MISSION BLOCK — light bg
      ══════════════════════════════════ */}
      <section ref={missionRef} className={styles.missionSection}>

        {/* dot pattern */}
        <div className={styles.dotGrid} />

        <div className={styles.missionInner}>

          {/* header — left aligned */}
          <div className={`${styles.missionHeader} ${missionInView ? styles.missionHeaderVisible : ''}`}>
            <div className={styles.mEyebrow}>
              <div className={styles.mEyebrowLine} />
              <span className={styles.mEyebrowText}>Five Pillars</span>
            </div>
            <h2 className={styles.missionHeading}>
              Our <span>Mission</span>
            </h2>
            <p className={styles.missionSub}>
              Every decision, every design, every delivery — guided by five core principles.
            </p>
          </div>

          {/* HORIZONTAL SCROLL CARDS on mobile, grid on desktop */}
          <div className={styles.cardsWrap}>
            {missionPoints.map((point, index) => (
              <div
                key={index}
                className={`
                  ${styles.mCard}
                  ${missionInView ? styles.mCardVisible : ''}
                  ${activeCard === index ? styles.mCardActive : ''}
                `}
                style={{ transitionDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* top bar draw */}
                <div className={styles.mCardBar} />

                {/* icon + number row */}
                <div className={styles.mCardTop}>
                  <div className={styles.mCardIcon}>{point.icon}</div>
                  <span className={styles.mCardNum}>{point.label}</span>
                </div>

                {/* divider */}
                <div className={styles.mCardDivider} />

                {/* text */}
                <h4 className={styles.mCardTitle}>{point.title}</h4>
                <p className={styles.mCardDesc}>{point.text}</p>

                {/* progress bar */}
                <div className={styles.mCardProgress}>
                  <div className={styles.mCardProgressFill} />
                </div>

                {/* watermark */}
                <span className={styles.mCardWatermark}>{point.label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}