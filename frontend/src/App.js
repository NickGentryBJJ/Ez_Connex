import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import Navigation from './components/Navigation';
import PostIndex from './components/Posts/PostIndex/PostIndex';
import CreatePostModal from './components/Posts/CreatePostModal/CreatePostModal';
import PostForm from './components/Posts/PostForm/PostForm';
import UserShowPage from './components/UserShowPage/UserShowPage';


function App() {
  return (
    <>
    <Navigation />
    <Switch>
      <Route path='/users/:userId'>
        <UserShowPage/>
      </Route>
      <Route path='/posts/:postId'>
        <PostForm/>
      </Route>
      <Route path="/login">
        <LoginFormPage />
      </Route>
      <Route path="/signup">
        <SignupFormPage />
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