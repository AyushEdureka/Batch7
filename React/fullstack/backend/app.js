const express =   require('express')
const cors   =    require('cors')
const port = 5000

const app = express()

//Middleware to parse JSON
app.use(express.json())
app.use(cors())  //Enable CORS for commuinication

//A Route : URL or path

app.get('/sales/product',(req,res)=>{


const products = [
    {id:1, name:'Laptop' , price : 1000} ,
    {id:2, name:'iphone' , price : 500} ,
    {id:3, name:'Smartwatch' , price : 200} ,
    {id:4, name:'Nike' , price : 100} 


];

res.json(products)

})

app.listen(port,()=>{
    console.log("Server running at http://localhost:5000")
})