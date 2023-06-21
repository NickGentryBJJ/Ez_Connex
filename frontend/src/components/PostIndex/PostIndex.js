import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostIndexItem from '../PostIndexItem/PostIndexItem';
import { getPosts, fetchPosts } from '../../store/posts';

export default function PostIndex() {
    const posts = useSelector(getPosts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    return (
        <div>
            <ul>
                {posts.map(post => (
                    <PostIndexItem post={post.body} />
                ))}
            </ul>
        </div>
    )
}

