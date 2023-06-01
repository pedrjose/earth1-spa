import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../../Components/Navbar/Navbar.jsx";
import { MoveToTheCenter } from "./NewsSCSS.jsx";
import { Paragraph } from "../../Components/Paragraphs/Paragraphs.jsx";
import { Comment } from "../../Components/Comment/Comment.jsx";
import { contentWithBreaks, getArticleById } from "../../Service/article.service.js";
import noLike from "../../assets/images/png/noLike.png";
import like from "../../assets/images/png/like.png";
import comments from "../../assets/images/png/comments.png";

export function Article() {
    const { id } = useParams();

    const searchArticlePage = async (id) => {
        const returnedArticle = await getArticleById(id);

        setPageArticle(returnedArticle);
    }

    const [pageArticle, setPageArticle] = useState();

    useEffect(() => {
        searchArticlePage(id);
    }, []);

    const [articleContent, setArticleContent] = useState([]);

    useEffect(() => {
        if (pageArticle) {
            setArticleContent(contentWithBreaks(pageArticle.content));
        }

    }, [pageArticle]);

    const [openComments, setOpenComments] = useState(0);

    const openCommentBox = () => {
        setOpenComments((prevState) => prevState + 1);
    }

    return (
        <>
            <Navbar />
            <MoveToTheCenter>
                {pageArticle ? <h2>{pageArticle.title}</h2> : null}
                <section>
                    {pageArticle ? <img src={pageArticle.banner} /> : null}
                </section>
                {pageArticle && articleContent.length !== 0 ? articleContent.map((item, index) => {
                    return <Paragraph props={item} key={index} />
                }) : null}
                {pageArticle ? <span>
                    <span>
                        <img src={pageArticle.icon} />
                        <p><b>{pageArticle.name}</b></p>
                    </span>
                    <span>
                        <button><img src={noLike} /></button>
                        <p>{pageArticle.likes.length} Liked</p>
                    </span>
                    <span>
                        <button onClick={openCommentBox}><img src={comments} /></button>
                        <p>{pageArticle.comments.length} Comments</p>
                    </span>
                </span> : null}
                <div>
                    {pageArticle && pageArticle.comments.length > 0 && openComments % 2 !== 0 ? pageArticle.comments.map((item, index) => {
                        return <Comment props={item} key={index} />
                    }) : null}
                </div>
                <div>
                    <span>
                        <input type="text" placeholder="Add a comment" />
                        <button>Comment</button>
                    </span>
                </div>
            </MoveToTheCenter>
        </>
    )
}