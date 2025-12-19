import React, { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const ulClass = open
    ? "flex flex-col absolute top-14 right-4 bg-white p-2 rounded-md shadow-[0_6px_20px_rgba(0,0,0,0.08)] gap-4 md:flex md:flex-row md:static md:bg-transparent md:shadow-none md:p-0"
    : "hidden md:flex md:flex-row list-none gap-4 m-0 p-0";

  return (
    <header className="w-full bg-white sticky top-0 z-50">
      <nav
        className="max-w-[1100px] mx-auto flex items-center justify-between p-4 gap-2"
        role="navigation"
        aria-label="Main navigation"
      >
        <button
          className="md:hidden bg-transparent border-none text-[1.3rem] cursor-pointer"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((s) => !s)}
        >
          ☰
        </button>

        <ul className={ulClass}>
          <li>
            <a
              href="#home"
              onClick={() => setOpen(false)}
              className="no-underline text-[#111] px-2 py-1 rounded-sm transition-colors duration-150 hover:bg-black/5"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="no-underline text-[#111] px-2 py-1 rounded-sm transition-colors duration-150 hover:bg-black/5"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={() => setOpen(false)}
              className="no-underline text-[#111] px-2 py-1 rounded-sm transition-colors duration-150 hover:bg-black/5"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="no-underline text-[#111] px-2 py-1 rounded-sm transition-colors duration-150 hover:bg-black/5"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}