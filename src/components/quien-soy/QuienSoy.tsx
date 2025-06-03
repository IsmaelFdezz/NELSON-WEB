import logo from "../../assets/blanco.png";
import { useState, useEffect } from "react";

import img1 from "../../assets/nelsn-working-square.jpg";
import img2 from "../../assets/nelson-working-tv.jpg";
import img3 from "../../assets/nelson-with-some-dude.jpg";
import img4 from "../../assets/nelson-with-people.jpg";

export default function QuienSoy() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [img1, img2, img3, img4];

  // Auto-rotate carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="bg-[#1B1B1B] h-[800px] lg:h-[666px] flex flex-col items-center justify-center gap-[37px] relative z-10 lg:flex-row">
      <div className="w-[257px] lg:w-[507px] relative">
        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-[25px] max-w-[257px] max-h-[257px] lg:max-w-[507px] lg:max-h-[507px] group">
          {/* Images */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover flex-shrink-0 max-w-[257px] max-h-[257px] lg:max-w-[507px] lg:max-h-[507px]"
              />
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentImageIndex === index
                    ? "bg-white scale-110"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() =>
              goToSlide(
                currentImageIndex === 0
                  ? images.length - 1
                  : currentImageIndex - 1
              )
            }
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 opacity-0 hover:opacity-100 group-hover:opacity-100"
            aria-label="Previous image"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() =>
              goToSlide(
                currentImageIndex === images.length - 1
                  ? 0
                  : currentImageIndex + 1
              )
            }
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 opacity-0 hover:opacity-100 group-hover:opacity-100"
            aria-label="Next image"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="bg-[#363636] w-[257px] h-[257px] rounded-[25px] lg:w-[507px] lg:h-[507px]">
        <div className="flex flex-row items-center m-5 gap-4">
          <button className="w-[89px] h-[25px] bg-[#8F8F8F] rounded-[10px] color text-white text-[12px] lg:text-[24px] lg:w-[174px] lg:h-[46px] font-bold cursor-default inte text-sm">
            ¿Quien soy?
          </button>
          <img
            src={logo}
            alt="Logo"
            className="w-[24px] h-[23px] lg:w-[52px] lg:h-[50px]"
          />
        </div>
        <div className="m-5 text-white text-[10px] lg:text-xl inter hidden lg:flex">
          <ul className="list-disc ml-4">
            <li className="decoration-dotted">
              Soy analista programador senior, desarrollador e implementador de
              sistemas Physis gestión Acopio.
            </li>
            <li className="mt-9 decoration-dotted">
              Actualmente soy Jefe de Producto del sector Acopio y Corretaje
            </li>
            <li className="mt-9 decoration-dotted">
              Cuento con mas de 19 años de experiencia en herramientas de
              desarrollo de software
            </li>
          </ul>
        </div>

        <div className="m-5 text-white text-[10px] lg:text-[10px] inter text-sm lg:hidden">
          <ul className="list-disc ml-4 text-sm">
            <li className="decoration-dotted text-xs">
              Soy analista programador seniors y desarrollador e implementador
              de sistemas Physis gestión Acopio
            </li>
            <li className="mt-4 decoration-dotted text-xs">
              Actualmente soy Jefe de Producto del sector Acopio y Corretaje
            </li>
            <li className="mt-4 decoration-dotted text-xs">
              Cuento con mas de 19 años de experiencia en herramientas de
              desarrollo de software
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
