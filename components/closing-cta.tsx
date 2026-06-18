import React from 'react'
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const ClosingCta = () => {
  return (
    <section className="px-6 py-32 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-mono text-sm text-emerald-400 mb-4">// contact</p>

        <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
          Let's build something together
        </h2>

        <p className="text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
          {/* TODO: customize this line if you like */}
          Have a project in mind, or just want to say hi? My inbox is open.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-6 py-3 text-sm font-medium text-black hover:bg-emerald-400 transition-colors"
        >
          Get in touch
          <FiArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}

export default ClosingCta