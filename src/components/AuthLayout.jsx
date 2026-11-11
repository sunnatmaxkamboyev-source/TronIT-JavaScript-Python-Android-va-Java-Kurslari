import { Link } from "react-router-dom";
import { GraduationCap, Code2, ShieldCheck } from "lucide-react";
import "../pages/Auth.css";

function AuthLayout({ children, title, description, type }) {
  return (
    <main className="auth-page">
      <section className="auth-left">
        <Link to="/" className="auth-logo">
          <span className="auth-logo-icon">
            <GraduationCap size={25} />
          </span>
          <span>
            Tron<span>IT</span>
          </span>
        </Link>

        <div className="auth-form-wrapper">
          <div className="auth-heading">
            <span className="auth-label">
              {type === "login" ? "XUSH KELIBSIZ" : "TRONIT JAMOASIGA QO'SHILING"}
            </span>

            <h1>{title}</h1>
            <p>{description}</p>
          </div>

          {children}
        </div>

        <p className="auth-copyright">
          © {new Date().getFullYear()} TronIT. Barcha huquqlar himoyalangan.
        </p>
      </section>

      <aside className="auth-right">
        <div className="auth-decoration auth-decoration-one" />
        <div className="auth-decoration auth-decoration-two" />

        <div className="auth-promo">
          <div className="auth-promo-icon">
            <Code2 size={35} />
          </div>

          <span className="auth-promo-label">KELAJAGINGIZNI YARATING</span>

          <h2>
            Bilim bilan
            <br />
            <span>chegaralarni</span>
            <br />
            zabt eting.
          </h2>

          <p>
            Dasturlashni o'rganing, yangi ko'nikmalarni egallang
            va IT sohasida o'z yo'lingizni yarating.
          </p>

          <div className="auth-promo-bottom">
            <div className="auth-promo-users">
              <span><GraduationCap size={17} /></span>
              <span><Code2 size={17} /></span>
              <span><ShieldCheck size={17} /></span>
            </div>
            <span>Zamonaviy IT ta'lim platformasi</span>
          </div>
        </div>

        <span className="auth-right-footer">LEARN. BUILD. GROW.</span>
      </aside>
    </main>
  );
}

export default AuthLayout;
