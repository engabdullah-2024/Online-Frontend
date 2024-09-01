
import { useState , useEffect } from "react";
import {  useParams } from "react-router-dom"
import axios from "axios";
// import { useNavigate } from "react-router-dom";


function  Details(){

        const [single,setSingle]= useState([]);
        
        const params= useParams();
        // const navigate = useNavigate();

        const HandleSingleData= ()=>{
            axios.get(`http://localhost:3000/result/single/${params._id}`).then((response)=>{
                    setSingle(response.data.title);
                    setSingle(response.data.description);

            }).catch((error)=>{
                
                console.log(error)
            })
        }

        useEffect(()=>{
            HandleSingleData()
        },[])

    return <div className="">
        <SideNav/>
        <div className="ml-[21%]">
            <button className="bg-red-300 py-2 px-3 rounded ">Delete</button>
            {
              single.map((item)=>{
                return <div  className="pt-20">
                    <h1 className="font-semibold text-2xl">{item.title}</h1>
                    <p className="text-2xl">{item.description}</p>
                </div>
              }) 
            }
            
           
        </div>
        
    </div>
}
export default Details