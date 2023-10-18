import React, { useState } from "react";
import Searchbar from "./SearchBar";
import Sidebar from "./Sidebar";
import ActiveHeartImage from "../../utils/images/AppbarIcons/Neogn.jpeg";
import Banner from "./Banner";


const TopBar = () => {
  // con este estado cuando se expanda el search se oculta todo
  const [isSearchFocused, setIsSearchFocused] = useState(false);

//manejo el cambio de enfoque de la barra de búsqueda
  const handleSearchFocus = (focused) => {
    setIsSearchFocused(focused);
  };


  return (
    <div> 
      <Banner /> 
    <div className="w-full h-auto flex items-center ">
      {!isSearchFocused && <Sidebar />}
      {!isSearchFocused && (
        <img
          src={ActiveHeartImage}
          alt="Active Heart"
          className="h-8 w-auto lg:hidden mr-28"
        />
      )}
      <div className="lg:flex mr-7 items-center"></div>
      <Searchbar onFocusChange={handleSearchFocus} />
      
    </div>
    
    
    </div>
  );
};

export default TopBar;
