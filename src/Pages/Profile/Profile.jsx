import { useState, useEffect } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { userData, findUserArticles } from "../../Service/user.service";
import { ProfileBox } from "./ProfileSCSS";
import { useNavigate } from "react-router-dom";
import { ProfileCard } from "../../Components/Card/NewsCards";
import expired from "../../assets/images/png/expired.png";

export function Profile() {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [userArticles, setUserArticles] = useState([]);

    useEffect(() => {
        fillData();
        fillArticles();
    }, [])

    const signOut = () => {
        localStorage.clear();
        navigate(`/`);
    }

    const fillData = async () => {
        const userProfile = await userData(localStorage.getItem('user'));

        setUser(userProfile);
    }

    const fillArticles = async () => {
        const profileArticles = await findUserArticles(localStorage.getItem('jwt'));

        if (profileArticles) {
            setUserArticles(profileArticles);
        }
    }

    return (
        <>
            <Navbar />
            <ProfileBox>
                {user ? <img src={user.background} /> : null}
                {user ? <span>
                    <img src={user.avatar} />
                    <h1>{user.name}</h1>
                </span> : null}
                <div>
                    {userArticles.length > 0 ?
                        userArticles.map((item, index) => {
                            return <ProfileCard props={item} key={index} />
                        }) : <p>You don't have any articles published yet!</p>}
                </div>
                <section>
                    <button onClick={() => signOut()}>Sign Out</button>
                </section>
            </ProfileBox>
        </>
    )
}