import React, { useEffect } from "react";
import { FaFacebookF, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import hotline from "../../assets/Hotline.png";
import LazyLoadWrapper from "@/components/shared/LazyLoadWrapper";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <section className="w-11/12 mx-auto py-8 text-center">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-full shadow-md mb-6">
          Contact us
        </button>
        <h2 className="text-xl md:text-2xl text-navmenu font-medium mb-10">
          Have a Question? We're here to help. Feel free to contact us!
        </h2>

        {/* Grid Section */}
        <LazyLoadWrapper>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-black">
            {/* Phone Section */}
            <div className="bg-white/95 shadow-md rounded border p-6">
              <div className="flex justify-center mb-3">
                <img src={hotline} alt="Hotline" className="w-16 h-16" />
              </div>
              <h3 className="text-lg font-semibold">
                Call or <span className="text-green-600">Whatsapp</span>
              </h3>
              <p className="mt-2">
                <strong>01887 893100</strong> (6 AM to 12 PM)
                <br />
                <strong>01625 960594</strong> (9 AM to 11 PM)
                <br />
                <strong>01867 101740</strong> (9 AM to 11 PM)
              </p>
            </div>

            {/* Messenger Section */}
            <div className="bg-white/95 rounded shadow-md border p-6">
              <div className="flex justify-center mb-3">
                <FaFacebookF className="text-blue-600 text-5xl" />
              </div>
              <h3 className="text-lg font-semibold pb-6">Page & Messenger</h3>
              <p className="mt-2">
                Inbox us:{" "}
                <a
                  href="https://m.me/lifelineit"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-700 font-medium"
                >
                  Lifeline IT Messenger
                </a>
                <br />
                Browse us:{" "}
                <a
                  href="https://www.facebook.com/lifelineit.institute"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-700 font-medium"
                >
                  Lifeline IT Training Insitute
                </a>
              </p>
            </div>

            {/* Email Section */}
            <div className="bg-white/95 rounded shadow-md border p-6">
              <div className="flex justify-center mb-3">
                <MdEmail className="text-blue-600 text-5xl" />
              </div>
              <h3 className="text-lg font-semibold">Official Email</h3>
              <p className="mt-2">
                support@lifelineit.com
                <br />
                admin@lifelineit.com
                <br />
                lifelineitt.institute@gmail.com
              </p>
            </div>
          </div>
        </LazyLoadWrapper>

        {/* Location Section */}
        <div id="location" className="mt-4"></div>
        <LazyLoadWrapper>
          <div className="bg-white shadow-md border rounded-sm p-6 mt-6">
            <div className="flex justify-center mb-2">
              <FaMapMarkerAlt className="text-blue-600 text-4xl" />
            </div>
            <h3 className="text-lg font-semibold">Our Location</h3>
            <p className="mt-2">
              Khan Building (3rd Floor), 601 Sk. Mujib Road, Chowmuhuni,
              Agrabad, Chattogram.
            </p>
          </div>
        </LazyLoadWrapper>
      </section>

      <LazyLoadWrapper className="w-11/12 h-[400px] rounded-xl overflow-hidden shadow-lg border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.532293918768!2d91.8127519!3d22.3335215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd975e74cda55%3A0x94027122a25df466!2sLifeline%20IT%20Training%20Institute!5e0!3m2!1sen!2sbd!4v1750874391220!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Our Location"
        ></iframe>
      </LazyLoadWrapper>
    </div>
  );
};

export default ContactPage;
