import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HomeIcon, CommandLineIcon, UserIcon, PaperAirplaneIcon } from "@heroicons/react/16/solid";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const quickLinks = [
    { name: "Home", href: "/", Icon: HomeIcon },
    { name: "Projects", href: "/projects", Icon: CommandLineIcon },
    { name: "About", href: "/about", Icon: UserIcon },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add email service integration here (e.g., EmailJS, FormSpree, etc.)
    alert("Message sent! (This is a demo - integrate with your preferred email service)");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <footer className="w-full bg-secondary mt-16">
      <div className="max-w-[1100px] mx-auto p-8">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> */}
          {/* Left Section - Contact Form */}
          {/* <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-light">
              Send me a message
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-white text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="px-4 py-2 rounded-md bg-white/90 text-black border-2 border-transparent focus:border-white focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-white text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-4 py-2 rounded-md bg-white/90 text-black border-2 border-transparent focus:border-white focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-white text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="px-4 py-2 rounded-md bg-white/90 text-black border-2 border-transparent focus:border-white focus:outline-none transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-md font-bold text-lg transition-all hover:bg-white/90 hover:scale-105"
              >
                <PaperAirplaneIcon className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div> */}

          {/* Right Section - Quick Links */}
          <div className="flex flex-col gap-4 code-font">
            <h3 className="text-2xl font-bold text-light">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-3 list-none m-0 p-0">
                {quickLinks.map(({ name, href, Icon }) => (
                  <li key={name}>
                    <Link
                      to={href}
                      onClick={() => window.scrollTo(0, 0)}
                      className="flex items-center gap-2 no-underline text-light px-4 py-2 rounded-md transition-colors duration-150 hover:bg-white/10 text-lg"
                    >
                      <Icon className="w-5 h-5" />
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Copyright Section */}
            <div className="mt-8 pt-4 border-t border-white/20">
              <p className="text-light/60 text-sm">
                © {new Date().getFullYear()} Eren Erisgen. All rights reserved.
              </p>
            </div>
          </div>
        {/* </div> */}
      </div>
    </footer>
  );
}
