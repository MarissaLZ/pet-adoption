import "./App.css"
import { Routes, Route } from "react-router-dom"
import React from "react"
import { Navbar } from "./Components/Navbar"
import Home from "./Pages/Home.js"
import Adopt from "./Pages/Adopt"
import Volunteer from "./Pages/Volunteer"
import Donate from "./Pages/Donate"
import About from "./Pages/About.js"

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
    </div>
  )
}

export default App
