
import { useState , useEffect } from "react"
import axios from "axios"
// ID ga kor yaalo soo qabo
import { useParams } from "react-router-dom"
import {useNavigate} from "react-router-dom"
import {toast , Toaster} from "react-hot-toast"





function UpdateComplaint (){
    const [tite , setTitle] = useState("")
    const [descirption , setDescirption] = useState("")



    const params = useParams()

    // API oo soo bandhigaayo 1
const getSIngleResult = () =>{
    axios.get(`http://localhost:1000/result/single/${params.id}`).then((respone)=>{
setTitle(respone.data.tite)
setDescirption(respone.data.descirption)


    }).catch((error) =>{
        console.log(error)
    })
}
useEffect(() =>{
    getSIngleResult()
},[])


// ApI oo xogta update gareenaayo
const handleUpdateData = (e) =>{
    e.preventDefault()
    axios.put(`http://localhost:1000/exam/update/${params.id}`,{
        "title": tite,
        "descirption": descirption
     
    }).then(() =>{
        // alert("Result has been updated successfully")
        toast.success("Result has been updated successfully")
        
        navigate("/results")
    }).catch((error) =>{
        console.log(error)
    })
 }
    return<div></div>
}














export default UpdateComplaint