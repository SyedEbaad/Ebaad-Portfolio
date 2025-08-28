import Navbar from "./components/Navbar";
import About from "./components/About";
import Skill from "./components/Skills";
import "./styles.css";
// import other sections like Project, Contact if needed

export default function App() {
  return (
    <div>
      <Navbar />
      <section id="">
        <About />
      </section>
      <section id="skills">
        <Skill />
      </section>
    </div>
  );
}
