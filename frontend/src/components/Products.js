import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import {Link } from "react-router-dom";
import './css/Products.css'

function Products() {
  let [adm_name , getAdmin] = useState("");
  let [shop_name , getShopName] = useState("");
  let [products , showProducts] = useState([]);

  useEffect( () =>{
    getAdminInfo(); 
    getProducts();
  } , [] )

  const getAdminInfo = ()=> {
    let shopid = localStorage.getItem('shop_ID')
    Axios.get("http://localhost:3001/getshopadminfo/"+shopid)
    .then((response)=>{
      // console.log(response);
      let shopinfo = response.data.result[0];
      let username = shopinfo.username;
      let shopname = shopinfo.shop_name;
      getAdmin(username);
      getShopName(shopname)
      // console.log(username);
    })
  }

  const getProducts = () =>{
    let shopid = localStorage.getItem('shop_ID');
    Axios.get("http://localhost:3001/getproducts/"+shopid)
    .then((response)=>{
      let resp= response.data.result;
      console.log(resp);
      showProducts(resp);
    })
  }
  return (
    <div>
      <p>Products</p>
      <h1>Welcome {adm_name}</h1>
      <h1>{shop_name}</h1>
      <Link to = "/addproduct">ADD PRODUCT</Link>
      <table>
  <thead>
    <tr>
      <th>product name</th>
      <th>price</th>
    </tr>
  </thead>
  <tbody>
    
    {products.map((product=>
      <tr key={product.pid}>
      <td>{product.p_name}</td>
      <td>{product.price}</td>
    </tr>
    ))}
    
  </tbody>
</table>
    </div>
  )
}

export default Products