import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div style={{height:'410px'}} className='container mt-5 w-100'>
      <div className="footer-content d-flex justify-content-between">
        <div style={{width:'400px'}} className="media">
            <h5 className='d-flex'><i style={{height:'25px'}} className="fa-solid fa-circle-down me-3"></i>MOVIE ZONE</h5><br />
            <h5 className='text-primary'>About Us</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi nihil tempore enim, dignissimos!!!</p>
            <h5 className='text-primary'>Contact us</h5>
            <p className='d-flex'><i style={{height:'25px'}} className="fa-solid fa-cloud-meatball me-3"></i>+99999 999 </p>
            <p className='d-flex'><i style={{height:'25px'}} className="fa-solid fa-cloud-meatball me-3"></i>Star@gmail.com</p>

        </div>
        <div className="links d-flex flex-column">
            <h5 className='text-primary'>Links</h5>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
            <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home </Link><br />
<h5>Terms & Condition</h5>
<h5>More Search</h5>
        </div>
        <div className="guides d-flex flex-column">
            <h5 className='text-primary'>Helpfull Links</h5>
<h6>Services</h6>
<h6>Support</h6>
<h6>Blogs</h6>
<h6>Privacy Policy</h6>
<h6>Testimonials</h6>

        </div>
        <div className="contact">
            <h5 className='text-primary'>Subscribe More Info</h5>
            <div >
                <input type="text" className='form-control me-1' placeholder='Email id Please' /><br />
                <button className='btn btn-primary p-1'><h5>Subscribe</h5></button>
            </div>
           
        </div>
       </div>
       <hr />
       <div className='icons d-flex justify-content-center  '>
              <a className='ms-5' href="https://react.dev/" target="_blank" style={{textDecoration:'none',color:'white'}}><i class='fa-brands fa-twitter fa-1x'></i></a>
              <a className='ms-5' href="https://react.dev/" target="_blank" style={{textDecoration:'none',color:'white'}}><i class='fa-brands fa-instagram fa-1x'></i></a>
              <a  className='ms-5'href="https://react.dev/" target="_blank" style={{textDecoration:'none',color:'white'}}><i class='fa-brands fa-facebook fa-1x'></i></a>
              <a className='ms-5' href="https://react.dev/" target="_blank" style={{textDecoration:'none',color:'white'}}><i class='fa-brands fa-linkedin fa-1x'></i></a>
              <a  className='ms-5'href="https://react.dev/" target="_blank" style={{textDecoration:'none',color:'white'}}><i class='fa-brands fa-github fa-1x'></i></a>
              <a className='ms-5' href="https://react.dev/" target="_blank" style={{textDecoration:'none',color:'white'}}><i class='fa-brands fa-phone fa-1x'></i></a>

            </div>
    </div>




  )
}

export default Footer