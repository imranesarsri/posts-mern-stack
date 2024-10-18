import { useContext } from "react";
import { Link } from "react-router-dom";
import { UseToggleDarkMode } from "../App";
import { useEffect } from "react";

export default function Error404(params) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { translate } = useContext(UseToggleDarkMode)
    return (
        <section
            className="bg-Light-backgroundPri dark:bg-Dark-backgroundPri h-screen flex items-center">
            <div
                className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div
                    className="mx-auto max-w-screen-sm text-center">
                    <h1
                        className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-Light-primary dark:text-Dark-primary">
                        {translate('error404:404')}
                    </h1>
                    <p
                        className="mb-4 text-3xl capitalize tracking-tight font-bold text-Light-primary dark:text-Dark-primary">
                        {translate('error404:pageNotFound')}
                    </p>
                    <p
                        className="normal-case mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                        {translate('error404:sorryMessage')}

                    </p>

                    <Link
                        to={params.path === "admin" ? "/admin/dashboard" : "/"}
                        className="block w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        {params.path === "admin" ? translate('error404:backToDashboard') : translate('error404:backToHomepage')}
                    </Link>
                </div>
            </div>
        </section>
    )
}
