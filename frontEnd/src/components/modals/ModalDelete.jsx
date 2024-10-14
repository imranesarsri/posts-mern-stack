import { useContext } from "react";
import Swal from "sweetalert2";
import { UseToggleDarkMode } from "../../App";

export default function ModalDelete(params) {
    const { translate } = useContext(UseToggleDarkMode); // Context for translation

    const triggerDeleteAlert = () => {
        Swal.fire({
            title: params.action === "comment" ? translate('modalDelete:titleComment') : translate('modalDelete:titlePost'),
            text: translate('modalDelete:text'),
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#1782fd",
            cancelButtonColor: "#d33",
            cancelButtonText: translate('modalDelete:cancelButtonText'),
            confirmButtonText: translate('modalDelete:confirmButtonText')
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: translate('modalDelete:resultTitle'),
                    text: translate('modalDelete:resultText'),
                    icon: "success"
                });
            }
        });
    }

    return { triggerDeleteAlert }; // Return the function
}
