import { useContext } from "react"
import { UseToggleDarkMode } from "../../App"
import LoginButton from "../buttons/LoginButton"
import RegisterButton from "../buttons/RegisterButton"


export default function Hero() {

    const { translate } = useContext(UseToggleDarkMode)

    return (
        <sectoin className="grid grid-cols-3 ">
            <div className="p-5 lg:p-14 flex flex-col space-y-10 sm:space-y-16 col-span-3 sm:col-span-2 bg-Light-backgroundPri dark:bg-Dark-backgroundPri text-Light-text dark:text-Dark-text">
                <div className="ltr:mr-0 ltr:sm:mr-5 ltr:md:mr-10 ltr:lg:mr-20  rtl:ml-0 rtl:sm:ml-5 rtl:md:ml-10 rtl:lg:ml-20">
                    <h1 className="mb-10 text-xl tracking-tight sm:text-2xl md:text-4xl lg:text-5xl font-bold capitalize">
                        <span className="block mb-2">{translate('hero:titlePartOne')}</span>
                        <span className=" text-Light-primary dark:text-Dark-primary">
                            {translate('hero:titlePartTwo')}
                        </span>
                    </h1>
                    <p className="text-justify text-sm md:text-md lg:text-xl text-Light-textSec dark:text-Dark-textSec">
                        {translate('hero:description')}
                    </p>
                </div>

                <div className="flex justify-between ltr:space-x-5 md:w-2/3 lg:w-1/2">
                    <div className="w-1/2 ">
                        <LoginButton />
                    </div>
                    <div className="w-1/2 rtl:mr-5">
                        <RegisterButton />
                    </div>
                </div>

                <div className="flex space-x-10 md:w-2/3 lg:w-1/2">
                    <div className="rtl:ml-10">
                        <p className="text-2xl md:text-3xl font-semibold">{translate('hero:clientNumber')}</p>
                        <p className="text-lg font-medium text-Light-textSec dark:text-Dark-textSec mt-2">{translate('hero:client')}</p>
                    </div>

                    <div className="ltr:border-l-2 rtl:border-r-2 border-Light-textSec dark:border-Dark-textSec ltr:pl-10 rtl:pr-10">
                        <p className="text-2xl md:text-3xl font-semibold">{translate('hero:postsNumber')}</p>
                        <p className="text-lg font-medium text-Light-textSec dark:text-Dark-textSec mt-2">{translate('hero:posts')}</p>
                    </div>
                </div>
            </div>
            <div className="hidden relative h-screen sm:flex items-center ltr:bg-hero-light-ltr ltr:dark:bg-hero-dark-ltr rtl:bg-hero-light-rtl rtl:dark:bg-hero-dark-rtl">
                <div className="absolute inset-0 ltr:-left-5 ltr:md:-left-10 ltr:lg:-left-20 rtl:lg:-right-20 rtl:-right-5 rtl:md:-right-10 w-4/5 flex items-center justify-center">
                    <img className="" src="images/sections/hero.svg" alt="hero image" />
                </div>
            </div>

        </sectoin>
    )
}
