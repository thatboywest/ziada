
import { FaCircle } from 'react-icons/fa'; // You can choose different icons as needed

const SectionComponent = () => {
  return (
    <section className="section py-20">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-6 mb-12 mb-0-desktop">
            <span className="is-size-7">
              <small className="has-text-info has-text-weight-semibold">What's new at Shuffle</small>
            </span>
            <h2 className="mt-8 mb-10 title is-2">Lorem ipsum dolor sit amet consectutar domor at elis</h2>
            <p className="mb-12 is-size-5 has-text-grey-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan aliquet orci.</p>
            <a className="button is-primary" href="#">Activate Demo</a>
          </div>
          <div className="column is-6">
            <div className="has-background-light px-5 px-10-desktop is-rounded">
              <div className="py-8" style={{ borderBottom: '1px solid #DADFE9' }}>
                <div className="is-flex is-align-items-start">
                  <span className="mr-6 is-flex-shrink-0 is-flex is-justify-content-center is-align-items-center has-background-info has-text-white" style={{ width: '48px', height: '48px', borderRadius: '100%' }}>
                    <FaCircle size={24} />
                  </span>
                  <div>
                    <p className="mb-4 has-text-grey-dark">Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus sit amet tempus vestibulum.</p>
                  </div>
                </div>
              </div>
              <div className="py-8" style={{ borderBottom: '1px solid #DADFE9' }}>
                <div className="is-flex is-align-items-start">
                  <span className="mr-6 is-flex-shrink-0 is-flex is-justify-content-center is-align-items-center has-background-warning has-text-white" style={{ width: '48px', height: '48px', borderRadius: '100%' }}>
                    <FaCircle size={24} />
                  </span>
                  <p className="has-text-grey-dark">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
              </div>
              <div className="py-8">
                <div className="is-flex is-align-items-start">
                  <span className="mr-6 is-flex-shrink-0 is-flex is-justify-content-center is-align-items-center has-background-danger has-text-white" style={{ width: '48px', height: '48px', borderRadius: '100%' }}>
                    <FaCircle size={24} />
                  </span>
                  <div>
                    <p className="mb-4 has-text-grey-dark">Etiam pellentesque non nibh non pulvinar. Mauris posuere, tellus sit amet tempus vestibulum.</p>
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
