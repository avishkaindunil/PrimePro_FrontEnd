import "./App.css";
import CardsList from "./components/Cardlist";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="relative z-[-1]">
        <Hero />
      </div>
      <div className="pt-10">
        <CardsList />
      </div>

      <Footer />
    </>


  );
}

export default App;
