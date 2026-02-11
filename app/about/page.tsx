"use client";

import { useState, useEffect } from 'react';
import { Header, Footer } from '@/components/Layout';
 // Import your existing Footer

// ==================== MAIN ABOUT PAGE COMPONENT ====================
export default function AboutPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const aboutSections = [
    {
      id: 1,
      title: "Our Story & Legacy",
      subtitle: "Fort Worth's Most Trusted Roofing Experts Since 2005",
      description: "BRAVOS Roofing was born from a simple belief: every home deserves superior protection. What started as a family-owned operation with one truck and an unwavering commitment to quality has grown into Fort Worth's premier roofing company. For nearly two decades, we've weathered every storm alongside our community—literally. Our journey from local startup to industry leader is built on thousands of successful roof installations, countless emergency repairs, and enduring relationships with homeowners who trust us with their most valuable asset. We don't just install roofs; we safeguard memories, increase property value, and deliver peace of mind through craftsmanship that stands the test of time.",
      image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=800",
      stats: [
        { label: "Roofs Installed", value: "3,200+" },
        { label: "Years of Excellence", value: "19" },
        { label: "5-Star Reviews", value: "850+" },
        { label: "Warranties Issued", value: "2,800+" }
      ],
      flip: false,
      keywords: ["residential roofing", "commercial roofing", "storm damage repair", "roof installation", "roof replacement", "emergency roofing"]
    },
    {
      id: 2,
      title: "Our Installation Process",
      subtitle: "The BRAVOS Method: Engineered for Longevity",
      description: "We've perfected a 9-step installation protocol that exceeds manufacturer specifications and industry standards. It begins with a comprehensive inspection using drone technology and ends with a meticulous cleanup that leaves your property immaculate. Between those bookends, our certified crews execute each phase with surgical precision—from ice and water shield application to ridge vent installation and premium shingle placement. We don't cut corners because we know your roof is the only thing standing between your family and the Texas elements. Every BRAVOS roof is backed by enhanced labor warranties and our personal guarantee of satisfaction.",
      image: "https://images.unsplash.com/photo-1590577976322-3d2d6e2130d5?auto=format&fit=crop&w=800",
      features: [
        "Drone Inspection & 3D Measurement Technology",
        "Synthetic Underlayment & Ice/Water Protection",
        "Architectural Shingle Installation by GAF & CertainTeed",
        "Precision Flashing Around Chimneys & Vents",
        "Ridge Vent Installation for Optimal Attic Ventilation",
        "Magnetic Debris Sweep & Final Quality Audit"
      ],
      flip: true,
      keywords: ["roof installation", "shingle replacement", "flat roof", "metal roofing", "roof ventilation", "leak repair"]
    },
    {
      id: 3,
      title: "Our Certified Crew",
      subtitle: "Factory-Trained. Background-Checked. Proudly Local.",
      description: "The difference between a good roof and a great roof is the hands that install it. That's why every BRAVOS crew member undergoes 160 hours of supervised field training before leading a single project. We invest continuously in manufacturer certifications, safety education, and emerging technique mastery. Our lead foremen average 12+ years of experience and many have been with us since our first year in business. When you hire BRAVOS, you're not getting subcontractors or day laborers—you're getting career craftsmen who take genuine pride in Fort Worth's skyline, one ridge line at a time.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800",
      certifications: [
        "GAF Master Elite® Certified Contractors",
        "CertainTeed SELECT ShingleMaster™",
        "OSHA 10-Hour & 30-Hour Certified",
        "Fully Insured: Liability + Workers Comp",
        "Lead-Safe Certified (EPA RRP)",
        "Fort Worth Chamber of Commerce Member"
      ],
      flip: false,
      keywords: ["certified roofers", "licensed roofing contractor", "experienced roofers", "local roofing company", "family-owned", "trusted roofers"]
    },
    {
      id: 4,
      title: "Our Materials & Warranties",
      subtitle: "Premium Products Backed by Ironclad Protection",
      description: "A roof is only as strong as its weakest component. That's why BRAVOS exclusively partners with industry leaders like GAF and CertainTeed—manufacturers who share our obsession with durability. We utilize architectural shingles with algae resistance, Class 4 impact-rated options for hail protection, and 30-year warranty coverage as our baseline. Beyond manufacturer guarantees, we provide our own workmanship warranty because we believe in standing behind every nail we drive. From synthetic underlayment that outperforms traditional felt to copper flashing systems, every material selection is deliberate, tested, and purpose-built for North Texas weather.",
      image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=800",
      features: [
        "GAF Timberline HDZ® with LayerLock® Technology",
        "CertainTeed Landmark® Algae-Resistant Shingles",
        "Class 4 Impact-Resistant Options Available",
        "30-Year to Lifetime Manufacturer Warranties",
        "10-Year BRAVOS Workmanship Warranty",
        "Ice & Water Shield in Valleys & Eaves"
      ],
      flip: true,
      keywords: ["architectural shingles", "impact resistant shingles", "roof warranty", "GAF certified", "CertainTeed", "hail resistant roof"]
    }
  ];

  const coreValues = [
    { icon: "🛡", title: "Protection", description: "Your safety and security drive every decision we make" },
    { icon: "⚖", title: "Integrity", description: "Honest assessments, transparent pricing, no surprises" },
    { icon: "🔨", title: "Craftsmanship", description: "Meticulous attention to detail that outlasts trends" }
  ];

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/xqeedjny', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const pageStyles: any = {
    pageContainer: {
      minHeight: '100vh',
      background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.75) 0%, rgba(10, 10, 10, 0.8) 100%), url("https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1920")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      fontFamily: "'Inter', 'Poppins', sans-serif",
      width: '100%',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      overflow: 'hidden',
    },
    
    heroSection: {
      minHeight: isMobile ? '60vh' : '80vh',
      background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.7) 0%, rgba(20, 20, 20, 0.8) 100%), url("https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=1920")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '6rem 1rem 2rem' : '8rem 2rem 4rem',
      width: '100%',
      boxSizing: 'border-box',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '4px solid #FFB800',
    },
    
    heroPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255, 184, 0, 0.15) 2px, transparent 2px)',
      backgroundSize: '50px 50px',
      opacity: 0.3,
    },
    
    heroContent: {
      maxWidth: '1200px',
      width: '100%',
      textAlign: 'center',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 1,
    },
    
    heroTitle: {
      fontSize: isMobile ? '2.2rem' : isTablet ? '3rem' : '4rem',
      fontWeight: 900,
      color: '#FFFFFF',
      marginBottom: '1rem',
      textShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
      fontFamily: "'Playfair Display', serif",
      lineHeight: 1.1,
      width: '100%',
    },
    
    heroSubtitle: {
      fontSize: isMobile ? '1rem' : isTablet ? '1.3rem' : '1.6rem',
      fontWeight: 700,
      color: '#FFB800',
      marginBottom: '1.5rem',
      maxWidth: '800px',
      margin: '0 auto 1.5rem',
      lineHeight: 1.4,
      fontFamily: "'Playfair Display', serif",
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
      width: '100%',
    },
    
    heroText: {
      fontSize: isMobile ? '0.9rem' : '1.1rem',
      color: '#FAFAFA',
      opacity: 0.9,
      maxWidth: '700px',
      margin: '0 auto 2rem',
      lineHeight: 1.6,
      fontFamily: "'Inter', sans-serif",
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
      width: '100%',
    },
    
    heroStats: {
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
      gap: '1rem',
      maxWidth: '800px',
      margin: '2rem auto 0',
      width: '100%',
    },
    
    heroStat: {
      background: 'rgba(255, 184, 0, 0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '12px',
      padding: '1rem',
      border: '1px solid rgba(255, 184, 0, 0.3)',
      textAlign: 'center',
    },
    
    heroStatNumber: {
      fontSize: isMobile ? '1.5rem' : '2rem',
      fontWeight: 900,
      color: '#FFB800',
      marginBottom: '0.25rem',
      fontFamily: "'Playfair Display', serif",
    },
    
    heroStatLabel: {
      fontSize: isMobile ? '0.7rem' : '0.8rem',
      color: '#FFFFFF',
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    
    mainContent: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: isMobile ? '1.5rem 1rem' : '3rem 2rem',
      background: 'transparent',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 1,
    },
    
    sectionContainer: {
      marginBottom: isMobile ? '2rem' : '4rem',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative',
    },
    
    sectionBackground: (index: number) => {
      const backgrounds = [
        'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(10,10,10,0.75) 100%)',
        'linear-gradient(135deg, rgba(10,10,10,0.7) 0%, rgba(20,20,20,0.75) 100%)',
        'linear-gradient(135deg, rgba(5,5,5,0.7) 0%, rgba(15,15,15,0.75) 100%)',
        'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(10,10,10,0.75) 100%)'
      ];
      return {
        background: backgrounds[index % backgrounds.length],
        backdropFilter: 'blur(12px)',
        borderRadius: '24px',
        padding: isMobile ? '1.5rem' : '3rem',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
        border: '1px solid rgba(255, 184, 0, 0.2)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: hoveredIndex === index ? 'translateY(-8px)' : 'translateY(0)',
      };
    },
    
    decorativeElement: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      width: '60px',
      height: '60px',
      background: 'rgba(255, 184, 0, 0.1)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
      color: '#FFB800',
      opacity: 0.3,
    },
    
    section: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? '1.5rem' : '3rem',
      alignItems: 'center',
      width: '100%',
      marginBottom: isMobile ? '2rem' : '3rem',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 1,
    },
    
    imageContainer: {
      width: '100%',
      height: isMobile ? '250px' : '400px',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 15px 50px rgba(0, 0, 0, 0.3)',
      boxSizing: 'border-box',
      position: 'relative',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      border: '1px solid rgba(255, 184, 0, 0.3)',
    },
    
    imageOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(45deg, rgba(0,0,0,0.4) 0%, rgba(255,184,0,0.1) 100%)',
      opacity: 0,
      transition: 'opacity 0.3s ease',
    },
    
    sectionImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    
    contentContainer: {
      width: '100%',
      padding: '0',
      boxSizing: 'border-box',
    },
    
    sectionTitle: {
      fontSize: isMobile ? '1.5rem' : '2.2rem',
      fontWeight: 900,
      color: '#FFFFFF',
      marginBottom: '0.5rem',
      fontFamily: "'Playfair Display', serif",
      width: '100%',
      lineHeight: 1.2,
    },
    
    sectionSubtitle: {
      fontSize: isMobile ? '1rem' : '1.3rem',
      fontWeight: 700,
      color: '#FFB800',
      marginBottom: '1rem',
      fontFamily: "'Playfair Display', serif",
      width: '100%',
    },
    
    sectionDescription: {
      fontSize: isMobile ? '0.9rem' : '1.1rem',
      color: '#FAFAFA',
      opacity: 0.9,
      lineHeight: 1.7,
      marginBottom: '1.5rem',
      fontFamily: "'Inter', sans-serif",
      width: '100%',
    },
    
    keywordTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginBottom: '1.5rem',
    },
    
    keywordTag: {
      fontSize: '0.7rem',
      fontWeight: 600,
      color: '#FFB800',
      padding: '0.4rem 0.8rem',
      background: 'rgba(255, 184, 0, 0.1)',
      borderRadius: '20px',
      border: '1px solid rgba(255, 184, 0, 0.3)',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(2, 1fr)',
      gap: '1rem',
      marginTop: '1.5rem',
      width: '100%',
    },
    
    statItem: {
      background: 'rgba(0,0,0,0.5)',
      backdropFilter: 'blur(8px)',
      borderRadius: '12px',
      padding: isMobile ? '0.75rem' : '1rem',
      textAlign: 'center',
      border: '1px solid rgba(255, 184, 0, 0.2)',
      width: '100%',
      boxSizing: 'border-box',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
      transition: 'all 0.3s ease',
    },
    
    statValue: {
      fontSize: isMobile ? '1.5rem' : '2rem',
      fontWeight: 900,
      color: '#FFB800',
      marginBottom: '0.25rem',
      fontFamily: "'Playfair Display', serif",
      width: '100%',
    },
    
    statLabel: {
      fontSize: isMobile ? '0.75rem' : '0.85rem',
      color: '#FAFAFA',
      opacity: 0.9,
      fontWeight: 500,
      fontFamily: "'Inter', sans-serif",
      width: '100%',
    },
    
    featuresList: {
      listStyle: 'none',
      padding: 0,
      margin: '1.5rem 0',
      width: '100%',
    },
    
    featureItem: {
      fontSize: isMobile ? '0.9rem' : '1rem',
      color: '#FAFAFA',
      opacity: 0.9,
      marginBottom: '0.75rem',
      paddingLeft: '0',
      fontFamily: "'Inter', sans-serif",
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.75rem',
      width: '100%',
      padding: '0.5rem',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
    },
    
    featureIcon: {
      color: '#FFB800',
      fontWeight: 'bold',
      flexShrink: 0,
      marginTop: '2px',
    },
    
    certificationsGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
      gap: '0.75rem',
      marginTop: '1.5rem',
      width: '100%',
    },
    
    certificationItem: {
      fontSize: isMobile ? '0.85rem' : '1rem',
      color: '#FAFAFA',
      opacity: 0.9,
      padding: isMobile ? '0.75rem' : '1rem',
      background: 'rgba(255, 184, 0, 0.1)',
      borderRadius: '12px',
      border: '1px solid rgba(255, 184, 0, 0.2)',
      fontFamily: "'Inter', sans-serif",
      width: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease',
    },
    
    certificationIcon: {
      color: '#FFB800',
      flexShrink: 0,
    },
    
    missionSection: {
      background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(10,10,10,0.85) 100%)',
      backdropFilter: 'blur(12px)',
      borderRadius: '24px',
      padding: isMobile ? '2rem 1rem' : '3rem 2rem',
      margin: '4rem 0',
      width: '100%',
      boxSizing: 'border-box',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
      border: '1px solid rgba(255, 184, 0, 0.3)',
    },
    
    missionPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'radial-gradient(circle at 30% 30%, rgba(255, 184, 0, 0.1) 2px, transparent 2px)',
      backgroundSize: '40px 40px',
      opacity: 0.5,
    },
    
    missionContent: {
      position: 'relative',
      zIndex: 1,
    },
    
    missionTitle: {
      fontSize: isMobile ? '1.5rem' : '2.5rem',
      fontWeight: 900,
      color: '#FFFFFF',
      marginBottom: '1rem',
      fontFamily: "'Playfair Display', serif",
      width: '100%',
    },
    
    missionStatement: {
      fontSize: isMobile ? '1rem' : '1.3rem',
      color: '#FFB800',
      fontStyle: 'italic',
      lineHeight: 1.6,
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: "'Playfair Display', serif",
      width: '100%',
    },
    
    valuesSection: {
      margin: '4rem 0',
      width: '100%',
      boxSizing: 'border-box',
    },
    
    valuesTitle: {
      fontSize: isMobile ? '1.5rem' : '2.2rem',
      fontWeight: 900,
      color: '#FFFFFF',
      marginBottom: '2rem',
      textAlign: 'center',
      fontFamily: "'Playfair Display', serif",
      width: '100%',
    },
    
    valuesGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
      gap: '1.5rem',
      width: '100%',
    },
    
    valueCard: {
      background: 'rgba(0,0,0,0.6)',
      backdropFilter: 'blur(12px)',
      borderRadius: '16px',
      padding: '2rem',
      textAlign: 'center',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      border: '1px solid rgba(255, 184, 0, 0.2)',
      transition: 'all 0.3s ease',
    },
    
    valueIcon: {
      width: '60px',
      height: '60px',
      background: 'rgba(255, 184, 0, 0.1)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1rem',
      color: '#FFB800',
      fontSize: '24px',
      border: '2px solid rgba(255, 184, 0, 0.3)',
    },
    
    valueTitle: {
      fontSize: '1.2rem',
      fontWeight: 900,
      color: '#FFFFFF',
      marginBottom: '0.5rem',
      fontFamily: "'Playfair Display', serif",
    },
    
    valueDescription: {
      fontSize: '0.9rem',
      color: '#FAFAFA',
      opacity: 0.9,
      lineHeight: 1.5,
      fontFamily: "'Inter', sans-serif",
    },
    
    ctaSection: {
      textAlign: 'center',
      padding: isMobile ? '2rem 1rem' : '3rem 2rem',
      width: '100%',
      boxSizing: 'border-box',
      background: 'rgba(0,0,0,0.7)',
      backdropFilter: 'blur(12px)',
      borderRadius: '24px',
      margin: '4rem 0',
      position: 'relative',
      overflow: 'hidden',
      border: '1px solid rgba(255, 184, 0, 0.3)',
    },
    
    ctaPattern: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255, 184, 0, 0.1) 2px, transparent 2px)',
      backgroundSize: '60px 60px',
      opacity: 0.5,
    },
    
    ctaContent: {
      position: 'relative',
      zIndex: 1,
    },
    
    ctaTitle: {
      fontSize: isMobile ? '1.5rem' : '2.5rem',
      fontWeight: 900,
      color: '#FFFFFF',
      marginBottom: '1rem',
      fontFamily: "'Playfair Display', serif",
      width: '100%',
    },
    
    ctaText: {
      fontSize: isMobile ? '1rem' : '1.2rem',
      color: '#FAFAFA',
      opacity: 0.9,
      marginBottom: '1.5rem',
      maxWidth: '600px',
      margin: '0 auto 2rem',
      fontFamily: "'Inter', sans-serif",
      lineHeight: 1.6,
      width: '100%',
    },
    
    formContainer: {
      background: '#FFFFFF',
      padding: isMobile ? '1.5rem' : '2.5rem',
      borderRadius: '20px',
      maxWidth: '700px',
      margin: '0 auto',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
      border: '1px solid rgba(255, 184, 0, 0.3)',
    },
    
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
      width: '100%',
    },
    
    formRow: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: '1rem',
    },
    
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      width: '100%',
    },
    
    formLabel: {
      fontSize: '0.85rem',
      fontWeight: 600,
      color: '#001E50',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    
    formInput: {
      width: '100%',
      padding: '0.9rem 1rem',
      border: '1px solid rgba(0,0,0,0.1)',
      borderRadius: '8px',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      boxSizing: 'border-box',
      fontFamily: "'Inter', sans-serif",
    },
    
    formTextarea: {
      width: '100%',
      padding: '0.9rem 1rem',
      border: '1px solid rgba(0,0,0,0.1)',
      borderRadius: '8px',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      boxSizing: 'border-box',
      fontFamily: "'Inter', sans-serif",
      resize: 'vertical',
      minHeight: '120px',
    },
    
    formButton: {
      background: 'linear-gradient(135deg, #FFB800 0%, #E6A600 100%)',
      color: '#000000',
      border: 'none',
      padding: isMobile ? '1rem' : '1.25rem',
      fontSize: isMobile ? '1rem' : '1.1rem',
      fontWeight: 900,
      borderRadius: '30px',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      letterSpacing: '0.5px',
      boxShadow: '0 8px 25px rgba(255, 184, 0, 0.3)',
      fontFamily: "'Playfair Display', serif",
      textDecoration: 'none',
      display: 'inline-block',
      width: '100%',
      marginTop: '0.5rem',
      borderTop: '4px solid #FFB800',
    },
    
    formStatus: {
      padding: '1rem',
      borderRadius: '8px',
      marginTop: '1rem',
      textAlign: 'center',
      fontWeight: 600,
    },
    
    formStatusSuccess: {
      background: 'rgba(0, 200, 0, 0.1)',
      color: '#00A000',
      border: '1px solid #00A000',
    },
    
    formStatusError: {
      background: 'rgba(255, 0, 0, 0.1)',
      color: '#FF0000',
      border: '1px solid #FF0000',
    },
    
    mobileOrder: (flip: boolean) => ({
      order: isMobile ? (flip ? 1 : 0) : 0,
    }),
  };

  // Event handlers
  const handleImageHover = (e: React.MouseEvent<HTMLDivElement>, isHovering: boolean) => {
    const imageContainer = e.currentTarget;
    const overlay = imageContainer.querySelector('[data-overlay]') as HTMLElement;
    const image = imageContainer.querySelector('img') as HTMLImageElement;
    
    if (overlay && image) {
      imageContainer.style.transform = isHovering ? 'scale(1.02)' : 'scale(1)';
      overlay.style.opacity = isHovering ? '1' : '0';
      image.style.transform = isHovering ? 'scale(1.1)' : 'scale(1)';
    }
  };

  const handleStatHover = (e: React.MouseEvent<HTMLDivElement>, isHovering: boolean) => {
    e.currentTarget.style.transform = isHovering ? 'translateY(-4px)' : 'translateY(0)';
    e.currentTarget.style.boxShadow = isHovering ? '0 8px 25px rgba(255,184,0,0.2)' : '0 4px 15px rgba(0,0,0,0.2)';
  };

  const handleFeatureHover = (e: React.MouseEvent<HTMLLIElement>, isHovering: boolean) => {
    e.currentTarget.style.background = isHovering ? 'rgba(255, 184, 0, 0.1)' : 'transparent';
  };

  const handleCertificationHover = (e: React.MouseEvent<HTMLDivElement>, isHovering: boolean) => {
    e.currentTarget.style.background = isHovering ? 'rgba(255, 184, 0, 0.2)' : 'rgba(255, 184, 0, 0.1)';
    e.currentTarget.style.transform = isHovering ? 'translateX(4px)' : 'translateX(0)';
  };

  const handleValueCardHover = (e: React.MouseEvent<HTMLDivElement>, isHovering: boolean) => {
    e.currentTarget.style.transform = isHovering ? 'translateY(-8px)' : 'translateY(0)';
    e.currentTarget.style.boxShadow = isHovering ? '0 20px 40px rgba(0,0,0,0.3)' : '0 10px 30px rgba(0,0,0,0.2)';
  };

  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>, isHovering: boolean) => {
    e.currentTarget.style.transform = isHovering ? 'translateY(-4px) scale(1.02)' : 'translateY(0) scale(1)';
    e.currentTarget.style.boxShadow = isHovering ? '0 15px 35px rgba(255,184,0,0.4)' : '0 8px 25px rgba(255,184,0,0.3)';
  };

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = '#FFB800';
    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255,184,0,0.1)';
    e.currentTarget.style.outline = 'none';
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)';
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <div style={pageStyles.pageContainer}>
      <Header /> {/* Your existing Header component */}
      
      <section style={pageStyles.heroSection}>
        <div style={pageStyles.heroPattern}></div>
        <div style={pageStyles.heroContent}>
          <h1 style={pageStyles.heroTitle}>
            BRAVOS Roofing & Exteriors
          </h1>
          <p style={pageStyles.heroSubtitle}>
            Fort Worth's Premier Roofing Authority — Built on Integrity, Secured by Craftsmanship
          </p>
          <p style={pageStyles.heroText}>
            Since 2005, BRAVOS has protected North Texas homes with superior materials, 
            factory-trained crews, and warranties that outlast the competition. Whether 
            you need a complete roof replacement, emergency storm repair, or routine 
            maintenance, we deliver the quality your family deserves.
          </p>
          
          <div style={pageStyles.heroStats}>
            {aboutSections[0]?.stats?.map((stat, index) => (
              <div key={index} style={pageStyles.heroStat}>
                <div style={pageStyles.heroStatNumber}>{stat.value}</div>
                <div style={pageStyles.heroStatLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <main style={pageStyles.mainContent}>
        {/* About Sections */}
        {aboutSections.map((section, index) => (
          <div 
            key={section.id} 
            style={pageStyles.sectionContainer}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div style={pageStyles.sectionBackground(index)}>
              <div style={pageStyles.decorativeElement}>
                {section.id}
              </div>
              
              <div style={pageStyles.section}>
                {/* Image */}
                <div 
                  style={{
                    ...pageStyles.imageContainer,
                    ...pageStyles.mobileOrder(section.flip)
                  }}
                  onMouseEnter={(e) => handleImageHover(e, true)}
                  onMouseLeave={(e) => handleImageHover(e, false)}
                >
                  <img 
                    src={section.image} 
                    alt={section.title}
                    style={pageStyles.sectionImage}
                  />
                  <div style={pageStyles.imageOverlay} data-overlay></div>
                </div>
                
                {/* Content */}
                <div style={pageStyles.contentContainer}>
                  <h2 style={pageStyles.sectionTitle}>{section.title}</h2>
                  <p style={pageStyles.sectionSubtitle}>{section.subtitle}</p>
                  <p style={pageStyles.sectionDescription}>{section.description}</p>
                  
                  {/* Keyword Tags */}
                  {section.keywords && (
                    <div style={pageStyles.keywordTags}>
                      {section.keywords.map((keyword, idx) => (
                        <span key={idx} style={pageStyles.keywordTag}>{keyword}</span>
                      ))}
                    </div>
                  )}
                  
                  {/* Stats for Our Story */}
                  {section.id === 1 && (
                    <div style={pageStyles.statsGrid}>
                      {section.stats?.map((stat, statIndex) => (
                        <div 
                          key={statIndex} 
                          style={pageStyles.statItem}
                          onMouseEnter={(e) => handleStatHover(e, true)}
                          onMouseLeave={(e) => handleStatHover(e, false)}
                        >
                          <div style={pageStyles.statValue}>{stat.value}</div>
                          <div style={pageStyles.statLabel}>{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Features for Installation Process */}
                  {section.id === 2 && (
                    <ul style={pageStyles.featuresList}>
                      {section.features?.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex} 
                          style={pageStyles.featureItem}
                          onMouseEnter={(e) => handleFeatureHover(e, true)}
                          onMouseLeave={(e) => handleFeatureHover(e, false)}
                        >
                          <span style={pageStyles.featureIcon}>✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {/* Certifications for Our Crew */}
                  {section.id === 3 && (
                    <div style={pageStyles.certificationsGrid}>
                      {section.certifications?.map((cert, certIndex) => (
                        <div 
                          key={certIndex} 
                          style={pageStyles.certificationItem}
                          onMouseEnter={(e) => handleCertificationHover(e, true)}
                          onMouseLeave={(e) => handleCertificationHover(e, false)}
                        >
                          <span style={pageStyles.certificationIcon}>🛡</span> 
                          <span>{cert}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Features for Materials */}
                  {section.id === 4 && (
                    <ul style={pageStyles.featuresList}>
                      {section.features?.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex} 
                          style={pageStyles.featureItem}
                          onMouseEnter={(e) => handleFeatureHover(e, true)}
                          onMouseLeave={(e) => handleFeatureHover(e, false)}
                        >
                          <span style={pageStyles.featureIcon}>🏆</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Core Values */}
        <div style={pageStyles.valuesSection}>
          <h2 style={pageStyles.valuesTitle}>The BRAVOS Standard</h2>
          <div style={pageStyles.valuesGrid}>
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                style={pageStyles.valueCard}
                onMouseEnter={(e) => handleValueCardHover(e, true)}
                onMouseLeave={(e) => handleValueCardHover(e, false)}
              >
                <div style={pageStyles.valueIcon}>
                  <span>{value.icon}</span>
                </div>
                <h3 style={pageStyles.valueTitle}>{value.title}</h3>
                <p style={pageStyles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mission Statement */}
        <div style={pageStyles.missionSection}>
          <div style={pageStyles.missionPattern}></div>
          <div style={pageStyles.missionContent}>
            <h2 style={pageStyles.missionTitle}>Our Promise to Fort Worth</h2>
            <p style={pageStyles.missionStatement}>
              &quot;To deliver roof systems that outlast their warranties and craftsmanship 
              that exceeds expectations—treating every home as if it were our own, 
              with transparency, integrity, and an obsessive attention to weathertight perfection.&quot;
            </p>
          </div>
        </div>
        
        {/* Call to Action - INSTANT QUOTE FORM */}
        <div style={pageStyles.ctaSection}>
          <div style={pageStyles.ctaPattern}></div>
          <div style={pageStyles.ctaContent}>
            <h2 style={pageStyles.ctaTitle}>Get Your Free Roofing Estimate</h2>
            <p style={pageStyles.ctaText}>
              No obligation. No pressure. Just honest advice and a precise quote from Fort Worth's most trusted roofers.
            </p>
            
            <div style={pageStyles.formContainer}>
              <form 
                onSubmit={handleFormSubmit} 
                style={pageStyles.form}
                action="https://formspree.io/f/xqeedjny"
                method="POST"
              >
                <div style={pageStyles.formRow}>
                  <div style={pageStyles.formGroup}>
                    <label htmlFor="fullName" style={pageStyles.formLabel}>Full Name *</label>
                    <input 
                      type="text" 
                      id="fullName" 
                      name="fullName" 
                      required 
                      style={pageStyles.formInput}
                      placeholder="John Smith"
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    />
                  </div>
                  <div style={pageStyles.formGroup}>
                    <label htmlFor="email" style={pageStyles.formLabel}>Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      style={pageStyles.formInput}
                      placeholder="john@example.com"
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    />
                  </div>
                </div>
                
                <div style={pageStyles.formRow}>
                  <div style={pageStyles.formGroup}>
                    <label htmlFor="phone" style={pageStyles.formLabel}>Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required 
                      style={pageStyles.formInput}
                      placeholder="(817) 555-1234"
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    />
                  </div>
                  <div style={pageStyles.formGroup}>
                    <label htmlFor="zipCode" style={pageStyles.formLabel}>ZIP Code *</label>
                    <input 
                      type="text" 
                      id="zipCode" 
                      name="zipCode" 
                      required 
                      style={pageStyles.formInput}
                      placeholder="76102"
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    />
                  </div>
                </div>
                
                <div style={pageStyles.formGroup}>
                  <label htmlFor="message" style={pageStyles.formLabel}>Tell Us About Your Project</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    style={pageStyles.formTextarea}
                    placeholder="Roof age, damage type, preferred shingle color, or any questions..."
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                </div>
                
                <input type="hidden" name="_subject" value="New Roofing Estimate Request from BRAVOS Website" />
                <input type="text" name="_gotcha" style={{ display: 'none' }} />
                
                <button 
                  type="submit"
                  style={pageStyles.formButton}
                  onMouseEnter={(e) => handleButtonHover(e, true)}
                  onMouseLeave={(e) => handleButtonHover(e, false)}
                  disabled={formStatus === 'loading'}
                >
                  {formStatus === 'loading' ? 'Sending...' : 'Request My Free Quote →'}
                </button>
                
                {formStatus === 'success' && (
                  <div style={{...pageStyles.formStatus, ...pageStyles.formStatusSuccess}}>
                    ✓ Thank you! A BRAVOS estimator will contact you within 4 hours.
                  </div>
                )}
                
                {formStatus === 'error' && (
                  <div style={{...pageStyles.formStatus, ...pageStyles.formStatusError}}>
                    ⚠ Something went wrong. Please call us at (817) 555-BRAVOS.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer /> {/* Your existing Footer component */}
    </div>
  );
}