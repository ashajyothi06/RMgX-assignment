import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import logo from './assets/google-logo.png';

function App() {
  return (
    <div className="app">
      {/* Top Navbar */}
      <header className="app-header">
        <div className="left-links">
          <a href="#">About</a>
          <a href="#">Store</a>
        </div>
        <div className="right-links">
          <a href="#">Gmail</a>
          <a href="#">Images</a>
          
          {/* Google Apps Icon (3x3 dots) */}
          <div className="apps-icon">
            {[...Array(9)].map((_, i) => (
              <span key={i} className="dot" />
            ))}
          </div>

          {/* Profile Icon */}
          <div className="profile-icon">V</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="app-main">
        <img src={logo} alt="Google Logo" className="google-logo" />
        <SearchBar />
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-top">India</div>
        <div className="footer-bottom">
          <div className="footer-left">
            <a href="#">Advertising</a>
            <a href="#">Business</a>
            <a href="#">How Search works</a>
          </div>
          <div className="footer-right">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Settings</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
