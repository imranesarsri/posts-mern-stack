import { useContext, useState } from "react";
import AvatarSquare from "../profile/AvatarSquare";
import { toast } from "react-toastify";
import { InputCommentForm } from "../formControls/InputsForm";
import { UseToggleDarkMode } from "../../App";

export default function AddComment() {
    const [addComment, setAddComment] = useState("");
    const { translate } = useContext(UseToggleDarkMode);

    const formSubminHandler = (e) => {
        e.preventDefault();

        if (!addComment) {
            return toast.error(translate("validateMessage:commentRequired"));
        }

        console.log({ addComment });
    };
    return (
        <div>
            <form className="flex items-center" onSubmit={formSubminHandler}>
                <div className="pb-1 ltr:mr-2 rtl:ml-2">
                    <AvatarSquare />
                </div>
                <div className="block w-full">
                    <InputCommentForm
                        type="text"
                        value={addComment}
                        onChange={(e) => setAddComment(e.target.value)}
                        label={translate("comment:addComment")}
                        buttonText={translate("comment:addButtom")}
                    />
                </div>
            </form>
        </div>
    );
}
