import React, { useState, createContext, useRef, useEffect } from "react";
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

  const [documentHeight, setDocumentHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      setDocumentHeight(document.documentElement.scrollHeight);
    };

    // Inicializar altura y agregar listener para cambios de tamaño
    updateHeight();
    window.addEventListener("resize", updateHeight);

    // Cleanup
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const sobreMiRef = useRef<HTMLDivElement>(null);
  const physisiRef = useRef<HTMLDivElement>(null);
  const redesSocialesRef = useRef<HTMLDivElement>(null);

  const contactoRef = useRef<HTMLDivElement>(null);

  // Función para scrollear al componente deseado
  const scrollToComponent = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App min-h-screen bg-[#1B1B1B]">
      {/* Proveedores de MenuContext y ScrollContext */}
      <MenuContext.Provider value={{ isOpen, toggleMenu }}>
        <ScrollContext.Provider
          value={{
            scrollToComponent,
            refs: { sobreMiRef, physisiRef, redesSocialesRef, contactoRef },
          }}
        >
          {isOpen && <Desplegable />}
          {isOpen && (
            <div
              className="w-full z-40 absolute bg-black opacity-30 transition-all"
              style={{ height: `${documentHeight}px`, zIndex: "998" }}
            ></div>
          )}
          <Header></Header>
          <div ref={redesSocialesRef}>
            <Home />
          </div>

          <NetworksCard />
          <div ref={sobreMiRef}>
            <QuienSoy />
          </div>
          <div ref={physisiRef}>
            <QueEs />
          </div>
          <div ref={contactoRef}>
            <Contact />
          </div>
          <Footer />
        </ScrollContext.Provider>
      </MenuContext.Provider>
    </div>
  );
}

export default App;
