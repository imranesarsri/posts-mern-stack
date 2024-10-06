import AddComment from "./AddComment";
import Comment from "./Comment";

export default function ListComments() {
    return (
        <div className="bg-Light-backgroundPri dark:bg-Dark-backgroundPri mt-3 pt-3 border-t-2 dark:border-Light-backgroundPri border-Dark-backgroundPri m">
            <AddComment />
            <div className="max-h-80 overflow-y-auto">
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <button className="">Show More</button>
            </div>

        </div>
    )
}
