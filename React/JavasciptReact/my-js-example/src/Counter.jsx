import React , {useState} from "react";

function Counter(){

    const [count , setCount] = useState(0)

    const IncremnetCount = ()=>{
         setCount(count + 1)
    }
    
    return(
        <div>
            <p>Count : {count}</p>
            <button onClick={IncremnetCount} >AddToCart</button>
        </div>
    )
}

export default Counter;

