import { useSelector } from "react-redux";
import './ProfileMain.css';

const ProfileMain = ({user}) => {
    const sessionUser = useSelector(state => state.session.user)

    return(
        <div className="profile-main-wrapper">
            <ul className="profile-main-container">
                <li className="prof-pic-li"><img className="prof-pic-main" src={user.photo}/></li>
                <li>{user.firstName}</li>
                <li>{user.title}</li>
                <li>Striving for destruction every day</li>
            </ul>
        </div>
    )
}

export default ProfileMain;