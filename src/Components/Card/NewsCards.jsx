import { news } from "../../Mock/Datas";
import { Trending, ToCenter, BlueCard, BlueNewsBox, LoadButtonNews } from "./NewsCardsSCSS";
import down from "../../assets/images/png/down.png"

export const TrendingCard = ({ props }) => {
    return (
        <>
            <ToCenter>
                <Trending>
                    <img src={props.banner} alt="Trending Article Image" />
                    <div>
                        <h1>{props.title.slice(0, 20)}...</h1>
                        <p>{props.content.slice(0, 150)}<strong>...</strong></p>
                    </div>
                </Trending>
            </ToCenter>
        </>

    )
}

export function BlueNews({ props }) {
    return (
        <>
            <BlueNewsBox>
                <BlueCard>
                    <img src={props[0].banner} alt="Article Banner Image" />
                    <h2>{props[0].title.slice(0, 10)}<strong>...</strong></h2>
                    <p>{props[0].content.slice(0, 25)}<strong>...</strong></p>
                </BlueCard>
                <BlueCard>
                    <img src={props[1].banner} alt="Article Banner Image" />
                    <h2>{props[1].title.slice(0, 10)}<strong>...</strong></h2>
                    <p>{props[1].content.slice(0, 25)}<strong>...</strong></p>
                </BlueCard>
                <BlueCard>
                    <img src={props[2].banner} alt="Article Banner Image" />
                    <h2>{props[2].title.slice(0, 10)}<strong>...</strong></h2>
                    <p>{props[2].content.slice(0, 25)}<strong>...</strong></p>
                </BlueCard>
                <BlueCard>
                    <img src={props[3].banner} alt="Article Banner Image" />
                    <h2>{props[3].title.slice(0, 10)}<strong>...</strong></h2>
                    <p>{props[3].content.slice(0, 25)}<strong>...</strong></p>
                </BlueCard>
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