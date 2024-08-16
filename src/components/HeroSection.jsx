
const HeroSection = () => {
  const heroStyle = {
    backgroundImage: 'url(https://res.cloudinary.com/dhrybaucr/image/upload/v1723269855/wstugb4xhethdpaoaj1f.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    color: 'white',
  };


  return (
    <section className="hero is-fullheight" style={heroStyle}>
      <div className="hero-body" style={{ position: 'relative', zIndex: 2 }}>
        <div className="container">
          <div className="columns">
            
            <div className="column is-half">
              <div className="content">
                <h1 className="title">Find Your Next Casual Job</h1>
                <h2 className="subtitle">Discover flexible work opportunities and connect with employers looking for short-term help</h2>
                <div className="buttons">
                  <a className="button is-primary">Register</a>
                  <a className="button is-light">About</a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default HeroSection;
