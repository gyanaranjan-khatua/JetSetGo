import { Route, Routes } from "react-router-dom"
import About from "./Pages/About"
import Blogs from "./Pages/Blogs"
import Contact from "./Pages/Contact"
import Gallery from "./Pages/Gallery"
import Home from "./Pages/Home"
import Navbar from "./Navbar/navbar"
import Faq from "./Pages/Faq"
import Footer from "./Footer/Footer"
import BlogPost from "./Pages/BlogPost"
import Book from "./Pages/Book"
import DestinationDetail from "./Pages/DestinationDetail"
import BookingForm from "./Pages/BookingForm"


function App() {
 

  return (
    <>
    <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/blog" element={<Blogs/>} />
      <Route path="/blog/:id" element={<BlogPost />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/book" element={<Book />} />
      <Route path="/destination/:place" element={<DestinationDetail />} />
         <Route path="/booking" element={<BookingForm />} />


     </Routes>
    <Footer />
    </>
  )
}

export default App
