import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { registerUser } from "../../api/authApi";

import "./Auth.css";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
      role: "patient",
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

      await registerUser(formData);

      alert(
        "Registration Successful"
      );

      navigate("/login");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data
          ?.message ||
          "Registration Failed"
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
            Full Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter full name"
            value={formData.name}
            onChange={handleChange}
            required
            className="auth-input"
          />

        </div>

        <div className="auth-group">

          <label className="auth-label">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter email"
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
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
            className="auth-input"
          />

        </div>

        <div className="auth-group">

          <label className="auth-label">
            Select Role
          </label>

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="auth-select"
          >

            <option value="patient">
              Patient
            </option>

            <option value="doctor">
              Doctor
            </option>

          </select>

        </div>

        <button
          type="submit"
          disabled={loading}
          className="auth-button"
        >
          {loading
            ? "Creating Account..."
            : "Register"}
        </button>

        <p className="auth-footer">

          Already have an account?{" "}

          <Link
            to="/login"
            className="auth-link"
          >
            Login
          </Link>

        </p>

      </form>
    </div>
  );
};

export default RegisterForm;