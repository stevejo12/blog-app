import React from 'react'
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

function AllRoutes() {
  return (
    <Routes>
      <Route path ="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route exact path="/" element={<Home />} />
    </Routes>
  )
}

export default AllRoutes;
