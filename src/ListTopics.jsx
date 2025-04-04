import { getAllTopics } from "./api";
import {useState, useEffect} from 'react';
import TopicCard from "./TopicCard";
import LoadingSpinner from "./LoadingSpinner";

function ListTopics() {
 const [topics, setTopics] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 const [isError, setIsError] = useState(false);

 useEffect(() => {
    getAllTopics().then((topics) => {
        setTopics(topics)
        setIsLoading(false);
        setIsError(false);
    }).catch((error) => {
      console.log(error, 'hello')
      setIsLoading(false)
      setIsError(true);
    }) 
}, [])

if (isLoading) {
    return (
      <div>
       <LoadingSpinner/>
      </div>
    );
  }

if (isError) {
    return (
      <div className="event-list">
        <p>Whoops! Something went wrong ...</p>
      </div>
    );
  }

  return (
    <section>
        <ul>
        {topics.map((topic) => {
            return <TopicCard topic={topic} key={topic.slug}/>
        })}
    </ul>
    </section>
)



}


export default ListTopics;