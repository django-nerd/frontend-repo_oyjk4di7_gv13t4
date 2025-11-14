import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold text-gray-900">Tentang Fyndra</motion.h2>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }} className="mt-4 text-gray-600 leading-relaxed">
              Saya adalah Web Developer yang fokus pada pembuatan website cepat, modern, dan mudah di-scale untuk kebutuhan bisnis. Saya menyukai arsitektur yang bersih, performa optimal, dan pengalaman pengguna yang elegan.
            </motion.p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {['Frontend','Backend','Database','Deployment'].map((t) => (
                <div key={t} className="p-4 rounded-lg border border-gray-200 hover:border-[#1A73E8] transition-colors">
                  <p className="font-semibold text-gray-800">{t}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6 grid sm:grid-cols-3 gap-4">
            {[
              { k: '2+ Tahun', v: 'pengalaman' },
              { k: '15+ Project', v: 'selesai' },
              { k: 'Spesialis', v: 'landing page & web bisnis' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-xl bg-gray-50 border border-gray-200 text-center">
                <p className="text-xl font-bold text-[#1A73E8]">{item.k}</p>
                <p className="text-gray-700 mt-1">{item.v}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
