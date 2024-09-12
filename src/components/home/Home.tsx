//Images
import BackgroundImg from "../../assets/MOBILE.png";
import BackgroundImgDesk from "../../assets/unnamed.png";

export default function Home() {
  return (
    <main className="bg-[#1B1B1B] h-[625px] flex flex-col relative z-10 lg:bg-[#3D2C2C] lg:h-screen">
      <div
        className="h-full bg-cover bg-center flex items-center justify-center lg:hidden"
        style={{ backgroundImage: `url(${BackgroundImg})` }}
      >
        <div className="flex flex-col items-center mb-[100px]">
          <h3 className="chapaza text-[52px] h-[65px] text-white font-[400] leading-[63.67px]">
            Adrian Sfeir
          </h3>
          <p className="font-[500] text-[11px] leading-[13.31px] text-white">
            Socio fundador de Physis informatica SRL.
          </p>
        </div>
      </div>

      <div
        className="w-full h-full bg-cover bg-center items-center p-20 justify-end hidden lg:flex --fondoDesktop"
        style={{ backgroundImage: `url(${BackgroundImgDesk})` }}
      >
        <div className="flex flex-col items-center mb-[100px] mr-44">
          <h3 className="chapaza text-[90px] h-[65px] text-white font-[400] leading-[63.67px]">
            Adrian Sfeir
          </h3>
          <p className="inter opacity-70 font-[400] mt-4 text-center text-[11px] leading-[13.31px] text-white w-[400px]">
          Socio fundador de Physis informatica SRL.
          </p>
        </div>
      </div>
    </main>
  );
}
