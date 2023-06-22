import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  PostIndexItem  from '../PostIndexItem/PostIndexItem';
import { getPosts, fetchPosts } from '../../store/posts';
import './PostIndex.css'
import { NavLink, Redirect } from 'react-router-dom/cjs/react-router-dom';



export default function PostIndex() {
    const posts = useSelector(getPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    const sessionUser = useSelector(state => state.session.user)
    if (!sessionUser) return <Redirect to='/login' />

    return (
        <>
            <div className='index-wrapper'>
                <ul>
                    <div className='create-button-wrapper'>
                        <img src={sessionUser.photo}/>
                        <NavLink to="/posts">
                            <button className='create-post-button'>
                                Start a Post
                            </button>
                        </NavLink>
                    </div>
                        {posts.map(post => (
                            <PostIndexItem post={post} key={post.id}/>
                        ))}
                </ul>
            </div>
        </>
    )
}

