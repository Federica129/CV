// import logo from "./logo fs.jpeg";
import "./App.css";
import Nav from "./components/Navbar/Nav";
import Sec from "./components/Section/Section";
import Sec1 from "./components/SectionText/sectionText";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="body">
      <Nav />
      <Sec />
      <Sec1 />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
