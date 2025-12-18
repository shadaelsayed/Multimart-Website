import { Input } from '@mui/material'
import {z} from 'zod'

export const RegisterSchema = z.object({
    username : z.string().min(1 , {message : 'username is required'}),

    phonenumber : z.string().min(1 , {message : 'phone-number is required'})
        .regex(/^01[0125][0-9]{8}$/ , { message : 'This number is not valid'}) ,

    email : z.string().min(1 , {message : 'email is required'})
         .email({ message : 'This Email is not valid'}) ,

    password : z.string().min(1 , {message : 'Password is required'})
          .regex(/[A-Z]{1}/ , {message : 'Enter atLeast one capital character'}) 
          .regex(/[0-9]{2}/ , {message : 'Enter atLeast two number'}),

    confirmpassword : z.string().min(1 , {message : 'ConfirmPassword is required'})
          .regex(/[A-Z]{1}/ , {message : 'Enter atLeast one capital character'}) 
          .regex(/[0-9]{2}/ , {message : 'Enter atLeast two numbers'}),      
                
    
}).refine((input)=> input.password === input.confirmpassword , { message : 'Password is not the same ' , path : ['confirmpassword'] })

export default RegisterSchema