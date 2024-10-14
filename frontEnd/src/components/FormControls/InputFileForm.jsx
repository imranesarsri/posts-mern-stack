
export default function InputFileForm(params) {
    return (
        <input
            id={params.id}
            value={params.value}
            onChange={params.onChange}
            className="block w-full text-sm text-Light-text border border-Light-primary rounded-lg cursor-pointer bg-Light-backgroundSec dark:text-Dark-text focus:outline-none dark:bg-Dark-backgroundSec dark:border-Dark-primary dark:placeholder-gray-400"
            aria-describedby="user_avatar_help"
            type="file"
        />)
}
