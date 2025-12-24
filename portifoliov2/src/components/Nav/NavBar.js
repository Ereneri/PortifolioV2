import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars4Icon, CommandLineIcon, HomeIcon, UserIcon } from "@heroicons/react/16/solid";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "/", Icon : HomeIcon},
    { name: "Projects", href: "/projects", Icon: CommandLineIcon },
    { name: "About", href: "/about", Icon : UserIcon  },
  ];

  const ulClass = open
    ? "flex flex-col absolute top-16 bg-zinc-900 p-2 rounded-md shadow-[0_6px_20px_rgba(0,0,0,0.08)] gap-4 md:flex md:flex-row md:static md:bg-transparent md:shadow-none md:p-0"
    : "hidden md:flex md:flex-row list-none gap-4 m-0 p-0";

  return (
    <header className="w-full sticky top-0 z-50 code-font bg-secondary">
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
          <Bars4Icon className="w-6 h-6 text-white" />
        </button>

        <ul className={ulClass}>
          {navLinks.map(({ name, href, Icon }) => (
            <li key={name}>
              <Link
                to={href}
                onClick={() => setOpen(false)}
                className="no-underline text-white px-2 py-1 rounded-md transition-colors duration-150 text-lg hover:bg-white/10"
            >
              <Icon className="w-5 h-5 inline-block mr-1 mb-1 text-white stroke-2" />
              {name}
            </Link>
          </li>
        ))}
        </ul>
      </nav>
    </header>
  );
}
