import { FloatingLabel } from "flowbite-react";
import { useContext, useState } from "react";
import { UseToggleDarkMode } from "../../App";
import AvatarSquare from "../profile/AvatarSquare";
import { toast } from "react-toastify";

export default function AddComment() {
    const [addComment, setAddComment] = useState('')
    const { translate } = useContext(UseToggleDarkMode);

    const formSubminHandler = (e) => {
        e.preventDefault()

        if (!addComment) {
            return toast.error(translate("validateMessage:commentRequired"))
        }

        console.log({ addComment })
    }
    return (
        <div>
            <form className="flex items-center" onSubmit={formSubminHandler}>
                <div className="pb-1 ltr:mr-2 rtl:ml-2">
                    <AvatarSquare />
                </div>
                <div className="block w-full">

                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-Light-textSec dark:text-Dark-textSec"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <FloatingLabel
                            type="text"
                            value={addComment}
                            onChange={(e) => setAddComment(e.target.value)}
                            variant="outlined"
                            label={translate("comment:addComment")}
                            sizing="md"
                            className="inputAddComment bg-Light-backgroundSec dark:bg-Dark-backgroundSec"
                        />
                        <button
                            type="submit"
                            className="text-Dark-text bg-Light-primary dark:bg-Dark-primary dark:hover:bg-Dark-secondary hover:bg-Light-secondary focus:outline-none focus:ring  capitalize absolute end-2.5 bottom-2.5 focus:ring-blue-300 font-medium rounded-lg border border-Light-primary dark:border-Dark-primary text-sm px-4 py-1 dark:focus:ring-blue-800  transition delay-100 duration-150 ease-in-out"
                        >
                            {translate('comment:addButtom')}
                        </button>
                    </div>
                </div>




            </form>
        </div>
    )
}
