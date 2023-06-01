import { Navbar } from "../../Components/Navbar/Navbar.jsx";
import { SingleCard } from "../../Components/Card/NewsCards.jsx";
import { findArticlesByTitle } from "../../Service/search.service.js";
import { CenterItems } from "./SearchSCSS.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import unfound from "../../assets/images/png/unfound.png";

export function SearchPage() {
    const { title } = useParams();
    const [resultSearch, setResultSearch] = useState([]);

    const generateSearchByTitle = async (title) => {
        const newsByTitle = await findArticlesByTitle(title);

        setResultSearch(newsByTitle);
    }

    useEffect(() => {
        generateSearchByTitle(title);
    }, [title])

    return (
        <>
            <Navbar />
            <CenterItems>
                {!resultSearch ? <img src={unfound} /> : null}
                {!resultSearch ? <p>No results found!</p> : null}
                {resultSearch && resultSearch.length ? <p>{resultSearch.length} results found for <i><b>'{title}'</b></i></p> : null}
                <span>
                    {resultSearch && resultSearch.length !== 0 ? resultSearch.map((item, index) => {
                        return <SingleCard props={item} key={index} />
                    }) : null}
                </span>
            </CenterItems>
        </>
    )
}