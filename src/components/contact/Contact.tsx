import logo from "../../assets/blanco.png"

export default function Contact() {
  return (
    <div className="z-30 h-[534px] rounded-t-[25px] bg-[#387DB6] top-[1734px] w-full lg:relative lg:top-0 ">
      <div className="flex flex-col m-[37px] h-[425px] lg:flex-row ">
        <div className="h-[68px] w-full flex flex-col items-center lg:w-1/2 lg:hidden">
          <h3 className="font-bold text-[40px] text-white">Contácto</h3>
          <p className="text-center text-white text-[8px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>

        <div className="h-[68px] w-full hidden flex-col items-center mt-32 lg:w-1/2 justify-self-center lg:flex">
          <img src={logo} alt="Logo" className="w-16"/>
          <h3 className="font-bold text-6xl text-white">Contácto</h3>
          <p className="text-center text-white text-l w-56">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>
        <form className="flex gap-2 items-center flex-col h-full justify-between mt-[24px]">
          <div className="flex gap-2 flex-wrap">
            <div className="w-min">
              <label className="text-[10px] text-white ml-4 ">Nombre</label>
              <input className="w-[154px] h-[31px] rounded-[15px] input-shadow" type="text" />
            </div>
            <div className="w-min">
              <label className="text-[10px] text-white ml-4">Apellido</label>
              <input className="w-[154px] input-shadow h-[31px] rounded-[15px]" type="text" />
            </div>
          </div>

          <div className="flex">
          <div className="w-min">
              <label className="text-[10px] text-white ml-4">E-mail</label>
              <input className="w-[316px] input-shadow h-[31px] rounded-[15px] max-w-[316px]" type="text" />
            </div>
          </div>

          <div className="flex">
            <div className="w-min">
              <label className="text-[10px] text-white ml-4">Escribe un mensaje</label>
              <textarea className="w-[316px] h-[139px] input-shadow rounded-[15px]"></textarea>
            </div>
          </div>

          <div className="flex justify-between items-center w-[316px]">
            <button className="w-[154px] bg-white input-shadow h-[31px] rounded-[15px]">Enviar</button>
            <p className="text-[10px] text-white">¡Gracias por tu mensaje!</p>
          </div>
        </form>
      </div>
    </div>
  );
}
