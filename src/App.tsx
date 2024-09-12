import React, { useState, createContext, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Home from "./components/home/Home";
import QuienSoy from "./components/quien-soy/QuienSoy";
import NetworksCard from "./components/networks-card/NetworksCard";
import QueEs from "./components/que-es/QueEs";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Desplegable from "./components/navbar/Desplegable";
import Header from "./components/navbar/Header";

// Contextos
export const MenuContext = createContext({
  isOpen: false,
  toggleMenu: () => {},
});

export const ScrollContext = createContext<any>(null);

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const sobreMiRef = useRef<HTMLDivElement>(null);
  const physisiRef = useRef<HTMLDivElement>(null);
  const redesSocialesRef = useRef<HTMLDivElement>(null);

  const inicioRef = useRef<HTMLDivElement>(null);

  // Función para scrollear al componente deseado
  const scrollToComponent = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App bg-[#1B1B1B] overflow-y-hidden">
      {/* Proveedores de MenuContext y ScrollContext */}
      <MenuContext.Provider value={{ isOpen, toggleMenu }}>
        <ScrollContext.Provider
          value={{
            scrollToComponent,
            refs: { sobreMiRef, physisiRef, redesSocialesRef, inicioRef },
          }}
        >
          {isOpen && <Desplegable />}
          {isOpen && (
            <div
              className="h-[2396px] z-40 absolute w-full bg-black opacity-30 transition-all"
              style={{ zIndex: "998" }}
            ></div>
          )}
          <Header></Header>
          <div ref={redesSocialesRef}>
            <Home />
          </div>
          
          
          <div className="h-[100px]" />
          <NetworksCard />
          <div ref={sobreMiRef}>
            <QuienSoy />
          </div>
          <div ref={physisiRef}>
            <QueEs />
          </div>
          <div>
            <Contact />
          </div>
          <Footer />
        </ScrollContext.Provider>
      </MenuContext.Provider>
    </div>
  );
}

export default App;
