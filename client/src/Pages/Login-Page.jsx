import React from "react";
import SignUp from "./SignUp-Page";
import { Link } from 'react-router-dom';
import Button from "../Components/Button";
import "../App.css";
function Login() {
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
              <form>
                <label htmlFor="email">E-mail:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="email"
                  placeholder="Enter your E-mail address"
                />
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="password"
                  placeholder="Enter your password"
                />
              <div className="button-containers flex">
                <Button label="Login" className={'.login-button'} width={300}/>
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
