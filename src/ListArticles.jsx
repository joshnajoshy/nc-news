import {useState, useEffect} from 'react';
import { getArticles } from './api'; 
import ArticleCard from './ArticleCard';
function ListArticles() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        getArticles().then((articles) => {
            setArticles(articles)
            setIsLoading(false);
            setIsError(false);
        }).catch((error) => {
          setIsError(true);
        }) 
    }, [])

    if (isLoading) {
        return (
          <div>
            <p> Loading ...</p>
          </div>
        );
      }

    if (isError) {
        return (
          <div className="event-list">
            <p>Whoops! Something went wrong ...</p>
          </div>
        );
      }

      return (
        <section>
            <ul>
            {articles.map((article) => {
                return <ArticleCard article={article} key={article.article_id}/>
            })}
        </ul>
        </section>
    )

}

export default ListArticles