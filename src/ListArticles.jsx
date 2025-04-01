import {useState, useEffect} from 'react';
import { getArticles } from './api'; 
import ArticleCard from './ArticleCard';

function ListArticles() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getArticles().then((articles) => {
            setArticles(articles)
            setIsLoading(false);
        }) 
    }, [])

    if (isLoading) {
        return (
          <div>
            <p> Loading ...</p>
          </div>
        );
      }

    return (
        <ul>
            {articles.map((article) => {
                console.log(article)
                return <ArticleCard article={article} key={article.article_id}/>
            })}
        </ul>
    )

}

export default ListArticles