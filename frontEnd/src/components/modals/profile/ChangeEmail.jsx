import { useContext, useState } from "react";
import DefaultButton from "../../FormControls/ButtonsForm";
import ModalApp from "../ModalApp";
import { UseToggleDarkMode } from "../../../App";
import InputForm from "../../FormControls/InputsForm";

export default function ChangeEmail(params) {
    const [changeEmail, setChangeEmail] = useState("sarsri.imrane@gmail.com");

    function onCloseModal() {
        params.setOpenModal(false);
        // setChangeEmail("");
    }

    const { translate } = useContext(UseToggleDarkMode)

    return (
        <ModalApp
            openModal={params.openModal}
            onCloseModal={onCloseModal}
            title={translate('modalsProfilePage:titleModelChangeEmail')}
        >
            <div>
                <div>
                    <InputForm id="email" type="text" value={changeEmail} onChange={setChangeEmail} />
                </div>
            </div>
            <div className="w-full">
                <DefaultButton
                    title={translate('modalsProfilePage:button')}
                />
            </div>
        </ModalApp>
    );
}
