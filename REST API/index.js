const express =require('express');
const app=express();
const path=require('path');
const { v4: uuid } = require('uuid');

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

const comments =[
    {
        id:uuid(),
        username:'pom',
        comment:'heloooo'
    },
    {
        id:uuid(),
        username:'com',
        comment:'heyyyy'
    },
    {
        id:uuid(),
        username:'dom',
        comment:'all the best'
    },
    {
        id:uuid(),
        username:'tom',
        comment:'just seeing'
    }
]
app.get('/comments',(req,res)=>{
    res.render('comments/index',{comments})
})
app.post('/comments',(req,res)=>{
    const{username,comment}=req.body;
    comments.push({username,comment});
    res.redirect('/comments');
})
 
app.get('/comments/new',(req,res)=>{
    res.render('comments/new')
})

app.get('/comments/:id',(req,res)=>{
    const{id}=req.params;
    const comment =comments.find(c=>c.id=== id)
    // res.render('/comments/poi')
   res.render('comments/show',{comment})
})

app.listen(3000,()=>{
    console.log("ON PORT  3000")
})