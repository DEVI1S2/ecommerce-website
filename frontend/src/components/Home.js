import React from 'react'
import {Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to = "/signup">SIGNUP</Link></li>
          <li><Link to = "/login">LOGIN</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Home

