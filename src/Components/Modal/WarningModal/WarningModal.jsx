import { useEffect, useState } from "react";

import { BackgroundModal, ModalCard } from "../GlobalModalSCSS";

import warning from "../../../assets/images/png/warning.png";

export function WarningModal({ props }) {
    const [isOpen, setIsOpen] = useState(false);
    const [controller, setController] = useState(false);

    const manipulateModal = () => {
        if (isOpen) {
            setIsOpen(false);
        }
        if (!isOpen) {
            setIsOpen(true);
        }
    }

    if (!props) {
        return null
    }

    if (props && !isOpen && !controller) {
        setController(true);
        manipulateModal();
    }

    if (!isOpen) {
        return null
    }

    return (
        <>
            <BackgroundModal>
                <ModalCard>
                    <img src={warning} alt="Warning Image" />
                    <p>Ops... Trends Over!</p>
                    <button onClick={manipulateModal}>Ok</button>
                </ModalCard>
            </BackgroundModal></>
    )
}