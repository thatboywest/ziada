
import { FaCircle } from 'react-icons/fa'; 

const SectionComponent = () => {
  return (
    <section className="section py-20">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-6 mb-12 mb-0-desktop">
            <span className="is-size-7">
              <small className="has-text-info has-text-weight-semibold">What's ziada</small>
            </span>
            <h2 className="mt-8 mb-10 title is-5">Welcome to Ziada.com, your go-to platform for finding casual jobs and freelance opportunities</h2>
            <p className="mb-12 is-size-5 has-text-grey-dark">"Ziada" is a Swahili word that means "extra" or "more." Our mission is to help you earn that extra income by connecting you with casual job opportunities that suit your skills and availability</p>
            <a className="button is-primary mt-4" href="#">Get started</a>
          </div>
          <div className="column is-6">
            <div className="has-background-light px-5 px-10-desktop is-rounded">
              <div className="py-8" style={{ borderBottom: '1px solid #DADFE9' }}>
                <div className="is-flex is-align-items-start">
                  <span className="mr-6 is-flex-shrink-0 is-flex is-justify-content-center is-align-items-center has-background-info has-text-white" style={{ width: '48px', height: '48px', borderRadius: '100%' }}>
                    <FaCircle size={24} />
                  </span>
                  <div>
                    <p className="mb-4 has-text-grey-dark"> Discover a variety of casual jobs and freelance gigs that match your skills and schedule</p>
                  </div>
                </div>
              </div>
              <div className="py-8" style={{ borderBottom: '1px solid #DADFE9' }}>
                <div className="is-flex is-align-items-start">
                  <span className="mr-6 is-flex-shrink-0 is-flex is-justify-content-center is-align-items-center has-background-warning has-text-white" style={{ width: '48px', height: '48px', borderRadius: '100%' }}>
                    <FaCircle size={24} />
                  </span>
                  <p className="has-text-grey-dark">Find the right talent quickly and effortlessly through our streamlined platform.</p>
                </div>
              </div>
              <div className="py-8">
                <div className="is-flex is-align-items-start">
                  <span className="mr-6 is-flex-shrink-0 is-flex is-justify-content-center is-align-items-center has-background-danger has-text-white" style={{ width: '48px', height: '48px', borderRadius: '100%' }}>
                    <FaCircle size={24} />
                  </span>
                  <div>
                    <p className="mt-4 has-text-grey-dark">Join Our Community: Be part of a vibrant network where flexibility meets opportunity</p>
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

export default SectionComponent;
