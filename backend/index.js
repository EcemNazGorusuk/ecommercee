const express = require('express');
const mysql = require('mysql');
//const bcrypt = require('bcrypt');


const app =express();
app.use(express.json());
app.listen(3000,() => console.log('server running on port 3000'));

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'21012101',
    database:'shopuniverse'
})


connection.connect((err)=> {
    if(err)
    {
        console.log('Error connection to mySql database = ',err);   
    }
    console.log('Mysql successfully connected!');
})



app.post("/createUsers",async (req,res)=>{
    const {username,password,email,is_admin} = req.body;
    try {
        let sql = "INSERT INTO users (username,password,email,is_admin) VALUES(?, ?, ?, ?)";
        connection.query(
            sql,
            [username,password,email,is_admin],
            (err,results,fields) =>{
                if (err) {
                    console.log("Error while inserting a user into the database",err);
                    return res.status(400).send();
                }
                return res
                .status(201)
                .json({message:"new user successfully created!"});
            }
        );
    } catch (error) {
        console.log(error);
        return res.status(500).send();


    }
});


app.get("/read",async (req,res) => {
    try {     
        let sql = "SELECT * FROM  Example";
        connection.query(sql,(err,results,fields)=> {
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            res.status(200).json(results);
        });
    } catch (error) {
        console.log(err);
        return res.status(500).send();
    }
});