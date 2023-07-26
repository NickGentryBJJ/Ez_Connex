import './UserShowPage.css';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../store/session';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUsers, updateUser } from '../../store/users';
import { fetchPosts } from '../../store/posts';
import { fetchComments } from '../../store/comments';




const UserShowPage = () => {
    debugger
    const dispatch = useDispatch();
    const { userId } = useParams();
    const user = useSelector(state => state.session.selectedUser);
    
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState(sessionUser.email);
    const [firstName, setFirstName] = useState(sessionUser.firstName);
    const [lastName, setLastName] = useState(sessionUser.lastName);
    const [title, setTitle] = useState(sessionUser.title);
    const [photoFile, setPhotoFile] = useState(sessionUser.photo);
    const [photoUrl, setPhotoUrl] = useState("");
  
    
    useEffect(() => {
        dispatch(getUser(userId))
        dispatch(fetchUsers())
        dispatch(fetchPosts())
        dispatch(fetchComments())
    }, [dispatch, userId])


    const handleEdit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        if (photoFile) {
            formData.append('user[photo]', photoFile);
        }
        formData.append('user[email]', email);
        formData.append('user[firstName]', firstName);
        formData.append('user[lastName]', lastName);
        formData.append('user[title]', title);
        if (formData.ok){
            return dispatch(updateUser(formData))
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
    debugger
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
        {/* <div className='user-post-index'>
            {<UserPostIndex user={user}/>}
        </div> */}
        </>
        )
    } else if(user && user.user.id === sessionUser.id) {
        eeedit = (
            <div className='edit-user-show-wrapper'>
            <div className="edit-user-show-container">
            <form onSubmit={handleEdit}>
                <li>
                    <img className="prof-pic-user-show" src={sessionUser.photo}/>
                </li>
                <input 
                type='text'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className='user-show-info-name' 
                />
                <input 
                    type="text" 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className='user-show-info-name'
                />
                <input className='user-show-info-title'
                    type='text'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <li className='user-show-info-bio'>
                    Do not reject help from others if you want to grow!
                </li>
            </form>
            </div>
        </div>
        )
    }
    return ( user ? 
    //     <div className="user-show-wrapper">
    //     <ul className="user-show-container">
    //         <li><img className="prof-pic-user-show" src={user.user.photo}/></li>
    //         <li className='user-show-info-name'>{user.user.firstName} {user.user.lastName}</li>
    //         <li className='user-show-info-title'>{user.user.title}</li>
    //         <li className='user-show-info-bio'>Do not reject help from others if you want to grow!</li>
    //     </ul>  
    // </div>
        <>
            {eeedit}
        </> 
        : null
    )
}

export default UserShowPage;


// import './UserShowPage.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { getUser } from '../../store/session';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchUsers, updateUser } from '../../store/users';
// import { fetchPosts } from '../../store/posts';
// import { fetchComments } from '../../store/comments';




// const UserShowPage = () => {
//     // debugger
//     const dispatch = useDispatch();
//     const { userId } = useParams();
//     const user = useSelector(state => state.session.selectedUser);


//     const sessionUser = useSelector(state => state.session.user);
//     const [email, setEmail] = useState(sessionUser.email);
//     const [firstName, setFirstName] = useState(sessionUser.firstName);
//     const [lastName, setLastName] = useState(sessionUser.lastName);
//     const [title, setTitle] = useState(sessionUser.title);
//     const [photoFile, setPhotoFile] = useState(sessionUser.photo);
//     const [photoUrl, setPhotoUrl] = useState("");


    
//     useEffect(() => {
//         dispatch(getUser(userId))
//         dispatch(fetchUsers())
//         dispatch(fetchPosts())
//         dispatch(fetchComments())
//     }, [dispatch, userId])

//     const handleEdit = (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         if (photoFile) {
//             formData.append('user[photo]', photoFile);
//         }
//         formData.append('user[email]', email);
//         formData.append('user[firstName]', firstName);
//         formData.append('user[lastName]', lastName);
//         formData.append('user[title]', title);
//         if (formData.ok){
//             return dispatch(updateUser(formData))
//         }
//     }

//     const handleFile = ({ currentTarget }) => {
//         const file = currentTarget.files[0];
//         setPhotoFile(file);
//         if (file) {
//             const fileReader = new FileReader();
//             fileReader.readAsDataURL(file);
//             fileReader.onload = () => setPhotoUrl(fileReader.result);
//             } else setPhotoUrl(null);
//     }

    
//     return ( user ? 
//         <>
//         <div className="user-show-wrapper">
//             <ul className="user-show-container">
//                 <li><img className="prof-pic-user-show" src={user.user.photo}/></li>
//                 <li className='user-show-info-name'>{user.user.firstName} {user.user.lastName}</li>
//                 <li className='user-show-info-title'>{user.user.title}</li>
//                 <li className='user-show-info-bio'>Do not reject help from others if you want to grow!</li>
//             </ul>
//         </div>
//         {/* <div className='user-post-index'>
//             {<UserPostIndex user={user}/>}
//         </div> */}
//         </>
//         : null 
//     )
// }

// export default UserShowPage;