import React from 'react'
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const AboutTeaser = () => {
  return (
    <section className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-sm text-emerald-400 mb-4">// about</p>

        <p className="text-xl sm:text-2xl text-white leading-relaxed">
          {/* TODO: your 2-3 sentence about teaser */}
          I'm a frontend developer who enjoys turning rough ideas into
          interfaces that feel fast, clear, and a little delightful to use.
          When I'm not building, I'm usually learning something new in the
          React ecosystem.
        </p>

        <Link
          href="/about"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          Learn more about me
          <FiArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}

export default AboutTeaser