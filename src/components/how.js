import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import Navbar from "../Home/Navbar";
import Howsystem from "../Home/Howsystem";
import Instruction from "../Home/Instruction";
import Footer from "../Home/Footer";

export default function How() {
  useEffect (() => {
    Aos.init ();
  }, [])
  return (
    <>
      <Navbar/>
      <div className="md:pt-20 pt-10 pb-10">
        <Howsystem/>
        <Instruction/>
      </div>
      <Footer/>
    </>
  )
}