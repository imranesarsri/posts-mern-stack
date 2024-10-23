import { Dropdown } from "flowbite-react";
import { useContext } from "react";
import { HiCog, HiLogout, HiViewGrid } from "react-icons/hi";
import { Link } from "react-router-dom";
import { signOutUser } from "../../redux/apiCalls/authApiCall";
import { useDispatch, useSelector } from "react-redux";
import { UseToggleDarkMode } from "../../App";
import AvatarRounded from "../Avatars/AvatarRounded";


export default function ProfileDropdown(params) {
    const { user } = useSelector(state => state.auth)
    const { profile } = useSelector(state => state.profile)
    const { translate } = useContext(UseToggleDarkMode);
    const dispatch = useDispatch()

    return (
        <div className="flex">
            <div
                id="dropdownClickButton"
                data-dropdown-toggle="dropdownClick"
                aria-hidden="true"
                className="flex flex-wrap gap-2 items-center cursor-pointer"
            >
                <AvatarRounded src={profile?.profilePhoto.url} alt="avatar of profile" />
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
                    {
                        user?.isAdmin && (
                            <Dropdown.Item icon={HiViewGrid}>{translate("navBar:dashboard")}</Dropdown.Item>
                        )
                    }
                </Link>
                <Link to={`/profile/${user._id}`}>
                    <Dropdown.Item icon={HiCog}>{translate("navBar:profile")}</Dropdown.Item>
                </Link>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => { dispatch(signOutUser()) }} icon={HiLogout}>{translate("navBar:signOut")}</Dropdown.Item>
            </Dropdown>
        </div>
    )
}
