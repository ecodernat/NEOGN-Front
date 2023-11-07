import React from "react";
import imagenGrande from "../utils/images/AppbarIcons/NEOGN.png";
import instagram from "../utils/images/BasicIcons/IInstagram.png"
import Github from "../utils/images/BasicIcons/GGithub.png"
import Linkedin from "../utils/images/BasicIcons/lindekin.png"



const linkedinUrls = {
  maxiAnguita: "https://www.linkedin.com/in/anguita-roberto-maximiliano-944774256",
  juanArenas: "https://www.linkedin.com/in/jkarenas/",
  danielHernandez: "https://www.linkedin.com/in/danielhhdev/",
  alanRuiz: "https://www.linkedin.com/in/alanruiz-dev/"
};


const AboutPage = () => {
  return (
    <div className=" bg-zinc-900 min-h-screen flex flex-col lg:flex-row items-center justify-center p-8 text-white">
      <div className="lg:w-1/2 p-8 rotate-3">
        <img src={imagenGrande} alt="Imagen Grande" className="w-full h-auto rounded-lg "style={{ backgroundColor: 'transparent' }} />
      </div>
      <div className="lg:w-1/2 max-w-2xl text-center lg:text-left p-8">
        <h1 className="text-4xl font-bold mb-6 text-white">¡Welcome to  NEOGN!</h1>
        <p className="p-2">
        At our company, we are dedicated to offering incredible experiences to our customers. With a passionate team and high-quality products, we are here to meet all your needs.
        </p>
        <h2 className="text-2xl font-bold mb-4">Our history</h2>
        <p className="text-lg mb-10 text-white">
        Founded in October 2022, our company has grown to become a leader in the industry. Our dedication to excellence has led us to where we are today and we continue to strive to improve and exceed our customers' expectations.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-white">Our team</h2>
        <p className="text-lg mb-10 text-white">
        We have a diverse and talented team of professionals who are passionate about what they do. Each member of our team brings a unique perspective and exceptional skills, allowing us to provide exceptional service to our clients.
        </p>
        <div className="p-2 mt-4 mb-6 ">
        <p className="text-2xl text-white font-bold mb-2">We are proud to present the creators of the page:</p>
        </div>
        
        
        <a href={linkedinUrls.maxiAnguita} className=" flex items-center text-xl text-gray-400 hover:text-teal-500">
            <img src={Linkedin} alt="LinkedIn" className="w-8 h-8 mr-2" />
            <span>Maxi Anguita</span>
          </a>
          <a href={linkedinUrls.juanArenas} className="flex items-center text-xl text-gray-400 hover:text-teal-500">
            <img src={Linkedin} alt="LinkedIn" className="w-8 h-8 mr-2" />
            <span>Juan Arenas</span>
          </a>
          <a href={linkedinUrls.danielHernandez} className="flex items-center text-xl text-gray-400 hover:text-teal-500">
            <img src={Linkedin} alt="LinkedIn" className="w-8 h-8 mr-2" />
            <span>Daniel Hernandez</span>
          </a>
          <a href={linkedinUrls.alanRuiz} className="flex items-center text-xl text-gray-400 hover:text-teal-500">
            <img src={Linkedin} alt="LinkedIn" className="w-8 h-8 mr-2 " />
            <span>Alan Ruiz</span>
          </a>
        <div className="flex items-center justify-center lg:justify-start mt-8 space-x-4">
  <a href="#" className="flex items-center text-2xl text-gray-400  hover:text-teal-500">
    <img src={Github} alt="Github" className="w-12 h-12" />
    <span className="ml-4">follow us Github</span>
    <i className="facebook"></i>
  </a>
  <a href="#" className="flex items-center text-2xl text-gray-400 hover:text-teal-500">
    <img src={instagram} alt="Instagram" className="w-13 h-14 hover:text-teal-500" />
    <span className="ml-4">follow us Twitter</span>
    <i className="twitter"></i>
  </a>
  <a href="#" className="flex items-center text-2xl text-gray-400 hover:text-teal-500">
    <img src={Linkedin} alt="Linkedin" className="w-12 h-12 " />
    <span className="ml-4">follow us Instagram</span>
    <i className="instagram"></i>
    
  </a>
  
</div>

      </div>
    </div>
    
  );
};

export default AboutPage;
