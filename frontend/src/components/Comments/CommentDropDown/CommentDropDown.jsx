import React, { useState, useEffect } from "react";
import { useDispatch} from 'react-redux';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { deleteComment } from '../../../store/comments';
import './CommentDropDown.css'

function CommentDropDown({ comment }) {
    const [editing, setEditing] = useState(false)

    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    
    const handleEdit = () => {
        setEditing(true)
    }

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;
        const closeMenu = () => {
        setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);



    return (
        <>
        <button className="comment-mod" onClick={openMenu}>
            <BiDotsHorizontalRounded/>
        </button>
        {showMenu && (
            <ul className="comment-mod-dropdown">
                <li className="comment-mod-button"><button onClick={handleEdit} className="edit-button">Edit</button></li> 
                <li className="comment-mod-button"><button className="delete-comment-button" onClick={() => dispatch(deleteComment(comment.id))}>Delete</button></li>
            </ul>
        )}
        </>
    );
}

export default CommentDropDown;