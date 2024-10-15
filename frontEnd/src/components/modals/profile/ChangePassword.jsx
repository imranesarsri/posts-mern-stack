import { useContext, useState } from "react";
import ModalApp from "../ModalApp";
import { UseToggleDarkMode } from "../../../App";
import DefaultButton from "../../FormControls/ButtonsForm";
import InputForm from "../../FormControls/InputsForm";
import { Label } from "flowbite-react";

export default function ChangePassword(params) {
    const [currentEmail, setCurrentEmail] = useState("");
    const [newEmail, setNewEmail] = useState("");
    // Current Email New Email
    function onCloseModal() {
        params.setOpenModal(false);
        // setChangePassword("");
    }

    const { translate } = useContext(UseToggleDarkMode)

    return (
        <ModalApp
            openModal={params.openModal}
            onCloseModal={onCloseModal}
            title={translate('modalsProfilePage:titleModelChangeEmail')}
        >
            <div>
                <div className="space-y-4">
                    <div>
                        <div className="mb-1 block">
                            <Label htmlFor="occupation" value={translate('modalsProfilePage:labelCurrentPassword')} />
                        </div>
                        <div>
                            <InputForm id="password" type="text" value={currentEmail} onChange={setCurrentEmail} />
                        </div>
                    </div>
                    <div>
                        <div className="mb-1 block">
                            <Label htmlFor="occupation" value={translate('modalsProfilePage:labelNewPassword')} />
                        </div>
                        <div>
                            <InputForm id="password" type="text" value={newEmail} onChange={setNewEmail} />
                        </div>
                    </div>
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
