const express  =   require('express')
const mongoose =   require('mongoose')

const app = express()
app.use(express.json())  

//1. Connect with Database mongodb://localhost:27017

mongoose.connect("mongodb://localhost:27017/Studentbatch7")

.then(()=>console.log("Connected To MongoDB"))
.catch(err=>console.error("MongoDB Connection failed",err))

//2. Define Schema/Blueprint of data which you want to store in your databse
//Student Schema

const studentSchema =  new  mongoose.Schema({
        name:String,
        age: Number,
        grade:String
    })

 
 //3. Model/Collection - operation
 
 const Student =  mongoose.model("Student",studentSchema)

 //Route/URL - Express and Method

app.post('/add-student', async(req,res)=>{

    const newStudent =  new Student (req.body)
    await newStudent.save()
    res.send("Student Added Succesffully")
}) 

//Get the students
app.get('/students',async(req,res)=>{
    
const students =   await  Student.find()

res.json(students)

})



app.listen(3000,()=>{
    console.log("Server running on port 3000")
})