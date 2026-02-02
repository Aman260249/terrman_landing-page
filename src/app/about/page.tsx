'use client';

import useInView from '../components/hooks/useInView';
import styles from './about.module.css';

export default function AboutPage() {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <section
      ref={ref}
      className={`${styles.section} ${inView ? styles.show : ''}`}
    >
      <div className={styles.container}>
        {/* ===== LEFT CONTENT ===== */}
        <div className={styles.textBlock}>
          <span className={styles.smallTitle}>introduction</span>

          <h1 className={styles.heading}>
            The Architects of Reliability
            <span>Who We Are</span>
          </h1>

          <p className={styles.paragraph}>
            Terraman started as a small consultancy in Mumbai and has grown into a
            premier civil engineering firm. We believe in the power of
            data-driven construction and precision-led decision making.
          </p>

          <p className={styles.paragraphMuted}>
            Our mission is to build infrastructure that withstands the test of
            time while minimizing environmental impact. We integrate AI modeling
            and sustainable materials into every blueprint we draft—ensuring
            performance, longevity, and accountability at scale.
          </p>
        </div>

        {/* ===== RIGHT VISUAL ===== */}
        <div className={styles.imageBlock}>
          <div className={styles.imageOverlay} />
        </div>
      </div>
    </section>
  );
}
