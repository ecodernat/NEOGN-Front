import { Link } from "react-router-dom";

import Monitors from "../utils/images/CategoriesIcons/Monitors.png";
import Headsets from "../utils/images/CategoriesIcons/Headsets.png";
import Keyboards from "../utils/images/CategoriesIcons/Keyboards.png";
import Mice from "../utils/images/CategoriesIcons/Mice.png";
import Mousepads from "../utils/images/CategoriesIcons/Mousepads.png";
import Controllers from "../utils/images/CategoriesIcons/Controllers.png";
import Earbuds from "../utils/images/CategoriesIcons/Earbuds.png";
import Microphones from "../utils/images/CategoriesIcons/Microphones.png";
import Back from "../utils/images/BasicIcons/BackIcon.png";
import  getFilter  from '../redux/actions/getFilter'; 
import { useState } from "react";
import { useDispatch } from "react-redux";

const Categories = () => {

  const dispatch = useDispatch();
  const [selectCategory, setSelectCategory]= useState('')
  const handleSelection = (category) =>{
    setSelectCategory(category)
    dispatch(getFilter({category:category}))
}

  return (
    <div className="px-4 pt-8">
      <div className="flex flex-row gap-3  mb-8 items-center font-general-sans">
        <Link to={"/search"}>
          <img src={Back} className="w-8 h-8" />
        </Link>
        <p className=" font-general-sans">Categories</p>
      </div>
      <div className="grid grid-cols-2 gap-6 ">
        {[
          { image: Monitors, name: "Monitors" },
          { image: Headsets, name: "Headsets" },
          { image: Keyboards, name: "Keyboards" },
          { image: Mice, name: "Mice" },
          { image: Mousepads, name: "Mousepads" },
          { image: Controllers, name: "Controllers" },
          { image: Earbuds, name: "Earbuds" },
          { image: Microphones, name: "Microphones" },
        ].map((el) => (
          <Link to="/search">
            <button
            onClick={() => handleSelection(el.name)}>
            <div className="flex flex-col items-center p-4 border-gray-300 rounded-lg shadow-md transition  duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
              <img className="w-20 h-20 mb-2" src={el.image} />

              <p className="text-center font-semibold">{el.name}</p>
            </div>              
            </button>

          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;