import { Avatar, Dropdown } from "flowbite-react";
import { HiCog, HiLogout, HiViewGrid } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function ProfileDropdown() {
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
                    <span className="block text-sm">Imrane Sarsri</span>
                    <span className="block truncate text-sm font-medium">imrane@example.com</span>
                </Dropdown.Header>
                <Link to="admin/dashboard">
                    <Dropdown.Item icon={HiViewGrid}>Dashboard</Dropdown.Item>
                </Link>
                <Link to="profile">
                    <Dropdown.Item icon={HiCog}>Profile</Dropdown.Item>
                </Link>
                <Dropdown.Divider />
                <Dropdown.Item icon={HiLogout}>Sign out</Dropdown.Item>
            </Dropdown>
        </div>
    )
}
