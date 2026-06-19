import { FiGithub, FiLinkedin, FiMail, } from "react-icons/fi";

const ClosingCta = () => {
  return (
    // <section className="px-6 py-32 border-t border-border">
    //   <div className="max-w-3xl mx-auto text-center">
    //     <p className="font-mono text-sm text-emerald-400 mb-4">Contact</p>

    //     <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
    //       Let's build something together
    //     </h2>

    //     <p className="text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
    //       {/* TODO: customize this line if you like */}
    //       Have a project in mind, or just want to say hi? My inbox is open.
    //     </p>

    //     <Link
    //       href="/contact"
    //       className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-6 py-3 text-sm font-medium text-black hover:bg-emerald-400 transition-colors"
    //     >
    //       Get in touch
    //       <FiArrowRight size={16} />
    //     </Link>
    //   </div>
    // </section>
    <section id="contact" className="px-6 py-6 md:py-12 border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <p className="font-mono text-2xl md:text-4xl text-emerald-400 mb-2 md:mb-4">Contact</p>

        <h2 className="text-base md:text-xl font-semibold text-foreground mb-2 md:mb-4">
          Let's build something together
        </h2>

        <p className="text-muted-foreground mb-5 max-w-lg mx-auto leading-tight text-sm md:text-base">
          Based in Lagos, Nigeria — open to new opportunities. Reach out and
          let's talk.
        </p>

        
          {/* <a href="mailto:israeloyedele533@gmail.com"
          className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-6 py-3 text-sm font-medium text-black hover:bg-emerald-400 transition-colors mb-10"
        >
          Get in touch
          <FiArrowRight size={16} />
        </a> */}

        <div className="flex items-center justify-center gap-6 text-muted-foreground">
          
            <a href="https://github.com/IsraelOye"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            <FiGithub size={20} />
          </a>
          
            <a href="https://www.linkedin.com/in/israel-oyedele-a93b7b383"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            <FiLinkedin size={20} />
          </a>
          
            <a href="mailto:israeloyedele533@gmail.com"
            className="hover:text-foreground transition-colors"
          >
            <FiMail size={20} />
          </a>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          08159879973, 08097872172 · Lagos, Nigeria
        </p>
      </div>
    </section>
  )
}

export default ClosingCta