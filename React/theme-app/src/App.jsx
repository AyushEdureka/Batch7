import React , {useState, createContext , useContext} from "react";

const ThemeContext = createContext()

function ThemeProvider({children}){

  const [dark,setDark] = useState(false)

  const styles = {
    backgroundColor : dark ? "#121212"  :" #ffffff",
    color : dark ? "#ffffff" : "#121212",

  }

  return(
    <ThemeContext.Provider value = {{dark,setDark}}>
      <div style={styles}>
      {children}
      </div>
    </ThemeContext.Provider>
  )


}


function Button(){
    const {dark,setDark} = useContext(ThemeContext)

    return(  
    <button onClick={()=> setDark(!dark)}>
      Switch To {dark ? "Light" : "Dark"} Mode
    </button>
  )
}

function Home(){
  return(
    <div>
      <h1>Hello</h1>
      <p>How are you</p>
    </div>
  )
}

function App(){
  return(
   <ThemeProvider>
    <h1>Theme siwtch</h1>
    <Button />
    <Home />
   </ThemeProvider>
  )
}

export default App