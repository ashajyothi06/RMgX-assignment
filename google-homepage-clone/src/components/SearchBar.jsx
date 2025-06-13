import React from 'react';
import './SearchBar.css';
import { FaSearch, FaMicrophone } from 'react-icons/fa';
import lensIcon from '../assets/image.png';


const SearchBar = () => {
  return (
    <div className="search-bar-container">
      {/* Search Box */}
      <div className="search-box">
        <FaSearch className="icon left-icon" />
        <input type="text" />

        <div className="right-icons">
          <FaMicrophone className="icon" />
          <img
            src={lensIcon}
            alt="Lens"
            className="lens-icon"
            style={{ width: '24px', height: '24px', marginLeft: '10px', cursor: 'pointer' }}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="buttons">
        <button>Google Search</button>
        <button>I’m Feeling Lucky</button>
      </div>

      {/* Bottom Info */}
      <div className="bottom-info">
        {/* Gemini Section */}
        <div className="gemini">
          <img
            src="https://www.gstatic.com/images/branding/product/2x/gemini_64dp.png"
            alt="Gemini"
            className="gemini-icon"
          />
          <a href="#" className="gemini-link">
            <span className="black-text">Google Gemini</span>, review my CV and help me prep for an interview
          </a>
        </div>

        {/* Line Break */}
        <div style={{ marginBottom: '10px' }}></div>
        <br />

        {/* Language Links */}
        <div className="languages">
          Google offered in:&nbsp;
          <a href="#">हिन्दी</a>
          <a href="#">বাংলা</a>
          <a href="#">తెలుగు</a>
          <a href="#">मराठी</a>
          <a href="#">தமிழ்</a>
          <a href="#">ગુજરાતી</a>
          <a href="#">ಕನ್ನಡ</a>
          <a href="#">മലയാളം</a>
          <a href="#">ਪੰਜਾਬੀ</a>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
