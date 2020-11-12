import React from 'react';
import { useEffect, useState } from 'react';
const User = (props) => {

   

   const {name,email,picture,website,phone}=props.user;
   const [mobile,setMobile]=useState('');

   

   const showphone=()=>setMobile(phone);
   
   const Add=props.Add;

   const userStyle={

    border : '2px solid red',
    margin : '10px',
    borderRadius : '10',
    padding : '10px',
    display : 'flex',
    width:'60%'
   }

    return (
        <div style={userStyle}>
            
            <div style={{'marginTop':'25px'}}
            > <img src={picture.large}></img></div>

            <div style={{'marginLeft':'20px'}}>
                   
                   <h1>Name : {name.first} {name.last}</h1>
                   <p>email : {email}</p>
                   <p> <a target="_blank" href={website}>Learn About ME</a></p>
    <p>phone :{mobile}</p>
                <button onClick={showphone}>Show PhoneNumber</button>
                   <button onClick={()=>Add(name)}>Add me</button>
                </div>
        
            
        </div>
    );
};

export default User;