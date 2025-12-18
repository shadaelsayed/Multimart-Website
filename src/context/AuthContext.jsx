import {createContext, useEffect, useState} from "react";
import {createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged, signOut} from 'firebase/auth'
import {setDoc , doc, getDoc} from 'firebase/firestore'
import { auth, authStore } from "../Firebase/firebase";


// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext()
export const AuthProvider = (({children})=>{

    const RegisterHandler =async (data)=>{
        const {email , password , username , phonenumber , } = data
        setLoad(true)
        try {
          const userData =  await createUserWithEmailAndPassword(auth , email , password)      
          await setDoc( doc(authStore , "users" , userData.user.uid) , {
            id : userData.user.uid , 
            username ,
            phonenumber ,
            email ,
            password ,
            createdAt : new Date()
          } )     
          return {success : true }
        } catch (error) {
            return {success :false , message : error.message }          
        }finally{setLoad(false)}
    }

    const [load , setLoad] = useState(false)
    const [ currentUser , setCurrentUser] = useState(null)
    const [ loadUser , setLoadUser] = useState(true)

    const LoginHandler = async(data)=>{
      const {email , password} =  data
      setLoad(true)
      try {
        await signInWithEmailAndPassword(auth , email , password)
        return{success : true}
        
      } catch (error) {
        return{success : false , message : error.message }
        
      }finally{
        setLoad(false)
      }
      
    }

    const logout = async()=>{
      try {
        await signOut(auth)
      } catch (error) {
        console.log(error)
      }
    }

    const fetchData = async (id)=>{
      const userData = await getDoc(doc (authStore, "users" , id ))
      if(userData.exists()){
        setCurrentUser(userData.data())
      }
    }

    useEffect(()=>{
      const watchStateOfUser = onAuthStateChanged(auth , async (data)=>{
        if(data){
          await fetchData(data.uid)
        }else{
          setCurrentUser(null)
        }
        setLoadUser(false)
      })
      return ()=> watchStateOfUser()
    } , [] )

    

    return <authContext.Provider value={{RegisterHandler , load , LoginHandler , currentUser , loadUser , logout}}>
        {children}
    </authContext.Provider>
})
