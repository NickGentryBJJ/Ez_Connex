import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import csrfFetch from './csrf'
export const SET_SESSION = 'session/SET_SESSION';
export const REMOVE_SESSION = 'session/REMOVE_SESSION';


const setSession = session => ({
    type: SET_SESSION,
    session 
});

const removeSession = () => ({
    type: REMOVE_SESSION
});

const storeCSRFToken = response => {
    const csrfToken = response.headers.get("X-CSRF-Token");
    if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
  }
  
  const storeCurrentUser = user => {
    if (user) sessionStorage.setItem("currentUser", JSON.stringify(user));
    else sessionStorage.removeItem("currentUser");
  }
  
export const login = (user) => async (dispatch) => {
    const { email, password } = user;
    const response = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password 
        })
    });
    const data = await response.json();
    storeCurrentUser(data.user);
    dispatch(setSession(data.user));
    return response;
}

export const signup = (user) => async (dispatch) => {
    const { firstName, lastName, title, email, password } = user;
    const response = await csrfFetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        title,
        email,
        password
      })
    });
    const data = await response.json();
    storeCurrentUser(data.user);
    dispatch(setSession(data.user));
    return response;
  };

  export const logout = () => async (dispatch) => {
    const response = await csrfFetch("/api/session", {
      method: "DELETE"
    });
    storeCurrentUser(null);
    dispatch(removeSession());
    return response;
  };

export const restoreSession = () => async dispatch => {
    const response = await csrfFetch("/api/session");
    storeCSRFToken(response);
    const data = await response.json();
    storeCurrentUser(data.user);
    dispatch(setSession(data.user));
    return response;
  };

const initialState = { user: JSON.parse(sessionStorage.getItem("currentUser")) };

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SESSION:
            return { ...state, user: action.session }; 
        case REMOVE_SESSION:
            return { ...state, user: null }; 
        default:
            return state;
    }
}

export default sessionReducer;