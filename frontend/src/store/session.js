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
    dispatch(setSession(data.user));
    return response;
;}


const initialState = { user: null };

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