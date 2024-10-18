export default function Main(params) {
    return (
        <div className="bg-Light-backgroundSec dark:bg-Dark-backgroundSec dark:text-white text-Light-text">
            {params.children}
        </div>
    );
}