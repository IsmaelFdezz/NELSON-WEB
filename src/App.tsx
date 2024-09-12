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

  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const correctPassword = 'asf756'; // Define tu contraseña aquí

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Contraseña incorrecta');
    }
  };

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

  if (!isAuthenticated) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <h2 className="text-white text-2xl mb-4">Ingresa la contraseña</h2>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="p-2 mb-4 border border-gray-400 rounded"
            placeholder="Contraseña"
          />
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
            Entrar
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="App min-h-screen bg-[#1B1B1B]">
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
