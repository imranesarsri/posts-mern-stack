import { useThemeMode } from "flowbite-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaHome, FaLinkedinIn } from "react-icons/fa";
import { MdContacts, MdLibraryBooks } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { UseToggleDarkMode } from "../../App";

export default function Footer() {
    const { translate } = useContext(UseToggleDarkMode)
    const { mode } = useThemeMode(); // Get the current mode and the toggle function
    return (

        <footer className="bg-Light-backgroundPri rounded-lg shadow shadow-Light-primary dark:shadow-Dark-primary dark:bg-Dark-backgroundPri">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={mode === 'dark' ? ('images/logos/logo-dark.svg') : ('images/logos/logo-light.svg')} className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            {translate('translation:appName')}
                        </span>
                    </Link>
                    <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-center mt-6 sm:mt-0 mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li className="rtl:mr-4">
                            <Link to="/" className="flex ltr:space-x-2 ">
                                <FaHome className="text-xl" />
                                <span className="block capitalize hover:underline rtl:mr-2">
                                    {translate('navBar:home')}
                                </span>
                            </Link>
                        </li>
                        <li className="rtl:mr-4">
                            <Link to="/posts" className="flex ltr:space-x-2 ">
                                <MdLibraryBooks className="text-xl" />
                                <span className="block capitalize hover:underline rtl:mr-2">
                                    {translate('navBar:posts')}
                                </span>
                            </Link>
                        </li>
                        <li className="rtl:mr-4">
                            <Link to="/about" className="flex ltr:space-x-2 ">
                                <FcAbout className="text-xl" />
                                <span className="block capitalize hover:underline rtl:mr-2">
                                    {translate('footer:abouteLink')}
                                </span>
                            </Link>
                        </li>
                        <li className="rtl:mr-4">
                            <Link to="/contact" className="flex ltr:space-x-2 ">
                                <MdContacts className="text-xl" />
                                <span className="block capitalize hover:underline rtl:mr-2">
                                    {translate('footer:contactLink')}
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                <div className="flex items-center justify-between">
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        {translate('footer:copyright')}
                        <Link to="/aboute" className="hover:underline">
                            {translate('translation:appName')}
                        </Link>. {translate('footer:allRights')}
                    </span>
                    <div className="flex ltr:space-x-5 justify-center">
                        <a href="https://github.com/imranesarsri/posts-mern-stack" className="rtl:ml-5 text-Light-textSec dark:text-Dark-textSec hover:text-Light-primary dark:hover:text-Dark-primary">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/imrane-sarsri-92a116299/" className="text-Light-textSec dark:text-Dark-textSec hover:text-Light-primary dark:hover:text-Dark-primary">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}
