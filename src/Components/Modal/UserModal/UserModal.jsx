import { BackgroundModal, ModalCard } from "../GlobalModalSCSS"
import rocket from "../../../assets/images/png/rocket.png"
import { Login } from "../../../Service/auth.service.js";

export function UserModal(close, navigate, errorLogged, setErrorLogged, username, password, setUsername, setPassword) {
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
            navigate('/profile');
            close();
        }
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
                    <input type="text" placeholder="Name (Ex.: Bruce Wayne)" />
                    <input type="text" placeholder="Username (Ex.: batman)" />
                    <input type="password" placeholder="Create a Password" />
                    <br />
                    <input type="text" placeholder="Avatar Profile URL Image" />
                    <input type="text" placeholder="Banner Profile URL Image" />
                    <p>Can't find cool URLs? <b><a href="https://imgur.com" target="_blank">Try here!</a></b></p>
                    <button>Sign Up</button>
                </ModalCard>
            </BackgroundModal>
        </>
    );
}