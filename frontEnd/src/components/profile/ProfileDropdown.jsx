import { Avatar, Dropdown } from "flowbite-react";
import { useContext } from "react";
import { HiCog, HiLogout, HiViewGrid } from "react-icons/hi";
import { Link } from "react-router-dom";
import { UseToggleDarkMode } from "../../App";

export default function ProfileDropdown(params) {
    const { translate } = useContext(UseToggleDarkMode);

    return (
        <div className="flex">
            <div
                id="dropdownClickButton"
                data-dropdown-toggle="dropdownClick"
                aria-hidden="true"
                className="flex flex-wrap gap-2 items-center cursor-pointer"
            >
                <Avatar img="/images/user-avatar.png" alt="avatar of Jese" rounded />
            </div>

            <Dropdown id="dropdownClick" inline>
                <Dropdown.Header>
                    <span className="block text-sm">
                        {params.userName}
                    </span>
                    <span className="block truncate text-sm font-medium">
                        {params.email}
                    </span>
                </Dropdown.Header>
                <Link to="admin/dashboard">
                    <Dropdown.Item icon={HiViewGrid}>{translate("navBar:dashboard")}</Dropdown.Item>
                </Link>
                <Link to="profile">
                    <Dropdown.Item icon={HiCog}>{translate("navBar:profile")}</Dropdown.Item>
                </Link>
                <Dropdown.Divider />
                <Dropdown.Item icon={HiLogout}>{translate("navBar:signOut")}</Dropdown.Item>
            </Dropdown>
        </div>
    )
}
