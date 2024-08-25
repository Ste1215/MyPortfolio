import { useEffect } from "react";
import Aos from "aos";
import html from "../assets/html.svg"
import js from "../assets/js.svg"
import css from "../assets/css.svg"
import react from "../assets/react.svg"
import java from "../assets/java.svg"
import tailwind from "../assets/tailwind.svg"
function Stack() {
  useEffect(()=>{
    Aos.init({duration: 1000});
    },[])
  return (
    <div id="Stack" className="p-20 flex flex-col items-center justify-center">
      <h1 data-aos="fade-right" className="text-[46px] font-semibold mb-20 leanding-normal uppercase text-sky-400">Tech Stack</h1>
      <div className="grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 justify-around gap-20">
        <h2 data-aos="fade-up"  className="flex items-center justify-center h-33 text-sky-800 rounded-3xl  border-2 border-sky-600 b_glow">
          <img src={html} alt=""/>
        </h2>
        <h2 data-aos="fade-down" className="flex items-center justify-center h-33 text-sky-800 rounded-3xl  border-2 border-sky-600 b_glow ">
        <img src={css} alt=""/>
        </h2>
        <h2 data-aos="fade-up" className="flex items-center justify-center h-33 text-sky-800 rounded-3xl  border-2 border-sky-600 b_glow ">
        <img src={js} alt=""/>
        </h2>
        <h2 data-aos="fade-down" className="flex items-center justify-center h-33 text-sky-800 rounded-3xl  border-2 border-sky-600 b_glow ">
        <img src={react} alt=""/>
        </h2>
        <h2 data-aos="fade-up" className="flex items-center justify-center h-33 text-sky-800 rounded-3xl  border-2 border-sky-600 b_glow ">
        <img src={tailwind} alt=""/>
        </h2>
        <h2 data-aos="fade-up" className="flex items-center justify-center h-33 text-sky-800 rounded-3xl  border-2 border-sky-600 b_glow ">
        <img src={java} alt=""/>
        </h2>
      </div>
    </div>
  )
}

export default Stack;