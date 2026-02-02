'use client';

import Image from 'next/image';
import styles from './urbanlocal.module.css';

export default function UrbanLocalBodiesPage() {
  return (
    <section className={styles.pageWrapper}>
      <div className={styles.card}>

        {/* HEADING */}
        <h1 className={styles.title}>Urban Local Bodies</h1>

        {/* INTRO */}
        <p className={styles.intro}>
          We actively partner with Urban Local Bodies (ULBs) to enhance municipal infrastructure and improve urban living standards. Our services are critical in developing sustainable and manageable urban environments, focusing on comprehensive planning for urban roads, storm water drainage systems, solid waste management facilities, and public utilities. We assist ULBs in conducting condition assessments, formulating master plans, and providing project management support for urban renewal and connectivity projects . 
        </p>

        {/* IMAGE */}
        <div className={styles.imageBox}>
          <Image
            src="/content-images/urban-bg.jpg"   /* replace with your image */
            alt="Urban infrastructure planning"
            fill
            priority
            className={styles.image}
          />
          <div className={styles.imageOverlay} />
        </div>

        {/* BOTTOM TEXT */}
        <p className={styles.bottomText}>
          Our consultancy ensures compliance with local governance requirements and focuses on solutions that are resilient, scalable, and responsive to the demographic and environmental pressures of modern cities.
        </p>

      </div>
    </section>
  );
}
