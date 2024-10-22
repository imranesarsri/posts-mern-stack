import { Navbar } from "flowbite-react";
import { useContext } from "react";
import { useThemeMode } from 'flowbite-react';
import { FaRegSun, FaRegMoon } from "react-icons/fa";
import Flag from 'react-flagkit';
import { Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
import { LoginButton } from "../formControls/ButtonsForm";
import ProfileDropdown from "../profile/ProfileDropdown";
import { useSelector } from "react-redux"
import { UseToggleDarkMode } from "../../main";


export default function NavBar() {

    const { lang, handleChangeLanguage, translate, path } = useContext(UseToggleDarkMode)
    const { mode, toggleMode } = useThemeMode(); // Get the current mode and the toggle function

    const { user } = useSelector(state => state.auth)
    return (
        <div className="mt-14 lg:mt-18">
            <div className="fixed top-0 left-0 right-0 z-10 w-full dark:bg-Dark-backgroundPri bg-Light-backgroundPri shadow-md">
                <Navbar fluid rounded className="dark:bg-Dark-backgroundPri bg-Light-backgroundPri container">
                    <Navbar.Brand href="/">
                        <img src={mode === 'dark' ? ('images/logos/logo-dark.svg') : ('images/logos/logo-light.svg')} className="ltr:mr-3 rtl:ml-3 h-9 sm:h-12" alt="Postfy logo" />
                        <span id="appName" className="hidden self-center text-2xl font-semibold whitespace-nowrap text-Light-text dark:text-Dark-text ">
                            {translate('translation:appName')}
                        </span>
                    </Navbar.Brand>
                    <div className="flex space-x-2 md:space-x-0 md:order-2">
                        <div className="flex shadow-inside bg-Light-backgroundSec dark:bg-Dark-backgroundSec rtl:ml-5 ltr:mr-5 rounded-3xl text-center items-center">
                            <button className="px-3 py-2"
                                onClick={toggleMode}
                                aria-label="Toggle Dark Mode"
                            >
                                {mode === 'dark' ? (
                                    <FaRegSun className="text-white" />
                                ) : (
                                    <FaRegMoon />
                                )}
                            </button>
                            <div className="text-Light-text dark:text-Dark-text">
                                <Dropdown color="Gray" label={lang === 'en' ? <Flag country="US" /> : <Flag country="MA" />}
                                    className=""
                                >
                                    <Dropdown.Item onClick={() => handleChangeLanguage('en')}>
                                        <Flag country="US" className="ltr:mr-2 rtl:ml-2 capitalize custom-flag text-white" />
                                        {translate('navBar:english')}
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item onClick={() => handleChangeLanguage('ar')}>
                                        <Flag country="MA" className="ltr:mr-2 rtl:ml-2 capitalize text-white" />
                                        {translate('navBar:arabic')}

                                    </Dropdown.Item>
                                </Dropdown>
                            </div>
                        </div>

                        {user ?
                            <ProfileDropdown userName={user?.userName} email={user?.email} />
                            :
                            <div className="hidden md:flex justify-end ">
                                <LoginButton />
                            </div>
                        }

                        <Navbar.Toggle />
                    </div>
                    <Navbar.Collapse>
                        <Navbar.Link className="rtl:md:ml-8 capitalize" active={path === '/'}>
                            <Link to="/" className="flex ltr:space-x-2">
                                <FaHome className="text-xl" />
                                <span className="block rtl:mr-2">
                                    {translate('navBar:home')}
                                </span>
                            </Link>

                        </Navbar.Link>
                        <Navbar.Link className="capitalize" active={path === '/posts'}>
                            <Link to="/posts" className="flex ltr:space-x-2">
                                <MdLibraryBooks className="text-xl" />
                                <span className="block rtl:mr-2">
                                    {translate('navBar:posts')}
                                </span>
                            </Link>
                        </Navbar.Link>
                        <Navbar.Link className="capitalize" active={path === '/posts/create'}>
                            <Link to="/posts/create" className="flex ltr:space-x-2">
                                <GiNotebook className="text-xl" />
                                <span className="block rtl:mr-2">
                                    {translate('navBar:createPosts')}
                                </span>
                            </Link>
                        </Navbar.Link>

                        <div className="md:hidden flex justify-between ">
                            <LoginButton />

                        </div>
                        <Navbar.Toggle />
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
}
