import { useLocation } from "react-router-dom";
import AddComment from "./AddComment";
import Comment from "./Comment";
import ShowMore from "./ShowMore";

export default function ListComments(params) {
    const location = useLocation();
    console.log(location)
    return (
        <div className={params.hidden === true ? "hidden" : "block"}>
            <div className="bg-Light-backgroundPri dark:bg-Dark-backgroundPri mt-3 pt-3 border-t-2 dark:border-Light-backgroundPri border-Dark-backgroundPri m">
                <AddComment />
                <div className="max-h-80 hover:scrollbar-thumb-Light-primary active:scrollbar-thumb-Light-primary scrollbar overflow-y-scroll mt-2">
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <ShowMore postId={params.postId} />
                </div>
            </div>
        </div>
    )
}
