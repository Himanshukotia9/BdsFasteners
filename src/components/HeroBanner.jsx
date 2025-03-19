import React from "react";

export default function HeroBanner({data}) {
  return (
    <section className="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32 rounded-b-3xl">
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left"
          src={data.imageSrc}
          alt=""
        />
      </div>

      <div className="absolute inset-0 z-0 bg-gradient-to-b from-neutral-950/90 to-neutral-950/0" />

      <div className="relative py-8 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center lg:w-1/2 md:text-left">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl font-heading">
          {data.heading1}
          </h2>
          <p className="font-primary mt-4 text-lg text-gray-200">
          {data.heading2}
          </p>
        </div>
      </div>
    </section>
  );
}
