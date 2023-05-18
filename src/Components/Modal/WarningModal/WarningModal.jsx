import { useEffect, useState } from "react";

import { BackgroundModal, ModalCard } from "../GlobalModalSCSS";

import warning from "../../../assets/images/png/warning.png";

export function WarningModal({ props }) {
    const [activate, setActivate] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const manipulateModal = () => {
        if (isOpen) {
            setIsOpen(false);
        }

        if (!isOpen) {
            setIsOpen(true);
            setActivate(true);
        }
    }

    useEffect(() => {
        if (props.modalCall !== 0 && !isOpen && !activate) {
            manipulateModal();
        }

        if (props.modalCall !== 0 && activate) {
            manipulateModal();
        }
    }, [props.modalCall])

    if (!isOpen) {
        return null
    }

    return (
        <>
            <BackgroundModal>
                <ModalCard>
                    <img src={warning} alt="Warning Image" />
                    <p>{props.message}</p>
                    <button onClick={manipulateModal}>Ok</button>
                </ModalCard>
            </BackgroundModal></>
    )
}