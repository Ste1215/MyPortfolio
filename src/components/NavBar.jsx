import { Link } from "react-scroll";
import { useState } from "react";
import  {FaTimes} from "react-icons/fa"
import { CiMenuFries } from "react-icons/ci";
import logo from "../assets/logo-transparent-svg.svg";
function NavBar() {
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const content=
    <>
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
        <ul className="text-center text-xl p-20">
            <Link spy={true} smooth={true} to="Home">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</li>
            </Link>
            <Link spy={true} smooth={true} to="About">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">About</li>
            </Link>
            <Link spy={true} smooth={true} to="Services">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Services</li>
            </Link>
            <Link spy={true} smooth={true} to="Projects">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Projects</li>
            </Link>
            <Link spy={true} smooth={true} to="Contact">
                <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Contact</li>
            </Link>
        </ul>
    </div>
    </> 
  return (
    <nav>
        <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4  border-b border-slate-800">
            <div className="flex items-center flex-1">
                <img className="p-0 m-0 cursor-pointer" width={45} src={logo}/>
            </div>
            <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
                <div className="flex-10">
                    <ul className="flex gap-8 mr-16 text-[18px] hover:underline-sky-500">
                        <Link spy={true} smooth={true} to="Home">
                            <li className="hover:text-sky-600 transition border-b-2 border-slate-900 hover: text-sky-600 cursor-pointer hover:underline decoration-sky-500">Home</li>
                        </Link>
                        <Link spy={true} smooth={true} to="About">
                            <li className="hover:text-sky-600 transition border-b-2 border-slate-900 hover: text-sky-600 cursor-pointer hover:underline decoration-sky-500">About</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Services">
                            <li className="hover:text-sky-600 transition border-b-2 border-slate-900 hover: text-sky-600 cursor-pointer hover:underline decoration-sky-500">Services</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Projects">
                            <li className="hover:text-sky-600 transition border-b-2 border-slate-900 hover: text-sky-600 cursor-pointer hover:underline decoration-sky-500">Projects</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Contact">
                            <li className="hover:text-sky-600  transition border-b-2 border-slate-900 hover: text-sky-600 cursor-pointer hover:underline decoration-sky-500">Contact</li>
                        </Link>
                    </ul>
                </div>
            </div>
            <div>
                {click && content}
            </div>
            <button className="block sm:hidden transition" onClick={handleClick}>
            {click ? <FaTimes/> : <CiMenuFries/>}
            </button>
        </div>
    </nav>
  )
}

export default NavBar;
