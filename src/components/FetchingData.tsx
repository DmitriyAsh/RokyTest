import React, { useEffect, useState } from "react";
import cl from "../App.module.css";
import axios from "axios";
import NewsCard from "./NewsCard/NewsCard";
import PostFilter from "./PostFilter/PostFilter";

interface ApiResponse {
    response: {
        results: IPost[];
    };
}

export interface IPost {
    id: string;
    type: string;
    webTitle: string;
    webUrl: string;
    fields: IFields;
    webPublicationDate: string;
}

interface IFields {
    thumbnail: string;
    trailtext: string;
    body: string;
    publication: string;
}

function FetchingData() {
    const [news, setNews] = useState<IPost[]>([]);

    async function getPosts(): Promise<IPost[]> {
        const { data } = await axios.get<ApiResponse>(
            "https://content.guardianapis.com/search?api-key=24666356-cbba-47ca-ae0d-c98a27166f0f&show-fields=trailText,body,thumbnail,publication&page-size=30"
        );

        return data.response.results;
    }

    async function fetchData() {
        try {
            const posts = await getPosts();
            setNews(posts);
            console.log(posts);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className={cl.App}>
            <div className={cl.container}>
                <div className={cl.post_filter}>
                    <PostFilter />
                </div>
                <div className={cl.card_list}>
                    {news.map((i) => (
                        <NewsCard
                            key={i.id}
                            image={i.fields.thumbnail}
                            webTitle={i.webTitle}
                            webPublicationdate={i.webPublicationDate}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FetchingData;
