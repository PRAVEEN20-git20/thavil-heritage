import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutThavil from "./components/AboutThavil";
import Guru from "./components/Guru";
import AssistantCoach from "./components/AssistantCoach";
import Students from "./components/Students";
import Gallery from "./components/Gallery";
import LearnThavil from "./components/LearnThavil";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>

        {/* 01 - Home */}
        <section id="home">
          <Hero />
        </section>

        {/* 02 - About Thavil */}
        <section id="about">
          <AboutThavil />
        </section>

        {/* 03 - Gurunathar */}
        <section id="guru" className="guru-section">
          <Guru />
        </section>

        {/* 04 - Assistant Coach */}
        <section id="assistant-coach" className="assistant-section">
          <AssistantCoach />
        </section>

        {/* 05 - Students */}
        <section id="students">
          <Students />
        </section>

        {/* 06 - Gallery */}
        <section id="gallery">
          <Gallery />
        </section>

        {/* 07 - Learn Thavil */}
        <section id="learn">
          <LearnThavil />
        </section>

        {/* 08 - Performance Booking */}
        <section id="booking">
          <Booking />
        </section>

        {/* 09 - Contact */}
        <section id="contact">
          <Contact />
        </section>

      </main>

      <Footer />
    </>
  );
}

export default App;