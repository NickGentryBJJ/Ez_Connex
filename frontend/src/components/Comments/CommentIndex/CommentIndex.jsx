import { useSelector } from "react-redux";
import * as commentActions from '../../../store/comments'
import CommentIndexItem from "../CommentIndexItem/CommentIndexItem";
import "./CommentIndex.css"

export default function CommentIndex({post}) {
   
    const postId = post.id
    const allComments = useSelector(commentActions.getPostComments(postId))

    return (
        <div className="comment-item">
            {allComments.map((comment) => <CommentIndexItem key={comment.id} comment={comment} post={post} />)}
        </div>
    );
};