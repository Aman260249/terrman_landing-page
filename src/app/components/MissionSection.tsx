'use client';
import useInView from './hooks/useInView';
import styles from '../styles/MissionSection.module.css';

export default function MissionSection() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  const missionPoints = [
    { label: "01", title: "QUALITY SOLUTIONS", text: "To deliver high-quality and reliable engineering solutions across multiple sectors." },
    { label: "02", title: "LATEST TECHNOLOGY", text: "Adopting cutting-edge technologies like LiDAR, drone mapping, GIS, BIM, and digital modelling." },
    { label: "03", title: "ETHICAL PRACTICES", text: "To maintain transparent communication and follow the highest ethical work standards." },
    { label: "04", title: "CLIENT RELATIONSHIPS", text: "Strengthening trust through consistent performance and guaranteed on-time delivery." },
    { label: "05", title: "SUSTAINABLE DESIGN", text: "Creating value-driven designs that perfectly balance cost, quality, and sustainability." }
  ];

  return (
    <section ref={ref} className={`${styles.section} ${inView ? styles.show : ''}`}>
      {/* --- VISION (As you liked it) --- */}
      <div className={styles.visionBlock}>
        <span className={styles.smallTitle}>Our Vision</span>
        <h2 className={styles.visionText}>
          “STEPPING INTO <span className={styles.gold}>EVOLUTION</span> CATALYSES A <span className={styles.gold}>PARADIGM SHIFT</span> FUELLED BY STRATEGIC BRILLIANCE AND FEARLESS EXECUTION”
        </h2>
      </div>

      {/* --- MISSION (New Minimalist Approach) --- */}
      <div className={styles.missionWrapper}>
        <div className={styles.missionHeader}>
            <h3 className={styles.missionMainTitle}>OUR MISSION</h3>
            <div className={styles.titleLine}></div>
        </div>

        <div className={styles.missionList}>
          {missionPoints.map((point, index) => (
            <div key={index} className={styles.missionItem}>
              <div className={styles.missionNumber}>{point.label}</div>
              <div className={styles.missionContent}>
                <h4 className={styles.pointTitle}>{point.title}</h4>
                <p className={styles.pointDescription}>{point.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}