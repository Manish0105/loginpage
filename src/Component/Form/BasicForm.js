import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const BasicForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setallEntry] = useState([]);
  let history = useHistory();

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    setallEntry([...allEntry, newEntry]);
    console.log(allEntry);
  };
  const clearButton = () => {
    setPassword("");
    setEmail("");
  };
  const loginCheck = () => {
    if (email === "manish" && password === "kumar") {
      history.push("/profile");
    } else {
      alert("Username or Password is wrong");
    }
  };
  return (
    <>
      <div className="parentLoginDiv">
        <form action="" onSubmit={submitForm}>
          <div align="center">
            <h2>Login Form</h2>
          </div>
          <div Align="center">
            {/* <label htmlFor="email">Email ID</label> */}
            <input
              type="text"
              name="email"
              placeholder="Username"
              id="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div align="center">
            {/* <label htmlFor="password">Password</label> */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div align="center">
            <button onClick={loginCheck} type="submit">
              Login
            </button>
            <button onClick={clearButton} type="submit">
              Clear
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BasicForm;
