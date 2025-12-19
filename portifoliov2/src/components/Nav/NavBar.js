import React, { useState } from "react";
import { Bars4Icon } from "@heroicons/react/24/solid";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
  ];

  const ulClass = open
    ? "flex flex-col absolute top-16 bg-zinc-900 p-2 rounded-md shadow-[0_6px_20px_rgba(0,0,0,0.08)] gap-4 md:flex md:flex-row md:static md:bg-transparent md:shadow-none md:p-0"
    : "hidden md:flex md:flex-row list-none gap-4 m-0 p-0";

  return (
    <header className="w-full bg-zinc-900 sticky top-0 z-50">
      <nav
        className="max-w-[1100px] mx-auto flex items-center justify-center p-4 gap-2"
        role="navigation"
        aria-label="Main navigation"
      >
        <button
          className="md:hidden bg-transparent border-none text-[1.3rem] cursor-pointer"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((s) => !s)}
        >
          <Bars4Icon className="w-6 h-6 text-[#111]" />
        </button>

        <ul className={ulClass}>
          {navLinks.map(({ name, href }) => (
            <li key={name}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="no-underline text-[#111] px-2 py-1 rounded-sm transition-colors duration-150 hover:bg-black/5 stroke-white text-lg"
            >
              {name}
            </a>
          </li>
        ))}
        </ul>
      </nav>
    </header>
  );
}
