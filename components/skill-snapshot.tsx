import React from 'react'

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

// TODO: swap these for your actual stack
const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "JavaScript",
  "Node.js",
  "Git",
  "Figma",
];


const SkillSnapshot = () => {
  return (
    <section className="px-6 py-24 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-sm text-emerald-400 mb-4">// stack</p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-8">
          Tools I work with
        </h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-border bg-white/5 px-4 py-2 text-sm font-mono text-muted-foreground hover:text-foreground hover:border-emerald-400/50 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>

        <Link
          href="/skills"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          See full skill set
          <FiArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}

export default SkillSnapshot