import React from 'react'
import Card from '../components/card'

const Package = () => {
  return (
    <>
    
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

        <Card img={'src/assets/img/7.jpg'} 
        icon1={"fa fa-map-marker-alt text-primary me-2"} sub1="A" 
        icon2={"fa fa-calendar-alt text-primary me-2"} sub2="B" 
        icon3={"fa fa-user-alt text-primary me-2"} sub3="C"  
        title="৳1000" det="Travel in Mughal fort complex ."/>

        <Card img={'src/assets/img/17.jpg'} 
        icon1={"fa fa-map-marker-alt text-primary me-2"} sub1="A" icon2={"fa fa-calendar-alt text-primary me-2"} sub2="B" icon3={"fa fa-user-alt text-primary me-2"} sub3="C"  title="৳1000" det="Travel in Mughal fort complex ."/>

        <Card img={'src/assets/img/10.jpg'} 
        icon1={"fa fa-map-marker-alt text-primary me-2"} sub1="A" icon2={"fa fa-calendar-alt text-primary me-2"} sub2="B" icon3={"fa fa-user-alt text-primary me-2"} sub3="C"  title="৳1000" det="Travel in Mughal fort complex ."/>
      </div>
    </>
  )
}

export default Package