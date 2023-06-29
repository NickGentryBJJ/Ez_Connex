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
  const [photoFile, setPhotoFile] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (photoFile) {
      formData.append('user[photo]', photoFile);
    }
    formData.append('user[email]', email);
    formData.append('user[firstName]', firstName);
    formData.append('user[lastName]', lastName);
    formData.append('user[title]', title);
    formData.append('user[password]', password);
    
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup(formData))
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

  const handleFile = ({ currentTarget }) => {
    const file = currentTarget.files[0];
    setPhotoFile(file);
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => setPhotoUrl(fileReader.result);
      
      } else setPhotoUrl(null);
  }

  let preview = null;
  if (photoUrl) preview = <img className="preview-image" src={photoUrl} alt="" />;

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
          <input type="file" onChange={handleFile} />
          <h3>Image preview</h3>
          {preview}
          <br/>
            <div className="agree">
              <p>By clicking Agree & Join, you agree to the EZConnex User Agreement, Privacy Policy, and Cookie Policy.</p>
            </div>
          <button type="submit" className="agree-button">Agree & Join</button>
          </form>
        </div>
    </div>
  </>
  );
}

export default SignupFormPage;