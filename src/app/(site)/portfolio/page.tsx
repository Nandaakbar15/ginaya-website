import Portfolio from "@/components/Home/Portfolio";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Our Portfolio",
};

export default function PortfolioPages() {
  return (
    <main>
      <Portfolio />
    </main>
  );
}
