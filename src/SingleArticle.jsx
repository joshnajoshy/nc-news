import { useParams } from "react-router";
import {useEffect, useState} from 'react'
import {getSingleArticle} from './api'

function SingleArticle() {
const {article_id} = useParams()
const [eachArticle, setEachArticle] = useState([])
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
getSingleArticle(article_id).then((article) => {
    setEachArticle(article);
    setIsLoading(false);
})
}, [article_id])

if (isLoading) {
    return (
      <div>
        <p> Loading ...</p>
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
    </section>
)


}


export default SingleArticle;