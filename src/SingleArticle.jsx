import { useParams } from "react-router";
import {useEffect, useState} from 'react'
import {getSingleArticle} from './api'
import ListComments from "./ListComments";

function SingleArticle() {
const {article_id} = useParams()
const [eachArticle, setEachArticle] = useState([])
const [isLoading, setIsLoading] = useState(true);
const [isError, setIsError] = useState(false);

useEffect(() => {
getSingleArticle(article_id).then((article) => {
    setEachArticle(article);
    setIsLoading(false);
    setIsError(false);
}).catch((error) => {
    setIsError(true);
})
}, [article_id])

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
        <h1>{eachArticle.title}</h1>
        <p>Created at: {eachArticle.created_at}</p>
        <p>{eachArticle.body}</p>
        <img src={eachArticle.article_img_url} className="responsive"/>
        <p>Author: {eachArticle.author}</p>
        <p>Votes: {eachArticle.votes}</p>
        <ListComments article_id={article_id}/>
    </section>
)


}


export default SingleArticle;