import type { Metadata } from "next";
// Import your blog component if it exists
// import Blog from "./Blog"; // or whatever your component is named

export const metadata: Metadata = {
  title: "Roofing Blog | BRAVOS Roofing Brooklyn",
  description: "Expert roofing tips, maintenance guides, and industry insights from Brooklyn's trusted roofing professionals.",
};

export default function BlogPage() {
  return (
    <>
      {/* If you have a blog component to render, use it with proper capitalization */}
      {/* <Blog /> */}
      
      {/* If you don't have a blog component yet, just render content directly */}
      <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#0A0A0C', marginBottom: '20px' }}>
          BRAVOS Roofing Blog
        </h1>
        <p style={{ fontSize: '1.125rem', color: '#4B5563' }}>
          Coming soon! Check back for expert roofing tips and insights.
        </p>
      </div>
    </>
  );
}