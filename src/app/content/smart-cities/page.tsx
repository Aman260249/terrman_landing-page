'use client';

import Image from 'next/image';
import styles from './smart-cities.module.css';

export default function SmartCitiesPage() {
  return (
    <section className={styles.pageWrapper}>
      <div className={styles.card}>

        {/* HEADING */}
        <h1 className={styles.title}>Smart Cities</h1>

        {/* IMAGE */}
        <div className={styles.imageBox}>
          <Image
            src="/content-images/smart-cities.jpg"   /* replace with your image */
            alt="Smart city infrastructure"
            fill
            priority
            className={styles.image}
          />
          <div className={styles.imageOverlay} />
        </div>

        {/* CONTENT */}
        <p className={styles.contentText}>
          As consultants dedicated to innovation, we are at the forefront of the
          Smart Cities initiative, delivering integrated solutions that leverage
          technology to improve efficiency and governance. Our role involves
          detailed engineering for intelligent infrastructure components, including
          smart mobility solutions, utility networks, and integrated command and
          control centers (ICCCs).
        </p>

        <p className={styles.contentText}>
          We help clients define the optimal technological stack, prepare detailed
          implementation strategies, and manage the deployment of sensor networks
          and data platforms, translating digital visions into tangible, operational
          urban assets that enhance public services, energy efficiency, and security.
        </p>

      </div>
    </section>
  );
}
