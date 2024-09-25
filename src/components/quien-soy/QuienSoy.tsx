import adrianImage from "../../assets/img-quiensoy.png";
import logo from "../../assets/blanco.png";

export default function QuienSoy() {
  return (
    <div className="bg-[#1B1B1B] h-[800px] lg:h-[666px] flex flex-col items-center justify-center gap-[37px] relative z-10 lg:flex-row">
      <div className="w-[257px] mr-[27px] lg:mr-0 lg:w-[462px]">
        <img
          src={adrianImage}
          alt="Adrian Sfeir"
          className="h-full rounded-[25px] max-w-[285px] max-h-[285px] lg:max-w-[462px] lg:max-h-[462px]"
        />
      </div>
      <div className="bg-[#363636] w-[285px] h-[440px] rounded-[25px] lg:w-[462px] lg:h-[462px]">
        <div className="flex flex-row items-center m-5 gap-2">
          <button className="w-[85px] h-[24px] bg-[#8F8F8F] rounded-[10px] color text-white text-[12px] lg:w-[120px] lg:h-[32px] font-bold cursor-default inte text-sm">
            Mi perfil
          </button>
          <img
            src={logo}
            alt="Logo"
            className="w-[15px] h-[16px] lg:w-[21px] lg:h-[21px]"
          />
        </div>
        <div className="m-5 text-white text-[10px] lg:text-ms inter font-bold text-sm hidden lg:flex">
          <ul className="list-disc ml-4">
            <li className="decoration-dotted">
              Egresado en Sistemas de la Universidad CAECE y desarrollador de
              Software con más de 25 años de experiencia.
            </li>
            <li className="mt-6 decoration-dotted">
              Debido a mi intensa actividad dentro del departamento de Sistemas
              de Morgan, Benedit y Asociados, creé la empresa Physis Informatica
              SRL
            </li>
            <li className="mt-6 decoration-dotted">
              Consolidé la presencia de Physis en el mercado de software
              agropecuario en nuestro país.
            </li>
            <li className="mt-6 decoration-dotted">
              Actualmente Physis creció de forma exponencial en todos los
              mercados de la cadena primaria.
            </li>
            <li className="mt-6 decoration-dotted">
              Hoy en dia soy el CEO de la firma.
            </li>
          </ul>
        </div>

        <div className="m-5 text-white text-[10px] lg:text-ms inter text-sm lg:hidden">
          <ul className="list-disc ml-4 text-sm">
            <li className="decoration-dotted text-xs">
              Soy egresado en sistemas de la universidad CAECE y desarrollador
              de software con más de 25 años de experiencia.
            </li>
            <li className="mt-4 decoration-dotted text-xs">
              Debido a mi intensa actividad dentro del departamento de sistemas
              de Morgan, Benedit y Asociados, Creé la empresa Physis informatica
              SRL.
            </li>
            <li className="mt-4 decoration-dotted text-xs">
              Consolidé la presencia de Physis en el mercado de software
              agropecuario en nuestro país.
            </li>
            <li className="mt-6 decoration-dotted">
              Physis creció exponencialmente en todos los mercados de la cadena
              primaria.
            </li>
            <li className="mt-6 decoration-dotted">
              En la actualidad soy el CEO de la firma.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
