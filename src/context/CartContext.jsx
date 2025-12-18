import { Children, createContext, useEffect, useState } from "react"


// eslint-disable-next-line react-refresh/only-export-components
export const cartContext = createContext()

export const CartProvider = ({children}) => {
    const [ cartItems , setCartItems ] = useState([])
    useEffect(()=>{
        let x = localStorage.getItem('cartItems')
        if(x){
            setCartItems(JSON.parse(x))
        }else{
            setCartItems([])
        }
    }, [])

    const addtocart = (pro , price)=>{
        const { id , title , image } = pro
        const findPro = cartItems.find(el => el.id === pro.id)
        if(!findPro){
            const objectOfCart ={
                id , 
                image ,
                title , 
                price ,
                amount : 1
            }
            setCartItems([...cartItems , objectOfCart])
        }else{
            ++findPro.amount
            setCartItems([...cartItems])
        }
        }

    const removeFromCart = (pro)=>{
        const filterCart = cartItems.filter(el => el.id !== pro.id)
        setCartItems(filterCart)
    }    

    const changeQuantity = (id , status)=>{
        const findedData = cartItems.find(el => el.id === id )
        if(status === 'inc'){
            ++findedData.amount
        }else{
            --findedData.amount
        }
        setCartItems([...cartItems])
    }

    const totalCart = ()=>{
        return cartItems.reduce((a , b)=>{
            return a + b.amount
        } , 0)
    }

    useEffect(()=>{
        if(cartItems.length == 0)return
        localStorage.setItem('cartItems' , JSON.stringify(cartItems))
    }, [cartItems])

    return <cartContext.Provider value={{addtocart , cartItems , removeFromCart , changeQuantity , totalCart}}>
        {children}
    </cartContext.Provider>
}