import { useEffect ,useRef} from "react";
import emailjs from '@emailjs/browser';
import Aos from "aos";
function Contact() {

  const form= useRef();

  const sendEmail = (e) => {
    
    e.preventDefault();
    emailjs
      .sendForm('service_16g08ai', 'template_rq6i3ty', form.current,
      {
        publicKey: 'wUnz3gs2CoZso5L4_',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };

  useEffect(()=>{
    Aos.init({duration: 1000});
    },[])

  return (
    <div id="Contact" className="p-4 lg:p-20 flex flex-col items-center justify-center">
      <h1 data-aos="fade-left" className="text-[48px] font-semibold mb-20 leanding-normal uppercase text-sky-400">Contact Me</h1>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-2 lg:w-1/2">
          <div className="lg:flex gap-6">
            <input className="w-full lg:my-3 my-6 rounded-lg bg-slate-800 p-4 border-2 border-sky-600 b_glow text-xl text-slate-300" type="text" placeholder="Name..." required />
            <input className="w-full lg:my-3 my-6 rounded-lg bg-slate-800 p-4 border-2 border-sky-600 b_glow text-xl text-slate-300" type="email"  placeholder="Email..." required />
          </div>
         <textarea  className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-sky-600 b_glow text-xl text-slate-300"  name="" id="" cols="30" rows="10" placeholder="Write Your Message..." />
         <button className="neno-button shadow-xl hover:shadow-sky-900 text-white border border-sky-600 bg-sky-600 hover:bg-transparent py-3 px-7 uppercase relative overflow-hidden b_glow text-xl text-bold my-6" type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Contact