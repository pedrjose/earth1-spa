import { useState, useEffect } from "react";
import { getAllArticles } from "../../Service/cards.service";
import { Navbar } from "../../Components/Navbar/Navbar";
import { TrendingCard, BlueNews } from "../../Components/Card/NewsCards";
import { news } from "../../Mock/Datas.js";
import down from "../../assets/images/png/down.png";
import { ToCenter, LoadButtonNews } from "../../Components/Card/NewsCardsSCSS";

export function Home() {
    const [props, setProps] = useState(false);
    const [articles, setArticles] = useState([]);

    const generateProps = async () => {
        const response = await getAllArticles();
        setArticles(response.data.results);
        setProps(true);
    }

    useEffect(() => {
        generateProps();
    }, [])

    const [articleButton, setArticleButton] = useState(0);
    const [blueCardsRow, setBlueCardRow] = useState([]);

    const loadUpNewArticlesRow = () => {
        if (articleButton === 0) {
            setArticleButton((prevState) => prevState + 5);
        }
        else {
            setArticleButton((prevState) => prevState + 4);
        }
    }

    useEffect(() => {
        const newRow = articles.slice(articleButton, articleButton + 4);
        const newRows = [...blueCardsRow, newRow];

        if (props) {
            if (articles.length - articleButton > 4 || articles.length - articleButton === 4) {
                setBlueCardRow(newRows);
            }
            else {
                alert('No more home news!');
            }
        }
    }, [articleButton])

    return (
        <>
            <Navbar />
            <TrendingCard props={props ? articles[0] : news[0]} />
            <BlueNews props={props ? [articles[1], articles[2], articles[3], articles[4]] : [news[1], news[2], news[3], news[4
            ]]} />
            {blueCardsRow.map((item, index) => {
                return <BlueNews key={index} props={item} />
            })}
            <ToCenter>
                <LoadButtonNews onClick={loadUpNewArticlesRow}><img src={down} alt="+News" /></LoadButtonNews>
            </ToCenter>
        </>
    );
}