'use client';
import React, { useState, useRef } from 'react';
import useInView from './hooks/useInView';
import styles from '../styles/ContactFormSection.module.css';
import { submitInquiry } from '@/lib/inquiry';

const IconMap = {
  Office: (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  Email: (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  Phone: (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-4.71-4.71 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.08 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  Website: (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
};

const ContactFormSection: React.FC = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 });
  const [formRef2, formInView]    = useInView({ threshold: 0.1 });
  const [showModal, setShowModal]  = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleAction(formData: FormData) {
    const result = await submitInquiry(formData);
    if (result.success) {
      setShowModal(true);
      formRef.current?.reset();
    } else {
      alert('Something went wrong. Please try again.');
    }
  }

  return (
    <section id="contact" className={styles.section}>

      {/* ── SUCCESS MODAL ── */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div className={styles.modalBox} onClick={e => e.stopPropagation()}>
            <div className={styles.modalIcon}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="15" stroke="#F97316" strokeWidth="1.5"/>
                <path d="M9 16l5 5 9-9" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className={styles.modalTitle}>Message Sent!</h3>
            <p className={styles.modalDesc}>
              Thank you! Your inquiry has been received by Terraman Infratech. We'll get back to you within 24 hours.
            </p>
            <button onClick={() => setShowModal(false)} className={styles.modalClose}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* ── CTA BAND ── */}
      <div ref={headerRef} className={styles.ctaBand}>
        <div className={styles.ctaBandBg} />
        <div className={styles.ctaGlow} />
        <div className={styles.ctaGridLines} />

        <div className={styles.ctaInner}>
          <div className={`${styles.eyebrow} ${headerInView ? styles.eyebrowVisible : ''}`}>
            <div className={styles.eyebrowDot} />
            <span className={styles.eyebrowText}>Get In Touch</span>
            <div className={styles.eyebrowDot} />
          </div>

          <h2 className={`${styles.ctaHeading} ${headerInView ? styles.ctaHeadingVisible : ''}`}>
            <span className={styles.ctaLine1}>Let's Build</span>
            <span className={styles.ctaLine2}>Your Vision</span>
            <span className={styles.ctaLine3}>Together.</span>
          </h2>

          <p className={`${styles.ctaSub} ${headerInView ? styles.ctaSubVisible : ''}`}>
            Have a project in mind? Our team of engineers and consultants is ready to transform
            your infrastructure challenge into a precision-engineered reality.
          </p>

          {/* quick stats */}
          <div className={`${styles.ctaStats} ${headerInView ? styles.ctaStatsVisible : ''}`}>
            {[
              { num: '24h',   label: 'Response Time'   },
              { num: 'Free',  label: 'Initial Consult' },
              { num: '150+',  label: 'Projects Done'   },
            ].map((s, i) => (
              <div key={i} className={styles.ctaStat} style={{ transitionDelay: `${0.6 + i * 0.1}s` }}>
                <span className={styles.ctaStatNum}>{s.num}</span>
                <span className={styles.ctaStatLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FORM SECTION ── */}
      <div ref={formRef2} className={styles.formSection}>
        <div className={styles.dotGrid} />

        <div className={styles.formContainer}>

          {/* ── LEFT — CONTACT INFO ── */}
          <div className={`${styles.infoCard} ${formInView ? styles.infoCardVisible : ''}`}>

            <div className={styles.infoTop}>
              <div className={styles.infoEyebrow}>
                <div className={styles.infoEyebrowLine} />
                <span>Contact Information</span>
              </div>
              <h3 className={styles.infoHeading}>Reach Out<br/>Directly.</h3>
              <p className={styles.infoSubtext}>
                We maintain transparent communication — from first call to final handover.
              </p>
            </div>

            <div className={styles.infoItems}>
              {[
                { Icon: IconMap.Office,  label: 'Registered Office', value: '404, ABC Tower, XYZ Road,\nNew Delhi, India 110001' },
                { Icon: IconMap.Email,   label: 'Email Us',          value: 'contact@terraman.com'  },
                { Icon: IconMap.Phone,   label: 'Call Us',           value: '+91 9876 543 210'      },
                { Icon: IconMap.Website, label: 'Website',           value: 'www.terraman.com'      },
              ].map(({ Icon, label, value }, i) => (
                <div
                  key={i}
                  className={styles.infoItem}
                  style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
                >
                  <div className={styles.infoIconBox}>
                    <Icon className={styles.infoIcon} />
                  </div>
                  <div>
                    <span className={styles.infoLabel}>{label}</span>
                    <p className={styles.infoValue}>{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* bottom tagline */}
            <div className={styles.infoFooter}>
              <div className={styles.infoFooterLine} />
              <span className={styles.infoFooterText}>Terraman Infratech Consultants</span>
            </div>

          </div>

          {/* ── RIGHT — FORM ── */}
          <form
            ref={formRef}
            action={handleAction}
            className={`${styles.formCard} ${formInView ? styles.formCardVisible : ''}`}
          >
            {/* form header */}
            <div className={styles.formHeader}>
              <h3 className={styles.formTitle}>Send an Inquiry</h3>
              <p className={styles.formSubtitle}>Fill in your details — we'll respond within 24 hours.</p>
            </div>

            {/* row 1 */}
            <div className={styles.inputRow}>
              <div className={styles.fieldWrap}>
                <label className={styles.fieldLabel}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  className={styles.input}
                />
                <div className={styles.inputBar} />
              </div>
              <div className={styles.fieldWrap}>
                <label className={styles.fieldLabel}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className={styles.input}
                />
                <div className={styles.inputBar} />
              </div>
            </div>

            {/* row 2 */}
            <div className={styles.inputRow}>
              <div className={styles.fieldWrap}>
                <label className={styles.fieldLabel}>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91  98765 43210"
                  className={styles.input}
                />
                <div className={styles.inputBar} />
              </div>
              <div className={styles.fieldWrap}>
                <label className={styles.fieldLabel}>Service Needed</label>
                <select name="service" required className={styles.select}>
                  <option value="">Select a service...</option>
                  <option value="highway-design">Highway & Road Design</option>
                  <option value="urban-local-bodies">Urban Local Bodies (ULB)</option>
                  <option value="smart-cities">Smart Cities & ITS</option>
                  <option value="water-resources">Water Resources & Irrigation</option>
                  <option value="industrial-development">Industrial & Infrastructure Development</option>
                  <option value="project-management">Project Management & Supervision</option>
                  <option value="other">Other</option>
                </select>
                <div className={styles.inputBar} />
              </div>
            </div>

            {/* message */}
            <div className={styles.fieldWrap} style={{ marginBottom: '28px' }}>
              <label className={styles.fieldLabel}>Your Message</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell us about your project — location, scope, timeline..."
                className={styles.textarea}
              />
              <div className={styles.inputBar} />
            </div>

            {/* submit */}
            <button type="submit" className={styles.submitBtn}>
              <span>Send Message</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M1 9h16M10 2l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <p className={styles.formNote}>
              🔒 Your information is secure. We never share your data.
            </p>
          </form>

        </div>
      </div>

    </section>
  );
};

export default ContactFormSection;