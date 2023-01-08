import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header.js";
import HeroPage from "./components/HeroPage.js";
import Desciption from "./components/Desciption.js";
import Services from "./components/Services.js";
import LatestArticles from "./components/LatestArticles.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <Router>
      <Header />
      <HeroPage />
      <Desciption />
      <Services />
      <LatestArticles />
      <Footer />
    </Router>
  );
}

export default App;
