import React from 'react';

const About = () => {
  return (
    <div className="about-section">
      <div className="container text-center">
        <h2 className="display-4">About Me</h2>
        <p className="lead mt-3">
          I'm a web developer with a passion for creating interactive and responsive websites. I enjoy solving problems and continuously learning new technologies.
        </p>
        <img src="https://via.placeholder.com/300" alt="About Me" className="img-fluid rounded-circle mb-4" />
        <h3>Mark Alvin Bermal</h3>
        <ul className="list-unstyled mt-4">
          <li><strong>Frontend:</strong> React, HTML, CSS, JavaScript</li>
          <li><strong>Backend:</strong> Node.js, Express</li>
          <li><strong>Tools:</strong> Git, GitHub, Figma</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
