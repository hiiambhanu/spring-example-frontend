import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import Grid from "../components/Grid"
function Topic(props) {
  let {topicId} = useParams();
  const [topic, setTopic ] = useState([]);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch(`https://spring-example-bhanu.herokuapp.com/topics/${topicId}`).then(blob => blob.json()).then(data => setTopic(data));
    fetch(`https://spring-example-bhanu.herokuapp.com/topics/${topicId}/courses`).then(blob => blob.json()).then(data => setCourses(data));
  }, [topicId])

  return (
    <div className="App">
      <header className="App-header">
          <h1>{topic.name}</h1>
          <small> {topic.description} </small>
          <h4>Courses to explore in {topic.name} </h4>
          <Grid topics={courses} type="courses"/>
      
      </header>
    </div>
  );
}

export default Topic;
