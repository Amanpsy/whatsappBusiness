import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* HERO SECTION */}
      <section className="w-full px-6 lg:px-20 py-28 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
          Supercharge Your Business with
          <span className="bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent">
            {" "}
            AI WhatsApp Automation
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mb-10">
          Automate replies, close leads, book appointments, and grow your business —
          all through WhatsApp. Your AI assistant works <span className="text-green-400">24/7.</span>
        </p>

        <button className="px-12 py-4 bg-green-500 hover:bg-green-400 text-black font-bold rounded-full text-xl transition-all shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:scale-110">
          Get Free Demo
        </button>

        <div className="flex gap-6 mt-10 opacity-70">
          <p>⚡ No setup needed</p>
          <p>✔ 24/7 Support</p>
          <p>💬 Works for any business</p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 lg:px-20 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "1. Customer Messages You",
              desc: "A new WhatsApp message arrives from a customer.",
            },
            {
              title: "2. AI Understands & Replies",
              desc: "Your AI reads the message and sends the perfect reply instantly.",
            },
            {
              title: "3. You Get More Sales",
              desc: "Faster replies = happier customers = more business.",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-[#111] p-8 rounded-2xl border border-gray-800 hover:border-green-400 transition-all hover:scale-105"
            >
              <h3 className="text-2xl font-semibold mb-3 text-green-400">
                {s.title}
              </h3>
              <p className="text-gray-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 lg:px-20 py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          {
            title: "Instant Auto Replies",
            desc: "AI responds instantly to every inquiry so you never lose a customer.",
          },
          {
            title: "24/7 Smart Assistant",
            desc: "Handles chats, FAQs, bookings & product queries even while you sleep.",
          },
          {
            title: "Lead Capture & CRM",
            desc: "Automatically saves name, number & interest into your dashboard.",
          },
          {
            title: "Boost Sales",
            desc: "Convert more leads with personalised, AI-generated responses.",
          },
          {
            title: "Zero Learning Curve",
            desc: "Just connect once — your AI handles everything from day one.",
          },
          {
            title: "Works for Any Business",
            desc: "Salon, gym, café, real estate, boutique… AI adapts to all.",
          },
        ].map((f, i) => (
          <div
            key={i}
            className="bg-[#111] p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-green-400 transition-all hover:scale-105"
          >
            <h3 className="text-2xl font-semibold mb-4 text-green-400">
              {f.title}
            </h3>
            <p className="text-gray-300">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 lg:px-20 py-20 bg-[#0d0d0d]">
        <h2 className="text-4xl font-bold text-center mb-14">Loved by Businesses</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              name: "Rohit • Gym Owner",
              quote:
                "Earlier I used to miss 40% leads. After AI bot, my conversions increased instantly!",
            },
            {
              name: "Neha • Salon",
              quote:
                "Customers get instant replies & booking confirmations. Amazing quality!",
            },
            {
              name: "Arjun • Real Estate",
              quote:
                "This AI assistant handles all common queries. It saves me 3 hours daily.",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="bg-black border border-gray-800 p-8 rounded-2xl hover:border-green-400 transition-all"
            >
              <p className="text-gray-300 italic mb-4">"{t.quote}"</p>
              <p className="text-green-400 font-semibold">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="px-6 lg:px-20 py-28 text-center">
        <h2 className="text-4xl font-bold mb-6">Simple Pricing</h2>
        <p className="text-gray-400 mb-12 text-lg">Start free. Cancel anytime.</p>

        <div className="max-w-lg mx-auto bg-black p-12 rounded-3xl border border-gray-800 shadow-xl hover:border-green-400 transition-all hover:scale-105">
          <h3 className="text-5xl font-bold text-green-400 mb-4">Growth Plan ₹499/month</h3>
          <p className="text-gray-300 mb-8 text-lg">
            Unlimited messages • AI Replies • Lead Capture • Dashboard
          </p>
          
        </div>
      </section>

      {/* LEAD FORM */}
      <section className="px-6 lg:px-20 py-28 flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold mb-6">Get Your Free Demo</h2>
        <p className="text-gray-400 mb-10 max-w-2xl">
          Fill your details and our AI will set up a personalized WhatsApp
          assistant for your business.
        </p>

        <form
          action="https://formsubmit.co/amankr97111@gmail.com"
          method="POST"
          className="grid gap-6 w-full max-w-xl"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New AI WhatsApp Lead!" />
<input type="hidden" name="_next" value="https://salesrush.netlify.app/thank-you" />

          <input
            name="businessName"
            type="text"
            placeholder="Business Name"
            className="p-4 rounded-xl bg-[#111] border border-gray-700 focus:border-green-400 outline-none"
            required
          />

          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-xl bg-[#111] border border-gray-700 focus:border-green-400 outline-none"
            required
          />

          <input
            name="whatsapp"
            type="text"
            placeholder="WhatsApp Number"
            className="p-4 rounded-xl bg-[#111] border border-gray-700 focus:border-green-400 outline-none"
            required
          />

          <select
            name="businessType"
            className="p-4 rounded-xl bg-[#111] border border-gray-700 focus:border-green-400 outline-none"
            required
          >
            <option value="">Select Business Type</option>
            <option value="restaurant">Restaurant</option>
            <option value="clinic">Clinic</option>
            <option value="gym">Gym</option>
            <option value="salon">Salon</option>
            <option value="other">Other</option>
          </select>

          <button
            type="submit"
            className="p-4 bg-green-500 rounded-xl font-semibold hover:bg-green-600 transition-all hover:scale-105"
          >
            Submit
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} AI WhatsApp Assistant — All Rights Reserved
      </footer>
    </div>
  );
}
