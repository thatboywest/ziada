const HeroSection = () => {
  const heroStyle = {
    backgroundImage: 'url(https://res.cloudinary.com/dhrybaucr/image/upload/v1724571810/pddv5faazzsirm6mrzry.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    color: 'white',
  };

  return (
    <section className="hero is-fullheight" style={heroStyle}>
      <div className="hero-body" style={{ position: 'relative', zIndex: 2 }}>
        <div className="container has-text-centered"> 
          <div className="columns is-centered"> 
            <div className="column is-half">
              <div className="content">
                <h1 className="title is-size-1 has-text-black">Find Your Next Casual Job</h1>
                <h2 className="subtitle is-size-3 has-text-black">
                  Discover flexible work opportunities and connect with employers looking for short-term help
                </h2>
                <div className="buttons is-centered has-text-black"> 
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
