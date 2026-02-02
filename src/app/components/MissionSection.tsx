'use client';

import useInView from './hooks/useInView';
import styles from '../styles/MissionSection.module.css';

export default function MissionSection() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className={styles.section}>
      <h2 className={styles.heading}>VISION & MISSION</h2>

      <div className={`${styles.card} ${inView ? styles.show : ''}`}>
        
        {/* VISION */}
        <div className={styles.block}>
          <h3 className={styles.title}>VISION</h3>
          <p>
            To become a nationally recognized engineering consultancy known for
            innovative thinking, precision-driven engineering, and sustainable
            infrastructure solutions.
          </p>
        </div>

        {/* MISSION */}
        <div className={styles.block}>
          <h3 className={styles.title}>MISSION</h3>

          <ul className={styles.list}>
            <li>To deliver high-quality and reliable engineering solutions across multiple sectors.</li>
            <li>To adopt the latest technologies such as LiDAR, drone mapping, GIS, BIM, and digital modelling.</li>
            <li>To maintain transparent communication and ethical work practices.</li>
            <li>To strengthen client relationships through consistent performance and on-time delivery.</li>
            <li>To create value-driven designs that balance cost, quality, and sustainability.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
