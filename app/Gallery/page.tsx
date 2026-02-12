"use client";
import { useState, useEffect, useRef } from "react";
import { Header, Footer } from '@/components/Layout';
// ==================== IMAGE COMPARISON COMPONENT ====================
function ImageComparison({
  beforeImage,
  afterImage,
  isMobile,
  isTablet,
}: {
  beforeImage: string;
  afterImage: string;
  isMobile: boolean;
  isTablet: boolean;
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleInteractionStart = () => {
    isDragging.current = true;
  };

  const handleInteractionMove = (clientX: number) => {
    if (!isDragging.current || !containerRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    setSliderPosition(Math.min(Math.max(percentage, 5), 95));
  };

  const handleInteractionEnd = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      handleInteractionMove(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        handleInteractionMove(e.touches[0].clientX);
      }
    };

    const handleMouseUp = () => {
      handleInteractionEnd();
    };

    const handleTouchEnd = () => {
      handleInteractionEnd();
    };

    if (isDragging.current) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging.current]);

  const handleContainerClick = (e: React.MouseEvent) => {
    if (!isMobile) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      setSliderPosition(Math.min(Math.max(percentage, 5), 95));
    }
  };

  const handleSize = isMobile ? 28 : isTablet ? 32 : 36;
  const labelPadding = isMobile ? "4px 8px" : "6px 10px";
  const labelFontSize = isMobile ? "10px" : "11px";
  const imageHeight = isMobile ? "220px" : isTablet ? "260px" : "300px";

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: imageHeight,
        overflow: "hidden",
        borderRadius: "8px",
        cursor: isMobile ? "pointer" : "col-resize",
        touchAction: "none",
        boxSizing: "border-box",
      }}
      onMouseDown={(e) => {
        if (!isMobile) {
          handleInteractionStart();
          handleInteractionMove(e.clientX);
        }
      }}
      onTouchStart={(e) => {
        handleInteractionStart();
        if (e.touches[0]) {
          handleInteractionMove(e.touches[0].clientX);
        }
      }}
      onClick={handleContainerClick}
    >
      <img
        src={beforeImage}
        alt="Before roofing work"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: `${sliderPosition}%`,
          height: "100%",
          overflow: "hidden",
          zIndex: 2,
        }}
      >
        <img
          src={afterImage}
          alt="After roofing work"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: "0",
          left: `${sliderPosition}%`,
          transform: "translateX(-50%)",
          width: `${handleSize}px`,
          height: `${handleSize}px`,
          background: "#FFB800",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 4,
          cursor: isMobile ? "pointer" : "col-resize",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
          border: "2px solid #0A0A0C",
          touchAction: "none",
        }}
        onMouseDown={(e) => {
          e.stopPropagation();
          handleInteractionStart();
        }}
        onTouchStart={(e) => {
          e.stopPropagation();
          handleInteractionStart();
        }}
      >
        <svg
          width={isMobile ? "12" : "14"}
          height={isMobile ? "12" : "14"}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M8.5 5L11.7929 8.29289C12.1834 8.68342 12.8166 8.68342 13.2071 8.29289L16.5 5M8.5 19L11.7929 15.7071C12.1834 15.3166 12.8166 15.3166 13.2071 15.7071L16.5 19M19 12L5 12"
            stroke="#0A0A0C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div
        style={{
          position: "absolute",
          top: "0",
          left: `${sliderPosition}%`,
          transform: "translateX(-1px)",
          width: "2px",
          height: "100%",
          background: "#FAFAFA",
          zIndex: 3,
          boxShadow: "0 0 4px rgba(0, 0, 0, 0.3)",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          bottom: isMobile ? "8px" : "12px",
          left: isMobile ? "8px" : "12px",
          background: "#FAFAFA",
          color: "#0A0A0C",
          padding: labelPadding,
          fontSize: labelFontSize,
          fontWeight: 700,
          borderRadius: "4px",
          zIndex: 3,
          letterSpacing: "0.5px",
          opacity: 0.9,
        }}
      >
        BEFORE
      </div>

      <div
        style={{
          position: "absolute",
          bottom: isMobile ? "8px" : "12px",
          right: isMobile ? "8px" : "12px",
          background: "#FFB800",
          color: "#FAFAFA",
          padding: labelPadding,
          fontSize: labelFontSize,
          fontWeight: 700,
          borderRadius: "4px",
          zIndex: 3,
          letterSpacing: "0.5px",
        }}
      >
        AFTER
      </div>
    </div>
  );
}

// ==================== CONTACT FORM COMPONENT ====================
function ContactForm({ isMobile, isTablet }: { isMobile: boolean; isTablet: boolean }) {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    zipCode: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xqeedjny", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ fullName: "", email: "", phone: "", zipCode: "", message: "" });
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 5000);
      }
    } catch {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  const formStyles = {
    container: {
      background: "#FAFAFA",
      borderRadius: "10px",
      padding: isMobile ? "1.5rem" : "2rem",
      borderTop: "4px solid #FFB800",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
      width: "100%",
      boxSizing: "border-box" as const,
    },
    title: {
      fontSize: isMobile ? "1.25rem" : "1.5rem",
      fontWeight: 900,
      color: "#0A0A0C",
      marginBottom: "0.5rem",
      fontFamily: "'Playfair Display', serif",
    },
    subtitle: {
      fontSize: isMobile ? "0.8rem" : "0.9rem",
      color: "#0A0A0C",
      opacity: 0.9,
      marginBottom: "1.5rem",
      fontFamily: "'Playfair Display', serif",
    },
    form: {
      display: "flex",
      flexDirection: "column" as const,
      gap: "1rem",
      width: "100%",
    },
    inputGroup: {
      display: "flex",
      flexDirection: "column" as const,
      gap: "0.25rem",
    },
    label: {
      fontSize: "0.8rem",
      fontWeight: 600,
      color: "#FFB800",
      textTransform: "uppercase" as const,
      letterSpacing: "1px",
    },
    input: {
      width: "100%",
      padding: isMobile ? "0.75rem" : "0.875rem",
      background: "rgba(255, 255, 255, 0.05)",
      border: "1px solid rgba(255, 184, 0, 0.2)",
      borderRadius: "4px",
      color: "#FAFAFA",
      fontSize: isMobile ? "0.9rem" : "1rem",
      fontFamily: "'Playfair Display', serif",
      boxSizing: "border-box" as const,
      transition: "all 0.3s ease",
    },
    textarea: {
      width: "100%",
      padding: isMobile ? "0.75rem" : "0.875rem",
      background: "rgba(255, 255, 255, 0.05)",
      border: "1px solid rgba(255, 184, 0, 0.2)",
      borderRadius: "4px",
      color: "#FAFAFA",
      fontSize: isMobile ? "0.9rem" : "1rem",
      fontFamily: "'Playfair Display', serif",
      minHeight: "100px",
      resize: "vertical" as const,
      boxSizing: "border-box" as const,
    },
    button: {
      background: "#FFB800",
      color: "#0A0A0C",
      border: "none",
      padding: isMobile ? "0.875rem 1.5rem" : "1rem 2rem",
      fontSize: isMobile ? "0.9rem" : "1rem",
      fontWeight: 900,
      borderRadius: "30px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      letterSpacing: "0.5px",
      marginTop: "0.5rem",
      fontFamily: "'Playfair Display', serif",
    },
    statusMessage: {
      success: {
        color: "#FFB800",
        marginTop: "1rem",
        fontSize: "0.9rem",
        textAlign: "center" as const,
      },
      error: {
        color: "#FF4444",
        marginTop: "1rem",
        fontSize: "0.9rem",
        textAlign: "center" as const,
      },
    },
  };

  return (
    <div style={formStyles.container}>
      <h3 style={formStyles.title}>Get a Free Estimate</h3>
      <p style={formStyles.subtitle}>Fill out the form below and we'll contact you within 1 hour.</p>
      
      <form onSubmit={handleSubmit} style={formStyles.form}>
        <div style={formStyles.inputGroup}>
          <label style={formStyles.label}>Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            style={formStyles.input}
            onFocus={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.borderColor = "#FFB800";
            }}
            onBlur={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
              e.currentTarget.style.borderColor = "rgba(255, 184, 0, 0.2)";
            }}
          />
        </div>

        <div style={formStyles.inputGroup}>
          <label style={formStyles.label}>Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={formStyles.input}
            onFocus={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.borderColor = "#FFB800";
            }}
            onBlur={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
              e.currentTarget.style.borderColor = "rgba(255, 184, 0, 0.2)";
            }}
          />
        </div>

        <div style={formStyles.inputGroup}>
          <label style={formStyles.label}>Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={formStyles.input}
            onFocus={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.borderColor = "#FFB800";
            }}
            onBlur={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
              e.currentTarget.style.borderColor = "rgba(255, 184, 0, 0.2)";
            }}
          />
        </div>

        <div style={formStyles.inputGroup}>
          <label style={formStyles.label}>Zip Code *</label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
            style={formStyles.input}
            onFocus={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.borderColor = "#FFB800";
            }}
            onBlur={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
              e.currentTarget.style.borderColor = "rgba(255, 184, 0, 0.2)";
            }}
          />
        </div>

        <div style={formStyles.inputGroup}>
          <label style={formStyles.label}>Project Details</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your roofing project..."
            style={formStyles.textarea}
            onFocus={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.borderColor = "#FFB800";
            }}
            onBlur={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
              e.currentTarget.style.borderColor = "rgba(255, 184, 0, 0.2)";
            }}
          />
        </div>

        <button
          type="submit"
          disabled={formStatus === "sending"}
          style={{
            ...formStyles.button,
            opacity: formStatus === "sending" ? 0.7 : 1,
            cursor: formStatus === "sending" ? "not-allowed" : "pointer",
          }}
        >
          {formStatus === "sending" ? "Sending..." : "Request Free Estimate"}
        </button>

        {formStatus === "success" && (
          <div style={formStyles.statusMessage.success}>
            Thank you! We'll contact you within 1 hour.
          </div>
        )}
        {formStatus === "error" && (
          <div style={formStyles.statusMessage.error}>
            Something went wrong. Please try again or call us directly.
          </div>
        )}
      </form>
    </div>
  );
}

// ==================== MAIN GALLERY PAGE ====================
interface GalleryItem {
  id: number;
  category: string;
  title: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  serviceType: string;
  timeTaken: string;
  clientQuote: string;
}

export default function BeforeAfterGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      category: "residential",
      title: "Complete Roof Replacement",
      beforeImage: "/image/spoiledroof.jpg",
      afterImage: "/image/repairedroof.jpg",
      description: "Full roof replacement with premium architectural shingles. Removed 3 layers of old roofing, installed new underlayment and ridge vents.",
      serviceType: "Roof Replacement",
      timeTaken: "2 days",
      clientQuote: "BRAVOS transformed our home! Best investment we've made.",
    },
    {
      id: 2,
      category: "repair",
      title: "Storm Damage Restoration",
      beforeImage: "/image/spoiledroof.jpg",
      afterImage: "/image/repairedroof.jpg",
      description: "Emergency repair after severe hailstorm. Replaced damaged shingles, repaired flashing, and sealed all leak points.",
      serviceType: "Storm Repair",
      timeTaken: "6 hours",
      clientQuote: "Fast response and flawless work. No more leaks!",
    },
    {
      id: 3,
      category: "commercial",
      title: "Flat Roof Restoration",
      beforeImage: "/image/spoiledroof.jpg",
      afterImage: "/image/repairedroof.jpg",
      description: "Commercial TPO roof installation for 15,000 sq ft retail center. Complete tear-off, new insulation, and energy-efficient membrane.",
      serviceType: "Commercial Roofing",
      timeTaken: "5 days",
      clientQuote: "Professional team, minimal disruption to our business.",
    },
    {
      id: 4,
      category: "maintenance",
      title: "Gutter & Downspout System",
      beforeImage: "/image/spoiledroof.jpg",
      afterImage: "/image/repairedroof.jpg",
      description: "Seamless gutter installation with leaf guards. Solved water damage issues and improved drainage.",
      serviceType: "Gutter Installation",
      timeTaken: "1 day",
      clientQuote: "No more clogged gutters! Worth every penny.",
    },
    {
      id: 5,
      category: "residential",
      title: "Metal Roof Installation",
      beforeImage: "/image/spoiledroof.jpg",
      afterImage: "/image/repairedroof.jpg",
      description: "Premium standing seam metal roof installation. 40-year warranty, energy-efficient coating, and wind resistance up to 140mph.",
      serviceType: "Metal Roofing",
      timeTaken: "3 days",
      clientQuote: "Beautiful and durable. Lower energy bills already!",
    },
    {
      id: 6,
      category: "repair",
      title: "Skylight & Flashing Repair",
      beforeImage: "/image/spoiledroof.jpg",
      afterImage: "/image/repairedroof.jpg",
      description: "hey",
      serviceType: "Leak Repair",
      timeTaken: "4 hours",
      clientQuote: "Finally, no more water stains on the ceiling!",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", count: galleryItems.length },
    { id: "residential", name: "Residential", count: galleryItems.filter((item) => item.category === "residential").length },
    { id: "repair", name: "Repairs", count: galleryItems.filter((item) => item.category === "repair").length },
    { id: "commercial", name: "Commercial", count: galleryItems.filter((item) => item.category === "commercial").length },
    { id: "maintenance", name: "Maintenance", count: galleryItems.filter((item) => item.category === "maintenance").length },
  ];

  const filteredItems = selectedCategory === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  const pageStyles: any = {
    pageContainer: {
      minHeight: "100vh",
      background: "#0A0A0C",
      fontFamily: "'Playfair Display', serif",
      width: "100vw",
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      overflowX: "hidden",
      position: "relative",
      left: 0,
      right: 0,
    },
    heroSection: {
      minHeight: isMobile ? "50vh" : isTablet ? "55vh" : "60vh",
      background: 'linear-gradient(rgba(10, 10, 12, 0.85), rgba(10, 10, 12, 0.7)), url("/image/roofer1.png")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: isMobile ? "scroll" : "fixed",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: isMobile ? "5rem 1rem 2rem" : isTablet ? "6rem 1.5rem 3rem" : "7rem 2rem 4rem",
      width: "100vw",
      boxSizing: "border-box",
      position: "relative",
      left: 0,
      right: 0,
      borderBottom: "4px solid #FFB800",
    },
    heroContent: {
      maxWidth: "1200px",
      width: "100%",
      textAlign: "center",
      boxSizing: "border-box",
      padding: isMobile ? "0 0.5rem" : "0",
    },
    heroTitle: {
      fontSize: isMobile ? "1.75rem" : isTablet ? "2.25rem" : "2.75rem",
      fontWeight: 900,
      color: "#FFFFFF",
      marginBottom: isMobile ? "0.5rem" : "0.75rem",
      textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
      fontFamily: "'Playfair Display', serif",
      lineHeight: 1.2,
    },
    heroSubtitle: {
      fontSize: isMobile ? "0.9rem" : isTablet ? "1.1rem" : "1.25rem",
      fontWeight: 700,
      color: "#FFB800",
      marginBottom: isMobile ? "0.75rem" : "1rem",
      maxWidth: "800px",
      margin: "0 auto",
      lineHeight: 1.4,
      fontFamily: "'Playfair Display', serif",
    },
    heroText: {
      fontSize: isMobile ? "0.8rem" : isTablet ? "0.95rem" : "1.1rem",
      color: "#FAFAFA",
      opacity: 0.9,
      maxWidth: "700px",
      margin: "0 auto",
      lineHeight: 1.5,
      fontFamily: "'Playfair Display', serif",
    },
    mainContent: {
      maxWidth: "1400px",
      margin: "0 auto",
      padding: isMobile ? "1.5rem 1rem" : isTablet ? "2rem 1.5rem" : "2.5rem 2rem",
      background: "#0A0A0C",
      width: "100%",
      boxSizing: "border-box",
    },
    sectionTitle: {
      fontSize: isMobile ? "1.5rem" : isTablet ? "1.75rem" : "2rem",
      fontWeight: 900,
      color: "#FFFFFF",
      marginBottom: isMobile ? "0.5rem" : "0.75rem",
      textAlign: "center",
      fontFamily: "'Playfair Display', serif",
      lineHeight: 1.2,
    },
    sectionSubtitle: {
      fontSize: isMobile ? "0.8rem" : isTablet ? "0.9rem" : "1rem",
      color: "#FAFAFA",
      opacity: 0.9,
      marginBottom: isMobile ? "1.5rem" : "2rem",
      textAlign: "center",
      fontFamily: "'Playfair Display', serif",
      lineHeight: 1.5,
      maxWidth: "800px",
      margin: "0 auto",
    },
    categoriesContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: isMobile ? "0.5rem" : "0.75rem",
      marginBottom: isMobile ? "1.5rem" : "2rem",
      width: "100%",
    },
    categoryButton: (active: boolean, hover: boolean) => ({
      padding: isMobile ? "0.4rem 0.8rem" : "0.5rem 1rem",
      background: active ? "#FFB800" : hover ? "rgba(255, 184, 0, 0.1)" : "transparent",
      border: active ? "2px solid #FFB800" : "2px solid rgba(255, 184, 0, 0.3)",
      borderRadius: "30px",
      color: active ? "#0A0A0C" : "#FFFFFF",
      fontSize: isMobile ? "0.75rem" : "0.85rem",
      fontWeight: active ? 800 : 600,
      cursor: "pointer",
      transition: "all 0.3s ease",
      fontFamily: "'Playfair Display', serif",
      display: "flex",
      alignItems: "center",
      gap: "0.4rem",
      whiteSpace: "nowrap",
    }),
    categoryCount: {
      background: "#0A0A0C",
      color: "#FFB800",
      fontSize: isMobile ? "0.65rem" : "0.7rem",
      fontWeight: 800,
      borderRadius: "50%",
      width: isMobile ? "18px" : "20px",
      height: isMobile ? "18px" : "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },
    galleryGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
      gap: isMobile ? "1.5rem" : isTablet ? "1.5rem" : "2rem",
      width: "100%",
    },
    galleryItem: {
      background: "#0A0A0C",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
      transition: "all 0.3s ease",
      border: "1px solid rgba(255, 184, 0, 0.2)",
      width: "100%",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
    },
    premiumBadge: {
      position: "absolute",
      top: isMobile ? "8px" : "10px",
      right: isMobile ? "8px" : "10px",
      background: "rgba(255, 184, 0, 0.1)",
      color: "#FFB800",
      padding: isMobile ? "3px 6px" : "4px 8px",
      fontSize: isMobile ? "0.6rem" : "0.7rem",
      fontWeight: 900,
      borderRadius: "4px",
      zIndex: 3,
      letterSpacing: "0.5px",
      textTransform: "uppercase",
      border: "1px solid rgba(255, 184, 0, 0.3)",
    },
    itemContent: {
      padding: isMobile ? "1rem" : "1.25rem",
      width: "100%",
      boxSizing: "border-box",
      flex: 1,
      display: "flex",
      flexDirection: "column",
    },
    itemCategory: {
      fontSize: isMobile ? "0.65rem" : "0.75rem",
      fontWeight: 700,
      color: "#FFB800",
      textTransform: "uppercase",
      letterSpacing: "1px",
      marginBottom: isMobile ? "0.4rem" : "0.5rem",
    },
    itemTitle: {
      fontSize: isMobile ? "1rem" : "1.1rem",
      fontWeight: 900,
      color: "#FFFFFF",
      marginBottom: isMobile ? "0.5rem" : "0.75rem",
      lineHeight: 1.3,
    },
    itemDescription: {
      fontSize: isMobile ? "0.8rem" : "0.9rem",
      color: "#FAFAFA",
      opacity: 0.9,
      marginBottom: isMobile ? "0.75rem" : "1rem",
      lineHeight: 1.5,
      flex: 1,
    },
    itemDetails: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "0.5rem",
      marginBottom: isMobile ? "0.75rem" : "1rem",
      width: "100%",
    },
    serviceType: {
      fontSize: isMobile ? "0.75rem" : "0.85rem",
      fontWeight: 700,
      color: "#FFB800",
      background: "rgba(255, 184, 0, 0.1)",
      padding: isMobile ? "3px 8px" : "4px 10px",
      borderRadius: "4px",
      border: "1px solid rgba(255, 184, 0, 0.3)",
    },
    timeTaken: {
      fontSize: isMobile ? "0.75rem" : "0.85rem",
      fontWeight: 700,
      color: "#FFFFFF",
      display: "flex",
      alignItems: "center",
      gap: "3px",
      whiteSpace: "nowrap",
    },
    clientQuote: {
      fontSize: isMobile ? "0.8rem" : "0.9rem",
      fontStyle: "italic",
      color: "#FFB800",
      borderLeft: "2px solid #FFB800",
      paddingLeft: "0.75rem",
      marginTop: "auto",
      lineHeight: 1.5,
    },
    statsSection: {
      display: "grid",
      gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
      gap: isMobile ? "0.75rem" : "1rem",
      marginTop: isMobile ? "1.5rem" : "2rem",
      marginBottom: isMobile ? "1.5rem" : "2rem",
      width: "100%",
    },
    statCard: {
      background: "#0A0A0C",
      borderRadius: "8px",
      padding: isMobile ? "0.75rem" : "1rem",
      textAlign: "center",
      boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)",
      border: "1px solid rgba(255, 184, 0, 0.2)",
      width: "100%",
      boxSizing: "border-box",
    },
    statNumber: {
      fontSize: isMobile ? "1.25rem" : "1.5rem",
      fontWeight: 900,
      color: "#FFB800",
      marginBottom: isMobile ? "0.25rem" : "0.5rem",
      lineHeight: 1,
    },
    statLabel: {
      fontSize: isMobile ? "0.7rem" : "0.8rem",
      color: "#FAFAFA",
      opacity: 0.9,
      fontWeight: 600,
    },
    twoColumnLayout: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr",
      gap: isMobile ? "1.5rem" : "2rem",
      marginTop: isMobile ? "2rem" : "2.5rem",
      width: "100%",
    },
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const stats = [
    { number: "500+", label: "Homes Protected" },
    { number: "25+", label: "Years Experience" },
    { number: "24/7", label: "Emergency Service" },
    { number: "Lifetime", label: "Workmanship Warranty" },
  ];

  return (
    <div style={pageStyles.pageContainer}>
      <Header />
      
      <section style={pageStyles.heroSection}>
        <div style={pageStyles.heroContent}>
          <h1 style={pageStyles.heroTitle}>
            BRAVOS Roofing Portfolio
          </h1>
          <p style={pageStyles.heroSubtitle}>
            Excellence in Every Layer
          </p>
          <p style={pageStyles.heroText}>
            See the BRAVOS difference. Drag or tap the slider to compare before and after 
            of our premium roofing installations and repairs.
          </p>
        </div>
      </section>
      
      <main style={pageStyles.mainContent}>
        <div style={{ width: "100%", marginBottom: isMobile ? "1.5rem" : "2rem" }}>
          <h2 style={pageStyles.sectionTitle}>Our Roofing Transformations</h2>
          <p style={pageStyles.sectionSubtitle}>
            Browse our portfolio of completed roofing projects. Click on categories to filter by project type.
          </p>
          
          <div style={pageStyles.categoriesContainer}>
            {categories.map((category) => (
              <button
                key={category.id}
                style={pageStyles.categoryButton(
                  selectedCategory === category.id,
                  hoveredItem === parseInt(category.id.replace("cat", "") || "0")
                )}
                onClick={() => handleCategorySelect(category.id)}
                onMouseEnter={() => setHoveredItem(parseInt(category.id.replace("cat", "") || "0"))}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span>{category.name}</span>
                <span style={pageStyles.categoryCount}>{category.count}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div style={pageStyles.statsSection}>
          {stats.map((stat, index) => (
            <div key={index} style={pageStyles.statCard}>
              <div style={pageStyles.statNumber}>{stat.number}</div>
              <div style={pageStyles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div style={pageStyles.galleryGrid}>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              style={{
                ...pageStyles.galleryItem,
                transform: hoveredItem === item.id ? "translateY(-4px)" : "translateY(0)",
                boxShadow: hoveredItem === item.id ? "0 8px 25px rgba(0, 0, 0, 0.4)" : "0 4px 15px rgba(0, 0, 0, 0.3)",
              }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div style={{ position: "relative", width: "100%" }}>
                <div style={pageStyles.premiumBadge}>BRAVOS CERTIFIED</div>
                <ImageComparison
                  afterImage={item.beforeImage}
                  beforeImage={item.afterImage}
                  isMobile={isMobile}
                  isTablet={isTablet}
                />
              </div>
              
              <div style={pageStyles.itemContent}>
                <div style={pageStyles.itemCategory}>
                  {item.category.toUpperCase()}
                </div>
                <h3 style={pageStyles.itemTitle}>{item.title}</h3>
                <p style={pageStyles.itemDescription}>{item.description}</p>
                
                <div style={pageStyles.itemDetails}>
                  <span style={pageStyles.serviceType}>{item.serviceType}</span>
                  <span style={pageStyles.timeTaken}>⏱️ {item.timeTaken}</span>
                </div>
                
                <div style={pageStyles.clientQuote}>"{item.clientQuote}"</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Two Column Layout: Gallery + Contact Form */}
        <div style={pageStyles.twoColumnLayout}>
          {/* Left Column: CTA Section */}
          <div
            style={{
              background: "#0A0A0C",
              borderRadius: "10px",
              padding: isMobile ? "1.5rem 1rem" : isTablet ? "2rem 1.5rem" : "2.5rem 2rem",
              textAlign: "center",
              width: "100%",
              boxSizing: "border-box",
              borderTop: "4px solid #FFB800",
            }}
          >
            <h3
              style={{
                fontSize: isMobile ? "1.25rem" : isTablet ? "1.5rem" : "1.75rem",
                fontWeight: 900,
                color: "#FFFFFF",
                marginBottom: isMobile ? "0.75rem" : "1rem",
                lineHeight: 1.2,
              }}
            >
              Ready to Protect Your Home?
            </h3>
            <p
              style={{
                fontSize: isMobile ? "0.85rem" : isTablet ? "0.95rem" : "1.1rem",
                color: "#FAFAFA",
                opacity: 0.9,
                marginBottom: isMobile ? "1.25rem" : "1.5rem",
                maxWidth: "700px",
                margin: "0 auto",
                lineHeight: 1.5,
                padding: isMobile ? "0 0.5rem" : "0",
              }}
            >
              Get a free, no-obligation inspection and estimate from Houston's most trusted roofing contractor.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 4L12 14.01L9 11.01" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ color: "#FFFFFF", fontSize: "0.9rem" }}>Licensed & Insured</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15 9H22L16 14L19 21L12 16.5L5 21L8 14L2 9H9L12 2Z" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ color: "#FFFFFF", fontSize: "0.9rem" }}>5-Star Reviews</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 6V12L16 14" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ color: "#FFFFFF", fontSize: "0.9rem" }}>Lifetime Warranty</span>
              </div>
            </div>
          </div>
          
          {/* Right Column: Contact Form */}
          <ContactForm isMobile={isMobile} isTablet={isTablet} />
        </div>
      </main>
      
      
    </div>
  );
}