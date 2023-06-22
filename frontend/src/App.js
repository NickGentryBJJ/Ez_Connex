import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation';
import PostIndex from './components/PostIndex/PostIndex';
import PostForm from './components/PostForm/PostForm'


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
      <Route path="/feed">
          <PostIndex />
      </Route>
      <Route path = "/posts">
        <PostForm />
      </Route>
      <Route path = "/">
        <PostIndex />
      </Route>
    </Switch>
    </>
  );
}

export default App;