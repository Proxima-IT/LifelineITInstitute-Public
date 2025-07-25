import { Folder } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import about1 from '../../assets/about1.JPG'
import about2 from '../../assets/about2.JPG'
import about3 from '../../assets/about3.png'
import Aos from "aos";

const images = [
  about1, about2, about3
];

// from Folderimport img1 from "@/assets/img1.jpg";
// import img2 from "@/assets/img2.jpg";
// import img3 from "@/assets/img3.jpg";

// const images = [img1, img2, img3];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);

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
        <div className="text-secondary space-y-2">
          <h1
            data-aos="fade-up"
            className="text-xl md:text-3xl lg:text-5xl xxl:text-6xl font-semibold"
          >
            Take Challenge for Build Your Life.
          </h1>

          <h1
            className="text-xl md:text-3xl lg:text-5xl xxl:text-6xl font-semibold"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
            // data-aos-disable="mobile" // 🔥 এইটা মূল কাজ করবে
          >
            The World Most Lessons for Back to Your Life.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;



