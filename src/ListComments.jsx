import { useEffect, useState } from "react";
import { getComments } from "./api";
import CommentCard from "./CommentCard";

function ListComments({article_id}){
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        getComments(article_id).then((comments) => {
            setComments(comments)
            setIsLoading(false);
            setIsError(false);
        }).catch((error) => {
            setIsError(true);
          })
    }, [article_id]);

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
        <ul>
            <h3>Comments:</h3>
            {comments.map((comment) => {
                return <CommentCard comment={comment}/>
            })}
        </ul>
    )

}

export default ListComments;