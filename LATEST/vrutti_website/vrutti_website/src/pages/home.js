import React,{useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import WorkSec from '../components/WorkSec';
import CareerSec from '../components/CareerSec';
import Footer from '../components/Footer';
import Ikigai from '../components/ikigai';


const Home = () => {

const [isOpen,setIsOpen] = useState(false);

const toggle = () => {
    setIsOpen(!isOpen);
}

  return (
    <>
       <Sidebar isOpen={isOpen} toggle={toggle} />
       <Navbar toggle={toggle} />
       <HeroSection />
       <CareerSec />
       <WorkSec />
       <Ikigai />
       <Footer />

    </>
  );
};

export default Home
