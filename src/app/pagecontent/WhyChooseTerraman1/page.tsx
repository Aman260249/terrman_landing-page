'use client';

import Image from "next/image";
import styles from './WhyChooseTerraman1.module.css';

export default function WhyChooseTerramanPage() {
  return (
    <section className={styles.pageWrapper}>

      {/* SECTION 1 */}
      <div className={`${styles.section} ${styles.fadeUp}`}>
        <div className={styles.textBlock}>
          <span className={styles.rank}>#1</span>
          <h1 className={styles.heading}>Engineering News-Record</h1>

          <ul className={styles.list}>
            <li>Top 500 in Design Firms</li>
            <li>Telecommunications</li>
            <li>Data Centers</li>
          </ul>
        </div>

        <div className={styles.imageBox}>
          <Image
            src="/content-images/10-year-bg.jpeg"
            alt="Engineering worksite"
            fill
            className={styles.image}
            priority
          />
        </div>
      </div>

      {/* SECTION 2 */}
      <div className={`${styles.section} ${styles.fadeUp} ${styles.reverse}`}>
        <div className={styles.imageBox}>
          <Image
            src="/content-images/10-year-bg-2.jpeg"
            alt="Building design"
            fill
            className={styles.image}
          />
        </div>

        <div className={styles.textBlock}>
          <span className={styles.rank}>#1</span>
          <h2 className={styles.subHeading}>
            Building Design + Construction
          </h2>

          <ul className={styles.list}>
            <li>Engineering and Architecture Firm</li>
            <li>Data Center Sector Engineering Firm</li>
          </ul>
        </div>
      </div>

<div className={`${styles.section} ${styles.fadeUp} ${styles.reverse}`}>
        <div className={styles.imageBox}>
          <Image
            src="/content-images/10-year-bg-4.jpeg"
            alt="Building design"
            fill
            className={styles.image}
          />
        </div>

        <div className={styles.textBlock}>
          <span className={styles.rank}>#1</span>
          <h2 className={styles.subHeading}>
            Fortune Magazine
          </h2>

          <ul className={styles.list}>
            <li>• Most Admired Company (Engineering,
   Construction)</li>
            {/* <li>Data Center Sector Engineering Firm</li> */}
          </ul>
        </div>
      </div>
      {/* SECTION 3 */}
      <div className={`${styles.longText} ${styles.fadeUp}`}>
        <h2 className={styles.bigTitle}>
          10+ Years of <span>Excellence</span>
        </h2>

        <p>
          For more than a decade, Terraman Infratech Consultants has delivered
          reliable, data-driven, and engineering-accurate solutions to public
          and private sector clients across India. Since our establishment in
          2015, we have consistently upheld the highest standards of quality
          and technical precision.
        </p>

        <p>
          Our commitment to timely delivery and engineering excellence has
          helped us build long-term partnerships across infrastructure
          development, transportation, and industrial planning. Over the
          years, our expertise has expanded to highways, bridges, traffic
          studies, and turnkey industrial facilities—making us a trusted name
          in the consultancy sector.
        </p>
      </div>

    </section>
  );
}
