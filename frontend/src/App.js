import React from 'react'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from './components/Home'
import Form from './components/Form'
import Login from './components/Login'
import Products from './components/Products'
import AddProduct from './components/AddProduct';
import Logout from './components/Logout';

function App() {
  return (
   
    <div>
      
     <Router>
     <Logout />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Form />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/addproduct" element={<AddProduct />} />
      </Routes>
    </Router>
    </div>
    
  );
}

export default App