function CommentCard({comment}) {
    let datePublished;
    
    if(comment.created_at === null){
        const timeStamp = Date.now()
        datePublished = new Date(timeStamp)
    } else {
        datePublished = new Date(comment.created_at);
    }

    const fullDate = datePublished.toLocaleDateString();
    const time = datePublished.toLocaleTimeString();

    return (
        <li className="comment-card">
            <p>User: {comment.author}</p>
            <p>Commented on {fullDate} at {time}</p>
            <p>{comment.body}</p>
            <p>Votes:{comment.votes}</p>
        </li>
    )
}

export default CommentCard;