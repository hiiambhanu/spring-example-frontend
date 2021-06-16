import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
function Course(props) {
  let {courseId} = useParams();
  const [course, setCourse] = useState({});
  useEffect(() => {
    fetch(`https://spring-example-bhanu.herokuapp.com/courses/${courseId}`).then(blob => blob.json()).then(data => setCourse(data));
  }, [courseId])

  return (
    <div className="App">
      <header className="App-header">
        <h1> {course.name}</h1>
        <h3>
            {course.description}
        </h3>
      </header>
    </div>
  );
}

export default Course;
