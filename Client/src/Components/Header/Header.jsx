import React, { useRef } from "react";
import "./Header.css";
import logo from "../../Assets/airbnb-logo-icon-png-svg.png";
import searchIcon from "../../Assets/search-icon.png";
import { Link } from "react-router-dom";
const Header = (props) => {
  const searchInput = useRef(null);

  const handleSearch = (event) => {
    event.preventDefault();
    const searchQuery = searchInput.current.value;
    props.onSearch(searchQuery); // Call the onSearch prop function and pass the search query
  };

  return (
    <header className='header-container'>
      <Link href='/' className='logo-container' id='home-btn'>
        <img className='logo' src={logo} alt='logo' />
        <h1 className='logo-text'>airbnb</h1>
      </Link>
      <form className='input-container' onSubmit={handleSearch}>
        <input
          className='search-input'
          type='search'
          name='search'
          placeholder='Search for City , state or country'
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
