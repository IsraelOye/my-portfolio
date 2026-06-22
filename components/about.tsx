import React from 'react'
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const AboutTeaser = () => {
  return (
    <section id="about" className="px-6 py-15">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-2xl md:text-4xl text-emerald-400 mb-2 md:mb-4">
          About
        </p>

        <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl">
          {/* TODO: your 2-3 sentence about teaser */}
          Building interfaces that actually hold up — across screen sizes, slow
          connections, and real users is the part I care about. Not just making
          it look right in the design file.
        </p>
        <p className="mt-1 text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl">
          I work mainly with React, Next.js, and Tailwind CSS, with REST API
          integration and component architecture as the backbone of most of what
          I build. I'm based in Lagos, Nigeria, and currently studying Computer
          Science at the National Open University of Nigeria. Open to frontend
          roles where the problem is real and the code is expected to last.
        </p>

        {/* <Link
          href="/about"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          Learn more about me
          <FiArrowRight size={16} />
        </Link> */}
      </div>
    </section>
  );
}

export default AboutTeaser