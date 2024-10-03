export default function FormButton(params) {
    return (
        <button
            type="submit"
            className="block text-center capitalize w-full text-Dark-text bg-Light-primary dark:bg-Dark-primary dark:hover:bg-Dark-secondary hover:bg-Light-secondary focus:outline-none focus:ring font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 transition delay-100 duration-150 ease-in-out"
        >
            {params.title}
        </button>
    );
}
