import { AiOutlineLike } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { Link } from "react-router-dom";
import ListComments from "../comments/ListComments";
import { useState } from "react";
import DropdownForm from "../FormControls/DropdownForm";

const PostCard = (params) => {
    const [comment, setComment] = useState(true);
    return (
        <div className="bg-Light-backgroundPri dark:bg-Dark-backgroundPri border-2 border-x-Light-primary rounded-lg shadow dark:border-x-Dark-primary border-y-0 dark:border-y-0">
            <div className="flex p-2 md:p-5 justify-center">
                <div className="block min-w-8 lg:min-w-12 pt-1">
                    <Link to="/profile">
                        <img
                            className="w-6 h-6 lg:w-10 lg:h-10 rounded-full"
                            src={params.post.user.image}
                            alt="Rounded avatar"
                        />
                    </Link>
                </div>
                <div className="ltr:mr-3 rtl:ml-3 md:ltr:mr-10 md:rtl:ml-10">
                    <div className="">
                        <div>
                            <div className="flex justify-between">
                                <Link to="/profile" className="flex flex-col mb-2">
                                    <span className="block font-bold text-sm lg:text-lg">
                                        {params.post.user.username}
                                    </span>
                                    <span className="block font-light text-xs lg:text-base ">
                                        {params.post.category} . Sep 30
                                    </span>
                                </Link>
                                <DropdownForm actionType="post" />
                            </div>
                            <Link
                                to={`/posts/details/${params.post._id}`}
                                className="block font-normal text-base lg:text-lg"
                            >
                                {params.post.title}
                            </Link>
                        </div>
                    </div>
                    <Link
                        to={`/posts/details/${params.post._id}`}
                        className="block mb-3 text-justify text-sm lg:text-base"
                    >
                        {params.post.description}
                    </Link>
                    <Link to={`/posts/details/${params.post._id}`}>
                        <img className="rounded-lg" src={params.post.image} alt="" />
                    </Link>
                    <div className="flex justify-around pt-5">
                        <div className="flex space-x-2 text-start items-center cursor-pointer">
                            <AiOutlineLike className="text-xl rtl:ml-2" />
                            {/* <AiFillLike className="text-xl" /> */}
                            <span>100</span>
                        </div>
                        <button
                            value={comment}
                            onClick={() => setComment(prev => !prev)}
                            className="flex ltr:space-x-2 text-start items-center cursor-pointer">
                            <GoComment className="text-xl rtl:ml-2" />
                            <span>60</span>
                        </button>
                    </div>
                    <ListComments hidden={comment} postId={params.post._id} />
                </div>
            </div>
        </div>
    );
};

export default PostCard;
