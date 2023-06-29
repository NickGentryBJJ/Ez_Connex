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
        const formData = new FormData();
        formData.append('post[body]', body);
        formData.append('post[userId]', sessionUser.id );

        if (photoFile) {
            formData.append('post[photo]', photoFile);
        }
        
        
        if (formType === 'Create Post') {
            dispatch(createPost(formData));
            history.push('/');
            
        } else {
            dispatch(updatePost(formData));
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


    const sessionUser = useSelector(state => state.session.user)
    if (!sessionUser) return <Redirect to='/login' />


    return (
        <div className='create-post-container'>
            <div className="create-post-user-container">
                <img className="profile-image" src={sessionUser.photo}></img>
                <span className="create-post-first-name">{sessionUser.firstName}</span>
            </div>
            <form onSubmit={handleSubmit} className="create-post-form">
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
                            <input type="file" onChange={handleFile} />

                        </label>
                        <button className='post-button' type='submit' >{buttonText}</button>
                    </div>
                </div>
            </form >
        </div >
    )
}