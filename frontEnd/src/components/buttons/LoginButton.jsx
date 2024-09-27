import { Button } from "flowbite-react";
import { useContext } from "react";
import { UseToggleDarkMode } from "../../App";

export default function LoginButton() {
    const { translate } = useContext(UseToggleDarkMode)

    return (
        <Button className="rounded-3xl w-1/2 rtl:mr-2 bg-gradient-to-r from-GradientsLight-light to-GradientsLight-dark dark:from-GradientsDark-light dark:to-GradientsDark-dark">
            {translate('buttons:LoginButton')}
        </Button>
    )
}
