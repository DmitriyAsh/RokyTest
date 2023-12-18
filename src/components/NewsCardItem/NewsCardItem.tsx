import { FC } from "react";

interface CardItemProps {
    image: string;
    body: string;
}

const NewsCardItem: FC<CardItemProps> = ({ image, body }) => {
    return (
        <div>
            <div>
                <img src={image} alt='#' />
            </div>
            <div dangerouslySetInnerHTML={{ __html: body }}></div>
        </div>
    );
};

export default NewsCardItem;
