import CategorySelect from "../../components/common/CategorySelect";
import PostCard from "../../components/common/PostCard";
import ContainerPosts from "../../components/layouts/ContainerPosts";

export default function Post() {
    return (
        <div>
            <ContainerPosts>
                <CategorySelect />
                <PostCard />
            </ContainerPosts>
        </div>
    )
}
