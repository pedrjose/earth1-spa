import { CenterWarning } from "./ScreenSCSS";
import screen from "../../assets/images/png/screen.png";

export function NoScreen() {
    return (
        <>
            <CenterWarning>
                <h1>Wow...!</h1>
                <h2>Earth-1 is not compatible with this device.</h2>
                <h3>Please check for a compatible device with:</h3>
                <span>
                    <h4><b>1. Network access</b>;</h4>
                    <h4><b>2. Installed browser</b>;</h4>
                    <h4><b>3. Minimum screen width of 1024</b>.</h4>
                </span>

                <img src={screen} alt="Screen Image" />
            </CenterWarning>
        </>
    )
} 