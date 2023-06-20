import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, firstName, lastName, title, password }))
        .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <>
    <div className="sign-up-wrapper">

    <h2 className="make">Make the most of your professional life</h2>
    <div className="sign-up-form">

    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map(error => <li className="errors" key={error}>{error}</li>)}
      </ul>
      <label>
        Email<br/>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
      </label>
      <br/>
      <label>
        First Name<br/>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          />
      </label>
      <br/>
      <label>
       Last Name<br/> 
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          />
      </label>
      <br/>
      <label>
       Title<br/> 
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          />
      </label>
      <br/>

      <label>
        Password<br/>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <br/>
      <label>
        Confirm Password<br />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          />
      </label>
      <br/>
      <div className="agree">
      <p>By clicking Agree & Join, you agree to the EZConnex User Agreement, Privacy Policy, and Cookie Policy.</p>
      </div>
      <button type="submit">Agree & Join</button>
    </form>
          </div>
          </div>
          </>
  );
}

export default SignupFormPage;