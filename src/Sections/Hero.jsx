"use client"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import { ChevronLeft, ChevronRight, Phone, Calendar, Star, MapPin } from "lucide-react"

// Sample images (replace with your own URLs or imports)
const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1678542561901-5d75778930ef?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
    title: "Disney Land Paris",
    description: "Feel the beauty of untouched wilderness and discover hidden gems",
    location: "Swiss Alps",
    rating: 4.9,
  },
  {
    image:
      "https://media.istockphoto.com/id/1347088244/photo/kerala-most-beautiful-place-of-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=azs5OiyZpD_zPj96NASr737IVrCq2_m0iu08EVDvIvE=",
    title: "City Lights",
    description: "Discover vibrant cityscapes and urban adventures",
    location: "Kerala, India",
    rating: 4.8,
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1729776349948-ad22bdab1dd2?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
    title: "Desert Journey",
    description: "Experience the golden sands and mystical desert landscapes",
    location: "Sahara Desert",
    rating: 4.7,
  },
  {
    image:
      "https://images.unsplash.com/photo-1577688723008-7c501eae6f26?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.1.0",
    title: "Mountain Peaks",
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
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60 z-10" />

              {/* Animated Background Elements */}
              <div className="absolute inset-0 z-5 overflow-hidden">
                <motion.div
                  animate={{
                    y: [0, -30, 0],
                    rotate: [0, 180, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 8, ease: "easeInOut" }}
                  className="absolute left-10 top-20 w-12 h-12 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full backdrop-blur-sm border border-white/10"
                />
                <motion.div
                  animate={{
                    y: [0, 40, 0],
                    rotate: [360, 180, 0],
                    scale: [1, 0.8, 1],
                  }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 10, ease: "easeInOut" }}
                  className="absolute right-16 bottom-32 w-20 h-20 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full backdrop-blur-sm border border-white/10"
                />
                <motion.div
                  animate={{
                    x: [0, 50, 0],
                    y: [0, -20, 0],
                    rotate: [0, 90, 180],
                  }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 12, ease: "easeInOut" }}
                  className="absolute left-1/4 bottom-20 w-8 h-8 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full backdrop-blur-sm border border-white/10"
                />
              </div>

              {/* Main Content */}
              <motion.div
                className="absolute z-20 inset-0 flex flex-col items-center justify-center text-center text-white px-6 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                {/* Location Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20"
                >
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">{slide.location}</span>
                  <div className="flex items-center gap-1 ml-2">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{slide.rating}</span>
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h1
                  className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text text-transparent leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  {slide.title}
                </motion.h1>

                {/* Description */}
                <motion.p
                  className="text-xl md:text-2xl lg:text-3xl font-light mb-10 text-gray-100 leading-relaxed max-w-3xl mx-auto"
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
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full shadow-2xl transition-all duration-300 flex items-center gap-3 min-w-[200px] justify-center"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <Calendar className="w-5 h-5 relative z-10" />
                    <span className="relative z-10 text-lg">Book Now</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative overflow-hidden bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-full border-2 border-white/30 hover:border-white/50 shadow-2xl transition-all duration-300 flex items-center gap-3 min-w-[200px] justify-center"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <Phone className="w-5 h-5 relative z-10" />
                    <span className="relative z-10 text-lg">Call Now</span>
                  </motion.button>
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
