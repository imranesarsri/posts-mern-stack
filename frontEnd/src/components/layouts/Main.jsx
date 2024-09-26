export default function Main(params) {
    // ! deltete this class 'h-screen'
    return (
        <div className="bg-Light-backgroundSec dark:bg-Dark-backgroundSec dark:text-white text-Light-text h-screen">
            {params.children}
        </div>
    );
}