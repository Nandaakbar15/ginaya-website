import Aboutus from "@/components/Home/AboutUs";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <main>
      <Aboutus />
    </main>
  );
}
