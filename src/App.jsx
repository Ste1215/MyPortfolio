import './App.css'
import {ThreeDots} from "react-loader-spinner";
import { useEffect, useState } from "react";
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import About from './components/About';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  const [loading,setLoading]= useState(false);
  
   useEffect(() => {
     setLoading(true);
     setTimeout(() => {
      setLoading(false);
     }, 1000);
   },[]);

  return (
    <>
    {
      loading ?
        <div className="bg-slate-900 h-[100vh] flex justify-center items-center">
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#21a5ba"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />
        </div>
      :
      <div className="bg-slate-900">
      <NavBar></NavBar>
      <Banner></Banner>
      <About></About>
      <Stack></Stack>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
    }

    </>
  )
}

export default App
