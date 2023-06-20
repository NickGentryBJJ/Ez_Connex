export const RECEIVE_POST = 'posts/RECEIVE_POST';
export const RECEIVE_POSTS = 'posts/RECEIVE_POSTS';
export const REMOVE_POST = 'posts/REMOVE_POST';

const receivePost = post => ({
    type: RECEIVE_POST,
    post 
});

const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts 
});

const removePost = postId => ({
    type: REMOVE_POST,
    postId
});

export const getPost = postId => state => {
    return state?.posts ? state.posts[postId] : null;
}

export const getPosts = state => {
    return state?.posts ? Object.values(state.posts) : [];
}


export const fetchPosts = () => async (dispatch) => {
    const response = await fetch ('/api/posts');
    if (response.ok) {
        const posts = await response.json();
        dispatch(receivePosts(posts));
    }
};

export const fetchPost = postId => async (dispatch) => {
    const response = await fetch (`/api/posts/${postId}`);

    if (response.ok) {
        const post = await response.json();
        dispatch(receivePost(post));
    }
};

export const createPost = post => async (dispatch) => {
    const response = await fetch(`/api/posts/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    });

    if (response.ok) {
        const post = await response.json();
        dispatch(receivePost(post));
    }
};

export const updatePost = post => async (dispatch) => {
    const response = await fetch(`/api/posts/${post.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    });

    if (response.ok) {
        const post = await response.json();
        dispatch(receivePost(post));
    }
};

export const deletePost = postId => async (dispatch) => {
    const response = await fetch (`/api/posts/${postId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        dispatch(removePost(postId));
    }
    
};


const postsReducer = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_POSTS:
            return {...action.posts};
        case RECEIVE_POST:
            return {...state, [action.post.id]: action.post };
        case REMOVE_POST:
            const newState = {...state};
            delete newState[action.postId];
            return newState;
        default:
            return state;
    }
}

export default postsReducer;