import { Link } from "react-router";

function ArticleCard({article}) {
return (
    <li className='article-card'>
    <h1><Link className='articleTitle' to={`/articles/${article.article_id}`}>{article.title}</Link></h1>
    <p>Author: {article.author}</p>
    <p>Created At: {article.created_at}</p>
    <p>Votes: {article.votes}</p>
    <img className="responsive" src={article.article_img_url}/>
</li>
)
}

export default ArticleCard;