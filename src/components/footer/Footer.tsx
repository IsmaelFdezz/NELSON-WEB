// images
import Instagram from "../../assets/ig-white.png";
import Linkedin from "../../assets/linkedin-white.png";
import Facebook from "../../assets/facebook-white.png";

export default function Footer() {
  return (
    <div className="flex flex-col items-start justify-start bg-[#1B1B1B] h-[148px] w-full top-[2248px] z-40 lg:relative lg:top-0">
      <div className="flex gap-5 m-6">
        <a
          href="https://www.instagram.com/nelsonperez.ncp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-12" src={Instagram} alt="Instagram" />
        </a>

        <a
          href="https://www.linkedin.com/in/nelson-p%C3%A9rez-bbb03465/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="w-12" src={Linkedin} alt="Linkedin" />
        </a>
        <a href="_blank" target="_blank" rel="noopener noreferrer">
          <img className="w-12" src={Facebook} alt="Facebook" />
        </a>
      </div>
    </div>
  );
}
