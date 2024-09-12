import logoPhysis from "../../assets/LOGO PHYSIS.png";
import logoPhysisWeb from "../../assets/logo-physis-web.png";

export default function QueEs() {
  return (
    <div>
      <div className="h-[420px] absolute top-[1355px] rounded-t-[25px] bg-white z-20 overflow-hidden lg:relative lg:top-0 lg:hidden">
        <img
          src={logoPhysis}
          alt="Physis"
          className="w-[312px] left-[138px] top-[24px] opacity-20 absolute"
        />
        <div className="flex flex-col py-[46px] px-[29px] items-center font-bold justify-between h-full">
          <h3 className="text-[40px] text-[#58595B] text-center ">
            Qué es Physis?
          </h3>
          <p className="text-[12px] font-bold text-[#58595B] flex items-center text-center ">
            Physis Informática es una empresa dedicada al desarrollo de software
            y sus servicios complementarios, con más de 35 años de presencia en
            el mercado
          </p>
          <p className="mb-[80px] text-[12px] font-bold text-[#58595B] text-center ">
            Para conocer mas sobre Physis, te invito a visitar su pagina web,{" "}
            <a className="underline decoration-solid" href="https://www.physis.com.ar/">
              clickeando aquí
            </a>
            .
          </p>
          <div className="w-[138px] mb-8">
            <img src={logoPhysisWeb} alt="Logo Physis" />
          </div>
        </div>
      </div>

      <div className="bg-white z-20 overflow-hidden hidden lg:flex flex-col relative h-auto" >
        <img 
          src={logoPhysis}
          alt="Physis"
          className="w-1/3 left-2/3 top-1/8 opacity-20 absolute"
        />

        <div className="w-full mt-8 flex flex-row justify-end pr-16">
            <img src={logoPhysisWeb} alt="Logo Physis" />
          </div>
        
        <div className="flex flex-col py-[46px] px-[29px] pb-28  items-left font-bold justify-between h-full">
          <h3 className="text-6xl text-[#58595B] text-left mb-5 ">
            Qué es Physis?
          </h3>
          <p className="text-sm font-bold w-1/2 text-[#58595B] flex items-left text-left ">
            Physis Informática es una empresa dedicada al desarrollo de software
            y sus servicios complementarios, con más de 35 años de presencia en
            el mercado
          </p>
          <p className="mb-[80px] text-sm font-bold mt-6 text-[#58595B] text-left ">
            Para conocer mas sobre Physis, te invito a visitar su pagina web,{" "}
            <a className="underline decoration-solid" href="https://www.physis.com.ar/">
              clickeando aquí
            </a>
            .
          </p>
      
        </div>
      </div>
    </div>

    
  );
}
