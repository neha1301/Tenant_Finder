import React, { useState } from 'react';
import logo from '../Navbar/logo2.png';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';


function Nav() {
  const [showNavRight, setShowNavRight] = useState(false);

  const navigate = useNavigate();

  const handleSignIn = ()=>{
    navigate('/signIn')
  }

  const handleSignUp = ()=>{
    navigate('/signUp')
  }

  return (
    <div className='back' >
      <MDBNavbar expand='lg' style={{ backgroundColor: "#CFD8DC", height: 70 }} >

        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img src={logo}
              height='20'
              width='100'
              alt=''
              loading='lazy'
            />
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavRight(!showNavRight)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showNavRight}>
            <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>

              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='/' className=''>
                  <b>Home</b>
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='/about'>
                  <b>About</b>
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='/contact'>

                  <b>Contact</b>

                </MDBNavbarLink>
              </MDBNavbarItem>

            </MDBNavbarNav>

            <div>
              <button onClick={handleSignIn} type="button" className="btn btn-primary btn-rounded" style={{ backgroundColor: "#607D8B", height: 50 }} >SIGN IN</button>
            </div>
            <div>
              <button onClick={handleSignUp} type="button" className="btn btn-primary btn-rounded" style={{ backgroundColor: "#607D8B", height: 50 }} >SIGN UP</button>
            </div>


          </MDBCollapse>
        </MDBContainer>

      </MDBNavbar>

    </div>
  )
}

export default Nav
