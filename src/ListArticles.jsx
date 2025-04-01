import {useState, useEffect} from 'react';
import { getArticles } from './api'; 
import ArticleCard from './ArticleCard';
import SearchBar from './SearchBar';
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
        <section>
            <SearchBar/>
            <ul>
            {articles.map((article) => {
                return <ArticleCard article={article} key={article.article_id}/>
            })}
        </ul>
        </section>
    )

}

export default ListArticles