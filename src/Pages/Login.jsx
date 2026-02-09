import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Fake login logic
    alert("Login Successful! (Static Mode)");
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        
        {/* Header with Title and Logo */}
        <div className="login-header">
          <h1 className="welcome-text">Welcome Back</h1>
          <img 
            src="/src/assets/Logo.png" 
            alt="24th mile logo" 
            className="brand-logo"
          />
        </div>

        <form onSubmit={handleLogin} className="login-form">
          
          {/* Email Input */}
          <div className="input-group">
            <label>Email<span className="required-star">*</span></label>
            <input 
              type="email" 
              placeholder="your@mail.com" 
              required 
              className="styled-input"
            />
          </div>

          {/* Password Input */}
          <div className="input-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Enter your password" 
                required 
                className="styled-input"
              />
              <span 
                className="password-toggle-icon" 
                onClick={() => setShowPassword(!showPassword)}
              >
                {/* Standard Eye Icon representation */}
                {showPassword ? '👁️‍🗨️' : '👁️'}
              </span>
            </div>
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="form-options">
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
              Remember me
            </label>
            <span 
              className="forgot-link" 
              onClick={() => navigate('/forgot-password')}
            >
              Forgot Password ?
            </span>
          </div>

          {/* Submit Button */}
          <button type="submit" className="login-submit-btn">
            Log In
          </button>

          {/* Footer Link */}
          <p className="footer-prompt">
            Don’t have an account? 
            <span className="create-account-link" onClick={() => navigate('/register')}>
               Create an Account
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;