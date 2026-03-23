'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import useInView from './hooks/useInView';
import styles from '../styles/Testimonials.module.css';


const testimonials = [
  {
    name: 'Rajesh Verma',
    role: 'Project Director',
    company: 'NHAI, Delhi',
    initials: 'RV',
    color: 'orange',
    rating: 5,
    text: 'Aman delivered our highway dashboard ahead of schedule. The UI was clean, fast, and exactly what our team needed. His attention to detail and responsiveness throughout the project was outstanding.',
  },
  {
    name: 'Priya Mehta',
    role: 'Senior Engineer',
    company: 'DMRC, Mumbai',
    initials: 'PM',
    color: 'blue',
    rating: 5,
    text: 'Working with CodeLabBro was a fantastic experience. He built our project management portal from scratch — the code was clean, well-documented, and the animations were top-notch.',
  },
  {
    name: 'Arjun Singh',
    role: 'Startup Founder',
    company: 'TechVenture India',
    initials: 'AS',
    color: 'green',
    rating: 5,
    text: 'Aman took our rough idea and turned it into a fully working SaaS product. His full-stack skills — React, Node, MongoDB — saved us months of development time. Highly recommend!',
  },
  {
    name: 'Sneha Kapoor',
    role: 'UI/UX Lead',
    company: 'DesignFirst Studio',
    initials: 'SK',
    color: 'purple',
    rating: 5,
    text: 'Rare to find a developer who understands design this well. Aman translated my Figma files pixel-perfectly and added smooth animations that made our client absolutely love the final product.',
  },
  {
    name: 'Vikram Nair',
    role: 'CTO',
    company: 'LogiTrack Solutions',
    initials: 'VN',
    color: 'orange',
    rating: 5,
    text: 'We needed a real-time tracking dashboard built fast. Aman delivered in 2 weeks — WebSocket integration, clean UI, mobile responsive. Quality of work was senior-level for sure.',
  },
  {
    name: 'Aisha Siddiqui',
    role: 'Product Manager',
    company: 'HealthSync App',
    initials: 'AI',
    color: 'blue',
    rating: 5,
    text: 'Our clinic management system was built by Aman. He understood the complex requirements quickly, asked the right questions, and delivered a solution that our doctors actually enjoy using daily.',
  },
  {
    name: 'Rohit Chandra',
    role: 'E-commerce Owner',
    company: 'CodelabbBro Shop',
    initials: 'RC',
    color: 'green',
    rating: 5,
    text: 'My online store went from zero to fully functional in 3 weeks. Cart, payments, admin panel — everything works flawlessly. Aman is my go-to developer for all future projects.',
  },
  {
    name: 'Deepak Sharma',
    role: 'Infrastructure Consultant',
    company: 'PWD Rajasthan',
    initials: 'DS',
    color: 'purple',
    rating: 5,
    text: 'The Terraman landing page Aman built for us is simply world-class. Every client who visits compliments the design. It truly reflects our brand as a premium engineering consultancy.',
  },
  {
    name: 'Neha Gupta',
    role: 'HR Manager',
    company: 'BuildTech Corp',
    initials: 'NG',
    color: 'orange',
    rating: 5,
    text: "Aman built our internal HR portal and the experience was seamless. He communicated clearly, hit every deadline, and the UI is so intuitive that our team needed zero training. Loved working with him.",
  },
  {
    name: 'Suresh Pillai',
    role: 'Urban Planner',
    company: 'Smart Cities Mission',
    initials: 'SP',
    color: 'blue',
    rating: 5,
    text: 'Outstanding work on our GIS data visualization dashboard. Aman handled complex map integrations, dynamic filters, and real-time data updates — all while keeping the interface clean and user-friendly.',
  },
];

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 1l1.5 3.5L12 5l-2.5 2.5.5 3.5L7 9.5 4 11l.5-3.5L2 5l3.5-.5L7 1z" fill="#F97316"/>
    </svg>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const VISIBLE = 3;

  const goTo = (idx: number, dir: 'left' | 'right') => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 400);
  };

  const next = () => goTo((current + 1) % testimonials.length, 'right');
  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length, 'left');

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 4500);
  };

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [current]);

  // get 3 visible cards
  const visible = Array.from({ length: VISIBLE }, (_, i) =>
    testimonials[(current + i) % testimonials.length]
  );

  return (
    <section className={styles.section}>
      <div className={styles.dotGrid} />

      <div className={styles.inner}>

        {/* header */}
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <div className={styles.eyebrowLine} />
            <span className={styles.eyebrowText}>Client Feedback</span>
            <div className={styles.eyebrowLine} />
          </div>
          <h2 className={styles.heading}>
            What Clients <span>Say</span>
          </h2>
          <p className={styles.subheading}>
            Real feedback from real people — across engineering, startups, and product teams.
          </p>
        </div>

        {/* cards */}
        <div className={styles.cardsWrap}>
          <div
            className={`${styles.cards} ${animating ? (direction === 'right' ? styles.slideOutLeft : styles.slideOutRight) : styles.slideIn}`}
          >
            {visible.map((t, i) => (
              <div key={`${t.name}-${current}-${i}`} className={`${styles.card} ${i === 1 ? styles.cardCenter : ''}`}>
                <div className={styles.cardTopBar} />

                {/* quote mark */}
                <span className={styles.quoteMark}>"</span>

                {/* stars */}
                <div className={styles.stars}>
                  {Array.from({ length: t.rating }).map((_, si) => <StarIcon key={si} />)}
                </div>

                {/* text */}
                <p className={styles.cardText}>{t.text}</p>

                {/* divider */}
                <div className={styles.cardDivider} />

                {/* person */}
                <div className={styles.person}>
                  <div className={`${styles.avatar} ${styles[`avatar_${t.color}`]}`}>
                    {t.initials}
                  </div>
                  <div>
                    <span className={styles.personName}>{t.name}</span>
                    <span className={styles.personRole}>{t.role} · {t.company}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* controls */}
        <div className={styles.controls}>

          {/* dots */}
          <div className={styles.dots}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                onClick={() => { goTo(i, i > current ? 'right' : 'left'); resetTimer(); }}
              />
            ))}
          </div>

          {/* arrows */}
          <div className={styles.arrows}>
            <button className={styles.arrow} onClick={() => { prev(); resetTimer(); }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M11 4L6 9l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className={styles.arrow} onClick={() => { next(); resetTimer(); }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M7 4l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

        </div>

        {/* progress bar */}
        <div className={styles.progressWrap}>
          <div className={styles.progressBar}>
            <div
              key={current}
              className={styles.progressFill}
            />
          </div>
          <span className={styles.progressCount}>
            {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
          </span>
        </div>

      </div>
    </section>
  );
}