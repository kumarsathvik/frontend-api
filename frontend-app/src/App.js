import React, { useState, useEffect } from 'react';
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.thedogapi.com/v1/images/search?limit=10')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  return (
    <div>
      <h1>Posts</h1>
      {data.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <img src={post.url}></img>
</div> ))}
</div> );
}
export default App;