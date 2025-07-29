// src/components/TestimonialSection.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow, Parallax } from "swiper/modules";
import { motion } from "framer-motion";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/parallax';

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Solo Traveler",
    quote: "TravelXplore made my dream trip to Bali a breeze. The experience was magical and seamless!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    location: "Bali, Indonesia"
  },
  {
    name: "Ravi Mehta",
    role: "Business Trip",
    quote: "Highly professional and timely service. Flights, hotels, and visas – all sorted!",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    location: "Tokyo, Japan"
  },
  {
    name: "Pooja Khatri",
    role: "Honeymoon Couple",
    quote: "Our Maldives honeymoon was unforgettable thanks to the amazing planning by TravelXplore!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    location: "Maldives"
  },
  {
    name: "Siddharth Das",
    role: "Adventure Seeker",
    quote: "From paragliding in Manali to scuba diving in Andaman, everything was perfect.",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    location: "Andaman Islands"
  }
];

const TestimonialSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-zinc-900 via-slate-900 to-red-900 py-20 px-6 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-red-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 bg-amber-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center mb-16 relative z-10"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block mb-6"
        >
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
        </motion.div>
        <h2 className="text-5xl font-bold mb-4 text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-amber-300">
            Voices of Wanderlust
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Discover what our explorers say about their extraordinary journeys around the world
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto relative">
        <Swiper
          modules={[Pagination, Autoplay, EffectCoverflow, Parallax]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 5,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true
          }}
          parallax={true}
          speed={1000}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            el: '.testimonial-pagination',
            bulletClass: 'testimonial-bullet',
            bulletActiveClass: 'testimonial-bullet-active'
          }}
          breakpoints={{
            640: {
              coverflowEffect: {
                rotate: 5,
                stretch: 0,
                depth: 100,
                modifier: 1.5
              }
            },
            1024: {
              coverflowEffect: {
                rotate: 5,
                stretch: 0,
                depth: 100,
                modifier: 1
              }
            }
          }}
          className="!pb-16"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index} className="!w-[300px] md:!w-[350px] lg:!w-[380px]">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-zinc-800/50 to-slate-900/50 backdrop-blur-lg rounded-2xl p-8 text-left shadow-2xl border border-white/10 relative overflow-hidden group"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500/30 to-amber-500/30 opacity-0 group-hover:opacity-100 rounded-2xl blur-md transition-all duration-500"></div>
                
                {/* Profile */}
                <div className="flex items-center gap-5 mb-6 relative z-10">
                  <div className="relative">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-16 h-16 rounded-full border-2 border-red-400/80 object-cover shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-red-500 to-amber-500 rounded-full p-1 shadow-md">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{t.name}</h4>
                    <p className="text-sm text-gray-400">{t.role}</p>
                    <p className="text-xs text-red-400 mt-1 flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {t.location}
                    </p>
                  </div>
                </div>
                
                {/* Quote */}
                <div className="relative z-10">
                  <svg className="w-8 h-8 text-red-500/30 mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-300 leading-relaxed mb-6 italic">"{t.quote}"</p>
                </div>
                
                {/* Rating */}
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < 4 ? 'text-amber-400' : 'text-gray-600'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500">
                    Verified Traveler
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;