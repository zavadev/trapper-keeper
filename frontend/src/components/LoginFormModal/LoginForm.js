import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
// import { Redirect } from "react-router-dom";
import { useHistory } from 'react-router-dom';

function LoginForm() {
  const dispatch = useDispatch();
  // const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  // if (sessionUser) return (
  //   <Redirect to={`/users/${sessionUser.id}`} />
  // )

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setErrors([]);
  //   return dispatch(sessionActions.login({ credential, password }))
  //     .catch(async (res) => {
  //       const data = await res.json();
  //       if (data && data.errors) setErrors(data.errors);
  //     });
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .then((user) => history.push(`/users/${user.user.id}`))
      .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        }
    );
  };

  const demoSubmit = (e) => {
    return dispatch(sessionActions.login({ credential: "Demo-User", password: "password" }))
      .then((user) => history.push(`/users/${user.user.id}`))
  }

  return (
    <>
      <form id="login-form" onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <div id="login-title">Log In</div>
        <label id="email-input">
          Username
          <input
            id="input-box-email"
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label id="password-input">
          Password
          <input
            id="input-box-pass"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <div id="buttons-div">
          <button id="submit-btn" type="submit">Log In</button>
          <button id="demo-btn" onClick={demoSubmit}>Demo!</button>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
