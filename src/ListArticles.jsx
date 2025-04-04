import {useState, useEffect} from 'react';
import { filterArticles, getArticles } from './api'; 
import ArticleCard from './ArticleCard';
import LoadingSpinner from './LoadingSpinner';
import DropDownForDates from './DropDownForDates';

function ListArticles() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const queryParameters = new URLSearchParams(window.location.search)
    const sort_by = queryParameters.get("sort_by")
    const order = queryParameters.get("order")

    useEffect(() => {
      if(order || sort_by){
        filterArticles(sort_by, order).then((articles) => {
          setArticles(articles)
          setIsLoading(false);
          setIsError(false);
        }).catch((error) => {
          setIsError(true);
        }) 
      } else {
        getArticles().then((articles) => {
          setArticles(articles)
          setIsLoading(false);
          setIsError(false);
      }).catch((error) => {
        setIsError(true);
      }) 
      }
    }, [order])

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
          <DropDownForDates/>
            <ul>
            {articles.map((article) => {
                return <ArticleCard article={article} key={article.article_id}/>
            })}
        </ul>
        </section>
    )

}

export default ListArticles