import React, { useState } from "react";

function Submit(){

    const [name,setName] = useState(" ")

    function handleSubmit(e){
      e.preventDefault();
      alert('Form submitted ' + name)
    }

return(
    <div>
        <h2>Form Submit</h2>
        <form onSubmit={handleSubmit}>
            <input 
            onChange={ (event)=> setName(event.target.value)}
            type="text"
            placeholder="Enter Name"
            />
            <button type="submit">Submit</button>
        </form>
    </div>
)

}
export default Submit