import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <Navbar  className="bg-primary">
    <Container>
     <Link to={'/'} style={{textDecoration:'none'}} >
          <Navbar.Brand className='fw-bolder d-flex align-items-center' style={{color:'white'}}>
<div style={{height:'60px'}}>
            <i class="fa-solid fa-film "></i>    
  
</div>              <h4 style={{fontFamily:'fantasy'}}>FILM FREEWAY</h4>
          </Navbar.Brand>
     </Link>
    </Container>
  </Navbar>
  )
}

export default Header