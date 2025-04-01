function ArticleCard({article}) {
return (
    <section>
    <h3>{article.title}</h3>
    <p>User: {article.author}</p>
    <p>Created At: {article.created_at}</p>
    <p>Votes: {article.votes}</p>
    <img src={article.article_img_url}/>
</section>
)
}

export default ArticleCard;