import { NotFoundBox } from "./NotFoundSCSS";
import bob from "../../assets/images/png/bob.png";
import { useNavigate } from "react-router-dom";

export function NotFound() {
    const navigate = useNavigate();

    return (
        <>
            <NotFoundBox>
                <h1>Are You Lost?</h1>
                <h2>Calm down, I'm Bob the Pumpkin. I'll help you!</h2>
                <img src={bob} alt="Bob the Pumpkin" />
                <button onClick={() => navigate("/")}>Back to Home</button>
            </NotFoundBox>
        </>
    )
}