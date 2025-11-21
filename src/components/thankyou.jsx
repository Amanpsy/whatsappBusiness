import React from "react";
import { CheckCircle } from "lucide-react";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-6">
      <CheckCircle className="text-green-400 w-24 h-24 mb-6 animate-pulse" />

      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        Thank You! 🎉
      </h1>

      <p className="text-gray-300 text-lg max-w-xl text-center leading-relaxed mb-8">
        Your request has been received. Our AI team will reach out shortly to help you set up your personalized WhatsApp assistant.
      </p>

      <a
        href="/"
        className="px-10 py-3 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-full text-lg transition-all hover:scale-110 shadow-[0_0_20px_rgba(34,197,94,0.4)]"
      >
        Go Back Home
      </a>

      <p className="text-gray-600 mt-10 text-sm">
        © {new Date().getFullYear()} AI WhatsApp Assistant
      </p>
    </div>
  );
}
