import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roofing Services | BRAVOS Roofing Brooklyn",
  description: "Professional roofing services including roof repair, replacement, installation, and maintenance in Brooklyn, NY.",
};

export default function ServicePage() {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#0A0A0C', marginBottom: '20px' }}>
        Our Roofing Services
      </h1>
      <p style={{ fontSize: '1.125rem', color: '#4B5563' }}>
        Coming soon! Learn about our professional roofing services.
      </p>
    </div>
  );
}