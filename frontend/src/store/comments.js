import csrfFetch from "./csrf";
import {getPost} from "./posts"

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

export const getComment = commentId => store => {
    return store.comments ? store.comments[commentId] : null;
}

export const getComments = store => {
    return store.comments ? Object.values(store.comments) : []
}

export const getPostComments = postId => store => {
    return Object.values(store.comments).filter((com) => com.postId === postId)
}

export const fetchComments = () => async(dispatch) => {
    const response = await csrfFetch(`/api/comments`)
    if (response.ok){
        const data = await response.json()
        dispatch(receiveComments(data))
    }
}

export const createComment = comment => async(dispatch) => {
    const{user_id, post_id, body} = comment;
    const response = await csrfFetch(`/api/comments`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            comment:{
                user_id,
                post_id,
                body
            }
        })
    })
    if (response.ok) {
        const data = await response.json()
        dispatch(receiveComment(data.comment))
        dispatch(getPost(data.post))
        return data;
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
            delete nextState.comments[action.commentId]
            return nextState;
        default:
            return nextState;
    }
}

export default commentsReducer;