"use client";

import { motion } from "framer-motion";
import { techList } from "@/data/tech";

export default function Tech() {
  return (
    <section id="tech" className="py-20 px-4 text-center">
      <h2 className="text-3xl font-bold mb-10">TECH STACK</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {techList.map((tech, i) => (
          <motion.div
            key={i}
            className="rounded-lg bg-white dark:bg-zinc-900 shadow p-4 text-sm font-medium hover:shadow-md transition flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            viewport={{ once: true }}
          >
            <span className="mb-2 text-xs bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-white px-2 py-1 rounded-full">
              {tech.category}
            </span>
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-10 h-10 mx-auto mb-2 object-contain"
            />
            <p className="font-semibold text-sm mb-1">{tech.name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug text-center">
              {tech.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}