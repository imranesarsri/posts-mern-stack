import { CiMenuKebab } from "react-icons/ci";
import { FaPenAlt } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { useContext } from "react";
import { Dropdown } from "flowbite-react";
import { UseToggleDarkMode } from "../../App";
import AlertUpdate from "../alerts/AlertUpdate";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import AlertDelete from "../alerts/AlertDelete";

export default function DropdownForm(params) {

    const { translate } = useContext(UseToggleDarkMode);
    let navigate = useNavigate(); // Replaces useHistory with useNavigate

    const alertUpdateInstance = AlertUpdate({
        currentComment: "This is the current comment",
        onUpdate: (newComment) => {
            console.log("New Comment:", newComment);
            // Handle the updated comment (e.g., send it to the server)
        },
    });

    const { triggerDeleteAlert } = AlertDelete(); // Get the triggerDeleteAlert function

    const handleClick = () => {
        switch (params.actionType) {
            case "comment":
                alertUpdateInstance.triggerAlert(); // Show the comment update alert
                break;
            case "post":
                navigate("/posts/update"); // Redirect to the update page
                break;
            default:
                console.log("Unknown action type");
        }
    };

    return (
        <div>
            <div
                id="dropdawnMenu"
                className="bg-Light-backgroundSec py-1 px-1 dark:bg-Dark-backgroundSec"
            >
                <Dropdown
                    color="Gray"
                    label={
                        <CiMenuKebab
                            id="deleteMargin"
                            className=" text-lg text-Light-text dark:text-Dark-text"
                        />
                    }
                    dismissOnClick={false}
                >
                    <Dropdown.Item onClick={triggerDeleteAlert}>
                        <MdOutlineDelete className="ltr:mr-2 rtl:ml-2 text-lg capitalize" />
                        <span className="block capitalize">{translate("postsPage:delete")}</span>
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleClick}>
                        <FaPenAlt className="ltr:mr-2 rtl:ml-2 capitalize" />
                        <span className="block capitalize">{translate("postsPage:update")}</span>
                    </Dropdown.Item>
                </Dropdown>
            </div>
        </div>
    );
}
