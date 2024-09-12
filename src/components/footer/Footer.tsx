// images
import Instagram from "../../assets/IG.png";
import Linkedin from "../../assets/LINKEDIN.png";
import Facebook from "../../assets/FACEBOOK.png";

export default function Footer() {
  return (
    <div className="flex flex-col items-start justify-start bg-[#1B1B1B] h-[148px] w-full top-[2248px] z-40 lg:relative lg:top-0">
      <div className="flex gap-5 m-6">
        <a
          href="https://www.instagram.com/adriansfeir/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-8" src={Instagram} alt="Instagram" />
        </a>

        <a
          href="https://www.linkedin.com/in/adriansfeir/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-8" src={Linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://www.facebook.com/adrian.sfeir.1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-8" src={Facebook} alt="Facebook" />
        </a>
      </div>
    </div>
  );
}
