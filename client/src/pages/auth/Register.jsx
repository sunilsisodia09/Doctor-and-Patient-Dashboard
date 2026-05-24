import RegisterForm from "../../components/auth/RegisterForm";
import "./auth.css";

const Register = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1 className="auth-title">Create Account</h1>

        <p className="auth-subtitle">
          Register as Doctor or Patient
        </p>

        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;