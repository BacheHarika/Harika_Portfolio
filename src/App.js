
import React from 'react'
import Home from './Pages/Home'
import Resume from './Pages/Resume'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const App = () => {

  return(
     <>
     <Navbar/>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/resume" element={<Resume />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
<Footer/>
</>
  )
}

 export default App








