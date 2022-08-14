import "./App.css"
import { Routes, Route } from "react-router-dom"
import React from "react"
import { Navbar } from "./Components/Navbar"
import ZipCodeInput from "./Components/ZipCodeInput"
import fetchPetList from "./Components/fetchPetList"
import PetList from "./Components/PetList"
import Footer from "./Components/Footer"

import Home from "./pages/Home.js"
import Adopt from "./pages/Adopt"
import Volunteer from "./pages/Volunteer"
import Donate from "./pages/Donate"
import About from "./pages/About.js"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="adopt" element={<Adopt />} />
        <Route path="volunteer" element={<Volunteer />} />
        <Route path="donate" element={<Donate />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
