import { Label } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
// import SelectForm from "../../formControls/SelectForm";
import InputForm from "../../formControls/InputsForm";
import TextareaForm from "../../formControls/TextareaForm";
import DefaultButton from "../../formControls/ButtonsForm";
import ModalApp from "../ModalApp";
import { UseToggleDarkMode } from "../../../App";
import { useDispatch } from "react-redux"
import { UpdateProfile } from "../../../redux/apiCalls/profileApiCall";
import { toast } from "react-toastify";

export default function ProfileUser(params) {
    const dispatch = useDispatch();
    const { translate } = useContext(UseToggleDarkMode);

    // State for form fields, initialized with empty strings
    const [userName, setUserName] = useState('');
    const [bio, setBio] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [description, setDescription] = useState('');

    // Effect to update state when the profile data changes
    useEffect(() => {
        if (params.profile) {
            setUserName(params.profile.userName || '');
            setBio(params.profile.bio || '');
            setCity(params.profile.profile?.city || '');
            setCountry(params.profile.profile?.country || '');
            setDescription(params.profile.profile?.description || '');
        }
    }, [params.profile]);

    // Close modal function
    function onCloseModal() {
        params.setOpenModal(false);
    }

    // Form submit handler for updating profile information
    const formSubmitHandler = (e) => {
        e.preventDefault();

        // Validation for userName
        if (!userName) {
            return toast.error(translate("validateMessage:userNameRequired"));
        } else if (userName.length < 3) {
            return toast.error(translate("validateMessage:userNameInvalid"));
        }

        // Dispatch profile update
        dispatch(UpdateProfile(params.profile?._id, { userName, bio, city, country, description }));

        // Optionally close modal after successful profile update
        onCloseModal();
    };


    return (
        <ModalApp
            openModal={params.openModal}
            onCloseModal={onCloseModal}
            title={translate('modalsProfilePage:titleModelProfileUser')}
            onSubmit={formSubmitHandler}
        >
            {/* Full Name */}
            <div>
                <div className="mb-1 block">
                    <Label htmlFor="userName" value={translate('modalsProfilePage:labelFullName')} />
                </div>
                <InputForm
                    id="userName"
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>

            {/* Bio */}
            <div>
                <div className="mb-1 block">
                    <Label htmlFor="Bio" value={translate('modalsProfilePage:labelOccupation')} />
                </div>

                <InputForm
                    id="Bio"
                    type="text"
                    placeholder={translate('modalsProfilePage:placeholderOccupation')}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                />
            </div>

            {/* Country */}
            <div>
                <div className="mb-1 block">
                    <Label htmlFor="country" value={translate('modalsProfilePage:labelCountry')} />
                </div>
                {/* <SelectForm
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                >
                    <option value="">Select your country</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="UK">UK</option>
                </SelectForm> */}
                <InputForm
                    id="country"
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />
            </div>

            {/* City */}
            <div>
                <div className="mb-1 block">
                    <Label htmlFor="city" value={translate('modalsProfilePage:labelCity')} />
                </div>
                {/* <SelectForm
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                >
                    <option value="">Select your city</option>
                    <option value="New York">New York</option>
                    <option value="Toronto">Toronto</option>
                    <option value="London">London</option>
                </SelectForm> */}
                <InputForm
                    id="city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </div>

            {/* Description */}
            <div>
                <div className="mb-1 block">
                    <Label htmlFor="description" value={translate('modalsProfilePage:labelDescription')} />
                </div>
                <TextareaForm
                    id="description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
            </div>

            <div className="w-full">
                <DefaultButton
                    title={translate('modalsProfilePage:button')}
                />
            </div>
        </ModalApp>
    );
}
