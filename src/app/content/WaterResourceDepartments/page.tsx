'use client';

import Image from "next/image";
import styles from './WaterResourceDepartments.module.css';

export default function WaterResourceDepartmentsPage() {
  return (
    <section className={styles.pageWrapper}>
      <div className={styles.card}>

        {/* HEADING */}
        <h1 className={styles.title}>
          Water Resource <br /> Departments
        </h1>

        {/* INTRO TEXT */}
        <p className={styles.intro}>
          Terraman provides essential engineering and consulting services to Water
          Resource Departments for effective water management and conservation
          projects. Our expertise includes detailed design and supervision for
          water supply schemes, irrigation infrastructure, canals, and watershed
          development projects.
        </p>

        {/* IMAGE */}
        <div className={styles.imageBox}>
          <Image
            src="/content-images/dam-bg.jpg"   /* replace with your image */
            alt="Water resource infrastructure"
            fill
            priority
            className={styles.image}
          />
          <div className={styles.imageOverlay} />
        </div>

        {/* BOTTOM TEXT */}
        <p className={styles.bottomText}>
          We conduct hydrological surveys, feasibility analyses, and environmental
          impact assessments to ensure the sustainability and efficiency of water
          infrastructure. Our focus is on providing reliable hydraulic design and
          structural stability for water retention and conveyance systems, crucial
          for agricultural productivity and ensuring potable water supply security
          for communities.
        </p>

      </div>
    </section>
  );
}
