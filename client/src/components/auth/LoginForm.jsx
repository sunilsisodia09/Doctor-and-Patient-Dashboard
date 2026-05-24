import { useState } from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import { loginUser } from "../../api/authApi";

import "./Auth.css";

const LoginForm = () => {
  const navigate = useNavigate();

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } =
        await loginUser(formData);

      localStorage.setItem(
        "token",
        data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      if (
        data.user.role === "doctor"
      ) {
        navigate(
          "/doctor/dashboard"
        );
      } else {
        navigate(
          "/patient/dashboard"
        );
      }
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data
          ?.message ||
          "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">

      <form
        onSubmit={handleSubmit}
        className="auth-form"
      >

        <div className="auth-group">

          <label className="auth-label">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="auth-input"
          />

        </div>

        <div className="auth-group">

          <label className="auth-label">
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
            className="auth-input"
          />

        </div>

        <button
          type="submit"
          disabled={loading}
          className="auth-button"
        >
          {loading
            ? "Please Wait..."
            : "Login"}
        </button>

        <p className="auth-footer">

          Don’t have an account?{" "}

          <Link
            to="/register"
            className="auth-link"
          >
            Register
          </Link>

        </p>

      </form>
    </div>
  );
};

export default LoginForm;