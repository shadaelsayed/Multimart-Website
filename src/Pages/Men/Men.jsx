import './Men.css'

import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import { useContext, useEffect } from 'react';
import { displayContext } from '../../context/DisplayProducts';
import { Link } from 'react-router-dom';
import useProduct from '../../hooks/UseProduct';

export default function Men({val}) {
  const {wishListHandler , cartHandler} = useProduct(val)
  const {getData , products} = useContext(displayContext) 
  const handleDisplay = async(type)=>{
    let res = await getData(type)
    console.log(res);
  }
  useEffect(()=>{
    handleDisplay("men")
  }, [])
  return (
    <div className='Men'>
       <div className='Products position-relative py-5'>
        <Link to={-1} style={{top : '50px' , left : '50px' , backgroundColor : '#ae1c9ab6'}} className='btn text-light position-absolute'>
                    <FaArrowLeft />
        </Link>
      <div className='m-5'>
        <p className='fs-3 fw-bold text-center my-5' style={{ color: '#ae1c9ab6' }}>Men <span className='text-dark'>Products</span></p>

        <div className="container text-center">
          <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
            {
            products.men.map((val) => {
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
                        <button className='btn rounded px-2 py-1'
                        onClick={()=>{wishListHandler(val)}}>
                          <FaHeart />
                        </button>
                        <button className='btn rounded px-2 py-1' onClick={()=>cartHandler(val , finaldis)}>
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
      
    </div>
  )
}
