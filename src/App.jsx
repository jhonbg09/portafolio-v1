import "./App.css";
import "./style/home.css";
import { data } from "./data";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

function App() {
  console.log(data);

  return (
    <div className="container mx-auto m-0 p-0 retalive h-screen">
      <section className="header fixed m-5 bg-cyan-100 w-11/12 h-20 items-center rounded-2xl z-auto	">
        <Header />
      </section>

      <section
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="h-screen home"
      >
        <Home />
      </section>

      <section
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="h-screen"
      >
        <About
          about={data.about}
          description={data.description_about}
          key={data.id}
          techs={data.tech}
        />
      </section>

      {/* <section
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="h-screen mt-20 home"
      >
        <Projects />
      </section> */}

      <section data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500" className="h-screen mt-20 home">
        <Experience />
      </section>

      <footer className="container bg-cyan-400">
        <p>desde el footer</p>
      </footer>
    </div>
  );
}

export default App;
