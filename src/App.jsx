import { createBrowserRouter , RouterProvider  } from 'react-router-dom'
import { lazy , Suspense } from 'react';

import "@fontsource/raleway"; 
import "@fontsource/raleway/700.css";
import "bootstrap/dist/css/bootstrap.min.css";  
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import LottieHandler from './Common/dynamicComponents/LottieHandler';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Layout = lazy( ()=> import('./layout/Layout'))
const Home = lazy( ()=> import('./Pages/Home/Home'))
const About = lazy( ()=> import('./Pages/About/About'))
const AllProducts = lazy( ()=> import('./Pages/Products/AllProducts'))
const Register = lazy( ()=> import('./Pages/Auth/Register'))
const Login = lazy( ()=> import('./Pages/Auth/Login'))
const Women = lazy( ()=>import('./Pages/Women/Women'))
const Men = lazy( ()=>import('./Pages/Men/Men'))
const Kids= lazy( ()=>import('./Pages/Kids/Kids'))
const WishList = lazy(()=> import('./Pages/WishList/WishList'))
const Cart = lazy(()=> import('./Pages/Cart/Cart'))


export default function App() {

    const router =  createBrowserRouter([
        {
            path : '/' ,
            element : <Suspense fallback={<LottieHandler status={'main'} />}><Layout/></Suspense> ,
            children : [
              { index : true , element :  <Suspense fallback={<LottieHandler status={'sec'} />}><Home/></Suspense>} ,

              { path : 'about' , element :  <Suspense fallback={<LottieHandler status={'sec'} />}><About/></Suspense>} ,

              { path : 'allproducts' , element :  <Suspense fallback={<LottieHandler status={'sec'} />}><AllProducts/></Suspense>} ,

              {path : 'register' , element : <Suspense fallback={<LottieHandler status={'sec'} />}><Register/></Suspense>} ,

              {path : 'login' , element : <Suspense fallback={<LottieHandler status={'sec'} />}><Login/></Suspense>} ,

              {path : 'women' , element : <Suspense fallback={<LottieHandler status={'sec'} />}><Women/></Suspense>} ,

              {path : 'men' , element : <Suspense fallback={<LottieHandler status={'sec'} />}><Men/></Suspense>} ,

              {path : 'kids' , element : <Suspense fallback={<LottieHandler status={'sec'} />}><Kids/></Suspense>} ,

              {path : 'wishlist' , element : <Suspense fallback={<LottieHandler status={'sec'} />}><WishList /></Suspense>} ,

              {path : 'cart' , element : <Suspense fallback={<LottieHandler status={'sec'} />}> <Cart/> </Suspense>} ,
            ],
            errorElement : <LottieHandler status={'error'}/>
          
        }
      
    ])
  return (
    <main>   
     <RouterProvider router={router}/>
     <ToastContainer position="top-right" autoClose={2000} />
    </main>
  )
}
