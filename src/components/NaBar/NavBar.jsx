import React, { useState } from 'react';
import './NavBar.css'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuIconClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="main_container" id="p260">
        <div className="sub_container">
          <div className="logo_and_nav_icon_container">
            <button className="nav_icon" id="navR" onClick={handleMenuIconClick}>
              {/* ... (SVG icon content) ... */}
            </button>
            <div className="logo_container">
              <a href="/">
                {/* ... (Logo image content) ... */}
              </a>
            </div>
          </div>

          {/* Search Bar (Desktop) */}
          <form autoComplete="off" action="/searchspaceurlname" method="POST" role="search" className="search-area mobilehide">
            <input
              autoComplete="off"
              placeholder="search in neede bd..."
              type="text"
              className="search-field"
              name="Searched"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default NavBar;
