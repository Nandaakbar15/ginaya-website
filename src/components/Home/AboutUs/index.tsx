"use client";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Aboutdata } from "@/app/api/data";

const Aboutus = () => {
  return (
    <section className="py-20 bg-white dark:bg-darkmode">
      <div className="container mx-auto px-5">
        <div className="flex justify-center text-center mb-20">
          <div className="lg:w-2/3 xl:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
              Tentang CV. Gilang Kencana Mulya
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Perusahaan arsitektur dan interior yang menghadirkan solusi desain
              dan bangun secara menyeluruh – dari konsep hingga realisasi.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8 md:p-16 mb-16">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <Image
              src="/images/screenshot2.png"
              alt="Awal Berdiri"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-16">
            <h2 className="text-3xl font-bold mb-4">
              Awal berdirinya CV Gilang Kencana Mulya
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              CV. Gilang Kencana Mulya (GINAYA) lahir dari visi untuk
              menghadirkan karya arsitektur yang tidak hanya indah dipandang,
              tapi juga nyaman dan fungsional. Berbasis di Bandung – Cimahi,
              kami memulai perjalanan dari proyek-proyek kecil hingga kini
              dipercaya menangani desain dan pembangunan rumah tinggal, bangunan
              komersial, serta interior custom.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center p-8 md:p-16">
          <div className="w-full lg:w-1/2 lg:order-last mb-10 lg:mb-0">
            <Image
              src="/images/screenshot1.png"
              alt="Kualitas"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pr-16">
            <h2 className="text-3xl font-bold mb-4">
              Bertumbuh bersama kualitas
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Dengan tim profesional di bidang arsitektur dan konstruksi, kami
              terus berkembang sambil mempertahankan standar kualitas tinggi,
              kejujuran, dan komunikasi terbuka dengan klien. Setiap proyek kami
              rancang secara personal dan efisien, menjadikannya solusi terbaik
              untuk kebutuhan ruang yang estetik dan fungsional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
