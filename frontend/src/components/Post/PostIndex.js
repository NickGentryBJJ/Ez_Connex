import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostForm  from './PostForm';
import PostIndexItem from './PostIndexItem';
import { getPosts, fetchPosts } from '../store/posts';

export default function PostIndex() {
    const posts = useSelector(getPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    return (
        <div>
            <ul>
                {posts.map(post => (
                    <PostIndexItem post={post} />
                ))}
            </ul>
            <PostForm />
        </div>
    )
}