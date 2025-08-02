import { Route, Routes, useLocation } from "react-router-dom"
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
import { useEffect } from "react"
import Lenis from "@studio-freight/lenis";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import InternationalTour from "./Pages/InternationalTour"
import NationalTour from "./Pages/NationalTour"

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}



function App() {
 
 useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,  // Adjust scroll speed
      smooth: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

   const handleWhatsAppClick = () => {
    const phoneNumber = "919556677620";
    const message = encodeURIComponent("Hello JetSetGo I am interested in your Service");
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${message}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    window.open(whatsappUrl, "_blank");
  };
  return (
    <>
     <ScrollToTop />
    <Navbar/>
     <motion.div
        className="fixed right-6 md:right-6 bottom-20 md:bottom-20 z-100 h-[60px] w-[60px] rounded-full p-[2px] bg-gradient-to-r from-lime-400 via-green-500 to-lime-400 bg-[length:200%_200%] shadow-xl"
        initial={{ backgroundPosition: "0% 50%", y: 0 }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          y: [0, -5, 0],
        }}
        transition={{
          backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        onClick={handleWhatsAppClick}
      >
        <div className="h-full w-full rounded-full bg-green-600/20 md:bg-white/20 backdrop-blur-lg shadow-xl flex justify-center items-center cursor-pointer">
          <FaWhatsapp className="text-3xl text-white" />
        </div>
      </motion.div>
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
         <Route path="/internationalTour" element={<InternationalTour />} />
      <Route path="/nationalTour" element={<NationalTour />} />

     </Routes>
    <Footer />
    </>
  )
}

export default App
