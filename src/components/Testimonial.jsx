import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'; 

const TestimonialsSection = () => {
  return (
    <section 
      className="section py-32-tablet is-relative is-clipped" 
      style={{
        backgroundImage: 'url(https://res.cloudinary.com/dhrybaucr/image/upload/v1723271388/xhwwmnzyhgt7ne1pquig.png)', // Replace with your background image path
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
    
      <div className="container mb-20 is-relative">
 
        <div className="columns is-vcentered">
          <div className="column is-8"></div>
          <div className="column is-4">
            <div className="ml-auto-desktop is-flex removed"></div>
          </div>
        </div>
      </div>
      <div className="container m-auto">
        <div className="columns is-multiline">
          <div className="column is-12-tablet is-4-desktop">
            <div className="px-8 py-16" style={{ border: '2px solid #fff', borderRadius: '8px' }}>
              <div className="mx-auto px-4 is-relative">
                <FaQuoteLeft className="is-absolute is-top-0 is-left-0" size={20} color="#fff" />
                <FaQuoteRight className="is-absolute is-top-0 is-right-0" size={20} color="#fff" />
                <div className="mb-6 mb-0-tablet px-4 px-10-tablet">
                  <h5 className=" has-leading-3 has-text-white mb-8">Thanks, feugiat tellus a sad tincidunt ultrices. Phasellus non libero tempus odio vestibulum ultricies.</h5>
                  <div className="is-vcentered is-flex is-align-items-center">
                    <img 
                      className="mb-4 mb-0-tablet mr-6 is-rounded img-fluid" 
                      style={{ width: '64px', height: '64px', borderRadius: '50%' }} 
                      src="https://via.placeholder.com/64" 
                      alt="Placeholder Person" 
                    />
                    <p className="has-text-light mb-0">Alice Kenowski, NYC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-12-tablet is-4-desktop">
            <div className="px-8 py-16" style={{ border: '2px solid #fff', borderRadius: '8px' }}>
              <div className="mx-auto px-4 is-relative">
                <FaQuoteLeft className="is-absolute is-top-0 is-left-0" size={20} color="#fff" />
                <FaQuoteRight className="is-absolute is-top-0 is-right-0" size={20} color="#fff" />
                <div className="mb-6 mb-0-tablet px-4 px-10-tablet">
                  <h5 className="has-leading-3 has-text-white mb-8">Tonight I had interdum at ante porta, eleifend feugiat nunc. In semper euismod me a accumsan. Thanks! 👏💥</h5>
                  <div className="is-vcentered is-flex is-align-items-center">
                    <img 
                      className="mb-4 mb-0-tablet mr-6 is-rounded img-fluid" 
                      style={{ width: '64px', height: '64px', borderRadius: '50%' }} 
                      src="https://via.placeholder.com/64" 
                      alt="Placeholder Person" 
                    />
                    <p className="has-text-light mb-0">TIA O’Halleran, NYC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-12-tablet is-4-desktop">
            <div className="px-8 py-16" style={{ border: '2px solid #fff', borderRadius: '8px' }}>
              <div className="mx-auto px-4 is-relative">
                <FaQuoteLeft className="is-absolute is-top-0 is-left-0" size={20} color="#fff" />
                <FaQuoteRight className="is-absolute is-top-0 is-right-0" size={20} color="#fff" />
                <div className="mb-6 mb-0-tablet px-4 px-10-tablet">
                  <h5 className=" has-leading-3 has-text-white mb-8">Thanks, feugiat tellus a sad tincidunt ultrices. Phasellus non libero tempus odio vestibulum ultricies.</h5>
                  <div className="is-vcentered is-flex is-align-items-center">
                    <img 
                      className="mb-4 mb-0-tablet mr-6 is-rounded img-fluid" 
                      style={{ width: '64px', height: '64px', borderRadius: '50%' }} 
                      src="https://via.placeholder.com/64" 
                      alt="Placeholder Person" 
                    />
                    <p className="has-text-light mb-0">Alice Kenowski, NYC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
