import './Cart.css'
import { useContext } from 'react'
import { cartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'

export default function Cart() {
  const { cartItems , removeFromCart , changeQuantity } = useContext(cartContext)

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.amount
  }, 0)

  const removeHandler = (product)=>{
        Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        removeFromCart(product)
      }
    });
  }
  return (
    <> 
    <div className='Cart'>
      <div className='m-5'>
        <p className='fs-3 fw-bold text-center my-5' style={{ color: '#ae1c9ab6' }}>Cart<span className='text-dark'>Products</span></p>

        <div className='row row-cols-1 gap-3'>
          {
            cartItems.map((val , index)=>{
             return <div key={index} className='bg bg-light rounded shadow border py-2 px-3 d-flex justify-content-around align-items-center rounded'>
              <img src={val.image} style={{ width: '80px', height: '80px', borderRadius: '50%' , objectFit: 'contain'  }} />
              <div>title : <span className='fw-bold'>{val.title}</span></div>
              <div>price : <span className='fw-bold'>${val.price * val.amount}</span></div>
              <div>
                <button className='btn bg-dark text-light shadow' style={{ width: '40px', height: '40px', borderRadius: '50%'}} onClick={()=> changeQuantity(val.id , 'inc')} >+</button>
                <span className='mx-3'>{val.amount}</span>
                <button className='btn bg-dark text-light shadow' style={{ width: '40px', height: '40px', borderRadius: '50%' }}  onClick={()=> changeQuantity(val.id , 'dec')} disabled = {val.amount <= 1}>-</button>
              </div>
              <div>
                <button onClick={ ()=> removeHandler(val)} className='btnremove bg-danger text-light'>remove</button>
              </div>
             </div>
            })
          }
        </div>
        <div className='text-center fs-3 py-5'>
          <p>Total : <span>${totalPrice.toFixed(2)}</span></p>
        </div>
      </div>   
    </div>
    </>
  )
}
