import React, { useState, useEffect } from "react";
import { useDispatch} from 'react-redux';
import { BsThreeDots } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { deletePost } from '../../store/posts';


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
            <BsThreeDots/>
        </button>
        {showMenu && (
            <ul className="post-mod-dropdown">
            <li><Link to={`/posts/${post.id}/edit`}>Edit</Link></li> 
            <li><button onClick={() => dispatch(deletePost(post.id))}>Delete</button></li>
            </ul>
        )}
        </>
    );
}

export default PostDropDown;