import React from 'react'

const Booking = () => {
  return (
    <>
    <div class="text-center bg-danger-subtle p-3 m-3">
            <h2 class="section-title text-center text-primary px-3">Your</h2>
            <h1 class="mb-5">BOOKING CONFIRMATIONS</h1>
          </div>


     {/* Booking Start  */}
     <div class="container-xxl py-5 bg-secondary">
        <div class="container">
          <div class="booking p-5">
            <div class="row g-5 align-items-center">
              <div class="col-md-6 text-white">
                <h6 class="text-white text-uppercase">Booking</h6>
                <h1 class="text-white mb-4">Online Booking</h1>
                <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                <a class="btn btn-outline-light py-3 px-5 mt-2" href="">Read More</a>
              </div>
              <div class="col-md-6">
                <h1 class="text-white mb-4">Book A Tour</h1>
                <form>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input type="text" class="form-control bg-transparent" id="name" placeholder="Your Name" />
                        <label for="name">Your Name</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input type="email" class="form-control bg-transparent" id="email" placeholder="Your Email" />
                        <label for="email">Your Email</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-floating date" id="date3" data-target-input="nearest">
                        <input type="text" class="form-control bg-transparent datetimepicker-input" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                        <label for="datetime">Date & Time</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-floating">
                        <select class="form-select bg-transparent" id="select1">
                          <option value="1">Destination 1</option>
                          <option value="2">Destination 2</option>
                          <option value="3">Destination 3</option>
                        </select>
                        <label for="select1">Destination</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-floating">
                        <textarea class="form-control bg-transparent" placeholder="Special Request" id="message" style={{ height: "100px" }}></textarea>
                        <label for="message">Special Request</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <button class="btn btn-outline-light w-100 py-3" type="submit">Book Now</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Booking end  */}

    {/* Booking Start  */}

      {/* Process Start  */}
      <div class="container-xxl py-5">
        <div class="container">
          <div class="text-center pb-4 ">
            <h6 class="section-title bg-white text-center text-primary px-3">Process</h6>
            <h1 class="mb-5">3 Easy Steps</h1>
          </div>
          <div class="row gy-5 gx-4 justify-content-center">
            <div class="col-lg-4 col-sm-6 text-center pt-4 ">
              <div class="position-relative border border-primary pt-5 pb-4 px-4">
                <div class="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{ width: "100px", height: "100px" }}>
                  <i class="fa fa-globe fa-3x text-white"></i>
                </div>
                <h5 class="mt-4">Choose A Destination</h5>
                <hr class="w-25 mx-auto bg-primary mb-1" />
                <hr class="w-50 mx-auto bg-primary mt-0" />
                <p class="mb-0">Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit</p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 text-center pt-4">
              <div class="position-relative border border-primary pt-5 pb-4 px-4">
                <div class="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{ width: "100px", height: "100px" }}>
                  <i class="fa fa-dollar-sign fa-3x text-white"></i>
                </div>
                <h5 class="mt-4">Pay Online</h5>
                <hr class="w-25 mx-auto bg-primary mb-1" />
                <hr class="w-50 mx-auto bg-primary mt-0" />
                <p class="mb-0">Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit</p>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 text-center pt-4">
              <div class="position-relative border border-primary pt-5 pb-4 px-4">
                <div class="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{ width: "100px", height: "100px" }}>
                  <i class="fa fa-plane fa-3x text-white"></i>
                </div>
                <h5 class="mt-4">Fly Today</h5>
                <hr class="w-25 mx-auto bg-primary mb-1" />
                <hr class="w-50 mx-auto bg-primary mt-0" />
                <p class="mb-0">Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam eos erat ipsum et lorem et sit sed stet lorem sit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Process Start */}

      {/* Team Start */}
      <div class="container-xxl py-5">
        <div class="container">
          <div class="text-center">
            <h6 class="section-title bg-white text-center text-primary px-3">Travel Guide</h6>
            <h1 class="mb-5">Meet Our Guide</h1>
          </div>
          <div class="row g-4 bg-warning-subtle">
            <div class="col-lg-3 col-md-6">
              <div class="team-item">
                <div class="overflow-hidden">
                  <img class="img-fluid" src="src/assets/img/team-1.jpg" alt="" />
                </div>
                <div class="position-relative d-flex justify-content-center" style={{ margintop: "-19px" }}>
                  <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                  <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                  <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
                </div>
                <div class="text-center p-4">
                  <h5 class="mb-0">Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="team-item">
                <div class="overflow-hidden">
                  <img class="img-fluid" src="src/assets/img/team-2.jpg" alt="" />
                </div>
                <div class="position-relative d-flex justify-content-center" style={{ margintop: "-19px" }}>
                  <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                  <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                  <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
                </div>
                <div class="text-center p-4">
                  <h5 class="mb-0">Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="team-item">
                <div class="overflow-hidden">
                  <img class="img-fluid" src="src/assets/img/team-3.jpg" alt="" />
                </div>
                <div class="position-relative d-flex justify-content-center" style={{ margintop: "-19px" }}>
                  <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                  <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                  <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
                </div>
                <div class="text-center p-4">
                  <h5 class="mb-0">Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="team-item">
                <div class="overflow-hidden">
                  <img class="img-fluid" src="src/assets/img/team-4.jpg" alt="" />
                </div>
                <div class="position-relative d-flex justify-content-center" style={{ margintop: "-19px" }}>
                  <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                  <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"></i></a>
                  <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"></i></a>
                </div>
                <div class="text-center p-4">
                  <h5 class="mb-0">Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End  */}

      {/* Testimonial Start  */}
      <div class="container-xxl py-5">
        <div class="container">
          <div class="text-center">
            <h6 class="section-title bg-white text-center text-primary px-3">Testimonial</h6>
            <h1 class="mb-5">Our Clients Say!!!</h1>
          </div>

          <div class="owl-carousel testimonial-carousel position-relative d-flex">

            <div class="testimonial-item bg-white text-center border p-4">
              <img class="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="src/assets/img/testimonial-1.jpg" style={{ width: "80px", height: "80px" }} />
              <h5 class="mb-0">John Doe</h5>
              <p>New York, USA</p>
              <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
            </div>
            <div class="testimonial-item bg-white text-center border p-4">
              <img class="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="src/assets/img/testimonial-2.jpg" style={{ width: "80px", height: "80px" }} />
              <h5 class="mb-0">John Doe</h5>
              <p>New York, USA</p>
              <p class="mt-2 mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
            </div>
            <div class="testimonial-item bg-white text-center border p-4">
              <img class="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="src/assets/img/testimonial-3.jpg" style={{ width: "80px", height: "80px" }} />
              <h5 class="mb-0">John Doe</h5>
              <p>New York, USA</p>
              <p class="mt-2 mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
            </div>
            <div class="testimonial-item bg-white text-center border p-4">
              <img class="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="src/assets/img/testimonial-4.jpg" style={{ width: '80px', height: '80px' }} />
              <h5 class="mb-0">John Doe</h5>
              <p>New York, USA</p>
              <p class="mt-2 mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    
    
    
    </>
  )
}

export default Booking