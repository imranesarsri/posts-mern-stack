import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UseToggleDarkMode } from "../../App";
import AuthBody from "./AuthBody";
import { toast } from "react-toastify";
import { InputAuthForm } from "../../components/FormControls/InputsForm";
import DefaultButton from "../../components/FormControls/ButtonsForm";

export default function Register() {
    const { translate } = useContext(UseToggleDarkMode);
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validateEmail = (email) => {
        // Basic email format validation using regex
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        return regex.test(email);
    };

    const formSubminHandler = (e) => {
        e.preventDefault();

        if (!userName) {
            return toast.error(translate("validateMessage:userNameRequired"));
        } else if (userName.length < 3) {
            return toast.error(translate("validateMessage:userNameInvalid"));
        }

        if (!email) {
            return toast.error(translate("validateMessage:emailRequired"));
        } else if (!validateEmail(email)) {
            return toast.error(translate("validateMessage:emailInvalid"));
        }

        if (!password) {
            return toast.error(translate("validateMessage:passwordRequired"));
        } else if (password.length < 8) {
            return toast.error(translate("validateMessage:passwordInvalid"));
        }

        console.log({ userName, email, password });
    };
    return (
        <AuthBody title={translate("register:registerTitle")}>
            <form className="space-y-4 md:space-y-6" onSubmit={formSubminHandler}>
                <div>
                    <InputAuthForm
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        label={translate("register:userName")}
                    />
                </div>
                <div>
                    <InputAuthForm
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        label={translate("register:email")}
                    />
                </div>
                <div>
                    <InputAuthForm
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        label={translate("register:password")}
                    />
                </div>
                <DefaultButton title="register" />

                <p className="text-sm font-light text-Light-textSec dark:text-Dark-textSec">
                    {translate("register:haveAccount")}
                    <Link
                        to="/login"
                        className="font-medium text-Light-text hover:underline dark:text-Dark-text"
                    >
                        <span className="rtl:mr-2 ltr:ml-2">
                            {translate("buttons:loginButton")}
                        </span>
                    </Link>
                </p>
            </form>
        </AuthBody>
    );
}
