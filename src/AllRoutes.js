import React from 'react'
import { Routes, Route } from 'react-router-dom';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';

function AllRoutes() {
  return (
    <Routes>
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route exact path="/" element={<Home />} />
    </Routes>
  )
}

export default AllRoutes;
