
import TechCar from "../assets/project1.mp4"
import calculator from "../assets/project2.mp4"
import RevSite from "../assets/project3.mp4"
import NFTs from "../assets/project4.mp4"
import CryptoPlace from "../assets/project5.mp4"
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
      <div id="Projects" className="p-20 flex flex-col items-center justify-center">
      <h1 data-aos="fade-right" className="text-[48px] font-semibold mb-20 leanding-normal uppercase text-sky-400">
      Projects
      </h1> 
      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 justify-around gap-10">  
        <a href="https://github.com/Ste1215/TechCar">
            <video 
              data-aos="fade-up" 
              className="flex items-center justify-center h-32 rounded-3xl w-35 border-2 border-sky-600 b_glow cursor-pointer" 
              src={TechCar} 
              alt="TechCar"
              loop
              autoPlay
              muted
            />
        </a>
            <a href="https://github.com/Ste1215/Calculator">
                <video 
                  data-aos="fade-down" 
                  className="flex items-center justify-center h-32 rounded-3xl w-35 border-2 border-sky-600 b_glow cursor-pointer" 
                  src={calculator} 
                  alt="calculator"
                  loop
                  autoPlay
                  muted
                />
              </a>
         <a href="https://github.com/Ste1215/Revsite"> 
            <video 
              data-aos="fade-up" 
              className="flex items-center justify-center h-32 rounded-3xl w-35 border-2 border-sky-600 b_glow cursor-pointer" 
              src={RevSite} 
              alt="RevSite"
              loop
              autoPlay
              muted
            />
        </a>
        <a href="https://github.com/Ste1215/">
            <video 
              data-aos="fade-down" 
              className="flex items-center justify-center h-32 rounded-3xl w-35 border-2 border-sky-600 b_glow cursor-pointer" 
              src={NFTs} 
              alt="NFTs"
              loop
              autoPlay
              muted
            />
        </a>
        <a href="https://github.com/Ste1215/CryptoPlace">
            <video 
              data-aos="fade-down" 
              className="flex items-center justify-center h-32 rounded-3xl w-35 border-2 border-sky-600 b_glow cursor-pointer" 
              src={CryptoPlace} 
              alt="CryptoPlace"
              loop
              autoPlay
              muted
            />
        </a>
      </div>
      <div className="mt-10 flex flex-row text-white items-center justify-center ">
        <a href="https://github.com/Ste1215" className="text-white hover:text-gray-300 "><b>All Projects</b></a>
        <FaExternalLinkAlt className="ml-2"/>
      </div>
    </div>
  )
}

export default Projects;