"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
import { PortfolioData } from "@/app/api/data";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows: false,
  autoplay: false,
  speed: 500,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
};

export default function Portfolio() {
  return (
    <section className="relative dark:bg-midnight_text bg-grey overflow-hidden">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) relative">
        <div className="text-center">
          <h3 className="text-blue text-3xl font-bold tracking-widest">
            Our Portfolio
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PortfolioData.map((items, i) => (
            <div key={i}>
              <div className="bg-white dark:bg-darkmode p-3 shadow-lg rounded-3xl">
                <Image
                  src={items.imgSrc}
                  alt={items.heading}
                  width={389}
                  height={262}
                  className="m-auto"
                />
                <h4 className="text-xl font-bold pt-4">{items.heading}</h4>
                <p className="text-sm text-gray-500 pt-2">{items.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
