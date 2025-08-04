//Import All the Modules
const express   =     require('express')

const app = express()   //Created Express Application

//get Method: Get the Information From backend
// Define: URL(Path) and Response

app.get('/login' , (req,res)=>{

res.send("Logged In Successfully")

})

app.get('/Home' , (req,res)=>{

res.send("Home Page")

})

app.get('/Support' , (req,res)=>{

res.send(`<h1>Support Page</h1>
        <p>Hii Om</p>
    `)

    


})

app.get('/' , (req,res)=>{

res.send("Backend Started")

})


//Make The Server Start Listen To Port
app.listen(3000,()=>{
    console.log("Server is Running at http://localhost:3000")
})
