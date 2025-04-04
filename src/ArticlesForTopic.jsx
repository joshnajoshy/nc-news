import { getArticlesByTopic } from "./api";
import {useState, useEffect} from 'react';
import { useParams } from "react-router";
import ArticleCard from "./ArticleCard";
import LoadingSpinner from "./LoadingSpinner";

function ArticlesForTopic() {
const {topic} = useParams()
const [articles, setArticles] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [isError, setIsError] = useState(false);

useEffect(() => {
    getArticlesByTopic(topic).then((articles) => {
        setArticles(articles)
        setIsLoading(false);
        setIsError(false);
    })
    .catch((error) => {
      setIsError(true);
    }) 
}, [topic])

if (isLoading) {
    return (
      <div>
        <LoadingSpinner/>
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

export default ArticlesForTopic;