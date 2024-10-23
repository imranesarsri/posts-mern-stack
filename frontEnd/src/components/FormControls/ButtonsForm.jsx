import { useContext } from "react"
import { Link } from "react-router-dom"
import { UseToggleDarkMode } from "../../main"


export default function DefaultButton(params) {
    return (
        <button
            onClick={params.onClick}
            type="submit"
            className="block text-center capitalize w-full text-Dark-text bg-Light-primary dark:bg-Dark-primary dark:hover:bg-Dark-secondary hover:bg-Light-secondary focus:outline-none focus:ring font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 transition delay-100 duration-150 ease-in-out"
        >
            {params.title}
        </button>)
}


export function LoginButton() {
    const { translate } = useContext(UseToggleDarkMode)

    return (
        <Link
            className="block text-center capitalize w-full text-Dark-text bg-Light-primary dark:bg-Dark-primary dark:hover:bg-Dark-secondary hover:bg-Light-secondary focus:outline-none focus:ring font-medium rounded-full text-sm px-5 py-2.5 transition delay-100 duration-150 ease-in-out"
            to="/login"
        >
            {translate('buttons:loginButton')}
        </Link>
    )
}


export function RegisterButton() {
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

export function SubminButton(params) {
    const { translate } = useContext(UseToggleDarkMode)

    return (
        <Link
            className="block text-center capitalize w-full text-Dark-text bg-Light-primary dark:bg-Dark-primary dark:hover:bg-Dark-secondary hover:bg-Light-secondary focus:outline-none focus:ring font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 transition delay-100 duration-150 ease-in-out"
            type="submit"
        >
            {params.pathname === 'login' ? translate('buttons:loginButton') : translate('buttons:registerButton')}
        </Link>
    )
}
