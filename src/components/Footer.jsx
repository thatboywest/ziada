import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className="section py-12 py-20-desktop" style={{ backgroundColor: '#092327' }}> 
      <div className="container">
        <div className="columns mb-8 pb-20" style={{ borderBottom: '1px solid #DADFE9' }}>
          <div className="column is-4 mb-12 mb-0-desktop">
            <a className="is-inline-block mb-3 title is-5 has-text-white" href="#"> 
              <img
                src="https://via.placeholder.com/150" 
                alt="Logo"
                style={{ height: '28px' }}
                width="auto"
              />
            </a>
            <p className="mb-6 has-mw-xs has-text-light"> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="is-flex">
              <a
                className="is-flex is-justify-content-center is-align-items-center mr-4 has-text-white has-background-dark" // Adjust icon and background color
                href="#"
                style={{ width: '40px', height: '40px', borderRadius: '100%' }}
              >
                <FaFacebookF size={20} />
              </a>
              <a
                className="is-flex is-justify-content-center is-align-items-center mr-4 has-text-white has-background-dark" // Adjust icon and background color
                href="#"
                style={{ width: '40px', height: '40px', borderRadius: '100%' }}
              >
                <FaTwitter size={20} />
              </a>
              <a
                className="is-flex is-justify-content-center is-align-items-center mr-4 has-text-white has-background-dark" // Adjust icon and background color
                href="#"
                style={{ width: '40px', height: '40px', borderRadius: '100%' }}
              >
                <FaInstagram size={20} />
              </a>
              <a
                className="is-flex is-justify-content-center is-align-items-center mr-4 has-text-white has-background-dark" // Adjust icon and background color
                href="#"
                style={{ width: '40px', height: '40px', borderRadius: '100%' }}
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
          <div className="column is-8">
            <div className="columns">
              <div className="column is-3 mb-8 mb-0-desktop">
                <h3 className="mb-6 title is-7 has-text-white"> 
                  Company
                </h3>
                <ul>
                  <li className="mb-4"><a className="has-text-light" href="#">About Us</a></li> 
                  <li className="mb-4"><a className="has-text-light" href="#">Careers</a></li> 
                  <li className="mb-4"><a className="has-text-light" href="#">Press</a></li> 
                  <li><a className="has-text-light" href="#">Blog</a></li> 
                </ul>
              </div>
              <div className="column is-3 mb-8 mb-0-desktop">
                <h3 className="mb-6 title is-7 has-text-white"> 
                  Pages
                </h3>
                <ul>
                  <li className="mb-4"><a className="has-text-light" href="#">Login</a></li> 
                  <li className="mb-4"><a className="has-text-light" href="#">Register</a></li> 
                  <li className="mb-4"><a className="has-text-light" href="#">Add list</a></li> 
                  <li><a className="has-text-light" href="#">Contact</a></li> 
                </ul>
              </div>
              <div className="column is-3 mb-8 mb-0-desktop">
                <h3 className="mb-6 title is-7 has-text-white"> 
                  Legal
                </h3>
                <ul>
                  <li className="mb-4"><a className="has-text-light" href="#">Terms</a></li> 
                  <li className="mb-4"><a className="has-text-light" href="#">About Us</a></li> 
                  <li className="mb-4"><a className="has-text-light" href="#">Team</a></li> 
                  <li><a className="has-text-light" href="#">Privacy</a></li> 
                </ul>
              </div>
              <div className="column is-3 mb-8 mb-0-desktop">
                <h3 className="mb-6 title is-7 has-text-white"> 
                  Resources
                </h3>
                <ul>
                  <li className="mb-4"><a className="has-text-light" href="#">Blog</a></li> 
                  <li className="mb-4"><a className="has-text-light" href="#">Service</a></li> 
                  <li className="mb-4"><a className="has-text-light" href="#">Product</a></li> 
                  <li><a className="has-text-light" href="#">Pricing</a></li> 
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="has-text-centered has-text-light"> 
          All rights reserved © flexcode dev
        </p>
      </div>
    </section>
  );
};

export default Footer;
