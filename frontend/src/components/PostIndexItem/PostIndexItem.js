import React, { useState } from 'react';
import './PostIndexItem.css'
import UserPostCard from '../UserPostCard/UserPostCard';
import CreateComment from '../CreateComment/CreateComment';



export default function PostIndexItem({post}) {
    const [showCommentForm, setShowCommentForm] = useState(false)
    if (post.body) {
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
                    <div className='photo-post-create-comment'>
                        <CreateComment post={post} showCommentForm={showCommentForm} setShowCommentForm={setShowCommentForm}/>
                    </div>
                </div>
            </div>
            )
        }    else if (!post.photo) {
                    return (
                        <div className='post-wrapper'>
                            <ul className='post-container'>
                                <li><UserPostCard post={post}/></li>
                                <li className='post-body'>{post.body}</li>
                            <div className='post-create-comment'>
                                <CreateComment post={post} showCommentForm={showCommentForm} setShowCommentForm={setShowCommentForm}/>
                            </div>
                            </ul>
                        </div>
                        
                    )
                }   
            
        }   
    }
