export default function Pagination() {
    return (
        <nav aria-label="Page navigation example">
            <ul className="flex items-center justify-center  mt-5 md:mt-10 -space-x-px h-10 text-base">
                <li>
                    <a
                        href="#"
                        className="flex items-center justify-center px-4 h-10 leading-tight text-Light-text bg-Light-backgroundSec border border-Dark-backgroundPri rounded-s-lg hover:bg-Dark-backgroundPri hover:text-Dark-text dark:bg-Dark-backgroundSec dark:border-Light-backgroundPri dark:text-Dark-text dark:hover:bg-Light-backgroundPri dark:hover:text-Light-text"
                    >
                        <span className="sr-only">Previous</span>
                        <svg
                            className="w-3 h-3 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 1 1 5l4 4"
                            />
                        </svg>
                    </a>
                </li>
                {[1, 2, 3, 4, 5].map(page => (
                    <li key={page}>
                        <a
                            href="#"
                            className="flex items-center justify-center px-4 h-10 leading-tight text-Light-text bg-Light-backgroundPri border border-Light-text hover:bg-Dark-backgroundPri hover:text-Dark-text dark:bg-Dark-backgroundPri dark:border-Dark-text dark:text-Dark-text dark:hover:bg-Light-backgroundPri dark:hover:text-Light-text"
                        >
                            {page}
                        </a>
                    </li>
                ))}



                <li>
                    <a
                        href="#"
                        className="flex items-center justify-center px-4 h-10 leading-tight text-Light-text bg-Light-backgroundSec border border-Dark-backgroundPri rounded-e-lg hover:bg-Dark-backgroundPri hover:text-Dark-text dark:bg-Dark-backgroundSec dark:border-Light-backgroundPri dark:text-Dark-text dark:hover:bg-Light-backgroundPri dark:hover:text-Light-text"
                    >
                        <span className="sr-only">Next</span>
                        <svg
                            className="w-3 h-3 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                    </a>
                </li>
            </ul>
        </nav>
    );
}
