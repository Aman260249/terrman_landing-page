'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from './detaiedproject.module.css';


export default function DetailedProjectPage() {
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
                    Detailed Project Report (DPR):
                    <span>The Blueprint for Execution Excellence</span>
                </h1>

                {/* ===== PART 1 : PARAGRAPH ===== */}
                <p className={styles.description}>
                    Following the foundational work of the Feasibility Study, the Detailed
                    Project Report (DPR) serves as the comprehensive, high-resolution
                    blueprint that transforms a validated concept into a fully executable
                    plan. As a core component of our Engineering Services, the DPR is the
                    most critical technical and financial document, providing granular
                    detail necessary for securing final government sanctions, floating
                    tenders, and commencing physical construction. Our commitment is to
                    deliver DPRs that are technically flawless, legally robust, and
                    financially accurate, significantly de-risking the subsequent phases
                    of execution for projects under MoRTH and NHAI approval.
                </p>
                {/* ================= PART 2 ================= */}
                <section className={styles.partTwo}>
                    <div className={styles.partTwoGrid}>

                        <h2 className={styles.partTwoHeading}>
                            The Significance of a Precision-Engineered DPR
                        </h2>

                        <div className={styles.partTwoImage}>
                            <Image
                                src="/content-images/dpr-bg-2.jpg"
                                alt="Precision Engineered DPR"
                                fill
                                className={styles.image}
                            />
                            <div className={styles.imageOverlay} />
                        </div>

                    </div>
                    {/* PART 2 – TEXT UNDER HEADING */}
                    <div className={styles.partTwoText}>
                        <p>
                            <strong>Governing Document for Tendering and Construction:</strong> The DPR
                            contains the exact specifications, drawings, bill of quantities (BOQ), and
                            cost estimates that form the basis of the tender documents. Its precision
                            directly impacts the clarity of contractor bidding, minimizing change orders
                            and contractual disputes during execution.
                        </p>

                        <p>
                            <strong>Final Sanction and Regulatory Compliance:</strong> It incorporates
                            final environmental and forest clearance stipulations, detailed land
                            acquisition plans, utility shifting designs, and adherence to all specific
                            Indian Roads Congress (IRC) standards. A meticulous DPR is essential for
                            obtaining the crucial final project sanction and budget release from
                            government authorities.
                        </p>

                        <p>
                            <strong>Cost Control and Financial Certainty:</strong> By providing a
                            detailed breakdown of all capital and operational expenditures, the DPR
                            establishes the baseline budget. Our advanced cost estimation methodologies
                            and material optimization studies ensure a high degree of financial
                            certainty, protecting clients from unexpected overruns and ensuring
                            transparency for investors.
                        </p>
                    </div>
                    {/* ================= PART 4 ================= */}
                    <section className={styles.partFour}>

                        <div className={styles.partFourContent}>

                            <p>
                                <strong>High-Definition Engineering Design and Geometric Finalization:</strong>
                                We move beyond conceptual alignment to produce detailed engineering drawings
                                for the entire corridor, including final geometric design, vertical
                                profiles, cross-sections, and sight distance calculations. Pavement design
                                is rigorously determined based on traffic data (IRC-37) and subgrade
                                strength tests to ensure durability across the design life.
                            </p>

                            <p>
                                <strong>Structural Integrity and Bridge Detailing:</strong> Comprehensive
                                structural designs are prepared for bridges, culverts, flyovers, retaining
                                walls, and underpasses. These include foundation details, material
                                specifications, seismic compliance, and hydrological/hydraulic analyses to
                                safely manage peak flood discharge.
                            </p>

                            <p>
                                <strong>Bill of Quantities (BOQ) and Detailed Cost Estimation:</strong> A
                                meticulous item-by-item quantification of all construction elements is
                                undertaken. Using current market rates, schedules of rates, and regional
                                inflation forecasts, we prepare the definitive Abstract of Cost and BOQ
                                that becomes the benchmark for tender evaluation and budget control.
                            </p>

                            <p>
                                <strong>Land Acquisition, Utility Shifting, and ROW Management:</strong>
                                The DPR includes detailed Property Identification drawings and coordinated
                                relocation plans for utilities such as water lines, power cables, gas
                                pipelines, and telecom assets—minimizing disruption and ensuring seamless
                                site handover.
                            </p>

                            <p>
                                <strong>Traffic Management and ITS Integration:</strong> Temporary traffic
                                management schemes ensure safety during construction, while final designs
                                integrate Intelligent Transportation Systems (FASTag, VMS, surveillance,
                                command centers) to create a smart, managed highway asset.
                            </p>

                            <p>
                                <strong>Construction Methodology and Quality Assurance:</strong> The DPR
                                defines construction methodology, work programs (CPM/PERT), and a
                                comprehensive QA/QC framework—specifying material testing, acceptance
                                criteria, and inspection protocols in full compliance with IRC standards.
                            </p>

                            <p>
                                <strong>Environmental and Social Impact Mitigation:</strong> All mitigation
                                measures—including noise barriers, pollution control, compensatory
                                afforestation, and Environmental Management Plans—are fully designed,
                                costed, and embedded into execution.
                            </p>
                            {/* ================= PART 5 ================= */}
                            <section className={styles.partFive}>

                                {/* CENTER IMAGE */}
                                <div className={styles.partFiveImage}>
                                    <Image
                                        src="/content-images/dpr-bg.jpg"  // your image
                                        alt="DPR Execution Confidence"
                                        fill
                                        className={styles.image}
                                    />
                                    <div className={styles.imageOverlay} />
                                </div>

                                {/* FINAL PARAGRAPH */}
                                <p className={styles.partFiveText}>
                                    By delivering a comprehensive and highly accurate DPR, we equip our clients
                                    with the authoritative document needed to move confidently into the
                                    construction phase, minimizing execution risks and guaranteeing compliance
                                    with the stringent requirements of national highway development agencies.
                                </p>

                            </section>

                        </div>

                    </section>

                </section>

            </div>


        </section>

    );
}
