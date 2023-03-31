import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function GitHubUser({name, location, avatar}){
  return(
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} height={150} alt={name}/>
    </div>
    );
}

function App() {
  const [data, setData] = useState(null);
  useEffect(()=>{
    fetch(`https://api.github.com/users/piumonline`
    )
    .then((response)=>response.json())
    .then(setData);
  },[])

  // if(data) 
  return (
    <GitHubUser 
      name={data.name} 
      location={data.location}
      avatar={data.avatar_url}/>
  )
}

export default App;
