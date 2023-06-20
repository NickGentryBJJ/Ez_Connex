import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPost, fetchPost, createPost, updatePost} from '../../store/posts'

export default function PostForm() {
    const { postId } = useParams();
    const formType = postId ? 'Update Post' : 'Create Post';
    let post = useSelector(getPost(postId));
    const dispatch = useDispatch();

    if (formType === 'Create Post') {
        post = {
            title: '',
            body: ''
        }
    }

    useEffect(() => {
        if (formType === 'Update Post'){
            dispatch(fetchPost(postId))
        }
    }, [postId])

    const [title, setTitle] = useState(post.title)
    const [body, setBody] = useState(post.body);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            ...post,
            title: title,
            body: body 
        }
        
        if (formType === 'Create Post') {
            dispatch(createPost(newPost))
        } else {
            dispatch(updatePost(newPost))
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>{formType}</h1>
            <label>Title
                <br />
                <input 
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
            </label>
            <br/>
            <label>Body
                <br/>
                <textarea 
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
            </label>
            <br/>
            <button>{formType}</button>
        </form>
    )
    
}