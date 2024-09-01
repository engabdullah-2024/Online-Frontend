import {Routes , Route} from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import Complaints from "./pages/Complaints"
import LogOut from "./pages/LogOut"
import Home from "./pages/Home"
 import SideNav from "./components/sideNav"

function App (){
  return <Routes>
 
        <Route path="/dashboard"  element={<Dashboard />} />
        <Route path="/complaints" element={<Complaints />} />
      
        <Route path="/logout" element={<LogOut />} />
        <Route path="/" element={<Home />} />
      
 
    </Routes>
}


export default App