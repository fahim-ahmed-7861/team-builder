import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import User from './components/User/User';
function App() {

  const [users,setUsers]=useState([]);

  const [team,setTeam]=useState([]);

  useEffect(()=>{

    fetch('https://randomuser.me/api?results=15')
    .then(res=>res.json())
    .then( data => setUsers(data.results))


  },[])
  
  const Add=(name)=>
  {
    const fullName=name.first+' '+name.last;
    setTeam([...team,fullName]);

    console.log(team);
  }

  return (
    <div >

       <h1>Team Builder : </h1>

       <ul>
          

          {
            team.map((m,idx)=><li key={idx}>{m}</li>)
          }
      

       </ul>

       
        
        
        

        {
          
        users.map(user => <User user={user} key={user.email} Add={Add}></User>)
        }
       

      
    </div>
  );
}

export default App;
