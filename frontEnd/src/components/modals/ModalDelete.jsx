import { useContext } from "react";
import Swal from "sweetalert2";
import { UseToggleDarkMode } from "../../App";

export default function ModalDelete(params) {
    const { translate } = useContext(UseToggleDarkMode); // Context for translation

    const triggerDeleteAlert = () => {
        Swal.fire({
            title: params.action === "comment" ? translate('alertDelete:titleComment') : translate('alertDelete:titlePost'),
            text: translate('alertDelete:text'),
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#1782fd",
            cancelButtonColor: "#d33",
            cancelButtonText: translate('alertDelete:cancelButtonText'),
            confirmButtonText: translate('alertDelete:confirmButtonText')
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: translate('alertDelete:resultTitle'),
                    text: translate('alertDelete:resultText'),
                    icon: "success"
                });
            }
        });
    }

    return { triggerDeleteAlert }; // Return the function
}
