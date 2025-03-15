import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { links } from '../../public/data'

const currentYear = new Date().getFullYear();
 
export default function Footer() {
  return (
    <footer className="relative w-full bg-neutral-950">
      <div className="mx-auto w-full max-w-7xl px-8 2xl:px-0">
        <div className="grid py-8 justify-between">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-between gap-2">
            <ul>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">
                  BDS Fasteners
                </span>
                <svg
                  width="50"
                  height="39"
                  viewBox="0 0 50 39"
                  fill='white'
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10"
                >
                  <path
                    d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
                    stopColor='white'
                  ></path>
                  <path
                    d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
                    stopColor='white'
                  ></path>
                </svg>
              </div>
              <li>
                  <Typography as="p" color="white" className="py-1.5 font-normal">BDS Fasteners, renowned for its high-quality industrial fasteners, caters to a diverse range of applications across industries including Automotive, Electrical, Agriculture, Scaffolding & Formwork, Wind Energy, Power Transmission, Railway-Bridges, Hydro Projects, and more. Our commitment to excellence and innovation positions us as leaders in the fastener market.</Typography>
                </li>
            </ul>
            {links.map(({title, items}) => (
              <ul key={title}>
                <Typography variant="h6" color="white" className="mb-3 font-semibold opacity-60 underline underline-offset-2">{title}</Typography>
                <div className="uppercase">
                  {items.map(({link, path, index}) => (
                  <li key={index}>
                    <Link to={path}>
                        <Typography color="white" className="py-1.5 font-normal transition-colors hover:text-stone-400">{link}</Typography>
                    </Link>
                  </li>
                  ))}
                </div>
              </ul>
            ))}
            <ul>
              <Typography variant="h6" color="white" className="mb-3 font-semibold opacity-60 underline underline-offset-2">Connect With Us</Typography>
              <div className="">
                <li>
                  <Typography as="p" color="white" className="py-1.5 font-normal transition-colors hover:text-stone-400">Chamba - Mussoorie Rd, Bhataghat, Mussoorie, Matholi, Uttarakhand 248122</Typography>
                </li>
                <li>
                  <Typography as="a" href="mailto:bdsfasteners@gmail.com" color="white" className="py-1.5 font-normal transition-colors hover:text-stone-400">bdsfasteners@gmail.com</Typography>
                </li>
                <li>
                  <Typography as="a" href="tel:+919874598745" color="white" className="py-1.5 font-normal transition-colors hover:text-stone-400">+91 9876598765</Typography>
                </li>
              </div>
            </ul>
            <ul>
              <div>
                <iframe title="Property location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24899.561039827993!2d78.09429288320315!3d30.454131389201283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908dbb008c00ee5%3A0xee991ea46d01ea33!2sDEVDAR%20ESTATE!5e1!3m2!1sen!2sin!4v1728565542081!5m2!1sen!2sin" width="300" height="200" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </ul>
          </div>
        </div>
        <div className="mt-6 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-white md:mb-0"
          >
            &copy; {currentYear} BDS Fasteners. All Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <Typography as={Link} to="/about-us" variant="small" className="mb-4 text-center font-normal text-white hover:text-stone-400 md:mb-0">About Us</Typography>
            <Typography as={Link} to="/about-us" variant="small" className="mb-4 text-center font-normal text-white hover:text-stone-400 md:mb-0">About Us</Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}
