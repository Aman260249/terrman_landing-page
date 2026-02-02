'use client';

import Image from 'next/image';
import styles from './railways.module.css';

export default function RailwaysPage() {
  return (
    <section className={styles.pageWrapper}>
      <div className={styles.card}>

        {/* HEADING */}
        <h1 className={styles.title}>Railways</h1>

        {/* INTRO TEXT */}
        <p className={styles.intro}>
         Terraman possesses specialized capabilities within the rapidly modernizing Railways sector, contributing to the development of efficient and reliable rail infrastructure. We offer consultancy services focused on detailed engineering for railway sidings, yard layouts, and associated infrastructure projects. Our scope includes topographical and alignment surveys, design of earthwork and formations, and specialized structural design for overpasses, underpasses, and ancillary structures .
        </p>

        {/* IMAGE */}
        <div className={styles.imageBox}>
          <Image
            src="/content-images/rail-bg.jpg"
            alt="Railway infrastructure"
            fill
            priority
            className={styles.image}
          />
          <div className={styles.imageOverlay} />
        </div>

        {/* BOTTOM TEXT */}
        <p className={styles.bottomText}>
           By integrating our knowledge of signaling requirements and track stability, we deliver optimized engineering solutions that support increased line capacity, operational safety, and speed improvements, aligning with national expansion goals and technological advancements in the railway network.
        </p>

      </div>
    </section>
  );
}
