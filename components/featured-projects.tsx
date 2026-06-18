import React from 'react'
import Link from "next/link";
import { FiArrowRight, FiGithub, FiExternalLink } from "react-icons/fi";


const projects = [
  {
    title: "Project One",
    description:
      "A short 1-2 sentence description of what this project does and what problem it solves.",
    tags: ["React", "Next.js", "Tailwind"],
    githubUrl: "https://github.com/yourusername/project-one",
    liveUrl: "https://project-one.vercel.app",
  },
  {
    title: "Project Two",
    description:
      "A short 1-2 sentence description of what this project does and what problem it solves.",
    tags: ["TypeScript", "Node.js"],
    githubUrl: "https://github.com/yourusername/project-two",
    liveUrl: "https://project-two.vercel.app",
  },
];

const FeaturedProjects = () => {
  return (
    <section id="projects" className="px-6 py-24 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-sm text-emerald-400 mb-4">// projects</p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-10">
          Featured work
        </h2>

        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-lg border border-border bg-white/5 p-5 hover:border-emerald-400/50 transition-colors"
            >
              {/* Placeholder image */}
              <div className="mb-4 aspect-video rounded-md bg-white/5 border border-border flex items-center justify-center">
                <span className="text-xs font-mono text-muted-foreground">
                  preview image
                </span>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono text-muted-foreground border border-border rounded px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                
                  <a href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={`${project.title} GitHub repository`}
                >
                  <FiGithub size={16} /> Code
                </a>
                
                  <a href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={`${project.title} live demo`}
                >
                  <FiExternalLink size={16} /> Live
                </a>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/projects"
          className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          View all projects
          <FiArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}

export default FeaturedProjects