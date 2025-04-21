import React, { useState } from "react";
import { FiMenu, FiArrowRight, FiX } from "react-icons/fi";
import {
  useMotionValueEvent,
  AnimatePresence,
  useScroll,
  motion,
} from "framer-motion";
import { Link } from "react-router-dom";

  
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
          <MobileMenu scrolled={scrolled}/>
        </div>
      </nav>
    );
  };
  
  const Logo = ({ color = "white" }) => {
    // Temp logo from https://logoipsum.com/
    return (
      <div className="flex items-center gap-2">
        <img className="md:w-full h-16" src="./Logo.png" alt="" />
        {/* <span className="text-2xl font-bold" style={{ color }}>
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
        </svg> */}
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
          <span className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-red-600 transition-transform duration-300 ease-out group-hover:scale-x-100"/>
        </Link>
      </div>
    );
  };
  
  const MobileMenuLink = ({ children, href, setMenuOpen }) => {
  
    return (
      <div className="text-white">
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
  
  const MobileMenu = ({scrolled}) => {
    const [open, setOpen] = useState(false);
    return (
      <div className="block lg:hidden">
        {!open ? (
          <button onClick={() => setOpen(true)} className="block text-3xl">
            <FiMenu />
          </button>
        ) : (
          <button onClick={() => setOpen(false)}>
            <FiX className="text-3xl" />
          </button>
        )}
        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`absolute left-0 ${scrolled ? "top-16" : "top-20"} flex h-min w-full flex-col bg-white`}
            >
              <div className="h-min overflow-y-scroll bg-black px-6">
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
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    );
  };
  
  const LINKS = [
    {
      text: "HOME",
      href: "/",
    },
    {
      text: "ABOUT US",
      href: "/about-us",
    },
    {
      text: "WHY CHOOSE US",
      href: "/why-choose-us",
    },
    {
      text: "PRODUCTS",
      href: "/products",
    },
    {
      text: "CONTACT US",
      href: "/contact-us",
    },
  ];
