import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { Dropdown } from "flowbite-react";
import { CiMenuKebab } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import { FaPenAlt } from "react-icons/fa";

export default function PostCard() {
    return (
        <div className=" bg-Light-backgroundPri dark:bg-Dark-backgroundPri border-2 border-x-Light-primary rounded-lg shadow dark:border-x-Dark-primary border-y-0 dark:border-y-0">
            <div className="flex p-3">
                <div className="min-w-12">
                    <img className="w-10 h-10 rounded-full" src="https://res.cloudinary.com/dvldvlezb/image/upload/v1726849372/lvvcskml0w7rcxuc8tf7.webp" alt="Rounded avatar" />
                </div>
                <div className="ltr:mr-10 rtl:ml-10">
                    <div className="">

                        <div>
                            <div className="flex justify-between">
                                <h3 className="font-bold text-lg ">
                                    Cristiano Ronaldo
                                    <span className="font-light ltr:ml-3 rtl:mr-3 text-base ">
                                        Sport . Sep 30
                                    </span>
                                </h3>
                                <div id="dropdawnMenu" className="bg-Light-backgroundPri text-end dark:bg-Dark-backgroundPri">
                                    <Dropdown color="Gray" label={<CiMenuKebab id="deleteMargin" className=" text-lg  text-Light-text dark:text-Dark-text" />} dismissOnClick={false}>
                                        <Dropdown.Item><MdOutlineDelete className="ltr:mr-2 rtl:ml-2" />Delete</Dropdown.Item>
                                        <Dropdown.Item><FaPenAlt className="ltr:mr-2 rtl:ml-2" />Update</Dropdown.Item>
                                    </Dropdown>
                                </div >
                            </div>
                            <h2 className="font-normal text-lg">
                                Hard work pays off. Lets keep going!
                            </h2>
                        </div>
                    </div>
                    <p className="mb-3 text-justify text-base">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur sint explicabo doloremque sapiente doloribus temporibus illum, aspernatur sed aut at laborum reprehenderit tenetur dolore nesciunt quidem in reiciendis alias. Voluptate.
                    </p>
                    <a href="/">
                        <img className="rounded-lg" src="https://res.cloudinary.com/dvldvlezb/image/upload/v1726186558/x32b7drsphzzxfoznumk.jpg" alt="" />
                    </a>
                    <div className="flex justify-around pt-3">
                        <div className="flex space-x-2 text-start items-center cursor-pointer">
                            <AiOutlineLike className="text-xl" />
                            {/* <AiFillLike className="text-xl" /> */}
                            <span>100</span>
                        </div>
                        <div className="flex space-x-2 text-start items-center cursor-pointer">
                            <GoComment className="text-xl" />
                            <span>60</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
