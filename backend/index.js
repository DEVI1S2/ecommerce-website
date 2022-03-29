const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "price_neg"
})

app.post('/register', (req, res) =>{
    
    const shop_id=req.body.shop_id;
    const adm_name=req.body.adm_name;
    const shop_name=req.body.shop_name;
    const shop_addr=req.body.shop_addr;
    const email=req.body.email;
    const phno=req.body.phno;
    const username=req.body.username;
    const password=req.body.username;

    db.query("INSERT INTO shop(shop_id,adm_name,shop_name,shop_addr,email,phno,username,password) VALUE (?,?,?,?,?,?,?,?)",
    [shop_id,adm_name,shop_name,shop_addr,email,phno,username,password],
    (err,result)=>{
        console.log(result);
        if(err){
            return console.log(err);
        }
        res.send({result});
    }
    );   
});
app.post('/login', (req, res) =>{
    const username = req.body.username;
    const password=req.body.password;

    db.query("SELECT * FROM shop WHERE username = ? and password = ?", [username,password],
    (err,result)=>{
        console.log(result);
        console.log(result[0].shop_id)
        // if(err){
        //     return console.log(err);
        // }
        if(err){
            res.send({err: err});
        }
        if(result.length>0){
            //    res.send(result);
            shopid= result[0].shop_id;
           res.status(200).send({shopid}); 
        }
        
        else{
            res.send({message: "wrong username or passsword"});
        }
           
    }
    );

});
app.get('/getshopadminfo/:shopid', (req, res) =>{
    const shop_id = req.params.shopid;
    // console.log("shopid is " + shop_id );

    db.query("SELECT * FROM shop WHERE shop_id = ?", [shop_id],
    (err,result)=>{
        console.log("ha"+result);
        if(err){
            return console.log(err);
        }
        // usrname= result[0].username;
        res.status(200).send({result});
    }
    );   
});
app.get('/getproducts/:shopid', (req, res) =>{
    const shop_id = req.params.shopid;
    // console.log("shopid is " + shop_id );

    db.query("SELECT * FROM products WHERE shop_id = ?", [shop_id],
    (err,result)=>{
        console.log("haaai"+result);
        if(err){
            return console.log(err);
        }
        // usrname= result[0].username;
        res.status(200).send({result});
    }
    );   
});
app.post('/addproduct', (req, res) =>{
    const shopid = req.body.shopid;
    const productname = req.body.prodname;
    const price = req.body.price;

    db.query("INSERT INTO products (shop_id,p_name,price) VALUES (?,?,?)", [shopid,productname,price],
    (err,result)=>{
        console.log(result);
        if(err){
            return console.log(err);
        }
       res.send({result});
    }
    );   
});
const port = process.env.PORT || 3001;
app.listen(port,()=>{console.log("Server Ready at "+port)});