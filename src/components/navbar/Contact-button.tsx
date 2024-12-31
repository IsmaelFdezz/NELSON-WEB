import { useContext } from "react";
import { ScrollContext } from "../../App";

export default function ContactButton() {
  const { scrollToComponent, refs } = useContext(ScrollContext);

  return (
    <button
      onClick={() => scrollToComponent(refs.contactoRef)}
      className="button-gradient rounded-[8px] h-[36px] w-[96px] text-white"
    >
      Contacto
    </button>
  );
}
