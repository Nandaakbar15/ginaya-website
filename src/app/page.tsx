import React from "react";
import Hero from "@/components/Home/Hero";
import Dedicated from "@/components/Home/Dedicated";
import Beliefs from "@/components/Home/Beliefs";
import Team from "@/components/Home/Team";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "CV. Gilang Kencana Mulya",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Dedicated />
      <Beliefs />
      <Team />
    </main>
  );
}
