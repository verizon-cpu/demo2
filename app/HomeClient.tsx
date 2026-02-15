import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "NYC Roofing Company | Affordable Roof Repair & Installation",
  description:
    "Trusted roofing company in NYC. Free estimates, emergency repairs, residential & commercial roofing.",
};

export default function Page() {
  return <HomeClient />;
}
