import Image from "next/image"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ProjectsSection from "@/components/ProjectsSection"
import EmailSection from "@/components/EmailSection"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a192f] mx-auto">
      <div className="mx-4">
        <HeroSection id="home"/>
        <AboutSection id="about"/>
        <ProjectsSection/>
        <EmailSection id="contact"/>
      </div>
    </main>
  )
}
