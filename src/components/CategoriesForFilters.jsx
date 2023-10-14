import getFilter from "../redux/actions/getFilter";
import {useDispatch} from "react-redux"
import {useState} from "react"
import { setCategory } from "../redux/slices/categorySlice";

const CategoriesFilter = () => {

    const dispatch = useDispatch();
    const [selectCategory, setSelectCategory]= useState('')
     
    const handleSelection = (category) =>{
        
        setSelectCategory(category)
        
        dispatch(setCategory({category:category}));
        dispatch(getFilter({category:category}))
    }



    return (
      <div className="w-auto ">

        <div className="flex justify-center items-center">
          <button
            onClick={() => handleSelection("Monitors")}
            className={`w-[76px] h-[60px] rounded-xl border border-violet-200 flex flex-col justify-center items-center ${
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
          <button
            onClick={() => handleSelection("Headsets")}
            className={`w-[76px] h-[60px] rounded-xl border border-violet-200 flex flex-col justify-center items-center ${
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
          <button
            onClick={() => handleSelection("Keyboards")}
            className={`w-[76px] h-[60px] rounded-xl border border-violet-200 flex flex-col justify-center items-center ${
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
          <button
            onClick={() => handleSelection("Mice")}
            className={`w-[76px] h-[60px] rounded-xl border border-violet-200 flex flex-col justify-center items-center ${
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
          </div>
          <div className="mt-4" />

          
          <div className="flex flex-wrap justify-center">
          <button
            onClick={() => handleSelection("Mousepads")}
            className={`w-[76px] h-[60px] rounded-xl border border-violet-200 flex flex-col justify-center items-center ${
              selectCategory === "Mousepads" ? "bg-gray-200" : ""
            }`}
          >

            <img
              src="https://i.postimg.cc/cHHDyF8k/Mousepads.png"
              className="w-[30px] h-[30px]"
            />
            <div className="font-jakarta-sans font-semibold text-stone-900 text-[10px]">
              MousePads
            </div>
          </button>
          <button
            onClick={() => handleSelection("Controllers")}
            className={`w-[76px] h-[60px] rounded-xl border border-violet-200 flex flex-col justify-center items-center ${
              selectCategory === "Controllers" ? "bg-gray-200" : ""
            }`}
          >
            <img
              src="https://i.postimg.cc/Xqzjn1J2/Controllers.png"
              className="w-[30px] h-[30px]"
            />
            <div className="font-jakarta-sans font-semibold text-stone-900 text-[10px]">
              Controllers
            </div>
          </button>
          <button
            onClick={() => handleSelection("Earbuds")}
            className={`w-[76px] h-[60px] rounded-xl border border-violet-200 flex flex-col justify-center items-center ${
              selectCategory === "Earbuds" ? "bg-gray-200" : ""
            }`}
          >
            <img
              src="https://i.postimg.cc/L4YLZck6/Earbuds.png"
              className="w-[30px] h-[30px]"
            />
            <div className="font-jakarta-sans font-semibold text-stone-900 text-[10px]">
              Earbuds
            </div>
          </button>
          <button
            onClick={() => handleSelection("Microphones")}
            className={`w-[76px] h-[60px] rounded-xl border border-violet-200 flex flex-col justify-center items-center ${
              selectCategory === "Microphones" ? "bg-gray-200" : ""
            }`}
          >
            <img
              src="https://i.postimg.cc/3xKk9VGG/Microphones.png"
              className="w-[30px] h-[30px]"
            />
            <div className="font-jakarta-sans font-semibold text-stone-900 text-[10px]">
              Microphones
            </div>
          </button>
        </div>  
        </div>
        
          
      );
    };
    
    export default CategoriesFilter;