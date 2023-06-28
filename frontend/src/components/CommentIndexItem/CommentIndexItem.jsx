
export default function CommentIndexItem ({comment}) {
    return (
        <div className="comment-container">
            <img
            src={comment.user.photo}
            className="comment-user-photo"/>
            <span className="user-first-last-name">{comment.user.firstName} {comment.user.lastName}</span>
            <span className="user-occupation">{comment.user.occupation}</span>
            <span className="user-comment">{comment.comment}</span>
        </div>
    )
    
} 