'use client';
import React, { useState, useRef } from 'react';
import useInView from './hooks/useInView';
import styles from '../styles/ContactFormSection.module.css';
import { submitInquiry } from '@/lib/inquiry';

const IconMap = {
  Office: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" /></svg>,
  Email: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
  Phone: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-4.71-4.71 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.08 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
  Website: (props: any) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
};

const ContactFormSection: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [showModal, setShowModal] = useState(false); // Custom Popup State
  const formRef = useRef<HTMLFormElement>(null);

  async function handleAction(formData: FormData) {
    const result = await submitInquiry(formData);
    if (result.success) {
      setShowModal(true); // Show custom dark popup
      formRef.current?.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" ref={ref} className={styles.contactSection}>
      
      {/* --- CUSTOM POPUP MODAL --- */}
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h3>SUCCESS</h3>
            <p>Thank you! Your inquiry has been sent successfully to Terraman Infratech.</p>
            <button onClick={() => setShowModal(false)} className={styles.closeBtn}>CLOSE</button>
          </div>
        </div>
      )}

      <div className={styles.sectionTitleWrapper}>
        <h2 className={`${styles.mainHeading} ${inView ? styles.animatedText : ''}`}>
          GET IN TOUCH
        </h2>
        <p className={`${styles.subHeading} ${inView ? styles.animatedText : ''}`} style={{ transitionDelay: '0.1s' }}>
          We are ready to discuss your next infrastructure challenge.
        </p>
      </div>

      <div className={styles.formContainer}>
        {/* === A. Contact Details Card (FIXED CONTENT) === */}
        <div className={`${styles.detailsCard} ${inView ? styles.animated : ''}`} style={{ transitionDelay: '0.2s' }}>
          <h3 className={styles.detailsTitle}>Contact Information</h3>

          <div className={styles.detailItem}>
            <IconMap.Office className={styles.detailIcon} />
            <div className={styles.detailText}>
              <span className={styles.detailLabel}>Registered Office</span>
              <p>404, ABC Tower, XYZ Road, New Delhi, India 110001</p>
            </div>
          </div>

          <div className={styles.detailItem}>
            <IconMap.Email className={styles.detailIcon} />
            <div className={styles.detailText}>
              <span className={styles.detailLabel}>Email:</span>
              <p>contact@terraman.com</p>
            </div>
          </div>

          <div className={styles.detailItem}>
            <IconMap.Phone className={styles.detailIcon} />
            <div className={styles.detailText}>
              <span className={styles.detailLabel}>Phone:</span>
              <p>+91 9876 543 210</p>
            </div>
          </div>

          <div className={styles.detailItem}>
            <IconMap.Website className={styles.detailIcon} />
            <div className={styles.detailText}>
              <span className={styles.detailLabel}>Website:</span>
              <p>www.terraman.com</p>
            </div>
          </div>
        </div>

        {/* === B. Inquiry Form (FIXED WITH SERVER ACTION) === */}
        <form 
          ref={formRef}
          action={handleAction} 
          className={`${styles.inquiryForm} ${inView ? styles.animated : ''}`} 
          style={{ transitionDelay: '0.3s' }}
        >
          <h3 className={styles.formTitle}>Send an Inquiry</h3>

          <div className={styles.inputGroup}>
            <input type="text" placeholder="Your Full Name" name="name" required className={styles.inputField} />
            <input type="email" placeholder="Your Email Address" name="email" required className={styles.inputField} />
          </div>

          <div className={styles.inputGroup}>
            <input type="tel" placeholder="Your Phone Number" name="phone" required className={styles.inputField} />
            <select name="service" required className={styles.inputField}>
              <option value="">Service Needed</option>
              <option value="highway-design">Highway & Road Design</option>
              <option value="urban-local-bodies">Urban Local Bodies (ULB)</option>
              <option value="smart-cities">Smart Cities & ITS</option>
              <option value="water-resources">Water Resources & Irrigation</option>
              <option value="industrial-development">Industrial & Infrastructure Development</option>
              <option value="project-management">Project Management & Supervision</option>
              <option value="other">Other</option>
            </select>
          </div>

          <textarea placeholder="Tell us about your project or inquiry..." rows={4} name="message" required className={styles.textareaField}></textarea>

          <button type="submit" className={styles.submitBtn}>
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;