const express =require('express');
const app=express();
const path=require('path');


app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

const comments =[
    {
        username:'pom',
        comment:'heloooo'
    },
    {
        username:'com',
        comment:'heyyyy'
    },
    {
        username:'dom',
        comment:'all the best'
    },
    {
        username:'tom',
        comment:'just seeing'
    }
]
app.get('/comments',(req,res)=>{
    res.render('comments/index',{comments})
})
app.post('/comments',(req,res)=>{
    console.log(req.body)
    res.send("IT Worked");
})
app.get('/comments/new',(req,res)=>{
    res.render('comments/new')
})
app.listen(3000,()=>{
    console.log("ON PORT  3000")
})