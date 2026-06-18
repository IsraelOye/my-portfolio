import React from 'react'
// import Navbar from '@/components/navbar'
import Hero from '@/components/hero';
import AboutTeaser from '@/components/about-teaser';
import SkillSnapshot from '@/components/skill-snapshot';
import FeaturedProjects from '@/components/featured-projects';
import ClosingCta from '@/components/closing-cta';

const Home = () => {
  return (
    <>
     <div className="min-h-screen relative">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
      </div>
       {/* <p className="text-4xl text-center text-blue-700 pt-15">My Portfolio</p> */}
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