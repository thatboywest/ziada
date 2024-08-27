import React from 'react';

const NewsletterSection = () => {
  return (
    <section className="section py-40-desktop is-relative has-background-light is-clipped">
      <div className="container is-relative">
        <div className="has-text-centered">
          <h2 className="title mb-2">Join Our Newsletter</h2>
          <p className="subtitle mb-6">Sign me up for Ziada newsletters to get exclusive perks.</p>
          <div className="columns is-centered">
            <div className="column is-narrow">
              <div className="field has-addons">
                <div className="control">
                  <input 
                    className="input is-medium" 
                    type="text" 
                    placeholder="john@example.com" 
                  />
                </div>
                <div className="control">
                  <a className="button is-dark" href="#">Join</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
