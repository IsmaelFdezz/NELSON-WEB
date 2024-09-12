// images
import Instagram from "../../assets/IG.png";
import Linkedin from "../../assets/LINKEDIN.png";
import Facebook from "../../assets/FACEBOOK.png";

export default function NetworksCard() {
  return (
    <div className="bg-white flex flex-row items-center justify-center gap-10 flex-grow w-full rounded-[25px] h-[173px] absolute z-20 bottom-[150px] lg:bottom-0 lg:gap-16">
      <a href="https://www.instagram.com/adriansfeir/" target="_blank" rel="noopener noreferrer">
        <div className="w-[51px] lg:w-16">
          <img className="w-full" src={Instagram} alt="Instagram" />
        </div>
      </a>

      <a href="https://www.linkedin.com/in/adriansfeir/" target="_blank" rel="noopener noreferrer">
        <div className="w-[51px] lg:w-16">
          <img className="w-full" src={Linkedin} alt="Linkedin" />
        </div>
      </a>

      <a href="https://www.facebook.com/adrian.sfeir.1" target="_blank" rel="noopener noreferrer">
        <div className="w-[51px] lg:w-16">
          <img className="w-full" src={Facebook} alt="Facebook" />
        </div>
      </a>
    </div>
  );
}
