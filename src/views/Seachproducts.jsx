import React from 'react'
import Sidebar from '../components/TopBar/Sidebar';
import TopBar from '../components/TopBar/TopBar';
import Searchbar from '../components/TopBar/SearchBar';

 const Category = () => {
  return (


    <div className="flex  flex-col h-screen">
        <Sidebar/>
        <TopBar/>
        <Searchbar/>
        <div> </div>=
        <h2>
            by category 

        </h2>

    </div>
  )
}


export default Category;