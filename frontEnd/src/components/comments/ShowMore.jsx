import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { UseToggleDarkMode } from "../../main";

export default function ShowMore(params) {
    const location = useLocation();
    const { translate } = useContext(UseToggleDarkMode)

    return (
        <div>
            {location.pathname !== `/posts/details/${params.postId}` && (
                <Link to={`/posts/details/${params.postId}`}>
                    <span>{translate('comment:showMore')}</span>
                </Link>
            )}
        </div>
    )
}
