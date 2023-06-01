import { useState, useEffect } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { expiredSession } from "../../Service/user.service";

export function Profile() {
    const [user, setUser] = useState(localStorage.getItem('user'));
    const [token, setToken] = useState(localStorage.getItem('jwt'));

    const validSession = async () => {
        const statusSession = await expiredSession(token);

        localStorage.setItem('status', statusSession.session);

        console.log(statusSession);
    }

    useEffect(() => {
        validSession();
    }, [])

    return (
        <>
            <Navbar />
        </>
    )
}