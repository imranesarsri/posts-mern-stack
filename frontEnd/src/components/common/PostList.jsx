import PostCard from "./PostCard";

const PostList = (params) => {
    return (
        <div className="flex flex-col space-y-10">
            {params.posts.map(item => (
                <PostCard post={item} key={item._id} />
            ))}
        </div>
    );
};

export default PostList;
