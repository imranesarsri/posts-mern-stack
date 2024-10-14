import {
    Button,
    Label,
    Modal,
    TextInput,
    Select,
    Textarea,
    FileInput,
} from "flowbite-react";
import { useState } from "react";

export default function ProfileUser(params) {
    const [profileImage, setProfileImage] = useState("/images/user-avatar.png");
    const [fullName, setFullName] = useState("");
    const [occupation, setOccupation] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [description, setDescription] = useState("");

    // Handle image upload
    const handleImageUpload = (event) => {
        const file = event.target.files[0]; // Get the selected file
        if (file) {
            setProfileImage(file); // Set the profile image to the uploaded file
        }
    };

    function onCloseModal() {
        params.setOpenModal(false);
        setFullName("");
        setCity("");
        setCountry("");
        setDescription("");
        setProfileImage("/images/user-avatar.png"); // Reset profile image on close
    }

    return (
        <Modal show={params.openModal} size="md" onClose={onCloseModal} popup>
            <Modal.Header />
            <Modal.Body>
                <div className="space-y-6">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                        Profile Personalization
                    </h3>

                    {/* Image profile */}
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="profileImage" value="Image profile" />
                        </div>
                        <div className="flex justify-center mb-2 items-center rounded-lg">
                            <img
                                className="block w-32"
                                src={typeof profileImage === 'object' ? URL.createObjectURL(profileImage) : profileImage}
                                alt="Profile"
                            />
                        </div>
                        <FileInput
                            onChange={handleImageUpload} // Remove value prop
                            id="profileImage"
                        />
                    </div>

                    {/* Full Name */}
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="fullName" value="Full Name" />
                        </div>
                        <TextInput
                            id="fullName"
                            placeholder="Enter your full name"
                            value={fullName}
                            onChange={(event) => setFullName(event.target.value)}
                            required
                        />
                    </div>

                    {/* Occupation */}
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="occupation" value="Occupation" />
                        </div>
                        <TextInput
                            id="occupation"
                            placeholder="e.g., Web Developer"
                            value={occupation}
                            onChange={(event) => setOccupation(event.target.value)}
                            required
                        />
                    </div>

                    {/* Country */}
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="country" value="Country" />
                        </div>
                        <Select
                            id="country"
                            value={country}
                            onChange={(event) => setCountry(event.target.value)}
                            required
                        >
                            <option value="">Select your country</option>
                            <option value="USA">USA</option>
                            <option value="Canada">Canada</option>
                            <option value="UK">UK</option>
                            {/* Add more options as needed */}
                        </Select>
                    </div>

                    {/* City */}
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="city" value="City" />
                        </div>
                        <Select
                            id="city"
                            value={city}
                            onChange={(event) => setCity(event.target.value)}
                            required
                        >
                            <option value="">Select your city</option>
                            <option value="New York">New York</option>
                            <option value="Toronto">Toronto</option>
                            <option value="London">London</option>
                            {/* Add more options as needed */}
                        </Select>
                    </div>

                    {/* Description */}
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="description" value="Description" />
                        </div>
                        <Textarea
                            id="description"
                            placeholder="Tell us more about your profession or specialty"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                            rows={4}
                            required
                        />
                    </div>

                    <div className="w-full">
                        <Button
                            onClick={() =>
                                params.handleUpdate({ fullName, city, country, description })
                            }
                        >
                            Save Changes
                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}
