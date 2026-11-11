import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Code2,
  GraduationCap,
  MonitorPlay,
  Target,
  Users,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";

const statistics = [
  { number: "09", label: "Ta'lim kurslari" },
  { number: "180", label: "Video darslar" },
  { number: "10", label: "IT yo'nalishlari" },
  { number: "24/7", label: "Onlayn foydalanish" },
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

function About() {
  return (
    <>
      <Navbar />

      <main className="about-page">

        {/* HERO */}
        <section className="about-hero">
          <div className="about-container about-hero-grid">
            <div className="about-hero-content">
              <div className="about-eyebrow">
                <span className="about-eyebrow-dot" />
                TRONIT TA'LIM PLATFORMASI
              </div>

              <h1>
                Kelajakni
                <br />
                <span>bilim bilan</span>
                <br />
                yarating.
              </h1>

              <p>
                IT olamiga qadam qo'ying. Zamonaviy texnologiyalarni
                o'rganing, yangi ko'nikmalar egallang va o'z
                imkoniyatlaringizni kengaytiring.
              </p>

              <div className="about-hero-actions">
                <Link to="/courses" className="about-primary-button">
                  Kurslarni ko'rish
                  <ArrowRight size={19} />
                </Link>

                <span className="about-hero-note">
                  <Sparkles size={17} />
                  Bilim sari yangi qadam
                </span>
              </div>
            </div>

            <div className="about-visual">
              <div className="about-visual-glow" />

              <div className="about-code-window">
                <div className="about-window-header">
                  <div className="about-window-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span>your-future.js</span>
                </div>

                <div className="about-code-content">
                  <div>
                    <span className="about-code-purple">const</span>{" "}
                    <span className="about-code-blue">future</span> = {"{"}
                  </div>
                  <div className="about-code-indent">
                    <span className="about-code-green">skills</span>: [
                  </div>
                  <div className="about-code-indent-2">
                    "Programming",
                  </div>
                  <div className="about-code-indent-2">
                    "Technology",
                  </div>
                  <div className="about-code-indent-2">
                    "Creativity"
                  </div>
                  <div className="about-code-indent">],</div>
                  <div className="about-code-indent">
                    <span className="about-code-green">success</span>: true
                  </div>
                  <div>{"};"}</div>
                  <div className="about-code-bottom">
                    <span className="about-code-purple">console.log</span>
                    <span>(future);</span>
                  </div>
                </div>
              </div>

              <div className="about-floating-card about-floating-top">
                <div className="about-floating-icon">
                  <Code2 size={21} />
                </div>
                <div>
                  <strong>Learn to code</strong>
                  <span>Build your future</span>
                </div>
              </div>

              <div className="about-floating-card about-floating-bottom">
                <div className="about-floating-icon">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <strong>TronIT</strong>
                  <span>Knowledge starts here</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATISTICS */}
        <section className="about-statistics">
          <div className="about-container about-statistics-grid">
            {statistics.map((item) => (
              <div className="about-stat-item" key={item.label}>
                <strong>{item.number}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="about-intro">
          <div className="about-container about-intro-grid">
            <div className="about-section-heading">
              <span className="about-label">BIZ HAQIMIZDA</span>
              <h2>
                Texnologiyalar olamiga
                <span> ochiq eshik.</span>
              </h2>
            </div>

            <div className="about-intro-text">
              <p>
                TronIT — zamonaviy IT bilimlarini o'rganish uchun
                yaratilgan onlayn ta'lim platformasi.
              </p>

              <p>
                Bizning maqsadimiz — dasturlash va texnologiyalarga
                qiziqqan insonlar uchun bilim olish jarayonini
                qulayroq va tushunarliroq qilish.
              </p>

              <Link to="/courses" className="about-text-link">
                Ta'lim yo'nalishlari
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="about-features">
          <div className="about-container">
            <div className="about-features-heading">
              <div>
                <span className="about-label">NEGA TRONIT?</span>
                <h2>O'rganish uchun kerakli imkoniyatlar.</h2>
              </div>

              <p>
                Bilim olish jarayonini sodda, qulay va samarali
                tashkil qilishga intilamiz.
              </p>
            </div>

            <div className="about-feature-grid">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article className="about-feature-card" key={feature.number}>
                    <div className="about-feature-top">
                      <div className="about-feature-icon">
                        <Icon size={23} />
                      </div>
                      <span>{feature.number}</span>
                    </div>

                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="about-cta-section">
          <div className="about-container">
            <div className="about-cta">
              <div className="about-cta-content">
                <span>TRONIT BILAN BOSHLANG</span>
                <h2>
                  Kelajagingiz
                  <br />
                  bugundan boshlanadi.
                </h2>
                <p>
                  O'zingizga mos kursni tanlang va yangi bilimlar
                  sari ilk qadamingizni qo'ying.
                </p>
              </div>

              <Link to="/courses" className="about-cta-button">
                Kurslarni boshlash
                <ArrowRight size={19} />
              </Link>

              <div className="about-cta-decoration">
                <GraduationCap size={180} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default About;
