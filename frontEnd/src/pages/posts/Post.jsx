import { useEffect, useState } from "react";
import SearchAndFilter from "../../components/common/SearchAndFilter";
import Pagination from "../../components/common/Pagination";
import ContainerPosts from "../../components/layouts/ContainerPosts";
import PostList from "../../components/common/PostList";
import { useSelector, useDispatch } from "react-redux";
import { getAllPostsByPageNumber, getPostsCount } from "../../redux/apiCalls/postApiCall";
import useScrollToTop from "../../hooks/useScrollToTop";


export default function Post() {

    useScrollToTop();  // Scrolls to the top when the component mounts

    const POST_PAR_PAGE = 4
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    const { postsCount, posts } = useSelector(state => state.post)
    const pages = Math.ceil(postsCount / POST_PAR_PAGE)

    useEffect(() => {
        dispatch(getAllPostsByPageNumber(currentPage))
    }, [currentPage])

    useEffect(() => {
        dispatch(getPostsCount())
        // console.log(dispatch(getPostsCount()))
    }, [])

    return (
        <>
            <ContainerPosts>
                <SearchAndFilter />
                <div className="lg:col-span-2">
                    <PostList posts={posts} />
                    <Pagination
                        pages={pages}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
                </div>
            </ContainerPosts>
        </>
    )
}
