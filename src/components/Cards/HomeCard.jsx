import {Link} from "react-router-dom"
const HomeCard = ({ image,id }) => {
  return (
    <div className="inline-flex flex-col items-start gap-[8px] relative">
      <Link to={`/${id}`}>
        <div className="w-[160px] h-[160px] relative bg-violet-50 rounded-3xl">
          <img
            className="relative w-auto h-auto object-cover"
            alt="Rectangle"
            src={image}
          />
        </div>
      </Link>
      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        <div className="text-stone-900 text-sm font-semibold font-jakarta-sans leading-[21px] tracking-normal">
          HyperX Alloy FPS
        </div>
        <div className="text-red-600 text-sm font-semibold font-jakarta-sans leading-[21px] tracking-normal">
          $ 126.00
        </div>
      </div>
      <div className="inline-flex items-center justify-center gap-[10px] p-[6px] absolute top-[6px] left-[130px] bg-white rounded-[5px] shadow-[0px_1px_10px_#00000040]">
        <img
          src="https://i.postimg.cc/Dy9pyQCB/Dark-heart-svgrepo-com.png"
          className="!relative !w-[16px] !h-[16px]"
        />
      </div>
    </div>
  );
};

export default HomeCard;
