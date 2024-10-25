import { useContext, useEffect, useState } from "react";
import DefaultButton from "../../formControls/ButtonsForm";
import ModalApp from "../ModalApp";
import { UseToggleDarkMode } from "../../../App";
import InputFileForm from "../../formControls/InputFileForm";
import { useDispatch } from "react-redux"
import { UploadBackgroundProfileImage } from "../../../redux/apiCalls/profileApiCall";
import { toast } from "react-toastify";


export default function BackgroundImage(params) {

    // Hooks and State
    const { translate } = useContext(UseToggleDarkMode)
    const [backgroundProfileImage, setBackgroundProfileImage] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        if (params.profile) {
            setBackgroundProfileImage(params.profile?.profile?.backgroundImage?.url || '/images/sections/profile/profileBackground.svg');
        }
    }, [params.profile]);

    function onCloseModal() {
        params.setOpenModal(false);
    }

    // Form Submit Handler
    const formSubmitHandler = (e) => {
        e.preventDefault();

        if (!backgroundProfileImage) {
            return toast.error("Please select a background profile image.");
        }

        const formData = new FormData()
        formData.append('image', backgroundProfileImage)
        dispatch(UploadBackgroundProfileImage(formData))

        // Optionally close the modal after successful upload
        // onCloseModal();
    }


    return (
        <ModalApp
            openModal={params.openModal}
            onCloseModal={onCloseModal}
            title={translate('modalsProfilePage:titleModelBackgroundImage')}
            onSubmit={formSubmitHandler}
        >
            {/* Image profile */}
            <div>
                <div className="mb-2 ">
                    <img
                        className="block"
                        src={
                            backgroundProfileImage && (backgroundProfileImage instanceof Blob || backgroundProfileImage instanceof File)
                                ? URL.createObjectURL(backgroundProfileImage)
                                : typeof backgroundProfileImage === 'string'
                                    ? backgroundProfileImage
                                    : ''
                        }
                        alt="Profile"
                    />
                </div>
                <div>
                    <InputFileForm id="profileImage" onChange={(e) => setBackgroundProfileImage(e.target.files[0])} />
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
