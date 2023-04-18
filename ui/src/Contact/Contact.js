import React from 'react';
import '../Contact/css/style.css';
import '../Contact/css/bootstrap.min.css';
import '../Contact/fonts/icomoon/style.css';
import Nav from '../Navbar/Nav';
import Footer from '../Footer';



function Contact() {
  return (
    
    <div>
      <Nav/>      
       <div className="content">      
    
    <div className="container">
      <div className="row align-items-stretch no-gutters contact-wrap">
        <div className="col-md-8">
          <div className="form h-100">
            <h3>Get In Touch!</h3>
            <form className="mb-5" method="post" id="contactForm" name="contactForm">
              <div className="row">
                <div className="col-md-6 form-group mb-5">
                  
                  <input type="text" className="form-control" name="name" id="name" placeholder="Enter name"/>
                </div>
                <div className="col-md-6 form-group mb-5">
           
                  <input type="text" className="form-control" name="email" id="email"  placeholder="Enter email"/>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 form-group mb-5">
        
                  <input type="text" className="form-control" name="phone" id="phone"  placeholder="Phone number"/>
                </div>
                <div className="col-md-6 form-group mb-5">
          
                  <input type="text" className="form-control" name="company" id="company"  placeholder="Your Address"/>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 form-group mb-5">
                  <textarea className="form-control" name="message" id="message" cols="30" rows="4"  placeholder="Write your message"></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 form-group">
                  <input type="submit" value="Send Message" className="btn btn-primary rounded-0 py-2 px-4"/>
                  <span className="submitting"></span>
                </div>
              </div>
            </form>

            <div id="form-message-warning mt-4"></div> 
            <div id="form-message-success">
              Your message was sent, thank you!
            </div>

          </div>
        </div>
        <div className="col-md-4">
          <div className="contact-info h-100">
            <h3>Contact Information</h3>
            <p className="mb-5">To give real service you must add something which cannot be bought or measured with money, and that is sincerity and integrity.</p>
            <ul className="list-unstyled">
              <li className="d-flex">
                <span className="wrap-icon icon-room mr-3"></span>
                <span className="text">Laxmangarh,Rajasthan 332311</span>
              </li>
              <li className="d-flex">
                <span className="wrap-icon icon-phone mr-3"></span>
                <span className="text">+91 1234567890</span>
              </li>
              <li className="d-flex">
                <span className="wrap-icon icon-envelope mr-3"></span>
                <span className="text">abcd@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
  <Footer/>
    </div>

  )
}

export default Contact;





  

 
    
    
