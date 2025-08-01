import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import About from "./components/About";

import OnlineCourse from "./components/OnlineCourse";
import OfflineCourse from "./components/OfflineCourse";
import Features from "./components/Features";
import JoinCommunity from "./components/JoinCommunity";
import axios from "axios";

const HomePage = () => {
  // const [banner, setBanner] = useState("");
  //  useEffect(() => {
  //     axios
  //       .get(`${import.meta.env.VITE_API_URL}/api/general`)
  //       .then((res) => {
  //         console.log(res.data);
  //         // Assuming res.data.offer is boolean or something to decide offer
  //         if (res.data) {
  //           setOffer(true);
  //           setBanner(res.data)
  //         } else {
  //           setOffer(false);
  //         }
  //       })
  //       .catch((err) => {
  //         console.error("Error fetching general data:", err);
  //       });
  //   }, []);

  return (
    <div>
      <div>
        <Hero></Hero>
      </div>
      <div className="w-10/12 xl:11/12 mx-auto space-y-10">
        
        {/* <About></About> */}
        <OnlineCourse></OnlineCourse>
        <OfflineCourse></OfflineCourse>
      </div>
      <div >
        <Reviews></Reviews>
      </div>
      <div className="w-10/12 xl:11/12 mx-auto space-y-10">
        <Features></Features>
        <JoinCommunity></JoinCommunity>
      </div>
    </div>
  );
};

export default HomePage;
