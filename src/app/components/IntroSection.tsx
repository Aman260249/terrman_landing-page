'use client';

import Image from 'next/image';
import useInView from './hooks/useInView';
import styles from '../styles/IntroSection.module.css';

export default function IntroSection() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className={`${styles.section} ${inView ? styles.show : ''}`}
    >
      {/* ================= PART 1 ================= */}
      <div className={styles.row}>
        <div className={styles.textBlock}>
          <span className={styles.smallTitle}>introduction</span>
          <h2 className={styles.heading}>Company overview</h2>

          <p className={styles.paragraph}>
            We combine engineering expertise with modern technology to prepare
            accurate surveys, optimized designs, and high-quality project
            documentation. Our team includes highway engineers, architects,
            structural experts, geotechnical specialists, GIS analysts, and
            project management professionals who ensure seamless execution of
            every assignment.
          </p>
        </div>

        <div className={styles.imageBox}>
          <Image
            src="/images/company-bg.jpg"
            alt="Company Overview"
            fill
            className={styles.image}
          />
        </div>
      </div>

      {/* ================= PART 2 ================= */}
      <div className={`${styles.row} ${styles.reverse}`}>
        <div className={styles.imageBox}>
          <Image
            src="/images/into-2.jpg"
            alt="Terraman Work"
            fill
            className={styles.image}
          />
        </div>

        <div className={styles.textBlock}>
          <p className={styles.paragraphMuted}>
            Terraman Infratech Consultants is a professional engineering
            consultancy firm providing end-to-end solutions for transportation,
            urban development, buildings, and water resource projects. Since
            2016, we have delivered technically sound, economical, and
            well-coordinated engineering services to government bodies,
            infrastructure agencies, and private developers.
          </p>
        </div>
      </div>

      {/* ================= PART 3 ================= */}
     {/* ================= PART 3 ================= */}
<div className={styles.factsWrapper}>
  {/* OUTER GRADIENT BORDER */}
  <div className={styles.factsBorder}>

    {/* INNER DARK BOX */}
    <div className={styles.factsBox}>
      <div className={styles.factsLeft}>
        <span className={styles.factsTitle}>COMPANY FACTS</span>
        <span className={styles.factsYear}>2015</span>
        <span className={styles.factsSince}>Since</span>
      </div>

      <div className={styles.factsRight}>
        <p className={styles.gradientText}>
          Terraman&apos;s philosophy is simple – design responsibly, deliver
          accurately, and build trust with every project
        </p>
      </div>
    </div>

  </div>
</div>

    </section>
  );
}
