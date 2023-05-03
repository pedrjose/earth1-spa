import { Navbar } from "../../Components/Navbar/Navbar";
import { TrendingCard, BlueNews, LoadNews } from "../../Components/Card/NewsCards";
import { news } from "../../Mock/Datas.js";


export function Home() {
    const trendingNews = news[0];
    console.log(trendingNews);

    const othernews = [];
    othernews.push(news[1]);
    othernews.push(news[2]);
    othernews.push(news[3]);
    othernews.push(news[4]);
    console.log(othernews);

    return (
        <>
            <Navbar />
            <TrendingCard props={trendingNews} />
            <BlueNews props={othernews} />
            <LoadNews />
        </>
    );
}