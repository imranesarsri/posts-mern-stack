import DropdownForm from "../FormControls/DropdownForm";

export default function Comment() {
    return (
        <div className="mt-3  bg-Light-backgroundSec dark:bg-Dark-backgroundSec p-3 rounded-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img className="w-3 h-3 lg:w-6 lg:h-6 rounded" src="/images/user-avatar.png" alt="Rounded avatar" />
                    <h2 className="ltr:ml-2 rtl:mr-2">Imrane Sarsri</h2>
                </div>
                <div>
                    <DropdownForm actionType="comment" />
                </div>
            </div>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit modi officiis ab aut ipsa nihil est consequatur molestias? Blanditiis commodi,
            </p>
        </div>)
}
