import { Link } from "react-router";

function TopicCard({topic}) {
return (
    <section className="topics">
        <h2><Link to={`/topics/${topic.slug}`}>{topic.slug}</Link></h2>
        {topic.slug === 'coding' ? <img src='../planning/coding.jpg'/> : <img src={topic.img_url}/>}
    </section>
)
}

export default TopicCard;