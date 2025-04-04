import { deleteComment } from "./api";
import { useState } from "react";

function CommentCard({comment,setIsError}) {
const [deleteSuccess, setDeleteSuccess] = useState(false)
const datePublished = new Date(comment.created_at);
const fullDate = datePublished.toLocaleDateString();
const time = datePublished.toLocaleTimeString();

    const handleDeleteClick = () => {
        deleteComment(comment.comment_id).then(() => {
        setDeleteSuccess(true)
        }).catch((error) => {
            setIsError(true)
        })
    }

    if(deleteSuccess){
        return (
            <div>
                <p>Your comment has been deleted successfully...</p>
                <p>Please reload the page ... </p>
            </div>
        )
    }

    return (
        <li className="comment-card">
            <p>User: {comment.author} 
                {comment.author === 'grumpy19' ? <button onClick={handleDeleteClick}>Delete</button>: <></>}
            </p>
            <p>Commented on {fullDate} at {time}</p>
            <p>{comment.body}</p>
            <p>Votes:{comment.votes}</p>
        </li>
    )
}

export default CommentCard;