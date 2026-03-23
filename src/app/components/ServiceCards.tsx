'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import useInView from './hooks/useInView';
import styles from '../styles/ServiceCards.module.css';

interface ServiceCard {
  id: string;
  title: string;
  subTitle: string;
  href: string;
  tag: string;
}

const services: ServiceCard[] = [
  {
    id: '01',
    title: 'Highway Design & Surveys',
    subTitle: 'Precision planning for national corridors and expressway networks.',
    href: '/services/highway',
    tag: 'Civil · Roads',
  },
  {
    id: '02',
    title: 'Structural & Bridge Engineering',
    subTitle: 'Durable and aesthetic infrastructure solutions for modern needs.',
    href: '/services/structural',
    tag: 'Structural · FEA',
  },
  {
    id: '03',
    title: 'Project Management Consulting',
    subTitle: 'Timely delivery with cost and quality control from start to finish.',
    href: '/services/pmc',
    tag: 'PMC · QA/QC',
  },
  {
    id: '04',
    title: 'Urban Planning & Utilities',
    subTitle: 'Integrated city development and utility modeling for future cities.',
    href: '/services/urban',
    tag: 'Urban · GIS',
  },
  {
    id: '05',
    title: 'Geotechnical Investigations',
    subTitle: 'Detailed ground assessment for reliable and safe foundations.',
    href: '/services/geo',
    tag: 'Geo · Survey',
  },
  {
    id: '06',
    title: 'Advanced BIM Modeling',
    subTitle: 'High-fidelity 3D modeling for accurate multi-team collaboration.',
    href: '/services/bim',
    tag: 'BIM · 3D',
  },
];

const ServiceCards: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.08 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className={styles.section}>

      {/* ── VIDEO BACKGROUND ── */}
      <div className={styles.videoBg}>
        <video autoPlay muted loop playsInline className={styles.bgVideo}>
          <source
            src="https://res.cloudinary.com/datklzcrj/video/upload/v1774184383/13516028_3840_2160_30fps_qvjo7i.mp4"
            type="video/mp4"
          />
        </video>
        <div className={styles.videoOverlay} />
      </div>

      {/* grid texture */}
      <div className={styles.gridLines} />

      <div className={styles.container}>

        {/* ── HEADER ── */}
        <div className={`${styles.header} ${inView ? styles.headerVisible : ''}`}>

          <div className={styles.eyebrow}>
            <div className={styles.eyebrowLine} />
            <span className={styles.eyebrowText}>What We Do</span>
            <div className={styles.eyebrowLine} />
          </div>

          <h2 className={styles.heading}>
            <span className={styles.headingOutline}>CORE</span>
            {' '}
            <span className={styles.headingSolid}>SERVICES</span>
          </h2>

          <p className={styles.headingDesc}>
            Engineering the future with precision, innovation, and proven expertise.
          </p>

          {/* draw line */}
          <div className={`${styles.headingLine} ${inView ? styles.headingLineGrow : ''}`} />
        </div>

        {/* ── SERVICES GRID ── */}
        <div className={styles.grid}>
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className={`${styles.card} ${inView ? styles.cardVisible : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* top bar draw */}
              <div className={styles.cardTopBar} />

              {/* card fill on hover */}
              <div className={styles.cardFill} />

              {/* dot pattern */}
              <div className={styles.cardPattern} />

              {/* ── CARD CONTENT ── */}
              <div className={styles.cardInner}>

                {/* top row — number + tag */}
                <div className={styles.cardTop}>
                  <span className={styles.cardNum}>{service.id}</span>
                  <span className={styles.cardTag}>{service.tag}</span>
                </div>

                {/* title */}
                <h3 className={styles.cardTitle}>{service.title}</h3>

                {/* animated divider */}
                <div className={styles.cardDivider} />

                {/* desc */}
                <p className={styles.cardDesc}>{service.subTitle}</p>

              </div>

              {/* ── CTA ROW ── */}
              <div className={styles.cardCta}>
                <span className={styles.ctaText}>Learn More</span>
                <div className={styles.ctaCircle}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </div>
              </div>

            </Link>
          ))}
        </div>

        {/* ── BOTTOM STRIP ── */}
        <div className={`${styles.bottomStrip} ${inView ? styles.bottomStripVisible : ''}`}>
          <span className={styles.stripCount}>06 Services</span>
          <div className={styles.stripLine} />
          <Link href="/services" className={styles.stripLink}>
            View All Services
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServiceCards;