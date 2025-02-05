import React from 'react'
import {Nav, Navbar, Button} from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar className='justify-content-between'>
        <Navbar.Brand href="#home">

            Sparsh

            {/* <img className='companyLogo' src="https://img.freepik.com/premium-vector/creative-elegant-minimalistic-logo-design-vector-any-brand-business-company_1287271-13976.jpg?semt=ais_hybrid" alt="" /> */}
            
        </Navbar.Brand>

            <Nav className = 'ml-auto'>
            <Nav.Link href="#home">Home</Nav.Link>

            <Button variant="success">Success</Button>

            </Nav>
    </Navbar>
  )
}

export default Header