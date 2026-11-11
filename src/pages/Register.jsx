
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";
import AuthLayout from "../components/AuthLayout";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (form.password.length < 8) {
      setMessage("Parol kamida 8 ta belgidan iborat bo'lishi kerak.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setMessage("Parollar bir-biriga mos kelmayapti.");
      return;
    }

    setMessage("Ro'yxatdan o'tish tizimi hali backendga ulanmagan.");
  }

  return (
    <AuthLayout
      type="register"
      title="Yangi hisob yarating"
      description="TronIT platformasiga qo'shiling va o'rganishni boshlang."
    >
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="auth-field">
          <label htmlFor="register-name">Ism va familiya</label>
          <div className="auth-input-wrapper">
            <User size={19} />
            <input
              id="register-name"
              name="name"
              type="text"
              placeholder="Ism Familiya"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="auth-field">
          <label htmlFor="register-email">Email manzil</label>
          <div className="auth-input-wrapper">
            <Mail size={19} />
            <input
              id="register-email"
              name="email"
              type="email"
              placeholder="example@gmail.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="auth-field">
          <label htmlFor="register-password">Parol</label>
          <div className="auth-input-wrapper">
            <Lock size={19} />
            <input
              id="register-password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Kamida 8 ta belgi"
              value={form.password}
              onChange={handleChange}
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

        <div className="auth-field">
          <label htmlFor="register-confirm">Parolni tasdiqlang</label>
          <div className="auth-input-wrapper">
            <Lock size={19} />
            <input
              id="register-confirm"
              name="confirmPassword"
              type={showConfirm ? "text" : "password"}
              placeholder="Parolni qayta kiriting"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="auth-eye-button"
              onClick={() => setShowConfirm(!showConfirm)}
              aria-label="Tasdiqlash parolini ko'rsatish"
            >
              {showConfirm ? <EyeOff size={19} /> : <Eye size={19} />}
            </button>
          </div>
        </div>

        {message && <p className="auth-message">{message}</p>}

        <button type="submit" className="auth-submit">
          Hisob yaratish
          <ArrowRight size={19} />
        </button>

        <div className="auth-switch">
          Hisobingiz bormi?
          <Link to="/login">Kirish</Link>
        </div>
      </form>
    </AuthLayout>
  );
}

export default Register;
