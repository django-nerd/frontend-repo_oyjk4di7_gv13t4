import { motion } from 'framer-motion';
import { Wrench, Layout, PenTool, Shield } from 'lucide-react';

const services = [
  { title: 'Web Development', desc: 'Website cepat, modern, dan scalable untuk bisnis Anda.', icon: Wrench },
  { title: 'Landing Page Business', desc: 'Landing page konversi tinggi untuk kampanye & brand.', icon: Layout },
  { title: 'UI/UX Design Basic', desc: 'Desain antarmuka simpel, bersih, dan mudah digunakan.', icon: PenTool },
  { title: 'Maintenance Website', desc: 'Perawatan berkala, update fitur, dan optimasi performa.', icon: Shield },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold text-gray-900">Services</motion.h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ title, desc, icon: Icon }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-6 rounded-xl border border-gray-200 bg-gray-50 hover:border-[#1A73E8]">
              <div className="p-2 w-10 h-10 rounded-lg bg-white border border-gray-200 text-[#1A73E8] flex items-center justify-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
