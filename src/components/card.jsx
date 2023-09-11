import './style.css'

const Card = (props) => {
  return (
    <div className={`col-sm-12 ${props.className}`}>
      <a href="" className='nav-link'>
        <div className='card h-100'>
          <img src={props.img} alt="" className='img-fluid'/>
          <div className='card-body'>
            <div className='d-flex'>
              <div><p className='px-3'><i className={props.icon1} />{props.sub1}</p></div>
              <div><p className='px-3'><i className={props.icon2} />{props.sub2}</p></div>
              <div><p className='px-3'><i className={props.icon3} />{props.sub3}</p></div>
            </div>
            <h2 className='card-title mb-3 text-center'>{props.title}</h2>
              <p className='text-center'><small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
                <small className="fa fa-star text-primary"></small>
              </p>
          </div>
          <p className='text-center'>{props.det}</p>
          <div className='p-2 d-flex justify-content-center'>
            <button className='bg-warning'>Read More</button>
            <button className='bg-primary'>Booking</button>
          </div>
        </div>
      </a>
    </div>
  );
}
  export default Card;