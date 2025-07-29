import { Route, Routes } from "react-router-dom"
import About from "./Pages/About"
import Blogs from "./Pages/Blogs"
import Contact from "./Pages/Contact"
import Gallery from "./Pages/Gallery"
import Home from "./Pages/Home"
import Navbar from "./Navbar/navbar"
import Faq from "./Pages/Faq"


function App() {
 

  return (
    <>
    <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/blog" element={<Blogs/>} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/faq" element={<Faq />} />

     </Routes>
    </>
  )
}

export default App
