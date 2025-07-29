import React from "react";
import { motion } from "framer-motion";

// Map each destination to an image (Unsplash, royalty-free, or your own)
const intlImages = {
  Australia: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  Azerbaijan: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  Almaty: "https://images.unsplash.com/photo-1464852045489-a120005e79f3?auto=format&fit=crop&w=400&q=80",
  Bali: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  Bhutan: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
  Dubai: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=400&q=80",
  Europe: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80",
  Georgia: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  Hongkong: "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=400&q=80",
  Japan: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=400&q=80",
  Kambodia: "https://images.unsplash.com/photo-1517959105824-1a2702ba0a70?auto=format&fit=crop&w=400&q=80",
  Malaysia: "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=400&q=80",
  Maldives: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80",
  Mauritius: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
  Nepal: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=400&q=80",
  Newzealand: "https://images.unsplash.com/photo-1444090542259-0af8fa96557e?auto=format&fit=crop&w=400&q=80",
  Oman: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80",
  Philipines: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  Srilanka: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80",
  Singapore: "https://images.unsplash.com/photo-1465101178521-c1a4695f95fd?auto=format&fit=crop&w=400&q=80",
  Tajikistan: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  Thailand: "https://images.unsplash.com/photo-1465101178521-c1a4695f95fd?auto=format&fit=crop&w=400&q=80",
  Turkey: "https://images.unsplash.com/photo-1438354886727-070458b3b5cf?auto=format&fit=crop&w=400&q=80",
  Vietnam: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
};

const indiaImages = {
  "Guwahati -Shillong": "https://images.unsplash.com/photo-1464739164804-bd7c9cd3be45?auto=format&fit=crop&w=400&q=80",
  "Arunachal Pradesh": "https://images.unsplash.com/photo-1484910292437-025e5d13ce87?auto=format&fit=crop&w=400&q=80",
  "Sikkim -Darjeeling": "https://images.unsplash.com/photo-1464852045489-a120005e79f3?auto=format&fit=crop&w=400&q=80",
  Kolkata: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
  Odisha: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=400&q=80",
  "Madhya Pradesh": "https://images.unsplash.com/photo-1444090542259-0af8fa96557e?auto=format&fit=crop&w=400&q=80",
  Visakhapatnam: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80",
  Tamilnadu: "https://images.unsplash.com/photo-1438354886727-070458b3b5cf?auto=format&fit=crop&w=400&q=80",
  Kerala: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80",
  "Hyderabad Telangana": "https://images.unsplash.com/photo-1465101178521-c1a4695f95fd?auto=format&fit=crop&w=400&q=80",
  Maharashtra: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  Uttarakhand: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  Gujarat: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=400&q=80",
  Rajasthan: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  Himachal: "https://images.unsplash.com/photo-1465101178521-c1a4695f95fd?auto=format&fit=crop&w=400&q=80",
  Kashmir: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
  Uttarpradesh: "https://images.unsplash.com/photo-1444090542259-0af8fa96557e?auto=format&fit=crop&w=400&q=80",
  "Golden Triangle": "https://images.unsplash.com/photo-1444090542259-0af8fa96557e?auto=format&fit=crop&w=400&q=80",
  "Leh-Ladakh": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80",
};

const fallbackIntl = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80";
const fallbackIndia = "https://images.unsplash.com/photo-1464739164804-bd7c9cd3be45?auto=format&fit=crop&w=400&q=80";

const International = [
  "Australia", "Azerbaijan", "Almaty", "Bali", "Bhutan", "Dubai", "Europe",
  "Georgia", "Hongkong", "Japan", "Kambodia", "Malaysia", "Maldives", "Mauritius",
  "Nepal", "Newzealand", "Oman", "Philipines", "Srilanka", "Singapore", "Tajikistan",
  "Thailand", "Turkey", "Vietnam"
];
const Indian = [
  "Guwahati -Shillong", "Arunachal Pradesh", "Sikkim -Darjeeling", "Kolkata", "Odisha",
  "Madhya Pradesh", "Visakhapatnam", "Tamilnadu", "Kerala", "Hyderabad Telangana",
  "Maharashtra", "Uttarakhand", "Gujarat", "Rajasthan", "Himachal", "Kashmir",
  "Uttarpradesh", "Golden Triangle", "Leh-Ladakh"
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
