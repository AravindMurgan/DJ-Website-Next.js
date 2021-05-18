import { useEffect,useState } from "react";
import axios from 'axios';


export default function dummy() {
    const [data,setData]=useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setData(res.data) )
    },[])

    console.log(data)
    return (
        <div>
            
        </div>
    )
}
