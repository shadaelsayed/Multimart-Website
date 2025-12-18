import axios from "axios";
import { createContext, useContext, useState } from "react";
import { authContext } from "./AuthContext";

// eslint-disable-next-line react-refresh/only-export-components
export const wishListContext = createContext()
export const WishListProvider =({children})=>{

    const wishListApi = "http://localhost:5000/wishList"
    const {currentUser} = useContext(authContext)
    const [wishListData , setWishListData] =useState([])

    const addorRemove = async(pro)=>{
        const isproductInWishList = await axios.get(`${wishListApi}?userId=${currentUser.id}&productId=${pro.id}`) 

        if(!isproductInWishList.data.length){
            await axios.post(wishListApi , {
                userId : currentUser.id ,
                productId : pro.id ,
                payload : pro
            })  
            setWishListData([...wishListData]) 
            return { status : "add"}    
               
        }else{
            await axios.delete(`${wishListApi}/${isproductInWishList.data[0].id}`)
            const filterData = wishListData.filter(el => el.id !== pro.id)
            setWishListData(filterData)
            return{status:"remove"}            
        }

    
    }

    const getWishListData = async()=>{
        const userData = await axios.get(`${wishListApi}?userId=${currentUser?.id}`)
            const wishListPayload = userData.data.map(el => el.payload)
            setWishListData(wishListPayload)

    }


    return <wishListContext.Provider value={{ addorRemove , getWishListData ,wishListData }}>
        {children}
    </wishListContext.Provider>
}