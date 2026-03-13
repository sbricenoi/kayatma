import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SobreNosotros from "@/components/SobreNosotros";
import Clases from "@/components/Clases";
import Beneficios from "@/components/Beneficios";
import Maestro from "@/components/Maestro";
import Terapias from "@/components/Terapias";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SobreNosotros />
        <Clases />
        <Beneficios />
        <Maestro />
        <Terapias />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
