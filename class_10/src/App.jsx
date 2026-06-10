import { useState , useEffect}from 'react'
import './App.css'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Products from './pages/products'


import React from 'react'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  )
}

export default App
