import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as commentActions from "../../store/comments"
import './CreateComent.css'
import CommentIndex from "../CommentIndex/CommentIndex";


const CreateComment = ({ post, showComments, setShowComments }) => {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);
    const [newComment, setNewComment] = useState('');
    const userId = useSelector(state => state.session.user.id)
    const postId = post.id

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userComment = {
            comment: newComment,
            userId: userId,
            postId: postId
        } 
        dispatch(commentActions.createComment(userComment))
        
    }

    return (
        <>
        <div className="comment-button-wrapper">
            <button
                onClick={() => setShowComments(!showComments)}
                className="comment-button"
                ><span className="create-commment-text">Comment</span>
            </button>
        </div>
        <div className="new-comment-container">
            {showComments && (
                <div className="comment-form-container">
                    <form className="comment-form">
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
                            <button onSubmit={handleSubmit}>Post</button>
                        </div>
                    </form>
                </div>
            )}
            <CommentIndex post={post}/>
        </div>
        </>
        
    )
}   

export default CreateComment;