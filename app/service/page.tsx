import type { Metadata } from "next";
import RoofRepairClient from "./RoofRepairClient";

export const metadata: Metadata = {
  title: "Roof Repair in Brooklyn, NY | BRAVOS Roofing",
  description:
    "Professional roof repair in Brooklyn, NY. Emergency leak repair and flat roof services. Call BRAVOS Roofing today.",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Roof Repair in Brooklyn",
            provider: {
              "@type": "RoofingContractor",
              name: "BRAVOS Roofing",
              telephone: "+1 2344561221",
              address: {
                "@type": "PostalAddress",
                streetAddress: "249 Rutledge St",
                addressLocality: "Brooklyn",
                addressRegion: "NY",
                postalCode: "11211",
                addressCountry: "US"
              }
            },
            areaServed: {
              "@type": "City",
              name: "Brooklyn"
            }
          })
        }}
      />

      <RoofRepairClient />
    </>
  );
}
