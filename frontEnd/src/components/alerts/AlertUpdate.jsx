import { useContext } from "react";
import Swal from "sweetalert2";
import { UseToggleDarkMode } from "../../App";

export default function AlertUpdate({ currentComment, onUpdate }) {
    const { translate } = useContext(UseToggleDarkMode); // Context for translation

    const triggerAlert = () => {
        Swal.fire({
            title: translate('alertUpdate:titleComment'),
            input: "textarea",
            inputLabel: translate('alertUpdate:inputLabel'),
            inputValue: currentComment,
            inputAttributes: {
                autocapitalize: "off",
                rows: 4,
            },
            showCancelButton: true,
            confirmButtonColor: "#1782fd",
            confirmButtonText: translate('alertUpdate:confirmButtonText'),
            cancelButtonText: translate('alertUpdate:cancelButtonText'),
            showLoaderOnConfirm: false,
            preConfirm: (newComment) => {
                if (!newComment) {
                    Swal.showValidationMessage(translate('alertUpdate:errorMessageRequird'));
                } else {
                    return newComment;
                }
            },
            allowOutsideClick: () => !Swal.isLoading(),
        }).then((result) => {
            if (result.isConfirmed && onUpdate) {
                onUpdate(result.value); // Call the update callback with the new comment
                Swal.fire({
                    title: translate('alertUpdate:resultTitle'),
                    text: translate('alertUpdate:resultText'),
                    icon: "success",
                });
            }
        });
    };

    return { triggerAlert }; // Return the triggerAlert function
}