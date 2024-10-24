import { useContext, useEffect, useState } from "react";
import DefaultButton from "../../formControls/ButtonsForm";
import ModalApp from "../ModalApp";
import { UseToggleDarkMode } from "../../../App";
import InputFileForm from "../../formControls/InputFileForm";
import { useDispatch } from "react-redux"
import { UploadProfileImage } from "../../../redux/apiCalls/profileApiCall";


export default function ImageProfile(params) {

    // Hooks and State
    const { translate } = useContext(UseToggleDarkMode);
    const [profileImage, setProfileImage] = useState(""); // Default is empty
    const dispatch = useDispatch();

    // UseEffect to update state when params.profile changes
    useEffect(() => {
        if (params.profile) {
            setProfileImage(params.profile?.profilePhoto?.url || '/images/user-avatar.png');
        }
    }, [params.profile]);

    // Close Modal Function
    function onCloseModal() {
        params.setOpenModal(false);
    }

    // Form Submit Handler
    const formSubmitHandler = (e) => {
        e.preventDefault();

        if (!profileImage) {
            return alert("Please select a profile image.");
        }

        const formData = new FormData()
        formData.append('image', profileImage)
        dispatch(UploadProfileImage(formData))

        // Optionally close the modal after successful upload
        // onCloseModal();
    }


    return (
        <ModalApp
            openModal={params.openModal}
            onCloseModal={onCloseModal}
            title={translate('modalsProfilePage:titleModelImageProfile')}
            onSubmit={formSubmitHandler}
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
                    title={translate('modalsProfilePage:button')}
                />
            </div>
        </ModalApp>
    );
}
