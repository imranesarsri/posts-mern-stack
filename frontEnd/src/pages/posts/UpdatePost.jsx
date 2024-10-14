import { useContext, useState, useEffect } from "react";
import { UseToggleDarkMode } from "../../App";
import FormButton from "../../components/buttons/FormButton";
import { toast } from 'react-toastify';
import { useLocation } from "react-router-dom";
import InputForm from "../../components/FormControls/InputsForm";
import SelectForm from "../../components/FormControls/SelectForm";


export default function UpdatePost() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const { translate } = useContext(UseToggleDarkMode)

    const location = useLocation();
    const { post } = location.state || {};

    const [title, setTitle] = useState(post.title)
    const [category, setCategory] = useState(post.category)
    const [description, setDescription] = useState(post.description)
    const [file, setFile] = useState(post.image)


    const formSubminHandler = (e) => {
        // reload page
        e.preventDefault()

        if (title.trim().length < 2 || title.trim().length > 200) {
            return toast.error(translate('validateMessage:titleInvalid'));
        }
        if (description.trim().length < 5 || description.trim().length > 5000) {
            return toast.error(translate('validateMessage:descriptionInvalid'))
        }
        if (!category.trim()) {
            return toast.error(translate('validateMessage:categoryRequired'))
        }
        if (!file) {
            return toast.error(translate('validateMessage:fileRequired'))
        }

        const formData = new FormData()
        formData.append("image", file)
        formData.append("title", title)
        formData.append("description", description)
        formData.append("category", category)

        //TODO - send form data to server

        console.log({ title, category, file, description });
        // Submit your form or send data to the backend

    }
    return (
        <div>
            <form onSubmit={formSubminHandler} className="block mx-5 py-5 md:py-8  sm:mx-10 md:mx-auto md:w-3/4">
                <div className="bg-Light-backgroundPri dark:bg-Dark-backgroundPri p-5 lg:p-10 rounded-md">
                    <div className="mb-5">
                        <h2 className="text-2xl font-bold capitalize text-Light-text dark:text-Dark-text">
                            {translate('postUpdate:title')}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
                        <div>
                            <div className="mb-5">
                                <label
                                    htmlFor="title"
                                    className="capitalize block mb-2 text-sm font-medium text-Light-text dark:text-Dark-text"
                                >
                                    {translate('postUpdate:titleInput')}
                                </label>
                                <InputForm id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                            </div>

                            <div className="mb-5">
                                <label
                                    htmlFor="category"
                                    className="capitalize block mb-2 text-sm font-medium text-Light-text dark:text-Dark-text"
                                >
                                    {translate('postUpdate:categoryInput')}
                                </label>

                                <SelectForm id="category" value={category} onChange={(e) => setCategory(e.target.value)} >
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>France</option>
                                    <option>Germany</option>
                                </SelectForm>
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="message"
                                    className="capitalize block mb-2 text-sm font-medium text-Light-text dark:text-Dark-text"
                                >
                                    {translate('postUpdate:descriptionInput')}
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="block p-2.5 w-full text-sm text-Light-text bg-Light-backgroundSec rounded-lg border border-Light-primary focus:border-Light-primary dark:bg-Dark-backgroundSec dark:border-Dark-primary dark:placeholder-gray-400 dark:text-Dark-text dark:focus:border-Dark-primary"
                                ></textarea>

                            </div>
                        </div>
                        <div className="">
                            <div className="mb-3">
                                <label
                                    className="capitalize block mb-2 text-sm font-medium text-Light-text dark:text-Dark-text"
                                    htmlFor="user_avatar"
                                >
                                    {translate('postUpdate:uploadImageInput')}
                                </label>
                                <img
                                    className="w-full"
                                    src={file && file instanceof Blob ? URL.createObjectURL(file) : post.image} alt=""
                                />
                            </div>
                            <div className="mb-5">
                                <input
                                    onChange={(e) => setFile(e.target.files[0])}
                                    className="block w-full text-sm text-Light-text border border-Light-primary rounded-lg cursor-pointer bg-Light-backgroundSec dark:text-Dark-text focus:outline-none dark:bg-Dark-backgroundSec dark:border-Dark-primary dark:placeholder-gray-400"
                                    aria-describedby="user_avatar_help"
                                    id="user_avatar"
                                    type="file"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mb-5">
                        <FormButton title={translate('postUpdate:button')} />
                    </div>
                </div>
            </form>
        </div>
    );
}
