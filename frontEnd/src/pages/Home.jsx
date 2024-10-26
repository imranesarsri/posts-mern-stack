import Hero from "../components/common/Hero";
import { useEffect } from "react";
import PostList from "../components/common/PostList";
import { useDispatch, useSelector } from "react-redux"
import { getAllPostsByPageNumber } from "../redux/apiCalls/postApiCall";
import useScrollToTop from "../hooks/useScrollToTop";


export default function Home() {

    useScrollToTop();  // Scrolls to the top when the component mounts

    const dispatch = useDispatch()
    const { posts } = useSelector(state => state.post)

    useEffect(() => {
        dispatch(getAllPostsByPageNumber(1))
    }, [])


    return (
        <section>
            <Hero />
            <div className="w-8/12 m-auto my-5 md:my-10">
                <PostList posts={posts} />
            </div>
        </section>
    )
}
