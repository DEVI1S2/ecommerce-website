import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import Axios from 'axios'

function AddProduct() {
    let navigate = useNavigate();
    const [productname, setProductrnameReg] = useState("");
    const [price, setPrice] = useState("");
    
    const addProduct = (e)=> {
        let shopid = localStorage.getItem('shop_ID');
      e.preventDefault();
      Axios.post("http://localhost:3001/addproduct", {
        shopid: shopid,
        prodname: productname,
        price: price
      })
      .then((response) =>{
        alert("product added");
        console.log(response);
        navigate("/products");
      });
    };

  return (
    <div>
        <form onSubmit={addProduct}>
        <label>Product Name</label>
        <input type="text" value={productname} onChange={(e)=>{setProductrnameReg(e.target.value)}} />
        <br/>
        <label>Price</label>
        <input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}} />
        <input type="submit" value="ADD"/>
        </form> 
    </div>
  )
}

export default AddProduct