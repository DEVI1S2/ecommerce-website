import React from 'react'
import { useNavigate } from 'react-router';

function Logout() {
    let navigate = useNavigate();
    const logout= ()=>{
        localStorage.removeItem("shop_ID");
        navigate("/login");
    }
  return (
    <div>
      <button onClick={logout}>LOGOUT</button>
    </div>
  )
}

export default Logout