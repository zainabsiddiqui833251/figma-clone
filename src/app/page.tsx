import Hero from "@/components/hero";
import About from "@/components/about";
import Mission from "@/components/mission";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Mission/>
      <Projects/>
      <Contact />
    </div>
  );
}
