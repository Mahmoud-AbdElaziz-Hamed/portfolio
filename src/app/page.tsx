import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* About Section */}
      <section id="about" className="bg-white">
        <About />
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="bg-gray-50">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
