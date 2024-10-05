import { useEffect } from "react";
import SearchAndFilter from "../../components/common/SearchAndFilter";
import Pagination from "../../components/common/Pagination";
import PostCard from "../../components/common/PostCard";
import ContainerPosts from "../../components/layouts/ContainerPosts";

export default function Post() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <ContainerPosts>
                <SearchAndFilter />
                <div className="lg:col-span-2">
                    <PostCard />
                    <Pagination />
                </div>
            </ContainerPosts>
        </>
    )
}
