"use client";

import Image from "next/image";
import { about } from "@/data/about";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 px-4 text-center" id="about">
      <h2 className="text-3xl font-bold mb-10">About</h2>

      {/* 会社紹介 */}
      <motion.div
        className="bg-white dark:bg-zinc-900 shadow-lg rounded-xl max-w-2xl mx-auto p-6 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center mb-4">
          <Image
            src="/about/reflection.webp"
            alt="Reflection Inc."
            width={120}
            height={40}
            className="h-8 object-contain mb-2"
          />
          <a
            href="https://reflection-inc.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline"
          >
            reflection-inc.com
          </a>
        </div>

        <div className="space-y-4 text-left">
          {about.description.map((paragraph: string, i: number) => (
            <motion.p
              key={i}
              className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </motion.div>

      {/* デザイン実績 */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {about.designs.map((item, i) => (
          <motion.div
            key={i}
            className="rounded-lg overflow-hidden shadow hover:shadow-md transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full aspect-[467/263]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}