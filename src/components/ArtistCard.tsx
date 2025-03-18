import React from 'react';
import { motion } from 'framer-motion';
import { Artist } from '../types';

interface ArtistCardProps {
  artist: Artist;
  onClick: () => void;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="bg-gray-900 rounded-lg overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative h-80 overflow-hidden">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-gothic mb-2 text-gold">{artist.name}</h3>
        <p className="text-gray-400 mb-3">{artist.specialty}</p>
        <p className="text-gray-300">{artist.bio}</p>
      </div>
    </motion.div>
  );
};

export default ArtistCard;