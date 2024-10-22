import { useContext } from "react";
import { Link } from "react-router-dom";
import { InputSearchForm } from "../formControls/InputsForm";
import { UseToggleDarkMode } from "../../main";


export default function SearchAndFilter(params) {
    const { translate } = useContext(UseToggleDarkMode);
    console.log(` ${params.activeLink}`);

    return (
        <div className="lg:order-last mb-5 sm:mb-8 md:mb-10 lg:mb-0">
            <form className="block bg-Light-backgroundPri dark:bg-Dark-backgroundPri px-3 py-8 border-y-2 border-Light-primary dark:border-Dark-primary rounded-sm">
                <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-Light-text sr-only dark:text-Dark-text"
                >
                    {translate("postsPage:search")}
                </label>

                <InputSearchForm
                    type="search"
                    placeholder={translate("postsPage:search")}
                    buttonText={translate("postsPage:search")}
                />

                <div className="mt-5">
                    <label
                        htmlFor="large"
                        className="block capitalize mb-2 text-base font-medium text-gray-900 dark:text-white"
                    ></label>
                </div>
                <div className="mt-5">
                    <h2 className="block capitalize mb-2 text-lg font-medium text-gray-900 dark:text-white">
                        {translate("postsPage:category")}
                    </h2>
                    <div
                        className={
                            params.activeLink === "sport"
                                ? "bg-Light-secondary dark:bg-Dark-secondary"
                                : "bg-Light-primary dark:bg-Dark-primary"
                        }
                    >
                        <Link
                            to={`/posts/category/sport`}
                            className="block p-3 mb-3 cursor-pointer rounded-md text-center"
                        >
                            <h3 className="capitalize text-Dark-text font-medium">sport</h3>
                        </Link>
                    </div>
                    <div
                        className={
                            params.activeLink === "technology"
                                ? "bg-Light-secondary dark:bg-Dark-secondary"
                                : "bg-Light-primary dark:bg-Dark-primary"
                        }
                    >
                        <Link
                            to={`/posts/category/technology`}
                            className="block p-3 mb-3 cursor-pointer rounded-md text-center"
                        >
                            <h3 className="capitalize text-Dark-text font-medium">
                                technology
                            </h3>
                        </Link>
                    </div>
                    <div
                        className={
                            params.activeLink === "music"
                                ? "bg-Light-secondary dark:bg-Dark-secondary"
                                : "bg-Light-primary dark:bg-Dark-primary"
                        }
                    >
                        <Link
                            to={`/posts/category/music`}
                            className="block p-3 mb-3 cursor-pointer rounded-md text-center"
                        >
                            <h3 className="capitalize text-Dark-text font-medium">music</h3>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}
