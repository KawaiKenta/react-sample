import { useEffect, useState } from "react";

type Article = {
    userId: number,
    id: number,
    title: string,
    body: string,
}

const SimpleFetchData = () => {
    const [res, setRes] = useState<Article[]>();
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setRes(data))
        .catch((_: unknown) => {
            return (<p>Error: Network error!</p>)
        });
    }, []);

    return (
        <>
            {res && res.map((article) => (
                <div key={article.id}>
                    <h3>{article.title}</h3>
                    <div>
                        <p>{article.body}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default SimpleFetchData;