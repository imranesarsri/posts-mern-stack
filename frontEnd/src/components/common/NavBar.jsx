"use client";
import { Navbar, Button } from "flowbite-react";
import { useContext } from "react";
import { UseToggleDarkMode } from "../../App"
import { useThemeMode } from 'flowbite-react';
import { FaRegSun, FaRegMoon } from "react-icons/fa";
import Flag from 'react-flagkit';
import { Dropdown } from "flowbite-react";


export default function NavBar() {

    const { lang, handleChangeLanguage } = useContext(UseToggleDarkMode)
    const { mode, toggleMode } = useThemeMode(); // Get the current mode and the toggle function

    return (
        <div className="dark:bg-Dark-backgroundPri bg-Light-backgroundPri container">
            <Navbar fluid rounded className="dark:bg-Dark-backgroundPri bg-Light-backgroundPri">
                <Navbar.Brand href="/">
                    <img src="favicon.ico" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <div className="flex bg-Light-backgroundSec dark:bg-Dark-backgroundSec rtl:ml-5 ltr:mr-5 rounded-lg">
                        <button className="text-center items-center px-3 py-2"
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
                                    <Flag country="US" className="mr-2 text-white" /> English
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={() => handleChangeLanguage('ar')}>
                                    <Flag country="MA" className="mr-2 text-white" /> Arabic
                                </Dropdown.Item>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Button gradientMonochrome="purple" className="ltr:mr-2">Login</Button>
                        <Button gradientMonochrome="purple" className="rtl:mr-2">Register</Button>
                    </div>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href="#" active>
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="#">About</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
