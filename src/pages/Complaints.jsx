
import axios from "axios"
import {useState , useEffect} from "react"

import { Link } from "react-router-dom"
import {toast , Toaster} from "react-hot-toast"







function Complaints() {


const [results, setResults] = useState([])
    //  Function that shows the API

const handleGetData = () =>{
    axios.get("http://localhost:1000/results") .then((response) =>{

        setResults(response.data)
    }).catch((error) =>{
        console.log(error)
    })
    
  
}


useEffect(() =>{
    handleGetData()
})


const deletResult = (id) =>{
    axios.delete(`http://localhost:1000/result/deletes/${id}`).then(() =>{
        toast.success("Complaint has been deleted successfully")
        // alert("Result haas been deleted successfully")

    }).catch((error) => console.log(error))
}

    return<div className=" px-[20px] py-[10px] ml-[21%]  rounded-[10px]   h-[150px]">
            <h1> This is   Page </h1>
            <div>
                <table className="w-full text-center">
                   
                    {
                        results.map((data) =>{
                            return<div className="bg-white rounded w-[500px] flex justify-between">

                              <div>
                              <h1 className="border-2 p-1"> {data.title} </h1>
                                <h1 className="border-2 p-1"> {data.descirption} </h1>
                                </div>

                                <div>
                                <button onClick={() => deletResult(data._id)}    className="bg-red-400 text-white px-3 rounded  py-1" >Delete</button> 
                          {/* <Link to= {`/details/${data._id}`}>       <td className="bg-green-800 py-1 px-3 text-white rounded hover:bg-black hover:text-white border[1px]"      onClick={handleGetData}>Edit</td></Link> */}
                          <button className="bg-blue-800 text-white px-3 py-1 rounded">Veiw</button>
                                </div>
                          
                              
                          </div>
                            
                        })
                    }
                </table>
            </div>
<Toaster />
    </div>
}

export default Complaints

