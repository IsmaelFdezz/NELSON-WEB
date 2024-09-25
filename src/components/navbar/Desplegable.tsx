import { useContext } from "react";
import { MenuContext, ScrollContext } from "../../App";
import ContactButton from "./Contact-button";

import closeIcon from "../../assets/borrar.png"

export default function Desplegable() {
  const { toggleMenu } = useContext(MenuContext);
  const { scrollToComponent, refs } = useContext(ScrollContext);

  return (
    <div className="fixed flex flex-col w-full left-0 top-0 h-[210px] rounded-[25px] bg-white" style={{zIndex: "999"}}>
      <div className="h-1/4 flex justify-end items-center flex-row relative">
        <img
        src={closeIcon}
        alt="Cerrar"
          onClick={toggleMenu}
          className="w-[34px] h-[34px] top-5 z-50 mr-5 absolute"
        />
      </div>
      <div className="h-full w-full pl-[48px]">
        <ul className="mb-5">
          <li onClick={() => scrollToComponent(refs.sobreMiRef)} className="text-[16px] mb-2 inter">Mi perfil</li>
          <li onClick={() => scrollToComponent(refs.physisiRef)} className="text-[16px] mb-2 inter">Physis</li>
          <li onClick={() => scrollToComponent(refs.redesSocialesRef)} className="text-[16px] mb-2 inter">Redes sociales</li>
        </ul>
        <ContactButton></ContactButton>
      </div>
    </div>
  );
}
