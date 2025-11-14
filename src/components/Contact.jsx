import { motion } from 'framer-motion';
import { Instagram, Github, Linkedin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold text-gray-900">Contact</motion.h2>
        <div className="mt-10 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nama</label>
                <input type="text" placeholder="Nama Anda" className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1A73E8]" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" placeholder="email@domain.com" className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1A73E8]" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Pesan</label>
                <textarea rows="5" placeholder="Tulis pesan Anda" className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1A73E8]" required />
              </div>
              <button type="submit" className="inline-flex items-center justify-center px-6 py-3 rounded-md text-white bg-[#1A73E8] hover:bg-[#1765cc] transition-colors">Kirim</button>
            </form>
          </div>
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <a href="#" className="p-4 rounded-lg border border-gray-200 hover:border-[#1A73E8] flex items-center gap-2 text-gray-700">
                <Instagram size={18} className="text-[#1A73E8]" /> Instagram
              </a>
              <a href="#" className="p-4 rounded-lg border border-gray-200 hover:border-[#1A73E8] flex items-center gap-2 text-gray-700">
                <Phone size={18} className="text-[#1A73E8]" /> WhatsApp
              </a>
              <a href="#" className="p-4 rounded-lg border border-gray-200 hover:border-[#1A73E8] flex items-center gap-2 text-gray-700">
                <Github size={18} className="text-[#1A73E8]" /> GitHub
              </a>
              <a href="#" className="p-4 rounded-lg border border-gray-200 hover:border-[#1A73E8] flex items-center gap-2 text-gray-700">
                <Linkedin size={18} className="text-[#1A73E8]" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
