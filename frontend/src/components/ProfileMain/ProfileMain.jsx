import './ProfileMain.css';

const ProfileMain = ({user}) => {

    return(
        <div className="profile-main-wrapper">
            <ul className="profile-main-container">
                <li className="prof-pic-li"><img className="prof-pic-main" src={user.photo}/></li>
                <li>{user.firstName}</li>
                <li>{user.title}</li>
                <li>Do not reject help from others if you want to grow!</li>
            </ul>
        </div>
    )
}

export default ProfileMain;