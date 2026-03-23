'use client';
import React, { useState } from 'react';
import useInView from './hooks/useInView';
import styles from '../styles/OurApproach.module.css';

const coreValues = [
  {
    num: '01',
    title: 'Advanced Engineering',
    description: 'Utilizing BIM and advanced software for detailed engineering, ensuring cost-effectiveness and structural integrity across every project phase.',
    tag: 'BIM · CAD · 3D',
  },
  {
    num: '02',
    title: 'Detailed Scoping',
    description: 'Comprehensive studies, traffic surveys, and risk analysis to establish a solid, well-defined project base before execution begins.',
    tag: 'Survey · Analysis',
  },
  {
    num: '03',
    title: 'Supervision & QA/QC',
    description: 'On-site supervision and rigorous quality assurance processes to consistently meet MoRT&H and NHAI standards on every deliverable.',
    tag: 'MoRT&H · NHAI',
  },
  {
    num: '04',
    title: 'Handover & Docs',
    description: 'Complete, transparent documentation and client training ensuring a smooth, confident project closure with zero loose ends.',
    tag: 'Docs · Training',
  },
];

const OurApproach: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.15 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section ref={ref} className={styles.section}>

      {/* VIDEO BACKGROUND */}
      <div className={styles.videoWrapper}>
        <video autoPlay muted loop playsInline>
          <source
            src="https://res.cloudinary.com/datklzcrj/video/upload/v1774184383/13516028_3840_2160_30fps_qvjo7i.mp4"
            type="video/mp4"
          />
        </video>
        <div className={styles.overlay} />
      </div>

      {/* NOISE TEXTURE LAYER */}
      <div className={styles.noise} />

      <div className={styles.container}>

        {/* ── LEFT ── */}
        <div className={`${styles.left} ${inView ? styles.leftVisible : ''}`}>

          {/* eyebrow */}
          <div className={styles.eyebrow}>
            <div className={styles.eyebrowDot} />
            <span className={styles.eyebrowText}>Our Methodology</span>
          </div>

          {/* big heading */}
          <h2 className={styles.heading}>
            <span className={styles.headingLine1}>OUR</span>
            <span className={styles.headingLine2}>APPROACH</span>
          </h2>

          {/* desc */}
          <p className={styles.text}>
            Every project is sharpened through rigorous review, strict quality checks,
            and seamless collaboration — from first brief to final handover.
          </p>

          {/* animated line */}
          <div className={`${styles.accentLine} ${inView ? styles.accentLineGrow : ''}`} />

          {/* step counter */}
          <div className={styles.stepCounter}>
            <span className={styles.stepNum}>04</span>
            <span className={styles.stepLabel}>Core Phases</span>
          </div>

        </div>

        {/* ── RIGHT — CARDS ── */}
        <div className={styles.right}>
          {coreValues.map((item, index) => (
            <div
              key={index}
              className={`${styles.card} ${inView ? styles.cardVisible : ''} ${hoveredCard === index ? styles.cardHovered : ''}`}
              style={{ transitionDelay: `${index * 0.12}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* left fill bar */}
              <div className={styles.cardFill} />

              {/* number col */}
              <div className={styles.numCol}>
                <span className={styles.number}>{item.num}</span>
                <div className={styles.numLine} />
              </div>

              {/* content */}
              <div className={styles.cardContent}>
                <div className={styles.cardTop}>
                  <h4 className={styles.cardTitle}>{item.title}</h4>
                  <span className={styles.cardTag}>{item.tag}</span>
                </div>
                <p className={styles.cardDesc}>{item.description}</p>

                {/* progress bar — animates on hover */}
                <div className={styles.progressBar}>
                  <div className={styles.progressFill} />
                </div>
              </div>

              {/* arrow */}
              <div className={styles.cardArrow}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M1 9h16M10 2l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurApproach;