import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as commentActions from "../../../store/comments"
import './UpdateComent.css'
import CommentIndex from "../CommentIndex/CommentIndex";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const UpdateComment = ({ comment, post, showCommentForm, setShowCommentForm }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const [newComment, setNewComment] = useState('');
    const userId = useSelector(state => state.session.user.id)
    const commentId = comment.id
    const postId =post.id

    

    const handleSubmit = (e) => {
        e.preventDefault();
        const userComment = {
            body: newComment,
            userId: userId,
            postId: postId
        } 
        dispatch(commentActions.updateComment(userComment))
        setNewComment('')
        history.push('/');
    }

    return (
    <>
        <div className="update-comment-container">
                <div className="update-comment-form-container">
                    <form onSubmit={handleSubmit} className="update-comment-form">
                        <div className="comment-user-photo-container">
                            <img className="comment-user-photo" src={sessionUser.photo} />
                            <textarea
                                placeholder='Add a comment...'
                                className='create-comment-text'
                                type='textarea'
                                value={newComment}
                                onInput={(e) => {
                                    setNewComment(e.target.value)
                                }}
                                // onChange={(e) => setNewPost(e.target.value)}
                                required
                            ></textarea>
                            <button className="create-new-comment-button" >Post</button>
                        </div>
                    </form>
                    <div className="comment-index"><CommentIndex post={post}/></div>
                </div>
        </div>
    </>
    
    )
}   

export default UpdateComment;