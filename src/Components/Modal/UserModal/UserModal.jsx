import { BackgroundModal, ModalCard } from "../GlobalModalSCSS"
import rocket from "../../../assets/images/png/rocket.png"
import { Login } from "../../../Service/auth.service.js";
import { createNewUser } from "../../../Service/user.service";

export function UserModal(close, navigate, errorLogged, setErrorLogged, username, password, setUsername, setPassword, upName, setUpName, upUsername, setUpUsername, upPassword, setUpPassword, upAvatar, setUpAvatar, upBanner, setUpBanner, signUpWarning, setSignUpWarning) {
    // 1. To Sign In
    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const signIn = async () => {
        const response = await Login(username, password);

        if (!response) {
            setErrorLogged(true);
        }

        if (response) {
            setErrorLogged(false);
            localStorage.setItem('jwt', response.token);
            localStorage.setItem('user', response.loggedUser);
            localStorage.setItem('status', true);
            navigate('/profile');
            close();
        }
    }

    // 2. To Sign Up
    const handleChangeUpName = (event) => {
        setUpName(event.target.value);
    }

    const handleChangeUpUsername = (event) => {
        setUpUsername(event.target.value);
    }

    const handleChangeUpPassword = (event) => {
        setUpPassword(event.target.value);
    }

    const handleChangeUpAvatar = (event) => {
        setUpAvatar(event.target.value);
    }

    const handleChangeUpBanner = (event) => {
        setUpBanner(event.target.value);
    }

    const signUp = async () => {
        if (upName.length > 10) {
            setSignUpWarning({ status: false, message: "Profile names are limited to 10 chars!" });
            return false;
        }

        const response = await createNewUser(upName, upUsername, upPassword, upAvatar, upBanner);

        setSignUpWarning(response);
    }

    return (
        <>
            <BackgroundModal>
                <ModalCard>
                    <img src={rocket} />
                    <p>Welcome back. We miss you!</p>
                    <input type="text" placeholder="Account Username" onChange={handleChangeUsername} />
                    <input type="password" placeholder="Password" onChange={handleChangePassword} />
                    <button onClick={signIn}>Sign In</button>
                    {errorLogged ? <p>Username or Password Is Incorrect!</p> : null}
                </ModalCard>

                <ModalCard>
                    <p>Don't have a account? <b>Let's Go!</b></p>
                    <input type="text" placeholder="Name (Ex.: Bruce Wayne)" onChange={handleChangeUpName} />
                    <input type="text" placeholder="Username (Ex.: batman)" onChange={handleChangeUpUsername} />
                    <input type="password" placeholder="Create a Password" onChange={handleChangeUpPassword} />
                    <br />
                    <input type="text" placeholder="Avatar Profile URL Image" onChange={handleChangeUpAvatar} />
                    <input type="text" placeholder="Banner Profile URL Image" onChange={handleChangeUpBanner} />
                    <p>Can't find cool URLs? <b><a href="https://imgur.com" target="_blank">Try here!</a></b></p>
                    <button onClick={signUp}>Sign Up</button>
                    {!signUpWarning.status ? <p>{signUpWarning.message}</p> : null}
                    {signUpWarning.status && signUpWarning.message ? <p>{signUpWarning.message}</p> : null}
                </ModalCard>
            </BackgroundModal>
        </>
    );
}