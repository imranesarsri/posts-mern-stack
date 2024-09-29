import { useContext } from "react";
import { UseToggleDarkMode } from "../../App";
import { Link } from "react-router-dom";

export default function RegisterButton() {
    const { translate } = useContext(UseToggleDarkMode)

    return (
        <>
            <Link
                className=" w-full rounded-3xl relative text-center inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                to="/register"
            >
                <span className="w-full relative px-5 py-2 transition-all ease-in duration-75 rounded-3xl bg-Light-backgroundPri dark:bg-Dark-backgroundPri group-hover:bg-opacity-0">
                    {translate('buttons:registerButton')}
                </span>
            </Link>
        </>
    )
}
