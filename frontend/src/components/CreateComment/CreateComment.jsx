import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "../../store/comments";
import { fetchPosts } from "../../store/posts";
import './CreateComent.css'


const CreateComment = ({ post, showComments, setShowComments }) => {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);
    const [newComment, setNewComment] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userComment = {
            comment: newComment
        } 
        const data = await dispatch(createComment(userComment, post.id))
        await dispatch(fetchPosts(data));
        if (data) {
            setNewComment('')
        }
    }

    return (
        <>
        <div className="comment-button-wrapper">
            <button
                onClick={() => setShowComments(!showComments)}
                className="comment-button"
                ><span className="new-commment-text">Comment</span>
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
        </div>
        </>
        
    )
}   

export default CreateComment;