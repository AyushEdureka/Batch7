const express = require('express')

const app = express()

const PORT = 3000

app.use(express.json())

//Logic Part
app.get('/restraunt',(req,res)=>{
    res.send('List of All restraunt')
})

//Post: Place the order 
app.post('/order',(req,res)=>{
    res.send(`Order Place Successfully ! order details ${JSON.stringify(req.body)}`)
})


app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})