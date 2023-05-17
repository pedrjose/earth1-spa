import { BackgroundModal, ModalCard } from "../GlobalModalSCSS"
import submitArticle from "../../../assets/images/png/submitArticle.png"

export function PublishModal() {
    return (
        <>
            <BackgroundModal>
                <ModalCard>
                    <img src={submitArticle} />
                    <b><p>Publish Articles</p></b>
                    <input type="text" placeholder="Article Title" />
                    <input type="text" placeholder="Article Content" />
                    <input type="text" placeholder="Article Banner Url Image" />
                    <button>Submit</button>
                </ModalCard>
            </BackgroundModal>
        </>
    )
}