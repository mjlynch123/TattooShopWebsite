import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { ContactFormData } from '../types';
import { Artist } from '../types';

interface ContactFormProps {
  artists: Artist[];
}

const ContactForm: React.FC<ContactFormProps> = ({ artists }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    selectedArtist: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto bg-black/50 p-8 rounded-lg backdrop-blur-sm border border-gold/20"
      onSubmit={handleSubmit}
    >
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-gold mb-2">Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="input-field"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gold mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="input-field"
            required
          />
        </div>

        <div>
          <label htmlFor="artist" className="block text-gold mb-2">Preferred Artist</label>
          <select
            id="artist"
            value={formData.selectedArtist}
            onChange={(e) => setFormData({ ...formData, selectedArtist: e.target.value })}
            className="input-field"
          >
            <option value="">Select an artist</option>
            {artists.map((artist) => (
              <option key={artist.id} value={artist.name}>
                {artist.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-gold mb-2">Message</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="input-field min-h-[150px]"
            required
          />
        </div>

        <button
          type="submit"
          className="btn-primary w-full flex items-center justify-center space-x-2"
        >
          <span>Send Message</span>
          <Send className="w-4 h-4" />
        </button>
      </div>
    </motion.form>
  );
};

export default ContactForm;