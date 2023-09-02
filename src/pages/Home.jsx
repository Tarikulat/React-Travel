import React from 'react'

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

      <div className="row row-cols-1 row-cols-md-3 g-4 p-5 bg-light ">
        <div className="col h-50">
          <div className="card">
            <img src="src/assets/img/1s.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Sundarbans & Bagerhat Tour</h5>
              <p className="card-text">This is a wider card with supporting tenatural lead-in to additional content. </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="col h-50">
          <div className="card">
            <img src="src/assets/img/1s.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Cox's Bazar</h5>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>

        <div className="col h-50">
          <div className="card">
            <img src="src/assets/img/1s.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Srimangal</h5>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>

        <div className="col h-50">
          <div className="card">
            <img src="src/assets/img/1s.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Rangamati</h5>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>

        <div className="col h-50">
          <div className="card">
            <img src="src/assets/img/1s.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Bandarban</h5>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>

        <div className="col h-50">
          <div className="card">
            <img src="src/assets/img/1s.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Saint Martin</h5>
              <p className="card-text">This is a wider card with supporting text below as additional content.</p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>

        <div className="col h-50">
          <div className="card">
            <img src="src/assets/img/1s.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Paharpur</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>

        <div className="col vh-50">
          <div className="card card-block">
            <img src="src/assets/img/1s.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Srimangal</h5>
              <p className="card-text">This is a wider card with supporting zdvbdfZgvbdbdefvext below as a natural lead-in to additional </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>

        <div className="package-item bg-light gx-0 border vh-50">
          <div className="overflow-hidden">
            <img className="img-fluid" src="src/assets/img/1s.png" alt="" />
          </div>
          <div className="d-flex">
            <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2"></i>Thailand</small>
            <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2"></i>3 days</small>
            <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2"></i>2 Person</small>
          </div>
          <div className="text-center p-4">
            <h3 className="mb-0">$149.00</h3>
            <div className="mb-3">
              <small className="fa fa-star text-primary"></small>
              <small className="fa fa-star text-primary"></small>
              <small className="fa fa-star text-primary"></small>
              <small className="fa fa-star text-primary"></small>
              <small className="fa fa-star text-primary"></small>
            </div>
            <p>Tempor erat elitr rebum at clita.</p>
            <div className="d-flex justify-content-center mb-2">
              <a href="#" className="btn btn-sm btn-warning px-3 border" style={{ borderRadius: "30px 0 0 30px" }}>Read More</a>
              <a href="#" className="btn btn-sm btn-primary px-3" style={{ borderRadius: "0 30px 30px 0" }}>Book Now</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home