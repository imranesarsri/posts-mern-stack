
export default function CategorySelect() {
    return (
        <div className="lg:basis-1/4 lg:order-last lg:rtl:mr-10 lg:ltr:ml-10 mb-5 lg:mb-0">
            <div className="">
                <form className="block bg-Light-backgroundPri dark:bg-Dark-backgroundPri px-3 py-8 border-y-2 border-Light-primary dark:border-Dark-primary rounded-sm">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-Light-text sr-only dark:text-Dark-text">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-Light-textSec dark:text-Dark-textSec" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-Light-primary rounded-lg bg-Light-backgroundPri dark:bg-Dark-backgroundPri dark:border-Dark-primary dark:placeholder-Dark-textSec dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
                        <button type="submit" className="text-Dark-text absolute end-2.5 bottom-2.5 bg-Light-primary dark:bg-Dark-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg border border-Light-primary dark:border-Dark-primary text-sm px-4 py-2 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>

                    <div className="mt-5">
                        <label htmlFor="large" className="block mb-2 text-base font-medium text-gray-900 dark:text-white">
                            Category
                        </label>
                        <select id="large" className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-Light-backgroundPri dark:bg-Dark-backgroundPri  focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>All category</option>
                            <option value="US">sport</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
    )
}
