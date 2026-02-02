'use client';
import Image from 'next/image';

import { useEffect, useRef, useState } from 'react';
import styles from './highway-project-supervision.module.css';

export default function HighwayProjectSupervisionPage() {
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
          Highway Project Supervision:
          <span>Ensuring Quality, Compliance, and On-Time Delivery</span>
        </h1>

        {/* ===== PART 1 : PARAGRAPH ===== */}
        <p className={styles.description}>
          Within our comprehensive Engineering Services, Highway Project
          Supervision stands as the crucial phase where the theoretical
          perfection of the Detailed Project Report (DPR) is translated into
          physical reality. Our expert supervision team acts as the client’s
          vigilant eyes and ears on the ground, diligently managing all aspects
          of the construction process to ensure unwavering adherence to quality
          standards, strict regulatory compliance, and meticulous schedule
          management. This service is vital for safeguarding the client’s
          investment, mitigating risks, and guaranteeing that the final
          infrastructure asset meets the stringent operational and safety
          parameters set by MoRTH, NHAI, and international best practices.
        </p>
        
        {/* ================= PART 2 ================= */}
<section className={styles.partTwo}>

  {/* HEADING */}
  <h2 className={styles.partTwoHeading}>
    Core Components of Effective Highway Project Supervision
  </h2>

  {/* SUB HEADING */}
  <p className={styles.partTwoIntro}>
    Effective supervision is a multi-faceted discipline that integrates
    technical expertise, contractual knowledge, and rigorous project
    management methodologies:
  </p>

  {/* IMAGE */}
  <div className={styles.partTwoImage}>
    <Image
      src="/content-images/high-bg22.jpg"
      alt="Highway Project Supervision"
      fill
      className={styles.image}
    />
    <div className={styles.imageOverlay} />
  </div>

  {/* TEXT CONTENT */}
  <div className={styles.partTwoContent}>
    <p>
      <strong>Rigorous Quality Control (QC) and Quality Assurance (QA):</strong>
      Our primary focus is on ensuring the quality of materials and workmanship
      at every stage. This involves continuous, on-site testing of soil
      compaction, concrete strength, asphalt mix temperature, and pavement
      layer thickness, ensuring compliance with MoRTH Specifications and IRC
      standards. We enforce a non-negotiable <em>Zero-Tolerance for Defects</em>
      policy to guarantee structural integrity and longevity.
    </p>

    <p>
      <strong>Proactive Contract and Time Management:</strong> We meticulously
      monitor contractor progress against approved Work Programs (CPM/PERT).
      Using advanced project management tools, we track physical and financial
      progress, detect delays early, and enforce corrective actions—ensuring
      timely delivery and strict contractual compliance.
    </p>

    <p>
      <strong>Safety, Health, and Environmental (SHE) Management:</strong>
      Safety is paramount. Our teams enforce site safety plans, audit equipment
      and procedures, and ensure Environmental Management Plan (EMP)
      implementation—covering stormwater control, noise mitigation, and traffic
      diversions to protect workers and communities.
    </p>

    <p>
      <strong>Design-Construction Interface and Change Management:</strong>
      Acting as the critical link between designers and contractors, we resolve
      site challenges swiftly through design clarifications or Variation Orders
      (VOs). All changes are reviewed for cost, time, and quality impacts,
      maintaining strict control over scope and budget.
    </p> 
    <section className={styles.partThree}>
  <p className={styles.partThreeText}>
    By maintaining a constant, expert, and impartial presence on the site, we
    ensure that the finished highway is not just built, but built right—on
    budget, on time, and to the highest standards of engineering excellence,
    maximizing the asset’s value for the client and the public.
  </p>
</section>
<section className={styles.partFour}>

  <h2 className={styles.partFourHeading}>
    Project Documentation and Reporting: Transparency and Control in Supervision
  </h2>

  <p className={styles.partFourIntro}>
    A cornerstone of our Highway Project Supervision service is the generation
    of comprehensive, accurate, and timely documentation. This meticulous
    reporting framework ensures complete transparency, contractual compliance,
    and stringent financial control throughout the construction period,
    providing clients and stakeholders (including MoRTH/NHAI) with a clear,
    auditable trail of all project activities, decisions, and outcomes.
  </p>

</section>
<section className={styles.partFive}>
  <div className={styles.partFiveImage}>
    <Image
      src="/content-images/high-bg-333.jpg"
      alt="Highway Project Documentation"
      fill
      className={styles.image}
    />
    <div className={styles.imageOverlay} />
  </div>
</section>
<section className={styles.partSix}>

  <p>
    <strong>The Discipline of Project Reporting: Key Documents</strong><br />
    Our systematic documentation flow transforms raw site data into actionable
    intelligence, ensuring the project remains predictable and accountable:
  </p>

  <p>
    <strong>Daily Progress Reports (DPRs) and Site Diaries:</strong><br />
    <strong>Content:</strong> Granular on-site records detailing daily activities,
    manpower and machinery deployment, material receipt, and significant events
    such as weather delays or utility clashes.<br />
    <strong>Purpose:</strong> Provides real-time visibility into site productivity,
    enabling immediate corrective actions and verification of contractor claims.
  </p>

  <p>
    <strong>Quality Inspection Reports (QIRs) and Material Testing Records:</strong><br />
    <strong>Content:</strong> Documentation of material and workmanship testing,
    including concrete cube tests, compaction reports, bitumen quality checks,
    and steel reinforcement verification.<br />
    <strong>Purpose:</strong> Technical proof that all works comply with DPR,
    MoRTH, and IRC specifications, forming the basis for final certification.
  </p>

  <p>
    <strong>Monthly Progress Reports (MPRs):</strong><br />
    <strong>Content:</strong> Executive summaries covering physical progress,
    financial certification, risk logs, and forward work plans.<br />
    <strong>Purpose:</strong> Enables senior stakeholders to make informed
    strategic and financial decisions.
  </p>

  <p>
    <strong>Contractual Correspondence and Variation Orders (VOs):</strong><br />
    <strong>Content:</strong> All formal communications, EOT requests, claims,
    and approved scope changes.<br />
    <strong>Purpose:</strong> Ensures legal clarity, mutual agreement, and
    protection against disputes.
  </p>

</section>
<section className={styles.partSeven}>
  <div className={styles.partSevenImage}>
    <Image
      src="/content-images/high_bg-232.jpg"
      alt="Highway Supervision Reporting System"
      fill
      className={styles.image}
    />
    <div className={styles.imageOverlay} />
  </div>

  <p className={styles.partSevenText}>
    Through this disciplined approach to reporting, we ensure every aspect of
    the project is documented, auditable, and transparent—guaranteeing the
    client absolute control over the quality and trajectory of their high-value
    highway investment.
  </p>
</section>

  </div>

</section>


      </div> 
      
    </section>
  );
}
