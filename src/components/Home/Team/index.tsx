import React from "react";
import Image from "next/image";

const Team = () => {
  return (
    <section className="overflow-x-hidden">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) relative">
        <h2 className="text-6xl font-bold text-center mx-20">
          Kami siap memberikan solusi dengan standar tinggi dan profesional
        </h2>
        <div className="grid grid-cols-1 mt-16">
          <Image
            src="/images/team/teamimg.png"
            alt="office-image"
            height={684}
            width={1296}
            className="relative z-1"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
