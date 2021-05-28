import { useRouter } from 'next/router'
import {useState,useEffect,createContext} from 'react'
import { API_URL } from '@/config/index'

const AuthContext = createContext()

export const AuthProvider = ()=>{
    const [user,setUser]=useState(null)
    const[error,setError]=useState(null)

    

}