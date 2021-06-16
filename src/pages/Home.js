import { useState, useEffect} from 'react';
import '../App.css';
import Grid from "../components/Grid"
function Home() {
  const [topics, setTopics ] = useState([]);

  useEffect(() => {
    fetch('https://spring-example-bhanu.herokuapp.com/topics').then(blob => blob.json()).then(data => setTopics(data));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
          <h1>Topics to Explore</h1>
        <Grid topics={topics} type="topics" />
      </header>
    </div>
  );
}

export default Home;
