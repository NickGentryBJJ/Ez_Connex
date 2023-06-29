import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import './ProfileMain.css';



const ProfileMain = ({user}) => {

    const history = useHistory();
    const handleUserName = () => {
        history.push(`/users/${user.id}`)
    }
    
    return(
        <div className="profile-main-wrapper">
            <ul className="profile-main-container">
                <li className="prof-pic-li"><img className="prof-pic-main" src={user.photo}/></li>
                <li onClick={handleUserName} className="profile-main-name">{user.firstName}</li>
                <li className='profile-main-title'>{user.title}</li>
                <li>Do not reject help from others if you want to grow!</li>
            </ul>
        </div>
    )
}

export default ProfileMain;