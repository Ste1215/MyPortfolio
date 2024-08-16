import { AiFillGithub } from "react-icons/ai"
import { FaLinkedinIn, FaYoutube } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa6"
import imgLogo from "../assets/logo.jpg"
import Aos from 'aos'
import  "aos/dist/aos.css";
import { useEffect } from "react"
function Banner() {
  //animation library
useEffect(()=>{
Aos.init({
    easing: 'ease-out-quart',
    delay: 0,
    duration: 750,
});
},[])
  return (
    <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
        <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
            <h1 data-aos="fade-right" className="text-[52px] font-semibold leading-normal mb-8 text-cyan-400 uppercase">Welcome to <span className="text-sky-500">My World</span></h1>
          <p data-aos="fade-left">Turning ideas into stunning digital experiences through creative design and modern web development. Let`s build something impactful together.</p>
          <div className="flex mt-8 gap-2">
            <div className="flex items-center justify-center">
                <div className="flex space-x-2">
                  <a href="https://www.youtube.com/channel/UCulcHYCJD6e-T4-lI5gWM8Q" className="text-sky-600 hover:text-sky-500 rounded-full glow p-2">
                  <FaYoutube className="text-[28px]"></FaYoutube>
                  </a>
                  <a href="https://www.linkedin.com/in/stefano-poiattidev" className="text-sky-600 hover:text-sky-500 rounded-full glow p-2">
                    <FaLinkedinIn className="text-[28px]"></FaLinkedinIn>
                  </a>
                  <a href="" className="text-sky-600 hover:text-sky-500 rounded-full glow p-2">
                    <FaInstagram className="text-[28px]"></FaInstagram>
                  </a>
                  <a href="https://github.com/Ste1215" className="text-sky-600 hover:text-sky-500 rounded-full glow p-2">
                  <AiFillGithub className="text-[28px]"></AiFillGithub>
                  </a>
                </div>
            </div>
          </div>
        </div>
        <img data-aos="fade-up" src={imgLogo} width={290} height={290} className="rounded-full border-2 p-1 border-s-sky-500 img_glow" alt="" />
    </div>
  )
}

export default Banner;