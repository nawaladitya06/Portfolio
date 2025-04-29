import React, { forwardRef } from 'react';
import profileImage from '../assets/portfolio_image.jpg';

const HeroSection = forwardRef((props, ref) => {
  return (
    <div className="bento-item hero-intro" ref={ref}>
      <div className="profile-section">
        <div className="profile-img-container">
          <img id="profile-img" src={profileImage} alt="Aditya's Profile" />
          <svg className="profile-stars" viewBox="0 0 24 24">
            <path
              fill="white"
              d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
            ></path>
          </svg>
          <svg className="profile-stars right" viewBox="0 0 24 24">
            <path
              fill="white"
              d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
            ></path>
          </svg>
        </div>

        <div className="introduction">
          <h2>Hello, I'm Aditya</h2>
          <p>
            <span className="quote-marks">"</span>
            BSc IT Student passionate about technology & learning!
            <span className="quote-marks">"</span>
          </p>
        </div>
      </div>

      <div className="info-section">
        <h3>About Me</h3>
        <p>
          I'm a BSc IT Student currently in my third year, deeply passionate about technology and
          programming. With a strong foundation in web development fundamentals, I'm constantly expanding
          my knowledge across various programming languages and frameworks.
        </p>

        <p>
          My academic journey has equipped me with analytical thinking and problem-solving skills that I
          apply to every project I undertake. I enjoy tackling complex challenges that push me to learn
          new concepts and techniques.
        </p>

        <p>
          Outside of academics, I participate in coding competitions and tech meetups to stay connected
          with the developer community. I'm particularly interested in full-stack development and aspire
          to become an expert developer who can create efficient, scalable, and user-friendly
          applications.
        </p>

        <p>
          In my free time, I experiment with personal projects to implement what I've learned and explore
          new technologies. I believe in continuous learning and am currently focusing on enhancing my
          JavaScript and backend development skills.
        </p>
      </div>
    </div>
  );
});

export default HeroSection;