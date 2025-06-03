//Images
import BackgroundImg from "../../assets/celular-nelson.png";
import BackgroundImgDesk from "../../assets/fade-nelson.png";

export default function Home() {
  return (
    <main className="bg-[#1a642b] h-[625px] flex flex-col relative z-10 lg:bg-[#1a642b] lg:h-screen">
      <div
        className="h-full bg-cover bg-center flex items-center justify-center lg:hidden"
        style={{ backgroundImage: `url(${BackgroundImg})` }}
      >
        <div className="flex flex-col items-center mb-[100px]">
          <h3 className="chapaza text-6xl h-[65px] text-white font-[400] leading-[63.67px]">
            Nelson Perez
          </h3>
          <p className="font-[500] text-[14px] leading-[13.31px] text-white">
            Gerente de acopio de Physis Informatica
          </p>
        </div>
      </div>

      <div
        className="w-full h-full bg-cover bg-center items-center p-20 justify-end hidden lg:flex --fondoDesktop"
        style={{ backgroundImage: `url(${BackgroundImgDesk})` }}
      >
        <div className="flex flex-col items-center mb-[100px] mr-44">
          <h3 className="chapaza text-[90px] h-[65px] text-white font-[400] leading-[63.67px]">
            Nelson Perez
          </h3>
          <p className="inter opacity-70 font-[400] mt-4 text-center text-[14px] leading-[13.31px] text-white w-[400px]">
            Gerente de acopio de Physis Informatica
          </p>
        </div>
      </div>
    </main>
  );
}
