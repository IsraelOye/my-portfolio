"use client";

import Link from "next/link";
import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative flex flex-col min-h-screen justify-center px-6 pt-24 overflow-hidden">
      {/* Background grid + glow */}
      {/* <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
      </div> */}

      <div className="relative max-w-5xl mx-auto w-full">
        {/* Eyebrow / status line */}
        <div className="flex items-center gap-2 mb-7 font-mono text-sm text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <p>Available for work</p>
        </div>

        <div className="bg-gray-300 rounded-full w-fit">
          <Image 
          src="/images/portrait.jpeg" 
          alt="Israel Oyedele" 
          width={100}
          height={100}
          className="rounded-full p-0.5 mb-7"
        />
        </div>

        {/* Name */}
        <h1 className="font-mono text-4xl sm:text-6xl font-bold tracking-tight text-gray-300">
          Israel Oyedele
        </h1>

        {/* Role */}
        <p className="mt-3 font-mono text-xl sm:text-2xl text-emerald-400">
          Frontend Developer
        </p>

        {/* Bio / tagline */}
        <p className="mt-6 max-w-xl text-base md:text-lg text-gray-300 leading-relaxed md:leading-7">
          {/* TODO: your 1-2 sentence bio */}
          I build fast, accessible web interfaces with React and Next.js, 
          turning ideas into clean, functional products.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-medium text-black hover:bg-emerald-400 transition-colors"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium text-white hover:bg-white/5 transition-colors"
          >
            Get in touch
          </a>
        </div>

        {/* Social icons */}
        <div className="mt-12 flex items-center gap-5 text-gray-300">
          
           <a href="https://github.com/IsraelOye"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-muted-foreground transition-colors"
            >
            <FiGithub size={20} />
          </a>
          
            <a href="https://www.linkedin.com/in/israel-oyedele-a93b7b383"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-muted-foreground transition-colors"
          >
            <FiLinkedin size={20} />
          </a>
          
            <a href="mailto:israeloyedele533@gmail.com"
            className="hover:text-muted-foreground transition-colors"
          >
            <FiMail size={20} />
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      {/* <a
      href="#about" 
      className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce">
        <FiArrowDown size={20} />
      </a> */}
    </section>
  )
}

export default Hero