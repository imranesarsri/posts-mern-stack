import { useEffect, useState } from "react";
import { FaPenAlt, FaSignOutAlt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { posts } from "../../Data/dummyData";
import PostList from "../../components/common/PostList";
import { Dropdown } from "flowbite-react";
import { MdOutlineMail } from "react-icons/md";
import { PiPasswordBold } from "react-icons/pi";
import { RiDeleteBin4Fill } from "react-icons/ri";
import ProfileUser from "../../components/modals/profile/ProfileUser";
import BackgroundImage from "../../components/modals/profile/BackgroundImage";
import ImageProfile from "../../components/modals/profile/ImageProfile";
import ChangeEmail from "../../components/modals/profile/ChangeEmail";
import ChangePassword from "../../components/modals/profile/ChangePassword";
import { useDispatch, useSelector } from "react-redux"
import { getUserProfile } from "../../redux/apiCalls/profileApiCall";
import { useParams } from "react-router-dom"


export default function Profile() {

    // Change user information 
    const [openModalProfileUser, setOpenModalProfileUser] = useState(false);
    const [openModalBackgroundImage, setOpenModalBackgroundImage] = useState(false);
    const [openModalImageProfile, setOpenModalImageProfile] = useState(false);
    const [openModalChangeEmail, setOpenModalChangeEmail] = useState(false);
    const [openModalChangePassword, setOpenModalChangePassword] = useState(false);

    const { id } = useParams()
    const dispatch = useDispatch()
    const { profile } = useSelector(state => state.profile)
    useEffect(() => {
        dispatch(getUserProfile(id))
        window.scrollTo(0, 0);
    }, [id, openModalImageProfile]);

    return (
        <div className="p-5 sm:p-10 md:p-15 lg:p-20 flex flex-col gap-10">
            <div className="">
                <div className="drop-shadow-md bg-Light-backgroundPri dark:bg-Dark-backgroundPri rounded-xl">
                    <div className="bg-profileBackground h-72 relative rounded-t-xl">
                        <div onClick={() => setOpenModalBackgroundImage(true)} className="absolute top-0 ltr:right-0 rtl:left-0 bg-Light-backgroundPri dark:bg-Dark-backgroundPri ltr:pr-1 rtl:pl-1 ltr:pl-3 rtl:pr-3 py-3 ltr:mr-2 rtl:ml-2 mt-2 rounded-full cursor-pointer hover:text-Light-primary dark:hover:text-Dark-primary">
                            <FaPenAlt className="ltr:mr-2 rtl:ml-2 capitalize text-lg" />
                        </div>
                        <div className="absolute -bottom-16 ltr:left-5 rtl:right-5">
                            <img
                                className="w-40 h-40 rounded-full border-4 border-Light-backgroundPri dark:border-Dark-backgroundPri object-cover shadow-lg"
                                src={profile?.profilePhoto.url}
                                alt="Profile Image"
                            />
                            <div onClick={() => setOpenModalImageProfile(true)} className="absolute top-16 ltr:-right-5 rtl:-left-5 bg-Light-backgroundPri dark:bg-Dark-backgroundPri ltr:pr-1 rtl:pl-1 ltr:pl-3 rtl:pr-3 py-3 ltr:mr-2 rtl:ml-2 mt-2 rounded-full cursor-pointer hover:text-Light-primary dark:hover:text-Dark-primary">
                                <FaPenAlt className="ltr:mr-2 rtl:ml-2 capitalize text-lg" />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between lg:ltr:pl-52 lg:rtl:pr-52 pt-20 lg:pt-5  p-5 ">
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold uppercase text-Light-primary dark:text-Dark-primary">
                                {profile?.userName}
                            </h2>
                            <h3 className="capitalize text-base md:text-lg font-semibold">
                                full stack web development
                            </h3>
                            <h4 className="capitalize text-md md:text-base font-normal">
                                Tangier, Morocco
                            </h4>
                            <p className="capitalize text-sm md:text-md font-medium mt-2">
                                <span>Date joined :</span>
                                <span className="text-Light-primary dark:text-Dark-primary">
                                    {" "}
                                    {new Date(profile?.createdAt).toDateString()}
                                </span>
                            </p>
                        </div>
                        <div>
                            <div className="cursor-pointer hover:bg-Light-backgroundSec dark:hover:bg-Dark-backgroundSec ltr:pr-1 ltr:pl-3 rtl:pl-1 rtl:pr-3 py-3 rounded-full">
                                <div className="flex flex-col gap-5 justify-center  text-center">
                                    <div className="">
                                        <div
                                            id="dropdawnMenu"
                                            className=""
                                        >
                                            <Dropdown
                                                color="Gray"
                                                label={
                                                    <IoMdSettings
                                                        id="deleteMargin"
                                                        className="ltr:mr-2 rtl:ml-2 capitalize text-lg hover:text-Light-primary dark:hover:text-Dark-primary"
                                                    />
                                                }
                                                dismissOnClick={false}
                                            >
                                                <Dropdown.Item onClick={() => setOpenModalChangeEmail(true)}>
                                                    <MdOutlineMail className="ltr:mr-2 rtl:ml-2 text-lg capitalize" />
                                                    <span className="block capitalize">Change Email</span>
                                                </Dropdown.Item>
                                                <Dropdown.Item onClick={() => setOpenModalChangePassword(true)}>
                                                    <PiPasswordBold className="ltr:mr-2 rtl:ml-2 capitalize text-lg" />
                                                    <span className="block capitalize">Change Password</span>
                                                </Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item>
                                                    <FaSignOutAlt className="ltr:mr-2 rtl:ml-2 capitalize text-lg text-Light-red" />
                                                    <span className="block capitalize">Sign out</span>
                                                </Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item>
                                                    <RiDeleteBin4Fill className="ltr:mr-2 rtl:ml-2 capitalize text-lg text-Light-red" />
                                                    <span className="block capitalize">Delete Account</span>
                                                </Dropdown.Item>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div onClick={() => setOpenModalProfileUser(true)}>
                                        <FaPenAlt className="ltr:mr-2 rtl:ml-2 capitalize text-lg hover:text-Light-primary dark:hover:text-Dark-primary" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="px-5 pb-10">
                        <p className="text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                            porro nesciunt, tempore dolorum temporibus soluta dolore aperiam
                            totam impedit id a quisquam consectetur atque eum ipsam Lorem
                            ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro
                            nesciunt, tempore dolorum temporibus soluta dolore aperiam totam
                            impedit id a quisquam consectetur atque eum ipsam tenetur quae
                            debitis quos!
                        </p>
                    </div>
                </div>
            </div>

            {/* Models */}
            <ProfileUser openModal={openModalProfileUser} setOpenModal={setOpenModalProfileUser} />
            <BackgroundImage openModal={openModalBackgroundImage} setOpenModal={setOpenModalBackgroundImage} />
            <ImageProfile openModal={openModalImageProfile} setOpenModal={setOpenModalImageProfile} />
            <ChangeEmail openModal={openModalChangeEmail} setOpenModal={setOpenModalChangeEmail} email={profile?.email} />
            <ChangePassword openModal={openModalChangePassword} setOpenModal={setOpenModalChangePassword} />

            <div>
                <h2 className="text-3xl uppercase font-bold mb-5">
                    <span className="text-Light-primary dark:text-Dark-primary">
                        {profile?.userName}{" "}
                    </span>
                    posts
                </h2>
                <PostList posts={posts} />
            </div>
        </div>
    );
}
