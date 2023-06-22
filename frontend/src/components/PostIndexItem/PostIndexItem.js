import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../store/posts';
import './PostIndexItem.css'


export default function PostIndexItem({post}) {
    const dispatch = useDispatch();
    return (
        <ul className='post-wrapper'>
            <li>{post.body}</li>
            <li><Link to={`/posts/${post.id}/edit`}>Edit</Link></li> 
            <li><button onClick={() => dispatch(deletePost(post.id))}>Delete</button></li>
        </ul>
    )
}