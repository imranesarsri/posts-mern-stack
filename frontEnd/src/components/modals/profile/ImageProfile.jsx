import { useContext, useState } from "react";
import DefaultButton from "../../formControls/ButtonsForm";
import ModalApp from "../ModalApp";
import { UseToggleDarkMode } from "../../../main";
import InputFileForm from "../../formControls/InputFileForm";
import { useDispatch } from "react-redux"
import { UploadProfileImage } from "../../../redux/apiCalls/profileApiCall";
export default function ImageProfile(params) {
    const [profileImage, setProfileImage] = useState("/images/user-avatar.png");
    const dispatch = useDispatch()

    function onCloseModal() {
        params.setOpenModal(false);
    }

    const { translate } = useContext(UseToggleDarkMode)

    function handlerImageProfile() {
        const formData = new FormData()
        formData.append('image', profileImage)
        dispatch(UploadProfileImage(formData))
    }

    return (
        <ModalApp
            openModal={params.openModal}
            onCloseModal={onCloseModal}
            title={translate('modalsProfilePage:titleModelImageProfile')}
        >
            {/* Image profile */}
            <div>
                <div className="mb-2 flex justify-center" >
                    <img
                        className="block w-36 h-36 rounded-full object-cover border-2 border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-300"
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
                    onClick={handlerImageProfile}
                    title={translate('modalsProfilePage:button')}
                />
            </div>
        </ModalApp>
    );
}
