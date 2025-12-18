import { useContext, useEffect } from 'react'
import './WishList.css'
import { wishListContext } from '../../context/WishListContext'
import { authContext } from '../../context/AuthContext'


import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import useProduct from '../../hooks/UseProduct';

export default function WishList({val}) {
  const {currentUser} = useContext(authContext) 
  const {wishListHandler} = useProduct(val)
  
  const {getWishListData ,wishListData } = useContext(wishListContext)
  useEffect(()=>{
    getWishListData()
  },[currentUser])

  return (
    <>
    <div className='Products'>
          <div className='m-5'>
            <p className='fs-3 fw-bold text-center my-5' style={{ color: '#ae1c9ab6' }}>WishList<span className='text-dark'>Products</span></p>
    
            <div className="container text-center">
              <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
                {
                wishListData.map((val) => {
                  const finaldis = val.price - (val.price * val.discount / 100);
                  return (
                    <div key={val.id} className="col">
                      <div className="border rounded-3 h-100 d-flex flex-column"> 
    
                        <div className="imgdiv d-flex justify-content-center p-3" style={{ height: '250px' }}>
                          <img src={val.image} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                        </div>
    
                        <div className='m-4 d-flex flex-column justify-content-start align-items-start flex-grow-1'>
                          <span>{val.rate}</span>
                          <p className='fw-bold pt-1'>{val.title}</p>
    
                          <p className='fw-bold'>
                            <del className='pe-3 fw-normal' style={{ color: '#4e5961ff' }}>${val.price}</del>
                            ${finaldis}
                          </p>
    
                          <div className='w-100 d-flex justify-content-between align-items-center mt-auto'>
                            <button className='btn rounded px-2 py-1'  onClick={()=>{wishListHandler(val)}}>
                              <FaHeart />
                            </button>
                            <button className='btn rounded px-2 py-1'>
                              <FaCartShopping />
                            </button>
                          </div>
                        </div>
    
                      </div>
                    </div>
                  );
                })}
    
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
