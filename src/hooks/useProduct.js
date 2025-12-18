import { useContext } from 'react';
import { wishListContext } from '../context/WishListContext';
import Swal from 'sweetalert2'
import { cartContext } from '../context/CartContext';
import { toast } from 'react-toastify';



export default function useProduct() {
    const {addorRemove} = useContext(wishListContext)
    const { addtocart } = useContext(cartContext)

    const wishListHandler = async(product)=>{
       const res = await addorRemove(product)
       if(res.status === 'add'){
        Swal.fire({
        title: `${product.title} added successfully!`,
        icon: "success",
        timer : 2000 ,
        showConfirmButton : false
});      
       }else{
        Swal.fire({
        title: `${product.title} removed from wishList!`,
        icon: "error" ,
        timer : 2000 ,
        showConfirmButton : false
});
       }
    }

    const cartHandler = (product , price) =>{
      addtocart(product , price)
      toast.success("Product added to cart 🛒");
    }
  return{wishListHandler , cartHandler}
}
