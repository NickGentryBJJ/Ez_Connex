import "./CommentIndexItem.css";

export default function CommentIndexItem ({comment}) {
    return (
        <div className="comment-wrapper">
            <img
            src={comment.user.photo}
            className="comment-user-photo"/>
            <div className="comment-container">
            <div className="commenter-info">
                <span className="user-first-last-name">{comment.user.firstName} {comment.user.lastName}</span>
                <span className="user-title">{comment.user.title}</span>
            </div>
                <span className="user-comment">{comment.body}</span>
            </div>
        </div>
    )
    
} 