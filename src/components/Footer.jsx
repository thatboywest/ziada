import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className="section py-12 py-20-desktop is-primary">
      <div className="container">
        <div className="columns mb-8 pb-20" style={{ borderBottom: '1px solid #DADFE9' }}>
          <div className="column is-4 mb-12 mb-0-desktop">
            <a className="is-inline-block mb-3 title is-5 has-text-dark" href="#">
              <img
                src="https://via.placeholder.com/150" 
                alt="Logo"
                style={{ height: '28px' }}
                width="auto"
              />
            </a>
            <p className="mb-6 has-mw-xs has-text-grey-dark">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="is-flex">
              <a
                className="is-flex is-justify-content-center is-align-items-center mr-4 has-text-grey-dark has-background-light"
                href="#"
                style={{ width: '40px', height: '40px', borderRadius: '100%' }}
              >
                <FaFacebookF size={20} />
              </a>
              <a
                className="is-flex is-justify-content-center is-align-items-center mr-4 has-text-grey-dark has-background-light"
                href="#"
                style={{ width: '40px', height: '40px', borderRadius: '100%' }}
              >
                <FaTwitter size={20} />
              </a>
              <a
                className="is-flex is-justify-content-center is-align-items-center mr-4 has-text-grey-dark has-background-light"
                href="#"
                style={{ width: '40px', height: '40px', borderRadius: '100%' }}
              >
                <FaInstagram size={20} />
              </a>
              <a
                className="is-flex is-justify-content-center is-align-items-center mr-4 has-text-grey-dark has-background-light"
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
                <h3 className="mb-6 title is-7">Company</h3>
                <ul>
                  <li className="mb-4"><a className="has-text-grey-dark" href="#">About Us</a></li>
                  <li className="mb-4"><a className="has-text-grey-dark" href="#">Careers</a></li>
                  <li className="mb-4"><a className="has-text-grey-dark" href="#">Press</a></li>
                  <li><a className="has-text-grey-dark" href="#">Blog</a></li>
                </ul>
              </div>
              <div className="column is-3 mb-8 mb-0-desktop">
                <h3 className="mb-6 title is-7">Pages</h3>
                <ul>
                  <li className="mb-4"><a className="has-text-grey-dark" href="#">Login</a></li>
                  <li className="mb-4"><a className="has-text-grey-dark" href="#">Register</a></li>
                  <li className="mb-4"><a className="has-text-grey-dark" href="#">Add list</a></li>
                  <li><a className="has-text-grey-dark" href="#">Contact</a></li>
                </ul>
              </div>
              <div className="column is-3 mb-8 mb-0-desktop">
                <h3 className="mb-6 title is-7">Legal</h3>
                <ul>
                  <li className="mb-4"><a className="has-text-grey-dark" href="#">Terms</a></li>
                  <li className="mb-4"><a className="has-text-grey-dark" href="#">About Us</a></li>
                  <li className="mb-4"><a className="has-text-grey-dark" href="#">Team</a></li>
                  <li><a className="has-text-grey-dark" href="#">Privacy</a></li>
                </ul>
              </div>
              <div className="column is-3 mb-8 mb-0-desktop">
                <h3 className="mb-6 title is-7">Resources</h3>
                <ul>
                  <li className="mb-4"><a className="has-text-grey-dark" href="#">Blog</a></li>
                  <li className="mb-4"><a className="has-text-grey-dark" href="#">Service</a></li>
                  <li className="mb-4"><a className="has-text-grey-dark" href="#">Product</a></li>
                  <li><a className="has-text-grey-dark" href="#">Pricing</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="has-text-centered has-text-grey-dark">All rights reserved © flexcode dev</p>
      </div>
    </section>
  );
};

export default Footer;
