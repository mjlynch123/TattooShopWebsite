import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Skull, Instagram, Facebook, Twitter } from 'lucide-react';
import Navbar from './components/Navbar';
import ArtistCard from './components/ArtistCard';
import ContactForm from './components/ContactForm';
import { Artist } from './types';

const artists: Artist[] = [
  {
    id: 1,
    name: "Victoria Blackwood",
    specialty: "Neo-Traditional & Realism",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    bio: "Specializing in Neo-Traditional designs and intricate rRalism pieces.",
  },
  {
    id: 2,
    name: "Marcus Ravencroft",
    specialty: "Traditional & Realism",
    image: "https://images.unsplash.com/photo-1587397845856-e6cf49176c70?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Blending traditional tattoo styles with Realistic architectural elements.",
  },
  {
    id: 3,
    name: "Luna Nightshade",
    specialty: "Blackwork",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80",
    bio: "Creating bold blackwork designs with intricate details.",
  },
];

function App() {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  return (
    <div className="min-h-screen bg-black/90">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-screen flex items-center justify-center text-center px-4"
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <div className="relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Skull className="w-20 h-20 mx-auto mb-6 text-gold" />
            <h1 className="font-gothic text-6xl md:text-7xl mb-4 text-gold">
              Dark Arts Tattoo
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Where Elegance Meets Skin Art
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Artists Section */}
      <section id="artists" className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-gothic text-4xl md:text-5xl text-gold text-center mb-16">
            Meet Our Artists
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.map((artist) => (
              <ArtistCard
                key={artist.id}
                artist={artist}
                onClick={() => setSelectedArtist(artist)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-black/70">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-gothic text-4xl md:text-5xl text-gold text-center mb-16">
            Book Your Session
          </h2>
          <ContactForm artists={artists} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 border-t border-gold/20 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="font-gothic text-2xl text-gold mb-4">Dark Arts Tattoo</h3>
              <p className="text-gray-400">Where darkness meets artistry</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gold/20 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Dark Arts Tattoo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;