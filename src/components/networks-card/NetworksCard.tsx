// images
import Instagram from "../../assets/IG.png";
import Linkedin from "../../assets/LINKEDIN.png";
import Facebook from "../../assets/FACEBOOK.png";

export default function NetworksCard() {
  return (
    <div className="bg-white flex flex-row items-center justify-center gap-14 flex-grow w-full rounded-[25px] h-[173px] lg:absolute z-20 bottom-0 lg:bottom-0 lg:gap-28">
      <a
        href="https://www.instagram.com/nelsonperez.ncp/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-[51px] lg:w-20">
          <img className="w-full" src={Instagram} alt="Instagram" />
        </div>
      </a>

      <a
        href="https://www.linkedin.com/in/nelson-p%C3%A9rez-bbb03465/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-[60px] lg:w-20">
          <img className="w-full" src={Linkedin} alt="Linkedin" />
        </div>
      </a>

      <a href="_blank" target="_blank" rel="noopener noreferrer">
        <div className="w-[51px] lg:w-20">
          <img className="w-full" src={Facebook} alt="Facebook" />
        </div>
      </a>
    </div>
  );
}
