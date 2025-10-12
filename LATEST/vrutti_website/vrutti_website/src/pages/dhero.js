import React,{useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import DHeroSec from '../components/DHeroSec';
import KeyCategories from '../components/KeyCategories';
import HowWeHelp from '../components/HowWeHelp';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
const Dhero = () => {

    
const [isOpen,setIsOpen] = useState(false);
    
const toggle = () => {
        setIsOpen(!isOpen);
    }


  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <DHeroSec />
      <KeyCategories />
      <HowWeHelp />
      <CallToAction />
      <Footer />

    </div>
  );
};

export default Dhero;
