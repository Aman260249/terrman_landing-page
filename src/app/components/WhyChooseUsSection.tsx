'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import useInView from './hooks/useInView';
import styles from '../styles/WhyChooseUsSection.module.css';

const features = [
  {
    id: '01',
    title: '10+ Years of Excellence',
    subTitle: 'Delivering high-quality engineering solutions with proven expertise across India.',
    href: '/pagecontent/WhyChooseTerraman1',
    tag: 'Experience',
    metric: '10+',
    metricLabel: 'Years Active',
  },
  {
    id: '02',
    title: 'MoRT&H NHAI Approved',
    subTitle: 'Certified expertise in national highway standards and regulatory approvals.',
    href: '/pagecontent/morth&nhai',
    tag: 'Certified',
    metric: '100%',
    metricLabel: 'Compliance',
  },
  {
    id: '03',
    title: 'Multi-disciplinary Team',
    subTitle: 'Seamless collaboration across engineering domains for complete end-to-end solutions.',
    href: '/pagecontent/multidisciplinary',
    tag: 'Team',
    metric: '50+',
    metricLabel: 'Experts',
  },
];

export default function WhyChooseUsSection() {
  const [ref, inView] = useInView({ threshold: 0.15 });
  const [active, setActive] = useState<number | null>(null);

  return (
    <section ref={ref} className={styles.section}>

      {/* HEADER */}
      <div className={`${styles.header} ${inView ? styles.headerVisible : ''}`}>
        <div className={styles.eyebrow}>
          <div className={styles.eyebrowLine} />
          <span className={styles.eyebrowText}>Why Choose</span>
          <div className={styles.eyebrowLine} />
        </div>

        <h2 className={styles.heading}>
          WHY CHOOSE <span>TERRAMAN</span>
        </h2>

        <p className={styles.subheading}>
          Built on precision, fueled by experience — delivering infrastructure excellence.
        </p>
      </div>

      {/* CARDS */}
      <div className={styles.grid}>
        {features.map((card, index) => (
          <div
            key={index}
            className={`
              ${styles.card}
              ${styles[`card${index + 1}`]}
              ${inView ? styles.cardVisible : ''}
              ${active === index ? styles.active : ''}
            `}
            style={{ transitionDelay: `${index * 0.15}s` }}
            onClick={() => setActive(active === index ? null : index)}
          >
            <div className={styles.cardTopBar} />

            <div className={styles.cardMeta}>
              <span className={styles.number}>{card.id}</span>
              <span className={styles.tag}>{card.tag}</span>
            </div>

            <div className={styles.metric}>
              <span className={styles.metricNum}>{card.metric}</span>
              <span className={styles.metricLabel}>{card.metricLabel}</span>
            </div>

            <div className={styles.divider} />

            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDesc}>{card.subTitle}</p>

            <Link
              href={card.href}
              className={styles.btn}
              onClick={e => e.stopPropagation()}
            >
              <span>Explore</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M1 8h14M9 2l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <span className={styles.watermark}>{card.id}</span>
          </div>
        ))}
      </div>

      {/* BOTTOM STRIP */}
      <div className={`${styles.bottomStrip} ${inView ? styles.bottomStripVisible : ''}`}>
        <span>Precision</span>
        <div className={styles.stripDot} />
        <span>Innovation</span>
        <div className={styles.stripDot} />
        <span>Excellence</span>
      </div>

    </section>
  );
}