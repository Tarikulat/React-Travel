import React from 'react'
import './Style.css'
const Home = () => {
  return (
    <>

      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3500">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="src/assets/img/1s.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="src/assets/img/1s.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="src/assets/img/1s.png" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div class="container-xxl py-5">
        <div class="container">
          {/* <div class="text-center wow fadeInUp">
            <h6 class="section-title bg-white text-center text-primary px-3">Services</h6>
            <h1 class="mb-5">Our Services</h1>
          </div> */}

          <div class="text-center bg-danger-subtle">
            <h3 class="section-title text-center text-primary px-3">Services</h3>
            <h1 class="mb-5">Our Services</h1>
          </div>

          <div class="row g-4">
            <div class="col-lg-3 col-sm-6 wow fadeInUp">
              <div class="service-item rounded pt-3">
                <div class="p-4">
                  <i class="fa fa-3x fa-globe text-primary mb-4"></i>
                  <h5>WorldWide Tours</h5>
                  <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 wow fadeInUp">
              <div class="service-item rounded pt-3">
                <div class="p-4">
                  <i class="fa fa-3x fa-hotel text-primary mb-4"></i>
                  <h5>Hotel Reservation</h5>
                  <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 wow fadeInUp">
              <div class="service-item rounded pt-3">
                <div class="p-4">
                  <i class="fa fa-3x fa-user text-primary mb-4"></i>
                  <h5>Travel Guides</h5>
                  <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 wow fadeInUp">
              <div class="service-item rounded pt-3">
                <div class="p-4">
                  <i class="fa fa-3x fa-cog text-primary mb-4"></i>
                  <h5>Event Management</h5>
                  <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 wow fadeInUp">
              <div class="service-item rounded pt-3">
                <div class="p-4">
                  <i class="fa fa-3x fa-globe text-primary mb-4"></i>
                  <h5>WorldWide Tours</h5>
                  <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 wow fadeInUp">
              <div class="service-item rounded pt-3">
                <div class="p-4">
                  <i class="fa fa-3x fa-hotel text-primary mb-4"></i>
                  <h5>Hotel Reservation</h5>
                  <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 wow fadeInUp">
              <div class="service-item rounded pt-3">
                <div class="p-4">
                  <i class="fa fa-3x fa-user text-primary mb-4"></i>
                  <h5>Travel Guides</h5>
                  <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 wow fadeInUp">
              <div class="service-item rounded pt-3">
                <div class="p-4">
                  <i class="fa fa-3x fa-cog text-primary mb-4"></i>
                  <h5>Event Management</h5>
                  <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* -- Destination Start -- */}
      <div class="container-xxl py-5 destination">
        <div class="container">
          <div class="text-center bg-danger-subtle">
            <h6 class="section-title text-center text-primary px-3">Destination</h6>
            <h1 class="mb-5">Popular Destination</h1>
          </div>
          <div class="row g-3">
            <div class="col-lg-7 col-md-6">
              <div class="row g-3">
                <div class="col-lg-12 col-md-12">
                  <a class="position-relative d-block overflow-hidden" href="">
                    <img class="img-fluid" src="src/assets/img/destination-1.jpg" alt="" />
                    <div class="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">30% OFF</div>
                    <div class="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Rajshahi Tour</div>
                  </a>
                </div>
                <div class="col-lg-6 col-md-12 wow zoomIn">
                  <a class="position-relative d-block overflow-hidden" href="">
                    <img class="img-fluid" src="src/assets/img/destination-2.jpg" alt="" />
                    <div class="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">25% OFF</div>
                    <div class="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Khulna Tour</div>
                  </a>
                </div>
                <div class="col-lg-6 col-md-12 wow zoomIn">
                  <a class="position-relative d-block overflow-hidden" href="">
                    <img class="img-fluid" src="src/assets/img/destination-3.jpg" alt="" />
                    <div class="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">35% OFF</div>
                    <div class="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Sundarbans</div>
                  </a>
                </div>
              </div>
            </div>


            <div class="col-lg-5 col-md-6 wow zoomIn" style={{ minheight: "350px" }}>
              <a class="position-relative d-block h-100 overflow-hidden" href="" >
                <img class="img-fluid position-absolute w-100 h-100" src="src/assets/img/destination-4.jpg" alt="" style={{ objectFit: "cover" }} />
                <div class="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">20% OFF</div>
                <div class="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Naogaon</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Destination Start  */}


      {/* Card start here  */}

      <div class="card-body text-center bg-danger-subtle">
        <h3 class="section-title  text-center text-primary p-2 px-3">Packages</h3>
        <h1 class="mb-5 p-2">Awesome Packages</h1>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4 bg-light p-3">

        <div className="package-item bg-light gx-0 vh-50 p-3">
          <div className="card-body border">
            <div className="overflow-hidden">
              <img className="img-fluid" src="src/assets/img/R1.jpg" alt="" />
            </div>
            <div className="d-flex">
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>Rajshahi</small>
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>3 days</small>
              <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>4 Person</small>
            </div>
            <div className="text-center p-4">
              <h3 className="mb-0">৳7000</h3>
              <div className="mb-3">
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
              </div>
              <p>Travel in Rajshahi Puthia.</p>
              <div className="d-flex justify-content-center mb-2">
                <a href="#" className="btn btn-sm btn-warning px-3 border" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
              </div>
            </div>
          </div>
        </div>


        <div className="card-body package-item bg-light gx-0 vh-50 p-3">
          <div className="card-body border">

            <div className="overflow-hidden">
              <img className="img-fluid" src="src/assets/img/N22.jpg" alt="" />
            </div>
            <div className="d-flex">
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>Naogaon</small>
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>5 days</small>
              <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>3 Person</small>
            </div>
            <div className="text-center p-4">
              <h3 className="mb-0">৳9000</h3>
              <div className="mb-3">
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
              </div>
              <p>Travel in Naogaon Sompur Mahavihara.</p>
              <div className="d-flex justify-content-center mb-2">
                <a href="#" className="btn btn-sm btn-warning px-3 border" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
              </div>
            </div>
          </div>
        </div>


        <div className="card-body package-item bg-light gx-0  vh-50 p-3">
          <div className="card-body border">

            <div className="overflow-hidden">
              <img className="img-fluid" src="src/assets/img/B3.jpg" alt="" />
            </div>
            <div className="d-flex">
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>Bogura</small>
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>4 days</small>
              <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>5 Person</small>
            </div>
            <div className="text-center p-4">
              <h3 className="mb-0">৳6000</h3>
              <div className="mb-3">
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
              </div>
              <p>Travel in Bogura Mohasthan Garh.</p>
              <div className="d-flex justify-content-center mb-2">
                <a href="#" className="btn btn-sm btn-warning px-3 border" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
              </div>
            </div>
          </div>
        </div>


        <div className="card-body package-item bg-light gx-0  vh-50 p-3">
          <div className="card-body border">

            <div className="overflow-hidden">
              <img className="img-fluid" src="src/assets/img/4A.jpg" alt="" />
            </div>
            <div className="d-flex">
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>Ahsan Manzil</small>
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>3 days</small>
              <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>2 Person</small>
            </div>
            <div className="text-center p-4">
              <h3 className="mb-0">৳4000</h3>
              <div className="mb-3">
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
              </div>
              <p>Travel in Ahsan Manzil Museum.</p>
              <div className="d-flex justify-content-center mb-2">
                <a href="#" className="btn btn-sm btn-warning px-3 border" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
              </div>
            </div>
          </div>
        </div>


        <div className="card-body package-item bg-light gx-0  vh-50 p-3">
          <div className="card-body border">

            <div className="overflow-hidden">
              <img className="img-fluid" src="src/assets/img/5st.jpg" alt="" />
            </div>
            <div className="d-flex">
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>Sundarbans </small>
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>5 days</small>
              <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>3 Person</small>
            </div>
            <div className="text-center p-4">
              <h3 className="mb-0">12000</h3>
              <div className="mb-3">
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
              </div>
              <p>Travel in Sundarban mangrove forest.</p>
              <div className="d-flex justify-content-center mb-2">
                <a href="#" className="btn btn-sm btn-warning px-3 border" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
              </div>
            </div>
          </div>
        </div>


        <div className="card-body package-item bg-light gx-0  vh-50 p-3">
          <div className="card-body border">
            <div className="overflow-hidden">
              <img className="img-fluid" src="src/assets/img/6s.jpg" alt="" />
            </div>
            <div className="d-flex">
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>Srimangal</small>
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>8 days</small>
              <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>4 Person</small>
            </div>
            <div className="text-center p-4">
              <h3 className="mb-0">৳27000</h3>
              <div className="mb-3">
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
              </div>
              <p>Travel in Srimangal nature.</p>
              <div className="d-flex justify-content-center mb-2">
                <a href="#" className="btn btn-sm btn-warning px-3 border" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
              </div>
            </div>
          </div>
        </div>


        <div className="card-body package-item bg-light gx-0 vh-50 p-3">
          <div className="card-body border">
            <div className="overflow-hidden">
              <img className="img-fluid" src="src/assets/img/7.jpg" alt="" />
            </div>
            <div className="d-flex">
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>Rangamati</small>
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>7 days</small>
              <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>4 Person</small>
            </div>
            <div className="text-center p-4">
              <h3 className="mb-0">৳17000</h3>
              <div className="mb-3">
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
              </div>
              <p>Travel in  Kaptai Lake.</p>
              <div className="d-flex justify-content-center mb-2">
                <a href="#" className="btn btn-sm btn-warning px-3 border" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
              </div>
            </div>
          </div>
        </div>


        <div className="package-item bg-light gx-0 vh-50 p-3">
          <div className="card-body border">
            <div className="overflow-hidden">
              <img className="img-fluid" src="src/assets/img/8.jpg" alt="" />
            </div>
            <div className="d-flex">
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>Bandarban </small>
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>9 days</small>
              <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>5 Person</small>
            </div>
            <div className="text-center p-4">
              <h3 className="mb-0">৳9000</h3>
              <div className="mb-3">
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
              </div>
              <p>Travel in Sajek Valley Tour.</p>
              <div className="d-flex justify-content-center mb-2">
                <a href="#" className="btn btn-sm btn-warning px-3 border" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
              </div>
            </div>
          </div>
        </div>


        <div className="package-item bg-light gx-0 vh-50 p-3">
          <div className="card-body border">
            <div className="overflow-hidden">
              <img className="img-fluid" src="src/assets/img/9.jpg" alt="" />
            </div>
            <div className="d-flex">
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>Saint Martin</small>
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>3 days</small>
              <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>12 Person</small>
            </div>
            <div className="text-center p-4">
              <h3 className="mb-0">৳15000</h3>
              <div className="mb-3">
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
              </div>
              <p>Travel in Saint Martin coral island.</p>
              <div className="d-flex justify-content-center mb-2">
                <a href="#" className="btn btn-sm btn-warning px-3 border" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
              </div>
            </div>
          </div>
        </div>


        <div className="package-item bg-light gx-0  vh-50 p-3">
          <div className="card-body border">

            <div className="overflow-hidden">
              <img className="img-fluid" src="src/assets/img/10.jpg" alt="" />
            </div>
            <div className="d-flex">
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>Sonargaon </small>
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>4 days</small>
              <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>8 Person</small>
            </div>
            <div className="text-center p-4">
              <h3 className="mb-0">৳13000</h3>
              <div className="mb-3">
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
              </div>
              <p>Travel in Sonargaon inland port.</p>
              <div className="d-flex justify-content-center mb-2">
                <a href="#" className="btn btn-sm btn-warning px-3 border" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
              </div>
            </div>
          </div>
        </div>


        <div className="package-item bg-light gx-0 vh-50 p-3">
          <div className="card-body border">

            <div className="overflow-hidden">
              <img className="img-fluid" src="src/assets/img/11.jpg" alt="" />
            </div>
            <div className="d-flex">
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>Bagerhat</small>
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>7 days</small>
              <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>5 Person</small>
            </div>
            <div className="text-center p-4">
              <h3 className="mb-0">৳4000</h3>
              <div className="mb-3">
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
              </div>
              <p>Travel in Bagerhat historical town.</p>
              <div className="d-flex justify-content-center mb-2">
                <a href="#" className="btn btn-sm btn-warning px-3 border" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
              </div>
            </div>
          </div>
        </div>


        <div className="package-item bg-light gx-0 vh-50 p-3">
          <div className="card-body border">

            <div className="overflow-hidden">
              <img className="img-fluid" src="src/assets/img/12.jpg" alt="" />
            </div>
            <div className="d-flex">
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>Kuakata</small>
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>6 days</small>
              <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>7 Person</small>
            </div>
            <div className="text-center p-4">
              <h3 className="mb-0">৳7000</h3>
              <div className="mb-3">
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
              </div>
              <p>Travel in Kuakata beautiful sea beach .</p>
              <div className="d-flex justify-content-center mb-2">
                <a href="#" className="btn btn-sm btn-warning px-3 border" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
              </div>
            </div>
          </div>
        </div>

        <div className="package-item bg-light gx-0 vh-50 p-3">
          <div className="card-body border">

            <div className="overflow-hidden">
              <img className="img-fluid" src="src/assets/img/18.jpg" alt="" />
            </div>
            <div className="d-flex">
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>Narayanganj </small>
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>9 days</small>
              <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>2 Person</small>
            </div>
            <div className="text-center p-4">
              <h3 className="mb-0">৳6000</h3>
              <div className="mb-3">
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
              </div>
              <p>Travel in Banglar Taj Mahal  .</p>
              <div className="d-flex justify-content-center mb-2">
                <a href="#" className="btn btn-sm btn-warning px-3 border" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
              </div>
            </div>
          </div>
        </div>

        <div className="package-item bg-light gx-0  vh-50 p-3">
          <div className="card-body border">

            <div className="overflow-hidden">
              <img className="img-fluid" src="src/assets/img/13.jpg" alt="" />
            </div>
            <div className="d-flex">
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>Comilla </small>
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>2 days</small>
              <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>5 Person</small>
            </div>
            <div className="text-center p-4">
              <h3 className="mb-0">৳8000</h3>
              <div className="mb-3">
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
              </div>
              <p>Travel inComilla .</p>
              <div className="d-flex justify-content-center mb-2">
                <a href="#" className="btn btn-sm btn-warning px-3 border" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
              </div>
            </div>
          </div>
        </div>

        <div className="package-item bg-light gx-0 vh-50 p-3">
          <div className="card-body border">

            <div className="overflow-hidden">
              <img className="img-fluid" src="src/assets/img/14.jpg" alt="" />
            </div>
            <div className="d-flex">
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>Barisal </small>
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>8 days</small>
              <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>3 Person</small>
            </div>
            <div className="text-center p-4">
              <h3 className="mb-0">৳12000</h3>
              <div className="mb-3">
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
              </div>
              <p>Travel in Barisal floating city.</p>
              <div className="d-flex justify-content-center mb-2">
                <a href="#" className="btn btn-sm btn-warning px-3 border" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
              </div>
            </div>
          </div>
        </div>

        <div className="package-item bg-light gx-0 vh-50 p-3">
          <div className="card-body border">

            <div className="overflow-hidden">
              <img className="img-fluid" src="src/assets/img/15.jpg" alt="" />
            </div>
            <div className="d-flex">
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>Khulna</small>
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>7 days</small>
              <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>5 Person</small>
            </div>
            <div className="text-center p-4">
              <h3 className="mb-0">৳15000</h3>
              <div className="mb-3">
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
              </div>
              <p>Travel in attractions to visit in Khulna.</p>
              <div className="d-flex justify-content-center mb-2">
                <a href="#" className="btn btn-sm btn-warning px-3 border" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
              </div>
            </div>
          </div>
        </div>

        <div className="package-item bg-light gx-0 vh-50 p-3">
          <div className="card-body border">

            <div className="overflow-hidden">
              <img className="img-fluid" src="src/assets/img/16.jpg" alt="" />
            </div>
            <div className="d-flex">
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>Cox's Bazar</small>
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>13 days</small>
              <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>7 Person</small>
            </div>
            <div className="text-center p-4">
              <h3 className="mb-0">৳22000</h3>
              <div className="mb-3">
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
              </div>
              <p>Travel in Cox's Bazar.</p>
              <div className="d-flex justify-content-center mb-2">
                <a href="#" className="btn btn-sm btn-warning px-3 border" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
              </div>
            </div>
          </div>
        </div>

        <div className="package-item bg-light gx-0 vh-50 p-3">
          <div className="card-body border">

            <div className="overflow-hidden">
              <img className="img-fluid" src="src/assets/img/17.jpg" alt="" />
            </div>
            <div className="d-flex">
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>Lalbagh </small>
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>3 days</small>
              <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>2 Person</small>
            </div>
            <div className="text-center p-4">
              <h3 className="mb-0">৳11000</h3>
              <div className="mb-3">
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
              </div>
              <p>Travel in Mughal fort complex .</p>
              <div className="d-flex justify-content-center mb-2">
                <a href="#" className="btn btn-sm btn-warning px-3 border" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
                <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
              </div>
            </div>
          </div>
        </div>

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

export default Home