import { BackgroundModal, ModalCard } from "../GlobalModalSCSS"
import rocket from "../../../assets/images/png/rocket.png"

export function UserModal() {
    return (
        <>
            <BackgroundModal>
                <ModalCard>
                    <img src={rocket} />
                    <p>Welcome back. We miss you!</p>
                    <input type="text" placeholder="Account Username" />
                    <input type="password" placeholder="Password" />
                    <button>Sign In</button>
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