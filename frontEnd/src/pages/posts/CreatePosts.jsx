import { useContext, useState } from "react";
import { UseToggleDarkMode } from "../../App";
import FormButton from "../../components/buttons/FormButton";

export default function CreatePosts() {
    const { translate } = useContext(UseToggleDarkMode)

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [file, setFile] = useState(null)
    const [errors, setErrors] = useState({}); // Track validation errors

    const validateForm = () => {
        const newErrors = {};

        if (title.trim().length < 2 || title.trim().length > 200) {
            newErrors.title = "Title must be between 2 and 200 characters.";
        }

        if (description.trim().length < 5 || description.trim().length > 5000) {
            newErrors.description = "Description must be between 5 and 5000 characters.";
        }

        if (!category.trim()) {
            newErrors.category = "Category is required.";
        }

        if (!file) {
            newErrors.file = "upload image is required.";
        }

        return newErrors;
    };


    const formSubminHandler = (e) => {
        // reload page
        e.preventDefault()

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors); // Set errors if validation fails
        } else {
            setErrors({}); // Clear errors if validation passes
            console.log({ title, category, file, description });
            // Submit your form or send data to the backend
        }
    }
    return (
        <div className="">
            <form className="mx-5 py-5 md:py-8  sm:mx-10 md:mx-auto md:w-3/4" onSubmit={formSubminHandler}>
                <div className="mb-5">
                    <h2 className="text-2xl font-bold capitalize text-Light-text dark:text-Dark-text">
                        {translate('postCreate:title')}
                    </h2>
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="base-input"
                        className="capitalize block mb-2 text-sm font-medium text-Light-text dark:text-Dark-text"
                    >
                        {translate('postCreate:titleInput')}
                    </label>
                    <input
                        type="text"
                        id="base-input"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="bg-Light-backgroundPri border border-Light-primary text-Light-text text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-Dark-backgroundPri dark:border-Dark-primary dark:placeholder-gray-400 dark:text-Dark-text dark:focus:border-blue-500"
                    />
                    {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="category"
                        className="capitalize block mb-2 text-sm font-medium text-Light-text dark:text-Dark-text"
                    >
                        {translate('postCreate:categoryInput')}
                    </label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="bg-Light-backgroundPri border border-Light-primary text-Light-text text-sm rounded-lg  focus:border-Light-primary block w-full p-2.5 dark:bg-Dark-backgroundPri dark:border-Dark-primary dark:placeholder-gray-400 dark:text-Dark-text dark:focus:border-Dark-primary"
                    >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>France</option>
                        <option>Germany</option>
                    </select>
                    {errors.category && <p style={{ color: 'red' }}>{errors.category}</p>}
                </div>

                <div className="mb-5">
                    <label
                        className="capitalize block mb-2 text-sm font-medium text-Light-text dark:text-Dark-text"
                        htmlFor="user_avatar"
                    >
                        {translate('postCreate:uploadImageInput')}
                    </label>
                    <input
                        onChange={(e) => setFile(e.target.files[0])}
                        className="block w-full text-sm text-Light-text border border-Light-primary rounded-lg cursor-pointer bg-Light-backgroundPri dark:text-Dark-text focus:outline-none dark:bg-Dark-backgroundPri dark:border-Dark-primary dark:placeholder-gray-400"
                        aria-describedby="user_avatar_help"
                        id="user_avatar"
                        type="file"
                    />
                    {errors.file && <p style={{ color: 'red' }}>{errors.file}</p>}

                </div>

                <div className="mb-5">
                    <label
                        htmlFor="message"
                        className="capitalize block mb-2 text-sm font-medium text-Light-text dark:text-Dark-text"
                    >
                        {translate('postCreate:descriptionInput')}
                    </label>
                    <textarea
                        id="message"
                        rows="4"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="block p-2.5 w-full text-sm text-Light-text bg-Light-backgroundPri rounded-lg border border-Light-primary focus:border-Light-primary dark:bg-Dark-backgroundPri dark:border-Dark-primary dark:placeholder-gray-400 dark:text-Dark-text dark:focus:border-Dark-primary"
                        placeholder={`${translate('postCreate:descriptionInput')} ...`}
                    ></textarea>
                    {errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}

                </div>
                <div className="mb-5">
                    <FormButton title="Create" />
                </div>
            </form>
        </div>
    );
}
