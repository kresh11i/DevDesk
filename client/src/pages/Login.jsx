import React, { useState, useContext } from "react";
import Input from "../components/Input";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn } = useContext(AuthContext);
  const handleForm = (e) => {
    e.preventDefault();
    logIn();
    setEmail("");
    setPassword("");
    navigate("/dashboard");
  };
  return (
    <>
      <form onSubmit={handleForm}>
        <Input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          title="email"
          type="email"
          placeholder="Enter your email"
        />
        <Input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          title="password"
          type="password"
          placeholder="Enter your password"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
