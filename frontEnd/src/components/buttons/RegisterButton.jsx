import { Button } from "flowbite-react";
import { useContext } from "react";
import { UseToggleDarkMode } from "../../App";

export default function RegisterButton() {
    const { translate } = useContext(UseToggleDarkMode)

    return (
        <Button id="register" outline gradientDuoTone="purpleToBlue" className="rounded-3xl bg-Light-backgroundPri dark:bg-Dark-backgroundPri ltr:mr-2 w-1/2">
            {translate('buttons:RegisterButton')}
        </Button>
    )
}
