import './UserPostCard.css'

export default function UserPostCard({post}) {
    
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