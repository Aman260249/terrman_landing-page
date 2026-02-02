'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from './feasibility.module.css';

export default function FeasibilityStudiesPage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.pageWrapper}>
      <div
        ref={sectionRef}
        className={`${styles.container} ${visible ? styles.show : ''}`}
      >

        {/* ===== PART 1 : HEADING ===== */}
        <h1 className={styles.heading}>
          Feasibility Studies:
          <span>Laying the Groundwork for Successful Projects</span>
        </h1>

        {/* ===== PART 1 : PARAGRAPH (TEXT FIRST) ===== */}
        <p className={styles.description}>
          The Feasibility Study is the indispensable first step in the lifecycle
          of any major infrastructure project, acting as the critical foundation
          upon which all subsequent planning, design, and investment decisions
          are built. Within our suite of Engineering Services, this phase
          represents our commitment to providing clients with rigorous,
          objective, and comprehensive analyses, ensuring that proposed projects
          are not only technically achievable but also economically viable,
          financially sound, and environmentally sustainable. We move beyond
          simple “go/no-go” assessments to deliver a strategic roadmap for
          success.
        </p>

        {/* ===== PART 1 : IMAGE (AFTER TEXT) ===== */}
        <div className={styles.imageBox}>
          <Image
            src="/content-images/project-1-bg.jpg" // your image
            alt="Feasibility Studies Infrastructure"
            fill
            priority
            className={styles.image}
          />
          <div className={styles.imageOverlay} />
        </div>
        {/* ================= PART 2 ================= */}
<section className={styles.partTwo}>

  <h2 className={styles.partTwoHeading}>
    Why a Rigorous Feasibility Study is Non-Negotiable
  </h2>

  <div className={styles.partTwoContent}>
    <p className={styles.partTwoIntro}>
      A detailed feasibility study is vital for mitigating risk and maximizing
      the return on investment (ROI) in large-scale ventures, especially those
      approved by apex bodies like MoRTH and NHAI:
    </p>

    <p>
      <strong>Risk Identification and Mitigation:</strong> This process proactively
      identifies potential challenges—be it unforeseen geological obstacles,
      complex land acquisition issues, or regulatory hurdles—long before
      significant capital is committed. By quantifying these risks, we enable
      clients to develop robust mitigation strategies and set accurate, realistic
      contingency budgets.
    </p>

    <p>
      <strong>Optimal Project Scoping and Sizing:</strong> We precisely determine
      the necessary scale, capacity, and technical specifications of the project.
      This prevents both costly over-engineering and inadequate under-scoping,
      ensuring the final asset perfectly matches the projected demand and
      operational requirements over its entire lifecycle.
    </p>

    <p>
      <strong>Securing Financial Approval:</strong> Comprehensive feasibility
      reports, complete with robust traffic projections, detailed cost estimates,
      and strong financial models (such as Net Present Value and Internal Rate of
      Return analysis), are essential documents for securing project financing,
      bank approvals, and government sanctions. A well-prepared study lends
      credibility and confidence to potential investors and stakeholders.
    </p>
  </div>
  {/* ================= PART 3 ================= */}
<section className={styles.partThree}>

  <h2 className={styles.partThreeHeading}>
    Our Multi-Dimensional Approach<br />
    to Feasibility
  </h2>

  <div className={styles.partThreeGrid}>

    {/* LEFT TEXT */}
    <div className={styles.partThreeText}>
      <p>
        Our feasibility studies are comprehensive and multi-disciplinary,
        integrating technical, economic, financial, and environmental
        considerations into a single, cohesive strategic document.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className={styles.partThreeImage}>
      <Image
        src="/content-images/project-bg-2.jpg"
        alt="Multi-Dimensional Feasibility Approach"
        fill
        className={styles.image}
      />
      <div className={styles.imageOverlay} />
    </div>

  </div> 

  {/* ================= PART 4 ================= */}
<section className={styles.partFour}>

  <div className={styles.partFourContent}>
    <p>
      <strong>Technical Feasibility and Engineering:</strong> We assess the
      technological requirements, evaluate the availability of necessary
      materials and manpower, and determine the optimal alignment and engineering
      design choices. This includes detailed Topographic and Geospatial Surveys,
      Geotechnical Investigations for sub-soil conditions, and a review of the
      existing infrastructure to ensure seamless integration.
    </p>

    <p>
      <strong>Traffic and Demand Analysis:</strong> For road and highway projects,
      this is crucial. We utilize advanced forecasting models to project future
      traffic volumes, patterns, and commodity flows over a 20–30 year horizon.
      This analysis dictates the appropriate road width, number of lanes, and
      tolling strategy, ensuring the infrastructure meets future capacity demands.
    </p>

    <p>
      <strong>Economic Viability:</strong> This segment focuses on the broader
      societal and economic benefits, calculating the Economic Internal Rate of
      Return (EIRR). We analyze the impact on key metrics such as reduced travel
      time, decreased fuel consumption, lower accident costs, and increased
      regional economic activity.
    </p>

    <p>
      <strong>Financial Modeling and Structuring:</strong> We create detailed
      financial projections, including construction cost estimates (CAPEX),
      operational and maintenance expenditure (OPEX), revenue forecasting (e.g.,
      toll collection), and structuring recommendations (EPC, HAM, or BOT models)
      to determine the Financial Internal Rate of Return (FIRR) and project
      bankability.
    </p>

    <p>
      <strong>Regulatory and Environmental Compliance:</strong> We conduct
      preliminary assessments of environmental and social impact, identify land
      acquisition requirements, and outline the path for securing mandatory
      clearances from MoRTH, NHAI, and environmental bodies—embedding compliance
      into the project’s DNA from the outset.
    </p>
  </div>

  {/* ================= PART 5 ================= */}
<section className={styles.partFive}>

  {/* IMAGE (same size as PART 1) */}
  <div className={styles.partFiveImage}>
    <Image
      src="/content-images/pro-4-bg.jpg" // your image
      alt="Feasibility Strategy Execution"
      fill
      className={styles.image}
    />
    <div className={styles.imageOverlay} />
  </div>

  {/* ENDING PARAGRAPH */}
  <p className={styles.partFiveConclusion}>
    By engaging our expertise, clients receive a definitive, de-risked blueprint
    that validates their investment and provides a high-confidence path forward,
    transforming an initial idea into a strategically executable plan.
  </p>

</section>


</section>


</section>


</section>


      </div>
    </section>
  );
}
