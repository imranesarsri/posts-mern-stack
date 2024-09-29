import { Navbar } from "flowbite-react";
import { useContext } from "react";
import { UseToggleDarkMode } from "../../App"
import { useThemeMode } from 'flowbite-react';
import { FaRegSun, FaRegMoon } from "react-icons/fa";
import Flag from 'react-flagkit';
import { Dropdown } from "flowbite-react";
import LoginButton from "../buttons/LoginButton"
import { Link } from "react-router-dom";

export default function NavBar() {

    const { lang, handleChangeLanguage, translate } = useContext(UseToggleDarkMode)
    const { mode, toggleMode } = useThemeMode(); // Get the current mode and the toggle function

    return (
        <div className="dark:bg-Dark-backgroundPri bg-Light-backgroundPri shadow-md">
            <Navbar fluid rounded className="dark:bg-Dark-backgroundPri bg-Light-backgroundPri container">
                <Navbar.Brand href="/">
                    <img src={mode === 'dark' ? ('images/logos/logo-dark.svg') : ('images/logos/logo-light.svg')} className="mr-3 h-9 sm:h-12" alt="Flowbite React Logo" />
                </Navbar.Brand>
                <div className="flex md:order-2">
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
                    <div className="hidden md:flex justify-end ">
                        <LoginButton />
                    </div>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link className="rtl:md:ml-8 capitalize" active>
                        <Link to="/">{translate('navBar:home')}</Link>

                    </Navbar.Link>
                    <Navbar.Link className="capitalize">
                        <Link to="/login">{translate('navBar:posts')}</Link>
                    </Navbar.Link>

                    <div className="md:hidden flex justify-between ">
                        <LoginButton />

                    </div>
                    <Navbar.Toggle />
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
