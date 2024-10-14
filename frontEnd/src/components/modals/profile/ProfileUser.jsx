import { Label, Modal } from "flowbite-react";
import { useState } from "react";
import SelectForm from "../../FormControls/SelectForm";
import InputForm from "../../FormControls/InputsForm";
import TextareaForm from "../../FormControls/TextareaForm";
import FormButton from "../../buttons/FormButton";

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

    return (
        <Modal show={params.openModal} size="md" onClose={onCloseModal} popup>
            <Modal.Header />
            <Modal.Body>
                <div className="space-y-4">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                        Profile Personalization
                    </h3>

                    {/* Full Name */}
                    <div>
                        <div className="mb-1 block">
                            <Label htmlFor="fullName" value="Full Name" />
                        </div>
                        <InputForm
                            id="fullName"
                            type="text"
                            placeholder="Enter your full name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>

                    {/* Occupation */}
                    <div>
                        <div className="mb-1 block">
                            <Label htmlFor="occupation" value="Occupation" />
                        </div>

                        <InputForm
                            id="occupation"
                            type="text"
                            placeholder="e.g., Web Developer"
                            value={occupation}
                            onChange={(e) => setOccupation(e.target.value)}
                        />
                    </div>

                    {/* Country */}
                    <div>
                        <div className="mb-1 block">
                            <Label htmlFor="country" value="Country" />
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
                            <Label htmlFor="city" value="City" />
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
                            <Label htmlFor="description" value="Description" />
                        </div>
                        <TextareaForm
                            id="description"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </div>

                    <div className="w-full">
                        {/* <Button
                            onClick={() =>
                                params.handleUpdate({ fullName, city, country, description })
                            }
                        >
                            Save Changes
                        </Button> */}
                        <FormButton
                            // onClick={() =>
                            //     params.handleUpdate({ fullName, city, country, description })
                            // }
                            title="Save Changes"
                        />
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}
