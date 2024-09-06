// import express from express;
// require('dotenv').config();
// const express = require('express');
import express from "express";
import dotenv from "dotenv"
dotenv.config();
const app = express();
console.log("port",process.env.PORT);
const port = process.env.PORT || 3001;



app.get('/',(req,res)=>{
    res.send("<h1>Hello WORLD!!!</h1>");
})

app.get('/twitter',(req,res)=>{
    res.send("<h2>I have a github Account</h2>");
})

app.get('/twitter',(req,res)=>{
    res.send("<h2>I have a github Account</h2>");
})

app.listen(port,()=>{
    console.log(`your project is running on this port ${port}`);
    
})