import { useEffect } from "react";
import SearchAndFilter from "../../components/common/SearchAndFilter";
import Pagination from "../../components/common/Pagination";
import ContainerPosts from "../../components/layouts/ContainerPosts";
import { posts } from '../../Data/dummyData'
import PostList from "../../components/common/PostList";


export default function Post() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <ContainerPosts>
                <SearchAndFilter />
                <div className="lg:col-span-2">
                    <PostList posts={posts} />
                    <Pagination />
                </div>
            </ContainerPosts>
        </>
    )
}
