import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/slices/categorySlice";
import getFilter from "../redux/actions/getFilter";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loading from "../views/Loading";

const categories = [
  {
      name: "Monitors",
    image: "https://i.postimg.cc/xjXTwHc6/monitor-9678589-7924228.png",
  },
  {
     name: "Headsets",
    image: "https://i.postimg.cc/xdsn7TYr/gaming-headset-7480997-6138641.png",
  },
  {
      name: "Keyboards",
    image: "https://i.postimg.cc/DysfZTQs/keyboard-gaming-6013628-4979944.png",
  },
  {
    name: "Mice",
    image: "https://i.postimg.cc/1Rb5stFs/gaming-mouse-5756086-4818641.png",
  },
  {
     name: "MousePads",
    image: "https://i.postimg.cc/cHHDyF8k/Mousepads.png",
  },
  {
      name: "Controllers",
    image: "https://i.postimg.cc/Xqzjn1J2/Controllers.png",
  },
  {
     name: "Earbuds",
    image: "https://i.postimg.cc/L4YLZck6/Earbuds.png",
  },
  {
     name: "Microphones",
    image: "https://i.postimg.cc/3xKk9VGG/Microphones.png",
  },
  
];

const CategoriesFilter = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleSelection = async (category) => {
    setIsLoading(true);
    try {
      await dispatch(setCategory({ category }));
      await dispatch(getFilter({ category }));
      setIsLoading(false);
    } catch (error) {
      console.error("Error en la acción:", error);
      setIsLoading(false);
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 10,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "138px",
    responsive: [
      {
        breakpoint: 928,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleImageClick = (category) => {
    handleSelection(category.name);
  };

  return (
    <div className="w-full  mx-auto p-1">
      {isLoading && <Loading />}
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(category)}
            className="w-10 h-10 sm:w-10 cursor-pointer flex flex-col  justify-center items-center "
          >
            <img
              src={category.image}
              className="object-cover w-[50px] h-[50px] rounded-xl  border border-violet-300 bg-gray-100"
              alt={`category-${index}`}
            />
            <div className="mt-1 text-center text-xs font-light font-bold text-gray-100 transparent-text ">
              {category.name}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CategoriesFilter;
