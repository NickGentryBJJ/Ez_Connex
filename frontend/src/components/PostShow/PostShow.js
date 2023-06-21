import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPost, fetchPost } from '../../store/posts';

export default function PostShow() {
    const { postId } = useParams();
    const post = useSelector(getPost(postId));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPost(postId));
    }, [postId]);

    return (
        <div>
            <p>{post.body}</p>
            <Link to='/'>Back to Home</Link>
        </div>
    )
}