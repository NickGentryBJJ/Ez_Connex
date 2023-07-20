import { useHistory } from "react-router-dom/cjs/react-router-dom";
import "./CommentIndexItem.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector} from 'react-redux';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { deleteComment } from '../../../store/comments';
import * as commentActions from "../../../store/comments"



export default function CommentIndexItem ({comment}) {
    const sessionUser = useSelector(state => state.session.user);
    const [editing, setEditing] = useState(false)
    const [newComment, setNewComment] = useState('')
    const history = useHistory();
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const handleUserName = () => {
        history.push(`/users/${comment.userId}`)
    }

    useEffect(() => {
        setNewComment(comment.comment)
    }, [comment])

    const handleEdit = () => {
        setEditing(true)
    }
    const finishEdit = () => {
        setEditing(false)
    }

    const handleCancel = () => {
        setEditing(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const userComment = {
            body: newComment,
            userId: sessionUser.id,
            postId: comment.postId,
            id: comment.id
        } 
        dispatch(commentActions.updateComment(userComment))
        setNewComment('')
        setEditing(false)
        history.push('/');
    }



    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return
        const closeMenu = (e) => {
            setShowMenu(false)
        }
        document.addEventListener("click", closeMenu)
        return () => document.removeEventListener("click", closeMenu)
    }, [showMenu])

    return (
        <div className="comment-wrapper">
            <img
            src={comment.user.photo}
            className="comment-user-photo"/>
            <div className="comment-container">
                        <div className="commenter-info">
                            <div className="top-of-comment">
                                <span onClick={handleUserName} className="user-first-last-name">{comment.user.firstName} {comment.user.lastName}</span>
                                    <div className="comment-drop-down-container">
                                        <button className="comment-mod" onClick={openMenu}>
                                            <BiDotsHorizontalRounded/>
                                        </button>
                                        {showMenu && (
                                            <ul focused="true" className="comment-mod-dropdown">
                                                <li className="edit-comment-button"onClick={handleEdit}>Edit</li> 
                                                <li className="delete-comment-button" onClick={() => dispatch(deleteComment(comment.id))}>Delete</li>
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            <span className="user-title">{comment.user.title}</span>
                        </div>
                    
            {editing ? (
                    <form onSubmit={handleSubmit}>
                        <div
                            className="user-comment"
                            contentEditable
                            onInput={(e) => {
                                setNewComment(e.target.innerText)
                            }}
                            dangerouslySetInnerHTML={{ __html: comment.body }}
                        />
                        <div className="edit-comments-container">
                            <button className="save-comment-button" >Save Changes</button>
                            <button className="cancel-edit-comment-button" onClick={handleCancel}>Cancel</button>
                        </div>
                    </form>
                ) : (
                    <span className="user-comment">{comment.body}</span>
                )}
            </div>
        </div>
    )
    
} 