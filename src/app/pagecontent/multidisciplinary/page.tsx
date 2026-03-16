'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from 'react';
import styles from './multidisciplinary.module.css';

export default function MultidisciplinaryPage() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [visible ,setVisible] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setVisible(true),
            { threshold: 0.2 }
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
                {/* PART 1 – HEADING */}
                <h1 className={`${styles.heading} ${styles.fadeUp}`}> 
                    The Power of Integration<br />
                    <span>Our Multi-Disciplinary Engineering Team</span>
                </h1>

                {/* PART 2 – IMAGE */}
                <div className={`${styles.imageBox} ${styles.fadeRight}`} >
                    <Image
                        src="/content-images/multi-bg.jpg"
                        alt="Multidisciplinary Engineering Team"
                        fill
                        className={styles.image}
                        priority
                    />
                    <div className={styles.imageOverlay} />
                </div>

                {/* PART 3 – CONTENT */}
                <div className={`${styles.textBlock} ${styles.fadeLeft}`}>
                    <p>
                        In the face of increasingly complex modern infrastructure challenges,
                        a traditional, siloed approach to engineering is no longer sufficient.
                        Our commitment to excellence is embodied by our Multi-Disciplinary
                        Engineering Team, which represents the cutting edge of collaborative
                        problem-solving and holistic project delivery.
                    </p>

                    <p>
                        This team is not merely a collection of experts; it is a cohesive,
                        integrated unit where diverse specializations converge to provide
                        innovative, robust, and cost-effective solutions for every phase of a
                        project — from initial concept and feasibility to execution and final
                        commissioning.
                    </p>

                    <p>
                        By seamlessly integrating planning, design, structural engineering,
                        transportation, environmental studies, and project management, we
                        ensure superior coordination, minimized risk, and optimized outcomes
                        that meet both regulatory and performance expectations.
                    </p>
                </div>
                {/* SECOND CONTENT CARD */}
                <div className={`${styles.secondCard} ${visible ? styles.show : ''}`}>

                    <div className={`${styles.secondText} ${styles.fadeLeft}`}>
                        <h2 className={styles.secondHeading}>
                            Why a Multi-Disciplinary Team is Essential
                        </h2>

                        <p className={styles.secondIntro}>
                            The necessity for a multi-disciplinary approach stems directly from the interconnected nature of large-scale engineering and construction projects:
                        </p>

                        <p>
                            <strong>Holistic Problem Solving:</strong> Modern projects inherently involve overlapping domains—a highway's design affects its environmental impact, its structural integrity dictates material choice, and its operation requires sophisticated electronic systems. A multi-disciplinary team ensures that all aspects—Civil, Structural, Electrical, Environmental, Geotechnical, and Traffic Engineering—are considered concurrently. This prevents siloed decisions that can create conflicts or rework later in the project lifecycle.
                        </p>

                        <p>
                            <strong>Enhanced Innovation and Efficiency:</strong> Bringing together different perspectives fosters a culture of innovation. A Structural Engineer might collaborate with a Materials Scientist to find a lighter, stronger, and more sustainable composite, while a Geotechnical Expert informs the most cost-effective foundation design for a Civil Engineer's alignment plan. This integrated workflow leads to optimized designs, reduced material waste, and expedited project timelines.
                        </p>

                        <p>
                            <strong>Comprehensive Risk Mitigation:</strong>By having specialists from all relevant disciplines review the project simultaneously, potential technical risks—such as design clashes, unforeseen ground conditions, or non-compliance with varying regulations—are identified and mitigated early and proactively. This collective oversight minimizes expensive changes orders and delays during the construction phase
                        </p>
                    </div>

                    <div className={`${styles.secondImageBox} ${styles.fadeRight}`}>
                        <Image
                            src="/content-images/multi-bg-3.jpg"
                            alt="Collaborative Engineering Team"
                            fill
                            className={styles.image}
                        />
                        <div className={styles.imageOverlay} />
                    </div>

                </div>
                {/* THIRD CONTENT CARD */}
                <div className={`${styles.thirdCard} ${visible ? styles.show : ''}`}>

                    {/* IMAGE */}
                    <div className={`${styles.thirdImageBox} ${styles.fadeLeft}`}>
                        <Image
                            src="/content-images/multi-bg-4.jpg"
                            alt="Teamwork Process"
                            fill
                            className={styles.image}
                        />
                        <div className={styles.imageOverlay} />
                    </div>

                    {/* GRADIENT CONTENT BOX */}
                    <div className={`${styles.flowBox} ${styles.fadeRight}`}>
                        <h3 className={styles.flowHeading}>
                            How Our Team Works: The Discipline of Flow
                        </h3>

                        <ol className={styles.flowList}>
                            <li>
                                <strong>Integrated Planning & Feasibility:</strong> The team initiates with a Joint Conceptual Design Phase. All specialists contribute their domain knowledge from day one to define the project scope, conduct comprehensive feasibility studies, and select the optimal technology and execution model (e.g., BIM integration for 3D modeling).
                            </li>

                            <li>
                                <strong>Concurrent Engineering:</strong> Instead of a linear hand-off, we employ a Concurrent Engineering Model. For example, while the Civil Engineer designs the alignment, the Environmental Specialist simultaneously assesses impact and designs mitigation measures, and the Electrical Engineer plans utility integration. This overlapping process drastically compresses the design schedule.
                            </li>

                            <li>
                                <strong>Cross-Disciplinary Reviews:</strong> All design packages undergo mandatory cross-disciplinary review (CDR) sessions. The Structural Team reviews the Mechanical Design's loads, the Traffic Team validates the Civil Design's capacity, and so on. These formal quality gates ensure technical coherence and prevent errors before they reach the site.
                            </li>

                            <li>
                                <strong>Agile Communication & Technology:</strong> The team utilizes advanced, shared technology platforms like cloud-based BIM systems and project management software. This ensures a single source of truth for all project data and facilitates real-time communication and decision-making, regardless of geographical location.
                            </li>

                            <li>
                                <strong>Field Integration & Support:</strong>  During construction, the integrated design team maintains a continuous presence and support system. Specialists collectively troubleshoot site challenges, ensuring that any necessary design modifications are quickly reviewed for their impact across all disciplines, maintaining the project's technical integrity and forward momentum.
                            </li>
                        </ol>

                        <p className={styles.flowFooter}>
                            In conclusion, our Multi-Disciplinary Engineering Team operates as a
                            unified system — delivering resilient, efficient, and future-ready
                            infrastructure solutions.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}
