import React , {useState} from "react";

function ChangeEvent(){

  
    const [text,setText] = useState("")

   function handleChange(event){
            setText(event.target.value)
   }

return(
    <div>
        <h2>Change Event Example</h2>
        <input type="text" onChange={handleChange}  placeholder="Type here..." />
        <p> You Typed : {text}</p>
    </div>
)

}
export default ChangeEvent