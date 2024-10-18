import AddComment from "./AddComment";
import Comment from "./Comment";
import ShowMore from "./ShowMore";
import { comments } from '../../Data/commentsData';

export default function ListComments(params) {
    let countComment = comments.filter(comment => comment.postId === params.postId).length;

    return (
        <div className={params.hidden === true ? "hidden" : "block"}>
            <div className="bg-Light-backgroundPri dark:bg-Dark-backgroundPri mt-3 pt-3 border-t-2 dark:border-Light-backgroundPri border-Dark-backgroundPri">
                <AddComment />
                <div className="max-h-80 hover:scrollbar-thumb-Light-primary active:scrollbar-thumb-Light-primary scrollbar overflow-y-scroll mt-2">
                    {comments
                        .filter(comment => comment.postId === params.postId)
                        .map(comment => (
                            <Comment postId={params.postId} comment={comment} key={comment._id} />
                        ))}
                </div>
                {countComment > 10 && <ShowMore postId={params.postId} />}
            </div>
        </div>
    );
}
