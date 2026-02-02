'use client';

import useInView from './hooks/useInView';
import styles from '../styles/TechnologySection.module.css';

const technologyTools = [
  {
    title: 'AutoCAD, Civil 3D, MX Roads',
    description:
      'The cornerstone of our civil design process, utilizing Civil 3D for dynamic modeling of surfaces, corridors, pipe networks, and grading.',
  },
  {
    title: 'BIM & 3D Modeling',
    description:
      'Creating intelligent 3D models to enable clash detection, coordination, and lifecycle optimization.',
  },
  {
    title: 'STAAD Pro, MIDAS',
    description:
      'Advanced finite element tools used for rigorous structural verification under multiple load scenarios.',
  },
  {
    title: 'LiDAR & Drone Survey',
    description:
      'High-resolution aerial and terrestrial data collection ensuring millimeter-level site accuracy.',
  },
  {
    title: 'GIS & Spatial Analytics',
    description:
      'ArcGIS and QGIS based spatial analysis for informed planning, routing, and environmental assessment.',
  },
  {
    title: 'Traffic Modeling Tools',
    description:
      'VISSIM and Synchro simulations for traffic flow optimization and smart city transport planning.',
  },
];

export default function TechnologySection() {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <section ref={ref} className={styles.section}>
      {/* BACKGROUND IMAGE */}
      <div className={styles.bgImage} />

      {/* HEADER */}
      <div className={styles.header}>
        <h2 className={styles.title}>TECHNOLOGY</h2>
        <p className={styles.subtitle}>
          Strength — tools & workflows that deliver accurate, fast, optimized
          engineering outcomes.
        </p>
      </div>

      {/* GRID */}
      <div className={`${styles.grid} ${inView ? styles.show : ''}`}>
        {technologyTools.map((tool, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <h3>{tool.title}</h3>
            <p>{tool.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
