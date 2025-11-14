import { motion } from 'framer-motion';
import { CodeXml, Braces, Database, Cloud, GitBranch, Globe } from 'lucide-react';

const skills = [
  { name: 'HTML', icon: Globe },
  { name: 'CSS', icon: Globe },
  { name: 'JavaScript', icon: CodeXml },
  { name: 'React', icon: CodeXml },
  { name: 'Next.js', icon: Braces },
  { name: 'Node.js', icon: Braces },
  { name: 'Express', icon: Braces },
  { name: 'Firebase / Supabase', icon: Cloud },
  { name: 'TailwindCSS', icon: Braces },
  { name: 'Git & GitHub', icon: GitBranch },
  { name: 'API Development', icon: CodeXml },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold text-gray-900">Skills</motion.h2>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {skills.map(({ name, icon: Icon }, i) => (
            <motion.div key={name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="p-5 rounded-xl border border-gray-200 hover:border-[#1A73E8] transition-colors bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-white border border-gray-200 text-[#1A73E8]">
                    <Icon size={20} />
                  </span>
                  <p className="font-medium text-gray-800">{name}</p>
                </div>
                <span className="text-xs text-gray-500">Pro</span>
              </div>
              <div className="mt-4 h-2 w-full bg-white rounded-full overflow-hidden border border-gray-200">
                <div className="h-full bg-[#1A73E8]" style={{ width: `${80 + (i % 4) * 5}%` }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
