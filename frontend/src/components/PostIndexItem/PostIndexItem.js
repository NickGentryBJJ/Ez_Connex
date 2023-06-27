import React from 'react';
import './PostIndexItem.css'
import PostDropDown from '../PostDropDown/PostDropDown';
import { useSelector } from 'react-redux';
import UserPostCard from '../UserPostCard/UserPostCard';



export default function PostIndexItem({post}) {
    const sessionUser = useSelector(state => state.session.user)
    if (post.photo) {
        return (
        <div className='photo-post-wrapper'>
            <div className='photo-post-container'>
                <ul className='photo-post-info-container'>
                <li><UserPostCard post={post}/></li>
                    <li className='photo-post-body'>{post.body}</li>
                    <div className='photo-container'>
                    <li className='li-post-photo'><img className='post-photo' src={`${post.photo}`}/></li>
                    </div>
                </ul>
            </div>
        </div>
        )
    }    else if (!post.photo) {
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
