import './ProfileMain.css';

const ProfileMain = ({user}) => {

    return(
        <div className="profile-main-wrapper">
            <ul className="profile-main-container">
                <li className="prof-pic-li"><img className="prof-pic-main" src={user.photo}/></li>
                <li className="profile-main-name">{user.firstName}</li>
                <li className='profile-main-title'>{user.title}</li>
                <li>Do not reject help from others if you want to grow!</li>
            </ul>
        </div>
    )
}

export default ProfileMain;