"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);

  function toggleButton() {
    setModal((prevState) => !prevState);
    console.log("toggle button used", modal);
  }

  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        {/* Logo */}
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <Link
            href="/"
            className="flex justify-center text-black items-center gap-3 logo-container"
          >
            <img
              className="logo -mt-2 tracking-wider"
              src="/images/techfinna-logo.png"
              alt="Techfinna logo"
              width="50px"
            />
            <h2>TECHFINNA</h2>
          </Link>

          {/* Mobile Menu Toggle */}
          <div
            className="text-3xl md:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? "✖" : "☰"}
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="md:flex hidden text-black items-center gap-8 font-[Poppins]">
          <NavLinks />
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              About
            </Link>
          </li>
        </ul>

        {/* Search Button */}
        <div className="md:block hidden">
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevents the document click from firing when clicking on the button
              toggleButton();
            }}
            className="flex hidden sm:flex ml-4 relative justify-start items-center text-sm text-muted-foreground dark:border-white/[0.2] py-2 w-fit border border-transparent shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-4 rounded-xl bg-white dark:bg-brand"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-neutral-500"
            >
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
              <path d="M21 21l-6 -6"></path>
            </svg>
            <span className="transition-colors hover:text-foreground/80 text-foreground/60 text-xs sm:text-sm font-medium pl-2 pr-4">
              Search Odoo...
            </span>
            <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
              ↵
              <span className="text-xs">Enter</span>
            </kbd>
          </button>
        </div>

        {/* Mobile Navigation */}
        <ul
          className={`md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4 duration-500 ${
            open ? "left-0" : "left-[-100%]"
          }`}
        >
          <li>
            <Link href="/" className="py-7 px-3 inline-block" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
            {/* Additional Buttons if Needed */}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
