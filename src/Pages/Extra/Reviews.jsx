import './Reviews.css'
import Img1 from '../../assets/images/testimonials-1.jpg'
import Img2 from '../../assets/images/testimonials-2.jpg'
import Img3 from '../../assets/images/testimonials-3.jpg'
import Img4 from '../../assets/images/testimonials-4.jpg'

export default function Reviews() {
  return (
    <section className="pt-3 pb-5 my-4 bg-light" id="reviews">
      <div className="container text-center">
        <p className="text-muted fs-4 pt-3">Testimonial</p>
        <h2 className="mb-3 " style={{color : '#ae1c9ab6'}}>STAY WITH US</h2>

        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-bs-ride="false"
        >
          {/* Indicators */}
          <div className="carousel-indicators">
            {[0, 1, 2, 3].map((i) => (
              <button
                key={i}
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide-to={i}
                className={`${i === 0 ? 'active' : ''}`}
                aria-current={i === 0 ? 'true' : undefined}
                aria-label={`slide ${i + 1}`}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor : '#ae1c9ab6' ,
                }}
              ></button>
            ))}
          </div>

          {/* Slides */}
          <div className="carousel-inner py-5">

            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-8 border-4" style={{borderInlineStart: '#ae1c9ab6 1px solid'}}>
                  <p className="lead ps-3 text-start">
                    Amazing quality! The fabric feels premium and the fit was exactly as described.
                  </p>
                  <div className="text-start ps-3 mt-3">
                    <h5 className="fw-bold">Sara Wilsson</h5>
                    <small className="text-muted text-uppercase">Fashion Designer</small>
                    <div className="mt-2 text-warning fs-5">
                      ★ ★ ★ ★ ★
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 text-center">
                  <img
                    src={Img2}
                    alt="Sara Wilsson"
                    className="rounded-circle img-fluid"
                    style={{ width: '120px' }}
                  />
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-8 border-4" style={{borderInlineStart: '#ae1c9ab6 1px solid'}}>
                  <p className="lead ps-3 text-start">
                    Fast delivery and excellent customer service. I’ll definitely shop again!
                  </p>
                  <div className="text-start ps-3 mt-3">
                    <h5 className="fw-bold">John Doe</h5>
                    <small className="text-muted text-uppercase">Stylist</small>
                    <div className="mt-2 text-warning fs-5">
                      ★ ★ ★ ★ ☆
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 text-center">
                  <img
                    src={Img1}
                    alt="John Doe"
                    className="rounded-circle img-fluid"
                    style={{ width: '120px' }}
                  />
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-8 border-4" style={{borderInlineStart: '#ae1c9ab6 1px solid'}}>
                  <p className="lead ps-3 text-start">
                    Great variety of styles! I found everything I needed for my daily outfits.
                  </p>
                  <div className="text-start ps-3 mt-3">
                    <h5 className="fw-bold">Juna</h5>
                    <small className="text-muted text-uppercase">
                      Fashion Blogger
                    </small>
                    <div className="mt-2 text-warning fs-5">
                      ★ ★ ★ ★ ★
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 text-center">
                  <img
                    src={Img3}
                    alt="Juna"
                    className="rounded-circle img-fluid"
                    style={{ width: '120px' }}
                  />
                </div>
              </div>
            </div>

            {/* Slide 4 */}
            <div className="carousel-item">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-8 border-4" style={{borderInlineStart: '#ae1c9ab6 1px solid'}}>
                  <p className="lead ps-3 text-start">
                    The sizing guide was accurate and the clothes look even better in real life.
                  </p>
                  <div className="text-start ps-3 mt-3">
                    <h5 className="fw-bold">James Carter</h5>
                    <small className="text-muted text-uppercase">
                      Graphic Designer
                    </small>
                    <div className="mt-2 text-warning fs-5">
                      ★ ★ ★ ★
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 text-center">
                  <img
                    src={Img4}
                    alt="James Carter"
                    className="rounded-circle img-fluid"
                    style={{ width: '120px' }}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
