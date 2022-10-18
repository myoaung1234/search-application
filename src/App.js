import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  
  useEffect(() => {
    loadUserData();
  }, [])

  const loadUserData = async () => {
    return await axios
    .get("http://localhost:5000/datas")
    .then((response) => setData(response.data))
  }


  return (
    <div className='App'>
      <input 
       type="text" 
       placeholder='Search......' 
       onChange={(e) => setQuery(e.target.value)} 
      />
      {
        data.filter((user) => 
            user.title.toLowerCase().includes(query.toLowerCase())
          ).map ((item) => 
          (
            <div className='container' key={item.title}>
                  <div className='image'>
                    <img src={item.image} alt="Fruits" />
                  </div>
                  <div className='inner'>
                    <p><span>Title:</span>{item.title}</p>
                    <p><span>Price:</span>{item.price}</p>
                    <p><span>Date:</span>{item.date}</p>
                  </div>
                </div>
            ))
      }
    </div>
  );
}

export default App;
