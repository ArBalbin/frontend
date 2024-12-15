import React from 'react';

const Home = () => {
  return (
    <div className="hero-section text-center text-white">
      <div className="container py-5">
        <h1 className="display-4 fw-bold">Welcome to My Personal Website</h1>
        <p className="lead mb-4">
          I'm passionate about web development, technology, and creating beautiful user experiences.
          Explore my website to learn more!
        </p>
        <a href="/about" className="btn btn-primary btn-lg">Learn More About Me</a>
      </div>
    </div>
  );
};

export default Home;
