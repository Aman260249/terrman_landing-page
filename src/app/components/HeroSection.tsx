'use client';
import Image from "next/image";
import Link from 'next/link';
import styles from '../styles/HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      {/* Background Image */}
      <div className={styles.backgroundContainer}>
        <Image
          src="/images/hero-bg.jpg"
          alt="Infrastructure background image"
          fill
          priority
          className={styles.backgroundImage}
        />
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
            Bridge Surveys, Traffic Analysis, and Turn-key Engineering Solutions since 2015.
          </p>

          {/* ✅ SCROLL TO CONTACT FORM */}
          <Link href="/#contact">
            <button className={styles.callbackButton}>
              REQUEST CALLBACK
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
