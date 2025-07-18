// data.js
import { FaHandshake, FaScrewdriverWrench, FaUserGear } from "react-icons/fa6";
import { RiLightbulbFlashFill, RiVerifiedBadgeFill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import { BsBuildingsFill, BsGearWideConnected } from "react-icons/bs";
import { TbBulbFilled, TbCertificate } from "react-icons/tb";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import banner1 from "./Photos/Banners/HomeBanner1.jpg"

export const homePage ={
  homeBanner: {
    heading1: "Engineering the Future of Fasteners",
    imageSrc: banner1
  },
  altBanner: [
    {
      heading1: "About Bds Fasteners",
      heading2: `“35 Years of Trusted Fastener Manufacturing – Precision. Performance. Perfection.”`,
      mainText: (
        <>
        <strong>Established in 1995</strong>, we are a reputed fastener manufacturing company known for delivering precision-engineered solutions across India. With a commitment to quality over quantity, we’ve built long-lasting relationships with clients who not only rely on our products for their domestic needs but also <strong>export our fasteners to international markets.</strong>
        </>
      ),
      button: {
        text: "About Us",
        link: "/about-us"
      },
      imageSrc: "https://images.unsplash.com/photo-1589793463357-5fb813435467?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      heading1: "Why Choose us",
      heading2: "Excellence in Every Fastener",
      button: {
        text: "Why Choose Us",
        link: "/why-choose-us"
      },
      bulletPoints: [{
        title: "35 Years of Industry Expertise",
        text: "We’ve built a reputation of trust and excellence with decades of hands-on experience.",
        icon: <FaScrewdriverWrench size={36}/>
      },
      {
        title: "Advanced Manufacturing Technology",
        text: "We use cutting-edge CNC machines, hot forging processes, and various specialized equipment for consistent and superior quality.",
        icon: <RiLightbulbFlashFill size={36}/>
      },
      {
        title: "Pan India Presence",
        text: "We proudly serve clients across every corner of India with reliable delivery and support.",
        icon: <MdSupportAgent size={36}/>
      },
      ],
      imageSrc: "https://plus.unsplash.com/premium_photo-1676760960823-cca1c4943504?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ],
  marqueeSlogan:[
    "Quality at Every Step", "Sustainability", "Engineered for Excellence", "Crafting Solid Foundations", "Trusted Worldwide"
  ],
}

export const aboutUsPage ={
  homeBanner: {
    heading1: "About BDS Fasteners",
    imageSrc: "https://plus.unsplash.com/premium_photo-1682146920372-bd950e25125d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "AboutUsPage Banner"
  },
  altBanner: [
    {
      heading1: "Experts in the Production of Fasteners",
      heading3: "Our Mission",
      mainText: "Established in 1995, we are a legacy-driven fastener manufacturing company dedicated to quality, innovation, and reliability. From humble beginnings to becoming a trusted name across India, our journey has been powered by precision engineering and customer satisfaction.",
      mainText2: "To deliver world-class fasteners that meet the highest standards in strength, durability, and performance.",
      imageSrc: "https://plus.unsplash.com/premium_photo-1664299773838-46177e77e1b4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      heading1: "OUR TECHNOLOGY",
      heading2: "Innovation in Technology and Variety in Products",
      mainText: "we take great satisfaction in our ability to use cutting-edge technology and a wide range of products to satisfy the various demands of the fastener business.",
      bulletPoints: [{
        title: "Advanced Equipment",
        text: "Our manufacturing facility is equipped with advanced CNC machines from Doosan (South Korea), hot forging units, and a full suite of testing and finishing tools. This setup allows us to produce industrial-grade fasteners that meet the highest standards — used in railway applications, telecom towers, bridges, and infrastructure projects.",
        icon: <SiTicktick size={36}/>
      },
      {
        title: "Diverse Product Range",
        text: "We provide a large selection of fasteners made of high quality steel. Our products adhere to internationally recognized standards, ensuring global applicability and reliability.",
        icon: <SiTicktick size={36}/>
      },
      ],
      button: {
        text: "Why Choose Us",
        link: "/why-choose-us"
      },
      imageSrc: "https://images.unsplash.com/photo-1589792924333-edbfbe7c8be7?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ],
}

export const whyChooseUsPage ={
  homeBanner: {
    heading1: "Why Choose Us",
    imageSrc: "https://images.unsplash.com/photo-1538080204498-afe921550d75?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "WhyChooseUsPage Banner"
  },
  bulletPoints: [{
    title: "Decades of Experience",
    text: "With 35+ years in the industry, our journey has been one of innovation, reliability, and evolution. We’ve adapted with time, invested in the latest machinery, and trained our workforce to meet the ever-changing needs of our customers.",
    icon: <BsBuildingsFill size={36}/>
  },
  {
    title: "Advanced Manufacturing Setup",
    text: "Our production unit is equipped with: CNC Machines for precision parts, Hot Forging Units for durability and strength. Thread Rolling and Heat Treatment Machines for performance optimization, Quality Control Labs to ensure every piece meets industrial standards.",
    icon: <RiVerifiedBadgeFill size={36}/>
  },
  {
    title: "All-India Presence",
    text: "From industrial hubs to remote project sites, our fasteners are trusted and used across India. We ensure timely delivery and consistent support, no matter where you are located.",
    icon: <BsGearWideConnected size={36}/>
  },
  {
    title: "Ahead in Technology and service",
    text: "In order to deliver creative solutions, we continuously progress from manual machines to advanced formers.",
    icon: <TbCertificate size={36}/>
  },
  {
    title: "Quality That Goes Global",
    text: "Our fasteners are not just used across India, they’re exported globally through our clients. Whether it's railway infrastructure, high-rise towers, or massive bridge projects, our products are built to last and trusted where safety is non-negotiable.",
    icon: <TbBulbFilled size={36}/>
  },
  {
    title: "Infrastructure-Grade Reliability",
    text: "Our fasteners play a key role in railways, transmission towers, bridges, and industrial structures, where strength, consistency, and quality are critical. Engineers and project heads choose us because we deliver what we promise every time.",
    icon: <VscWorkspaceTrusted size={36}/>
  },
  {
    title: "Long-Term Relationships, Built on Trust",
    text: "We are proud to have a large base of trusted clients who have been associated with us for years – even decades. Our consistency, transparency, and customer-first approach have helped us earn their loyalty.",
    icon: <FaUserGear size={36}/>
  },
  {
    title: "Your Confidence, Our Commitment",
    text: "Our growing revenue and production volume reflect the trust and satisfaction of our customers globally.",
    icon: <FaHandshake size={36}/>
  },
  ],
}

export const productsPage ={
  homeBanner1: {
    heading1: "Products",
    imageSrc: "https://images.unsplash.com/photo-1538080204498-afe921550d75?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "ProductsPage Banner"
  },
  homeBanner2: {
    heading1: "Categories",
    imageSrc: "https://images.unsplash.com/photo-1538080204498-afe921550d75?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "CategoriesPage Banner"
  },
  products: [
    {
      title: "Hex Nut",
      sizeRange: {
        mmSize: "M-24 To M-100",
        bswSize: '7/8" To 4" ',
      },
      material: "Mild Steel and EN - 8/9/15/19 grade /EN 24",
      finish: "Self/Natural, Bright Zink, Yellow Passivation, Hot Dip Galvanised, Auto Black, Phosphating",
      imageSrc: "https://m.media-amazon.com/images/I/618OP5ZmXGS._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Jam Nut",
      sizeRange: {
        mmSize: "M-24 To M-100",
        bswSize: '7/8" To 4" ',
      },
      material: "Mild Steel and EN - 8/9/15/19 grade /EN 24",
      finish: "Self/Natural, Bright Zink, Yellow Passivation, Hot Dip Galvanised, Auto Black, Phosphating",
      imageSrc: "https://m.media-amazon.com/images/I/618OP5ZmXGS._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Castle Nut",
      sizeRange: {
        mmSize: "M-24 To M-100",
        bswSize: '7/8" To 4" ',
      },
      material: "Mild Steel and EN - 8/9/15/19 grade /EN 24",
      finish: "Self/Natural, Bright Zink, Yellow Passivation, Hot Dip Galvanised, Auto Black, Phosphating",
      imageSrc: "https://m.media-amazon.com/images/I/618OP5ZmXGS._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Slotted Nut",
      sizeRange: {
        mmSize: "M-24 To M-100",
        bswSize: '7/8" To 4" ',
      },
      material: "Mild Steel and EN - 8/9/15/19 grade /EN 24",
      finish: "Self/Natural, Bright Zink, Yellow Passivation, Hot Dip Galvanised, Auto Black, Phosphating",
      imageSrc: "https://m.media-amazon.com/images/I/618OP5ZmXGS._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Squaer Nut",
      sizeRange: {
        mmSize: "M-24 To M-100",
        bswSize: '7/8" To 4" ',
      },
      material: "Mild Steel and EN - 8/9/15/19 grade /EN 24",
      finish: "Self/Natural, Bright Zink, Yellow Passivation, Hot Dip Galvanised, Auto Black, Phosphating",
      imageSrc: "https://m.media-amazon.com/images/I/618OP5ZmXGS._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Heavy Hex Nut",
      sizeRange: {
        mmSize: "M-24 To M-100",
        bswSize: '7/8" To 4" ',
      },
      material: "Mild Steel and EN - 8/9/15/19 grade /EN 24",
      finish: "Self/Natural, Bright Zink, Yellow Passivation, Hot Dip Galvanised, Auto Black, Phosphating",
      imageSrc: "https://m.media-amazon.com/images/I/618OP5ZmXGS._AC_UF1000,1000_QL80_.jpg",
    },
  ]
}

export const contactUsPage ={
  homeBanner: {
    heading1: "Contact US",
    imageSrc: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "ContactUsPage Banner"
  },
}

export const privacyPolicy ={
  homeBanner: {
    heading1: "Privacy Policy",
    imageSrc: "https://images.unsplash.com/photo-1538080204498-afe921550d75?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "PrivacyPolicy Page Banner"
  },
  introduction: "Your privacy is very important to us. Accordingly, we have developed this Policy in order for you to understand how we collect, use, communicate and disclose and make use of personal information. The following outlines our privacy policy.",
  policies: [
    "Before or at the time of collecting personal information, we will identify the purposes for which information is being collected.",
    "We will collect and use of personal information solely with the objective of fulfilling those purposes specified by us and for other compatible purposes, unless we obtain the consent of the individual concerned or as required by law.",
    "We will only retain personal information as long as necessary for the fulfillment of those purposes.",
    "We will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.",
    "Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date."
  ],
  commitment: "We are dedicated to operating our company in line with these values to guarantee the preservation and protection of the privacy of personal data."
}

export const termsOfUse = {
  homeBanner: {
    heading1: "Terms Of Use",
    imageSrc:
      "https://images.unsplash.com/photo-1538080204498-afe921550d75?q=80&w=2085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "TermsOfUse Page Banner",
  },
  title: "TERMS OF USE",
  introduction:
    "By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.",
  terms: [
    {
      title: "TERMS",
      content:
        "By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trade mark law.",
    },
    {
      title: "LINKS",
      content:
        "BDS fastener and supply LLP has not reviewed all of the sites linked to its Internet website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by BDS fastener and supply LLP of the site. Use of any such linked website is at the user's own risk.",
    },
    {
      title: "SITE TERMS OF USE MODIFICATIONS",
      content:
        "BDS fastener and supply LLP may revise these terms of use for its web site at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms and Conditions of Use.",
    },
  ],
  footer: "General Terms and Conditions applicable to Use of a Website.",
};


// for footer component
export const links = [
  {
    title: "Quick Links",
    items: [
      {
        index: 1,
        link: "HOME",
        path: "/",
      },
      {
        index: 2,
        link: "ABOUT US",
        path: "/about-us",
      },
      {
        index: 3,
        link: "WHY CHOOSE US",
        path: "/why-choose-us",
      },
      {
        index: 4,
        link: "PRODUCTS",
        path: "/products",
      },
    ],
  },
];