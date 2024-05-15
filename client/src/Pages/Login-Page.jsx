import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className="glass-effect">
        <div className="flex container box">
          <div className="grid grid-two-cols">
            <div className="login-form ">
              <h1>Welcome</h1>
              <p>
                Don't have an account yet? <Link to="/signup">SignUp</Link>
              </p>
              <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="email"
                  placeholder="Enter your E-mail address"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password:</label>
                <div className="password-input">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </button>
                </div>
                <div className="button-containers flex">
                  <button type="submit" className="login-button">
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div className="login-image ">
              <img
                src="/person.png"
                alt="This is person image la"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
