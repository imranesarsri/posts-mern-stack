import { FloatingLabel, useThemeMode } from "flowbite-react";
import SubminButton from "../../components/buttons/SubminButton";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UseToggleDarkMode } from "../../App";

export default function Login() {
    const { mode } = useThemeMode();
    const { translate } = useContext(UseToggleDarkMode)
    return (

        <section className="bg-Light-backgroundSec dark:bg-Dark-backgroundSec">
            <div className="flex flex-col items-center justify-center px-4 py-8 mx-auto md:h-screen lg:py-0">
                <Link
                    to="/"
                    className="flex flex-col items-center text-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                >
                    <img src={mode === 'dark' ? ('images/logos/logo-dark.svg') : ('images/logos/logo-light.svg')} className=" h-9 sm:h-12" alt="Flowbite React Logo" />
                    <p className="normal-case">
                        {translate('translation:appName')}
                    </p>
                </Link>
                <div className="w-full bg-Light-backgroundPri dark:bg-Dark-backgroundPri border border-Light-primary dark:border-Dark-primary rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="normal-case text-xl font-semibold leading-tight tracking-tight text-Light-text dark:text-Dark-text md:text-xl">
                            {translate('login:loginTitle')}
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="">
                            <div>
                                <FloatingLabel variant="outlined" label={translate('login:email')} sizing="md" className="bg-Light-backgroundSec dark:bg-Dark-backgroundSec" />
                            </div>
                            <div>
                                <FloatingLabel variant="outlined" type="password" label={translate('login:password')} sizing="md" className="bg-Light-backgroundSec dark:bg-Dark-backgroundSec" />
                            </div>
                            <SubminButton pathname="login" />
                            <p className="normal-case text-sm font-light text-Light-textSec dark:text-Dark-textSec">
                                {translate('login:haveAccount')}
                                <Link
                                    to='/register'
                                    className="font-medium text-Light-text hover:underline dark:text-Dark-text"
                                >
                                    <span className="rtl:mr-2 ltr:ml-2">
                                        {translate('buttons:registerButton')}
                                    </span>
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
