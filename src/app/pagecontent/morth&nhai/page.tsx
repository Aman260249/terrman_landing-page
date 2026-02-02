'use client';

import Image from 'next/image';
import styles from './morth-nhai.module.css';

export default function MorthNhaiPage() {
    return (
        <section className={styles.pageWrapper}>

            {/* Background Gradient */}
            <div className={styles.bgOverlay} />

            <div className={styles.container}>

                {/* TOP CONTENT */}
                <div className={styles.topSection}>
                    <h1 className={styles.heading}>
                        Why Choose Our Terraman <br />
                        <span>for MoRTH & NHAI Projects</span>
                    </h1>

                    <p className={styles.description}>
                       The successful execution of Ministry of Road Transport and Highways (Morth) and National Highways Authority of India (NHAI) approved infrastructure mandates requires an elevated level of specialized expertise, unwavering regulatory comprehension, and demonstrated technical proficiency. Choosing our consultancy firm is a strategic decision that guarantees the optimal management and delivery of these complex, high-stakes national projects, moving beyond mere compliance to achieve benchmark excellence and sustainable value creation.
                    </p>
                </div>

                {/* IMAGE BLOCK */}
                <div className={styles.imageBlock}>
                    <Image
                        src="/content-images/morth-bg-2.jpg"
                        alt="MoRTH & NHAI Engineering"
                        fill
                        className={styles.image}
                        priority
                    />
                    <div className={styles.imageGradient} />
                </div>

                {/* BOTTOM CONTENT */}
                <div className={styles.bottomSection}>
                    <h3 className={styles.subHeading}>
                         Our Terraman for Morth & NHAI Projects
                    </h3>

                    <p className={styles.bottomText}>
                        Terraman has extensive experience working with national and state-level authorities, particularly on projects under MoRTH and NHAI standards. Our methodology strictly follows the latest guidelines, codes, and engineering practices recommended by these authorities. From traffic surveys on National Highways to DPR preparation for new corridors, we ensure complete compliance with government standards. This makes our deliverables not only technically accurate but also ready for approval, implementation, and tender processes.
                    </p>
                </div>
                {/* SECOND CONTENT SECTION */}
                <div className={styles.secondSection}>

                    <div className={styles.secondText}>
                        <h2 className={styles.secondHeading}>
                            Why Our Consultancy is Your<br />
                            Strategic Partner
                        </h2>

                        <p>
                            We offer a distinctive blend of capabilities that directly address the
                            rigorous demands and specific intricacies inherent in MoRTH and NHAI
                            project lifecycle management.
                        </p>

                        <p>
                            <strong>Deep Regulatory Acumen and Expedited Clearances:</strong> Our
                            specialized teams possess profound, up-to-date knowledge of the entire
                            regulatory framework, including IRC, Indian Roads Congress standards,
                            relevant environmental and forest clearances, and nuanced procedural
                            requirements of models like EPC, HAM, and BOT.
                        </p>

                        <p>
                            This mastery allows us to meticulously prepare flawless Detailed Project
                            Reports (DPRs), navigate bureaucratic processes with unprecedented
                            efficiency, and significantly accelerate critical project approval and
                            commencement phases—thus mitigating costly delays.
                        </p>

                        <p>
                            <strong>Integrated Project Management and Technical Superiority:</strong>
                            We employ holistic, data-driven project management methodologies that
                            encompass everything from initial feasibility studies and sophisticated
                            traffic volume projections to detailed engineering design, quality
                            assurance protocols, and construction supervision.
                        </p>

                        <p>
                            Our consultants are experts in implementing innovative engineering
                            solutions, optimizing road geometry for safety and capacity, and
                            integrating Intelligent Transport Systems (ITS), ensuring the final asset
                            is not only compliant but represents the pinnacle of modern highway
                            infrastructure.
                        </p>
                    </div>

                    <div className={styles.secondImage}>
                        <Image
                            src="/content-images/morth-bg-1.jpg"
                            alt="Highway Infrastructure"
                            fill
                            className={styles.image}
                        />
                        <div className={styles.imageGradient} />
                    </div>

                </div>
                {/* THIRD / FINAL CONTENT SECTION */}
                <div className={styles.thirdSection}>
                    <p>
                        <strong>Risk Mitigation and Financial Optimization:</strong> Large-scale
                        infrastructure projects are inherently exposed to geological, financial,
                        and construction risks. We specialize in comprehensive risk assessment and
                        mitigation strategies, protecting stakeholder interests through proactive
                        identification of potential issues in land acquisition, material sourcing,
                        and budget volatility.
                    </p>

                    <p>
                        Furthermore, our financial models and optimization techniques are geared
                        towards maximizing return on investment (ROI) for clients, ensuring that
                        public or private capital is deployed with the utmost fiscal prudence and
                        accountability.
                    </p>

                    <p className={styles.finalNote}>
                        In essence, we are not just consultants; we are performance enablers
                        dedicated to transforming challenging governmental mandates into
                        successful, on-time, and high-quality infrastructure assets that truly
                        contribute to national economic resilience and connectivity.
                    </p>
                </div>


            </div>
        </section>
    );
}
