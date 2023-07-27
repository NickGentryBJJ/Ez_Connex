import './UserShowPage.css';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../store/session';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUsers, updateUser } from '../../store/users';
import { fetchPosts } from '../../store/posts';
import { fetchComments } from '../../store/comments';




const UserShowPage = () => {
    
    const dispatch = useDispatch();
    const { userId } = useParams();
    const user = useSelector(state => state.session.selectedUser);
    
    const sessionUser = useSelector(state => state.session.user);
    const [firstName, setFirstName] = useState(sessionUser.firstName);
    const [lastName, setLastName] = useState(sessionUser.lastName);
    const [title, setTitle] = useState(sessionUser.title);
    const [email, setEmail] = useState(sessionUser.email);
    const [photoFile, setPhotoFile] = useState(sessionUser.photo);
    const [photoUrl, setPhotoUrl] = useState("");  
    const [errors, setErrors] = useState([]);

    
    
    useEffect(() => {
        dispatch(getUser(userId))
        dispatch(fetchUsers())
    }, [dispatch, userId])


    const handleEdit = (e) => {
        
        e.preventDefault();
        const formData = new FormData();
        // if (photoFile) {
        //     formData.append('photo', photoFile);
        // }
        formData.append('user[firstName]', firstName);
        formData.append('user[lastName]', lastName);
        formData.append('user[title]', title);
        console.log(userId)
        return dispatch(updateUser(formData, userId))
        // .catch(async (res) => {
        //     setErrors([]);
        //     let data;
        //     try {
        //       // .clone() essentially allows you to read the response body twice
        //         data = await res.clone().json();
        //     } catch {
        //       data = await res.text(); // Will hit this case if the server is down
        //     }
        //     if (data?.errors) setErrors(data.errors);
        //     else if (data) setErrors([data]);
        //     else setErrors([res.statusText]);
        // });
        
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
    let eeedit;
    if (user && user.user.id !== sessionUser.id) {
        eeedit = (
        <>
            <div className="user-show-wrapper">
                    <ul className="user-show-container">
                        <li><img className="prof-pic-user-show" src={user.user.photo}/></li>
                        <li className='user-show-info-name'>{user.user.firstName} {user.user.lastName}</li>
                        <li className='user-show-info-title'>{user.user.title}</li>
                        <li className='user-show-info-bio'>Do not reject help from others if you want to grow!</li>
                    </ul>  
            </div>
        </>
        )
    } else if(user && user.user.id === sessionUser.id) {
        eeedit = (
            <>
                <div className='edit-user-show-wrapper'>
                    <div className="edit-user-show-container">
                        <form onSubmit={handleEdit}>
                            <li>
                                <img className="edit-prof-pic-user-show" src={sessionUser.photo}/>
                            </li>
                                <label>First Name <br />
                                    <input 
                                    type='text'
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className='user-show-info-name' 
                                />
                            </label> 
                            <br />
                            <label>Last Name <br />
                                <input 
                                    type="text" 
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className='user-show-info-name'
                                />
                            </label>
                            <br />
                            <label>Title <br />
                                <input className='user-show-info-title'
                                    type='text'
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </label>
                            <li className='user-show-info-bio'>
                                Do not reject help from others if you want to grow!
                            </li>
                            <button type="submit">Update</button>
                        </form>
                    </div>
                </div>
            </>
            
        )
    }
    return ( user ? 
        <>
            {eeedit}
        </> 
        : null
    )
}

export default UserShowPage;