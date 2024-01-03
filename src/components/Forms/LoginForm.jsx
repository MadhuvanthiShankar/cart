import React from "react";
import "./LoginForm.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className="bgContainer">
      {/* place the bg img here */}
      <div className="formContainer">
        <form action="">
          <h1>Login</h1>
          <div className="input-field">
            <input type="text" placeholder="Username" />
            <FaUser className="icon" />
          </div>
          <div className="input-field">
            <input type="password" placeholder="Password" />
            <FaLock className="icon" />
          </div>
          <div>
            <label>
              <input type="checkbox" name="checkbox" id="check" />
              Remember Me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit">Login</button>
          <div className="RegistrationLink">
            <p>
              Don't have an account? <a href="#">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
