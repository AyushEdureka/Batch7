import React from "react";

function Greetings(){

    const hour = new Date().getHours();

    const greetingMessage = hour < 12 ? "Good Morning" : hour < 17 ? "Good Afternoon" : " Good Eve"


    return(
        <div>
            <h1>Hii ,{greetingMessage} </h1>
            <p>Welcome to our Shipsy</p>
        </div>
    )

}

export default Greetings