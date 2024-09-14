import logo from "../../assets/blanco.png"

export default function Contact() {
  return (
    <div className="z-30 h-[580px]  bg-[#387DB6] top-[1734px] w-full lg:relative lg:top-0 ">
      <div className="flex flex-col mt-0 pt-[37px] m-[37px] h-[425px] lg:flex-row ">
        <div className="h-[68px] w-full flex flex-col items-center lg:w-1/2 lg:hidden">
          <h3 className="font-bold text-[46px] text-white">Contácto</h3>
          {/* <p className="text-center text-white text-[8px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p> */}
        </div>

        <div className="h-[68px] w-full hidden flex-col items-center mt-32 lg:w-1/2 justify-self-center lg:flex">
          <img src={logo} alt="Logo" className="w-20"/>
          <h3 className="font-bold text-8xl text-white">Contácto</h3>
          {/* <p className="text-center text-white text-l w-56">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p> */}
        </div>
        <form className="flex gap-2 items-center flex-col h-full justify-between mt-[24px]">
          <div className="flex gap-2 flex-wrap justify-center">
            <div className="flex flex-col">
              <label className="text-[14px] text-white ml-4 inter">Nombre</label>
              <input className="w-[316px] lg:w-[266px] lg:h-[53px] h-[31px] rounded-[15px] input-shadow inter" type="text" />
            </div>
            <div className="flex flex-col">
              <label className="text-[14px] text-white ml-4 inter">Apellido</label>
              <input className="w-[316px] lg:w-[266px] lg:h-[53px] input-shadow h-[31px] rounded-[15px]" type="text" />
            </div>
          </div>

          <div className="flex">
          <div className="flex flex-col">
              <label className="text-[14px] text-white ml-4 inter">E-mail</label>
              <input className="w-[316px] lg:w-[546px] lg:h-[53px] input-shadow h-[31px] rounded-[15px] max-w-[316px] lg:max-w-[546px]" type="text" />
            </div>
          </div>

          <div className="flex">
            <div className="flex flex-col">
              <label className="text-[14px] text-white ml-4 inter">Escribe un mensaje</label>
              <textarea className="w-[316px] lg:w-[546px] lg:h-[240px] h-[139px] input-shadow rounded-[15px]"></textarea>
            </div>
          </div>

          <div className="flex justify-between items-center w-[316px] lg:w-[546px]">
            <button className="w-[154px] bg-white input-shadow h-[31px] rounded-[15px] inter ">Enviar</button>
            <p className="text-[14px] text-white inter">¡Gracias por tu mensaje!</p>
          </div>
        </form>
      </div>
    </div>
  );
}
