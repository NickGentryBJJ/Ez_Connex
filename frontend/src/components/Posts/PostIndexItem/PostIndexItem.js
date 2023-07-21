import React, { useEffect, useState } from 'react';
import './PostIndexItem.css'
import UserPostCard from '../../UserPostCard/UserPostCard';
import CreateComment from '../../Comments/CreateComment/CreateComment';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';



export default function PostIndexItem({post}) {
    const [showCommentForm, setShowCommentForm] = useState(false)
    const dispatch = useDispatch();
    const comments = post.comments;
    

    if (post.body) {
        if (post.photo) {
            return (
            <div className='photo-post-wrapper'>
                <div className='photo-post-container'>
                    <div className='photo-post-info-container'>
                    <div><UserPostCard post={post}/></div>
                        <div className='photo-post-body'>{post.body}</div>
                        <div className='photo-container'>
                            <div className='li-post-photo'><img className='post-photo' src={`${post.photo}`}/></div>
                        </div>
                    </div>
                    <div className='photo-post-create-comment'>
                        <CreateComment post={post} showCommentForm={showCommentForm} setShowCommentForm={setShowCommentForm}/>
                    </div>
                </div>
            </div>
            )
        }    else if (!post.photo) {
                    return (
                        <div className='post-wrapper'>
                            <div className='post-container'>
                                <div>
                                    <UserPostCard post={post}/>
                                </div>
                                <div className='post-body'>
                                    {post.body}
                                </div>
                                <div className='photo-post-create-comment'>
                                    <CreateComment post={post} showCommentForm={showCommentForm} setShowCommentForm={setShowCommentForm}/>
                                </div>
                            </div>
                        </div>
                        
                    )
                }   
            
        }   
    }
