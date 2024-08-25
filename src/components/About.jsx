import PersonalPhoto from "../assets/personalPhoto.jpg"
function About() {
  return (
    <div id="About" className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center">
      <img data-aos="fade-down" width={290} src={PersonalPhoto} height={290} className="rounded-full border-sky-600 img_glow" />
        <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
            <h1 data-aos="fade-right" className="text-[52px] font-semibold leading-normal uppercase text-cyan-400 mb-5">About Me</h1>
          <p data-aos="fade-right">
          I&apos;m a 18 y/o <b>software developer</b> passionate about <b>building exciting digital projects</b>. 
          I specialize in front-end development and web design, using the latest technologies in the web development space.
           I enjoy staying up-to-date with emerging trends and  applying them to real-world challenges while continuously refining my skills.
          </p>
          <div className="flex mt-8 gap-2">
            <div className="flex items-center justify-center">
                <div className="flex space-x-2 sm: m-6">
                <button className="neno-button shadow-x1 hover:shadow-sky-900/50 text-white border-2 hover:bg-sky-800 border-sky-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden">Resume</button>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About