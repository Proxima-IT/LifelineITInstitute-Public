import { Folder } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import about1 from "../../assets/about1.JPG";
import about2 from "../../assets/about2.JPG";
import about3 from "../../assets/about3.png";
import Aos from "aos";

const images = [about1, about2, about3];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);

  // About Us Hero Section Design Below Heading
  const [step, setStep] = useState(0);
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const words = ["Learn", "Grow", "Achieve"];

  useEffect(() => {
    let timeout;

    if (step < words.length) {
      let currentText = "";
      let index = 0;
      setIsTyping(true);

      const typeNextChar = () => {
        if (index < words[step].length) {
          currentText += words[step][index];
          setText(currentText);
          index++;
          timeout = setTimeout(typeNextChar, 100);
        } else {
          setIsTyping(false);
          timeout = setTimeout(() => {
            setText(currentText);
            setStep((prev) => prev + 1);
          }, 1000);
        }
      };

      typeNextChar();
    }

    return () => clearTimeout(timeout);
  }, [step]);

  const getTextWithCursor = (word, boxStep) => {
    if (step === boxStep) {
      return (
        <span>
          {text}
          <span className="blinking-cursor">|</span>
        </span>
      );
    }
    if (step > 0) return word;
    return "";
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    slideRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, [currentIndex]);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative w-full h-[280px] md:h-[400px] lg:h-[600px] xxl:h-[720px] overflow-hidden">
      {/* Sliding Images */}
      <div
        ref={slideRef}
        className="flex transition-transform duration-1000 ease-in-out h-full"
      >
        {images.map((img, i) => (
          <div key={i} className="w-full flex-shrink-0 h-full relative">
            <img
              src={img}
              alt={`Slide ${i + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
        ))}
      </div>

      {/* Static Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-secondary space-y-5">
          <h1
            data-aos="fade-up"
            className="text-xl md:text-3xl lg:text-5xl xxl:text-6xl font-semibold"
          >
            Welcome to Your Learning Journey
          </h1>

          <div className="flex justify-center items-center gap-6 transition-all duration-500">
            <div className="bg-white px-6 py-3 rounded text-[#1c2c6b] font-semibold text-lg shadow-md">
              Learn
            </div>
            <div className="bg-[#ffa800] px-6 py-3 rounded text-white font-semibold text-lg shadow-md">
              Grow
            </div>
            <div className="bg-white px-6 py-3 rounded text-[#1c2c6b] font-semibold text-lg shadow-md">
              Achieve
            </div>

            {/* <div className="bg-white px-6 py-3 rounded text-[#1c2c6b] font-semibold text-lg shadow-md  text-center">
              {getTextWithCursor("Learn", 0)}
            </div>

            <div className="bg-[#ffa800] px-6 py-3 rounded text-white font-semibold text-lg shadow-md  text-center">
              {getTextWithCursor("Grow", 1)}
            </div>

            <div className="bg-white px-6 py-3 rounded text-[#1c2c6b] font-semibold text-lg shadow-md  text-center">
              {getTextWithCursor("Achieve", 2)}
            </div> */}
            
          </div>

          {/* <h1
            className="text-xl md:text-3xl lg:text-5xl xxl:text-6xl font-semibold"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
            // data-aos-disable="mobile" // 🔥 এইটা মূল কাজ করবে
          >
            The World Most Lessons for Back to Your Life.
          </h1> */}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
