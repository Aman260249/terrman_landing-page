'use client';

import Image from "next/legacy/image";
import styles from './IndustrialCommercial.module.css';

export default function IndustrialCommercialPage() {
  return (
    <section className={styles.pageWrapper}>
      <div className={styles.card}>

        {/* HEADING */}
        <h1 className={styles.title}>
          Industrial & Commercial <br /> Development
        </h1>

        {/* INTRO TEXT */}
        <p className={styles.intro}>
          We offer specialized detailed engineering and project management
          consultancy for large-scale Industrial and Commercial Development.
          This sector includes turn-key engineering for specialized manufacturing
          workshops, multi-story corporate complexes, commercial business parks,
          and logistics hubs.
        </p>

        {/* IMAGE */}
        <div className={styles.imageBox}>
          <Image
            src="/content-images/high_bg_343.jpg" /* replace image */
            alt="Industrial and commercial development"
            fill
            priority
            className={styles.image}
          />
          <div className={styles.imageOverlay} />
        </div>

        {/* BOTTOM TEXT */}
        <p className={styles.bottomText}>
          Our services encompass structural design, foundation engineering,
          utility planning (HVAC, fire safety, electrical), and site planning
          to ensure optimal functional flow and swift project completion.
          We emphasize designs that are compliant with industrial safety codes,
          energy-efficient, and engineered for the specific operational demands
          of the client’s commercial or manufacturing processes.
        </p>

      </div>
    </section>
  );
}
