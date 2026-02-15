import RoofRepairClient from "./roofing-brooklyn";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Roof Repair in Brooklyn",
              description:
                "Professional roof repair services in Brooklyn, NYC.",
              provider: {
                "@type": "RoofingContractor",
                name: "BRAVOS Roofing",
                url: "https://yourdomain.com"
              },
              areaServed: {
                "@type": "City",
                name: "Brooklyn"
              },
              serviceType: "Roof Repair"
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How much does roof repair cost in Brooklyn?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Roof repair pricing depends on damage severity and materials."
                  }
                }
              ]
            }
          ])
        }}
      />

      <RoofRepairClient />
    </>
  );
}
