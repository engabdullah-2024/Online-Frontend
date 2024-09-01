
import axios from "axios"
import { useState } from "react"
import {toast , Toaster} from "react-hot-toast"





function AddComplaints() {
  const [title , setTitle] = useState("")
 const [descirption , setDescirption] = useState("")



//  Function xogta kasoo qaadaayo form asagoo isticmaalaayo API
const HandlePostData = (e) => {
  e.preventDefault()
  axios.post("http://localhost:1000/server " , {
    "title": title,
    "descirption": descirption
   

  }).then(() => {
  
    // alert("Result has been added successfully")
    toast.success("Complaint has been sending successfully")
    setTitle("")
    setDescription("")


    //
    
  }).catch((error) =>{
    console.log(error)
  })
}  



const [isOpen, setIsOpen] = useState(false);
// Handle Close Button
const HandleCloseBtn = ()=>{
   setIsOpen(false)
}

     return <div className=" " >
           <div className="flex justify-center  absolute top-[100px] left-[500px] pt-20 " >
        <form  className="bg-white p-3 w-[300px] h-[300px] rounded text-center pt-[10%]  ">
            <input value={title}  onChange={(event)=>setTitle(event.target.value)} className="  w-[250px]   h-[40px] my-3 border-2 border-orange-500  " type="text"  placeholder="Enter title"/>
            <textarea value={descirption}  onChange={(event)=>setDescirption(event.target.value)}  className="border-2 border-orange-500 w-[250px]  h-[200px]" ></textarea>
            <button onClick={HandleCloseBtn}  className="bg-blue-800 px-6 py-2 rounded text-2xl ml-2">Close</button>
            <button onClick={HandlePostData}  className="bg-blue-800 px-6 py-2 rounded text-2xl ml-3">Save</button>
            {
                isOpen== true? <div></div> : <div></div>
            }
           
        </form>
    
        </div>

        <Toaster/>
    </div>

     
   
}

export default AddComplaints
