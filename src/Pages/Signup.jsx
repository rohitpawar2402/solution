import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fake signup logic
    alert("Account Created Successfully! (Static Mode)");
    navigate('/login');
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-box">
        
        <div className="signup-header">
          <h1 className="title">Sign up</h1>
          <img 
            src="src\assets\Logo.png" 
            alt="24th mile logo" 
            className="logo"
          />
        </div>

        <form onSubmit={handleSubmit} className="form-content">
          <div className="field-group">
            <label>Email<span className="req">*</span></label>
            <input type="email" placeholder="your@mail.com" required />
          </div>

          <div className="field-group">
            <label>PAN<span className="req">*</span></label>
            <input type="text" placeholder="Enter your PAN number" required />
          </div>

          <div className="field-group">
            <label>Country<span className="req">*</span></label>
            <select className="dropdown" required>
              <option value="">Select country</option>
              <option value="IN">India</option>
              {/* Add more countries as needed */}
            </select>
          </div>

          <div className="field-group relative-pos">
            <label>Password</label>
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Enter your password" 
            />
            <span 
              className="eye-icon" 
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '👁️‍🗨️' : '👁️'}
            </span>
          </div>

          <div className="field-group relative-pos">
            <label>Confirm Password</label>
            <input 
              type={showConfirmPassword ? "text" : "password"} 
              placeholder="Enter your confirm password" 
            />
            <span 
              className="eye-icon" 
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? '👁️‍🗨️' : '👁️'}
            </span>
          </div>

          <div className="field-group">
            <label>Mobile number <span className="req">*</span></label>
            <div className="phone-row">
              <input type="text" defaultValue="+91" className="code-box" readOnly />
              <input type="tel" placeholder="Phone Number" className="phone-box" required />
            </div>
          </div>

          <button type="submit" className="submit-btn">Create Account</button>

          <div className="separator">
            <span>or continue with</span>
          </div>

          <button type="button" className="google-btn">
            <img src="https://www.google.com/favicon.ico" alt="Google" />
            Google
          </button>

          <p className="login-prompt">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;