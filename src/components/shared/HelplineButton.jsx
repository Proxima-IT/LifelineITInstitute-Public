import { useState } from "react";
import { Phone, Mail, MessageCircle, HelpCircle } from "lucide-react";
import chat from "../../assets/CHAT-2.png"
import { FaWhatsapp } from "react-icons/fa";
export default function HelplineButton() {
  const [open, setOpen] = useState(false);

  return (
    <div

      onMouseLeave={() => setOpen(false)}
      className="fixed bottom-6 right-4 z-50 flex flex-col items-center space-y-2">
      {/* Contact Buttons (expandable) */}
      <div
        className={`flex flex-col items-center justify-center space-y-2 transition-all duration-200 ${open ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none -translate-y-2"
          }`}
      >
        <a href="tel:+8801867101740" className="bg-pink-500 text-white p-3 rounded-full shadow hover:scale-105 transition">
          <Phone className="w-5 h-5" />
        </a>
        <a href="http://wa.me/8801887893100" className="bg-green-500 text-white p-3 rounded-full shadow hover:scale-105 transition">
          <FaWhatsapp className="w-5 h-5" />
        </a>
        <a href="mailto:lifelineitt.institute@gmail.com" className="bg-blue-500 text-white p-3 rounded-full shadow hover:scale-105 transition">
          <Mail className="w-5 h-5" />
        </a>
        <a href="https://m.me/lifeline.itti?hash=(null)&source_id=8585216" target="_blank" className="bg-purple-700 text-white p-3 rounded-full shadow hover:scale-105 transition">
          <MessageCircle className="w-5 h-5" />
        </a>
      </div>

      {/* Main Help Button */}
      <button
        onMouseEnter={() => setOpen(true)}
        className="shadow-lg transition-all w-12 lg:w-16 rounded-full"
      >
        {/* <HelpCircle className="w-6 h-6" /> */}
        <img src={chat} alt=""  />
      </button>
    </div>
  );
}
