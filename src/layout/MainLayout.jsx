import React, { useEffect, useState } from "react";
import Header from "../Components/shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "@/components/shared/Footer";
import Marquee from "react-fast-marquee";
import Preloader from "@/components/shared/Preloader";
import ErrorBoundary from "@/pages/ErrorBoundary";
const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <ErrorBoundary>
          <div className="font-roboto bg-gradient-to-b from-[#0B254C] via-[#348fd1] to-[#041630]">
          {/* <Marquee className="bg-gold w-full p-2  text-white">
            🚀Boost Your Skills with 90% OFF🔥 WhatsApp us: 📱 +8801867101740 |
            +8801887893100
          </Marquee> */}
          <Header></Header>
          <div className="min-h-screen">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
        </ErrorBoundary>
      )}
    </>
  );
};

export default MainLayout;
