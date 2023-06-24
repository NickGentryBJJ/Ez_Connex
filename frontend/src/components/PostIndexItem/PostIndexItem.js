import React from 'react';
import './PostIndexItem.css'
import PostDropDown from '../PostDropDown/PostDropDown';
import { useSelector } from 'react-redux';



export default function PostIndexItem({post}) {
    return (
        <ul className='post-wrapper'>
            <li>{post.userId}</li>
            <li>{post.body}</li>
            <li>{post.photo}</li>
            <div className='three-dots'>
                <PostDropDown post={post}/>
            </div>

        </ul>
    )
}