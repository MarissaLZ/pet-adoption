import "./App.css"
import { Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home.js"
import Adopt from "./pages/Adopt"
import Volunteer from "./pages/Volunteer"
import Donate from "./pages/Donate"
import About from "./pages/About"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import PetBio from "./pages/PetBio"
import Favorites from "./pages/Favorites"
import Profile from "./pages/Profile"
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
        <Route path="login" element={<Login />} />
        <Route path="/petbio/:id" element={<PetBio />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
