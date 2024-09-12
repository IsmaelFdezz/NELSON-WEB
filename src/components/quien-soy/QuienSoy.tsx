import adrianImage from "../../assets/img-quiensoy.png";
import logo from "../../assets/blanco.png";

export default function QuienSoy() {
  return (
    <div className="bg-[#1B1B1B] h-[666px] flex flex-col items-center justify-center gap-[37px] relative z-10 lg:flex-row">
      <div className="w-[257px] lg:w-[462px]">
        <img
          src={adrianImage}
          alt="Adrian Sfeir"
          className="h-full rounded-[25px]"
        />
      </div>
      <div className="bg-[#363636] w-[257px] h-[257px] rounded-[25px] lg:w-[462px] lg:h-[462px]">
        <div className="flex flex-row items-center m-5 gap-2">
          <button className="w-[85px] h-[24px] bg-[#8F8F8F] rounded-[10px] color text-white text-[12px] lg:w-[120px] lg:h-[32px] font-bold cursor-default inte text-sm">
            Quien soy?
          </button>
          <img
            src={logo}
            alt="Logo"
            className="w-[15px] h-[16px] lg:w-[21px] lg:h-[21px]"
          />
        </div>
        <div className="m-5 text-white text-[10px] lg:text-ms inter font-bold text-sm hidden lg:flex">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus totam
          quibusdam expedita, quasi debitis sapiente veniam dolores eum, dolorem
          saepe dolore quas repellendus maxime pariatur ad a numquam earum
          molestias. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Natus totam quibusdam expedita, quasi debitis sapiente veniam dolores
          eum, dolorem saepe dolore quas repellendus maxime pariatur ad a
          numquam earum molestias.
        </div>

        <div className="m-5 text-white text-[10px] lg:text-ms inter  text-sm  lg:hidden">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus totam
          quibusdam expedita, quasi debitis sapiente veniam dolores eum, dolorem
          saepe dolore quas repellendus maxime pariatur ad a numquam earum
          molestias.
        </div>
      </div>
    </div>
  );
}
