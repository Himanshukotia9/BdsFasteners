// data.js
import { FaScrewdriverWrench } from "react-icons/fa6";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import { SiTicktick } from "react-icons/si";

export const homePage ={
  homeBanner: {
    heading1: "Engineering the Future of Fasteners",
    heading2: "India’s Largest Fastener Manufacturer Since 1962",
    imageSrc: "https://images.unsplash.com/photo-1567177172939-9b0ee9d116d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "HomePage Banner"
  },
  altBanner: [
    {
      heading1: "About Bds Fasteners",
      heading2: "Empowering Industries with Precision Fasteners Since 1962",
      mainText: "The BDS Fasteners has been at the forefront of fastener manufacturing for over 60 years, renowned for its excellence under the REPSI and UCON brands. Our journey, rooted in innovation, quality, and customer satisfaction, has seen us become a pivotal player in both Indian and European markets. With state-of-the-art technology and a diverse range of products, we stand as a testament to enduring quality and relentless pursuit of customer-centric solutions.",
      button: {
        text: "About Us",
        link: "/about-us"
      },
      imageSrc: "https://images.unsplash.com/photo-1589793463357-5fb813435467?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Using placeholder image
    },
    {
      heading1: "Why Choose us",
      heading2: "Excellence in Every Fastener",
      button: {
        text: "Why Choose Us",
        link: "/why-choose-us"
      },
      bulletPoints: [{
        title: "Unmatched Quality",
        text: "Rigorous quality checks and ISO 9001 certification ensure each fastener meets global standards. Our commitment to excellence is recognized through various international certifications.",
        icon: <FaScrewdriverWrench className="size-6"/>
      },
      {
        title: "Innovative Solutions",
        text: "Continuous innovation in manufacturing and product development keeps us ahead. From state-of-the-art technology to a diverse product range, we lead with innovation.",
        icon: <RiLightbulbFlashFill className="size-6"/>
      },
      {
        title: "Customer-Centric Service",
        text: "Our focus is on understanding and fulfilling your unique needs. Customized solutions and a dedicated team ensure complete customer satisfaction.",
        icon: <MdSupportAgent className="size-6"/>
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
      heading1: "Pioneers in Fastener Manufacturing",
      heading3: "UCON: A Division Defined by Quality and Innovation",
      mainText: "Established in 1962, the Kaloti Group has emerged as a leader in the fastener manufacturing industry, renowned for its groundbreaking standards and quality products under the REPSI and UCON brands. Over 60+ years, we have carved out a significant presence in both Indian and European markets, continually setting industry benchmarks worldwide.",
      mainText2: "Since 1962, UCON has specialized in precision fasteners, earning global recognition for exceptional quality and innovation. As a trusted name in the industry, UCON caters to diverse needs across various sectors, embodying our commitment to excellence and customer satisfaction.",
      imageSrc: "https://plus.unsplash.com/premium_photo-1664299773838-46177e77e1b4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Using placeholder image
    },
    {
      heading1: "OUR TECHNOLOGY",
      heading2: "Technological Edge and Product Diversity",
      mainText: "At Kaloti Group, we pride ourselves on our ability to meet the diverse needs of the fastener industry through advanced technology and a broad product range.",
      bulletPoints: [{
        title: "Advanced Equipment",
        text: "Our facilities have industry-leading machinery, including National (USA) boltmaker machines and hot forging lines. This technology is integral to our manufacturing process, enabling us to meet various client specifications.",
        icon: <SiTicktick className="size-6"/>
      },
      {
        title: "Diverse Product Range",
        text: "We offer a wide array of fasteners in mild-steel and high-tensile steel. Our products adhere to internationally recognized standards, such as DIN, ASTM, ISO, IS, and BS, ensuring global applicability and reliability.",
        icon: <SiTicktick className="size-6"/>
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

export const cardsData = [
    {
      id: 1,
      title: "Standard room",
      subTitle: "A Cozy Retreat with Modern Comforts",
      description: "The Standard Room offers a delightful blend of comfort and simplicity. Perfect for solo travelers or couples, this room features tasteful décor, a plush bed, and all the modern amenities you need for a restful stay. Enjoy a peaceful escape with views of the cottage’s serene surroundings.",
    },
    {
      id: 2,
      title: "Deluxe Room",
      subTitle: "Elevated Comfort with Scenic Views",
      description: "The Deluxe Room provides a spacious retreat with elegant furnishings and scenic views of the hills. Ideal for those seeking both luxury and affordability, this room offers a king-sized bed, a private sitting area, and large windows that fill the space with natural light, making your stay truly refreshing.",
    },
];

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