"use client"
import { motion } from "framer-motion"
import { Shield, Award, Clock, Users, ChevronRight, Sparkles, Target, Heart, Zap } from "lucide-react"
import aboutimg from '../assets/aboutimg.jpg'
import bgcar from '../assets/carRoad.jpg'
import {Link} from 'react-router-dom'
const AboutContent = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    },
  }

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    },
  }

  const scaleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    },
  }

  const stats = [
  { number: "5,000+", label: "Happy Riders Served", icon: Users },
  { number: "500+", label: "Verified Cab Partners", icon: Award },
  { number: "24/7", label: "Service Availability", icon: Clock },
  { number: "99%", label: "On-Time Arrival Rate", icon: Shield },
];


  const values = [
  {
    icon: Sparkles,
    title: "Transparent Pricing",
    description: "No surge charges or hidden fees—what you see is what you pay.",
  },
  {
    icon: Target,
    title: "Easy Accessibility",
    description: "Book a cab anytime, anywhere—our services are available across cities 24/7.",
  },
  {
    icon: Heart,
    title: "Customer-Centric",
    description: "We prioritize your comfort, safety, and satisfaction in every ride.",
  },
  {
    icon: Zap,
    title: "Smart Technology",
    description: "From live tracking to instant booking, our tech makes every ride smooth and efficient.",
  },
];


  return (
    <>
    <div className=" min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative   px-6 lg:px-8">
        {/* Decorative elements */}
       

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            className="flex flex-col md:flex-row items-center md:space-x-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Text Section */}
            <motion.div className="md:w-1/2 mb-12 md:mb-0" variants={itemVariants}>
              <motion.div
                className="inline-flex items-center gap-2 shadow-lg backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-green-700  mb-6"
                variants={scaleVariants}
              >
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                Our Story
              </motion.div>

             <motion.h1
  className="text-4xl md:text-4xl text-green-700 roboto lg:text-5xl font-extrabold mb-6 leading-tight"
  variants={itemVariants}
>
  About{" "}
  <span className="text-black">
    Hello <span className="text-yellow-500">Drive</span>
  </span>
</motion.h1>

<motion.p className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed" variants={itemVariants}>
  At <strong>Hello Drive</strong>, we make commuting easy, affordable, and reliable. Whether it’s a quick city trip or a long-distance journey, our cab services are designed to get you there safely, comfortably, and on time.
</motion.p>

<motion.p className="text-gray-800 font-medium text-lg md:text-xl mb-8 leading-relaxed" variants={itemVariants}>
  We blend smart technology with dedicated customer care, helping thousands of riders enjoy hassle-free travel experiences—anytime, anywhere.
</motion.p>


              <motion.div variants={itemVariants}>
                <button className="bg-gradient-to-r from-green-600 to-green-800 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group">
                 <Link to='/heroSearch' >Book Now</Link>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </motion.div>

            {/* Image Section with floating elements */}
            <motion.div className="md:w-1/2 relative" variants={fadeInUpVariants} initial="hidden" animate="visible">
              <div className="relative z-10">
                <motion.div
                  className="absolute -top-4 -left-4 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-800">Since 2023</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -right-4 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-gray-800">Safety First</span>
                  </div>
                </motion.div>

                <motion.div
                  className="rounded-2xl overflow-hidden shadow-2xl border-8 border-white"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={aboutimg}
                    alt="Happy people shaking hands, symbolizing trust and partnership"
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </div>

              {/* Background decorative elements */}
              
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-black/0 lg:px-8 relative">
        <div className="max-w-7xl  mx-auto">
          <motion.div
            className="grid grid-cols-2  md:grid-cols-4 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            // viewport={{ once: true, margin: "-100px" }}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={index}
                  className="bg-white backdrop-blur-sm rounded-sm  p-6 shadow-lg border-t-2 border-yellow-600 hover:shadow-xl transition-all duration-300"
                  variants={fadeInUpVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="shadow-lg w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-green-700" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
  <section
  className="py-16 px-6 lg:px-8 relative text-white bg-cover bg-center bg-fixed"
  style={{ backgroundImage: `url(${bgcar})` }} // Replace with your image path
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40 bg-opacity-60"></div>

  {/* Existing radial pattern overlay */}
  <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:20px_20px] opacity-20"></div>

  <motion.div
    className="max-w-7xl mx-auto relative"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
  >
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold roboto mb-4">
        Our Core Values
      </h2>
      <p className="text max-w-2xl text-lg mx-auto">
        These values drive everything we do at Hello Drive—from how we serve
        our customers to how we improve every ride experience.
      </p>
    </motion.div>

    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
    >
      {values.map((value, index) => {
        const IconComponent = value.icon
        return (
          <motion.div
            key={index}
            className="shadow-lg  backdrop-blur-sm rounded-2xl p-6 border hover:bg-white/50 hover:text-black transition-all duration-300"
            variants={fadeInUpVariants}
            whileHover={{ y: -5 }}
          >
            <div className="bg-white shadow-lg w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <IconComponent className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl  font-bold mb-2">
              {value.title}
            </h3>
            <p className="">{value.description}</p>
          </motion.div>
        )
      })}
    </motion.div>
  </motion.div>
</section>


      

      {/* CTA Section */}
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-sky-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
  className="bg-white rounded-3xl shadow-xl overflow-hidden"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="flex flex-col md:flex-row">
    {/* Left Section */}
    <div className="md:w-1/2 p-8 md:p-12">
      <h2 className="text-3xl font-bold roboto text-gray-900 mb-4">Ready to Book Your Ride?</h2>
      <p className="text-gray-600 mb-6">
        Join thousands of happy riders who trust <strong>Hello Drive</strong> for safe, reliable, and affordable cab services—anytime, anywhere.
      </p>

      <button className="bg-gradient-to-r from-green-600 to-green-800 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group">
        <Link to='/heroSearch'>Book Now</Link>
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>

    {/* Right Section */}
    <div className="md:w-1/2 bg-gradient-to-br from-green-800 to-green-700 p-8 md:p-12 text-white">
      <h3 className="text-2xl font-bold roboto mb-4">Why Ride with Hello Drive?</h3>
      <ul className="space-y-3">
        <li className="flex items-start gap-3">
          <div className="bg-white/20 rounded-full p-1 mt-1">
            <ChevronRight className="w-4 h-4" />
          </div>
          <span>Instant cab bookings, 24/7 availability</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="bg-white/20 rounded-full p-1 mt-1">
            <ChevronRight className="w-4 h-4" />
          </div>
          <span>Trained and verified professional drivers</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="bg-white/20 rounded-full p-1 mt-1">
            <ChevronRight className="w-4 h-4" />
          </div>
          <span>Transparent pricing with no hidden charges</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="bg-white/20 rounded-full p-1 mt-1">
            <ChevronRight className="w-4 h-4" />
          </div>
          <span>Responsive customer support whenever you need</span>
        </li>
      </ul>
    </div>
  </div>
</motion.div>

        </div>
      </section>
    </div>

    </>
  )
}

export default AboutContent
