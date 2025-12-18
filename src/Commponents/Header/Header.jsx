import './Header.css'
import Img1 from '../../assets/images/hero-slider-three.webp'
import Img2 from '../../assets/images/hero-slider-one.webp'
import Img3 from '../../assets/images/hero-slider-two.webp'

import { Swiper , SwiperSlide} from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation';
import { IoSearch } from "react-icons/io5";

export default function Header() {
  const arrofImages = [
    {img : Img1 },
    {img : Img2 },
    {img : Img3 }
  ]
  return (
    <>
    <div className="container py-3">
            <form className="form d-flex mx-auto w-50" role="search">
              <input
                className="form-control me-2 p-2"
                type="search"
                placeholder="Search products..."
                aria-label="Search"
              />
              <button className="btn" type="submit">
                <IoSearch />
              </button>
            </form>
          </div>


   <div className="Header">
      <Swiper navigation={true} modules={[Navigation , Autoplay]} autoplay={{
        delay: 2000,           
        disableOnInteraction: false,  
        pauseOnMouseEnter: true,
      }} loop={true} className="container-fluid p-0">
        {
          arrofImages.map((val , index)=>(
            
          <SwiperSlide key={index}
          className="d-flex justify-content-center align-items-center text-white"
          style={{
            backgroundImage: `url(${val.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "80vh", 
            position: "relative",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.3)", 
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <p className='fs-2'>UP TO <span className='fw-bold' style={{color : "#ae1c9a"}}>70%</span> OFF</p>
            <h2 className="fs-1 fw-bold">Fashion Collection Summer Sale</h2>
            <button className="button btn-outline-light mt-3">Shop Now</button>
          </div>
        </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
    </>
  );
}


