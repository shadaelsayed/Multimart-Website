import { NavLink , Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { LuLoader } from "react-icons/lu";
import { useContext , useState } from 'react';
import { authContext } from '../../context/AuthContext';

// dropdown 
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { wishListContext } from '../../context/WishListContext';
import { useEffect } from 'react';
import { cartContext } from '../../context/CartContext';



export default function Navbar() {

  const {currentUser , loadUser, logout} = useContext(authContext)  
   const {getWishListData ,wishListData } = useContext(wishListContext)
   const {totalCart} = useContext(cartContext)
    useEffect(()=>{
      getWishListData()
    } , [currentUser , wishListData])
    
  const navigate = useNavigate()
  const logoutHandler = async()=>{
   await logout()
    navigate('/login')
  }

  // start dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // end dropdown
  

   return (
    <>
      {/* Top bar with contact info */}
      <div className='bg-dark text-light py-1'>
        <div className='container'>
          <div className='text-end'>
            <p className='mb-0'>
              Need Help? call us :
              <span style={{ color: '#eb30d2ff' }}> + 00645 45688</span>
            </p>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
        
        <div className="container">
          {/* Brand logo */}
          <NavLink className="navbar-brand fw-bold fs-3" to="/">
            <span style={{ color: '#ae1c9ab6' }}>Multi</span>mart
          </NavLink>

          {/* Mobile menu toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar content */}
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Navigation links */}
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink className="nav-link fw-bold" to="/" end>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-bold" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fw-bold" to="/allproducts">AllProducts</NavLink>
              </li>
            </ul>

            {/* Right side elements */}
            <div className="d-flex align-items-center justify-content-center">
              
              {/* Auth links */}
              <div className='me-5 d-flex align-items-center' >
                {
                  loadUser ? 
                    <div>               
                      <LuLoader className='loader' />
                    </div>
                    : !loadUser && !currentUser ?
                    <div className="d-flex align-items-center">
                      <Link to="/register" className="text-decoration-none fw-bold">Register</Link>
                      <span className="mx-2 fw-bold" style={{color : '#ae1c9ab6' }}>|</span>
                      <Link to="/login" className="text-decoration-none fw-bold">Login</Link>
                    </div>
                    :

                    <>
                    <Button
                       className='text-dark'
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}> 

                         <p className='fw-bold m-0 d-flex align-items-center'>Welcome <span style={{color : '#ae1c9ab6' }} className='ps-2'>{ currentUser.username}</span> </p>                  
                    </Button>

                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        slotProps={{
                          list: {
                            'aria-labelledby': 'basic-button',
                          },
                        }}
                      >
                        <MenuItem style={{width : '150px'}} onClick={handleClose}>Profile</MenuItem>
                        <MenuItem style={{width : '150px'}} onClick={()=>{handleClose() ; logoutHandler()}}>Logout</MenuItem>
                     </Menu>
                    
                   
                    </>
                }
              </div>
             

              {/* Icons */}
              
               <div className='d-flex align-items-center'>
                <Link to={'wishlist'} className='fs-4 text-dark'>
                   <FaHeart />
                   <sub className='fw-bold'>({wishListData.length})</sub>
                 </Link>

                <Link to={'cart'} className='fs-4 ms-2 text-dark'>
                   <FaCartShopping />
                   <sub className='fw-bold'>({totalCart()})</sub>
                 </Link>
             

               </div>
          </div>
        </div>
        </div>
      </nav>

      
    </>
  );
}

