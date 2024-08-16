import { useEffect } from "react";
import Aos from "aos";
function Services() {
  useEffect(()=>{
    Aos.init({duration: 1000});
    },[])
  return (
    <div id="Services" className="p-20 flex flex-col items-center justify-center">
      <h1 data-aos="fade-right" className="text-[48px] font-semibold mb-20 leanding-normal uppercase text-sky-400">Services</h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 justify-around gap-20">
        <h2 data-aos="fade-up"  className="text-[26px] flex items-center justify-center font-semibold h-36 text-sky-800 rounded-3xl w-44 border-2 border-sky-600 b_glow">HTML5</h2>
        <h2 data-aos="fade-down" className="text-[26px] flex items-center justify-center font-semibold h-36 text-sky-800 rounded-3xl w-44 border-2 border-sky-600 b_glow ">CSS3</h2>
        <h2 data-aos="fade-up" className="text-[26px] flex items-center justify-center font-semibold h-36 text-sky-800 rounded-3xl w-44 border-2 border-sky-600 b_glow ">Javascript</h2>
        <h2 data-aos="fade-down" className="text-[26px] flex items-center justify-center font-semibold h-36 text-sky-800 rounded-3xl w-44 border-2 border-sky-600 b_glow ">Angular</h2>
        <h2 data-aos="fade-up" className="text-[26px] flex items-center justify-center font-semibold h-36 text-sky-800 rounded-3xl w-44 border-2 border-sky-600 b_glow ">React</h2>
      </div>
    </div>
  )
}

export default Services;