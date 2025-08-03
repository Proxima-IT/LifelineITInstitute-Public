import React, { useEffect } from "react";
import mission from "../../assets/mission.jpg";
import vision from "../../assets/vision.jpg";
import { Link } from "react-router-dom";
import founder from "../../assets/Founder & CEO Image .png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import Aos from "aos";

import {
  FaWhatsapp,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import LazyLoadWrapper from "@/components/shared/LazyLoadWrapper";
import ImageCarousel from "@/components/shared/ImageCarousel";

const AboutPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="pb-10 font-poppins">
      {/* hero  */}

      <ImageCarousel></ImageCarousel>

      {/* our mission  */}

      <LazyLoadWrapper>
        <div className="mt-14 w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2  gap-10">
          <div className="">
            <img src={mission} alt="" className="rounded-xl " />
          </div>
          <div className="flex flex-col items-start text-accent gap-5 text-left">
            <button className="rounded-full bg-gold/50 px-5 py-1.5 border border-gold">
              KNOW ABOUT US
            </button>
            <h1 className="text-3xl lg:text-5xl xxl:text-6xl font-bold">
              Our Mission
            </h1>
            <p>
              Lifeline IT aims to empower the youth with modern, job-ready IT
              skills. We provide hands-on training based on real-world needs.
              Our goal is to create opportunities through freelancing and
              entrepreneurship. We are committed to reducing unemployment across
              the country.
            </p>
            <Link to="https://www.youtube.com/@LifelineITInstitute">
              <button className="text-white text-center lg:px-[35px] px-[20px] py-[8px] lg:py-[10px] rounded-full shadow-[0_0_10px_#000_80%] bg-gradient-to-r from-[#f09619ee] via-[#e4d653] to-[#f9a917] bg-[length:200%_auto] transition-all duration-500 hover:bg-[position:right_center] block font-bold">
                More About us
              </button>
            </Link>
          </div>
        </div>
      </LazyLoadWrapper>

      {/* our vision  */}

      <LazyLoadWrapper>
        <div className="mt-14 w-11/12 mx-auto flex flex-col-reverse lg:flex-row gap-10">
          <div className="flex flex-col w-1/2 text-accent items-start gap-5 text-left">
            <button className="rounded-full  bg-gold/50 px-5 py-1.5 border border-gold">
              HOW WE WORK
            </button>
            <h1 className="text-3xl lg:text-5xl xxl:text-6xl font-bold">
              Our Vission
            </h1>
            <p>
              To become the most trusted and impactful IT training institute in
              Bangladesh. Producing thousands of successful freelancers, job
              holders, and entrepreneurs. Building a self-reliant, skilled
              digital generation for the future. Leading the nation toward a
              sustainable, tech-driven economy.
            </p>

            <Link to="https://www.facebook.com/lifeline.itti">
              <button className="text-white text-center lg:px-[35px] px-[20px] py-[8px] lg:py-[10px] rounded-full shadow-[0_0_10px_#000_80%] bg-gradient-to-r from-[#f09619ee] via-[#e4d653] to-[#f9a917] bg-[length:200%_auto] transition-all duration-500 hover:bg-[position:right_center] block font-bold">
                Learn More About us
              </button>
            </Link>
          </div>

          <div className="w-1/2">
            <img src={vision} alt="" className="rounded-xl " />
          </div>
        </div>
      </LazyLoadWrapper>

      <LazyLoadWrapper>
        <section className="bg-accent py-12 px-4 md:px-8 w-10/12 mx-auto rounded-sm my-8">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-8">
            {/* Owner Image */}
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-lg">
              <img
                src={founder} // Change to actual owner image path
                alt="Owner"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Owner Info */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                Ashraful Islam Rabbi
              </h2>
              <p className="mt-2 text-lg font-semibold text-primary">
                Founder & CEO, Lifeline IT Training Institute
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed max-w-xl">
                Ashraful Islam Rabbi is a passionate Computer Science Engineer
                with over 10 years of professional experience in Graphic Design
                and Digital Marketing. As the founder of Lifeline IT, his core
                mission is to eradicate unemployment in Bangladesh by creating
                ample opportunities for skill development and employment.
              </p>

              <h1 className="mt-3 text-lg font-semibold text-primary">
                Message to Students:
              </h1>

              {/* to point at faq section properly  */}
              <div id="faq"></div>

              <p className="mt-2 text-gray-600 leading-relaxed max-w-xl">
                “Support your family while learning valuable skills from any
                reputable IT institute. Together, we can build a stronger future
                for you and the nation.”
              </p>

              {/* Social Icons */}
              <div className="mt-8 flex flex-wrap items-center gap-4 justify-start">
                <a href="http://wa.me/8801867101740" target="_blank">
                  <SocialIcon icon={<FaWhatsapp />} color="#25D366" />
                </a>
                <a
                  href="https://www.facebook.com/lifeline.itti"
                  target="_blank"
                >
                  {" "}
                  <SocialIcon icon={<FaFacebookF />} color="#3b5998" />
                </a>
                <a
                  href="https://youtube.com/@lifelineitinstitute?si=O1ajnzSt_KyZ-WII"
                  target="_blank"
                >
                  <SocialIcon icon={<FaYoutube />} color="#FF0000" />
                </a>
                <a
                  href="https://www.instagram.com/lifelineitt.institute?igsh=MjE1NGRwc25vMXcx&utm_source=qr"
                  target="_blank"
                >
                  <SocialIcon icon={<FaInstagram />} color="#C13584" />
                </a>
                {/* <SocialIcon icon={<FaTiktok />} color="#000000" /> */}
                <a href="https://t.me/lifelineitsupport" target="_blank">
                  <SocialIcon icon={<FaTelegramPlane />} color="#0088cc" />
                </a>
                <a
                  href="https://www.linkedin.com/in/lifeline-it-training-institute-1896aa377?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                >
                  <SocialIcon icon={<FaLinkedinIn />} color="#0077b5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </LazyLoadWrapper>

      {/* FAQ  */}

      <LazyLoadWrapper>
        <h1 className="mt-14  text-xl md:text-4xl lg:text-5xl text-accent scroll-smooth font-bold">
          Frequently Asked Question
        </h1>

        <Accordion
          type="single"
          collapsible
          className="lg:w-9/12 w-10/12 mx-auto text-secondary rounded-sm text-left bg-blue-950/20 lg:p-8 p-5 mt-10 font-anek hover:no-underline relative"
          // defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="lg:text-2xl text-xl xxl:text-3xl font-bold text-accent bg-clip-text   transition-all duration-500 hover:bg-[position:right_center] hover:text-[#EDDE5D] hover:no-underline">
              সঠিক কম্পিউটার কোর্সটি কিভাবে নির্বাচন করব?
            </AccordionTrigger>
            <AccordionContent className="flex lg:text-lg text-base flex-col gap-4 text-balance ">
              <p>
                → সঠিক কম্পিউটার কোর্স নির্বাচন করার জন্য আগে ভাবতে হবে আপনার
                আগ্রহ এবং লক্ষ্য কী। যেমন — • আপনি চাকরির জন্য শিখতে চান, না
                ফ্রিল্যান্সিং বা ব্যবসা করার জন্য? • আপনার আগ্রহ কিসে — ডিজাইন,
                ভিডিও এডিটিং, ডিজিটাল মার্কেটিং, AI (Artificial Intelligence),
                ওয়েব ডেভেলপমেন্ট, নাকি অফিস ম্যানেজমেন্ট? যদি আগ্রহ আর চাহিদা
                মিলে যায়, তাহলে কোর্সটি করা সহজ আর লাভজনক হয়। যেমন: • শূন্য
                থেকে শুরু করলে: কম্পিউটার বেসিক, অফিস ম্যানেজমেন্ট, MS Office, •
                ডিজাইন ভালো লাগলে: গ্রাফিক্স ডিজাইন, UX/UI • ভিডিও এডিটিং ভালো
                লাগলে: ভিডিও এডিটিং, মোশন গ্রাফিক্স, VFX • কোডিং আগ্রহ থাকলে:
                ওয়েব ডেভেলপমেন্ট, অ্যাপ ডেভেলপমেন্ট • চাহিদা আর আয় খুঁজতে
                চাইলে: AI Content Creation, Digital Marketing, Graphic Design
                সর্বদা এমন কোর্স বেছে নেওয়া ভালো যা আগামী ৫–১০ বছরে চাহিদা থাকবে
                এবং আপনার আগ্রহের সাথেও মেলে যায়। এভাবে কোর্সটি করলে কাজ খুঁজতে
                আর ভালোভাবে শিখতে পারবেন!
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="lg:text-2xl text-xl xxl:text-3xl font-bold text-accent bg-clip-text   transition-all duration-500 hover:bg-[position:right_center] hover:text-[#EDDE5D] hover:no-underline">
              কোর্সে কিভাবে ভর্তি হব?
            </AccordionTrigger>
            <AccordionContent className="flex lg:text-lg text-base flex-col gap-4 text-balance">
              <p>
                → খুব সহজ! ওয়েবসাইটে Sign Up করে, কোর্স সিলেক্ট করুন এবং
                “Enroll” বাটনে ক্লিক করুন। পেমেন্ট সম্পূর্ণ করার পরই কোর্সে
                অ্যাক্সেস পাবেন। ভিডিও গাইডলাইন পেতে লিংকে ক্লিক করুন-
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="lg:text-2xl text-xl xxl:text-3xl font-bold text-accent bg-clip-text   transition-all duration-500 hover:bg-[position:right_center] hover:text-[#EDDE5D] hover:no-underline">
              কিসের মাধ্যমে পেমেন্ট করা যায়?
            </AccordionTrigger>
            <AccordionContent className="flex lg:text-lg text-base flex-col gap-4 text-balance">
              <p>
                → আমরা বিকাশ, ব্যাংক এবং কার্ডের মাধ্যমে সুরক্ষিতভাবে পেমেন্ট
                গ্রহণ করি।
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="lg:text-2xl text-xl xxl:text-3xl font-bold text-accent bg-clip-text   transition-all duration-500 hover:bg-[position:right_center] hover:text-[#EDDE5D] hover:no-underline">
              কোর্স শেষ করার পর সার্টিফিকেট দেওয়া হয় কি?
            </AccordionTrigger>
            <AccordionContent className="flex lg:text-lg text-base flex-col gap-4 text-balance">
              <p>
                → হ্যাঁ! প্রতিটি কোর্স শেষ করার পর আপনাকে ডাউনলোড করার মতো
                অনলাইন সার্টিফিকেট দেওয়া হয়।
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="lg:text-2xl text-xl xxl:text-3xl font-bold text-accent bg-clip-text   transition-all duration-500 hover:bg-[position:right_center] hover:text-[#EDDE5D] hover:no-underline">
              কোর্স কন্টেন্ট কিভাবে পাব?
            </AccordionTrigger>
            <AccordionContent className="flex lg:text-lg text-base flex-col gap-4 text-balance">
              <p>
                → কোর্সে ভর্তি হওয়ার পর লগিন করে ড্যাশবোর্ডে কোর্স কন্টেন্ট
                দেখতে পাবেন এবং নির্দিষ্ট মডিউল অনুসারে শিখতে পারবেন।
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="lg:text-2xl text-xl xxl:text-3xl font-bold text-accent bg-clip-text   transition-all duration-500 hover:bg-[position:right_center] hover:text-[#EDDE5D] hover:no-underline">
              কোর্সের মেয়াদ কতোদিন?
            </AccordionTrigger>
            <AccordionContent className="flex lg:text-lg text-base flex-col gap-4 text-balance">
              <p>
                → প্রতিটি কোর্সের মেয়াদ কোর্স ডিটেইলস সেকশনে দেওয়া আছে। সাধারণত
                এটি কোর্সের ধরণ অনুযায়ী ১ থেকে ৬ মাস পর্যন্ত হতে পারে।
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="lg:text-2xl text-xl xxl:text-3xl font-bold text-accent bg-clip-text   transition-all duration-500 hover:bg-[position:right_center] hover:text-[#EDDE5D] hover:no-underline">
              কোর্স করার জন্য আগের কোনও অভিজ্ঞতার দরকার আছে কি?
            </AccordionTrigger>
            <AccordionContent className="flex lg:text-lg text-base flex-col gap-4 text-balance">
              <p>
                → না, আমরা বেসিক থেকে অ্যাডভান্স কোর্স অফার করি, তাই আগের কোনও
                অভিজ্ঞতার দরকার নেই।
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger className="lg:text-2xl text-xl xxl:text-3xl font-bold text-accent bg-clip-text   transition-all duration-500 hover:bg-[position:right_center] hover:text-[#EDDE5D] hover:no-underline">
              কোর্স করার সময় কোনও সাপোর্ট পাব কি?
            </AccordionTrigger>
            <AccordionContent className="flex lg:text-lg text-base flex-col gap-4 text-balance">
              <p>
                → হ্যাঁ! কোর্স করার সময় ইনস্ট্রাক্টর এবং সাপোর্ট টিমের Live
                Support সহ সহায়তা পাবেন।
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger className="lg:text-2xl text-xl xxl:text-3xl font-bold text-accent bg-clip-text   transition-all duration-500 hover:bg-[position:right_center] hover:text-[#EDDE5D] hover:no-underline">
              কোর্স সম্পূর্ণ করার পর চাকরি খুঁজতে সাহায্য করবেন কি?
            </AccordionTrigger>
            <AccordionContent className="flex lg:text-lg text-base flex-col gap-4 text-balance">
              <p>
                → আমরা কোর্স সম্পূর্ণ করার পর কিভাবে চাকরির জন্য প্রস্তুতি নেওয়া
                যায় তা গাইড করে থাকি এবং নিয়মিত চাকরির খোঁজ সম্পর্কিত কন্টেন্ট
                শেয়ার করি।
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger className="lg:text-2xl text-xl xxl:text-3xl font-bold text-accent bg-clip-text   transition-all duration-500 hover:bg-[position:right_center] hover:text-[#EDDE5D] hover:no-underline">
              কিভাবে যোগাযোগ করবো?
            </AccordionTrigger>
            <AccordionContent className="flex lg:text-lg text-base flex-col gap-4 text-balance">
              <p>
                → ওয়েবসাইটে দেওয়া Contact Number, Whatsapp, Messenger, Email বা
                লাইভ চ্যাটের মাধ্যমে যে কোনও সময় যোগাযোগ করতে পারবেন।
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </LazyLoadWrapper>

      <LazyLoadWrapper>
        <div className="mt-10 w-9/12 mx-auto text-white flex items-center justify-between">
          <div className="flex gap-4 text-2xl">
            <h1 className="font-bold">Trade License No: </h1>
            <p>TRAD/CHTG/000307/2025</p>
          </div>
          <div className="flex gap-4 text-2xl">
            <h1 className="font-bold">TIN No: </h1>
            <p>416683735934</p>
          </div>
        </div>
      </LazyLoadWrapper>
    </div>
  );
};

const SocialIcon = ({ icon, color, link }) => {
  return (
    <div
     
      className="w-9 h-9 flex items-center justify-center rounded-full shadow-md transition-all duration-300 hover:scale-110 cursor-pointer"
      style={{
        backgroundColor: color,
        boxShadow: `0 4px 8px ${color}80, inset 0 1px 1px #fff3`,
      }}
    >
      <div className="text-white text-lg">{icon}</div>
    </div>
  );
};

export default AboutPage;
