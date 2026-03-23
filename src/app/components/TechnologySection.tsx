'use client';
import { useState } from 'react';
import useInView from './hooks/useInView';
import styles from '../styles/TechnologySection.module.css';

const technologyTools = [
  {
    num: '01',
    title: 'AutoCAD, Civil 3D, MX Roads',
    description: 'The cornerstone of our civil design process, utilizing Civil 3D for dynamic modeling of surfaces, corridors, pipe networks, and grading.',
    type: 'video',
    src: 'https://www.pexels.com/download/video/7816238/',
    tag: 'Civil Design',
    tools: ['AutoCAD', 'Civil 3D', 'MX Roads'],
  },
  {
    num: '02',
    title: 'BIM & 3D Modeling',
    description: 'Creating intelligent 3D models of structures and infrastructure to enable clash detection and improved lifecycle management.',
    type: 'image',
    src: 'https://res.cloudinary.com/datklzcrj/image/upload/v1774263816/pexels-steph-320380194-13729358_olvb63.jpg',
    tag: 'Modeling',
    tools: ['Revit', 'Navisworks', 'BIM 360'],
  },
  {
    num: '03',
    title: 'STAAD Pro, MIDAS',
    description: 'Powerful Finite Element Analysis tools used for rigorous structural design verification against various load conditions and scenarios.',
    type: 'video',
    src: 'https://www.pexels.com/download/video/34587146/',
    tag: 'Structural',
    tools: ['STAAD Pro', 'MIDAS', 'SAP2000'],
  },
  {
    num: '04',
    title: 'LiDAR & Drone Survey',
    description: 'High-resolution aerial and terrestrial data collection for rapid site mapping and topographic surveys with millimeter-level accuracy.',
    type: 'image',
    src: 'https://res.cloudinary.com/datklzcrj/image/upload/v1774263846/pexels-mikael-blomkvist-8961255_xwmxlj.jpg',
    tag: 'Survey',
    tools: ['LiDAR', 'Drone', 'Photogrammetry'],
  },
  {
    num: '05',
    title: 'GIS & Spatial Analytics',
    description: 'Utilizing ArcGIS and QGIS for integrating, analyzing, and visualizing multi-layered geographic data for informed planning.',
    type: 'image',
    src: 'https://res.cloudinary.com/datklzcrj/image/upload/v1774263972/pexels-kindelmedia-7054417_pizfmn.jpg',
    tag: 'Geospatial',
    tools: ['ArcGIS', 'QGIS', 'Google Earth Pro'],
  },
  {
    num: '06',
    title: 'Traffic Modeling Tools',
    description: 'VISSIM and Synchro simulations to model traffic flow, analyze intersection capacity, and design smart city transport solutions.',
    type: 'image',
    src: 'https://res.cloudinary.com/datklzcrj/image/upload/v1774263906/pexels-tomfisk-2388742_gvkmof.jpg',
    tag: 'Traffic',
    tools: ['VISSIM', 'Synchro', 'SIDRA'],
  },
];

export default function TechnologySection() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section ref={ref} className={styles.section}>

      {/* dot grid bg */}
      <div className={styles.dotGrid} />

      <div className={styles.container}>

        {/* ── HEADER ── */}
        <div className={`${styles.header} ${inView ? styles.headerVisible : ''}`}>
          <div className={styles.eyebrow}>
            <div className={styles.eyebrowLine} />
            <span className={styles.eyebrowText}>Our Tech Stack</span>
            <div className={styles.eyebrowLine} />
          </div>

          <h2 className={styles.heading}>
            TECH<span>NOLOGY</span>
          </h2>

          <p className={styles.subheading}>
            Driven by precision data and real-world insights, we craft smart,
            durable, and cost-effective engineering solutions.
          </p>
        </div>

        {/* ── BENTO GRID ── */}
        <div className={`${styles.grid} ${inView ? styles.gridVisible : ''}`}>
          {technologyTools.map((tool, index) => (
            <div
              key={index}
              className={`
                ${styles.card}
                ${styles[`card${index + 1}`]}
                ${inView ? styles.cardVisible : ''}
                ${activeCard === index ? styles.cardActive : ''}
              `}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* MEDIA */}
              <div className={styles.media}>
                {tool.type === 'video' ? (
                  <video autoPlay muted loop playsInline>
                    <source src={tool.src} type="video/mp4" />
                  </video>
                ) : (
                  <img src={tool.src} alt={tool.title} />
                )}
                <div className={styles.overlay} />
              </div>

              {/* top bar draw */}
              <div className={styles.cardTopBar} />

              {/* corner tag */}
              <div className={styles.cardTag}>{tool.tag}</div>

              {/* CONTENT */}
              <div className={`${styles.content} ${index === 0 || index === 2 ? styles.contentBottom : ''}`}>

                {/* number */}
                <span className={styles.number}>{tool.num}</span>

                {/* title */}
                <h3 className={styles.cardTitle}>{tool.title}</h3>

                {/* desc */}
                <p className={styles.cardDesc}>{tool.description}</p>

                {/* tool chips */}
                <div className={styles.chips}>
                  {tool.tools.map((t, i) => (
                    <span key={i} className={styles.chip}>{t}</span>
                  ))}
                </div>

              </div>

              {/* progress bar on hover */}
              <div className={styles.progressBar}>
                <div className={styles.progressFill} />
              </div>

            </div>
          ))}
        </div>

        {/* ── BOTTOM STRIP ── */}
        <div className={`${styles.bottomStrip} ${inView ? styles.bottomStripVisible : ''}`}>
          <span className={styles.stripCount}>06 Tools</span>
          <div className={styles.stripLine} />
          <span className={styles.stripTag}>Precision · Innovation · Engineering Excellence</span>
        </div>

      </div>
    </section>
  );
}