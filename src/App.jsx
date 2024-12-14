import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/music`).then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);

  return (
    <>
      {data.map((item, index) => (
        <div className="musicEl" key={index}>
          <h4>{item.title}</h4>
          <audio src={item.link} controls></audio>
        </div>
      ))}
    </>
  );
  
}

export default App

