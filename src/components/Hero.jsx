import AddComplaints from "../pages/AddComplaints"

import { useState } from "react"


function Hero (){
    const [isOpen , setIsOpen] = useState(false)
    // Handle open button 
    const HandleOpenButton = () =>{
        setIsOpen(true)
    }
    return<div className="px-20 py-2 mt-10 flex justify-between transition duration-500 ease-in-out transform hover:translate-y-3 ">
<div>
<h1 className="text-8xl text-orange-500 font-bold mt-10 hover:text-white">Hi , I'm Abdalla</h1>
<p className="text-3xl text-white font-semibold mt-5 hover:text-orange-500" >Web Developer</p>

 <button    onClick={HandleOpenButton}            className="p-1 bg-orange-500 rounded text-white text-3xl font-bold w-[300px] mt-5 hover:bg-white hover:text-orange-500">Make Complaint</button>
{
    isOpen == true ? <AddComplaints/> : ""
}
</div>

   <img className="w-[400px] h-[400px] rounded"    src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1213.jpg?t=st=1724918171~exp=1724921771~hmac=baf8463a1466bc1a23d3f0b8d5dd2f27c7824fefdbd03bfc72719518dd2016ce&w=740"></img>
   {/* <AddComplaints /> */}
    </div>
}



export default Hero