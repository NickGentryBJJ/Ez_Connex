import React from 'react';
import './PostIndexItem.css'
import PostDropDown from '../PostDropDown/PostDropDown';
import { useSelector } from 'react-redux';
import UserPostCard from '../UserPostCard/UserPostCard';



export default function PostIndexItem({post}) {
    const sessionUser = useSelector(state => state.session.user)
    if (post.photo && sessionUser.id === post.userId) {
        return (
        <div className='photo-post-wrapper'>
            <div className='photo-post-container'>
                <ul className='photo-post-info-container'>
                <li><UserPostCard post={post}/></li>
                    <li className='photo-post-body'>{post.body}</li>
                    <li className='li-post-photo'><img className='post-photo' src={`${post.photo}`}/></li>
                </ul>
            </div>
                <div className='photo-three-dots'>
                    <PostDropDown post={post}/>
                </div>
        </div>
        )
    } else if (!post.photo && sessionUser.id === post.userId) {
        return (
            <div className='post-wrapper'>
                <ul className='post-container'>
                <li><UserPostCard post={post}/></li>
                <li className='post-body'>{post.body}</li>
            </ul>
                <div className='three-dots'>
                    <PostDropDown post={post}/>
                </div>
            </div>
            
        )
    } else if (post.photo && sessionUser.id !== post.userId) {
        return (
            <div className='photo-post-wrapper'>
                <div className='photo-post-container'>
                    <ul className='photo-post-info-container'>
                    <li><UserPostCard post={post}/></li>
                    <li className='li-post-photo'><img className='post-photo' src={`${post.photo}`}/></li>
                    </ul>
                </div>
            </div>
            )
    } else if (!post.photo && sessionUser.id !== post.userId) {
        return (
            <div className='post-wrapper'>
                <ul className='post-container'>
                <li><UserPostCard post={post}/></li>
                <li className='post-body'>{post.body}</li>
            </ul>
            </div>
            
        )
    }   
}