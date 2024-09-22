"use client";
import { Navbar, Button, DarkThemeToggle } from "flowbite-react";
import { useContext } from "react";
import { UseToggleDarkMode } from "../../App"
const customTheme = {
    color: {
        primary: "bg-red-500",
    },
};


export default function NavBar() {

    const { lang, handleChangeLanguage, t } = useContext(UseToggleDarkMode)

    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="/">
                <img src="favicon.ico" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
            </Navbar.Brand>
            <div className="flex md:order-2">
                <div>
                    <DarkThemeToggle />
                    <select
                        name="lang"
                        value={lang}
                        onChange={handleChangeLanguage}
                        className="p-2 border rounded"
                    >
                        <option value="en">English</option>
                        <option value="ar">Arabic</option>
                    </select>
                </div>
                <Button>Login</Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link href="#" active>
                    Home
                </Navbar.Link>
                <Navbar.Link href="#">About</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
