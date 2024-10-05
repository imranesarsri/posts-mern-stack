import { FloatingLabel } from "flowbite-react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UseToggleDarkMode } from "../../App";
import AuthBody from "./AuthBody";
import FormButton from "../../components/buttons/FormButton";
import { toast } from 'react-toastify';

export default function Login() {
    const { translate } = useContext(UseToggleDarkMode);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const validateEmail = (email) => {
        // Basic email format validation using regex
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        return regex.test(email);
    };

    const formSubminHandler = (e) => {
        e.preventDefault()

        if (!email) {
            return toast.error(translate("validateMessage:emailRequired"))
        } else if (!validateEmail(email)) {
            return toast.error(translate("validateMessage:emailInvalid"))
        }

        if (!password) {
            return toast.error(translate("validateMessage:passwordRequired"))
        } else if (password.length < 8) {
            return toast.error(translate("validateMessage:passwordInvalid"))
        }

        console.log({ email, password })
    }

    return (
        <AuthBody title={translate("login:loginTitle")}>
            <form className="space-y-4 md:space-y-6" onSubmit={formSubminHandler}>
                <div>
                    <FloatingLabel
                        // type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        variant="outlined"
                        label={translate("login:email")}
                        sizing="md"
                        className="bg-Light-backgroundSec dark:bg-Dark-backgroundSec"
                    />
                </div>
                <div>
                    <FloatingLabel
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        variant="outlined"
                        type="password"
                        label={translate("login:password")}
                        sizing="md"
                        className="bg-Light-backgroundSec dark:bg-Dark-backgroundSec"
                    />
                </div>
                <FormButton title="login" />
                <p className="normal-case text-sm font-light text-Light-textSec dark:text-Dark-textSec">
                    {translate("login:haveAccount")}
                    <Link
                        to="/register"
                        className="font-medium text-Light-text hover:underline dark:text-Dark-text"
                    >
                        <span className="rtl:mr-2 ltr:ml-2">
                            {translate("buttons:registerButton")}
                        </span>
                    </Link>
                </p>
            </form>
        </AuthBody>
    );
}
