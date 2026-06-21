import Nav from "@/components/Nav"
import LoadingScreen from "@/components/LoadingScreen"
import ScrollProgress from "@/components/ScrollProgress"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main style={{ background: "#04040b" }}>
      <LoadingScreen />
      <ScrollProgress />
      <Nav />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
