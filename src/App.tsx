import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import NewsCard from "./components/NewsCard/NewsCard";

interface ApiResponse {
    response: {
        results: IPost[];
    };
}

interface IPost {
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

function App() {
    const [news, setNews] = useState<IPost[]>([]);

    async function getPosts(): Promise<IPost[]> {
        const { data } = await axios.get<ApiResponse>(
            "https://content.guardianapis.com/search?api-key=24666356-cbba-47ca-ae0d-c98a27166f0f&show-fields=trailText,body,thumbnail,publication&show-elements=image"
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
        <div className='App'>
            <div className='container'>
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
    );
}

export default App;
