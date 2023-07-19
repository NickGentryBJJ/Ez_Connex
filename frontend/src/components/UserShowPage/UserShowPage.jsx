import './UserShowPage.css';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../store/session';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserPostIndex from '../Posts/PostIndex/UserPostIndex';



const UserShowPage = () => {
    
    const dispatch = useDispatch();
    const { userId } = useParams();
    const user = useSelector(state => state.session.selectedUser);
    

    useEffect(() => {
        dispatch(getUser(userId))
    }, [dispatch, userId])

    
    return ( user ? 
      
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
            <UserPostIndex user={user}/>
        </div> */}
        </>
        : null 
    )
}

export default UserShowPage;