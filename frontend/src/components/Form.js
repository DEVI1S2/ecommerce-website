import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import Axios from 'axios'
import './Form.css';


function Form() {
    let navigate = useNavigate();
    const [adm_name,setAdmin_name]=useState("");
    const [shop_name,setShop_name]=useState("");
    const [shop_id,setShop_id]=useState("0");
    const [shop_addr,setShop_addr]=useState("");
    const[email,setEmail]=useState("");
    const[phno,setPhno]=useState("0");
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    
    const register = (e)=> {

      e.preventDefault();
      Axios.post("http://localhost:3001/register", {
        adm_name:adm_name,
        shop_name:shop_name,
        shop_id:shop_id,
        shop_addr:shop_addr,
        email:email,
        phno:phno,
        username:username,
        password:password
      })
      .then((response) =>{
           alert("signed");
           console.log(response);
           navigate("/login");
        
      });
    };

  return (
    
     <body id="b">
      <div className='Info'>
       <form id='Myform'>
           <h1>REGISTER PAGE</h1>
        
        <label>ENTER YOUR SHOP_ID</label>
        <input id="u" type="number" value={shop_id} onChange={(e)=> {setShop_id(e.target.value);}}/>
        <label>ENTER YOUR SHOP-NAME</label>
        <input  id="u" type="text" value={shop_name} onChange={(e)=> {setShop_name(e.target.value);}}/>
        <label>ENTER THE ADMIN-NAME</label>
        <input id="u" type="text" value={adm_name} onChange={(e)=> {setAdmin_name(e.target.value);}}/>
        <label>ENTER YOUR SHOP-ADDRESS</label>
        <input id="u" type="textarea" value={shop_addr}onChange={(e)=> {setShop_addr(e.target.value);}}/>
        <label>ENTER YOUR EMAIL</label>
        <input id="u" type="text" value={email} onChange={(e)=> {setEmail(e.target.value);}}/>
        <label>ENTER YOUR PHONE-NUMBER</label>
        <input  id="u" type="number" value={phno} onChange={(e)=> {setPhno(e.target.value);}}/>
        <label>ENTER YOUR USERNAME</label>
        <input  id="u" type="text" value={username} onChange={(e)=> {setUsername(e.target.value);}}/>
        <label>ENTER YOUR PASSWORD</label>
        <input id="u" type="text" value={password} onChange={(e)=> {setPassword(e.target.value);}}/>
        
        <button onSubmit={register} id="h" value="Signup">Submit</button>
        <input id="h" type="reset" value="Reset"></input>
       
        </form>
        
        </div>
        </body>
        
        
    
    
  )
}

export default Form