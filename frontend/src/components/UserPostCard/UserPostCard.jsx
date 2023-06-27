import PostDropDown from '../PostDropDown/PostDropDown'
import './UserPostCard.css'
import { useSelector } from 'react-redux'

export default function UserPostCard({post}) {
    
    const sessionUser = useSelector(state => state.session.user)
    if (!post.user) return null;
    if (!post.photo && sessionUser.id === post.userId) {
        return (
        <div className='user-card-wrapper'>
                <img className='card-user-photo' src={post.user.photo}/>
            <ul className='user-card-container'>
                <li className='card-user-name'>{post.user.firstName}</li>
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
                    <li className='photo-card-user-name'>{post.user.firstName}</li>
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
                    <li className='card-user-name'>{post.user.firstName}</li>
                    <li className='card-user-title'>{post.user.title}</li>
                </ul>
            </div>
        )
    }

}