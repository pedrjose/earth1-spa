import { CommentStyle } from "./CommentSCSS";
import { user } from "../../Mock/Datas.js";
import deleteButton from "../../assets/images/png/deleteButton.png";

export function Comment({props}) {
    return (
        <>
            <CommentStyle>
                <img src={props.photo} />
                <span>
                    <h4>{props.userName}</h4>
                    <p>{props.comment}</p>
                </span>
            </CommentStyle>
        </>
    )
}