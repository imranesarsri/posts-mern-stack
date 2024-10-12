import { useEffect } from "react";
import SearchAndFilter from "../../components/common/SearchAndFilter";
import Pagination from "../../components/common/Pagination";
import ContainerPosts from "../../components/layouts/ContainerPosts";
import { posts } from '../../Data/dummyData'
import PostList from "../../components/common/PostList";
import { useParams } from "react-router-dom";


export default function Category() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const { category } = useParams()
    console.log(category)
    return (
        <>
            <ContainerPosts>
                <SearchAndFilter activeLink={category} />
                <div className="lg:col-span-2">
                    <PostList posts={posts} />
                    <Pagination />
                </div>
            </ContainerPosts>
        </>
    )
}
