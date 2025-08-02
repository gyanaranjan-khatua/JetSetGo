"use client"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import { ChevronLeft, ChevronRight, Phone, Calendar, Star, MapPin } from "lucide-react"
import DisneyLandParis from "./../assets/heroimg/DisneyLandParis.jpeg"
import MountTitlis from "./../assets/heroimg/MountTitlis.jpeg"
import SwarovskiCrystalmuseum from "./../assets/heroimg/SwarovskiCrystalmuseum.jpeg"
import Interlaken from "./../assets/heroimg/Interlaken.jpeg"
import Grindewald from "./../assets/heroimg/Grindewald.jpeg"
import Amsterdam from "./../assets/heroimg/Amsterdam.jpeg"
import Vietnam from "./../assets/heroimg/Vietnam.jpeg"
import { Link } from "react-router-dom"
// Sample images (replace with your own URLs or imports)
const slides = [
  {
    image: DisneyLandParis,
    title: "Disney Land Paris",
    description: "Feel the beauty of untouched wilderness and discover hidden gems",
    location: "Swiss Alps",
    rating: 4.9,
  },
  {
    image: MountTitlis,
    title: "Mount Titlis",
    description: "Discover vibrant cityscapes and urban adventures",
    location: "Kerala, India",
    rating: 4.8,
  },
  {
    image:
      SwarovskiCrystalmuseum,
    title: "Swarovski Crystal museum",
    description: "Experience the golden sands and mystical desert landscapes",
    location: "Sahara Desert",
    rating: 4.7,
  },
  {
    image:
      Interlaken,
    title: "Interlaken",
    description: "Reach new heights with breathtaking mountain adventures",
    location: "Himalayas",
    rating: 4.9,
  },
  {
    image:
      Grindewald,
    title: "Grindewald",
    description: "Reach new heights with breathtaking mountain adventures",
    location: "Himalayas",
    rating: 4.9,
  },
  {
    image:
     Amsterdam,
    title: "Amsterdam",
    description: "Reach new heights with breathtaking mountain adventures",
    location: "Himalayas",
    rating: 4.9,
  },
  {
    image:
      Vietnam,
    title: "Vietnam",
    description: "Reach new heights with breathtaking mountain adventures",
    location: "Himalayas",
    rating: 4.9,
  },
]

function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation={{
          nextEl: ".next-arrow",
          prevEl: ".prev-arrow",
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-white/50 !w-3 !h-3",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-white !scale-125",
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-full w-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Enhanced Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/0  z-10" />

              {/* Animated Background Elements */}
             
              {/* Main Content */}
              <motion.div
                className="absolute z-20 inset-0 flex flex-col items-center pt-10 text-center text-white px-6 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
             
                <motion.h1
                  className="text-3xl md:text-4xl playfair-display lg:text-5xl font-bold mb-6 bg-gradient-to-r from-black/60  px-6 py-2 rounded-full  leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  {slide.title}
                </motion.h1>

                {/* Description */}
                <motion.p
                  className="text-xl md:text-2xl font-bold lg:text-3xl josefin-sans  mb-1 text-gray-100 leading-relaxed max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 1 }}
                >
                  {slide.description}
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 1 }}
                >
                  {/* <Link to="/book">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative overflow-hidden bg-gradient-to-r from-blue-600/40 to-purple-600/40 hover:from-blue-700/40 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-sm border shadow-2xl transition-all duration-300 flex items-center gap-3 min-w-[200px] justify-center"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <Calendar className="w-5 h-5 relative z-10" />
                    <span className="relative z-10 text-lg">Book Now</span>
                  </motion.button>
                  </Link> */}

                 
                </motion.div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}

        {/* Enhanced Custom Navigation Arrows */}
        <motion.div
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          className="absolute z-30 top-1/2 left-6 transform -translate-y-1/2 cursor-pointer prev-arrow bg-white/10 backdrop-blur-md p-4 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 group"
        >
          <ChevronLeft className="text-white text-2xl group-hover:text-blue-200 transition-colors" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          className="absolute z-30 top-1/2 right-6 transform -translate-y-1/2 cursor-pointer next-arrow bg-white/10 backdrop-blur-md p-4 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 group"
        >
          <ChevronRight className="text-white text-2xl group-hover:text-blue-200 transition-colors" />
        </motion.div>
      </Swiper>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </motion.div>

      {/* Custom Pagination Styles */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 60px !important;
        }
        .swiper-pagination-bullet {
          margin: 0 8px !important;
          transition: all 0.3s ease !important;
        }
        .swiper-pagination-bullet:hover {
          transform: scale(1.2) !important;
        }
      `}</style>
    </div>
  )
}

export default Hero
