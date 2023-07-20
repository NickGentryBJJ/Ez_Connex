import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  PostIndexItem  from '../PostIndexItem/PostIndexItem';
import { getPosts, fetchPosts } from '../../../store/posts';
import './PostIndex.css'
import { NavLink, Redirect } from 'react-router-dom/cjs/react-router-dom';
import ProfileMain from '../../ProfileMain/ProfileMain';
import AboutEz from '../../AboutEz/AboutEz';
import { fetchComments } from '../../../store/comments';
import ConnectWithMe from '../../ConnectWithMe/ConnectWithMe';
import { fetchUsers } from '../../../store/users';



export default function PostIndex() {
    
const posts = [...useSelector(getPosts)].reverse()


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
        dispatch(fetchComments())
        dispatch(fetchUsers())
    }, [dispatch])



    const sessionUser = useSelector(state => state.session.user)
    if (!sessionUser) return <Redirect to='/login' />

    return (
        <>  
            <div className='index-wrapper'>
                <div className='left-side'>
                <ProfileMain user={sessionUser}/>
                <ConnectWithMe/>
                </div>
                
                

                <ul className='index-information'>
                    <div className='create-button-wrapper'>
                        <div className='profile-pic-wrapper'>
                            <img className='prof-pic' src={sessionUser.photo}/>
                        </div>
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
                    <AboutEz/>
            </div>
        </>
    )
}

