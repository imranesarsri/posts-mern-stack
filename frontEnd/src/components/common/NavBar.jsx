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
        <div className="dark:bg-Dark-backgroundPri bg-Light-backgroundPri shadow-md">
            <Navbar fluid rounded className="dark:bg-Dark-backgroundPri bg-Light-backgroundPri container">
                <Navbar.Brand href="/">
                    <img src={mode === 'dark' ? ('images/logos/logo-dark.svg') : ('images/logos/logo-light.svg')} className="mr-3 h-9 sm:h-12" alt="Flowbite React Logo" />
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <div className="flex shadow-inside bg-Light-backgroundSec dark:bg-Dark-backgroundSec rtl:ml-5 ltr:mr-5 rounded-lg">
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
                                    <Flag country="US" className="mr-2 custom-flag text-white" /> English
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={() => handleChangeLanguage('ar')}>
                                    <Flag country="MA" className="mr-2 text-white" /> Arabic
                                </Dropdown.Item>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="hidden md:flex justify-end ">
                        <Button outline gradientDuoTone="purpleToBlue" className="ltr:mr-2">
                            Register
                        </Button>
                        <Button className="rtl:mr-2 bg-gradient-to-r from-GradientsLight-light to-GradientsLight-dark dark:from-GradientsDark-light dark:to-GradientsDark-dark">
                            Login
                        </Button>
                    </div>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href="#" className="rtl:md:ml-8 " active>
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="#">About</Navbar.Link>

                    <div className="md:hidden flex justify-between ">
                        <Button outline gradientDuoTone="purpleToBlue" className="ltr:mr-2 w-1/2">
                            Register
                        </Button>
                        <Button className=" w-1/2 rtl:mr-2 bg-gradient-to-r from-GradientsLight-light to-GradientsLight-dark dark:from-GradientsDark-light dark:to-GradientsDark-dark">
                            Login
                        </Button>
                    </div>
                    <Navbar.Toggle />
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
