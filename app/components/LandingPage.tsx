"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const HERO_TEXT = "Organize Your Work,\nSimplify Your Life.";

export default function LandingPage() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const startTyping = setTimeout(() => {
      let index = 0;

      const typingInterval = setInterval(() => {
        setDisplayText(HERO_TEXT.slice(0, index + 1));
        index++;

        if (index === HERO_TEXT.length) {
          clearInterval(typingInterval);
        }
      }, 100);
    }, 250);

    return () => clearTimeout(startTyping);
  }, []);

  return (
    <section className="relative min-h-screen bg-linear-to-b from-white to-sky-300">
      <header className="absolute inset-0 top-0 z-10">
        <div className="mx-auto flex max-w-7xl items-center px-8 py-6">
          <Link href="https://wasnportfolio.vercel.app/">
            <motion.h1
              initial={{
                opacity: 0,
                x: -50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="text-3xl font-extrabold tracking-tight text-sky-500"
            >
              Wasnify
            </motion.h1>
          </Link>
        </div>
      </header>

      <div className="flex min-h-screen items-center justify-center">
        <div className="mx-auto flex flex-col max-w-4xl items-center px-6 text-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
            className="mb-7 border border-sky-200 bg-white/75 rounded-full px-5 py-2 backdrop-blur-md"
          >
            <span className="text-sm font-medium text-sky-600">
              ✨ Smarter task management for everyone
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-gray-900">
            {displayText}
            <span className="animate-ping text-sky-500">|</span>
          </h1>

          <motion.p 
            initial={{
              opacity: 0,
              x: -25,
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              delay: 0.75,
              duration: 1,
            }}
            className="mx-auto mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-gray-600"
          >
            Join millions of people to capture ideas, organize life, and turn
            every task into meaningful progress.
          </motion.p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <motion.div
              initial={{
                opacity: 0,
                y: -25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 5,
                duration: 1,
              }}
            >
              <button className="rounded-full bg-sky-500 px-8 py-4 font-semibold text-white shadow-lg shadow-sky-500/30">
                Get Started
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
