import { AiOutlineLike } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { Dropdown } from "flowbite-react";
import { CiMenuKebab } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import { FaPenAlt } from "react-icons/fa";
import { useContext } from "react";
import { UseToggleDarkMode } from "../../App";

export default function PostCard() {
    const { translate } = useContext(UseToggleDarkMode)

    return (
        <div className="bg-Light-backgroundPri dark:bg-Dark-backgroundPri border-2 border-x-Light-primary rounded-lg shadow dark:border-x-Dark-primary border-y-0 dark:border-y-0">
            <div className="flex p-3">
                <div className="min-w-8 lg:min-w-12 pt-1">
                    <img className="w-6 h-6 lg:w-10 lg:h-10 rounded-full" src="https://res.cloudinary.com/dvldvlezb/image/upload/v1726849372/lvvcskml0w7rcxuc8tf7.webp" alt="Rounded avatar" />
                </div>
                <div className="ltr:mr-3 rtl:ml-3 md:ltr:mr-10 md:rtl:ml-10">
                    <div className="">
                        <div>
                            <div className="flex justify-between">
                                <h3 className="flex flex-col mb-2">
                                    <span className="block font-bold text-sm lg:text-lg">
                                        Cristiano Ronaldo
                                    </span>
                                    <span className="block font-light text-xs lg:text-base ">
                                        Sport . Sep 30
                                    </span>
                                </h3>
                                <div>
                                    <div id="dropdawnMenu" className="bg-Light-backgroundSec py-1 px-1 dark:bg-Dark-backgroundSec">
                                        <Dropdown color="Gray" label={<CiMenuKebab id="deleteMargin" className=" text-lg  text-Light-text dark:text-Dark-text" />} dismissOnClick={false}>
                                            <Dropdown.Item>
                                                <MdOutlineDelete className="ltr:mr-2 rtl:ml-2 text-lg capitalize" />
                                                <span>
                                                    {translate('postsPage:delete')}
                                                </span>
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                <FaPenAlt className="ltr:mr-2 rtl:ml-2 capitalize" />
                                                <span>
                                                    {translate('postsPage:update')}
                                                </span>
                                            </Dropdown.Item>
                                        </Dropdown>
                                    </div >
                                </div>
                            </div>
                            <h2 className="font-normal text-base lg:text-lg">
                                Hard work pays off. Lets keep going!
                            </h2>
                        </div>
                    </div>
                    <p className="mb-3 text-justify text-sm lg:text-base">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur sint explicabo doloremque sapiente doloribus temporibus illum, aspernatur sed aut at laborum reprehenderit tenetur dolore nesciunt quidem in reiciendis alias. Voluptate.
                    </p>
                    <a href="/">
                        <img className="rounded-lg" src="https://res.cloudinary.com/dvldvlezb/image/upload/v1726186558/x32b7drsphzzxfoznumk.jpg" alt="" />
                    </a>
                    <div className="flex justify-around pt-3">
                        <div className="flex space-x-2 text-start items-center cursor-pointer">
                            <AiOutlineLike className="text-xl rtl:ml-2" />
                            {/* <AiFillLike className="text-xl" /> */}
                            <span>100</span>
                        </div>
                        <div className="flex ltr:space-x-2 text-start items-center cursor-pointer">
                            <GoComment className="text-xl rtl:ml-2" />
                            <span>60</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
