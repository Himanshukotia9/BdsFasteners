import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export const CountUpStats = () => {
  return (
    <div className="bg-stone-800 rounded-lg shadow-md px-4 py-20 my-10 md:py-14">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-2 sm:mb-4">Trusted by Businesses Worldwide</h2>
        <p className="text-white font-primary text-sm sm:text-base max-w-xs sm:max-w-lg md:max-w-2xl mx-auto">
          Join our global community of satisfied clients who trust us with their business needs
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-8">
        <Stat
          num={5.2}
          decimals={1}
          suffix="K+"
          subheading="Active Distributors"
        />
        <Stat
          num={100}
          suffix="+"
          subheading="Clients"
        />
        <Stat
          num={30}
          suffix="+"
          subheading="Countries Served"
        />
        <Stat
          num={35}
          suffix="+"
          subheading="Years of Excellence"
        />
      </div>
    </div>
  );
};

const Stat = ({ num, suffix, decimals = 0, subheading }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className="flex flex-col items-center py-8 sm:py-0">
      <p className="mb-2 text-center text-7xl font-semibold sm:text-6xl">
        <span ref={ref}></span>
        {suffix}
      </p>
      <p className="max-w-48 text-center font-primary text-white">{subheading}</p>
    </div>
  );
};