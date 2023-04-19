/** @format */

import { Link, useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import { AppContext } from "../context/Context";
import "../Login.css";
import "../components/Input/Form.css";
import { Input } from "../components/Input/Input";
import { Api } from "../api/Api";

function Login() {
  const navigate = useNavigate();
  const context = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      const user = { email, password };
      Api(`/user/login`, user, "POST", null)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className='wrapper'>
      <h1 className='title'>Login</h1>
      <form className='form'>
        <Input
          label={"Email"}
          type={"email"}
          name='email'
          required={true}
          handleChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          label={"Password"}
          type={"password"}
          name='password'
          required={true}
          handleChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className='my'>
          <button type='submit' className='btn btn-lg' onClick={handleLogin}>
            Login
          </button>
        </div>
      </form>
      <Link to={"/register"} className='link'>
        Create Account
      </Link>
    </div>
  );
}

export default Login;
