import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPost, fetchPost, createPost, updatePost} from '../../store/posts'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import './PostForm.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



export default function PostForm() {
    
    const history = useHistory();
    const { postId } = useParams();
    let post = useSelector(getPost(postId));
    console.log(postId)
    const formType = postId ? 'Update Post' : 'Create Post';
    const buttonText = postId ? "Edit" : "Post"

    const dispatch = useDispatch();
    const [photoFile, setPhotoFile] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

    if (formType === 'Create Post') {
        post = {
            body: ''
        }
    }

    useEffect(() => {
        if (formType === 'Update Post'){
            dispatch(fetchPost(postId))
        }
    }, [])

    const [body, setBody] = useState(post.body);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newPost = {
            ...post,
            body: body,
            user_id: sessionUser.id 
        }
        
        if (formType === 'Create Post') {
            dispatch(createPost(newPost));
            history.push('/');
            
        } else {
        
            dispatch(updatePost(newPost));
            history.push('/');
        }
        
    }

    const handleFile = ({ currentTarget }) => {
        const file = currentTarget.files[0];
        setPhotoFile(file);
        if (file) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => setPhotoUrl(fileReader.result);
        }  else setPhotoUrl(null);
    }

    let preview = null;
    if (photoUrl) preview = <img  className="previewimg" src={photoUrl} alt="" />
    const sessionUser = useSelector(state => state.session.user)
    if (!sessionUser) return <Redirect to='/login' />


    return (
        <div className='create-post-container'>
            <div className='post-title-container'>
                <div className='post-title'>{formType}</div>
            </div>
            <div className="create-post-user-container">
                <img className="create-post-profile-image" src={sessionUser.photo}></img>
                <span className="create-post-firstname">{sessionUser.first_name}</span>
            </div>
            <form className="create-post-form">
                <div>
                    <div className="post-label-container">
                        <label className='create-post-label'>
                            <textarea
                                placeholder='What do you want to talk about?'
                                className='create-post-text'
                                type='textarea'
                                value={body}
                                onInput={(e) => {
                                    setBody(e.target.value)
                                }}
                                // onChange={(e) => setNewPost(e.target.value)}
                                required
                            ></textarea>
                        </label>
                        <button className='post-button' type='submit' onClick={handleSubmit}>{buttonText}</button>
                    </div>
                </div>
            </form >
        </div >
    )
}