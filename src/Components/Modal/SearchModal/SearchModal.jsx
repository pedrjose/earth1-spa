import { BackgroundModal, ModalCard } from "../GlobalModalSCSS"
import searchArticle from "../../../assets/images/png/searchArticle.png"

export function SearchModal() {
    return (
        <>
            <BackgroundModal>
                <ModalCard>
                    <img src={searchArticle} />
                    <b><p>Find Articles</p></b>
                    <input type="text" placeholder="Article Keywords or Title" />
                    <button>Search</button>
                </ModalCard>
            </BackgroundModal>
        </>
    )
}