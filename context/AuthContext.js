import { useRouter } from 'next/router'
import {useState,useEffect,createContext} from 'react'
import { API_URL } from '@/config/index'

const AuthContext = createContext()

export const AuthProvider = ({children,})=>{
    const [user,setUser]=useState(null)
    const[error,setError]=useState(null)

    //Regitser//
    const register = (user)=>{
        console.log(user);
    }
    //Login//
    const login = ({email:identifier,password})=>{
        console.log({identifier,password});
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