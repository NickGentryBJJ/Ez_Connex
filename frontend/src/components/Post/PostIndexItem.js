import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletePost } from '../store/posts';


export default function PostIndexItem({post}) {
    const dispatch = useDispatch();
    
    return (
        <li>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
            <Link to={`/posts/${post.id}/edit`}>Edit</Link>
            <button onClick={() => dispatch(deletePost(post.id))}>Delete</button>
        </li>
    )
}