import { Label } from "flowbite-react";
import { useContext, useState } from "react";
import SelectForm from "../../formControls/SelectForm";
import InputForm from "../../formControls/InputsForm";
import TextareaForm from "../../formControls/TextareaForm";
import DefaultButton from "../../formControls/ButtonsForm";
import ModalApp from "../ModalApp";
import { UseToggleDarkMode } from "../../../main";

export default function ProfileUser(params) {

    const [fullName, setFullName] = useState("");
    const [occupation, setOccupation] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [description, setDescription] = useState("");

    function onCloseModal() {
        params.setOpenModal(false);
        setFullName("");
        setCity("");
        setCountry("");
        setDescription("");
    }

    const { translate } = useContext(UseToggleDarkMode)


    return (
        <ModalApp
            openModal={params.openModal}
            onCloseModal={onCloseModal}
            title={translate('modalsProfilePage:titleModelProfileUser')}
        >
            {/* Full Name */}
            <div>
                <div className="mb-1 block">
                    <Label htmlFor="fullName" value={translate('modalsProfilePage:labelFullName')} />
                </div>
                <InputForm
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
            </div>

            {/* Occupation */}
            <div>
                <div className="mb-1 block">
                    <Label htmlFor="occupation" value={translate('modalsProfilePage:labelOccupation')} />
                </div>

                <InputForm
                    id="occupation"
                    type="text"
                    placeholder={translate('modalsProfilePage:placeholderOccupation')}
                    value={occupation}
                    onChange={(e) => setOccupation(e.target.value)}
                />
            </div>

            {/* Country */}
            <div>
                <div className="mb-1 block">
                    <Label htmlFor="country" value={translate('modalsProfilePage:labelCountry')} />
                </div>
                <SelectForm
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                >
                    <option value="">Select your country</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="UK">UK</option>
                </SelectForm>
            </div>

            {/* City */}
            <div>
                <div className="mb-1 block">
                    <Label htmlFor="city" value={translate('modalsProfilePage:labelCity')} />
                </div>
                <SelectForm
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                >
                    <option value="">Select your city</option>
                    <option value="New York">New York</option>
                    <option value="Toronto">Toronto</option>
                    <option value="London">London</option>
                </SelectForm>
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
