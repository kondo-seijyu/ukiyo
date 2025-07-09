"use client";

import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center min-h-screen text-center bg-[url('/bg-paper.png')] bg-cover bg-center bg-fixed p-8"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/hero/image_ukiyo.png"
          alt="UKIYO ロゴ"
          width={240}
          height={240}
          className="drop-shadow-xl"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-12 sm:mt-16"
      >
        <div className="text-black/80 dark:text-white/90 font-normal tracking-wide">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("浮世のように、儚く美しい技術表現を。")
                .pauseFor(2500)
                .deleteAll()
                .typeString("技術と余白の融合を追求。")
                .pauseFor(2500)
                .deleteAll()
                .typeString("コードで世界観をつくる。")
                .pauseFor(2500)
                .deleteAll()
                .start();
            }}
            options={{
              delay: 60,
              deleteSpeed: 40,
              cursor: "",
              loop: true,
            }}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-6 text-gray-400 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        ↓ scroll
      </motion.div>
    </section>
  );
}
