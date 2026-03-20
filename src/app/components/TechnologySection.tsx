'use client';
import useInView from './hooks/useInView';
import styles from '../styles/TechnologySection.module.css';

const technologyTools = [
  {
    num: '01',
    title: 'AutoCAD, Civil 3D, MX Roads',
    description: 'Cornerstone of our civil design process, utilizing Civil 3D for dynamic modeling of surfaces, corridors, and grading.'
  },
  {
    num: '02',
    title: 'BIM & 3D Modeling',
    description: 'Creating intelligent 3D models to enable clash detection, coordination, and lifecycle optimization.'
  },
  {
    num: '03',
    title: 'STAAD Pro, MIDAS',
    description: 'Advanced finite element tools used for rigorous structural verification under multiple load scenarios.'
  },
  {
    num: '04',
    title: 'LiDAR & Drone Survey',
    description: 'High-resolution aerial and terrestrial data collection ensuring millimeter-level site accuracy.'
  },
  {
    num: '05',
    title: 'GIS & Spatial Analytics',
    description: 'ArcGIS and QGIS based spatial analysis for informed planning, routing, and environmental assessment.'
  },
  {
    num: '06',
    title: 'Traffic Modeling Tools',
    description: 'VISSIM and Synchro simulations for traffic flow optimization and smart city transport planning.'
  },
];

export default function TechnologySection() {
  const [ref, inView] = useInView({ threshold: 0.15 });

  return (
    <section ref={ref} className={styles.section}>
      <div className={styles.bgImage} />
      
      {/* Glow effect in background */}
      <div className={styles.radialGlow}></div>

      <div className={styles.header}>
        <span className={styles.topLabel}>Our Tech Stack</span>
        <h2 className={styles.title}>
          TECH<span className={styles.outlineTitle}>NOLOGY</span>
        </h2>
        <div className={styles.headerLine}></div>
        <p className={styles.subtitle}>
          Driven by precision data and real-world insights, we craft smart, 
          durable, and cost-effective engineering solutions.
        </p>
      </div>

      <div className={`${styles.grid} ${inView ? styles.show : ''}`}>
        {technologyTools.map((tool, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className={styles.cardHeader}>
              <span className={styles.cardNumber}>{tool.num}</span>
              <div className={styles.cardLine}></div>
            </div>
            <h3 className={styles.cardTitle}>{tool.title}</h3>
            <p className={styles.cardDescription}>{tool.description}</p>
            
            {/* Corner Accent for Engineering feel */}
            <div className={styles.corner}></div>
          </div>
        ))}
      </div>
    </section>
  );
}