import logo from "../../assets/images/png/sitelogo.png"
import publish from "../../assets/images/png/publish.png"
import search from "../../assets/images/png/search.png"
import account from "../../assets/images/png/account.png"
import { Nav, Earth1Logo, ButtonBox } from "./NavbarSCSS"

export function Navbar() {

    return (
        <>
            <Nav>
                <Earth1Logo src={logo} alt="Earth-1 Platform Logo" />

                <ButtonBox>
                    <button><img src={publish} alt="Publish Article Image Button Icon" /></button>
                    <button><img src={search} alt="Search Article Image Button Icon" /></button>
                    <button><img src={account} alt="Account Image Button Icon" /></button>
                </ButtonBox>
            </Nav>
        </>
    );
}
