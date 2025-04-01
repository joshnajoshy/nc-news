import { Link } from "react-router";

function ArticleCard({article}) {
return (
    <section>
    <Link className='articleTitle' to={`/articles/${article.article_id}`}>{article.title}</Link>
    <p>Author: {article.author}</p>
    <p>Created At: {article.created_at}</p>
    <p>Votes: {article.votes}</p>
    <img className="responsive" src={article.article_img_url}/>
</section>
)
}

export default ArticleCard;