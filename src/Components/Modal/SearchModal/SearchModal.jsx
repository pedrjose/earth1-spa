import { BackgroundModal, ModalCard } from "../GlobalModalSCSS";
import { WarningModal } from "../WarningModal/WarningModal";
import searchArticle from "../../../assets/images/png/searchArticle.png";

export function SearchModal(navigate, searchTitle, setSearchTitle) {
    const handleChange = (event) => {
        setSearchTitle(event.target.value);
    }

    return (
        <>
            <BackgroundModal>
                <ModalCard>
                    <img src={searchArticle} />
                    <b><p>Find Articles</p></b>
                    <input type="text" placeholder="Article Keyword" onChange={handleChange} />
                    <button onClick={() => navigate(`/search/${searchTitle}`)}>Search</button>
                </ModalCard>
            </BackgroundModal>
        </>
    )
}