import { FloatingLabel } from "flowbite-react"

export default function InputForm(params) {
    return (
        <input
            type={params.type}
            id="base-input"
            value={params.value}
            onChange={params.onChange}
            className="bg-Light-backgroundSec border border-Light-primary text-Light-text text-sm rounded-lg focus:border-blue-500 block w-full p-2.5 dark:bg-Dark-backgroundSec dark:border-Dark-primary dark:placeholder-gray-400 dark:text-Dark-text dark:focus:border-blue-500"
        />)
}

export function InputAuthForm(params) {
    return (
        <FloatingLabel
            type={params.type}
            value={params.value}
            onChange={params.onChange}
            variant="outlined"
            label={params.label}
            sizing="md"
            className="bg-Light-backgroundSec dark:bg-Dark-backgroundSec"
        />
    )
}

export function InputCommentForm(params) {
    return (
        <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                    className="w-4 h-4 text-Light-textSec dark:text-Dark-textSec"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                </svg>
            </div>
            <FloatingLabel
                type={params.type}
                value={params.value}
                onChange={params.onChange}
                variant="outlined"
                label={params.label}
                sizing="md"
                className="inputAddComment bg-Light-backgroundSec dark:bg-Dark-backgroundSec"
            />
            <button
                type="submit"
                className="text-Dark-text bg-Light-primary dark:bg-Dark-primary dark:hover:bg-Dark-secondary hover:bg-Light-secondary focus:outline-none focus:ring  capitalize absolute end-2.5 bottom-2.5 focus:ring-blue-300 font-medium rounded-lg border border-Light-primary dark:border-Dark-primary text-sm px-4 py-1 dark:focus:ring-blue-800  transition delay-100 duration-150 ease-in-out"
            >
                {params.buttonText}
            </button>
        </div>
    )
}

export function InputSearchForm(params) {
    return (
        <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                    className="w-4 h-4 text-Light-textSec dark:text-Dark-textSec"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                </svg>
            </div>
            <input
                type={params.type}
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-Light-primary rounded-lg bg-Light-backgroundPri dark:bg-Dark-backgroundPri dark:border-Dark-primary dark:placeholder-Dark-textSec dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={`${params.placeholder} ...`}
                required
            />
            <button
                type="submit"
                className="text-Dark-text capitalize absolute end-2.5 bottom-2.5 bg-Light-primary dark:bg-Dark-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg border border-Light-primary dark:border-Dark-primary text-sm px-4 py-2 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                {params.buttonText}
            </button>
        </div>)
}
