import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation';
import PostForm from './components/Post/PostForm';


function App() {
  return (
    <>
    <Navigation />
    <Switch>
      <Route path="/login">
        <LoginFormPage />
      </Route>
      <Route path="/signup">
        <SignupFormPage />
      </Route>
      <Route path="/posts">
        <PostForm/>
      </Route>
    </Switch>
    </>
  );
}

export default App;