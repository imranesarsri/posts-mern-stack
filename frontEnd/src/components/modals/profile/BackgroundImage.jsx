import { Label } from "flowbite-react";
import { useContext, useState } from "react";
import DefaultButton from "../../FormControls/ButtonsForm";
import ModalApp from "../ModalApp";
import { UseToggleDarkMode } from "../../../App";
import InputFileForm from "../../FormControls/InputFileForm";

export default function BackgroundImage(params) {

    const [profileImage, setProfileImage] = useState("/images/sections/profile/profileBackground.svg");

    function onCloseModal() {
        params.setOpenModal(false);
        // setProfileImage("");
    }

    const { translate } = useContext(UseToggleDarkMode)


    return (
        <ModalApp
            openModal={params.openModal}
            onCloseModal={onCloseModal}
            title={translate('modalsProfilePage:titleModelBackgroundImage')}
        >
            {/* Image profile */}
            <div>
                <div className="mb-1 block">
                    <Label htmlFor="profileImage" value={translate('modalsProfilePage:labelBackgroundImage')} />
                </div>
                <div className="mb-2 flex justify-center" >
                    <img
                        className="block w-full h-36"
                        src={
                            profileImage && (profileImage instanceof Blob || profileImage instanceof File)
                                ? URL.createObjectURL(profileImage)
                                : typeof profileImage === 'string'
                                    ? profileImage
                                    : ''
                        }
                        alt="Profile"
                    />

                </div>
                <InputFileForm id="profileImage" onChange={(e) => setProfileImage(e.target.files[0])} />
            </div>
            <div className="w-full">
                <DefaultButton
                    title={translate('modalsProfilePage:button')}
                />
            </div>
        </ModalApp>
    );
}
