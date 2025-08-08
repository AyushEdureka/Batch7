const express =require('express')
const cors =   require('cors')

const app = express()
const PORT = 3000  //Address of Backend

//Setting for Middleware
app.use(express.json())
app.use(cors())   //Enable Cors


//Logical Post
app.post('/login',(req,res)=>{

const {name,email} = req.body

//Simple validation
 if(name && email){
    res.json({message:`Welcome To Amazon!  ${name}`})
 }else{
    res.json({message:'Name and Email are required'})
 }

 })


 app.listen(PORT,()=>{
    console.log("Server is running at http://localhost:3000")
 })

