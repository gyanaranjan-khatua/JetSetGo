import React from "react";
import { motion } from "framer-motion";
import id1 from "../assets/id1.JPG"
import id2 from "../assets/id2.JPG"
import id3 from "../assets/id3.JPG"
import id4 from "../assets/id4.JPG"
import id5 from "../assets/id5.JPG"
import id6 from "../assets/id6.JPG"
import id7 from "../assets/id7.JPG"
import id8 from "../assets/id8.JPG"
import id9 from "../assets/id9.JPG"
import id10 from "../assets/id10.JPG"
import id11 from "../assets/id11.JPG"
import id12 from "../assets/id12.JPG"
import id13 from "../assets/id13.JPG"
import id14 from "../assets/id14.JPG"
import id15 from "../assets/id15.JPG"
import id16 from "../assets/id16.JPG"
import id17 from "../assets/id17.JPG"
import id18 from "../assets/id18.JPG"
import id19 from "../assets/id19.JPG"
import id20 from "../assets/id20.JPG"
import id21 from "../assets/id21.JPG"
import id22 from "../assets/id22.JPG"
import id23 from "../assets/id23.JPG"
import id24 from "../assets/id24.JPG"
import in1 from "../assets/in1.JPG"
import in2 from "../assets/in2.JPG"
import in3 from "../assets/in3.JPG"
import in4 from "../assets/in4.JPG"
import in5 from "../assets/in5.JPG"
import in6 from "../assets/in6.JPG"
import in7 from "../assets/in7.webp"
import in8 from "../assets/in8.JPG"
import in9 from "../assets/in9.JPG"
import in10 from "../assets/in10.JPG"
import in11 from "../assets/in11.JPG"
import in12 from "../assets/in12.JPG"
import in13 from "../assets/in13.JPG"
import in14 from "../assets/in14.JPG"
import in15 from "../assets/in15.JPG"
import in16 from "../assets/in16.JPG"
import in17 from "../assets/in17.JPG"
import in18 from "../assets/in18.JPG"

// Map each destination to an image (Unsplash, royalty-free, or your own)
const intlImages = {
  Australia: id1,
  Azerbaijan: id2,
  Almaty: id3,
  Bali: id4,
  Bhutan: id5,
  Dubai: id6,
  Europe: id7,
  Georgia: id8,
  Hongkong: id9,
  Japan: id10,
  Cambodia: id11,
  Malaysia: id12,
  Maldives: id13,
  Mauritius: id14,
  Nepal: id15,
  Newzealand: id16,
  Oman: id17,
  Philipines: id18,
  Srilanka: id19,
  Singapore: id20,
  Tajikistan: id21,
  Thailand: id22,
  Turkey: id23,
  Vietnam: id24,
};

const indiaImages = {
  "Guwahati -Shillong": in1,
  "Arunachal Pradesh": in2,
  "Sikkim -Darjeeling": in3,
  Kolkata: in4,
  Odisha: in5,
  "Madhya Pradesh": in6,
  Visakhapatnam: in7,
  Tamilnadu: in8,
  Kerala: in9,
  "Hyderabad Telangana": in10,
  Maharashtra: in11,
  Uttarakhand: in12,
  Gujarat: in13,
  Rajasthan: in14,
  Himachal: in15,
  Kashmir: in16,
  Uttarpradesh: in17,
//   "Golden Triangle": "https://images.unsplash.com/photo-1444090542259-0af8fa96557e?auto=format&fit=crop&w=400&q=80",
  "Leh-Ladakh": in18,
};

const fallbackIntl = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80";
const fallbackIndia = "https://images.unsplash.com/photo-1464739164804-bd7c9cd3be45?auto=format&fit=crop&w=400&q=80";

const International = [
  "Australia", "Azerbaijan", "Almaty", "Bali", "Bhutan", "Dubai", "Europe",
  "Georgia", "Hongkong", "Japan", "Cambodia", "Malaysia", "Maldives", "Mauritius",
  "Nepal", "Newzealand", "Oman", "Philipines", "Srilanka", "Singapore", "Tajikistan",
  "Thailand", "Turkey", "Vietnam"
];
const Indian = [
  "Guwahati -Shillong", "Arunachal Pradesh", "Sikkim -Darjeeling", "Kolkata", "Odisha",
  "Madhya Pradesh", "Visakhapatnam", "Tamilnadu", "Kerala", "Hyderabad Telangana",
  "Maharashtra", "Uttarakhand", "Gujarat", "Rajasthan", "Himachal", "Kashmir",
  "Uttarpradesh", 
//   "Golden Triangle", 
  "Leh-Ladakh"
];

const Card = ({ name, img, country }) => (
  <motion.div
    whileHover={{ scale: 1.06, y: -8 }}
    transition={{ type: "spring", stiffness: 230, damping: 17 }}
    className="group relative rounded-2xl border-0 shadow-xl bg-white/90 overflow-hidden cursor-pointer"
  >
    {/* Decorative blurred blobs */}
    <span className="absolute -top-8 -right-16 w-40 h-40 bg-red-400 opacity-15 rounded-full blur-2xl pointer-events-none" />
    <span className="absolute bottom-0 -left-12 w-28 h-28 bg-amber-300 opacity-10 rounded-full blur-2xl pointer-events-none" />

    {/* Image */}
    <div className="relative">
      <img
        src={img}
        alt={name}
        className="w-full h-44 object-cover transition-transform duration-300 group-hover:scale-110"
        loading="lazy"
      />
      {/* Optional overlay gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/65 pointer-events-none" /> */}

      {/* Floating label */}
      {/* <motion.div
        whileHover={{ y: -8 }}
        className="absolute left-3 top-3 bg-white/80 backdrop-blur px-3 py-1 rounded-lg shadow-md text-xs font-bold text-red-600 z-10 transition-all duration-300 uppercase"
      >
        {country}
      </motion.div> */}
    </div>

    {/* Bottom content */}
    <div className="relative px-5 py-4 flex flex-col items-start min-h-[64px]">
      <h3 className="text-lg font-extrabold text-gray-900 drop-shadow mb-2 tracking-wide">{name}</h3>
      <span className="block h-1 w-8 rounded-full bg-red-500 opacity-70 mb-1" />
    </div>

    {/* Subtle red border glow on hover */}
    <span className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500 group-hover:shadow-[0_6px_24px_0_rgba(239,35,60,0.18)] transition-all duration-300" />
  </motion.div>
);

const DestinationShowcase = () => (
  <section className="relative bg-gradient-to-b from-white to-zinc-50 py-20 px-4 sm:px-8">
    {/* Section Header */}
    <div className="max-w-4xl mx-auto mb-16 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl sm:text-5xl font-extrabold text-gray-900"
      >
        Explore <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-400 to-red-400">World & India</span> Tours
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-5 text-lg text-gray-500"
      >
        Handpicked destinations for your next adventure. Where will you go?
      </motion.p>
    </div>

    {/* International Holidays */}
    <div className="max-w-7xl mx-auto mb-16">
      <h3 className="text-xl md:text-2xl font-bold text-red-600 mb-6">International Holidays</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {International.map((place) => (
          <Card
            key={place}
            name={place}
            img={intlImages[place] || fallbackIntl}
            country="International"
          />
        ))}
      </div>
    </div>

    {/* Indian Destinations */}
    <div className="max-w-7xl mx-auto">
      <h3 className="text-xl md:text-2xl font-bold text-red-600 mb-6">Indian Destinations</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {Indian.map((place) => (
          <Card
            key={place}
            name={place}
            img={indiaImages[place] || fallbackIndia}
            country="India"
          />
        ))}
      </div>
    </div>
  </section>
);

export default DestinationShowcase;
