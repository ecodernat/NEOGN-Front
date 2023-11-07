import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Bolsadecompras from '../utils/images/AppbarIcons/Bolsadecompras.png';
import Corazon from '../utils/images/AppbarIcons/Corazon.png';
import Usuario from '../utils/images/AppbarIcons/Usuario.png';
import Logo from '../utils/images/AppbarIcons/NEOGN.png';
import Banner from '../components/TopBar/Banner';
import Searchbar from './TopBar/SearchBar';

const NavBar = () => {
  const handleSearchFocus = (isFocused) => {
     
  };

  
  return (
    <div>
      <Banner />
      <nav
        style={{ borderBottom: '1px solid #ccc' }}
        className="bg-white hidden md:flex flex-col md:flex-row md:justify-between md:items-center p-4 space-y-2 md:space-y-0 md:space-x-5"
      >
        <div className="flex items-center space-x-16  ">
          <img
            src={Logo}
            alt="neogn Logo"
            className="h-16 w-auto max-w-full pl-4 rounded-3"
          />
          <Link to="/" className="hover:text-gray-300 text-xl font-mono">
            HOME
          </Link>
          <Link to="/Search" className="hover:text-gray-300 text-xl font-mono">
            CATEGORIES
          </Link>
          <Link to="Aboutpage" className="hover:text-gray-300 text-xl font-mono">
            ABOUT
          </Link>
        </div>
        <Searchbar onFocusChange={handleSearchFocus} />
        <div className="flex items-center space-x-12  ">
          <Link to="/Cart" className="hover:text-gray-300">
            <img
              src={Bolsadecompras}
              alt="Bolsa de Compras"
              className="h-8 cursor-pointer"
            />
          </Link>
          <Link to="/Wishlist" className="hover:text-gray-300">
            <img
              src={Corazon}
              alt="Lista de Deseos"
              className="h-8 cursor-pointer"
            />
          </Link>
          <Link to="/Account" className="hover:text-gray-300 ">
            <img
              src={Usuario}
              alt="Usuario"
              className="h-8 cursor-pointer pr-9 "
            />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
