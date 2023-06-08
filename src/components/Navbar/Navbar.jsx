import { useEffect, useState } from "react";
import { Nav, Earth1Logo, ButtonBox } from "./NavbarSCSS";
import { Link } from 'react-router-dom';
import { PublishModal } from "../Modal/PublishModal/PublishModal.jsx";
import { SearchModal } from "../Modal/SearchModal/SearchModal.jsx";
import { UserModal } from "../Modal/UserModal/UserModal.jsx";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/png/sitelogo.png";
import publish from "../../assets/images/png/publish.png";
import search from "../../assets/images/png/search.png";
import account from "../../assets/images/png/account.png";
import back from "../../assets/images/png/back.png";
import profileButton from "../../assets/images/png/profileButton.png"
import { Profile } from "../../Pages/Profile/Profile";

export function Navbar() {
    const navigate = useNavigate();

    const [logged, setLogged] = useState(localStorage.getItem('status'));

    const [publishModal, setPublishModal] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    const [userModal, setUserModal] = useState(false);

    // publish
    const [publishAlert, setPublishAlert] = useState(false);
    const [titleArticle, setTitleArticle] = useState("");
    const [contentArticle, setContentArticle] = useState("");
    const [bannerArticle, setBannerArticle] = useState("");

    // Search
    const [searchTitle, setSearchTitle] = useState("");

    const handleChange = (event) => {
        setSearchTitle(event.target.value);
    }

    // User Modal
    const [errorLogged, setErrorLogged] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [signUpWarning, setSignUpWarning] = useState({ status: true, message: false });
    const [upName, setUpName] = useState("");
    const [upUsername, setUpUsername] = useState("");
    const [upPassword, setUpPassword] = useState("");
    const [upAvatar, setUpAvatar] = useState("");
    const [upBanner, setUpBanner] = useState("");

    // Warning Modal
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
                {publishModal ? PublishModal(titleArticle, setTitleArticle, contentArticle, setContentArticle, bannerArticle, setBannerArticle, publishAlert, setPublishAlert, navigate) : null}

                {searchModal ? SearchModal(navigate, searchTitle, setSearchTitle) : null}

                {userModal ? UserModal(close, navigate, errorLogged, setErrorLogged, username, password, setUsername, setPassword, upName, setUpName, upUsername, setUpUsername, upPassword, setUpPassword, upAvatar, setUpAvatar, upBanner, setUpBanner, signUpWarning, setSignUpWarning) : null}

                <ButtonBox>
                    {publishModal || searchModal || userModal ? <button onClick={close} style={{ zIndex: 2000 }}><img src={back} /></button> : null}

                    <span>
                        <input type="text" placeholder="Search (Ex.: Marvel)" onChange={handleChange} />
                    </span>

                    <button onClick={() => navigate(`/search/${searchTitle}`)}><img src={search} alt="Search Article Button" /></button>

                    {logged === 'true' ? <button onClick={() => setPublishModal(true)}><img src={publish} alt="Publish Article Button" /></button> : null}

                    {logged === 'false' || !logged ? <button onClick={() => setUserModal(true)}><img src={account} alt="Login or Sign Up Button" /></button> : null}

                    {logged === 'true' ? <button onClick={() => navigate(`/profile`)}><img src={profileButton} alt="Open Profile Button" /></button> : null}
                </ButtonBox>
            </Nav >
        </>
    );
}
