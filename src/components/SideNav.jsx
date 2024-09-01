import { NavLink } from "react-router-dom"
// import { useState, useEffect } from "react"
function SideNav (){

    return<div className="flex flex-col w-[20%] bg-blue-800 text-white fixed ">
        <ul className="text-3xl" >
        <NavLink to= "/dashboard">   <li>Dashboard   <i class="fa-brands fa-microsoft"></i></li> </NavLink>
           <NavLink to= "/complaints"><li>Complaints   <i class="fa-solid fa-book"></i></li></NavLink> 
           <NavLink to= "/logout"> <li>LogOut        <i class="fa-solid fa-right-from-bracket"></i></li></NavLink>
        </ul>
    </div>
    
}


export default SideNav