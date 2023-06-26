import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';
import { NavLink} from 'react-router-dom';


function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ email, password }))
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

  const demoUser = async (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ email: "onionbro@catarina.com", password: "password" }))
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


  

  return (
    <div className="page-wrapper">
      <h1 className='login-text'>Welcome to your <br/> professional community</h1>
        <div className='sign-in-form-wrapper'>
          <form className="login-form" onSubmit={handleSubmit}>
            <ul>
              {errors.map(error => <li className='errors' key={error}>{error}</li>)}
            </ul>
            <label className="email">
              Email <br />    
              <div className='input-email'>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  />
              </div>
            </label>
            <label className='password'>
              Password <br />
              <div className='input-password'>
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
              </div>
            </label>
            <br/>
            <button className='sign-in-button' type="submit">Sign In</button>
          </form>
          <p>---------------- or -----------------</p>
          <NavLink to="/signup"><button className='sign-up-button'>
            New to EZ Connex? Sign Up Now!
            </button>
          </NavLink>
          <br/>
            <button
            className='demo-button'
            onClick={demoUser}
            type='submit'
            >
              Demo Log In
            </button>
          </div>
        <div className='img-wrapper'>
          <img alt='' src="https://ezconnex-dev.s3.us-west-1.amazonaws.com/linkedInLogIn.jpeg.png"/>
        </div>  
    </div>
    );
}
export default LoginFormPage;