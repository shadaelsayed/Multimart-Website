import './Home.css'
import Header from '../../Commponents/Header/Header'
import Products from '../../Commponents/Products/Products'
import Section2 from '../Extra/Section2'
import Footer from '../../Common/Footer/Footer'
import Reviews from '../Extra/Reviews'
import BigDealSec from '../Extra/BigDealSec'


export default function Home() {
  return (
    <div className='Home'>
      <Header/>
      <Section2 />
      <BigDealSec/>
      <Products />
      <Reviews/>
    </div>
  )
}
