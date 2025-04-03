import { useEffect, useState } from "react";
import { getComments } from "./api";
import CommentCard from "./CommentCard";
import { postComment } from "./api";

function ListComments({article_id}){
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [show, setShow] = useState(false);
    const initialValues = {
        username: '',
        body: ''
    }
    const [formData, setFormData] = useState(initialValues)

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData((currentValue) => ({
            ...currentValue,
            [name]: value
        }))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setFormData(formData);
        postComment(article_id, formData).catch((error) => {
            console.log('error')
        })
    }

    console.log(formData)

    useEffect(() => {
        getComments(article_id).then((comments) => {
            setComments(comments)
            setIsLoading(false);
            setIsError(false);
        }).catch((error) => {
            setIsLoading(false)
            setIsError(true);
          })
    }, [article_id]);

    const handleAddComment = () => {
        setShow(!show)
    }

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
            <p>No comments for this article yet ... </p>
          </div>
        );
      }

    return (
        <ul>
            <button onClick={handleAddComment}>Add New Comment</button>
            {show ? <>
            <form action={`/articles/${article_id}/comments`} method='POST' onSubmit={handleSubmit}>
            <label htmlFor="name">Username</label>
            <br></br>
            <input onChange={handleChange} value={formData.username} type="text" id="username" name="username" ></input>
            <br></br>
            <label htmlFor="body">Comment</label>
            <br></br>
            <input  onChange={handleChange} value={formData.body} type="text" id="body" name="body" ></input>
            <br></br>
            <input type="submit" value="Submit"></input>
            </form> 
            </> : <></>}
            <h3>Comments</h3>
            {comments.map((comment) => {
                return <CommentCard comment={comment} key={comment.comment_id}/>
            })}
        </ul>
    )

}

export default ListComments;