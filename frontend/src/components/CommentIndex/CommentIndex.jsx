import { useSelector } from "react-redux";
import * as commentActions from '../../store/comments'
import CommentIndexItem from "../CommentIndexItem/CommentIndexItem";

export default function CommentIndex({post}) {
    const allComments = useSelector(commentActions.getPostComments(post.id))

    return (
        <div>
            {allComments.map((comment) => <CommentIndexItem key={comment.id} comment={comment} />)}
        </div>
    );
};