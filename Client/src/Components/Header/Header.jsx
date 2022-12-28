import React, { useRef } from "react";
import "./Header.css";
import logo from "../../Assets/airbnb-logo-icon-png-svg.png";
import searchIcon from "../../Assets/search-icon.png";
import { Link } from "react-router-dom";

const Header = ({ getHomes, setHomes }) => {
  const searchInput = useRef(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    const searchQuery = searchInput.current.value;
    // Use the getHomes function to retrieve the list of homes
    const homes = await getHomes(searchQuery);
    // Set the list of homes in the parent component's state
    setHomes(homes);
  };
  return (
    <header className='header-container'>
      <Link to={`/`} className='logo-container' id='home-btn'>
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
