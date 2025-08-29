import React from "react";

function ClickEvent(){

  function handleClick(){
    alert("Product Added To Cart")
  }

    return(
        <div>
            <h2>Click Event Example</h2>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}
export default ClickEvent