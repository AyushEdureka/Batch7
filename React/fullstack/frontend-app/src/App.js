import React , {useState , useEffect } from "react";

function App(){
const [products , setProducts ] = useState([])

//Fetch Data From backend in React

useEffect(()=>{
  fetch('http://localhost:5000/sales/product')
  .then(response => response.json())
  .then(data     =>     setProducts(data))

},[])


return(
  <div>
    <h1>Product List</h1>
    <ul>
        {products.map(xyz=>(
          <li key={xyz.id}
          >{xyz.name} - {xyz.price}</li>
        ))}
    </ul>
  </div>
)

}
export default App