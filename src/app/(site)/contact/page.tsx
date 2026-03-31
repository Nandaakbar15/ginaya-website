import Contact from "@/components/Home/Contact";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactPages() {
  return (
    <main>
      <Contact />
    </main>
  );
}
