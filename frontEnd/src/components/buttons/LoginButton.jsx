import { useContext } from "react";
import { UseToggleDarkMode } from "../../App";
import { Link } from "react-router-dom";

export default function LoginButton() {
    const { translate } = useContext(UseToggleDarkMode)

    return (
        <Link
            className="block text-center capitalize w-full text-Dark-text bg-Light-primary dark:bg-Dark-primary dark:hover:bg-Dark-secondary hover:bg-Light-secondary focus:outline-none focus:ring font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 transition delay-100 duration-150 ease-in-out"
            to="/login"
        >
            {translate('buttons:loginButton')}
        </Link>

    )
}
