
import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";
import AuthLayout from "../components/AuthLayout";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setMessage("Login tizimi hali backendga ulanmagan.");
  }

  return (
    <AuthLayout
      type="login"
      title="Hisobingizga kiring"
      description="O'rganishni davom ettirish uchun ma'lumotlaringizni kiriting."
    >
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="auth-field">
          <label htmlFor="login-email">Email manzil</label>
          <div className="auth-input-wrapper">
            <Mail size={19} />
            <input
              id="login-email"
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="auth-field">
          <div className="auth-label-row">
            <label htmlFor="login-password">Parol</label>
            <Link to="/forgot-password">Parolni unutdingizmi?</Link>
          </div>

          <div className="auth-input-wrapper">
            <Lock size={19} />
            <input
              id="login-password"
              type={showPassword ? "text" : "password"}
              placeholder="Parolingizni kiriting"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="auth-eye-button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Parolni ko'rsatish"
            >
              {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
            </button>
          </div>
        </div>

        {message && <p className="auth-message">{message}</p>}

        <button type="submit" className="auth-submit">
          Hisobga kirish
          <ArrowRight size={19} />
        </button>

        <div className="auth-switch">
          Hisobingiz yo'qmi?
          <Link to="/register">Ro'yxatdan o'ting</Link>
        </div>
      </form>
    </AuthLayout>
  );
}

export default Login;
