import './Section2.css'


export default function Section2() {

  return (
    <div className='section2 d-flex flex-column flex-md-row justify-content-between align-items-center gap-4 m-3 m-md-5'>

      <div
        className='rightDiv text-center text-md-start'
        data-wow-duration="1.2s"
      >
        <span>NEW STYLE</span>
        <p className='fs-3 fs-md-3 fw-bold pt-2'>
          Get 65% Offer<br/> & Make New<br/> Fusion.
        </p>
        <button className="button btn-outline-light mt-5 d-block mx-auto mx-md-0">
          Shop Now
        </button>
      </div>

      <div
        className='leftDiv  text-center text-md-start'
        data-wow-delay="0.3s"
      >
        <span>MEGA OFFER</span>
        <p className='fs-3 fs-md-3 fw-bold pt-2'>
          Make your New<br/>Styles with Our<br/> Products.
        </p>
        <button className="button btn-outline-light mt-5 d-block mx-auto mx-md-0">
          Shop Now
        </button>
      </div>

    </div>
  );
}