import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Landing Page UMKM',
    tools: ['React', 'Tailwind', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
    demo: '#', source: '#'
  },
  {
    title: 'Dashboard Admin React',
    tools: ['React', 'Chart.js', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
    demo: '#', source: '#'
  },
  {
    title: 'Website Portfolio Modern',
    tools: ['Vite', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop',
    demo: '#', source: '#'
  },
  {
    title: 'Toko Online Sederhana',
    tools: ['Next.js', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop',
    demo: '#', source: '#'
  },
  {
    title: 'Sistem Reservasi',
    tools: ['Node', 'Express', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
    demo: '#', source: '#'
  },
  {
    title: 'Blog App dengan Next.js',
    tools: ['Next.js', 'MDX'],
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
    demo: '#', source: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold text-gray-900">Projects</motion.h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group rounded-xl overflow-hidden border border-gray-200 bg-white hover:shadow-xl transition-shadow">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{p.tools.join(' • ')}</p>
                <div className="mt-4 flex items-center gap-3">
                  <a href={p.demo} className="px-4 py-2 rounded-md text-white bg-[#1A73E8] hover:bg-[#1765cc] transition-colors">Live Demo</a>
                  <a href={p.source} className="px-4 py-2 rounded-md text-[#1A73E8] border border-[#1A73E8]/30 hover:border-[#1A73E8] transition-colors">Source Code</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
