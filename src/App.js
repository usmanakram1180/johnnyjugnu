import './App.css';
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Category from "./components/Category";
import Search from "./components/Search";
import About from "./components/About";
function App() {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <Hero />
      <Marquee />
      <Category />
      <Search />
      <About />
    </div>
  );
}

export default App;
