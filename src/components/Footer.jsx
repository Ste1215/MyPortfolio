import {FaGithub, FaInstagram, FaLinkedinIn, FaYoutube} from "react-icons/fa";
import logo from "../assets/logo-transparent-svg.svg";
function Footer() {
  return (
    <footer className="bg-slate-800 text-white lg:p-5 flex flex-col items-center justify-center lg:flex-row flex-wrap lg:gap-32">
        <div className="flex flex-col gap-3 p-5 justify-center items-center">
          <span><img width={60} height={80} src={logo}/></span>
          <p className="text-center">Have a project in mind? <br /> Let`s bring your ideas to life. Contact me today.
            <br/></p>
        </div>
        <div className="flex flex-col p-5 justify-center items-center">
          <h2 className="text-[22px] font-semibold leanding-normal text-sky-400">Services</h2>
          <ul>
            <li className="my-1 cursor-pointer">Web Development</li>
            <li className="my-1 cursor-pointer">Web Design</li>
            <li>SEO</li>
          </ul>
        </div>
        <div className="flex flex-col p-5 lg:items-baseline">
            <h2 className="flex justify-center items-center text-[22px] mb-3 font-semibold leanding-normal text-sky-400">Contact</h2>
            <p className="my-1">Email: stefanopoiattibsns@gmail.com</p>
            <p className="my-1">Phone: +39 3499554110</p>
        </div>
        <div className="flex flex-col p-5 justify-center items-center lg:items-baseline lg:mb-10">
          <h2 className="flex justify-center mb-5 text-[22px] font-semibold leanding-normal text-sky-400">Follow Me</h2>
            <div className="flex items-center justify-center space-x-5">
              <a href="https://www.youtube.com/channel/UCulcHYCJD6e-T4-lI5gWM8Q" className="text-[1.2rem] flex justify-center items-center hover:text-sky-600 transition-all duration-150 ease-in-out">
                <FaYoutube/>  
              </a>
              <a href="https://www.linkedin.com/in/stefano-poiattidev" className="text-[1.2rem] flex justify-center items-center hover:text-sky-600 transition-all duration-150 ease-in-out">
                <FaLinkedinIn/>
              </a>
              <a href="" className="text-[1.2rem] flex justify-center items-center hover:text-sky-600 transition-all duration-150 ease-in-out">
                <FaInstagram/>
              </a>
              <a href="https://github.com/Ste1215" className="text-[1.2rem] flex justify-center items-center hover:text-sky-600 transition-all duration-150 ease-in-out">
                <FaGithub/>
              </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer;