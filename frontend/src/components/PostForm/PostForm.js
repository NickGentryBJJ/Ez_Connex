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
    const formType = postId ? 'Update Post' : 'Create Post';
    let post = useSelector(getPost(postId));
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
    })

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
        // const url = currentTarget;
        // if (url) {
        //     setPhotoUrl(url);
        // }
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
        <div className='newPost-container'>
            <div className="create-post-user-container">
                <img className="profile-image" src={sessionUser.photo}></img>
                <span className="newPost-firstname">{sessionUser.first_name}</span>
            </div>
            <form className="newPost-form">
                <div>
                    <div className="post-label-container">
                        <label className='newPost-label'>
                            <textarea
                                placeholder='What do you want to talk about?'
                                className='newPost-text'
                                type='textarea'
                                value={body}
                                onInput={(e) => {
                                    setBody(e.target.value)
                                }}
                                // onChange={(e) => setNewPost(e.target.value)}
                                required
                            ></textarea>
                        </label>
                        <button className='post-button' type='submit' onClick={handleSubmit}>Post</button>
                    </div>
                </div>
            </form >
        </div >
    )
}