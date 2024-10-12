import { useContext } from "react";
import { UseToggleDarkMode } from "../../App";
import { Link } from "react-router-dom";

export default function SearchAndFilter(params) {
    const { translate } = useContext(UseToggleDarkMode);
    console.log(`ddddddd ${params.activeLink}`)
    return (
        <div className="lg:order-last mb-5 sm:mb-8 md:mb-10 lg:mb-0">
            <form className="block bg-Light-backgroundPri dark:bg-Dark-backgroundPri px-3 py-8 border-y-2 border-Light-primary dark:border-Dark-primary rounded-sm">
                <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-Light-text sr-only dark:text-Dark-text"
                >
                    {translate("postsPage:search")}
                </label>
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
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-Light-primary rounded-lg bg-Light-backgroundPri dark:bg-Dark-backgroundPri dark:border-Dark-primary dark:placeholder-Dark-textSec dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={`${translate('postsPage:search')}...`}
                        required
                    />
                    <button
                        type="submit"
                        className="text-Dark-text capitalize absolute end-2.5 bottom-2.5 bg-Light-primary dark:bg-Dark-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg border border-Light-primary dark:border-Dark-primary text-sm px-4 py-2 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        {translate('postsPage:search')}
                    </button>
                </div>

                <div className="mt-5">
                    <label
                        htmlFor="large"
                        className="block capitalize mb-2 text-base font-medium text-gray-900 dark:text-white"
                    >
                    </label>
                </div>
                <div className="mt-5">
                    <h2
                        className="block capitalize mb-2 text-lg font-medium text-gray-900 dark:text-white"
                    >
                        {translate("postsPage:category")}
                    </h2>
                    <div className={params.activeLink === 'sport' ? 'bg-Light-secondary dark:bg-Dark-secondary' : 'bg-Light-primary dark:bg-Dark-primary'}>
                        <Link to={`/posts/category/sport`} className="block p-3 mb-3 cursor-pointer rounded-md text-center">
                            <h3 className="capitalize text-Dark-text font-medium">sport</h3>
                        </Link>
                    </div>
                    <div className={params.activeLink === 'technology' ? 'bg-Light-secondary dark:bg-Dark-secondary' : 'bg-Light-primary dark:bg-Dark-primary'}>
                        <Link to={`/posts/category/technology`} className="block p-3 mb-3 cursor-pointer rounded-md text-center">
                            <h3 className="capitalize text-Dark-text font-medium">technology</h3>
                        </Link>
                    </div>
                    <div className={params.activeLink === 'music' ? 'bg-Light-secondary dark:bg-Dark-secondary' : 'bg-Light-primary dark:bg-Dark-primary'}>
                        <Link to={`/posts/category/music`} className="block p-3 mb-3 cursor-pointer rounded-md text-center">
                            <h3 className="capitalize text-Dark-text font-medium">music</h3>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}
