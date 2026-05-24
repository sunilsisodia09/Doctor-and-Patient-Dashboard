import LoginForm from "../../components/auth/LoginForm";
import "./auth.css";

const Login = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1 className="auth-title">Welcome Back</h1>

        <p className="auth-subtitle">
          Login to your healthcare account
        </p>

        <LoginForm />
      </div>
    </div>
  );
};

export default Login;