import { useEffect, useState } from "react"

import { Link } from 'react-router-dom'

import { Nav, Earth1Logo, ButtonBox } from "./NavbarSCSS"

import { PublishModal } from "../Modal/PublishModal/PublishModal.jsx"
import { SearchModal } from "../Modal/SearchModal/SearchModal.jsx"
import { UserModal } from "../Modal/UserModal/UserModal.jsx"

import logo from "../../assets/images/png/sitelogo.png"
import publish from "../../assets/images/png/publish.png"
import search from "../../assets/images/png/search.png"
import account from "../../assets/images/png/account.png"
import back from "../../assets/images/png/back.png"

export function Navbar() {
    const [publishModal, setPublishModal] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    const [userModal, setUserModal] = useState(false);

    const [closeModal, setCloseModal] = useState(0);

    const close = () => {
        setCloseModal((prevState) => prevState + 1);
    }

    useEffect(() => {
        if (publishModal) {
            setPublishModal(false);
        }
        if (searchModal) {
            setSearchModal(false);
        }
        if (userModal) {
            setUserModal(false);
        }
    }, [closeModal])

    return (
        <>
            <Nav>
                <Link to="/"><Earth1Logo src={logo} alt="Earth-1 Platform Logo" /></Link>
                {publishModal ? PublishModal() : null}
                {searchModal ? SearchModal() : null}
                {userModal ? UserModal() : null}
                <ButtonBox>
                    {publishModal || searchModal || userModal ? <button onClick={close} style={{ zIndex: 2000 }}><img src={back} /></button> : null}
                    <button onClick={() => setPublishModal(true)}><img src={publish} alt="Publish Article Button" /></button>
                    <button onClick={() => setSearchModal(true)}><img src={search} alt="Search Article Button" /></button>
                    <button onClick={() => setUserModal(true)}><img src={account} alt="Login or Sign Up Button" /></button>
                </ButtonBox>
            </Nav>
        </>
    );
}
