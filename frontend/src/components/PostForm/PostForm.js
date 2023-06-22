import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPost, fetchPost, createPost, updatePost} from '../../store/posts'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import './PostForm.css'

export default function PostForm() {
    const { postId } = useParams();
    const formType = postId ? 'Update Post' : 'Create Post';
    let post = useSelector(getPost(postId));
    const dispatch = useDispatch();

    if (formType === 'Create Post') {
        post = {
            body: ''
        }
    }

    useEffect(() => {
        if (formType === 'Update Post'){
            dispatch(fetchPost(postId))
        }
    }, [postId])

    const [body, setBody] = useState(post.body);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            ...post,
            body: body 
        }
        
        if (formType === 'Create Post') {
            dispatch(createPost(newPost))
        } else {
            dispatch(updatePost(newPost))
        }
    }

    const sessionUser = useSelector(state => state.session.user)
    if (!sessionUser) return <Redirect to='/login' />


    return (
        <div className='post-form-wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>{formType}</h1>
               <input type='text'/>
                <br/>
                <button type='submit'>{formType}</button>
            </form>
        </div>
    )
    
}