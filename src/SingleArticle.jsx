import { useParams } from "react-router";
import {useEffect, useState} from 'react'
import {getSingleArticle, updateUserVote} from './api'
import ListComments from "./ListComments";
import LoadingSpinner from "./LoadingSpinner";
import ErrorComponent from "./ErrorComponent";

function SingleArticle() {
const {article_id} = useParams()
const [eachArticle, setEachArticle] = useState([])
const [isLoading, setIsLoading] = useState(true);
const [isError, setIsError] = useState(false);
const [optimisticVotes, setOptimisticVotes] = useState(0)
const [notFound, setNotFoundError] = useState(false)
const [isDisabled, setIsDisabled] = useState(false);

useEffect(() => {
getSingleArticle(article_id).then((article) => {
    setEachArticle(article);
    setIsLoading(false);
    setIsError(false);
}).catch((error) => {
    setIsLoading(false);
      if(error.status === 404){
        setNotFoundError(true)
      } else{
        setIsError(true);
      }
})
}, [article_id])

const datePublished = new Date(eachArticle.created_at);
    const fullDate = datePublished.toLocaleDateString();
    const time = datePublished.toLocaleTimeString();

const handleAddClick = () => {
    setIsDisabled(true)
    updateUserVote(article_id, 1).catch(() => {
        setOptimisticVotes((currentOptimisticVotes) => {
            return currentOptimisticVotes - 1
        })
        setIsError(true);
    })
    setOptimisticVotes((currentOptimisticVotes) => {
        return currentOptimisticVotes + 1
    })
}

const handleMinusClick = () => {
    setIsDisabled(true)
    updateUserVote(article_id, -1).catch(() => {
        setOptimisticVotes((currentOptimisticVotes) => {
            return currentOptimisticVotes + 1
        })
        setIsError(true);
    })
    setOptimisticVotes((currentOptimisticVotes) => {
        return currentOptimisticVotes - 1
    })
}

if (isLoading) {
    return (
      <div>
        <LoadingSpinner/>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <p>Whoops! Something went wrong ...</p>
      </div>
    );
  }

  if(notFound){
    return (
      <div>
      <ErrorComponent/>
      </div>
    )
  }

  const styles = {
    button: {
      cursor: 'pointer',
    },
    buttonDisabled: {
      cursor: 'not-allowed',
    },
  };

return (
    <section>
        <h1>{eachArticle.title}</h1>
        <p>Published on {fullDate} at {time}</p>
        <p>{eachArticle.body}</p>
        <img src={eachArticle.article_img_url} className="responsive"/>
        <p>Author: {eachArticle.author}</p>
        <p className="vote">Votes: {eachArticle.votes + optimisticVotes}
            <button disabled={isDisabled} onClick={handleAddClick} style={isDisabled ? styles.buttonDisabled : styles.button}>+1 Vote</button>
            <button disabled={isDisabled} style={isDisabled ? styles.buttonDisabled : styles.button} onClick={handleMinusClick}>-1 Vote</button>
        </p>
        <ListComments article_id={article_id}/>
    </section>
)


}


export default SingleArticle;