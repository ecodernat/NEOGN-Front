import React from "react";
import { Link } from "react-router-dom";
import Back from "../utils/images/BasicIcons/backIcon.png";
import Monitors from "../utils/images/CategoriesIcons/Monitors.png";
import Headsets from "../utils/images/CategoriesIcons/Headsets.png";
import Keyboards from "../utils/images/CategoriesIcons/Keyboards.png";
import Mice from "../utils/images/CategoriesIcons/Mice.png";
import Mousepads from "../utils/images/CategoriesIcons/Mousepads.png";
import Controllers from "../utils/images/CategoriesIcons/Controllers.png";
import Earbuds from "../utils/images/CategoriesIcons/Earbuds.png";
import Microphones from "../utils/images/CategoriesIcons/Microphones.png";
import getFilter from "../redux/actions/getFilter";
import { useDispatch } from "react-redux";

const Categories = () => {
  const dispatch = useDispatch();

  const handleSelection = (category) => {
    dispatch(getFilter({ category: category }));
  };

  return (
    <div>
      <div className="flex flex-row gap-3 px-4 mb-8 mt-8 font-general-sans">
        <Link to={"/Search"}>
          <img src={Back} className="w-[30px] h-[30px]" />
        </Link>
        <p className=" font-general-sans">Categories</p>
      </div>
      <div className="grid grid-cols-2 gap-y-3 mb-4 px-4 gap-2">
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
          <Link to={`/Search`}>
            <button onClick={() => handleSelection(el.name)}>
              <div className="flex flex-col justify-center items-center w-[190px] h-[120px] border border-gray-100 rounded-[18px] shadow-lg">
                <img className="w-[70px] h-[70px]" src={el.image} />
                <p>{el.name}</p>
              </div>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
