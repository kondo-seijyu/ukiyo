"use client";

import Image from "next/image";
import Link from "next/link";
import { works } from "@/data/works";
import { motion } from "framer-motion";

export default function Works() {
  return (
    <section id="works" className="py-20 text-center px-4">
      <h2 className="text-3xl font-bold mb-10">WORKS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {works.map((work) => (
          <motion.div
            key={work.id}
            className="rounded-xl overflow-hidden bg-white dark:bg-zinc-900 shadow hover:shadow-lg transition-shadow duration-300 flex flex-col"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-full aspect-[16/9]">
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover rounded-t-xl"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                priority={work.id === "1"} // 1件目だけ先読み
              />
            </div>
            <div className="p-4 text-left flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-2">{work.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {work.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {work.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-black/10 dark:bg-white/10 text-gray-800 dark:text-white px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-2">
                <Link
                  href={`/works/${work.id}`}
                  className="inline-block text-center text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded px-4 py-2 transition"
                >
                  → 詳細を見る
                </Link>
                {work.url && (
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-center text-sm font-medium text-blue-600 border border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded px-4 py-2 transition"
                  >
                    🔗 サイトを見る
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}