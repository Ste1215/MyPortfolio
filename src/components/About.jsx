import PersonalPhoto from "../assets/personalPhoto.jpg"
function About() {
  return (
    <div id="About" className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center">
      <img data-aos="fade-down" width={290} src={PersonalPhoto} height={290} className="rounded-full border-sky-600 img_glow" />
        <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
            <h1 data-aos="fade-right" className="text-[52px] font-semibold leading-normal uppercase text-cyan-400 mb-5">About Me</h1>
          <p data-aos="fade-right">
            Hi! I`m a passionate web developer, focused on helping businesses create optimal digital experiences. My goal is to transform ideas into digital realities, from web design (UI/UX) to front-end application development, utilizing my programming skills and frameworks such as React, Tailwind CSS, and Bootstrap.
            Currently, I`m in the final year of my studies and will be graduating within a year. 
            In the meantime, I dedicate myself to personal projects and continuously refine my technical skills.
             I`m also passionate about content creation, sharing my knowledge and tutorials on web development through platforms like YouTube and TikTok.
            I`m always eager to take on new challenges, expand my expertise as a developer, and contribute to innovative and impactful projects.
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