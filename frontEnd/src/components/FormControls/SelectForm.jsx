
export default function SelectForm(params) {
    return (
        <select
            id={params.id}
            value={params.value}
            onChange={params.onChange}
            className="bg-Light-backgroundSec border border-Light-primary text-Light-text text-sm rounded-lg  focus:border-Light-primary block w-full p-2.5 dark:bg-Dark-backgroundSec dark:border-Dark-primary dark:placeholder-gray-400 dark:text-Dark-text dark:focus:border-Dark-primary"
        >
            {params.children}
        </select>
    )
}
