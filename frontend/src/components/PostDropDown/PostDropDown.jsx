import React, { useState, useEffect } from "react";
import { useDispatch} from 'react-redux';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import { deletePost } from '../../store/posts';
import './PostDropDown.css'

function PostDropDown({ post }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

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
        <button className="post-mod" onClick={openMenu}>
            <BiDotsHorizontalRounded/>
        </button>
        {showMenu && (
            <ul className="post-mod-dropdown">
            <li className="mod-button"><NavLink to={`/posts/${post.id}`}><button className="edit-button">Edit</button></NavLink> </li> 
            <li className="mod-button"><button className="delete-button" onClick={() => dispatch(deletePost(post.id))}>Delete</button></li>
            </ul>
        )}
        </>
    );
}

export default PostDropDown;