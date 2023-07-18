import { useHistory } from "react-router-dom/cjs/react-router-dom";
import "./CommentIndexItem.css";
import CommentDropDown from "../CommentDropDown/CommentDropDown";

export default function CommentIndexItem ({comment}) {
    
    
    const history = useHistory();
    const handleUserName = () => {
        history.push(`/users/${comment.userId}`)
    }
    return (
        <div className="comment-wrapper">
            <img
            src={comment.user.photo}
            className="comment-user-photo"/>
            <div className="comment-container">
            <div className="commenter-info">
                <span onClick={handleUserName} className="user-first-last-name">{comment.user.firstName} {comment.user.lastName}</span>
                <span className="user-title">{comment.user.title}</span>
            </div>
                <span className="user-comment">{comment.body}</span>
            </div>
            <div>
                <CommentDropDown comment={comment}/>
            </div>
        </div>
    )
    
} 