import React,{useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const DContact = () => {

const [isOpen,setIsOpen] = useState(false);

const toggle = () => {
    setIsOpen(!isOpen);
}

  return (
    <>
       <Sidebar isOpen={isOpen} toggle={toggle} />
       <Navbar toggle={toggle} />
       <Contact />
       <Footer />

    </>
  );
};

export default DContact;
