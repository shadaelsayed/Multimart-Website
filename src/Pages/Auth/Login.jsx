import './Auth.css'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import Register from './Register'
import {useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';


import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { LuLoader } from "react-icons/lu";

import { useContext, useState } from 'react'
import { authContext} from '../../context/AuthContext'
import LoginSchema from '../../validation/LoginValid'



export default function Login() {
   const {LoginHandler , load } = useContext(authContext)
    const { register , handleSubmit , reset ,formState : { errors , isDirty , isValid}} = useForm({
        resolver : zodResolver(LoginSchema),
        mode : 'all'
    })
    const [ showpass , setShowpass ] = useState(false)
    const [error , setError] = useState(null)
    const navigate = useNavigate()

    const SubmitForm =async(data)=>{
      const res = await LoginHandler(data)
      if ( res.success) {
         navigate('/')
         setError(null)
      }else{
         setError(res.message)
      }
       reset()
    }
  return (
    <div className='container w-100  mx-auto p-3 my-4'>
        <p className='header fs-2 text-center fw-bold'>Login <span className='text-dark'>Form </span> </p>

        <form onSubmit={handleSubmit(SubmitForm)} className='d-flex flex-column  Registerform  mx-auto p-4'>

           

            <TextField
            {...register('email')} 
               label = 'Email'
               className='mb-3'
               type='email'
               error={errors.email}
               helperText={errors.email && errors.email.message}
            />

            <TextField 
            {...register('password')}
               label = 'Password'
               className='mb-3'
               type={showpass ? 'text' : 'password'}
               error={errors.password}
               helperText={errors.password && errors.password.message}
               InputProps={{
                endAdornment :(
                    <InputAdornment position='end'> 
                      <IconButton onClick={ ()=> setShowpass(!showpass)}>
                        {
                           !showpass ? <FaRegEye /> : <FaRegEyeSlash />
                        }
                      </IconButton>
                    </InputAdornment>
                )
               }}
            />

    
            {
               error && 
               <div className='w-75 mx-auto py-3 px-5 bg-danger text-light border border-3 rounded text-center'>
                  Something went wrong , try again !
               </div>
            }

            <button disabled={!isValid || !isDirty || load} className='subbtn btn-danger w-50 w-md-25 mx-auto'>
               {
                  load ?                                    
                  <div className='flex gap-1 text-center'>               
                     <LuLoader className='loader' />
                  </div>
                  :
                  <>Login</>
               }
            </button>

            <p className='text-center text-secondary'>Don't have an account ? 
                <Link to={'/login'} className='text-decoration-none fw-bold'>  Signup</Link>
            </p>

        </form>
      
    </div>
  )
}

                