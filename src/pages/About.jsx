
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

import {
  ArrowRight,
  BookOpen,
  Code2,
  GraduationCap,
  MonitorPlay,
  Target,
  ShieldCheck,
  Sparkles,
  Terminal,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";

/* =========================================
   DATA
========================================= */

const statistics = [
  { number: 9, suffix: "", label: "Ta'lim kurslari" },
  { number: 180, suffix: "", label: "Video darslar" },
  { number: 10, suffix: "", label: "IT yo'nalishlari" },
  { number: 24, suffix: "/7", label: "Onlayn foydalanish" },
];

const features = [
  {
    icon: BookOpen,
    number: "01",
    title: "Sifatli ta'lim",
    description:
      "Turli IT yo'nalishlaridagi video darslar orqali yangi bilimlarni o'rganing.",
  },
  {
    icon: MonitorPlay,
    number: "02",
    title: "Qulay platforma",
    description:
      "Kurslarni istalgan qurilmadan va o'zingizga qulay vaqtda tomosha qiling.",
  },
  {
    icon: Target,
    number: "03",
    title: "Maqsad sari",
    description:
      "O'z yo'nalishingizni tanlang va bilimlaringizni bosqichma-bosqich rivojlantiring.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Tizimli o'rganish",
    description:
      "Kurslar va darslar tartibli tuzilgan, kerakli mavzuni topish oson.",
  },
];

/* =========================================
   ANIMATION VARIANTS
========================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

/* =========================================
   REVEAL COMPONENT
========================================= */

function Reveal({ children, className = "" }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

/* =========================================
   ANIMATED COUNTER
========================================= */

function AnimatedCounter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      setCount(value);
      return;
    }

    let frame;
    let startTime;

    const duration = 1400;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const eased = 1 - Math.pow(1 - progress, 4);

      setCount(Math.round(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [value, reduceMotion]);

  return (
    <>
      {String(count).padStart(value < 10 ? 2 : 1, "0")}
      {suffix}
    </>
  );
}

/* =========================================
   ANIMATED CODE EDITOR
========================================= */

const codeLines = [
  { text: "const future = {", color: "purple" },
  { text: "  name: 'Your Future',", color: "normal" },
  { text: "  skills: [", color: "green" },
  { text: "    'Programming',", color: "string" },
  { text: "    'Technology',", color: "string" },
  { text: "    'Creativity'", color: "string" },
  { text: "  ],", color: "green" },
  { text: "  success: true,", color: "blue" },
  { text: "  platform: 'TronIT'", color: "string" },
  { text: "};", color: "purple" },
  { text: "", color: "normal" },
  { text: "console.log(future);", color: "command" },
];

function AnimatedCodeCard() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      setVisibleLines(codeLines.length);
      setIsTyping(false);
      return;
    }

    let currentLine = 0;
    let timeout;

    const typeNextLine = () => {
      if (currentLine < codeLines.length) {
        currentLine += 1;

        setVisibleLines(currentLine);

        timeout = setTimeout(typeNextLine, 380);
      } else {
        setIsTyping(false);

        timeout = setTimeout(() => {
          currentLine = 0;

          setVisibleLines(0);
          setIsTyping(true);

          timeout = setTimeout(typeNextLine, 700);
        }, 3500);
      }
    };

    timeout = setTimeout(typeNextLine, 500);

    return () => clearTimeout(timeout);
  }, [reduceMotion]);

  return (
    <motion.div
      className="about-code-window animated-code-window"
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 35,
              rotateX: 12,
            }
      }
      animate={{
        opacity: 1,
        y: 0,
        rotateX: 0,
      }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      whileHover={
        reduceMotion
          ? {}
          : {
              scale: 1.025,
              rotateY: -3,
            }
      }
    >
      {/* EDITOR HEADER */}

      <div className="about-window-header animated-editor-header">
        <div className="about-window-dots">
          <span />
          <span />
          <span />
        </div>

        <div className="editor-file-name">
          <Code2 size={13} />
          <span>future.js</span>
        </div>

        <div className="editor-live-status">
          <span />
          LIVE
        </div>
      </div>

      {/* EDITOR BODY */}

      <div className="animated-editor-body">
        <div className="editor-sidebar">
          <div className="editor-sidebar-icon active">
            <Code2 size={17} />
          </div>

          <div className="editor-sidebar-icon">
            <BookOpen size={17} />
          </div>

          <div className="editor-sidebar-icon">
            <Target size={17} />
          </div>
        </div>

        <div className="animated-code-content">
          <div className="editor-tab">
            <span className="editor-tab-dot" />
            future.js
            <span className="editor-tab-close">×</span>
          </div>

          {/* CODE */}

          <div className="editor-code-lines">
            {codeLines.slice(0, visibleLines).map((line, index) => (
              <motion.div
                className="editor-code-line"
                key={index}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        x: -8,
                      }
                }
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.22,
                }}
              >
                <span className="editor-line-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className={`editor-code-text ${line.color}`}>
                  {line.text || "\u00A0"}
                </span>

                {index === visibleLines - 1 && isTyping && (
                  <span className="editor-typing-cursor" />
                )}
              </motion.div>
            ))}

            {visibleLines === 0 && (
              <div className="editor-empty-line">
                <span className="editor-line-number">01</span>
                {isTyping && <span className="editor-typing-cursor" />}
              </div>
            )}
          </div>

          {/* TERMINAL */}

          <div className="editor-terminal">
            <div className="terminal-heading">
              <Terminal size={12} />

              <span className="terminal-indicator" />

              TERMINAL

              <span className="terminal-chevron">⌄</span>
            </div>

            <div className="terminal-content">
              <span className="terminal-prompt">❯</span>
              <span>npm run build</span>
              <span className="terminal-success">
                ✓ Ready
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* EDITOR FOOTER */}

      <div className="animated-editor-footer">
        <span>
          <span className="footer-status-dot" />
          JavaScript
        </span>

        <span>UTF-8</span>

        <span>TronIT Editor</span>
      </div>

      {/* SCAN EFFECT */}

      <div className="editor-scan-line" />
    </motion.div>
  );
}

/* =========================================
   ABOUT PAGE
========================================= */

function About() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <Navbar />

      <main className="about-page">

        {/* HERO */}

        <section className="about-hero">
          <div className="about-container about-hero-grid">

            <motion.div
              className="about-hero-content"
              initial={reduceMotion ? false : "hidden"}
              animate="visible"
              variants={stagger}
            >
              <motion.div
                className="about-eyebrow"
                variants={fadeUp}
              >
                <span className="about-eyebrow-dot" />
                TRONIT TA'LIM PLATFORMASI
              </motion.div>

              <motion.h1 variants={fadeUp}>
                Kelajakni
                <br />
                <span>bilim bilan</span>
                <br />
                yarating.
              </motion.h1>

              <motion.p variants={fadeUp}>
                IT olamiga qadam qo'ying. Zamonaviy texnologiyalarni
                o'rganing, yangi ko'nikmalar egallang va o'z
                imkoniyatlaringizni kengaytiring.
              </motion.p>

              <motion.div
                className="about-hero-actions"
                variants={fadeUp}
              >
                <Link
                  to="/courses"
                  className="about-primary-button"
                >
                  Kurslarni ko'rish
                  <ArrowRight size={19} />
                </Link>

                <span className="about-hero-note">
                  <Sparkles size={17} />
                  Bilim sari yangi qadam
                </span>
              </motion.div>
            </motion.div>

            {/* RIGHT CODE EDITOR */}

            <div className="about-visual">
              <motion.div
                className="about-visual-glow"
                animate={
                  reduceMotion
                    ? {}
                    : {
                        scale: [1, 1.12, 1],
                        opacity: [0.6, 1, 0.6],
                      }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <AnimatedCodeCard />

              {/* FLOATING CARD TOP */}

              <motion.div
                className="about-floating-card about-floating-top"
                animate={
                  reduceMotion
                    ? {}
                    : {
                        y: [0, -10, 0],
                        x: [0, 4, 0],
                      }
                }
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="about-floating-icon">
                  <Code2 size={21} />
                </div>

                <div>
                  <strong>Learn to code</strong>
                  <span>Build your future</span>
                </div>
              </motion.div>

              {/* FLOATING CARD BOTTOM */}

              <motion.div
                className="about-floating-card about-floating-bottom"
                animate={
                  reduceMotion
                    ? {}
                    : {
                        y: [0, 10, 0],
                        x: [0, -4, 0],
                      }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="about-floating-icon">
                  <GraduationCap size={22} />
                </div>

                <div>
                  <strong>TronIT</strong>
                  <span>Knowledge starts here</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* STATISTICS */}

        <section className="about-statistics">
          <motion.div
            className="about-container about-statistics-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.4,
            }}
          >
            {statistics.map((item) => (
              <motion.div
                className="about-stat-item"
                key={item.label}
                variants={fadeUp}
                whileHover={
                  reduceMotion
                    ? {}
                    : {
                        y: -6,
                      }
                }
              >
                <strong>
                  <AnimatedCounter
                    value={item.number}
                    suffix={item.suffix}
                  />
                </strong>

                <span>{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ABOUT INTRO */}

        <section className="about-intro">
          <div className="about-container about-intro-grid">

            <Reveal className="about-section-heading">
              <span className="about-label">
                BIZ HAQIMIZDA
              </span>

              <h2>
                Texnologiyalar olamiga
                <span> ochiq eshik.</span>
              </h2>
            </Reveal>

            <Reveal className="about-intro-text">
              <p>
                TronIT — zamonaviy IT bilimlarini o'rganish uchun
                yaratilgan onlayn ta'lim platformasi.
              </p>

              <p>
                Bizning maqsadimiz — dasturlash va texnologiyalarga
                qiziqqan insonlar uchun bilim olish jarayonini
                qulayroq va tushunarliroq qilish.
              </p>

              <Link
                to="/courses"
                className="about-text-link"
              >
                Ta'lim yo'nalishlari
                <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* FEATURES */}

        <section className="about-features">
          <div className="about-container">

            <Reveal className="about-features-heading">
              <div>
                <span className="about-label">
                  NEGA TRONIT?
                </span>

                <h2>
                  O'rganish uchun kerakli imkoniyatlar.
                </h2>
              </div>

              <p>
                Bilim olish jarayonini sodda, qulay va samarali
                tashkil qilishga intilamiz.
              </p>
            </Reveal>

            <motion.div
              className="about-feature-grid"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.15,
              }}
            >
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <motion.article
                    className="about-feature-card"
                    key={feature.number}
                    variants={fadeUp}
                    whileHover={
                      reduceMotion
                        ? {}
                        : {
                            y: -10,
                            scale: 1.02,
                          }
                    }
                    whileTap={{
                      scale: 0.98,
                    }}
                  >
                    <div className="about-feature-top">
                      <motion.div
                        className="about-feature-icon"
                        whileHover={
                          reduceMotion
                            ? {}
                            : {
                                rotate: 10,
                                scale: 1.1,
                              }
                        }
                      >
                        <Icon size={23} />
                      </motion.div>

                      <span>{feature.number}</span>
                    </div>

                    <h3>{feature.title}</h3>

                    <p>{feature.description}</p>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* CTA */}

        <section className="about-cta-section">
          <Reveal className="about-container">
            <motion.div
              className="about-cta"
              whileHover={
                reduceMotion
                  ? {}
                  : {
                      scale: 1.008,
                    }
              }
            >
              <motion.div
                className="about-cta-content"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                }}
              >
                <motion.span variants={fadeUp}>
                  TRONIT BILAN BOSHLANG
                </motion.span>

                <motion.h2 variants={fadeUp}>
                  Kelajagingiz
                  <br />
                  bugundan boshlanadi.
                </motion.h2>

                <motion.p variants={fadeUp}>
                  O'zingizga mos kursni tanlang va yangi bilimlar
                  sari ilk qadamingizni qo'ying.
                </motion.p>
              </motion.div>

              <Link
                to="/courses"
                className="about-cta-button"
              >
                Kurslarni boshlash
                <ArrowRight size={19} />
              </Link>

              <motion.div
                className="about-cta-decoration"
                animate={
                  reduceMotion
                    ? {}
                    : {
                        rotate: [-15, -8, -15],
                        y: [0, -8, 0],
                      }
                }
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <GraduationCap size={180} />
              </motion.div>
            </motion.div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default About;
