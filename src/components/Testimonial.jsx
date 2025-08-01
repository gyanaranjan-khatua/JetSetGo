import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'Acme Inc.',
    content: 'The service was exceptional! Our engagement increased by 200% after implementing their solution...',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO',
    company: 'TechStart',
    content: 'Incredible attention to detail and customer support. They went above and beyond to ensure our project was successful...',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Product Manager',
    company: 'InnovateCo',
    content: "The team delivered ahead of schedule and exceeded our expectations. Their innovative approach solved problems we didn't even know we had!",
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: 4,
    name: 'David Wilson',
    role: 'Founder & CEO',
    company: 'StartUp Ventures',
    content: 'Working with them has been transformative for our business. Their expertise and dedication are unmatched in the industry.',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    id: 5,
    name: 'Priya Patel',
    role: 'UX Designer',
    company: 'Digital Creations',
    content: 'The quality of work is consistently outstanding. They understand our vision and bring it to life better than we imagined.',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const TestimonialSection = () => (
  <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl tracking-tight">
          What Our Clients Say
        </h2>
        <div className="mt-4 h-1 w-20 bg-red-600 mx-auto rounded-full shadow-lg"></div>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
      >
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 32,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          pagination={{
            clickable: true,
            el: '.testimonial-pagination',
            bulletClass: 'swiper-pagination-bullet bg-zinc-300 !w-3 !h-3',
            bulletActiveClass: 'swiper-pagination-bullet-active bg-red-500',
          }}
        //   navigation={{
        //     nextEl: '.testimonial-button-next',
        //     prevEl: '.testimonial-button-prev',
        //   }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="pb-16"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                // whileHover={{ y: -6, scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 250, damping: 16 }}
                className={
                  "group bg-gradient-to-br from-zinc-900/80 via-zinc-800/80 to-black/80 border border-zinc-700 rounded-2xl shadow-xl p-8 h-full flex flex-col justify-between overflow-hidden relative " +
                  "hover:border-red-500 transition-colors duration-300 hover:shadow-2xl"
                }
              >
                {/* Glow on hover */}
                <div className="pointer-events-none absolute -inset-1 group-hover:bg-[radial-gradient(circle_at_80%_15%,rgba(239,35,60,0.10)_0%,transparent_80%)] transition-all duration-300 rounded-2xl"></div>

                {/* User Info */}
                <div className="flex items-center mb-6 relative z-10">
                  <div className="mr-4 relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full border-2 border-red-600 shadow-lg object-cover"
                    />
                    <span className="absolute -bottom-1 -right-1 bg-gradient-to-tr from-red-500 via-red-400 to-yellow-400 p-1 rounded-full shadow">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.54-8.84a1 1 0 10-1.41-1.41L9 10.59 7.87 9.46a1 1 0 10-1.41 1.41l1.83 1.83a1 1 0 001.41 0l3.84-3.84z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-red-400 font-medium">{testimonial.role}</div>
                    <div className="text-xs text-zinc-400">{testimonial.company}</div>
                  </div>
                </div>
                
                {/* Testimonial */}
                <p className="flex-1 text-zinc-100 mb-8 italic relative z-10">
                  “{testimonial.content}”
                </p>
                
                {/* Stars & verified */}
                <div className="flex items-center justify-between pt-2 border-t border-zinc-700 mt-4 relative z-10">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-zinc-400 tracking-wide">Verified Reviewer</span>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom pagination and navigation */}
        {/* <div className="flex items-center justify-center mt-8 space-x-4">
          <button className="testimonial-button-prev p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 transition-colors">
            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="testimonial-pagination flex justify-center items-center space-x-2"></div>
          <button className="testimonial-button-next p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 transition-colors">
            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div> */}
      </motion.div>
    </div>
  </section>
);

export default TestimonialSection;
