const express=require('express');
const app=express();
app.use((req,res)=>{
    // console.log("hurray");
    res.send({color:'red'})
})
app.listen(3000,()=>{
    console.log("Listening 3000")
})   