import './About.css'
import Img from '../../assets/images/about-img-1.webp'

export default function About() {
  return (
    <div className='About'>
     <section class="about-section">
      <div class="about-container">
      
        <div class="about-hero">
          <div class="hero-content">
            <h1>Our Global Story</h1>
            <p>Connecting customers worldwide through exceptional shopping experiences since 2005</p>
            <div class="hero-stats">
              <div class="stat-item">
                <span class="stat-number">18</span>
                <span class="stat-label">Years in Business</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">25+</span>
                <span class="stat-label">Countries</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">150+</span>
                <span class="stat-label">Retail Stores</span>
              </div>
            </div>
          </div>
        </div>

        
        <div class="mission-section">
          <div class="section-content">
            <div class="text-content">
              <h2>Our Mission</h2>
              <p>To create a seamless shopping experience that transcends borders, offering quality products and exceptional service to customers around the globe.</p>
              <p>We believe that great shopping experiences should be accessible to everyone, regardless of where they live. Our multistore platform brings together the best products from around the world, tailored to local preferences and needs.</p>
            </div>
            <div class="image-content">
              <img src={Img} alt="Global shopping experience" />
            </div>
          </div>
        </div>

      
      </div>
    </section>
      
    </div>
  )
}
