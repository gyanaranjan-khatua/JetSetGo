import React from 'react';
import { motion } from 'framer-motion';

// Import 30 vertical images from assets/gallery folder
import img1 from '../assets/gallery/gallery1.jpeg';
import img2 from '../assets/gallery/gallery2.jpeg';
import img3 from '../assets/gallery/gallery3.jpeg';
import img4 from '../assets/gallery/gallery4.jpeg';


// Prepare image array
const galleryImages = [
  img1, img2, img3, img4, 
].map((src, index) => ({
  id: index + 1,
  src,
  alt: `Gallery Image ${index + 1}`,
}));

// Individual vertical card
const GalleryCard = ({ image }) => {
  return (
    <motion.div
      className="relative group overflow-hidden rounded-xl shadow-xl bg-gray-800"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ scale: 1.03 }}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <p className="text-white text-base font-medium">{image.alt}</p>
      </div>
    </motion.div>
  );
};

// Gallery wrapper
const Gallery = () => {
  return (
    <section className="py-16 px-4 sm:px-8 bg-gray-950 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-white text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Our <span className="text-purple-400"></span> Gallery
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <GalleryCard key={image.id} image={image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
