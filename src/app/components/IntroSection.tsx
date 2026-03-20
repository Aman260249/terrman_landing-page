'use client';
import useInView from './hooks/useInView';
import styles from '../styles/IntroSection.module.css';

export default function IntroSection() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className={`${styles.section} ${inView ? styles.show : ''}`}
    >
      {/* ================= PART 1: VIDEO LEFT | TEXT RIGHT ================= */}
      <div className={styles.row}>
        <div className={styles.videoBox}>
          <video autoPlay muted loop playsInline className={styles.video}>
            <source 
      src="https://res.cloudinary.com/datklzcrj/video/upload/v1774009025/company-overview_ndh6iy.mp4" 
      type="video/mp4" 
    />
          </video>
          <div className={styles.videoOverlay}></div>
        </div>

        <div className={styles.textBlock}>
          <span className={styles.smallTitle}>introduction</span>
          <h2 className={styles.heading}>
            COMPANY <span className={styles.headingHighlight}>OVERVIEW</span>
          </h2>
          <p className={styles.paragraph}>
            We fuse engineering excellence with cutting-edge technology to create 
            precise surveys, smart designs, and top-tier project documentation.
            Backed by a dynamic team of experts, we turn complex ideas into 
            seamless, high-impact solutions.
          </p>
        </div>
      </div>

      {/* ================= PART 2: TEXT LEFT | VIDEO RIGHT ================= */}
      <div className={`${styles.row} ${styles.reverseMobile}`}>
        <div className={styles.textBlock}>
          <span className={styles.smallTitle}>our expertise</span>
          <h2 className={styles.heading}>
            SMART <span className={styles.headingHighlight}>SOLUTIONS</span>
          </h2>
          <p className={styles.paragraphMuted}>
            Terraman Infratech Consultants delivers smart, end-to-end engineering 
            solutions across transportation, urban development, and water resources.
            Since 2016, we’ve helped turn ideas into efficient, cost-effective, 
            and well-executed projects.
          </p>
        </div>

        <div className={styles.videoBox}>
          <video autoPlay muted loop playsInline className={styles.video}>
            <source 
      src="https://res.cloudinary.com/datklzcrj/video/upload/v1774009556/project-work_kofybz.mp4" 
      type="video/mp4" 
    />
          </video>
          <div className={styles.videoOverlay}></div>
        </div>
      </div>

      {/* ================= PART 3: FACTS ================= */}
      <div className={styles.factsWrapper}>
        <div className={styles.factsBorder}>
          <div className={styles.factsBox}>
            <div className={styles.factsLeft}>
              <span className={styles.factsTitle}>COMPANY FACTS</span>
              <span className={styles.factsYear}>2016</span>
              <span className={styles.factsSince}>Since</span>
            </div>
            <div className={styles.factsRight}>
              <p className={styles.gradientText}>
                Terraman&apos;s philosophy is simple – design responsibly, deliver
                accurately, and build trust with every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}