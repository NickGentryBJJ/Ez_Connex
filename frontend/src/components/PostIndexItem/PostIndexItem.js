import React from 'react';
import './PostIndexItem.css'
import PostDropDown from '../PostDropDown/PostDropDown';


export default function PostIndexItem({post}) {
    return (
        <ul className='post-wrapper'>
            <li>{post.body}</li>
            <li>{post.photo}</li>
            {/* <li><Link to={`/posts/${post.id}/edit`}>Edit</Link></li> 
            <li><button onClick={() => dispatch(deletePost(post.id))}>Delete</button></li> */}
            <PostDropDown post={post}/>
        </ul>
    )
}