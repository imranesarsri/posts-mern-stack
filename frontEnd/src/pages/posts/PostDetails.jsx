import { useParams } from "react-router-dom"
import PostCard from "../../components/common/PostCard"
import { posts } from '../../Data/dummyData'
import { useEffect } from "react";

export default function PostDetails() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { id } = useParams()
    const post = posts.find(p => p._id == parseInt(id))
    console.log(post)
    return (
        <div className="mx-5 sm:mx-10 md:w-2/3 md:mx-auto py-10">
            <PostCard post={post} />
        </div>
    )
}
