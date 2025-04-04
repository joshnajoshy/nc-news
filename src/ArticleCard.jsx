import { Link } from "react-router";

function ArticleCard({article}) {
    const datePublished = new Date(article.created_at);
    const fullDate = datePublished.toLocaleDateString();
    const time = datePublished.toLocaleTimeString();

    

return (
    <li className='article-card'>
    <h2><Link className='articleTitle' to={`/articles/${article.article_id}`}>{article.title}</Link></h2>
    <p>Author: {article.author}</p>
    <p>Published on {fullDate} at {time}</p>
    <p>Votes: {article.votes}</p>
    <img className="responsive" src={article.article_img_url}/>
</li>
)
}

export default ArticleCard;