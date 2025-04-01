function CommentCard({comment}) {
    return (
        <li className="comment-card">
            <p>User: {comment.author}</p>
            <p>Created At: {comment.created_at}</p>
            <p>{comment.body}</p>
            <p>Votes:{comment.votes}</p>
        </li>
    )
}

export default CommentCard;