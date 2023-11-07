import React, { useState } from 'react';
import Searchbar from './SearchBar';
import Sidebar from './Sidebar';
import ActiveHeartImage from '../../utils/images/AppbarIcons/Neogn.jpeg';

const TopBar = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearchFocus = (focused) => {
    setIsSearchFocused(focused);
  };

  return (
    
    <div className="">
      <div className="md:flex"> 
      </div>
      <div className="w-full h-auto flex items-center md:hidden">
        {!isSearchFocused && <Sidebar />}
        {!isSearchFocused && (
          <img
            src={ActiveHeartImage}
            alt="Active Heart"
            className="h-8 w-auto lg:hidden mr-15"
          />
        )}
        <div className="lg:flex mr-7 items-center md:hidden"></div>
        <Searchbar onFocusChange={handleSearchFocus} />
      </div>
    </div>
  );
};

export default TopBar;
 