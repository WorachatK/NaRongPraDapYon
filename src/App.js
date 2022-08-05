import { useState } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Headbar from "./components/Headbar/Headbar";
import Herosection from "./components/Herosection/Herosection";
import LinkNav from "./components/LinksNav/LinkNav";
import MyService from "./components/MyService/MyService";
import Navbar from "./components/Navbar/Navbar";

import { animateScroll as scroll } from 'react-scroll';


function App() {

  const toggleHome = () =>{
    scroll.scrollToTop();
  }

  const [openMenu,setOpenMenu] = useState(false)

  const handleOpen = () =>{
    setOpenMenu(!openMenu)
    console.log(openMenu);
  }

  return (
    <div>
      <LinkNav openMenu={openMenu} handleOpen={handleOpen} toggleHome={toggleHome}/>
      <Headbar/>
      <Navbar handleOpen={handleOpen} toggleHome={toggleHome}/>
      <Herosection/>
      <About/>
      <MyService/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
