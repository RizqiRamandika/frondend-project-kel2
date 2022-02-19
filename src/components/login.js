import React, { useState } from "react";
import axios from "axios";
import "../assets/css/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const history = useHistory();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/login", {
        email: email,
        password: password,
      });
      history.push("/Home");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div class="row main-content bg-dark text-center">
            <div class="col-md-4 text-center company__info">
              <span class="company__logo">
                <h2>
                  <span>
                    <FontAwesomeIcon icon={faLock} className="faaa" />
                  </span>
                </h2>
              </span>
            </div>
            <div class="col-md-8 col-xs-12 col-sm-12 login_form ">
              <div class="container-fluid">
                <br />
                <div class="row">
                  <h2>Log In</h2>
                </div>
                <div class="row">
                  <form control="" class="form-group fromm" onSubmit={Auth}>
                    <p className="has-text-centered">{msg}</p>
                    <div class="row">
                      <input
                        type="text"
                        className="input"
                        placeholder="Username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <br />
                    <div class="row">
                      <input
                        type="password"
                        className="input"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <br />
                    <p>
                      Belum memiliki akun?{" "}
                      <i>
                        <a href="/Register">Register</a>
                      </i>
                    </p>
                    <div class="row top">
                      <input type="submit" value="LOGIN" class="bttn" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
