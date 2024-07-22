import React, {useState ,useEffect} from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Program from './components/Program';
import About from './components/About';
import Plans from './components/Plans';
import Footer from './components/Footer';
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [theme, setTheme] = useState(true);
  const [menu, setMenu] = useState(true);

  useEffect(() => {
    Aos.init({
      offset: 200, 
      delay: 0, 
      duration: 2500, 
      easing: "ease", 
      once: true, 
    });

    return () => {
      Aos.refresh();
    };
  }, []);


  return (
    <div>
      <Navbar theme={theme} setTheme = {setTheme} menu = {menu} setMenu = {setMenu} />
      <Routes>
        <Route path='/' element = {<Home theme={theme} />} />
        <Route path='/program' element = {<Program theme={theme}  />} />
        <Route path='/about' element = {<About theme={theme} />} />
        <Route path='/plan' element = {<Plans theme={theme} />} />
      </Routes>
      <Footer  theme={theme} />
    </div>
  )
}

export default App
