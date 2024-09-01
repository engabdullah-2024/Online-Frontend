
import { NavLink } from "react-router-dom"
 
function Header (){
 
    return<div className="bg-orange-500 flex justify-between px-20 py-2   text-white w-full hover:bg-white hover:text-orange-500">
       <div  className="flex gap-5">
       <i class="fa-solid fa-code mt-1 text-3xl"></i>
        <h1 className="text-3xl font-bold"> CWA</h1>

       </div>
        <ul className="flex gap-5 text-2xl font-semibold">
         <li>Home</li>

          <li>About Us</li>
        </ul>


   
 <NavLink to="/sideNav"><button className="bg-white text-orange-500 p-1 w-[100px] rounded hover:bg-orange-500 hover:text-white">Admin Area</button></NavLink> 
    
    </div>
}


export default Header