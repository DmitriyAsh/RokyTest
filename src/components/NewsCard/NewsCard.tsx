import { FC } from "react";
import cl from "./NewsCard.module.css";
import moment from "moment";

interface ICardProps {
    image: string;
    webTitle: string;
    webPublicationdate: string;
}

const NewsCard: FC<ICardProps> = ({ image, webTitle, webPublicationdate }) => {
    return (
        <div className={cl.card}>
            <img src={image} alt='#' className={cl.card_img} />
            <div className={cl.post_date}>
                {moment(webPublicationdate).format("DD MMMM YYYY HH:mm")}
            </div>
            <div className={cl.card_text}>{webTitle}</div>
            <button className={cl.card_button}>Details</button>
        </div>
    );
};

export default NewsCard;
