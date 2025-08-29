import  {Routes,Route,Link} from "react-router-dom";
import Home from "./Home";
import Conatct from "./Contact";
import NotFound from "./NotFound";


function App(){
  return(
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact US</Link>
       </nav> 

     <Routes>
     <Route path="/home" element={<Home />} /> 
     <Route path="/contact"  element={<Conatct />} />
     <Route path="*"  element={<NotFound />} />
     </Routes>
 



    </div>
  )
}

export default App

