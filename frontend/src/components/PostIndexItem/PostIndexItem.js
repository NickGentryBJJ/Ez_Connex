import React from 'react';
import './PostIndexItem.css'
import PostDropDown from '../PostDropDown/PostDropDown';
import { useSelector } from 'react-redux';



export default function PostIndexItem({post}) {
    if (post.photo) {
        return (
        <div className='photo-post-wrapper'>
            <div className='photo-post-container'>
                <ul className='photo-post-info-container'>
                    <li className='photo-post-user-id'>{post.userId}</li>
                    <li className='photo-post-body'>{post.body}</li>
                    <li><img className='post-photo' src={`${post.photo}`}/></li>
                </ul>
            </div>
                <div className='photo-three-dots'>
                    <PostDropDown post={post}/>
                </div>
        </div>
        )
    } else {
        return (
            <div className='post-wrapper'>
                <ul className='post-container'>
                <li className='post-user-id'>{post.userId}</li>
                <li className='post-body'>{post.body}</li>
            </ul>
                <div className='three-dots'>
                    <PostDropDown post={post}/>
                </div>
            </div>
            
        )
    }
}