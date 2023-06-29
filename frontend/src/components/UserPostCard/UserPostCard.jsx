import PostDropDown from '../PostDropDown/PostDropDown'
import './UserPostCard.css'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function UserPostCard({post}) {
    const history = useHistory();
    const handleUserName = () => {
        history.push(`/users/${post.userId}`)
    }
    
    const sessionUser = useSelector(state => state.session.user)
    if (!post.user) return null;
    if (!post.photo && sessionUser.id === post.userId) {
        return (
        <div className='user-card-wrapper'>
                <img className='card-user-photo' src={post.user.photo}/>
            <ul className='user-card-container'>
                <li onClick={handleUserName} className='card-user-name'>{post.user.firstName}</li>
                <li className='card-user-title'>{post.user.title}</li>
            </ul>
            

            <div className='drop-down-dots'>
                <PostDropDown post={post}/>
            </div>
        </div>
    )
    } else if (post.photo && sessionUser.id === post.userId) {
        return (
            <div className='photo-user-card-wrapper'>
                    <img className='photo-card-user-photo' src={post.user.photo}/>
                <ul className='photo-user-card-container'>
                <li onClick={handleUserName} className='card-user-name'>{post.user.firstName}</li>
                    <li className='photo-card-user-title'>{post.user.title}</li>
                </ul>
                <div className='photo-drop-down-dots'>
                    <PostDropDown post={post}/>
                </div>
            </div>
        )

    } else {
        return (
            <div className='user-card-wrapper'>
                    <img className='card-user-photo' src={post.user.photo}/>
                <ul className='user-card-container'>
                <li onClick={handleUserName} className='card-user-name'>{post.user.firstName}</li>
                    <li className='card-user-title'>{post.user.title}</li>
                </ul>
            </div>
        )
    }

}