import {auth,provider } from "../confiar/firebase"
import { signInWithPopup} from "firebase/auth"
import	{useState, useEffect,useRef} from "react"
import Cookies from "universal-cookie"
const cookies = new Cookies()



export const Auth = (props)=>{
    const {setIsAuth} = props
    const signInWithGoogle = async ()=>{
        try {
         const result =  await signInWithPopup(auth,provider)  
         console.log(`result ${result}`);
         console.log(result.user.refreshToken);
         cookies.set("auth-token",result.user.refreshToken)
         setIsAuth(true)
         
        } catch (error) {
            console.error(error);
        }
        

    }




    return <div claaName="auth">
        <p>Sign in With google</p>
        <button onClick={signInWithGoogle} > Sign In Gogole</button>
    </div>
}