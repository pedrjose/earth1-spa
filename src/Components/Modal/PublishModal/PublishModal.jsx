import { BackgroundModal, ModalCard } from "../GlobalModalSCSS";
import { publishArticle } from "../../../Service/user.service";
import submitArticle from "../../../assets/images/png/submitArticle.png";

export function PublishModal(titleArticle, setTitleArticle, contentArticle, setContentArticle, bannerArticle, setBannerArticle, publishAlert, setPublishAlert, navigate) {
    const handleChangeTitle = (event) => {
        setTitleArticle(event.target.value);
    }

    const handleChangeContent = (event) => {
        setContentArticle(event.target.value);
    }

    const handleChangeBanner = (event) => {
        setBannerArticle(event.target.value);
    }

    const createArticle = async () => {
        if (titleArticle.length < 10) {
            setPublishAlert("Title needs at least 15 chars!");
            return false;
        }

        if (contentArticle.length < 500) {
            setPublishAlert("Content needs at least 500 chars!");
            return false;
        }

        if (bannerArticle.length < 5) {
            setPublishAlert("Banner URL not supported!");
            return false;
        }

        const token = localStorage.getItem('jwt');
        const response = await publishArticle(titleArticle, contentArticle, bannerArticle, token);

        setPublishAlert(response.message);
    }

    return (
        <>
            <BackgroundModal>
                <ModalCard>
                    <img src={submitArticle} />
                    <b><p>Publish Articles</p></b>
                    <input type="text" placeholder="Title" onChange={handleChangeTitle} />
                    <input type="text" placeholder="Content (Use ¬ to breakline)" onChange={handleChangeContent} />
                    <input type="text" placeholder="URL Banner (1920x1080)" onChange={handleChangeBanner} />
                    <button onClick={() => createArticle()}>Submit</button>
                    {publishAlert ? <p>{publishAlert}</p> : null}
                </ModalCard>
            </BackgroundModal>
        </>
    )
}