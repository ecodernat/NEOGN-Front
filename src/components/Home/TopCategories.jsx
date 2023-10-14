import getFilter from "../../redux/actions/getFilter";
import { Link } from 'react-router-dom'
import {useDispatch} from "react-redux"
import {useState} from "react"


const TopCategories = () => {
    const dispatch = useDispatch();
    const [selectCategory, setSelectCategory]= useState('')
    const handleSelection = (category) =>{
        setSelectCategory(category)
        dispatch(getFilter({category:category}))
    }



    return (
      <div className="w-auto ">

        <div className="flex justify-center items-center ">
        <Link to="/search">
          <button
            onClick={() => handleSelection("Monitors")}
            className={`w-[76px] h-[60px] rounded-xl border border-violet-200 flex flex-col justify-center items-center m-2${
              selectCategory === "Monitors" ? "bg-gray-200" : ""
            }`}
          >
            <img
              src="https://i.postimg.cc/xjXTwHc6/monitor-9678589-7924228.png"
              className="w-[30px] h-[30px]"
            />
            <div className="font-jakarta-sans font-semibold text-stone-900 text-[10px]">
              Monitors
            </div>
          </button>
          </Link>
          <Link to="/search">
          <button
            onClick={() => handleSelection("Headsets")}
            className={`w-[76px] h-[60px] rounded-xl border border-violet-200 flex flex-col justify-center items-center m-2 ${
              selectCategory === "Headsets" ? "bg-gray-200" : ""
            }`}
          >
            <img
              src="https://i.postimg.cc/xdsn7TYr/gaming-headset-7480997-6138641.png"
              className="w-[30px] h-[30px]"
            />
            <div className="font-jakarta-sans font-semibold text-stone-900 text-[10px]">
              Headsets
            </div>
          </button>
          </Link>
          <Link to="/search">
          <button
            onClick={() => handleSelection("Keyboards")}
            className={`w-[76px] h-[60px] rounded-xl border border-violet-200 flex flex-col justify-center items-center m-2${
              selectCategory === "Keyboards" ? "bg-gray-200" : ""
            }`}
          >
            <img
              src="https://i.postimg.cc/DysfZTQs/keyboard-gaming-6013628-4979944.png"
              className="w-[30px] h-[30px]"
            />
            <div className="font-jakarta-sans font-semibold text-stone-900 text-[10px]">
              Keyboards
            </div>
          </button>
          </Link>
          <Link to="/search">
          <button
            onClick={() => handleSelection("Mice")}
            className={`w-[76px] h-[60px] rounded-xl border border-violet-200 flex flex-col justify-center items-center m-2${
              selectCategory === "Mice" ? "bg-gray-200" : ""
            }`}
          >
            <img
              src="https://i.postimg.cc/1Rb5stFs/gaming-mouse-5756086-4818641.png"
              className="w-[30px] h-[30px]"
            />
            <div className="font-jakarta-sans font-semibold text-stone-900 text-[10px]">
              Mice
            </div>
          </button>
          </Link>
          </div>
          <div className="mt-4" />

          
          <div className="flex flex-wrap justify-center">

         

        </div>  
        </div>
        
          
      );
    };
    
    export default TopCategories;