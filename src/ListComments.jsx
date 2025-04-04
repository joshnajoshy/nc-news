import { useEffect, useState } from "react";
import { getComments } from "./api";
import CommentCard from "./CommentCard";
import { postComment } from "./api";

function ListComments({article_id}){
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [commentError, setCommentError] = useState(false);
    const [isError, setIsError] = useState(false);
    const [show, setShow] = useState(false);
    const [postCommentSuccess, setpostCommentSuccess] = useState(false)
    const [validationError, setValidationError] = useState({});
    const initialValues = {
        username: "",
        body: "",
        created_at: ""
    }
    const [formData, setFormData] = useState(initialValues)

    const timeStamp = Date.now()
    const datePublished = new Date(timeStamp).toISOString()
    formData.created_at = `${datePublished}`

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData((currentValue) => ({
            ...currentValue,
            [name]: value
        }))
    }

    const formValidation = () => {
        let errors = {};
    if (!formData.username) errors.username = 'Username is required';
    if (!formData.body) errors.body = 'This field is required';
    setValidationError(errors)
    return Object.keys(errors).length === 0;
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(formValidation()){
        setFormData(formData);
        setShow(false)
        setIsLoading(true)
        postComment(article_id, formData).then(() => {
            setComments(comments)
            setIsLoading(false)
            setpostCommentSuccess(true)
        }).catch((error) => {
            setIsLoading(false)
            setIsError(true)
            setpostCommentSuccess(false)
        })
        }
    }

    useEffect(() => {
        getComments(article_id).then((comments) => {
            setComments(comments)
            setIsLoading(false);
            setCommentError(false);
        }).catch((error) => {
            setIsLoading(false)
            setCommentError(true);
          })
    }, [article_id]);

    const handleAddComment = () => {
        setShow(true)
    }

    if(postCommentSuccess){
        return (
            <div>
                <p> Your comment has been posted please reload the page to see comment</p>
            </div>
        )
    }

    if (isLoading) {
        return (
          <div>
            <p> Loading ...</p>
          </div>
        );
      }

      if(isError){
        return (
            <div>
              <p>Whoops something went wrong ... </p>
            </div>
          );
      }

      if (commentError) {
        return (
          <div>
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
            {<span>{validationError.username}</span>}
            <br></br>
            <label htmlFor="body">Comment</label>
            <br></br>
            <input  onChange={handleChange} value={formData.body} type="text" id="body" name="body" ></input>
            {<span>{validationError.body}</span>}
            <br></br>
            <input type="submit" value="Submit"></input>
            </form> 
            </> : <></>}
            <h3>Comments</h3>
            {comments.map((comment) => {
                return <CommentCard setIsError={setIsError} comment={comment} key={comment.comment_id}/>
            })}
        </ul>
    )

}

export default ListComments;