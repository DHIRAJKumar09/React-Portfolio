import logo from './logo.svg';
import './App.css';
import Logo from './assets/download.jpg'
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Intro from './Components/Intro/Intro';
import { Skills } from './Components/Skills/Skills';
import Qualification from './Components/Qualification/Qualification';
import {Projects} from './Components/Projects/Projects.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer.js';
import { Internship } from './Components/Internship/Internship.js';



function App() {
  return (
    <div className="App">
   
   <Navbar logo={Logo}/>
    {/* <BrowserRouter>
    
      <Routes>
        <Route  path="/" element={<Intro/>} />
        <Route path='/qualification' element={<Qualification/>}/>
        <Route path='/research' element={<Experience/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter> */}
    
     <Intro/>
     <Qualification/>
     <Experience/>
     <Internship/>
     <Projects/>
     <Skills/>
     <Contact/>
     <Footer/>
    

    </div>
  );
}

export default App;
