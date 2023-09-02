import React from 'react'

const About = () => {
  return (
    <>
      <div>
        <div className="card mb-3 p-5" >
          <div className="row g-0">
            <div className="col-md-4">
              <img src="public/aboutpic.png" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">

                <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
                <h1 className="mb-4">Welcome to <span className="text-primary">Tourist</span></h1>

                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                <div className="row gy-2 gx-4 mb-4">
                  <div className="col-sm-6">
                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>First Class Flights</p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Handpicked Hotels</p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>5 Star Accommodations</p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Latest Model Vehicles</p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>150 Premium City Tours</p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>24/7 Service</p>
                  </div>
                </div>
                <a className="btn btn-primary py-3 px-5 mt-2" href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center wow fadeInUp">
        <h4 class="section-title bg-white text-center text-primary px-3">Travel Guide</h4>
        <h1 class="mb-5">Meet Our Guide</h1>
      </div>


      <div class="card-group p-3 column-gap-4">

        <div class="card">
          <img src="public/aboutpic.png" class="card-img-top" alt="..." />
          <div class="position-relative d-flex justify-content-center">
                            <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
                        </div>
                        <div class="text-center p-4">
                            <h5 class="mb-0">Full Name</h5>
                            <small>Designation</small>
                        </div>

        </div>


        <div class="card">
          <img src="public/aboutpic.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card">
          <img src="public/aboutpic.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>

        <div class="card">
          <img src="public/aboutpic.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>

      </div>

    </>
  )
}

export default About