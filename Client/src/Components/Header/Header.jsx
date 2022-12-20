import React, { useRef } from "react";
import "./Header.css";
import logo from "../../Assets/airbnb-logo-icon-png-svg.png";
import searchIcon from "../../Assets/search-icon.png";

const Header = () => {
  const searchInput = useRef();

  const handleSearch = (event) => {
    event.preventDefault();
    const searchQuery = searchInput.current.value;
    // const searchResults = /* search results */
    // Optionally, set searchResults in state or pass to a prop
    console.log(searchQuery);
  };

  return (
    <header className='header-container'>
      <a href='' className='logo-container' id='home-btn'>
        <img className='logo' src={logo} alt='logo' />
        <h1 className='logo-text'>airbnb</h1>
      </a>
      <form className='input-container' onSubmit={handleSearch}>
        <input
          className='search-input'
          type='search'
          name='search'
          placeholder='Search for City...'
          ref={searchInput}
        />
        <button type='submit' className='search-icon-btn'>
          <img src={searchIcon} className='search-icon' alt='search-icon' />
        </button>
      </form>
    </header>
  );
};

export default Header;
