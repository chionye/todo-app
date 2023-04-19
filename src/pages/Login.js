import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../Login.css";
import "../components/Input/Form.css";
import { Input } from "../components/Input/Input";
import { Api } from "../api/Api";
import { Storage } from "../storage/Storage";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      const user = { email, password };
      Api(`/user/login`, user, "POST", null)
        .then((res) => res.json())
        .then((data) => {
          Storage.set("user", JSON.stringify(data));
          navigate("/dashboard");
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
