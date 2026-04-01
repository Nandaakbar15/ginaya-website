import Work from "@/components/Home/Work";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Our Personil / Team",
};

export default function PersonilPages() {
  return (
    <main>
      <Work />
    </main>
  );
}
