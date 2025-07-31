const  http   =  require('http')

//STEP 2 : Create The Server / BACKEND

http.createServer((request,response)=>{

response.write("HII EVERYONE FROM BACKEND")   
response.write("Bye - Bye")
response.write("Hello")

response.end()


}).listen(3000)  //Step 3 Start the server

console.log("Server Running at http://localhost:3000 ")




//www.amazon.com 