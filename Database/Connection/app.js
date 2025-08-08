// const express = require('express')
// const {MongoClient}   = require('mongodb')  //Connection between backend and database

// const app = express()
// const port = 3000

// //1. Step 1 Connect with Local Database 
// //Rule : ADddress of local database 'mongodb://localhost:27017/DATABASENAME'

// const MongoURL = 'mongodb://localhost:27017'

// //Step 2  Connect with Database

// MongoClient.connect(MongoURL)

// .then(client=>{
//     console.log('Connected To Mongodb')

//     const db = client.db('MYDB_myOrg')
//     const collection = db.collection('Test_Mydb')

//     //Insert a sample Document
//     collection.insertOne( {name:"Sample", type:"Demo"})
//     .then(()=>{
//         console.log('Sample Added')

//         app.listen(port,()=>{
//             console.log('Server running')
//         })
//     })

//     .catch(error=>console.error("Insert failed",error))
// })



// .catch(err => console.error('MongoDB Connection failed',error))




//Modify the code To Do Operations

const express = require('express')
const {MongoClient}   = require('mongodb')  //Connection between backend and database

const app = express()
const port = 3000


//Middleware 
app.use(express.json())

//1. Step 1 Connect with Local Database 
//Rule : ADddress of local database 'mongodb://localhost:27017/DATABASENAME'

const MongoURL = 'mongodb://localhost:27017'

//Step 2  Connect with Database

MongoClient.connect(MongoURL)

.then(client=>{
    console.log('Connected To Mongodb')

    const db = client.db('FrankCollege')
    const Studentcollection = db.collection('User')

    //Logic- Data will come from Fronted: You have to send The data to Backend

    app.post('/register',async(req,res)=>{
        const student = req.body
        
        try{
         const result = await Studentcollection.insertOne(student)
         res.status(201).json({message:'Student register Sucessfully'})

        }catch(error){ 
     res.status(500).json({message:'User registraion failed',error})
        }

    })

    app.listen(port,()=>{
        console.log('Backend Server Started')
    })

})

.catch(err => console.error('MongoDB Connection failed',error))