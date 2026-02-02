'use client';

import Image from 'next/image';
import styles from './HighwaysBridges.module.css';

export default function HighwaysBridgesPage() {
  return (
    <section className={styles.pageWrapper}>
      <div className={styles.card}>

        {/* TITLE */}
        <h1 className={styles.title}>Highways & Bridges</h1>

        {/* INTRO */}
        <p className={styles.intro}>
          Our core expertise is deeply rooted in the transportation sector,
          where we provide end-to-end consulting services for Highways and
          Bridges. Terraman specializes in the preparation of detailed
          Feasibility Studies and exhaustive Detailed Project Reports (DPRs)
          for major national and state highways, flyovers, and complex bridge
          structures.
        </p>

        {/* CONTENT GRID */}
        <div className={styles.contentGrid}>

          {/* IMAGE */}
          <div className={styles.imageBox}>
            <Image
              src="/content-images/high-bg.jpg"
              alt="Highway infrastructure"
              fill
              className={styles.image}
              priority
            />
            <div className={styles.imageOverlay} />
          </div>


          {/* TEXT */}
          <div className={styles.textBlock}>
            <p>
              Utilizing advanced traffic modeling and structural analysis
              software, we ensure optimal alignment design, robust pavement
              specifications, and structural longevity that meet the stringent
              standards of authorities like MoRTH and NHAI.
            </p>

            <p>
              Our team is proficient in all phases, including pre-construction
              surveys, engineering design, and providing rigorous construction
              supervision and project management consultancy (PMC), ensuring
              projects are delivered on time, within budget, and to the
              highest standards of safety and quality.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
