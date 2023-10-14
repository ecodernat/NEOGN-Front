import { Link } from "react-router-dom";
const TitleSection = ({title, location}) => {
    return (
       <div className="w-full h-auto">
        <div className="w-full h-[50px] flex justify-start absolute z-10 items-center">
          <Link to={location} className="inline max-w-max ml-6">
            <img
              className="icon w-auto h-[14px]"
              src="https://www.svgrepo.com/show/43165/arrowheads-of-thin-outline-to-the-left.svg"
            />
          </Link>
        </div>

        <div className="w-full h-[50px] bg-white flex justify-start pl-20 md:justify-center md:pl-0">
          <h1 className="inline-block max-content relative text-center text-black text-2xl font-bold leading-[49px]">
            {title}
          </h1>
        </div>
      </div> 
    )
}

export default TitleSection;