import { useRouter } from 'next/router'
import {useState,useEffect,createContext} from 'react'
import { NEXT_URL } from '@/config/index'

const AuthContext = createContext()

export const AuthProvider = ({children,})=>{
    const [user,setUser]=useState(null)
    const[error,setError]=useState(null)

    //Regitser//
    const register = (user)=>{
        console.log(user);
    }
    //Login//
    const login = async ({email:identifier,password})=>{
       
        const res = await fetch(`${NEXT_URL}/api/login`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                identifier,
                password
            })
        })

        const data = await res.json()
        console.log(data);
    }
    //Logout//
    const logout = ()=>{
        console.log('Logout');
    }

    //Check user logged in//
    const checkUserLoggedIn=()=>{
        console.log('Logged In');
    }


    return ( 
        <AuthContext.Provider value={{user,error,register,login,logout,checkUserLoggedIn}} >
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContext