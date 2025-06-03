import { useContext } from "react";
import logo from "../../assets/logo original.png";
import ContactButton from "./Contact-button";
import Menu from "./Menu";
import { ScrollContext } from "../../App";

import logoWeb from "../../assets/logo blackwhite.png";

export default function Header() {
  const { scrollToComponent, refs } = useContext(ScrollContext);

  return (
    <div className="fixed w-screen z-50 h-[105px] flex justify-center items-end lg:h-24 lg:mt-4">
      <header className="header z-50 w-[310px] h-[62px] bg-white rounded-[15px] flex justify-around items-center lg:hidden">
        <Menu></Menu>
        <img className="w-[33px]" src={logoWeb} alt="Logo" />
        <ContactButton></ContactButton>
      </header>

      <header className="header z-50 w-[730px] rounded-[15px] justify-between h-full bg-white  hidden items-center lg:flex">
        <div className="w-1/4">
          <img className="w-[49px] ml-16" src={logoWeb} alt="Logo" />
        </div>

        <div className="flex justify-end items-center gap-10 mr-12 text-xl">
          <span
            className="inter cursor-pointer"
            onClick={() => scrollToComponent(refs.sobreMiRef)}
          >
            Sobre mi
          </span>
          <span
            className="inter cursor-pointer"
            onClick={() => scrollToComponent(refs.physisiRef)}
          >
            Physis
          </span>
          <span
            className="inter cursor-pointer"
            onClick={() => scrollToComponent(refs.redesSocialesRef)}
          >
            Redes sociales
          </span>

          <div>
            <ContactButton></ContactButton>
          </div>
        </div>
      </header>
    </div>
  );
}
