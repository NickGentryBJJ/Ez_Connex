import { useSelector } from "react-redux";
import './ProfileMain.css';

const ProfileMain = () => {
    const sessionUser = useSelector(state => state.session.user)

    return(
        <div className="profile-main-wrapper">
            <ul className="profile-main-container">
                <li><img className="prof-pic-main" src={sessionUser.photo}/></li>
                <li>{sessionUser.firstName}</li>
                <li>{sessionUser.title}</li>
                <li>Striving for destruction every day</li>
            </ul>
        </div>
    )
}

export default ProfileMain;