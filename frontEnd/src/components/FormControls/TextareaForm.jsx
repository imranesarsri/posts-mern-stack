
export default function TextareaForm(params) {
    return (
        <textarea
            id={params.id}
            rows={params.rows ? params.rows : 4}
            value={params.value}
            onChange={params.onChange}
            placeholder={params.placeholder}
            className="block p-2.5 w-full text-sm text-Light-text bg-Light-backgroundSec rounded-lg border border-Light-primary focus:border-Light-primary dark:bg-Dark-backgroundSec dark:border-Dark-primary dark:placeholder-gray-400 dark:text-Dark-text dark:focus:border-Dark-primary"
        ></textarea>
    )
}
