import React, { useState } from "react";
import { FiMenu, FiArrowRight, FiX } from "react-icons/fi";
import {
  useMotionValueEvent,
  AnimatePresence,
  useScroll,
  motion,
} from "framer-motion";
import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();

  
export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();
  
    useMotionValueEvent(scrollY, "change", (latest) => {
      setScrolled(latest > 100 ? true : false);
    });
  
    return (
      <nav
        className={`fixed top-0 z-50 w-full px-6 text-white 
        transition-all duration-300 ease-out lg:px-12
        ${
          scrolled
            ? "bg-neutral-950 py-3 shadow-xl"
            : "bg-neutral-950/0 py-6 shadow-none"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Logo />
          <div className="hidden gap-6 lg:flex">
            <Links />
          </div>
          <MobileMenu />
        </div>
      </nav>
    );
  };
  
  const Logo = ({ color = "white" }) => {
    // Temp logo from https://logoipsum.com/
    return (
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold" style={{ color }}>
          BDS Fasteners
        </span>
        <svg
          width="50"
          height="39"
          viewBox="0 0 50 39"
          fill={color}
          xmlns="http://www.w3.org/2000/svg"
          className="w-10"
        >
          <path
            d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
            stopColor={color}
          ></path>
          <path
            d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
            stopColor={color}
          ></path>
        </svg>
      </div>
    );
  };
  
  const Links = () => {
    return (
      <div className="flex items-center gap-6">
        {LINKS.map((l) => (
          <NavLink key={l.text} href={l.href}>
            {l.text}
          </NavLink>
        ))}
      </div>
    );
  };
  
  const NavLink = ({ children, href }) => {
  
    return (
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="relative h-fit w-fit"
      >
        <Link to={href} className="relative group">
          {children}
          <span className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out group-hover:scale-x-100"/>
        </Link>
      </div>
    );
  };
  
  const MobileMenuLink = ({ children, href, setMenuOpen }) => {
  
    return (
      <div className="text-neutral-950">
        <Link
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen(false);
            }}
            to={href}
            className="flex w-full cursor-pointer items-center justify-between border-b border-neutral-300 py-6 text-start text-2xl font-semibold"
          >
            <span>{children}</span>
            <FiArrowRight />
          </Link>
      </div>
    );
  };
  
  const MobileMenu = () => {
    const [open, setOpen] = useState(false);
    return (
      <div className="block lg:hidden">
        <button onClick={() => setOpen(true)} className="block text-3xl">
          <FiMenu />
        </button>
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ x: "100vw" }}
              animate={{ x: 0 }}
              exit={{ x: "100vw" }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="fixed left-0 top-0 flex h-screen w-full flex-col bg-white"
            >
              <div className="flex items-center justify-between p-6">
                <Logo color="black" />
                <button onClick={() => setOpen(false)}>
                  <FiX className="text-3xl text-neutral-950" />
                </button>
              </div>
              <div className="h-screen overflow-y-scroll bg-neutral-100 p-6">
                {LINKS.map((l) => (
                  <MobileMenuLink
                    key={l.text}
                    href={l.href}
                    setMenuOpen={setOpen}
                  >
                    {l.text}
                  </MobileMenuLink>
                ))}
              </div>
              <div className="flex justify-center items-center bg-neutral-950 p-6">
                <p className='text-center text-gray-500 text-sm'>&copy; {currentYear} BDS Fasteners. All Rights Reserved.</p>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    );
  };
  
  const LINKS = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "About Us",
      href: "/about-us",
    },
    {
      text: "Why Choose Us",
      href: "/why-choose-us",
    },
    {
      text: "Products",
      href: "/products",
    },
    {
      text: "Contact Us",
      href: "/contact-us",
    },
  ];
