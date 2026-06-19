import React from 'react'
// import Navbar from '@/components/navbar'
import Hero from '@/components/hero';
import AboutTeaser from '@/components/about';
import SkillSnapshot from '@/components/skill';
import FeaturedProjects from '@/components/projects';
import ClosingCta from '@/components/closing-cta';
import ScrollToTop from '@/components/scroll-to-top';
const Home = () => {
  return (
    <>
     <div className="min-h-screen relative">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
      </div>
       <ScrollToTop />
        <Hero />
        <AboutTeaser />
        <SkillSnapshot />
        <FeaturedProjects />
        <ClosingCta />
     </div>
    </>
  )
}

export default Home;