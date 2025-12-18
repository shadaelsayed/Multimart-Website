import Lottie from 'lottie-react'
import { NavLink , Link } from 'react-router-dom';
import MainLoading from '../../assets/lotti/mainLoading.json'
import Loader from '../../assets/lotti/loader.json'
import Error from '../../assets/lotti/Page404.json'


export default function LottieHandler({status}) {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      {
        status == 'main' ?
          <div className='d-flex justify-content-center align-items-center'>
          <Lottie className='w-75' style={{height : '100vh'}} animationData={MainLoading} />
          </div>

          : status == 'sec' ?

          <div className='d-flex justify-content-center align-items-center'>
          <Lottie className='w-75' style={{height : '100vh'}} animationData={Loader} />
          </div>

          :

          <div  style={{height : '100vh'}} className='d-flex justify-content-center align-items-center flex-column'>
          <Lottie className='w-50' animationData={Error} />
          <Link className='fw-bold text-primary' style={{ cursor: 'pointer'}} to={'/'}>Go back to homepage</Link>
          </div>



      }
    </div>
  )
}

