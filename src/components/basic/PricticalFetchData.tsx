import { useEffect, useState } from "react";

type Article = {
    userId: number,
    id: number,
    title: string,
    body: string,
}

const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (res.ok) { return res.json() }
    throw new Error(res.statusText);
}

const PracticalFetchData = () => {
    const [data, setData] = useState<Article[]>();
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(()=> {
        fetchData()
        .then(result => setData(result))
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));
    })

    if (isLoading) {
        return <p>Loading...</p>
    }
    
    // 空文字列ならfalse
    if (error) {
        return <p>Error: {error}</p>
    }

    return (<>
        <h3>Load Finished</h3>
        {data?.slice(0, 3).map((article) => (
            <div key={article.id}>
                <h3>{article.title}</h3>
                <div>
                    <p>{article.body}</p>
                </div>
            </div>
        ))}
    </>)
}

export default PracticalFetchData;
