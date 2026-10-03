import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import SavrCaseStudy from "./pages/SavrCaseStudy/SavrCaseStudy";

// Velkommen! Takk for at du besøker porteføljen min. Jeg setter pris på tilbakemeldinger! 😊 

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/savr" element={<SavrCaseStudy />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
