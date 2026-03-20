'use client';
import Link from 'next/link';
import styles from '../styles/HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      {/* Background Video */}
     <div className={styles.backgroundContainer}>
  <video
    autoPlay
    muted
    loop
    playsInline
    className={styles.backgroundVideo}
  >
    {/* Cloudinary URL yahan paste kar diya hai */}
    <source 
      src="https://res.cloudinary.com/datklzcrj/video/upload/v1774009532/hero-video_jnb5qf.mp4" 
      type="video/mp4" 
    />
    Your browser does not support the video tag.
  </video>
  <div className={styles.overlay}></div>
</div>

      {/* Content */}
      <div className={styles.contentContainer}>
        <div className={styles.textBlock}>
          <h1 className={styles.headline}>
            Engineering Excellence <br />
            for <span className={styles.highlight}>India&apos;s</span> Infrastructure Growth
          </h1>

          <p className={styles.subtext}>
            Terraman Infratech Consultants delivers Feasibility Studies, DPRs,
            Bridge Surveys, Traffic Analysis, and Turn-key Engineering Solutions since 2016.
          </p>

          <div className={styles.buttonGroup}>
            <Link href="/#contact">
              <button className={styles.callbackButton}>
                REQUEST CALLBACK
              </button>
            </Link>
            {/* <Link href="/#about">
              <button className={styles.secondaryButton}>
                LEARN MORE
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;