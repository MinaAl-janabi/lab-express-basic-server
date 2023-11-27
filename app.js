// IMPORT PACKAGES
// Here you should import the required packages for your Express app: `express` and `morgan`
const express =require("express");
const morgan =require('morgan')



// CREATE EXPRESS APP
const app=express();
 app.use(express.static('public'));
 app.use(express.json());
 app.use(morgan('dev'));

app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/views/index.html")
});
app.get("/blog", (req,res)=>{
    res.sendFile(__dirname+"/views/blog.html")
});
app.get("/api/projects", (req,res)=>{
    res.json(projects)
})
app.get("/api/articles", (req,res)=>{
    res.json(articles)
})
app.get((req,res)=>{
    res.status(404).sendFile(__dirname+"/views/not-found.html")
})

app.listen(5005,()=>{
    console.log("server listening on port 5005");
});


app.listen(5005, () => console.log("My first app listening on port 5005! "));