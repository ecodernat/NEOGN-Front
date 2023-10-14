import Carousel from "react-multi-carousel";
import CustomDot from "./CustomDot";
import "react-multi-carousel/lib/styles.css";

const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 1536, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 640 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  const slides = [
    "https://i.postimg.cc/8pJwJ91R/Black-Friday-Web-Banner-03.jpg",
    "https://i.postimg.cc/PTGVZXvP/Eh-Kcg-O2-Xs-AAu-4-Y-jpglarge.jpg",
    "https://i.postimg.cc/yscbXsxp/MAG271cqr-new-Banner.jpg",
    "https://i.postimg.cc/7xLKDbdQ/Hyper-X-Product-Banner-desktop-1920x1080-1.jpg",
  ];

  return (
    <Carousel
      showDots={true}
      responsive={responsive}
      infinite={true}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      customDot={<CustomDot />}
      className="rounded-[48px] h-[220px] sm:h-auto"
    >
      {slides.map((imageUrl, index) => (
        <div key={index}>
          <img
            className="w-auto h-auto"
            src={imageUrl}
            alt={`Slide ${index + 1}`}
          />
        </div>
      ))}
    </Carousel>
  );
};
export default Slider;