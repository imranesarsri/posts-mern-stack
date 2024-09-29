import { useContext } from "react"
import { UseToggleDarkMode } from "../../App"
import LoginButton from "../buttons/LoginButton"
import RegisterButton from "../buttons/RegisterButton"


export default function Hero() {

    const { translate } = useContext(UseToggleDarkMode)

    return (
        <sectoin className="grid grid-cols-3 ">
            <div className="col-span-3 sm:col-span-2 bg-Light-backgroundPri dark:bg-Dark-backgroundPri text-Light-text dark:text-Dark-text lg:p-14">
                <div className="mb-10 lg:w-4/5 mr-20 lg:mr-0">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold capitalize mb-10 leading-tight">
                        {translate('hero:titlePartOne')}
                        <span className=" text-Light-primary dark:text-Dark-primary">
                            {translate('hero:titlePartTwo')}
                        </span>
                    </h1>
                    <p className="text-justify text-sm md:text-md lg:text-xl text-Light-textSec dark:text-Dark-textSec">
                        {translate('hero:description')}
                    </p>
                </div>

                <div className="flex justify-between space-x-5 md:w-2/3 lg:w-1/2 mb-20">
                    <div className="w-1/2">
                        <LoginButton />
                    </div>
                    <div className="w-1/2">
                        <RegisterButton />
                    </div>
                </div>

                <div className="flex space-x-10 md:w-2/3 lg:w-1/2">
                    <div>
                        <p className="text-3xl font-semibold">500K+</p>
                        <p className="text-lg font-medium text-Light-textSec dark:text-Dark-textSec mt-2">Client</p>
                    </div>

                    <div className="border-l-2 border-Light-textSec dark:border-Dark-textSec pl-10">
                        <p className="text-3xl font-semibold">500K+</p>
                        <p className="text-lg font-medium text-Light-textSec dark:text-Dark-textSec mt-2">Client</p>
                    </div>
                </div>
            </div>
            <div className="hidden relative bg-gradient-to-r from-Light-primary to-Light-secondary h-screen sm:flex items-center">
                <div className="absolute inset-0 -left-5 md:-left-10 lg:-left-20 w-4/5 flex items-center justify-center">
                    <img className=" " src="images/sections/hero.svg" alt="hero image" />
                </div>
            </div>

        </sectoin>
    )
}
