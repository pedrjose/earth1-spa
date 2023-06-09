import { news } from "../../Mock/Datas";
import { Trending, ToCenter, BlueCard, BlueNewsBox, LoadButtonNews, YellowCard } from "./NewsCardsSCSS";
import { deleteArticle } from "../../Service/user.service";
import down from "../../assets/images/png/down.png"
import { Link } from "react-router-dom";
import { useState } from "react";
import { WarningModal } from "../Modal/WarningModal/WarningModal";

const baseUrl = `/article/`;

const styles = {
    textDecoration: 'none'
};

export const TrendingCard = ({ props }) => {
    return (
        <>
            <ToCenter>
                <Link to={baseUrl + props.id} style={styles}>
                    <Trending>
                        <img src={props.banner} alt="Trending Article Image" />
                        <div>
                            <h1>{props.title.slice(0, 20)}...</h1>
                            <p>{props.content.slice(0, 150)}<strong>...</strong></p>
                        </div>
                    </Trending>
                </Link>
            </ToCenter>
        </>

    )
}

export const SingleCard = ({ props }) => {
    return (
        <>
            <Link to={baseUrl + props.id} style={styles}>
                <BlueCard>
                    <img src={props.banner} alt="Article Banner Image" />
                    <h2>{props.title.slice(0, 10)}<strong>...</strong></h2>
                    <p>{props.content.slice(0, 25)}<strong>...</strong></p>
                </BlueCard>
            </Link >
        </>
    )
}

export const ProfileCard = ({ props }) => {
    const token = localStorage.getItem('jwt');
    const id = props.id;

    const [warning, setWarning] = useState(0);
    const [messageWarning, setMessageWarning] = useState("");

    const activateWarning = () => {
        setWarning((prevState) => prevState + 1);
    }

    const deleteMyArticle = async (id, token) => {
        const response = await deleteArticle(id, token);

        if (response.status) {
            window.location.reload();
        } else {
            setMessageWarning(response.message)
            activateWarning();
        }

    }

    return (
        <>
            <WarningModal props={{ modalCall: warning, message: messageWarning }} />
            <YellowCard>
                <h2>{props.title.slice(0, 40)}...</h2>
                <button onClick={() => deleteMyArticle(id, token)}>Delete</button>
            </YellowCard>
        </>
    )
}

export function BlueNews({ props }) {
    return (
        <>
            <BlueNewsBox>
                <Link to={baseUrl + props[0].id} style={styles}>
                    <BlueCard>
                        <img src={props[0].banner} alt="Article Banner Image" />
                        <h2>{props[0].title.slice(0, 10)}<strong>...</strong></h2>
                        <p>{props[0].content.slice(0, 25)}<strong>...</strong></p>
                    </BlueCard>
                </Link>
                <Link to={baseUrl + props[1].id} style={styles}>
                    <BlueCard>
                        <img src={props[1].banner} alt="Article Banner Image" />
                        <h2>{props[1].title.slice(0, 10)}<strong>...</strong></h2>
                        <p>{props[1].content.slice(0, 25)}<strong>...</strong></p>
                    </BlueCard>
                </Link>
                <Link to={baseUrl + props[2].id} style={styles}>
                    <BlueCard>
                        <img src={props[2].banner} alt="Article Banner Image" />
                        <h2>{props[2].title.slice(0, 10)}<strong>...</strong></h2>
                        <p>{props[2].content.slice(0, 25)}<strong>...</strong></p>
                    </BlueCard>
                </Link>
                <Link to={baseUrl + props[3].id} style={styles}>
                    <BlueCard>
                        <img src={props[3].banner} alt="Article Banner Image" />
                        <h2>{props[3].title.slice(0, 10)}<strong>...</strong></h2>
                        <p>{props[3].content.slice(0, 25)}<strong>...</strong></p>
                    </BlueCard>
                </Link>
            </BlueNewsBox>
        </>
    )
}

export function LoadNews() {
    return (
        <>
            <ToCenter>
                <LoadButtonNews><img src={down} alt="Down News" /></LoadButtonNews>
            </ToCenter>
        </>
    )
}