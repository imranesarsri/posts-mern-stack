import { Modal } from "flowbite-react";


export default function ModalApp(params) {
    return (
        <Modal show={params.openModal} size="md" onClose={params.onCloseModal} popup>
            <Modal.Header className="bg-Light-backgroundPri dark:bg-Dark-backgroundPri" />
            <Modal.Body className="bg-Light-backgroundPri dark:bg-Dark-backgroundPri hover:scrollbar-thumb-Light-primary active:scrollbar-thumb-Light-primary scrollbar overflow-y-scroll">
                <form onSubmit={params.onSubmit} className="space-y-4">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                        {params.title}
                    </h3>
                    <div className="space-y-4">
                        {params.children}
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    )
}
