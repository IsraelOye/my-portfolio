import React from 'react'

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

// TODO: swap these for your actual stack
const skillGroups = [
  {
    label: "Languages",
    skills: ["JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    label: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "shadcn/ui"],
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub", "Vite", "Webpack", "Vercel"],
  },
  {
    label: "Concepts",
    skills: [
      "REST API Integration",
      "Responsive Design",
      "Mobile-First Development",
      "Component Architecture",
      "Performance Optimization",
    ],
  },
  {
    label: "CMS & Content",
    skills: ["Headless CMS", "Markdown"],
  },
];


const SkillSnapshot = () => {
  return (
    // <section id="skills" className="px-6 py-24 border-t border-border">
    //   <div className="max-w-5xl mx-auto">
    //     <p className="font-mono text-sm text-emerald-400 mb-4">Stack</p>

    //     <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-8">
    //       Tools I work with
    //     </h2>

    //     <div className="flex flex-wrap gap-3">
    //       {skills.map((skill) => (
    //         <span
    //           key={skill}
    //           className="rounded-md border border-border bg-white/5 px-4 py-2 text-sm font-mono text-muted-foreground hover:text-foreground hover:border-emerald-400/50 transition-colors"
    //         >
    //           {skill}
    //         </span>
    //       ))}
    //     </div>

    //     {/* <Link
    //       href="/skills"
    //       className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
    //     >
    //       See full skill set
    //       <FiArrowRight size={16} />
    //     </Link> */}
    //   </div>
    // </section>

    <section id="skills" className="px-6 py-6 md:py-12 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-2xl md:text-4xl text-emerald-400 mb-2 md:mb-4">
          Stack
        </p>

        <h2 className="text-base md:text-xl font-semibold text-foreground mb-5 md:mb-7">
          Tools I work with
        </h2>

        <div className="space-y-6">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-white/5 px-3 py-1.5 text-sm font-mono text-muted-foreground hover:text-foreground hover:border-emerald-400/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillSnapshot