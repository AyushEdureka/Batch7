import React from "react";

function ChangeMouse(){

 function handleMouseOver(){
    alert('Mouse Entered')
 }

return(
    <div>
        <h1>hii</h1>
        <p onMouseOver={handleMouseOver}>Hover Over me</p>
    </div>
)



}
export default ChangeMouse