// import React from 'react'
// import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";


const projects = [
  {
    title: "Tind Logistics",
    description:
      "A shipment tracking platform built with React, Vite, JavaScript, and CSS3. Integrated APIs supporting shipment creation and tracking workflows, with a reusable component architecture and responsive UI.",
    tags: ["React", "Vite", "JavaScript", "CSS3"],
    liveUrl: "https://frontend-project-beta-opal.vercel.app/",
    image: "/images/tind-logistics.png",
  },
  // {
  //   title: "The Meridiem",
  //   description:
  //     "Developed and launched user-facing features for a technology news platform built with Next.js, using Tailwind CSS and shadcn/ui, with REST API integration and a headless CMS / Markdown publishing workflow.",
  //   tags: ["Next.js", "Tailwind CSS", "shadcn/ui", "REST API"],
  //   liveUrl: null, // TODO: add live URL if public
  // },
];

const FeaturedProjects = () => {
  return (
    // <section id="projects" className="px-6 py-24 border-t border-border">
    //   <div className="max-w-5xl mx-auto">
    //     <p className="font-mono text-sm text-emerald-400 mb-4">Projects</p>

    //     <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-10">
    //       Featured work
    //     </h2>

    //     <div className="grid gap-8 sm:grid-cols-2">
    //       {projects.map((project) => (
    //         <div
    //           key={project.title}
    //           className="group rounded-lg border border-border bg-white/5 p-5 hover:border-emerald-400/50 transition-colors"
    //         >
    //           {/* Placeholder image */}
    //           <div className="mb-4 aspect-video rounded-md bg-white/5 border border-border flex items-center justify-center">
    //             <span className="text-xs font-mono text-muted-foreground">
    //               preview image
    //             </span>
    //           </div>

    //           <h3 className="text-lg font-semibold text-foreground mb-2">
    //             {project.title}
    //           </h3>

    //           <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
    //             {project.description}
    //           </p>

    //           <div className="flex flex-wrap gap-2 mb-4">
    //             {project.tags.map((tag) => (
    //               <span
    //                 key={tag}
    //                 className="text-xs font-mono text-muted-foreground border border-border rounded px-2 py-1"
    //               >
    //                 {tag}
    //               </span>
    //             ))}
    //           </div>

    //           <div className="flex items-center gap-4">

    //               <a href={project.githubUrl}
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
    //               aria-label={`${project.title} GitHub repository`}
    //             >
    //               <FiGithub size={16} /> Code
    //             </a>

    //               <a href={project.liveUrl}
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
    //               aria-label={`${project.title} live demo`}
    //             >
    //               <FiExternalLink size={16} /> Live
    //             </a>
    //           </div>
    //         </div>
    //       ))}
    //     </div>

    //     {/* <Link
    //       href="/projects"
    //       className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
    //     >
    //       View all projects
    //       <FiArrowRight size={16} />
    //     </Link> */}
    //   </div>
    // </section>

    <section
      id="projects"
      className="px-6 py-6 md:py-12 border-t border-border"
    >
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-2xl md:text-4xl text-emerald-400 mb-2 md:mb-4">
          Projects
        </p>

        <h2 className="text-base md:text-xl font-semibold text-foreground mb-5 md:mb-7">
          Featured work
        </h2>

        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-lg border border-border bg-white/5 overflow-hidden transition-colors"
            >
              <div className="w-full aspect-video relative">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className="object-contain object-top transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-white/5 border border-border flex items-center justify-center">
                    <span className="text-xs font-mono text-muted-foreground">
                      preview image
                    </span>
                  </div>
                )}
              </div>
              <div className="px-5">
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

                <div className="flex items-center gap-4 mb-5">
                  <a
                    href="https://github.com/IsraelOye"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <FiGithub size={16} /> Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <FiExternalLink size={16} /> Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects