import { useContext, useState } from "react";
import { MenuContext } from "../../App";

import hamburger from "../../assets/menu.png"

export default function Menu() {
  const { toggleMenu } = useContext(MenuContext);

  return (
    <div className="relative">
      <div
        onClick={toggleMenu}
        className="bg-[#F4F4F4] rounded-[8px] w-[96px] h-[36px] flex justify-around items-center"
      >
        <img src={hamburger} alt="hamburger" className="w-[32px] h-[32px]"/>
        <span>Menú</span>
      </div>
    </div>
  );
}
