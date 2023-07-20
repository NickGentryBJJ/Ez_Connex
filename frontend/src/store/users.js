import csrfFetch from './csrf'

const RECEIVE_USER = 'users/RECEIVE_USER'
const RECEIVE_USERS = 'users/RECEIVE_USERS'

export const receiveUser = user =>({
    type: RECEIVE_USER,
    user
})

export const receiveUsers = users =>({
    type: RECEIVE_USERS,
    users
})


export const getUsers = state =>{
    return state.users ? Object.values(state.users) : []
}

export const getUser = userId => state =>{
    return state.users ? state.users[userId] : null
}

export const fetchUser = userId => async(dispatch)=>{
    const res = await csrfFetch (`/api/users/${userId}`)
    const data = await res.json()
    dispatch(receiveUser(data.user))
}

export const fetchUsers = () => async(dispatch)=>{
    const res = await csrfFetch ('/api/users')
    const data = await res.json()
    dispatch(receiveUsers(data))
}

const usersReducer = (state={},action)=>{ 
    switch(action.type){
        case RECEIVE_USER:
            return {...state, [action.user.id]:action.user}
        case RECEIVE_USERS:
            return{...action.users}
        default:
            return state 
    }
}

export default usersReducer;