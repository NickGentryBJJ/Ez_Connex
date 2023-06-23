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
        debugger
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
        const file = currentTarget.files[0];
        setPhotoFile(file);
        if (file) {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = () => setPhotoUrl(fileReader.result);
          } else setPhotoUrl(null);
      }


    const sessionUser = useSelector(state => state.session.user)
    if (!sessionUser) return <Redirect to='/login' />


    return (
        <div className='post-form-wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>{formType}</h1>
                <textarea onChange={e => setBody(e.target.value)} value={body}/>
                <br/>
                <button type='submit'>{formType}</button>
                <input type="file" onChange={handleFile} />

            </form>
        </div>
    )
    
}