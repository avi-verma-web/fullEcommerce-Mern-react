import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './Login.css'

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/login", { ...user });

      localStorage.setItem("firstlogin", true);

      window.location.href = "/";
      
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={loginSubmit}>
      <h2>Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          required={true}
          onChange={onChangeInput}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          required={true}
          autoComplete="on"
          onChange={onChangeInput}
        />

        <div className="row">
          <button type="submit">Login</button>
          <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
