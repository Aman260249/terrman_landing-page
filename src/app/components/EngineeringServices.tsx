'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import useInView from './hooks/useInView';
import styles from '../styles/EngineeringServices.module.css';

const services = [
  {
    id: '01',
    title: 'Feasibility Studies',
    desc: 'Technical, Financial, and Traffic Viability Analysis to de-risk investments and validate project scope.',
    href: './pagecontent/feasibility-studies',
    tag: 'Analysis · Finance',
  },
  {
    id: '02',
    title: 'Detailed Project Reports',
    desc: 'Flawless Design, Costing, and Regulatory Compliance — the complete execution blueprint.',
    href: './pagecontent/detailedproject',
    tag: 'Design · Compliance',
  },
  {
    id: '03',
    title: 'Highway Supervision',
    desc: 'On-site vigilance guaranteeing quality, safety, and perfect on-time delivery at every milestone.',
    href: './pagecontent/highway-project-supervision',
    tag: 'QA/QC · Safety',
  },
];

const EngineeringServices: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <section ref={ref} className={styles.section}>

      {/* ── BACKGROUND IMAGE ── */}
      <div className={styles.bgImageWrap}>
        <img
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1800&q=80&auto=format"
          alt="Engineering background"
          className={styles.bgImage}
        />
        <div className={styles.bgOverlay} />
      </div>

      {/* dot grid */}
      <div className={styles.dotGrid} />

      <div className={styles.container}>

        {/* ── LEFT — HEADING BLOCK ── */}
        <div className={`${styles.leftBlock} ${inView ? styles.leftVisible : ''}`}>

          <div className={styles.eyebrow}>
            <div className={styles.eyebrowLine} />
            <span className={styles.eyebrowText}>Trusted Since 2016</span>
          </div>

          <h2 className={styles.mainHeading}>
            <span className={styles.headingLight}>Built on</span>
            <span className={styles.headingBold}>Trust.</span>
            <span className={styles.headingAccent}>Delivered with Precision.</span>
          </h2>

          <p className={styles.subHeading}>
            Over 8 years of engineering excellence — every project, every deadline, every promise kept.
          </p>

          {/* accent line */}
          <div className={`${styles.accentLine} ${inView ? styles.accentLineGrow : ''}`} />

          {/* trust badges */}
          <div className={`${styles.badges} ${inView ? styles.badgesVisible : ''}`}>
            {['MoRT&H Approved', 'NHAI Certified', 'ISO Compliant'].map((b, i) => (
              <span
                key={i}
                className={styles.badge}
                style={{ transitionDelay: `${0.7 + i * 0.1}s` }}
              >
                <span className={styles.badgeTick}>✓</span>
                {b}
              </span>
            ))}
          </div>

          {/* floating image card */}
          <div className={`${styles.imgCard} ${inView ? styles.imgCardVisible : ''}`}>
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80&auto=format"
              alt="Terraman site work"
              className={styles.imgCardPhoto}
            />
            <div className={styles.imgCardLabel}>
              <span className={styles.imgCardDot} />
              Active Field Operations
            </div>
          </div>

        </div>

        {/* ── RIGHT — SERVICE ROWS ── */}
        <div className={styles.rightBlock}>

          {/* section counter */}
          <div className={`${styles.rowsMeta} ${inView ? styles.rowsMetaVisible : ''}`}>
            <span className={styles.rowsCount}>03</span>
            <span className={styles.rowsLabel}>Core Services</span>
            <div className={styles.rowsMetaLine} />
          </div>

          <div className={styles.rowsList}>
            {services.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`${styles.row} ${inView ? styles.rowVisible : ''} ${hoveredRow === index ? styles.rowHovered : ''}`}
                style={{ transitionDelay: `${0.2 + index * 0.12}s` }}
                onMouseEnter={() => setHoveredRow(index)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                {/* fill bar from left */}
                <div className={styles.rowFill} />

                {/* number */}
                <div className={styles.rowNum}>{item.id}</div>

                {/* content */}
                <div className={styles.rowContent}>
                  <div className={styles.rowTitleWrap}>
                    <h3 className={styles.rowTitle}>{item.title}</h3>
                    <span className={styles.rowTag}>{item.tag}</span>
                  </div>
                  <p className={styles.rowDesc}>{item.desc}</p>
                </div>

                {/* arrow circle */}
                <div className={styles.circleBtn}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17L17 7M17 7H7M17 7V17"/>
                  </svg>
                </div>

                {/* bottom line */}
                <div className={styles.rowLine} />
              </Link>
            ))}
          </div>

          {/* view all link */}
          <div className={`${styles.viewAll} ${inView ? styles.viewAllVisible : ''}`}>
            <Link href="/services" className={styles.viewAllLink}>
              <span>View All Services</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default EngineeringServices;