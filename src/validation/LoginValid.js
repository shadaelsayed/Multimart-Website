import { Input } from '@mui/material'
import {z} from 'zod'

export const LoginSchema = z.object({
  
    email : z.string().min(1 , {message : 'email is required'})
         .email({ message : 'This Email is not valid'}) ,

    password : z.string().min(1 , {message : 'password is required'})
          
    
})

export default LoginSchema