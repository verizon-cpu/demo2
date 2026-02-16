import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "How to Fix a Roof Leak in Brooklyn | BRAVOS Roofing",
  description:
    "Learn how to identify and fix a roof leak in Brooklyn homes. Expert advice from BRAVOS Roofing professionals.",
  keywords: [
    "roof leak repair Brooklyn",
    "fix roof leak NYC",
    "Brooklyn roofing tips",
    "roofing contractor Brooklyn"
  ],
  openGraph: {
    title: "How to Fix a Roof Leak in Brooklyn",
    description:
      "Step-by-step guide to identifying and repairing roof leaks in Brooklyn homes.",
    type: "article",
    url: "https://yourdomain.com/blog/how-to-fix-roof-leak-brooklyn",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How to Fix a Roof Leak in Brooklyn",
            description:
              "Step-by-step guide on identifying and fixing roof leaks in Brooklyn homes.",
            author: {
              "@type": "Organization",
              name: "BRAVOS Roofing"
            },
            publisher: {
              "@type": "Organization",
              name: "BRAVOS Roofing",
              logo: {
                "@type": "ImageObject",
                url: "https://yourdomain.com/logo.png"
              }
            },
            datePublished: "2026-02-10",
            dateModified: "2026-02-10",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://yourdomain.com/blog/how-to-fix-roof-leak-brooklyn"
            }
          })
        }}
      />

      <BlogClient />
    </>
  );
}
