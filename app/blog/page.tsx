import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roofing Blog | BRAVOS Roofing Brooklyn",
  description:
    "Expert roofing tips, maintenance guides, and industry insights from Brooklyn's trusted roofing professionals.",
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "BRAVOS Roofing Blog",
            description:
              "Expert roofing tips and maintenance guides from BRAVOS Roofing in Brooklyn, NYC.",
            url: "https://yourdomain.com/blog",
            publisher: {
              "@type": "Organization",
              name: "BRAVOS Roofing"
            }
          })
        }}
      />

      <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#0A0A0C', marginBottom: '20px' }}>
          BRAVOS Roofing Blog
        </h1>
        <p style={{ fontSize: '1.125rem', color: '#4B5563' }}>
          Expert roofing tips, maintenance advice, and Brooklyn roofing insights.
        </p>
      </div>
    </>
  );
}
