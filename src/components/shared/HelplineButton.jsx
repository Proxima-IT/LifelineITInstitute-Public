import { useState } from "react";
import { Phone, Mail, MessageCircle, HelpCircle } from "lucide-react";

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
        <a href="tel:+1234567890" className="bg-green-500 text-white p-3 rounded-full shadow hover:scale-105 transition">
          <Phone className="w-5 h-5" />
        </a>
        <a href="mailto:support@example.com" className="bg-blue-500 text-white p-3 rounded-full shadow hover:scale-105 transition">
          <Mail className="w-5 h-5" />
        </a>
        <a href="https://m.me/yourpage" target="_blank" className="bg-indigo-500 text-white p-3 rounded-full shadow hover:scale-105 transition">
          <MessageCircle className="w-5 h-5" />
        </a>
      </div>

      {/* Main Help Button */}
      <button
        onMouseEnter={() => setOpen(true)}
        className="bg-purple-500 text-white p-4 rounded-full shadow-lg hover:bg-purple-600 transition-all"
      >
        <HelpCircle className="w-6 h-6" />
      </button>
    </div>
  );
}
