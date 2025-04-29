import React from 'react';
import profileImage from '../assets/portfolio_image.jpg';

const Navbar = ({ scrollToSection }) => {
  const navItems = ['About', 'Education', 'Skills', 'Projects', 'Review', 'Contact'];

  return (
    <nav>
      <div id="profile">
        <img id="nav-profile-img" src={profileImage} alt="Aditya's Profile" />
        <p>Aditya Nawal</p>
      </div>
      <ul>
        {navItems.map((item) => (
          <li key={item}>
            <a href={`#${item}`} onClick={(e) => {
              e.preventDefault();
              scrollToSection(item);
            }}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
