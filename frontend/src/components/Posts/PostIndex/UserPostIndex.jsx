import PostIndexItem from "../PostIndexItem/PostIndexItem";

export default function UserPostIndex({user}) {
    let posts = user.posts;
    return (
        <>
        {posts.map(post => (
            <PostIndexItem post={post} key={post.id}/>
            ))}
        </>
    )
}