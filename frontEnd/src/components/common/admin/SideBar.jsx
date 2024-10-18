import { Dropdown, Sidebar, useThemeMode } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineMinusSm, HiOutlinePlusSm, HiShoppingBag, HiTable, HiUser, } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import { Navbar } from "flowbite-react";
import { useContext } from "react";
import { UseToggleDarkMode } from "../../../App";
import Flag from "react-flagkit";
import ProfileDropdown from "../../profile/ProfileDropdown";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { RiMenuFoldLine } from "react-icons/ri";
// import { RiMenuUnfoldLine } from "react-icons/ri";


export default function SideBar(params) {
    const { lang, handleChangeLanguage, translate } = useContext(UseToggleDarkMode)
    const { mode, toggleMode } = useThemeMode();
    return (
        <div className="flex">

            <Sidebar
                aria-label="Sidebar with multi-level dropdown example"
                className="bg-Light-backgroundPri dark:bg-Dark-backgroundPri"
            >
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="#" icon={HiChartPie}>
                            Dashboard
                        </Sidebar.Item>
                        <Sidebar.Collapse
                            icon={HiUser}
                            label="Users"
                            renderChevronIcon={(theme, open) => {
                                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                                return (
                                    <IconComponent
                                        aria-hidden
                                        className={twMerge(
                                            theme.label.icon.open[open ? "on" : "off"]
                                        )}
                                    />
                                );
                            }}
                        >
                            <Sidebar.Item href="#">All Users</Sidebar.Item>
                            <Sidebar.Item href="#">All Admins</Sidebar.Item>
                        </Sidebar.Collapse>

                        <Sidebar.Collapse
                            icon={HiUser}
                            label="Posts"
                            renderChevronIcon={(theme, open) => {
                                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                                return (
                                    <IconComponent
                                        aria-hidden
                                        className={twMerge(
                                            theme.label.icon.open[open ? "on" : "off"]
                                        )}
                                    />
                                );
                            }}
                        >
                            <Sidebar.Item href="#">All Posts</Sidebar.Item>
                            <Sidebar.Item href="#">All Admins</Sidebar.Item>
                        </Sidebar.Collapse>

                        <Sidebar.Collapse
                            icon={HiUser}
                            label="Categories"
                            renderChevronIcon={(theme, open) => {
                                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                                return (
                                    <IconComponent
                                        aria-hidden
                                        className={twMerge(
                                            theme.label.icon.open[open ? "on" : "off"]
                                        )}
                                    />
                                );
                            }}
                        >
                            <Sidebar.Item href="#">All Categories</Sidebar.Item>
                            <Sidebar.Item href="#">All Admins</Sidebar.Item>
                        </Sidebar.Collapse>

                        <Sidebar.Item href="#" icon={HiInbox}>
                            Inbox
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiUser}>
                            Users
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiShoppingBag}>
                            Products
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiArrowSmRight}>
                            Sign In
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiTable}>
                            Sign Up
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
            <div>
                <Navbar fluid rounded className="w-full block dark:bg-Dark-backgroundPri bg-Light-backgroundPri container">
                    <Navbar.Brand className="cursor-pointer">
                        <RiMenuFoldLine className="text-2xl" />
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

                        {/* <div className="hidden md:flex justify-end ">
                            <LoginButton />
                        </div> */}
                        <ProfileDropdown />
                        <Navbar.Toggle />
                    </div>
                </Navbar>
                {params.children}
            </div>
        </div>

    );
}
