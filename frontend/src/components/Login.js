import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import Axios from 'axios'
import './Form.css';


function Login() {
    let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const[password,setPassword]=useState("");
    
    const login = (e)=> {
      e.preventDefault();
      Axios.post("http://localhost:3001/login", {
        username: username,
        password:password
      })
      .then((response) =>{
        console.log(response);
        var shop_id=response.data.shopid;
        localStorage.setItem('shop_ID',shop_id);
    
        navigate("/products");
      })
      .catch((err)=>{
        console.log(err)
        alert('fail');
        console.log(err.respose)
        alert(err.respone.data.error.message)
      })
    };

  return (
    <body id='b'>
    <div id='Myform'>
        <h1>LOGIN PAGE</h1>
        <form onSubmit={login}>
        <label>Username</label>
        <input id="u"type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
        <label>Password</label>
        <input id="u" type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} />

        <input id='h' type="submit" value="Login"/>
        
        </form> 
    </div>
    </body>
  )
}

export default Login