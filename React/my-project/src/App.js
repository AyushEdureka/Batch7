import React from "react";
import Profile from "./ProfileCard";



function App(){

    return(
      <div>
        
       <h1 style={  {color:'red',textAlign:'center', backgroundColor:'lightblue',padding:'30px',marginBottom:'10px' }     } >Meet Our Team</h1>
       <Profile />
      </div>
    )

}

export default App