import csrfFetch from "./csrf";

export const RECEIVE_COMMENTS = 'comments/RECEIVE_COMMENTS'
export const RECEIVE_COMMENT = 'comments/RECEIVE_COMMENT'
export const REMOVE_COMMENT = 'comments/REMOVE_COMMENT'

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment 
});

const receiveComments = comments => ({
        type: RECEIVE_COMMENTS,
        comments
});


const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
});

export const getComment = commentId => state => {
    return state.comments ? state.comments[commentId] : null;
}

export const getComments = state => {
    return state.comments ? Object.values(state.comments) : []
}

export const getPostComments = postId => state => {
    
    return Object.values(state.comments).filter((comment) => comment.postId === postId)
}

export const fetchComments = () => async(dispatch) => {
    const response = await csrfFetch(`/api/comments`)
    if (response.ok){
        const data = await response.json()
        dispatch(receiveComments(data))
    }
}

export const createComment = comment => async (dispatch) => {
    
    const response = await csrfFetch(`/api/comments`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    })
    if (response.ok) {
        const comment = await response.json();
        dispatch(receiveComments(comment));
    }
}

export const updateComment = (comment) => async (dispatch) => {
    
    if (comment.id === comment.id) {}
    const response = await csrfFetch(`/api/comments/${comment.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    })
    if (response.ok) {
        const comment = await response.json();
        dispatch(receiveComments(comment));
    }
}

export const deleteComment = commentId => async (dispatch) => {

    
    const response = await csrfFetch (`/api/comments/${commentId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        dispatch(removeComment(commentId));
    }
};


const commentsReducer = (state={}, action) => {
    Object.freeze(state)

    const nextState = Object.assign({}, state)

    switch(action.type){
        case RECEIVE_COMMENTS:
            return {...action.comments}
        case RECEIVE_COMMENT:
            return {...state, [action.comment.id]: action.comment };
        case REMOVE_COMMENT:
            delete nextState[action.commentId]
            return nextState;
        default:
            return nextState;
    }
}

export default commentsReducer;