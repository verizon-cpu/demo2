"use client";

import { useState, useEffect, FormEvent, ChangeEvent, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';

// MicroInteraction Component - Image Logo for attention grabbing
const MicroInteraction = ({ 
  src = "/image/roofimg.png", // Default path - replace with your actual logo
  width = 32, 
  height = 32,
  style = {}
}) => {
  return (
    <img
      src={src}
      alt="BRAVOS Logo"
      style={{
        position: 'absolute',
        top: '-4000px',
        right: '100px',
        zIndex: 20,
        pointerEvents: 'none',
        width: `${width}px`,
        height: `${height}px`,
        objectFit: 'contain',
        ...style
      }}
    />
  );
};

// Bottom CTA Buttons Component - UPDATED FOR ROOFING
interface BottomCTAButtonsProps {
  onCallClick?: () => void;
  onQuoteClick?: () => void;
  onBookClick?: () => void;
  phoneNumber?: string;
  callText?: string;
  quoteText?: string;
  bookText?: string;
  containerStyle?: React.CSSProperties;
  buttonStyle?: React.CSSProperties;
  showPhoneIcon?: boolean;
  showQuoteIcon?: boolean;
  showBookIcon?: boolean;
}

function BottomCTAButtons({
  onCallClick = () => window.location.href = '/contact',
  onQuoteClick = () => window.location.href = '/contact',
  onBookClick = () => window.location.href = '/contact',
  phoneNumber = '(281) 555-1234',
  callText = 'Call Now',
  quoteText = 'Free Quote',
  bookText = 'Schedule',
  containerStyle = {},
  buttonStyle = {},
  showPhoneIcon = true,
  showQuoteIcon = true,
  showBookIcon = true
}: BottomCTAButtonsProps) {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCallClick = () => {
    if (onCallClick) {
      onCallClick();
    } else {
      window.location.href = 'tel:' + phoneNumber.replace(/[^\d+]/g, '');
    }
  };

  const handleQuoteClick = () => {
    if (onQuoteClick) {
      onQuoteClick();
    } else {
      window.location.href = '/contact';
    }
  };

  const handleBookClick = () => {
    if (onBookClick) {
      onBookClick();
    } else {
      window.location.href = '/contact';
    }
  };

  const baseButtonStyle: React.CSSProperties = {
    width: isMobile ? '90px' : '105px',
    height: isMobile ? '40px' : '45px',
    borderRadius: '25px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: "'Inter', sans-serif",
    fontWeight: 700,
    fontSize: isMobile ? '10px' : '11px',
    letterSpacing: '0.5px',
    textTransform: 'uppercase' as const,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    ...buttonStyle
  };

  const callButtonStyle: React.CSSProperties = {
    ...baseButtonStyle,
    background: 'linear-gradient(135deg, #FFB800 0%, #E6A600 100%)',
    color: '#0A0A0C',
    boxShadow: '0 4px 15px rgba(255, 184, 0, 0.4)',
  };

  const quoteButtonStyle: React.CSSProperties = {
    ...baseButtonStyle,
    background: 'linear-gradient(135deg, #0A0A0C 0%, #1A1A1E 100%)',
    color: '#FFFFFF',
    boxShadow: '0 4px 15px rgba(10, 10, 12, 0.4)',
  };

  const bookButtonStyle: React.CSSProperties = {
    ...baseButtonStyle,
    background: 'linear-gradient(135deg, #FFB800 0%, #E6A600 100%)',
    color: '#0A0A0C',
    boxShadow: '0 4px 15px rgba(255, 184, 0, 0.4)',
  };

  const buttonHoverStyle: React.CSSProperties = {
    transform: 'translateY(-3px) scale(1.05)',
  };

  const callHoverStyle: React.CSSProperties = {
    ...buttonHoverStyle,
    boxShadow: '0 8px 20px rgba(255, 184, 0, 0.6)',
    background: 'linear-gradient(135deg, #FFC233 0%, #FFB800 100%)',
  };

  const quoteHoverStyle: React.CSSProperties = {
    ...buttonHoverStyle,
    boxShadow: '0 8px 20px rgba(10, 10, 12, 0.6)',
    background: 'linear-gradient(135deg, #1A1A1E 0%, #0A0A0C 100%)',
  };

  const bookHoverStyle: React.CSSProperties = {
    ...buttonHoverStyle,
    boxShadow: '0 8px 20px rgba(255, 184, 0, 0.6)',
    background: 'linear-gradient(135deg, #FFC233 0%, #FFB800 100%)',
  };

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: isMobile ? '10px' : '15px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: isMobile ? '6px' : '8px',
        zIndex: 9999,
        pointerEvents: 'auto',
        background: 'rgba(10, 10, 12, 0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: '50px',
        padding: isMobile ? '6px' : '8px',
        boxShadow: '0 8px 30px rgba(10, 10, 12, 0.4)',
        border: '1px solid rgba(255, 184, 0, 0.3)',
        width: isMobile ? 'calc(100vw - 20px)' : 'calc(100vw - 30px)',
        maxWidth: '500px',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
        transition: 'all 0.3s ease',
        ...containerStyle
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateX(-50%) translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 15px 40px rgba(10, 10, 12, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateX(-50%) translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 30px rgba(10, 10, 12, 0.4)';
      }}
    >
      <button
        onClick={handleCallClick}
        onMouseEnter={() => setHoveredButton('call')}
        onMouseLeave={() => setHoveredButton(null)}
        style={{
          ...callButtonStyle,
          ...(hoveredButton === 'call' ? callHoverStyle : {})
        }}
      >
        <span style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: isMobile ? '4px' : '5px' }}>
          {showPhoneIcon && (
            <svg width={isMobile ? "12" : "14"} height={isMobile ? "12" : "14"} viewBox="0 0 24 24" fill="none">
              <path d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z" fill="#0A0A0C"/>
              <path d="M13 8C15.103 8 16 8.897 16 11H18C18 7.774 16.225 6 13 6V8ZM16.422 13.443C16.229 13.268 15.978 13.192 15.727 13.192C15.476 13.192 15.225 13.268 15.031 13.443L13.638 14.828C13.174 14.559 12.639 14.346 12.077 14.195C11.516 14.044 10.953 13.971 10.413 13.971C9.873 13.971 9.311 14.044 8.749 14.195C8.188 14.346 7.653 14.559 7.189 14.828L5.796 13.443C5.603 13.268 5.352 13.192 5.101 13.192C4.85 13.192 4.599 13.268 4.405 13.443L2.69 15.145C2.497 15.32 2.4 15.572 2.4 15.824C2.4 16.076 2.497 16.328 2.69 16.503L5.574 19.4C6.985 20.812 8.947 21.6 11.038 21.6C13.13 21.6 15.091 20.812 16.502 19.4L19.386 16.503C19.58 16.328 19.676 16.076 19.676 15.824C19.676 15.572 19.58 15.32 19.386 15.145L17.672 13.443H16.422Z" fill="#0A0A0C"/>
            </svg>
          )}
          {callText}
        </span>
      </button>

      <button
        onClick={handleQuoteClick}
        onMouseEnter={() => setHoveredButton('quote')}
        onMouseLeave={() => setHoveredButton(null)}
        style={{
          ...quoteButtonStyle,
          ...(hoveredButton === 'quote' ? quoteHoverStyle : {})
        }}
      >
        <span style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: isMobile ? '4px' : '5px' }}>
          {showQuoteIcon && (
            <svg width={isMobile ? "12" : "14"} height={isMobile ? "12" : "14"} viewBox="0 0 24 24" fill="none">
              <path d="M9 12H15M12 9V15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
          {quoteText}
        </span>
      </button>

      <button
        onClick={handleBookClick}
        onMouseEnter={() => setHoveredButton('book')}
        onMouseLeave={() => setHoveredButton(null)}
        style={{
          ...bookButtonStyle,
          ...(hoveredButton === 'book' ? bookHoverStyle : {})
        }}
      >
        <span style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: isMobile ? '4px' : '5px' }}>
          {showBookIcon && (
            <svg width={isMobile ? "12" : "14"} height={isMobile ? "12" : "14"} viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#0A0A0C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
          {bookText}
        </span>
      </button>
    </div>
  );
}

const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);
  
  // Formspree integration
  const [state, handleSubmit] = useForm("xqeedjny");
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    zipCode: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [activeMobileItem, setActiveMobileItem] = useState<string | null>(null);
  const [activeMobileService, setActiveMobileService] = useState<number | null>(null);
  const [excellenceBadgeActive, setExcellenceBadgeActive] = useState(false);
  const [googleBadgeActive, setGoogleBadgeActive] = useState(false);
  const [googleReviewsActive, setGoogleReviewsActive] = useState(false);
  const [trustCardActive, setTrustCardActive] = useState<number | null>(null);
  const [submitButtonActive, setSubmitButtonActive] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const checkScreenSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
      setIsSmallMobile(width < 480);
      
      if (!isMobile) {
        setIsMobileMenuOpen(false);
        setMobileServicesOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkScreenSize);
    window.addEventListener('orientationchange', checkScreenSize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('orientationchange', checkScreenSize);
    };
  }, []);

  // Reset form status after 5 seconds
  useEffect(() => {
    if (formStatus === 'success' || formStatus === 'error') {
      const timer = setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [formStatus]);

  const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitButtonActive(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xqeedjny', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setFormStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          zipCode: '',
          message: ''
        });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    } finally {
      setSubmitButtonActive(false);
    }
  };

  const handleGoogleReviewsClick = () => {
    window.open("https://g.page/r/YOUR_GOOGLE_REVIEWS_LINK", '_blank');
  };
  
  const services = [
    { name: "Residential Roofing", url: "/residential-roofing" },
    { name: "Commercial Roofing", url: "/commercial-roofing" },
    { name: "Roof Repair", url: "/roof-repair" },
    { name: "Emergency Services", url: "/emergency-services" },
    { name: "Roof Inspection", url: "/roof-inspection" },
    { name: "Storm Damage", url: "/storm-damage" }
  ];

  const handleTouchStart = (setter: (value: any) => void, value: any) => {
    setter(value);
  };

  const handleTouchEnd = (setter: (value: any) => void, resetValue: any = null) => {
    setTimeout(() => setter(resetValue), 150);
  };

  // BRAVOS Colors
  const colors = {
    background: '#0A0A0C',
    gold: '#FFB800',
    goldLight: 'rgba(255, 184, 0, 0.1)',
    goldBorder: 'rgba(255, 184, 0, 0.3)',
    white: '#FFFFFF',
    softWhite: '#FAFAFA',
    softWhite70: 'rgba(250, 250, 250, 0.7)',
    softWhite90: 'rgba(250, 250, 250, 0.9)',
  };

  const baseStyles: any = {
    heroSection: {
      position: 'relative',
      minHeight: '100dvh',
      backgroundColor: colors.background,
      overflow: 'hidden',
      fontFamily: "'Inter', sans-serif",
      width: '100%',
      maxWidth: '100vw',
      boxSizing: 'border-box',
      borderTop: '4px solid #FFB800',
    },

    backgroundContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'url("/image/roofer.png")',
      backgroundSize: 'cover',
      backgroundPosition: isMobile ? 'center 30%' : 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: isMobile ? 'scroll' : 'fixed',
      zIndex: 1,
      width: '100%',
      height: '100%',
      minHeight: '100%',
    },
    
    overlayGradient: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(10, 10, 12, 0.60) 0%, rgba(10, 10, 12, 0.50) 100%)',
      zIndex: 2,
    },

    heroContent: {
      position: 'relative',
      zIndex: 10,
      paddingTop: isMobile ? (isSmallMobile ? '100px' : '120px') : '140px',
      paddingBottom: isMobile ? (isSmallMobile ? '60px' : '80px') : '80px',
      minHeight: 'calc(100dvh - 60px)',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: isMobile ? (isSmallMobile ? '16px' : '20px') : '40px',
      paddingRight: isMobile ? (isSmallMobile ? '16px' : '20px') : '40px',
      width: '100%',
      boxSizing: 'border-box',
      justifyContent: 'center',
    },
    
    heroGrid: {
      maxWidth: '1280px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? (isSmallMobile ? '1.5rem' : '2rem') : '4rem',
      alignItems: isMobile ? 'flex-start' : 'center',
      width: '100%',
    },
    
    leftColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? (isSmallMobile ? '1rem' : '1.5rem') : '2rem',
      width: '100%',
    },

    excellenceBadge: (active: boolean) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: isSmallMobile ? 'center' : 'flex-start',
      gap: isMobile ? (isSmallMobile ? '0.4rem' : '0.5rem') : '1rem',
      backgroundColor: colors.goldLight,
      border: `2px solid ${colors.goldBorder}`,
      borderRadius: isSmallMobile ? '40px' : '60px',
      padding: isMobile ? (isSmallMobile ? '0.4rem 0.6rem' : '0.6rem 0.8rem') : '1rem 1.5rem',
      width: '100%',
      maxWidth: '100%',
      boxSizing: 'border-box',
      backdropFilter: 'blur(10px)',
      boxShadow: active 
        ? '0 15px 40px rgba(255, 184, 0, 0.3), 0 0 0 2px rgba(255, 255, 255, 0.1) inset' 
        : '0 10px 30px rgba(255, 184, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
      transform: active ? 'translateY(-3px) scale(1.05)' : 'translateY(0) scale(1)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      flexWrap: isSmallMobile ? 'wrap' : 'nowrap',
      textAlign: isSmallMobile ? 'center' : 'left',
      position: 'relative',
    }),
    
    numberOneBadge: (active: boolean) => ({
      width: isMobile ? (isSmallMobile ? '32px' : '40px') : '50px',
      height: isMobile ? (isSmallMobile ? '32px' : '40px') : '50px',
      backgroundColor: colors.gold,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      fontWeight: '900',
      boxShadow: active 
        ? '0 8px 25px rgba(255, 184, 0, 0.6), 0 0 0 3px rgba(255, 255, 255, 0.2) inset' 
        : '0 6px 20px rgba(255, 184, 0, 0.4), 0 0 0 2px rgba(255, 255, 255, 0.1) inset',
      transform: active ? 'scale(1.15)' : 'scale(1)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    }),
    
    numberOne: {
      color: colors.background,
      fontWeight: '900',
      fontSize: isMobile ? (isSmallMobile ? '1.2rem' : '1.4rem') : '1.6rem',
      fontFamily: "'Inter', sans-serif",
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
    },
    
    badgeText: {
      fontSize: isMobile ? (isSmallMobile ? '0.6rem' : '0.75rem') : '1rem',
      fontWeight: '700',
      color: colors.gold,
      lineHeight: '1.2',
      letterSpacing: isMobile ? (isSmallMobile ? '0.2px' : '0.3px') : '1px',
      fontFamily: "'Inter', sans-serif",
      textTransform: 'uppercase',
      whiteSpace: isSmallMobile ? 'normal' : 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      flexShrink: 1,
      minWidth: 0,
    },
    
    houstonBold: {
      fontWeight: '800',
      color: colors.gold,
      fontSize: isMobile ? (isSmallMobile ? '0.7rem' : '0.85rem') : '1.1rem',
      fontFamily: "'Inter', sans-serif",
      textShadow: '0 3px 6px rgba(0, 0, 0, 0.4)',
      display: 'inline',
    },

    headline: {
      fontSize: isMobile ? (isSmallMobile ? '2.2rem' : '2.5rem') : (isTablet ? '3.2rem' : '4rem'),
      fontWeight: '800',
      color: colors.white,
      lineHeight: 1.1,
      margin: 0,
      fontFamily: "'Inter', sans-serif",
      letterSpacing: '-0.5px',
      textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    },
    
    headlineHighlight: {
      color: colors.gold,
      display: 'block',
      fontFamily: "'Inter', sans-serif",
      fontWeight: '800',
      fontSize: isMobile ? (isSmallMobile ? '2rem' : '2.4rem') : (isTablet ? '3.4rem' : '4rem'),
      lineHeight: 1.1,
      marginTop: isMobile ? '0.5rem' : '0',
    },

    subheadline: {
      fontSize: isMobile ? (isSmallMobile ? '0.9rem' : '1rem') : (isTablet ? '1.125rem' : '1.25rem'),
      color: colors.softWhite90,
      lineHeight: 1.6,
      maxWidth: '600px',
      margin: 0,
      fontFamily: "'Inter', sans-serif",
      fontWeight: '400',
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
    },

    trustGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
      gap: isMobile ? (isSmallMobile ? '0.5rem' : '0.75rem') : '1rem',
      width: '100%',
    },
    
    trustCard: (active: boolean) => ({
      display: 'flex',
      alignItems: 'center',
      gap: isMobile ? (isSmallMobile ? '0.5rem' : '0.5rem') : '0.75rem',
      backgroundColor: active ? 'rgba(255, 184, 0, 0.15)' : 'rgba(255, 184, 0, 0.1)',
      borderRadius: '12px',
      padding: isMobile ? (isSmallMobile ? '0.5rem' : '0.75rem') : '1rem',
      border: `1px solid ${active ? colors.gold : colors.goldBorder}`,
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      transform: active ? 'translateY(-2px)' : 'translateY(0)',
      minHeight: isSmallMobile ? '60px' : 'auto',
    }),
    
    trustIcon: {
      width: isMobile ? (isSmallMobile ? '24px' : '30px') : '40px',
      height: isMobile ? (isSmallMobile ? '24px' : '30px') : '40px',
      backgroundColor: 'rgba(255, 184, 0, 0.15)',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },
    
    trustTitle: {
      fontSize: isMobile ? (isSmallMobile ? '0.6rem' : '0.7rem') : '0.875rem',
      fontWeight: '700',
      color: colors.gold,
      marginBottom: '0.25rem',
      fontFamily: "'Inter', sans-serif",
      whiteSpace: 'nowrap',
    },
    
    trustDesc: {
      fontSize: isMobile ? (isSmallMobile ? '0.5rem' : '0.6rem') : '0.75rem',
      color: colors.softWhite,
      fontFamily: "'Inter', sans-serif",
      fontWeight: '400',
    },

    reviewsContainer: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: isMobile ? 'flex-start' : 'center',
      gap: isMobile ? (isSmallMobile ? '0.5rem' : '0.75rem') : '1rem',
      flexWrap: 'wrap',
      width: '100%',
    },
    
    stars: {
      display: 'flex',
      gap: '0.25rem',
    },
    
    starIcon: {
      color: colors.gold,
      fontSize: isMobile ? (isSmallMobile ? '0.8rem' : '1rem') : '1.5rem',
      fontWeight: '700',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    },
    
    reviewText: {
      fontSize: isMobile ? (isSmallMobile ? '0.8rem' : '0.9rem') : '1.125rem',
      color: colors.softWhite90,
      fontFamily: "'Inter', sans-serif",
      fontWeight: '400',
    },
    
    reviewRating: {
      color: colors.gold,
      fontWeight: '700',
      fontFamily: "'Inter', sans-serif",
      fontSize: isMobile ? (isSmallMobile ? '0.9rem' : '1rem') : '1.25rem',
    },
    
    googleBadge: (active: boolean) => ({
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      backgroundColor: active ? 'rgba(255, 184, 0, 0.25)' : 'rgba(255, 184, 0, 0.15)',
      padding: isMobile ? (isSmallMobile ? '0.5rem 0.75rem' : '0.75rem 1rem') : '1rem 1.25rem',
      borderRadius: '30px',
      backdropFilter: 'blur(10px)',
      border: active ? `2px solid ${colors.gold}` : `2px solid ${colors.goldBorder}`,
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      transform: active ? 'translateY(-3px) scale(1.05)' : 'translateY(0) scale(1)',
      boxShadow: active ? '0 12px 30px rgba(0, 0, 0, 0.3)' : '0 8px 20px rgba(0, 0, 0, 0.2)',
      position: 'relative',
    }),
    
    googleText: {
      fontSize: isMobile ? (isSmallMobile ? '0.8rem' : '0.9rem') : '1rem',
      color: colors.white,
      fontWeight: '600',
      fontFamily: "'Inter', sans-serif",
      letterSpacing: '0.5px',
    },

    googleReviewsCTA: (active: boolean) => ({
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      backgroundColor: active ? colors.gold : 'rgba(255, 184, 0, 0.1)',
      color: active ? colors.background : colors.white,
      border: active ? `2px solid ${colors.gold}` : `2px solid ${colors.goldBorder}`,
      padding: isMobile ? (isSmallMobile ? '0.5rem 0.75rem' : '0.75rem 1rem') : '1rem 1.25rem',
      borderRadius: '30px',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      transform: active ? 'translateY(-3px) scale(1.05)' : 'translateY(0) scale(1)',
      boxShadow: active ? '0 12px 30px rgba(255, 184, 0, 0.4)' : '0 8px 20px rgba(0, 0, 0, 0.2)',
      fontWeight: '600',
      fontFamily: "'Inter', sans-serif",
    }),
    
    googleReviewsText: {
      fontSize: isMobile ? (isSmallMobile ? '0.8rem' : '0.9rem') : '1rem',
      fontWeight: '600',
      fontFamily: "'Inter', sans-serif",
      letterSpacing: '0.5px',
    },
    
    reviewsCTAContainer: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: isMobile ? 'stretch' : 'center',
      gap: '0.75rem',
      flexWrap: 'wrap',
      width: '100%',
    },

    bostonSection: {
      marginTop: '1rem',
      width: '100%',
    },
    
    bostonBadge: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      backgroundColor: 'rgba(10, 10, 12, 0.6)',
      padding: '0.5rem 0.75rem',
      borderRadius: '20px',
      width: 'fit-content',
      maxWidth: '100%',
      backdropFilter: 'blur(10px)',
    },
    
    bostonIcon: {
      width: '16px',
      height: '16px',
    },
    
    bostonText: {
      fontSize: isMobile ? (isSmallMobile ? '0.6rem' : '0.7rem') : '0.875rem',
      color: colors.softWhite,
      fontWeight: '400',
      fontFamily: "'Inter', sans-serif",
    },

    rightColumn: {
      marginTop: isMobile ? (isSmallMobile ? '1.5rem' : '2rem') : '0',
      width: '100%',
    },
    
    bookingCard: {
      backgroundColor: colors.white,
      borderRadius: '20px',
      padding: isMobile ? (isSmallMobile ? '1.25rem' : '1.75rem') : '2rem',
      boxShadow: '0 20px 60px rgba(10, 10, 12, 0.3)',
      border: `2px solid ${colors.goldBorder}`,
      width: '100%',
      boxSizing: 'border-box',
    },
    
    cardHeader: {
      textAlign: 'center',
      marginBottom: '1.75rem',
    },
    
    formTitle: {
      fontSize: isMobile ? (isSmallMobile ? '1.35rem' : '1.6rem') : '1.85rem',
      fontWeight: '700',
      color: colors.background,
      margin: '0 0 0.5rem 0',
      lineHeight: '1.2',
      fontFamily: "'Inter', sans-serif",
      letterSpacing: '-0.5px',
    },
    
    formSubtitle: {
      fontSize: isMobile ? (isSmallMobile ? '0.8rem' : '0.9rem') : '1rem',
      color: colors.background,
      opacity: 0.8,
      margin: 0,
      fontFamily: "'Inter', sans-serif",
      fontWeight: '400',
    },
    
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
      width: '100%',
    },
    
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      width: '100%',
    },
    
    inputLabel: {
      fontSize: isMobile ? '0.8rem' : '0.875rem',
      fontWeight: '600',
      color: colors.background,
      fontFamily: "'Inter', sans-serif",
    },
    
    formInput: {
      padding: isMobile ? (isSmallMobile ? '0.6rem' : '0.8rem') : '1rem',
      borderRadius: '10px',
      border: '2px solid #E5E7EB',
      fontSize: isMobile ? (isSmallMobile ? '0.8rem' : '0.85rem') : '0.875rem',
      transition: 'all 0.3s ease',
      outline: 'none',
      fontFamily: "'Inter', sans-serif",
      fontWeight: '400',
      width: '100%',
      boxSizing: 'border-box',
      '&:focus': {
        borderColor: colors.gold,
        boxShadow: '0 0 0 3px rgba(255, 184, 0, 0.2)',
      },
      '&::placeholder': {
        color: '#9CA3AF',
        fontWeight: '400',
        fontFamily: "'Inter', sans-serif",
      },
    },
    
    formTextarea: {
      padding: isMobile ? (isSmallMobile ? '0.6rem' : '0.8rem') : '1rem',
      borderRadius: '10px',
      border: '2px solid #E5E7EB',
      fontSize: isMobile ? (isSmallMobile ? '0.8rem' : '0.85rem') : '0.875rem',
      transition: 'all 0.3s ease',
      outline: 'none',
      fontFamily: "'Inter', sans-serif",
      fontWeight: '400',
      width: '100%',
      boxSizing: 'border-box',
      resize: 'vertical',
      minHeight: '100px',
      '&:focus': {
        borderColor: colors.gold,
        boxShadow: '0 0 0 3px rgba(255, 184, 0, 0.2)',
      },
      '&::placeholder': {
        color: '#9CA3AF',
        fontWeight: '400',
        fontFamily: "'Inter', sans-serif",
      },
    },
    
    formRow: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: '1rem',
      width: '100%',
    },
    
    submitButton: (active: boolean) => ({
      marginTop: '0.5rem',
      padding: isMobile ? (isSmallMobile ? '0.9rem' : '1.1rem') : '1.25rem',
      backgroundColor: colors.gold,
      color: colors.background,
      border: 'none',
      borderRadius: '10px',
      fontSize: isMobile ? (isSmallMobile ? '0.9rem' : '1rem') : '1.125rem',
      fontWeight: '700',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease',
      fontFamily: "'Inter', sans-serif",
      transform: active ? 'translateY(-3px)' : 'translateY(0)',
      boxShadow: active ? '0 15px 40px rgba(255, 184, 0, 0.4)' : '0 10px 30px rgba(255, 184, 0, 0.3)',
      width: '100%',
      position: 'relative',
    }),
    
    buttonText: {
      fontSize: isMobile ? (isSmallMobile ? '0.9rem' : '1rem') : '1.125rem',
      fontWeight: '700',
    },
    
    buttonArrow: {
      display: 'flex',
      alignItems: 'center',
    },
    
    successMessage: {
      marginTop: '1.5rem',
      padding: '1rem',
      backgroundColor: 'rgba(255, 184, 0, 0.1)',
      borderRadius: '12px',
      border: `2px solid ${colors.gold}`,
      textAlign: 'center',
      width: '100%',
      boxSizing: 'border-box',
    },
    
    successTitle: {
      fontSize: isMobile ? (isSmallMobile ? '1rem' : '1.1rem') : '1.25rem',
      fontWeight: '700',
      color: colors.background,
      marginBottom: '0.5rem',
      fontFamily: "'Inter', sans-serif",
    },
    
    successText: {
      fontSize: isMobile ? (isSmallMobile ? '0.8rem' : '0.9rem') : '1rem',
      color: colors.background,
      marginBottom: 0,
      fontFamily: "'Inter', sans-serif",
      fontWeight: '400',
    },
    
    errorMessage: {
      marginTop: '1.5rem',
      padding: '1rem',
      backgroundColor: 'rgba(239, 68, 68, 0.1)',
      borderRadius: '12px',
      border: '2px solid #EF4444',
      textAlign: 'center',
      width: '100%',
      boxSizing: 'border-box',
    },
    
    errorText: {
      fontSize: isMobile ? (isSmallMobile ? '0.9rem' : '1rem') : '1.125rem',
      fontWeight: '600',
      color: '#EF4444',
      marginBottom: 0,
      fontFamily: "'Inter', sans-serif",
    },
    
    formNote: {
      fontSize: isMobile ? (isSmallMobile ? '0.6rem' : '0.7rem') : '0.75rem',
      color: '#6B7280',
      textAlign: 'center',
      marginTop: '1rem',
      lineHeight: '1.5',
      fontFamily: "'Inter', sans-serif",
      fontWeight: '400',
    },
    
    securityBadge: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      marginTop: '1rem',
      paddingTop: '1rem',
      borderTop: '2px solid #E5E7EB',
      width: '100%',
    },
    
    securityIcon: {
      width: '16px',
      height: '16px',
    },
    
    securityText: {
      fontSize: isMobile ? (isSmallMobile ? '0.6rem' : '0.7rem') : '0.75rem',
      color: '#6B7280',
      fontWeight: '400',
      fontFamily: "'Inter', sans-serif",
    },
  };

  return (
    <section style={baseStyles.heroSection}>
      <div style={baseStyles.backgroundContainer}>
        <div style={baseStyles.overlayGradient}></div>
      </div>
      
      <div style={baseStyles.heroContent}>
        <div style={baseStyles.heroGrid}>
          <div style={baseStyles.leftColumn}>
            <div 
              style={baseStyles.excellenceBadge(excellenceBadgeActive)}
              onMouseEnter={() => setExcellenceBadgeActive(true)}
              onMouseLeave={() => setExcellenceBadgeActive(false)}
              onTouchStart={() => handleTouchStart(setExcellenceBadgeActive, true)}
              onTouchEnd={() => handleTouchEnd(setExcellenceBadgeActive, false)}
            >
              <MicroInteraction 
                src="/image/roofimg.png"
                width={200}
                height={200}
                style={{ 
                  top: '-5px', 
                  right: '8px',
                  filter: 'drop-shadow(0 4px 8px rgba(255, 184, 0, 0.3))'
                }}
              />
              
              <div style={baseStyles.numberOneBadge(excellenceBadgeActive)}>
                <span style={baseStyles.numberOne}>#1</span>
              </div>
              <span style={baseStyles.badgeText}>
                <strong style={baseStyles.houstonBold}>HOUSTON'S PREMIER</strong> ROOFING CONTRACTOR
              </span>
            </div>
            
            <h1 style={baseStyles.headline}>
              Protect Your Home With
              <span style={baseStyles.headlineHighlight}> BRAVOS</span>
            </h1>
            
            <p style={baseStyles.subheadline}>
              Expert residential and commercial roofing services with unmatched quality and durability. 
              We deliver lasting protection and exceptional craftsmanship on every project.
            </p>
            
            <div style={baseStyles.trustGrid}>
              <div 
                style={baseStyles.trustCard(trustCardActive === 0)}
                onMouseEnter={() => setTrustCardActive(0)}
                onMouseLeave={() => setTrustCardActive(null)}
                onTouchStart={() => handleTouchStart(setTrustCardActive, 0)}
                onTouchEnd={() => handleTouchEnd(setTrustCardActive, null)}
              >
                <div style={baseStyles.trustIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFB800" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div style={baseStyles.trustTitle}>25+ Years</div>
                  <div style={baseStyles.trustDesc}>Industry Experience</div>
                </div>
              </div>
              
              <div 
                style={baseStyles.trustCard(trustCardActive === 1)}
                onMouseEnter={() => setTrustCardActive(1)}
                onMouseLeave={() => setTrustCardActive(null)}
                onTouchStart={() => handleTouchStart(setTrustCardActive, 1)}
                onTouchEnd={() => handleTouchEnd(setTrustCardActive, null)}
              >
                <div style={baseStyles.trustIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.4 15C20.2837 15 21 15.7163 21 16.6V19.4C21 20.2837 20.2837 21 19.4 21H4.6C3.71634 21 3 20.2837 3 19.4V16.6C3 15.7163 3.71634 15 4.6 15" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 7C16 8.65685 14.6569 10 13 10C11.3431 10 10 8.65685 10 7C10 5.34315 11.3431 4 13 4C14.6569 4 16 5.34315 16 7Z" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div style={baseStyles.trustTitle}>Licensed & Bonded</div>
                  <div style={baseStyles.trustDesc}>Full Insurance</div>
                </div>
              </div>
              
              <div 
                style={baseStyles.trustCard(trustCardActive === 2)}
                onMouseEnter={() => setTrustCardActive(2)}
                onMouseLeave={() => setTrustCardActive(null)}
                onTouchStart={() => handleTouchStart(setTrustCardActive, 2)}
                onTouchEnd={() => handleTouchEnd(setTrustCardActive, null)}
              >
                <div style={baseStyles.trustIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01L9 11.01" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div style={baseStyles.trustTitle}>Lifetime Warranty</div>
                  <div style={baseStyles.trustDesc}>On Installation</div>
                </div>
              </div>
            </div>
            
            <div style={baseStyles.reviewsContainer}>
              <div style={baseStyles.stars}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={baseStyles.starIcon}>★</span>
                ))}
              </div>
              <div style={baseStyles.reviewText}>
                <strong style={baseStyles.reviewRating}>4.9/5</strong> from 350+ Google Reviews
              </div>
              <div style={baseStyles.reviewsCTAContainer}>
                <div 
                  style={baseStyles.googleBadge(googleBadgeActive)}
                  onClick={handleGoogleReviewsClick}
                  onMouseEnter={() => setGoogleBadgeActive(true)}
                  onMouseLeave={() => setGoogleBadgeActive(false)}
                  onTouchStart={() => handleTouchStart(setGoogleBadgeActive, true)}
                  onTouchEnd={() => handleTouchEnd(setGoogleBadgeActive, false)}
                >
                  <MicroInteraction 
                    src="/image/roofimg.png"
                    width={100}
                    height={100}
                    style={{ 
                      top: '-10px', 
                      right: '-8px',
                      filter: 'drop-shadow(0 4px 8px rgba(255, 184, 0, 0.3))'
                    }}
                  />
                  
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span style={baseStyles.googleText}>Google's Choice</span>
                </div>
                <div 
                  style={baseStyles.googleReviewsCTA(googleReviewsActive)}
                  onClick={handleGoogleReviewsClick}
                  onMouseEnter={() => setGoogleReviewsActive(true)}
                  onMouseLeave={() => setGoogleReviewsActive(false)}
                  onTouchStart={() => handleTouchStart(setGoogleReviewsActive, true)}
                  onTouchEnd={() => handleTouchEnd(setGoogleReviewsActive, false)}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.9C9.87812 3.30493 11.1801 2.99656 12.5 3H13C15.0843 3.11499 17.053 3.99478 18.5291 5.47087C20.0052 6.94696 20.885 8.91568 21 11V11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={baseStyles.googleReviewsText}>Read Reviews</span>
                </div>
              </div>
            </div>
            
            <div style={baseStyles.bostonSection}>
              <div style={baseStyles.bostonBadge}>
                <div style={baseStyles.bostonIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span style={baseStyles.bostonText}>Serving Greater Houston & Surrounding Areas</span>
              </div>
            </div>
          </div>
          
          <div style={baseStyles.rightColumn}>
            <div style={baseStyles.bookingCard}>
              <div style={baseStyles.cardHeader}>
                <h3 style={baseStyles.formTitle}>Get Your Free Estimate</h3>
                <p style={baseStyles.formSubtitle}>We'll respond within 1 business hour</p>
              </div>
              
              <form onSubmit={handleFormSubmit} style={baseStyles.form}>
                <div style={baseStyles.formGroup}>
                  <label style={baseStyles.inputLabel}>Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleFormChange}
                    style={baseStyles.formInput}
                    required
                  />
                </div>
                
                <div style={baseStyles.formRow}>
                  <div style={baseStyles.formGroup}>
                    <label style={baseStyles.inputLabel}>Email *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleFormChange}
                      style={baseStyles.formInput}
                      required
                    />
                  </div>
                  
                  <div style={baseStyles.formGroup}>
                    <label style={baseStyles.inputLabel}>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="(281) 555-1234"
                      value={formData.phone}
                      onChange={handleFormChange}
                      style={baseStyles.formInput}
                      required
                    />
                  </div>
                </div>
                
                <div style={baseStyles.formGroup}>
                  <label style={baseStyles.inputLabel}>Zip Code *</label>
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="77001"
                    value={formData.zipCode}
                    onChange={handleFormChange}
                    style={baseStyles.formInput}
                    required
                  />
                </div>
                
                <div style={baseStyles.formGroup}>
                  <label style={baseStyles.inputLabel}>Tell us about your project</label>
                  <textarea
                    name="message"
                    placeholder="Describe your roofing needs, property type, or any concerns..."
                    value={formData.message}
                    onChange={handleFormChange}
                    style={baseStyles.formTextarea}
                  />
                </div>
                
                <button 
                  type="submit" 
                  style={baseStyles.submitButton(submitButtonActive)}
                  onMouseEnter={() => setSubmitButtonActive(true)}
                  onMouseLeave={() => setSubmitButtonActive(false)}
                  onTouchStart={() => handleTouchStart(setSubmitButtonActive, true)}
                  onTouchEnd={() => handleTouchEnd(setSubmitButtonActive, false)}
                  disabled={state.submitting}
                >
                  <MicroInteraction 
                    src="/image/roofimg.png"
                    width={100}
                    height={100}
                    style={{ 
                      top: '-10px', 
                      right: '-5px',
                      filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))'
                    }}
                  />
                  
                  <span style={baseStyles.buttonText}>
                    {state.submitting ? 'Sending...' : 'Get Free Estimate'}
                  </span>
                  <span style={baseStyles.buttonArrow}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#0A0A0C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                
                {formStatus === 'success' && (
                  <div style={baseStyles.successMessage}>
                    <div style={baseStyles.successTitle}>Thank You!</div>
                    <div style={baseStyles.successText}>
                      Your roofing estimate request has been received. A BRAVOS specialist will contact you shortly.
                    </div>
                  </div>
                )}
                
                {formStatus === 'error' && (
                  <div style={baseStyles.errorMessage}>
                    <div style={baseStyles.errorText}>
                      Something went wrong. Please try again or call us directly.
                    </div>
                  </div>
                )}
                
                <p style={baseStyles.formNote}>
                  Your estimate is 100% free with no obligation. We respect your privacy and will never share your information.
                </p>
                
                <div style={baseStyles.securityBadge}>
                  <div style={baseStyles.securityIcon}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={baseStyles.securityText}>Secure & Confidential Estimate</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Video Testimonial Card Component
const VideoTestimonialCard = ({ 
  video, 
  index, 
  activeVideo, 
  setActiveVideo,
  playingVideo,
  setPlayingVideo 
}: any) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  const colors = {
    background: '#0A0A0C',
    gold: '#FFB800',
    goldLight: 'rgba(255, 184, 0, 0.1)',
    goldBorder: 'rgba(255, 184, 0, 0.3)',
    white: '#FFFFFF',
    softWhite: '#FAFAFA',
  };

  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsSmallMobile(width < 480);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePlayVideo = () => {
    if (playingVideo === video.id) {
      if (videoRef.current) {
        videoRef.current.pause();
        setPlayingVideo(null);
      }
    } else {
      setPlayingVideo(video.id);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      }, 100);
    }
  };

  const handleVideoEnded = () => {
    setPlayingVideo(null);
  };

  const handleTouchStart = () => {
    setActiveVideo(index);
  };

  const handleTouchEnd = () => {
    setTimeout(() => setActiveVideo(null), 150);
  };

  return (
    <div 
      style={{
        backgroundColor: activeVideo === index ? '#F9FAFB' : colors.white,
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: activeVideo === index 
          ? '0 30px 60px rgba(10, 10, 12, 0.2)' 
          : '0 20px 40px rgba(10, 10, 12, 0.1)',
        border: activeVideo === index 
          ? `2px solid ${colors.gold}` 
          : '1px solid rgba(255, 184, 0, 0.2)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: activeVideo === index ? 'translateY(-10px)' : 'translateY(0)',
        cursor: 'pointer',
        width: '100%',
      }}
      onMouseEnter={() => setActiveVideo(index)}
      onMouseLeave={() => setActiveVideo(null)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handlePlayVideo}
    >
      <div style={{
        position: 'relative',
        height: isMobile ? (isSmallMobile ? '180px' : '200px') : '250px',
        overflow: 'hidden',
        backgroundColor: colors.background,
      }}>
        {playingVideo === video.id ? (
          <video
            ref={videoRef}
            src={video.videoUrl}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            controls
            onEnded={handleVideoEnded}
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <>
            <img 
              src={video.videoThumbnail} 
              alt={`Video testimonial from ${video.name}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: activeVideo === index ? 'brightness(0.7)' : 'brightness(1)',
                transition: 'filter 0.3s ease',
              }}
            />
            
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              backgroundColor: colors.gold,
              color: colors.background,
              width: isMobile ? (isSmallMobile ? '35px' : '40px') : '50px',
              height: isMobile ? (isSmallMobile ? '35px' : '40px') : '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: isMobile ? (isSmallMobile ? '14px' : '16px') : '20px',
              fontWeight: '700',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              zIndex: 2,
            }}>
              ▶
            </div>
            
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(10, 10, 12, 0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: activeVideo === index ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }}>
              <div style={{
                width: isMobile ? (isSmallMobile ? '50px' : '60px') : '80px',
                height: isMobile ? (isSmallMobile ? '50px' : '60px') : '80px',
                backgroundColor: colors.gold,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: activeVideo === index ? 'scale(1)' : 'scale(0.8)',
                transition: 'transform 0.3s ease',
              }}>
                <span style={{
                  color: colors.background,
                  fontSize: isMobile ? (isSmallMobile ? '1.25rem' : '1.5rem') : '2rem',
                  marginLeft: '8px',
                  fontWeight: '700',
                }}>
                  ▶
                </span>
              </div>
            </div>
          </>
        )}
      </div>
      
      <div style={{
        paddingTop: isMobile ? (isSmallMobile ? '20px' : '24px') : '32px',
        paddingRight: isMobile ? (isSmallMobile ? '16px' : '20px') : '24px',
        paddingBottom: isMobile ? (isSmallMobile ? '20px' : '24px') : '32px',
        paddingLeft: isMobile ? (isSmallMobile ? '16px' : '20px') : '24px',
        textAlign: 'left',
      }}>
        <h4 style={{
          fontSize: isMobile ? (isSmallMobile ? '1.1rem' : '1.25rem') : '1.5rem',
          fontWeight: '700',
          color: colors.background,
          marginTop: 0,
          marginBottom: '8px',
          fontFamily: "'Inter', sans-serif",
        }}>
          {video.name}
        </h4>
        <p style={{
          fontSize: isMobile ? (isSmallMobile ? '0.8rem' : '0.9rem') : '1rem',
          color: '#6B7280',
          fontWeight: '400',
          fontFamily: "'Inter', sans-serif",
          marginBottom: '12px',
        }}>
          {video.location}
        </p>
        <div style={{
          fontSize: isMobile ? (isSmallMobile ? '0.7rem' : '0.75rem') : '0.875rem',
          color: colors.gold,
          fontWeight: '600',
          fontFamily: "'Inter', sans-serif",
          backgroundColor: colors.goldLight,
          padding: '4px 12px',
          borderRadius: '20px',
          display: 'inline-block',
          marginBottom: '16px',
        }}>
          {video.role}
        </div>
        <p style={{
          fontSize: isMobile ? (isSmallMobile ? '0.8rem' : '0.9rem') : '1rem',
          color: '#4B5563',
          lineHeight: '1.6',
          margin: 0,
          fontWeight: '400',
          fontFamily: "'Inter', sans-serif",
          fontStyle: 'italic',
        }}>
          "{video.content}"
        </p>
      </div>
    </div>
  );
};

// Stats Counter Component
const StatsCounter = () => {
  const [yearsExperience, setYearsExperience] = useState(0);
  const [projectsCompleted, setProjectsCompleted] = useState(0);
  const [satisfactionRate, setSatisfactionRate] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  const colors = {
    background: '#0A0A0C',
    gold: '#FFB800',
    softWhite: '#FAFAFA',
  };

  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsSmallMobile(width < 480);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const incrementYears = 25 / steps;
      const incrementProjects = 3500 / steps;
      const incrementSatisfaction = 99.7 / steps;
      
      let currentYears = 0;
      let currentProjects = 0;
      let currentSatisfaction = 0;
      let step = 0;
      
      const counterInterval = setInterval(() => {
        if (step >= steps) {
          clearInterval(counterInterval);
          setYearsExperience(25);
          setProjectsCompleted(3500);
          setSatisfactionRate(99.7);
          return;
        }
        
        currentYears += incrementYears;
        currentProjects += incrementProjects;
        currentSatisfaction += incrementSatisfaction;
        
        setYearsExperience(Math.floor(currentYears));
        setProjectsCompleted(Math.floor(currentProjects));
        setSatisfactionRate(parseFloat(currentSatisfaction.toFixed(1)));
        
        step++;
      }, duration / steps);
    };
    
    const timer = setTimeout(animateCounters, 500);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const [activeStat, setActiveStat] = useState<number | null>(null);

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
      justifyContent: 'center',
      alignItems: 'center',
      gap: isMobile ? (isSmallMobile ? '15px' : '20px') : '30px',
      maxWidth: isMobile ? (isSmallMobile ? '100%' : '90%') : '800px',
      margin: isMobile ? (isSmallMobile ? '20px auto' : '30px auto') : '30px auto',
      width: '100%',
    }}>
      <div 
        style={{
          textAlign: 'center' as const,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          transform: activeStat === 0 ? 'translateY(-5px)' : 'translateY(0)',
        }}
        onMouseEnter={() => setActiveStat(0)}
        onMouseLeave={() => setActiveStat(null)}
        onTouchStart={() => setActiveStat(0)}
        onTouchEnd={() => setTimeout(() => setActiveStat(null), 150)}
      >
        <div style={{
          fontSize: isMobile ? (isSmallMobile ? '1.75rem' : '2rem') : '2.5rem',
          fontWeight: 700,
          color: colors.gold,
          fontFamily: "'Inter', sans-serif",
          marginBottom: '8px',
          transition: 'all 0.3s ease',
        }}>
          {yearsExperience}+
        </div>
        <div style={{
          fontSize: isMobile ? (isSmallMobile ? '11px' : '12px') : '14px',
          fontWeight: 400,
          color: colors.softWhite,
          letterSpacing: '0.5px',
          transition: 'all 0.3s ease',
          fontFamily: "'Inter', sans-serif",
        }}>
          Years of Excellence
        </div>
      </div>
      
      <div 
        style={{
          textAlign: 'center' as const,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          transform: activeStat === 1 ? 'translateY(-5px)' : 'translateY(0)',
        }}
        onMouseEnter={() => setActiveStat(1)}
        onMouseLeave={() => setActiveStat(null)}
        onTouchStart={() => setActiveStat(1)}
        onTouchEnd={() => setTimeout(() => setActiveStat(null), 150)}
      >
        <div style={{
          fontSize: isMobile ? (isSmallMobile ? '1.75rem' : '2rem') : '2.5rem',
          fontWeight: 700,
          color: colors.gold,
          fontFamily: "'Inter', sans-serif",
          marginBottom: '8px',
          transition: 'all 0.3s ease',
        }}>
          {projectsCompleted.toLocaleString()}+
        </div>
        <div style={{
          fontSize: isMobile ? (isSmallMobile ? '11px' : '12px') : '14px',
          fontWeight: 400,
          color: colors.softWhite,
          letterSpacing: '0.5px',
          transition: 'all 0.3s ease',
          fontFamily: "'Inter', sans-serif",
        }}>
          Roofs Replaced
        </div>
      </div>
      
      <div 
        style={{
          textAlign: 'center' as const,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          transform: activeStat === 2 ? 'translateY(-5px)' : 'translateY(0)',
        }}
        onMouseEnter={() => setActiveStat(2)}
        onMouseLeave={() => setActiveStat(null)}
        onTouchStart={() => setActiveStat(2)}
        onTouchEnd={() => setTimeout(() => setActiveStat(null), 150)}
      >
        <div style={{
          fontSize: isMobile ? (isSmallMobile ? '1.75rem' : '2rem') : '2.5rem',
          fontWeight: 700,
          color: colors.gold,
          fontFamily: "'Inter', sans-serif",
          marginBottom: '8px',
          transition: 'all 0.3s ease',
        }}>
          {satisfactionRate}%
        </div>
        <div style={{
          fontSize: isMobile ? (isSmallMobile ? '11px' : '12px') : '14px',
          fontWeight: 400,
          color: colors.softWhite,
          letterSpacing: '0.5px',
          transition: 'all 0.3s ease',
          fontFamily: "'Inter', sans-serif",
        }}>
          Satisfaction Rate
        </div>
      </div>
    </div>
  );
};

// FAQ Section Component
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs?: FAQItem[];
  accentColor?: string;
  textColor?: string;
  backgroundColor?: string;
  containerStyle?: React.CSSProperties;
  faqItemStyle?: React.CSSProperties;
  showToggleIcon?: boolean;
  initiallyOpenIndex?: number | null;
}

function FAQSection({
  title = 'Frequently Asked Roofing Questions',
  subtitle = 'Find answers to common questions about our roofing services. If you don\'t see your question here, contact our team for personalized assistance.',
  faqs = [
    {
      question: "How do I know if I need a roof replacement or repair?",
      answer: "Our expert inspectors will assess your roof's condition, age, and extent of damage. Generally, if your roof is over 20 years old, has widespread damage, or multiple leaks, replacement may be more cost-effective. We provide honest recommendations based on what's best for your home."
    },
    {
      question: "How long does a typical roof replacement take?",
      answer: "Most residential roof replacements are completed within 1-3 days, depending on the size of your home, roof complexity, and weather conditions. We'll provide a specific timeline during your consultation and keep you updated throughout the process."
    },
    {
      question: "What roofing materials do you offer?",
      answer: "We offer a wide range of premium materials including architectural asphalt shingles, metal roofing, tile, slate, and flat roofing systems. Our team will help you choose the best option for your home's style, budget, and local climate."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, BRAVOS is fully licensed, bonded, and insured with comprehensive liability and workers' compensation coverage. We also offer extended warranties on both materials and workmanship for your peace of mind."
    },
    {
      question: "Do you handle insurance claims?",
      answer: "Absolutely. Our team specializes in insurance claim assistance and will work directly with your insurance adjuster to ensure you receive fair coverage for storm damage, hail damage, or other covered perils."
    },
    {
      question: "What's included in your free estimate?",
      answer: "Our complimentary roof inspection includes a thorough assessment of your roof's condition, photo documentation, detailed measurements, material recommendations, and a transparent written quote with no hidden fees or surprises."
    },
    {
      question: "Do you offer financing options?",
      answer: "Yes, we offer flexible financing options with competitive rates to help make your roof replacement more affordable. Ask our team about current specials and 0% APR financing opportunities."
    },
    {
      question: "What warranty do you provide?",
      answer: "We provide comprehensive warranties including manufacturer warranties on materials (20-50 years depending on product) and our BRAVOS workmanship warranty for added protection and peace of mind."
    }
  ],
  accentColor = '#FFB800',
  textColor = '#0A0A0C',
  backgroundColor = '#FFFFFF',
  containerStyle = {},
  faqItemStyle = {},
  showToggleIcon = true,
  initiallyOpenIndex = null
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(initiallyOpenIndex);
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsSmallMobile(width < 480);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const baseStyles = {
    faqSection: {
      paddingTop: isMobile ? (isSmallMobile ? '40px' : '60px') : '80px',
      paddingBottom: isMobile ? (isSmallMobile ? '40px' : '60px') : '80px',
      paddingLeft: isMobile ? (isSmallMobile ? '16px' : '20px') : '40px',
      paddingRight: isMobile ? (isSmallMobile ? '16px' : '20px') : '40px',
      background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)',
      position: 'relative' as const,
      backgroundColor: backgroundColor,
      ...containerStyle
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative' as const,
      zIndex: 2,
      width: '100%',
      boxSizing: 'border-box' as const,
    },
    header: {
      textAlign: 'center' as const,
      marginBottom: isMobile ? (isSmallMobile ? '30px' : '40px') : '60px',
    },
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      background: `rgba(255, 184, 0, 0.1)`,
      padding: isMobile ? (isSmallMobile ? '6px 12px' : '8px 16px') : '10px 20px',
      borderRadius: '50px',
      border: `1px solid rgba(255, 184, 0, 0.3)`,
      marginBottom: '20px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    badgeIcon: {
      fontSize: isMobile ? (isSmallMobile ? '16px' : '18px') : '18px',
      transition: 'all 0.3s ease',
    },
    badgeText: {
      fontSize: isMobile ? (isSmallMobile ? '10px' : '12px') : '14px',
      fontWeight: 600,
      color: textColor,
      letterSpacing: '1px',
      transition: 'all 0.3s ease',
    },
    title: {
      fontSize: isMobile ? (isSmallMobile ? '1.75rem' : '2rem') : '2.5rem',
      fontWeight: 700,
      color: textColor,
      lineHeight: 1.2,
      fontFamily: "'Inter', sans-serif",
      marginTop: 0,
      marginRight: 0,
      marginBottom: '20px',
      marginLeft: 0,
      maxWidth: '900px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    subtitle: {
      fontSize: isMobile ? (isSmallMobile ? '0.9rem' : '1rem') : '1.125rem',
      fontWeight: 400,
      color: '#666666',
      lineHeight: 1.6,
      maxWidth: '800px',
      marginTop: 0,
      marginRight: 'auto',
      marginBottom: '30px',
      marginLeft: 'auto',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    faqContainer: {
      maxWidth: '900px',
      margin: '0 auto',
      width: '100%',
    },
    faqItem: (isOpen: boolean) => ({
      background: '#FFFFFF',
      borderRadius: '16px',
      marginBottom: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(10, 10, 12, 0.08)',
      border: `1px solid ${isOpen ? '#FFB800' : 'rgba(10, 10, 12, 0.1)'}`,
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      ...faqItemStyle
    }),
    questionButton: (isOpen: boolean) => ({
      width: '100%',
      background: isOpen ? 'rgba(255, 184, 0, 0.05)' : '#FFFFFF',
      border: 'none',
      padding: isMobile ? (isSmallMobile ? '14px' : '16px') : '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      cursor: 'pointer',
      textAlign: 'left' as const,
      transition: 'all 0.3s ease',
    }),
    questionContent: {
      display: 'flex',
      alignItems: 'center',
      gap: isMobile ? '12px' : '16px',
      flex: 1,
    },
    questionNumber: {
      width: isMobile ? (isSmallMobile ? '28px' : '32px') : '32px',
      height: isMobile ? (isSmallMobile ? '28px' : '32px') : '32px',
      background: `linear-gradient(135deg, #FFB800 0%, #E6A600 100%)`,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: isMobile ? (isSmallMobile ? '10px' : '12px') : '12px',
      fontWeight: 700,
      color: '#0A0A0C',
      flexShrink: 0,
      transition: 'all 0.3s ease',
    },
    questionText: {
      fontSize: isMobile ? (isSmallMobile ? '0.9rem' : '1rem') : '1.125rem',
      fontWeight: 600,
      color: textColor,
      fontFamily: "'Inter', sans-serif",
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      lineHeight: 1.4,
      transition: 'all 0.3s ease',
    },
    toggleIcon: (isOpen: boolean) => ({
      width: '20px',
      height: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'transform 0.3s ease',
      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
      flexShrink: 0,
      marginLeft: '10px',
    }),
    answerContainer: (isOpen: boolean) => ({
      maxHeight: isOpen ? '500px' : '0',
      overflow: 'hidden',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      background: isOpen ? 'rgba(10, 10, 12, 0.02)' : 'transparent',
    }),
    answerContent: (isOpen: boolean) => ({
      paddingTop: isOpen ? (isMobile ? (isSmallMobile ? '0' : '0') : '0') : (isMobile ? (isSmallMobile ? '0' : '0') : '0'),
      paddingRight: isOpen ? (isMobile ? (isSmallMobile ? '14px' : '16px') : '20px') : (isMobile ? (isSmallMobile ? '14px' : '16px') : '20px'),
      paddingBottom: isOpen ? (isMobile ? (isSmallMobile ? '14px' : '16px') : '20px') : (isMobile ? (isSmallMobile ? '0' : '0') : '0'),
      paddingLeft: isOpen ? (isMobile ? (isSmallMobile ? '60px' : '68px') : '68px') : (isMobile ? (isSmallMobile ? '14px' : '16px') : '20px'),
      opacity: isOpen ? 1 : 0,
      transition: 'opacity 0.3s ease 0.2s',
    }),
    answerWrapper: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '16px',
    },
    answerIcon: {
      width: '20px',
      height: '20px',
      background: 'rgba(10, 10, 12, 0.1)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '10px',
      fontWeight: 700,
      color: '#0A0A0C',
      flexShrink: 0,
      marginTop: '3px',
      transition: 'all 0.3s ease',
    },
    answerText: {
      fontSize: isMobile ? (isSmallMobile ? '0.85rem' : '0.9rem') : '1rem',
      fontWeight: 400,
      color: '#666666',
      lineHeight: 1.6,
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    ctaContainer: {
      textAlign: 'center'  as const,
      marginTop: isMobile ? (isSmallMobile ? '30px' : '40px') : '60px',
      padding: isMobile ? (isSmallMobile ? '20px' : '30px 20px') : '40px 20px',
      background: `linear-gradient(135deg, rgba(10, 10, 12, 0.05) 0%, rgba(255, 184, 0, 0.05) 100%)`,
      borderRadius: '20px',
      border: `1px solid rgba(255, 184, 0, 0.3)`,
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    ctaTitle: {
      fontSize: isMobile ? (isSmallMobile ? '1.25rem' : '1.5rem') : '1.75rem',
      fontWeight: 700,
      color: textColor,
      fontFamily: "'Inter', sans-serif",
      marginBottom: '20px',
      transition: 'all 0.3s ease',
    },
    ctaDescription: {
      fontSize: isMobile ? (isSmallMobile ? '0.9rem' : '1rem') : '1.125rem',
      fontWeight: 400,
      color: '#666666',
      lineHeight: 1.6,
      maxWidth: '600px',
      marginTop: 0,
      marginRight: 'auto',
      marginBottom: '24px',
      marginLeft: 'auto',
      transition: 'all 0.3s ease',
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: isMobile ? 'column' as const : 'row' as const,
      gap: '16px',
      justifyContent: 'center',
      alignItems: 'center',
    },
    primaryButton: {
      background: `linear-gradient(135deg, #FFB800 0%, #E6A600 100%)`,
      color: '#0A0A0C',
      border: 'none',
      padding: isMobile ? (isSmallMobile ? '14px 20px' : '16px 24px') : '16px 24px',
      fontSize: isMobile ? (isSmallMobile ? '14px' : '15px') : '15px',
      fontWeight: 700,
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: `0 8px 25px rgba(255, 184, 0, 0.3)`,
      fontFamily: "'Inter', sans-serif",
      letterSpacing: '0.5px',
      width: isMobile ? '100%' : 'auto',
      maxWidth: '300px',
    },
    secondaryButton: {
      background: 'transparent',
      color: textColor,
      border: `2px solid rgba(255, 184, 0, 0.5)`,
      padding: isMobile ? (isSmallMobile ? '14px 20px' : '16px 24px') : '16px 24px',
      fontSize: isMobile ? (isSmallMobile ? '14px' : '15px') : '15px',
      fontWeight: 700,
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontFamily: "'Inter', sans-serif",
      letterSpacing: '0.5px',
      width: isMobile ? '100%' : 'auto',
      maxWidth: '300px',
    },
  };

  return (
    <section style={baseStyles.faqSection}>
      <div style={baseStyles.container}>
        <div style={baseStyles.header}>
          <div style={baseStyles.badge}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.background = 'rgba(255, 184, 0, 0.15)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(255, 184, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'rgba(255, 184, 0, 0.1)';
              e.currentTarget.style.boxShadow = 'none';
            }}>
            <div style={baseStyles.badgeIcon}>❓</div>
            <span style={baseStyles.badgeText}>
              Got Roofing Questions?
            </span>
          </div>
          
          <h2 style={baseStyles.title}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}>
            {title.split(' ').map((word, index, array) => 
              index === array.length - 1 ? (
                <span key={index} style={{ color: accentColor, transition: 'all 0.3s ease' }}>
                  {word}
                </span>
              ) : (
                word + ' '
              )
            )}
          </h2>
          
          <p style={baseStyles.subtitle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = textColor;
              e.currentTarget.style.transform = 'scale(1.01)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#666666';
              e.currentTarget.style.transform = 'scale(1)';
            }}>
            {subtitle}
          </p>
        </div>

        <div style={baseStyles.faqContainer}>
          {faqs.map((faq, index) => (
            <div 
              key={index}
              style={baseStyles.faqItem(openIndex === index)}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(10, 10, 12, 0.12)';
                e.currentTarget.style.borderColor = `${accentColor}`;
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(10, 10, 12, 0.08)';
                e.currentTarget.style.borderColor = openIndex === index ? accentColor : 'rgba(10, 10, 12, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                style={baseStyles.questionButton(openIndex === index)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 184, 0, 0.08)';
                  e.currentTarget.style.transform = 'scale(1.01)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = openIndex === index ? 'rgba(255, 184, 0, 0.05)' : '#FFFFFF';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <div style={baseStyles.questionContent}>
                  <div style={baseStyles.questionNumber}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}>
                    Q{index + 1}
                  </div>
                  <h3 style={baseStyles.questionText}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = accentColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = textColor;
                    }}>
                    {faq.question}
                  </h3>
                </div>
                
                {showToggleIcon && (
                  <div style={baseStyles.toggleIcon(openIndex === index)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = openIndex === index ? 'rotate(45deg) scale(1.2)' : 'rotate(0deg) scale(1.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = openIndex === index ? 'rotate(45deg) scale(1)' : 'rotate(0deg) scale(1)';
                    }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5V19M5 12H19" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </button>
              
              <div style={baseStyles.answerContainer(openIndex === index)}>
                <div style={baseStyles.answerContent(openIndex === index)}>
                  <div style={baseStyles.answerWrapper}>
                    <div style={baseStyles.answerIcon}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1)';
                        e.currentTarget.style.background = 'rgba(10, 10, 12, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.background = 'rgba(10, 10, 12, 0.1)';
                      }}>
                      A
                    </div>
                    <p style={baseStyles.answerText}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = textColor;
                        e.currentTarget.style.transform = 'scale(1.01)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#666666';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={baseStyles.ctaContainer}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(10, 10, 12, 0.08) 0%, rgba(255, 184, 0, 0.08) 100%)';
            e.currentTarget.style.boxShadow = '0 15px 35px rgba(10, 10, 12, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(10, 10, 12, 0.05) 0%, rgba(255, 184, 0, 0.05) 100%)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
          <h3 style={baseStyles.ctaTitle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = accentColor;
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = textColor;
              e.currentTarget.style.transform = 'scale(1)';
            }}>
            Still Have Roofing Questions?
          </h3>
          <p style={baseStyles.ctaDescription}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = textColor;
              e.currentTarget.style.transform = 'scale(1.01)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#666666';
              e.currentTarget.style.transform = 'scale(1)';
            }}>
            Our expert team is available 24/7 to answer any questions and schedule your free roof inspection.
          </p>
          <div style={baseStyles.buttonContainer}>
            <button 
              onClick={() => window.location.href = '/contact'}
              style={baseStyles.primaryButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(255, 184, 0, 0.4)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #E6A600 0%, #FFB800 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 184, 0, 0.3)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #FFB800 0%, #E6A600 100%)';
              }}
            >
              Free Inspection
            </button>
            <button 
              onClick={() => window.location.href = 'tel:+12815551234'}
              style={baseStyles.secondaryButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 184, 0, 0.1)';
                e.currentTarget.style.borderColor = accentColor;
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.color = accentColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255, 184, 0, 0.5)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.color = textColor;
              }}
            >
              Call (281) 555-1234
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// BodySection Component - ROOFING VERSION
const BodySection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [activeStat, setActiveStat] = useState<number | null>(null);
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [activeBeforeAfter, setActiveBeforeAfter] = useState<number | null>(null);
  const [activeReview, setActiveReview] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [activeScheduleCard, setActiveScheduleCard] = useState<number | null>(null);
  const [activeScheduleButton, setActiveScheduleButton] = useState<string | null>(null);
  const [activeFeatureCard, setActiveFeatureCard] = useState<number | null>(null);
  const [activeConsultation, setActiveConsultation] = useState(false);
  const [activeBeforeAfterButton, setActiveBeforeAfterButton] = useState(false);
  const [activeOurStory, setActiveOurStory] = useState(false);

  const colors = {
    background: '#0A0A0C',
    gold: '#FFB800',
    goldLight: 'rgba(255, 184, 0, 0.1)',
    goldBorder: 'rgba(255, 184, 0, 0.3)',
    white: '#FFFFFF',
    softWhite: '#FAFAFA',
    softWhite90: 'rgba(250, 250, 250, 0.9)',
    softWhite70: 'rgba(250, 250, 250, 0.7)',
  };

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

  const handleTouchStart = (setter: (value: any) => void, value: any) => {
    setter(value);
  };

  const handleTouchEnd = (setter: (value: any) => void, resetValue: any = null) => {
    setTimeout(() => setter(resetValue), 150);
  };

  const transformations = [
    {
      id: 1,
      title: "#1 Complete Roof Transformation",
      beforeImage: "https://images.unsplash.com/photo-1632882968060-c5f5f5cdbb29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1632778149955-ea8d5832e29a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "From severe storm damage to premium architectural shingle installation with lifetime warranty"
    },
    {
      id: 2,
      title: "#2 Metal Roof Replacement",
      beforeImage: "https://images.unsplash.com/photo-1632882910410-8b179c7f6adc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1632778149955-ea8d5832e29a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Aged asphalt shingles replaced with energy-efficient standing seam metal roof"
    }
  ];

  const videoTestimonials = [
    {
      id: 1,
      name: "David & Susan Thompson",
      location: "River Oaks",
      role: "Verified Homeowner",
      content: "BRAVOS replaced our roof after hail damage and the transformation was incredible. Their attention to detail and cleanup was exceptional.",
      videoThumbnail: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "/videos/roofing1.mp4",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b786d4d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Memorial",
      role: "Verified Homeowner",
      content: "The team was professional, punctual, and completed our new roof in just two days. We couldn't be happier with the quality.",
      videoThumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "/videos/roofing2.mp4",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      name: "Jennifer Williams",
      location: "West University",
      role: "Verified Homeowner",
      content: "They helped us navigate the insurance claim process and got us a brand new roof with minimal out-of-pocket expense. Highly recommend!",
      videoThumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "/videos/roofing3.mp4",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Robert Garcia",
      location: "Sugar Land",
      service: "Complete Roof Replacement",
      rating: 5,
      content: "BRAVOS exceeded our expectations in every way. Their crew was professional, the installation was flawless, and they left our property spotless. Best roofing company in Houston!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      name: "Patricia Martinez",
      location: "Katy",
      service: "Emergency Repair",
      rating: 5,
      content: "Our roof was leaking during a storm and BRAVOS responded within hours. They tarped our roof and completed the repair the next day. True professionals!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b786d4d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      name: "James Anderson",
      location: "The Woodlands",
      service: "Insurance Claim Assistance",
      rating: 5,
      content: "The team at BRAVOS handled our insurance claim from start to finish. We got a complete roof replacement with no stress. Worth every penny!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 4,
      name: "Lisa Johnson",
      location: "Pearland",
      service: "Metal Roof Installation",
      rating: 5,
      content: "We upgraded to a standing seam metal roof and it's stunning. The crew was meticulous and the project manager kept us informed daily. Highly recommend!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const features = [
    {
      number: '01',
      title: 'Master Craftsmen & GAF-Certified',
      description: 'Our team consists of factory-trained, GAF-certified roofing professionals with decades of combined experience. Each member undergoes rigorous safety training and continuous education on the latest installation techniques.',
      listItems: [
        'GAF Master Elite® Certification',
        'OSHA-Certified Safety Training',
        'Continuous Technical Education'
      ],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Professional roofing team at work'
    },
    {
      number: '02',
      title: 'Precision Craftsmanship & Quality',
      description: 'We don\'t just install roofs—we engineer protection systems. Every project follows our proprietary 127-point quality checklist, ensuring proper flashing, ventilation, and flawless installation down to the last nail.',
      listItems: [
        '127-Point Quality Inspection',
        'Premium Material Selection',
        'Advanced Ventilation Systems'
      ],
      image: 'https://images.unsplash.com/photo-1632778149955-ea8d5832e29a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Detailed roofing craftsmanship'
    },
    {
      number: '03',
      title: 'Triple Protection Guarantee',
      description: 'Your peace of mind is our priority. Every BRAVOS roof comes with our comprehensive protection package: 25-year workmanship warranty, manufacturer materials warranty, and our exclusive leak-free guarantee.',
      listItems: [
        '25-Year Workmanship Warranty',
        '50-Year Material Coverage',
        'Leak-Free Installation Guarantee'
      ],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Satisfied homeowner with warranty documents'
    },
    {
      number: '04',
      title: 'Insurance Claim Specialists',
      description: 'Navigating insurance claims is overwhelming. Our dedicated claims team works directly with your adjuster, providing detailed documentation and advocacy to maximize your coverage and minimize your stress.',
      listItems: [
        'Direct Adjuster Coordination',
        'Comprehensive Damage Documentation',
        'Fair Settlement Advocacy'
      ],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Insurance claim consultation'
    }
  ];

  const roofingPlans = [
    {
      id: 1,
      badge: "RESIDENTIAL",
      title: "Complete Replacement",
      frequency: "Full Roof System",
      description: "Premium protection for your home",
      details: "Our comprehensive roof replacement service includes complete tear-off, underlayment installation, premium shingles, flashing replacement, and ridge vent installation for optimal performance.",
      features: [
        "Full tear-off & disposal",
        "Premium architectural shingles",
        "Ice & water shield protection",
        "New flashing & ridge vents"
      ],
      buttonText: "Get Free Estimate",
      color: colors.background
    },
    {
      id: 2,
      badge: "REPAIR",
      title: "Roof Repair",
      frequency: "Targeted Solutions",
      description: "Fast, reliable repair service",
      details: "From minor leaks to storm damage repair, our team provides prompt, lasting repairs. We identify the root cause and deliver solutions that extend your roof's lifespan without unnecessary replacement.",
      features: [
        "Emergency leak repair",
        "Shingle replacement",
        "Flashing repair/replacement",
        "Storm damage restoration"
      ],
      buttonText: "Schedule Repair",
      color: colors.gold
    },
    {
      id: 3,
      badge: "INSPECTION",
      title: "Free Roof Inspection",
      frequency: "Comprehensive Assessment",
      description: "Expert evaluation & recommendations",
      details: "Our thorough roof inspection includes drone and manual assessment of all roof components, photo documentation, detailed report, and honest recommendations—no pressure, just expertise.",
      features: [
        "Drone & manual inspection",
        "Thermal imaging available",
        "Detailed photo report",
        "Written estimate"
      ],
      buttonText: "Book Inspection",
      color: colors.background
    }
  ];

  const baseBodyStyles: any = {
    bodyContainer: {
      backgroundColor: colors.white,
      paddingTop: isMobile ? '60px' : '120px',
      paddingRight: isMobile ? '20px' : '40px',
      paddingBottom: isMobile ? '60px' : '120px',
      paddingLeft: isMobile ? '20px' : '40px',
      fontFamily: "'Inter', sans-serif",
    },
    
    differenceSection: {
      maxWidth: '1400px',
      margin: '0 auto',
      marginBottom: isMobile ? '80px' : '120px',
      textAlign: 'center',
      paddingLeft: isMobile ? '20px' : '0',
      paddingRight: isMobile ? '20px' : '0',
      background: 'linear-gradient(135deg, rgba(248, 250, 252, 0.95) 0%, rgba(255, 255, 255, 1) 100%)',
      borderRadius: '32px',
      paddingTop: isMobile ? '40px' : '80px',
      paddingBottom: isMobile ? '40px' : '80px',
      boxShadow: '0 20px 60px rgba(10, 10, 12, 0.08)',
      border: `1px solid ${colors.goldBorder}`,
      position: 'relative',
      overflow: 'hidden',
    },
    
    differenceSectionBg: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `radial-gradient(circle at 20% 80%, ${colors.goldLight} 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(10, 10, 12, 0.03) 0%, transparent 50%)`,
      zIndex: 1,
    },
    
    differenceBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: isMobile ? '8px' : '12px',
      backgroundColor: colors.goldLight,
      padding: isMobile ? '12px 20px' : '16px 32px',
      borderRadius: '50px',
      marginBottom: isMobile ? '30px' : '40px',
      border: `2px solid ${colors.goldBorder}`,
      backdropFilter: 'blur(10px)',
      position: 'relative',
      zIndex: 2,
    },
    
    diamondIcon: {
      color: colors.gold,
      fontWeight: '700',
      fontSize: isMobile ? '20px' : '24px',
    },
    
    differenceBadgeText: {
      fontSize: isMobile ? '14px' : '18px',
      fontWeight: '700',
      color: colors.background,
      letterSpacing: '3px',
      textTransform: 'uppercase',
      fontFamily: "'Inter', sans-serif",
    },
    
    differenceTitle: {
      fontSize: isMobile ? '2.5rem' : isTablet ? '3rem' : '3.5rem',
      fontWeight: '700',
      color: colors.background,
      marginTop: 0,
      marginRight: 0,
      marginBottom: '16px',
      marginLeft: 0,
      lineHeight: '1',
      fontFamily: "'Inter', sans-serif",
      letterSpacing: '-0.5px',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
      position: 'relative',
      zIndex: 2,
    },
    
    navySubtitle: {
      fontSize: isMobile ? '2rem' : isTablet ? '2.25rem' : '2.5rem',
      fontWeight: '700',
      color: colors.background,
      marginTop: 0,
      marginRight: 0,
      marginBottom: '8px',
      marginLeft: 0,
      fontFamily: "'Inter', sans-serif",
      letterSpacing: '-0.5px',
      position: 'relative',
      zIndex: 2,
    },
    
    goldSubtitle: {
      fontSize: isMobile ? '2rem' : isTablet ? '2.25rem' : '2.5rem',
      fontWeight: '700',
      color: colors.gold,
      marginTop: 0,
      marginRight: 0,
      marginBottom: '48px',
      marginLeft: 0,
      fontFamily: "'Inter', sans-serif",
      textShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      letterSpacing: '-0.5px',
      position: 'relative',
      zIndex: 2,
    },
    
    differenceDescription: {
      fontSize: isMobile ? '1.125rem' : isTablet ? '1.25rem' : '1.375rem',
      color: '#4B5563',
      lineHeight: '1.7',
      maxWidth: '900px',
      marginTop: 0,
      marginRight: 'auto',
      marginBottom: isMobile ? '60px' : isTablet ? '80px' : '80px',
      marginLeft: 'auto',
      fontWeight: '400',
      fontFamily: "'Inter', sans-serif",
      position: 'relative',
      zIndex: 2,
    },
    
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : 'repeat(2, 1fr)',
      gap: isMobile ? '32px' : isTablet ? '48px' : '64px',
      maxWidth: '1400px',
      margin: '0 auto',
      marginBottom: isMobile ? '80px' : '120px',
      paddingLeft: isMobile ? '20px' : '0',
      paddingRight: isMobile ? '20px' : '0',
    },
    
    featureCard: (active: boolean) => ({
      backgroundColor: active ? '#F9FAFB' : colors.white,
      borderRadius: '32px',
      overflow: 'hidden',
      boxShadow: active 
        ? '0 40px 80px rgba(10, 10, 12, 0.15)' 
        : '0 20px 60px rgba(10, 10, 12, 0.08)',
      border: active 
        ? `2px solid ${colors.gold}` 
        : `1px solid ${colors.goldBorder}`,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: active ? 'translateY(-15px) scale(1.02)' : 'translateY(0) scale(1)',
      position: 'relative',
    }),
    
    featureImageContainer: {
      position: 'relative',
      height: isMobile ? '200px' : isTablet ? '250px' : '300px',
      overflow: 'hidden',
    },
    
    featureImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s ease',
    },
    
    featureNumberBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.background,
      color: colors.white,
      width: isMobile ? '50px' : '60px',
      height: isMobile ? '50px' : '60px',
      borderRadius: '50%',
      fontSize: isMobile ? '1.25rem' : '1.5rem',
      fontWeight: '700',
      fontFamily: "'Inter', sans-serif",
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
      marginRight: isMobile ? '12px' : '20px',
      flexShrink: 0,
      transition: 'all 0.3s ease',
    },
    
    featureContent: {
      paddingTop: isMobile ? '24px' : '48px',
      paddingRight: isMobile ? '20px' : '40px',
      paddingBottom: isMobile ? '24px' : '48px',
      paddingLeft: isMobile ? '20px' : '40px',
      background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)',
    },
    
    featureTitleContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: isMobile ? '16px' : '24px',
    },
    
    featureTitle: {
      fontSize: isMobile ? '1.5rem' : isTablet ? '1.75rem' : '2rem',
      fontWeight: '700',
      color: colors.background,
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      lineHeight: '1.2',
      fontFamily: "'Inter', sans-serif",
      letterSpacing: '-0.25px',
    },
    
    featureDescription: {
      fontSize: isMobile ? '1rem' : isTablet ? '1.125rem' : '1.125rem',
      color: '#4B5563',
      lineHeight: '1.8',
      marginTop: 0,
      marginRight: 0,
      marginBottom: isMobile ? '24px' : '32px',
      marginLeft: 0,
      fontWeight: '400',
      fontFamily: "'Inter', sans-serif",
    },
    
    featureList: {
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '12px' : '20px',
      marginTop: 0,
      marginRight: 0,
      marginBottom: isMobile ? '30px' : '40px',
      marginLeft: 0,
    },
    
    featureListItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '16px',
      padding: '12px 16px',
      backgroundColor: colors.goldLight,
      borderRadius: '12px',
      border: `1px solid ${colors.goldBorder}`,
      transition: 'all 0.3s ease',
    },
    
    checkIcon: {
      color: colors.gold,
      fontWeight: '700',
      fontSize: isMobile ? '20px' : '24px',
      flexShrink: 0,
      marginTop: '2px',
    },
    
    featureListItemText: {
      fontSize: isMobile ? '0.95rem' : '1.1rem',
      color: '#374151',
      lineHeight: '1.6',
      fontWeight: '400',
      fontFamily: "'Inter', sans-serif",
    },

    transformationsSection: {
      maxWidth: '1400px',
      margin: '0 auto',
      marginBottom: isMobile ? '80px' : '120px',
      textAlign: 'center',
      paddingLeft: isMobile ? '20px' : '0',
      paddingRight: isMobile ? '20px' : '0',
      background: 'linear-gradient(135deg, rgba(255, 184, 0, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
      borderRadius: '32px',
      paddingTop: isMobile ? '40px' : '80px',
      paddingBottom: isMobile ? '40px' : '80px',
      boxShadow: '0 20px 60px rgba(10, 10, 12, 0.08)',
      border: `1px solid ${colors.goldBorder}`,
      position: 'relative',
      overflow: 'hidden',
    },
    
    transformationsSectionBg: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `radial-gradient(circle at 10% 10%, ${colors.goldLight} 0%, transparent 40%), radial-gradient(circle at 90% 90%, rgba(10, 10, 12, 0.03) 0%, transparent 40%)`,
      zIndex: 1,
    },
    
    transformationsHeader: {
      marginBottom: isMobile ? '40px' : '60px',
      position: 'relative',
      zIndex: 2,
    },
    
    transformationsTitleContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '20px',
    },
    
    navyTitle: {
      fontSize: isMobile ? '2rem' : isTablet ? '2.25rem' : '2.5rem',
      fontWeight: '700',
      color: colors.background,
      marginTop: 0,
      marginRight: 0,
      marginBottom: '8px',
      marginLeft: 0,
      fontFamily: "'Inter', sans-serif",
      lineHeight: '1.1',
    },
    
    goldTitle: {
      fontSize: isMobile ? '2rem' : isTablet ? '2.25rem' : '2.5rem',
      fontWeight: '700',
      color: colors.gold,
      marginTop: 0,
      marginRight: 0,
      marginBottom: '20px',
      marginLeft: 0,
      fontFamily: "'Inter', sans-serif",
      textShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      lineHeight: '1.1',
    },
    
    transformationsSubtitle: {
      fontSize: isMobile ? '1.125rem' : '1.25rem',
      color: '#4B5563',
      lineHeight: '1.6',
      maxWidth: '800px',
      marginTop: 0,
      marginRight: 'auto',
      marginBottom: 0,
      marginLeft: 'auto',
      fontWeight: '400',
      fontFamily: "'Inter', sans-serif",
    },
    
    beforeAfterContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '24px' : '40px',
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2,
    },
    
    transformationCard: (active: boolean) => ({
      backgroundColor: active ? '#F9FAFB' : colors.white,
      borderRadius: '32px',
      overflow: 'hidden',
      boxShadow: active 
        ? '0 40px 80px rgba(10, 10, 12, 0.15)' 
        : '0 20px 60px rgba(10, 10, 12, 0.08)',
      border: active 
        ? `2px solid ${colors.gold}` 
        : `1px solid ${colors.goldBorder}`,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: active ? 'translateY(-15px)' : 'translateY(0)',
    }),
    
    transformationTitle: {
      fontSize: isMobile ? '1.5rem' : '1.75rem',
      fontWeight: '700',
      color: colors.background,
      marginTop: 0,
      marginRight: 0,
      marginBottom: isMobile ? '20px' : '30px',
      marginLeft: 0,
      textAlign: 'center',
      fontFamily: "'Inter', sans-serif",
      paddingTop: isMobile ? '30px' : '40px',
      paddingRight: isMobile ? '20px' : '40px',
      paddingBottom: 0,
      paddingLeft: isMobile ? '20px' : '40px',
    },
    
    beforeAfterGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? '20px' : '30px',
      paddingTop: 0,
      paddingRight: isMobile ? '20px' : '40px',
      paddingBottom: isMobile ? '30px' : '40px',
      paddingLeft: isMobile ? '20px' : '40px',
    },
    
    imageContainer: {
      position: 'relative',
      borderRadius: '24px',
      overflow: 'hidden',
      height: isMobile ? '250px' : isTablet ? '300px' : '350px',
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
      transition: 'all 0.3s ease',
    },
    
    imageLabel: {
      position: 'absolute',
      top: '20px',
      left: '20px',
      backgroundColor: colors.background,
      color: colors.white,
      paddingTop: '8px',
      paddingRight: '20px',
      paddingBottom: '8px',
      paddingLeft: '20px',
      borderRadius: '30px',
      fontSize: isMobile ? '0.9rem' : '1rem',
      fontWeight: '600',
      fontFamily: "'Inter', sans-serif",
      zIndex: 2,
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    },
    
    beforeLabel: {
      backgroundColor: '#DC2626',
    },
    
    afterLabel: {
      backgroundColor: '#059669',
    },
    
    transformationImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s ease',
    },
    
    transformationDescription: {
      fontSize: isMobile ? '1rem' : '1.125rem',
      color: '#4B5563',
      lineHeight: '1.6',
      marginTop: isMobile ? '20px' : '30px',
      marginRight: isMobile ? '20px' : '40px',
      marginBottom: isMobile ? '30px' : '40px',
      marginLeft: isMobile ? '20px' : '40px',
      fontWeight: '400',
      fontFamily: "'Inter', sans-serif",
      textAlign: 'center',
      borderTop: '2px solid #E5E7EB',
      paddingTop: isMobile ? '20px' : '30px',
    },

    videoTestimonialsSection: {
      maxWidth: '1400px',
      margin: '0 auto',
      marginBottom: isMobile ? '80px' : '120px',
      textAlign: 'center',
      paddingLeft: isMobile ? '20px' : '0',
      paddingRight: isMobile ? '20px' : '0',
      background: 'linear-gradient(135deg, rgba(240, 245, 255, 0.95) 0%, rgba(255, 255, 255, 1) 100%)',
      borderRadius: '32px',
      paddingTop: isMobile ? '40px' : '80px',
      paddingBottom: isMobile ? '40px' : '80px',
      boxShadow: '0 20px 60px rgba(10, 10, 12, 0.08)',
      border: `1px solid ${colors.goldBorder}`,
      position: 'relative',
      overflow: 'hidden',
    },
    
    videoTestimonialsSectionBg: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `radial-gradient(circle at 30% 30%, rgba(10, 10, 12, 0.03) 0%, transparent 50%), radial-gradient(circle at 70% 70%, ${colors.goldLight} 0%, transparent 50%)`,
      zIndex: 1,
    },
    
    videoTestimonialsHeader: {
      marginBottom: isMobile ? '40px' : '60px',
      position: 'relative',
      zIndex: 2,
    },
    
    videoTitleContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '20px',
    },
    
    videoNavyTitle: {
      fontSize: isMobile ? '2rem' : isTablet ? '2.25rem' : '2.5rem',
      fontWeight: '700',
      color: colors.background,
      marginTop: 0,
      marginRight: 0,
      marginBottom: '8px',
      marginLeft: 0,
      fontFamily: "'Inter', sans-serif",
      lineHeight: '1.1',
    },
    
    videoGoldTitle: {
      fontSize: isMobile ? '2rem' : isTablet ? '2.25rem' : '2.5rem',
      fontWeight: '700',
      color: colors.gold,
      marginTop: 0,
      marginRight: 0,
      marginBottom: '20px',
      marginLeft: 0,
      fontFamily: "'Inter', sans-serif",
      textShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      lineHeight: '1.1',
    },
    
    videoSubtitle: {
      fontSize: isMobile ? '1.125rem' : '1.25rem',
      color: '#4B5563',
      lineHeight: '1.6',
      maxWidth: '800px',
      marginTop: 0,
      marginRight: 'auto',
      marginBottom: 0,
      marginLeft: 'auto',
      fontWeight: '400',
      fontFamily: "'Inter', sans-serif",
    },
    
    videoGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
      gap: isMobile ? '20px' : isTablet ? '24px' : '32px',
      maxWidth: '1200px',
      margin: '0 auto',
      marginBottom: isMobile ? '60px' : '80px',
      position: 'relative',
      zIndex: 2,
    },
    
    reviewsSection: {
      maxWidth: '1400px',
      margin: '0 auto',
      marginBottom: isMobile ? '80px' : '120px',
      textAlign: 'center',
      paddingLeft: isMobile ? '20px' : '0',
      paddingRight: isMobile ? '20px' : '0',
      background: 'linear-gradient(135deg, rgba(255, 184, 0, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
      borderRadius: '32px',
      paddingTop: isMobile ? '40px' : '80px',
      paddingBottom: isMobile ? '40px' : '80px',
      boxShadow: '0 20px 60px rgba(10, 10, 12, 0.08)',
      border: `1px solid ${colors.goldBorder}`,
      position: 'relative',
      overflow: 'hidden',
    },
    
    reviewsSectionBg: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `radial-gradient(circle at 20% 20%, ${colors.goldLight} 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(10, 10, 12, 0.03) 0%, transparent 50%)`,
      zIndex: 1,
    },
    
    reviewsHeader: {
      marginBottom: isMobile ? '40px' : '60px',
      position: 'relative',
      zIndex: 2,
    },
    
    reviewsTitle: {
      fontSize: isMobile ? '2rem' : isTablet ? '2.25rem' : '2.5rem',
      fontWeight: '700',
      color: colors.background,
      marginTop: 0,
      marginRight: 0,
      marginBottom: '20px',
      marginLeft: 0,
      fontFamily: "'Inter', sans-serif",
      lineHeight: '1.1',
    },
    
    reviewsSubtitle: {
      fontSize: isMobile ? '1.125rem' : '1.25rem',
      color: '#4B5563',
      lineHeight: '1.6',
      maxWidth: '800px',
      marginTop: 0,
      marginRight: 'auto',
      marginBottom: 0,
      marginLeft: 'auto',
      fontWeight: '400',
      fontFamily: "'Inter', sans-serif",
    },
    
    reviewsGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : 'repeat(2, 1fr)',
      gap: isMobile ? '20px' : isTablet ? '24px' : '32px',
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2,
    },
    
    reviewCard: (active: boolean) => ({
      backgroundColor: active ? '#F9FAFB' : colors.white,
      borderRadius: '32px',
      paddingTop: isMobile ? '30px' : '40px',
      paddingRight: isMobile ? '20px' : '32px',
      paddingBottom: isMobile ? '30px' : '40px',
      paddingLeft: isMobile ? '20px' : '32px',
      textAlign: 'left',
      border: active 
        ? `2px solid ${colors.gold}` 
        : `2px solid ${colors.goldBorder}`,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: active ? 'translateY(-15px)' : 'translateY(0)',
      boxShadow: active 
        ? '0 40px 80px rgba(10, 10, 12, 0.15)' 
        : '0 20px 60px rgba(10, 10, 12, 0.08)',
    }),
    
    reviewHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: isMobile ? '16px' : '20px',
      marginBottom: '24px',
    },
    
    reviewAvatar: {
      width: isMobile ? '60px' : '80px',
      height: isMobile ? '60px' : '80px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: `3px solid ${colors.gold}`,
      boxShadow: `0 4px 12px ${colors.goldLight}`,
    },
    
    reviewerInfo: {
      flex: 1,
    },
    
    reviewerName: {
      fontSize: isMobile ? '1.25rem' : '1.5rem',
      fontWeight: '700',
      color: colors.background,
      marginTop: 0,
      marginRight: 0,
      marginBottom: '8px',
      marginLeft: 0,
      fontFamily: "'Inter', sans-serif",
    },
    
    reviewerDetails: {
      fontSize: isMobile ? '0.9rem' : '1rem',
      color: '#6B7280',
      fontWeight: '400',
      fontFamily: "'Inter', sans-serif",
      marginBottom: '8px',
    },
    
    starsContainer: {
      display: 'flex',
      gap: '4px',
    },
    
    starIcon: {
      color: colors.gold,
      fontSize: isMobile ? '1rem' : '1.25rem',
      fontWeight: '700',
    },
    
    reviewContent: {
      fontSize: isMobile ? '0.95rem' : '1.1rem',
      color: '#4B5563',
      lineHeight: '1.7',
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      fontWeight: '400',
      fontFamily: "'Inter', sans-serif",
      fontStyle: 'italic',
    },
    
    flexibleSolutionsSection: {
      maxWidth: '1400px',
      margin: '0 auto',
      marginBottom: isMobile ? '80px' : '120px',
      textAlign: 'center',
      paddingLeft: isMobile ? '20px' : '0',
      paddingRight: isMobile ? '20px' : '0',
      background: 'linear-gradient(135deg, rgba(248, 250, 252, 0.95) 0%, rgba(255, 255, 255, 1) 100%)',
      borderRadius: '32px',
      paddingTop: isMobile ? '40px' : '80px',
      paddingBottom: isMobile ? '40px' : '80px',
      boxShadow: '0 20px 60px rgba(10, 10, 12, 0.08)',
      border: `1px solid ${colors.goldBorder}`,
      position: 'relative',
      overflow: 'hidden',
    },
    
    flexibleSolutionsSectionBg: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `radial-gradient(circle at 10% 90%, ${colors.goldLight} 0%, transparent 50%), radial-gradient(circle at 90% 10%, rgba(10, 10, 12, 0.03) 0%, transparent 50%)`,
      zIndex: 1,
    },
    
    flexibleSolutionsHeader: {
      marginBottom: isMobile ? '40px' : '60px',
      position: 'relative',
      zIndex: 2,
    },
    
    flexibleSolutionsBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: isMobile ? '8px' : '12px',
      backgroundColor: colors.goldLight,
      paddingTop: isMobile ? '12px' : '16px',
      paddingRight: isMobile ? '20px' : '32px',
      paddingBottom: isMobile ? '12px' : '16px',
      paddingLeft: isMobile ? '20px' : '32px',
      borderRadius: '50px',
      marginBottom: isMobile ? '20px' : '30px',
      border: `2px solid ${colors.goldBorder}`,
      backdropFilter: 'blur(10px)',
    },
    
    flexibleSolutionsBadgeText: {
      fontSize: isMobile ? '14px' : '18px',
      fontWeight: '700',
      color: colors.background,
      letterSpacing: '3px',
      textTransform: 'uppercase',
      fontFamily: "'Inter', sans-serif",
    },
    
    flexibleSolutionsTitle: {
      fontSize: isMobile ? '2.5rem' : isTablet ? '3rem' : '3.5rem',
      fontWeight: '700',
      color: colors.background,
      marginTop: 0,
      marginRight: 0,
      marginBottom: '20px',
      marginLeft: 0,
      lineHeight: '1',
      fontFamily: "'Inter', sans-serif",
      letterSpacing: '-1px',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    },
    
    flexibleSolutionsSubtitle: {
      fontSize: isMobile ? '1.75rem' : isTablet ? '2rem' : '2rem',
      fontWeight: '700',
      color: colors.background,
      marginTop: 0,
      marginRight: 0,
      marginBottom: '16px',
      marginLeft: 0,
      fontFamily: "'Inter', sans-serif",
      lineHeight: '1.2',
    },
    
    flexibleSolutionsDescription: {
      fontSize: isMobile ? '1.125rem' : isTablet ? '1.25rem' : '1.375rem',
      color: '#4B5563',
      lineHeight: '1.7',
      maxWidth: '900px',
      marginTop: 0,
      marginRight: 'auto',
      marginBottom: isMobile ? '40px' : '60px',
      marginLeft: 'auto',
      fontWeight: '400',
      fontFamily: "'Inter', sans-serif",
    },
    
    cleaningPlansGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
      gap: isMobile ? '32px' : isTablet ? '24px' : '32px',
      maxWidth: '1400px',
      margin: '0 auto',
      marginBottom: isMobile ? '60px' : '80px',
      position: 'relative',
      zIndex: 2,
    },
    
    cleaningPlanCard: (active: boolean, color: string) => ({
      backgroundColor: active ? '#F9FAFB' : colors.white,
      borderRadius: '32px',
      overflow: 'hidden',
      boxShadow: active 
        ? '0 40px 80px rgba(10, 10, 12, 0.15)' 
        : '0 20px 60px rgba(10, 10, 12, 0.08)',
      border: active 
        ? `3px solid ${color === colors.background ? colors.gold : color}` 
        : `2px solid ${colors.goldBorder}`,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: active ? 'translateY(-20px)' : 'translateY(0)',
      display: 'flex',
      flexDirection: 'column',
    }),
    
    planHeader: (color: string) => ({
      backgroundColor: color,
      paddingTop: isMobile ? '30px' : '40px',
      paddingRight: isMobile ? '24px' : '32px',
      paddingBottom: isMobile ? '30px' : '40px',
      paddingLeft: isMobile ? '24px' : '32px',
      textAlign: 'center',
      color: color === colors.gold ? colors.background : colors.white,
    }),
    
    planBadge: {
      display: 'inline-block',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      paddingTop: '8px',
      paddingRight: '20px',
      paddingBottom: '8px',
      paddingLeft: '20px',
      borderRadius: '30px',
      fontSize: '14px',
      fontWeight: '700',
      marginBottom: '20px',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      fontFamily: "'Inter', sans-serif",
    },
    
    planTitle: {
      fontSize: isMobile ? '1.75rem' : '2rem',
      fontWeight: '700',
      marginTop: 0,
      marginRight: 0,
      marginBottom: '12px',
      marginLeft: 0,
      fontFamily: "'Inter', sans-serif",
      lineHeight: '1.1',
    },
    
    planFrequency: {
      fontSize: isMobile ? '1.125rem' : '1.25rem',
      fontWeight: '600',
      marginTop: 0,
      marginRight: 0,
      marginBottom: '8px',
      marginLeft: 0,
      fontFamily: "'Inter', sans-serif",
      opacity: 0.9,
    },
    
    planDescription: {
      fontSize: isMobile ? '1rem' : '1.125rem',
      fontWeight: '400',
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      fontFamily: "'Inter', sans-serif",
    },
    
    planContent: {
      paddingTop: isMobile ? '30px' : '40px',
      paddingRight: isMobile ? '24px' : '32px',
      paddingBottom: isMobile ? '30px' : '40px',
      paddingLeft: isMobile ? '24px' : '32px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)',
    },
    
    planDetails: {
      fontSize: isMobile ? '0.95rem' : '1rem',
      color: '#4B5563',
      lineHeight: '1.7',
      marginTop: 0,
      marginRight: 0,
      marginBottom: '32px',
      marginLeft: 0,
      fontWeight: '400',
      fontFamily: "'Inter', sans-serif",
      flex: 1,
    },
    
    planFeatures: {
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '12px' : '16px',
      marginBottom: isMobile ? '30px' : '40px',
    },
    
    planFeature: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      padding: '12px 16px',
      backgroundColor: colors.goldLight,
      borderRadius: '12px',
      border: `1px solid ${colors.goldBorder}`,
    },
    
    planFeatureIcon: {
      color: colors.gold,
      fontWeight: '700',
      fontSize: '20px',
      flexShrink: 0,
      marginTop: '2px',
    },
    
    planFeatureText: {
      fontSize: isMobile ? '0.9rem' : '1rem',
      color: '#374151',
      lineHeight: '1.5',
      fontWeight: '400',
      fontFamily: "'Inter', sans-serif",
    },
    
    planButton: (active: boolean, color: string) => ({
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      backgroundColor: active ? color : 'transparent',
      color: active ? (color === colors.gold ? colors.background : colors.white) : color,
      border: `3px solid ${color}`,
      paddingTop: isMobile ? '16px' : '20px',
      paddingRight: isMobile ? '24px' : '32px',
      paddingBottom: isMobile ? '16px' : '20px',
      paddingLeft: isMobile ? '24px' : '32px',
      borderRadius: '50px',
      fontSize: isMobile ? '0.95rem' : '1rem',
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      fontFamily: "'Inter', sans-serif",
      transform: active ? 'translateY(-3px)' : 'translateY(0)',
      boxShadow: active ? '0 15px 30px rgba(10, 10, 12, 0.15)' : 'none',
      width: '100%',
    }),
    
    consultationSection: {
      backgroundColor: colors.goldLight,
      borderRadius: '24px',
      paddingTop: isMobile ? '40px' : '60px',
      paddingRight: isMobile ? '24px' : '40px',
      paddingBottom: isMobile ? '40px' : '60px',
      paddingLeft: isMobile ? '24px' : '40px',
      textAlign: 'center',
      border: `2px solid ${colors.goldBorder}`,
      maxWidth: '1000px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2,
      backdropFilter: 'blur(10px)',
      background: `linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)`,
      boxShadow: '0 20px 60px rgba(10, 10, 12, 0.1)',
    },
    
    consultationTitle: {
      fontSize: isMobile ? '1.75rem' : isTablet ? '2rem' : '2.25rem',
      fontWeight: '700',
      color: colors.background,
      marginTop: 0,
      marginRight: 0,
      marginBottom: '24px',
      marginLeft: 0,
      fontFamily: "'Inter', sans-serif",
      lineHeight: '1.2',
    },
    
    consultationDescription: {
      fontSize: isMobile ? '1.125rem' : isTablet ? '1.25rem' : '1.375rem',
      color: '#4B5563',
      lineHeight: '1.7',
      marginTop: 0,
      marginRight: 'auto',
      marginBottom: '40px',
      marginLeft: 'auto',
      fontWeight: '400',
      fontFamily: "'Inter', sans-serif",
      maxWidth: '800px',
    },
    
    consultationButton: (active: boolean) => ({
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      backgroundColor: active ? colors.gold : colors.background,
      color: active ? colors.background : colors.white,
      border: 'none',
      paddingTop: isMobile ? '16px' : '20px',
      paddingRight: isMobile ? '32px' : '48px',
      paddingBottom: isMobile ? '16px' : '20px',
      paddingLeft: isMobile ? '32px' : '48px',
      borderRadius: '50px',
      fontSize: isMobile ? '1rem' : '1.125rem',
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      fontFamily: "'Inter', sans-serif",
      transform: active ? 'translateY(-3px)' : 'translateY(0)',
      boxShadow: active 
        ? '0 20px 40px rgba(255, 184, 0, 0.4)' 
        : '0 15px 30px rgba(10, 10, 12, 0.3)',
    }),
    
    beforeAfterCTA: (active: boolean) => ({
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      backgroundColor: active ? colors.gold : colors.background,
      color: active ? colors.background : colors.white,
      border: 'none',
      paddingTop: isMobile ? '16px' : '20px',
      paddingRight: isMobile ? '24px' : '40px',
      paddingBottom: isMobile ? '16px' : '20px',
      paddingLeft: isMobile ? '24px' : '40px',
      borderRadius: '50px',
      fontSize: isMobile ? '0.95rem' : '1rem',
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      fontFamily: "'Inter', sans-serif",
      transform: active ? 'translateY(-3px)' : 'translateY(0)',
      boxShadow: active 
        ? '0 15px 30px rgba(255, 184, 0, 0.4)' 
        : '0 10px 25px rgba(10, 10, 12, 0.3)',
      marginTop: '40px',
      position: 'relative',
      zIndex: 2,
    }),

    ourStorySection: {
      maxWidth: '1400px',
      margin: '0 auto',
      marginBottom: isMobile ? '80px' : '120px',
      textAlign: 'center',
      paddingLeft: isMobile ? '20px' : '0',
      paddingRight: isMobile ? '20px' : '0',
      background: 'linear-gradient(135deg, rgba(255, 184, 0, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
      borderRadius: '32px',
      paddingTop: isMobile ? '40px' : '80px',
      paddingBottom: isMobile ? '40px' : '80px',
      boxShadow: '0 20px 60px rgba(10, 10, 12, 0.08)',
      border: `1px solid ${colors.goldBorder}`,
      position: 'relative',
      overflow: 'hidden',
    },
    
    ourStorySectionBg: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `radial-gradient(circle at 20% 30%, ${colors.goldLight} 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(10, 10, 12, 0.03) 0%, transparent 50%)`,
      zIndex: 1,
    },
    
    ourStoryContent: {
      maxWidth: '1000px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2,
    },
    
    ourStoryTitle: {
      fontSize: isMobile ? '2rem' : isTablet ? '2.25rem' : '2.5rem',
      fontWeight: '700',
      color: colors.background,
      marginTop: 0,
      marginRight: 0,
      marginBottom: '30px',
      marginLeft: 0,
      fontFamily: "'Inter', sans-serif",
      lineHeight: '1.2',
    },
    
    ourStoryDescription: {
      fontSize: isMobile ? '1.125rem' : isTablet ? '1.25rem' : '1.375rem',
      color: '#4B5563',
      lineHeight: '1.8',
      marginTop: 0,
      marginRight: 'auto',
      marginBottom: isMobile ? '40px' : '60px',
      marginLeft: 'auto',
      fontWeight: '400',
      fontFamily: "'Inter', sans-serif",
      maxWidth: '900px',
      padding: isMobile ? '20px' : '40px',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: '24px',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)',
      border: `1px solid ${colors.goldBorder}`,
    },
    
    ourStoryButton: (active: boolean) => ({
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      backgroundColor: active ? colors.gold : colors.background,
      color: active ? colors.background : colors.white,
      border: 'none',
      paddingTop: isMobile ? '16px' : '20px',
      paddingRight: isMobile ? '24px' : '40px',
      paddingBottom: isMobile ? '16px' : '20px',
      paddingLeft: isMobile ? '24px' : '40px',
      borderRadius: '50px',
      fontSize: isMobile ? '0.95rem' : '1rem',
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      fontFamily: "'Inter', sans-serif",
      transform: active ? 'translateY(-3px)' : 'translateY(0)',
      boxShadow: active 
        ? '0 15px 30px rgba(255, 184, 0, 0.4)' 
        : '0 10px 25px rgba(10, 10, 12, 0.3)',
    }),
  };

  return (
    <section style={baseBodyStyles.bodyContainer}>
      {/* The BRAVOS Difference Section */}
      <div style={baseBodyStyles.differenceSection}>
        <div style={baseBodyStyles.differenceSectionBg}></div>
        <div style={baseBodyStyles.differenceBadge}>
          <span style={baseBodyStyles.diamondIcon}>✦</span>
          <span style={baseBodyStyles.differenceBadgeText}>The BRAVOS Difference</span>
        </div>
        
        <div>
          <h2 style={baseBodyStyles.navySubtitle}>
            What You Can Expect from BRAVOS
          </h2>
          <h3 style={baseBodyStyles.goldSubtitle}>
            Houston's Premier Roofing Contractor
          </h3>
        </div>
        
        <p style={baseBodyStyles.differenceDescription}>
          With over 25 years of industry experience, BRAVOS has earned its reputation as Houston's most trusted roofing contractor. 
          We combine master craftsmanship with premium materials to deliver roofs that protect your home and enhance its beauty.
        </p>
      </div>

      {/* Features Grid */}
      <div style={baseBodyStyles.featuresGrid}>
        {features.map((feature, index) => (
          <div 
            key={index}
            style={baseBodyStyles.featureCard(activeFeatureCard === index)}
            onMouseEnter={() => setActiveFeatureCard(index)}
            onMouseLeave={() => setActiveFeatureCard(null)}
            onTouchStart={() => handleTouchStart(setActiveFeatureCard, index)}
            onTouchEnd={() => handleTouchEnd(setActiveFeatureCard, null)}
          >
            <div style={baseBodyStyles.featureImageContainer}>
              <img 
                src={feature.image} 
                alt={feature.imageAlt}
                style={{
                  ...baseBodyStyles.featureImage,
                  transform: activeFeatureCard === index ? 'scale(1.1)' : 'scale(1)'
                }}
              />
            </div>
            
            <div style={baseBodyStyles.featureContent}>
              <div style={baseBodyStyles.featureTitleContainer}>
                <div style={baseBodyStyles.featureNumberBadge}>
                  {feature.number}
                </div>
                <h3 style={baseBodyStyles.featureTitle}>
                  {feature.title}
                </h3>
              </div>
              
              <p style={baseBodyStyles.featureDescription}>
                {feature.description}
              </p>
              
              <div style={baseBodyStyles.featureList}>
                {feature.listItems.map((item, itemIndex) => (
                  <div key={itemIndex} style={baseBodyStyles.featureListItem}>
                    <span style={baseBodyStyles.checkIcon}>✓</span>
                    <span style={baseBodyStyles.featureListItemText}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Before & After Transformations */}
      <div style={baseBodyStyles.transformationsSection}>
        <div style={baseBodyStyles.transformationsSectionBg}></div>
        <div style={baseBodyStyles.transformationsHeader}>
          <div style={baseBodyStyles.transformationsTitleContainer}>
            <h2 style={baseBodyStyles.navyTitle}>
              See the BRAVOS Difference:
            </h2>
            <h2 style={baseBodyStyles.goldTitle}>
              Before & After
            </h2>
          </div>
          <p style={baseBodyStyles.transformationsSubtitle}>
            Witness how we transform damaged, aging roofs into stunning, durable protection systems.
          </p>
        </div>
        
        <div style={baseBodyStyles.beforeAfterContainer}>
          {transformations.map((transformation, index) => (
            <div 
              key={transformation.id}
              style={baseBodyStyles.transformationCard(activeBeforeAfter === index)}
              onMouseEnter={() => setActiveBeforeAfter(index)}
              onMouseLeave={() => setActiveBeforeAfter(null)}
              onTouchStart={() => handleTouchStart(setActiveBeforeAfter, index)}
              onTouchEnd={() => handleTouchEnd(setActiveBeforeAfter, null)}
            >
              <h3 style={baseBodyStyles.transformationTitle}>
                {transformation.title}
              </h3>
              
              <div style={baseBodyStyles.beforeAfterGrid}>
                <div style={baseBodyStyles.imageContainer}>
                  <div style={{...baseBodyStyles.imageLabel, ...baseBodyStyles.beforeLabel}}>
                    BEFORE
                  </div>
                  <img 
                    src={transformation.beforeImage} 
                    alt="Before roof transformation"
                    style={{
                      ...baseBodyStyles.transformationImage,
                      transform: activeBeforeAfter === index ? 'scale(1.05)' : 'scale(1)'
                    }}
                  />
                </div>
                
                <div style={baseBodyStyles.imageContainer}>
                  <div style={{...baseBodyStyles.imageLabel, ...baseBodyStyles.afterLabel}}>
                    AFTER
                  </div>
                  <img 
                    src={transformation.afterImage} 
                    alt="After roof transformation"
                    style={{
                      ...baseBodyStyles.transformationImage,
                      transform: activeBeforeAfter === index ? 'scale(1.05)' : 'scale(1)'
                    }}
                  />
                </div>
              </div>
              
              <p style={baseBodyStyles.transformationDescription}>
                {transformation.description}
              </p>
            </div>
          ))}
        </div>
        
        <button
          style={baseBodyStyles.beforeAfterCTA(activeBeforeAfterButton)}
          onMouseEnter={() => setActiveBeforeAfterButton(true)}
          onMouseLeave={() => setActiveBeforeAfterButton(false)}
          onTouchStart={() => handleTouchStart(setActiveBeforeAfterButton, true)}
          onTouchEnd={() => handleTouchEnd(setActiveBeforeAfterButton, false)}
          onClick={() => {
            window.location.href = '/before-after';
          }}
        >
          See More Transformations
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none"
            style={{
              transition: 'transform 0.3s ease',
              transform: activeBeforeAfterButton ? 'translateX(5px)' : 'translateX(0)'
            }}
          >
            <path 
              d="M5 12H19M19 12L12 5M19 12L12 19" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Video Testimonials */}
      <div style={baseBodyStyles.videoTestimonialsSection}>
        <div style={baseBodyStyles.videoTestimonialsSectionBg}></div>
        <div style={baseBodyStyles.videoTestimonialsHeader}>
          <div style={baseBodyStyles.videoTitleContainer}>
            <h2 style={baseBodyStyles.videoNavyTitle}>
              Video Testimonials
            </h2>
            <h2 style={baseBodyStyles.videoGoldTitle}>
              From Our Satisfied Homeowners
            </h2>
          </div>
          <p style={baseBodyStyles.videoSubtitle}>
            Hear directly from clients who trust BRAVOS with their most valuable investment
          </p>
        </div>
        
        <div style={baseBodyStyles.videoGrid}>
          {videoTestimonials.map((video, index) => (
            <VideoTestimonialCard
              key={video.id}
              video={video}
              index={index}
              activeVideo={activeVideo}
              setActiveVideo={setActiveVideo}
              playingVideo={playingVideo}
              setPlayingVideo={setPlayingVideo}
            />
          ))}
        </div>
      </div>

      {/* Customer Reviews */}
      <div style={baseBodyStyles.reviewsSection}>
        <div style={baseBodyStyles.reviewsSectionBg}></div>
        <div style={baseBodyStyles.reviewsHeader}>
          <h2 style={baseBodyStyles.reviewsTitle}>
            Real Reviews from Real Homeowners
          </h2>
          <p style={baseBodyStyles.reviewsSubtitle}>
            Don't just take our word for it—hear what our customers have to say
          </p>
        </div>
        
        <div style={baseBodyStyles.reviewsGrid}>
          {reviews.map((review, index) => (
            <div 
              key={review.id}
              style={baseBodyStyles.reviewCard(activeReview === index)}
              onMouseEnter={() => setActiveReview(index)}
              onMouseLeave={() => setActiveReview(null)}
              onTouchStart={() => handleTouchStart(setActiveReview, index)}
              onTouchEnd={() => handleTouchEnd(setActiveReview, null)}
            >
              <div style={baseBodyStyles.reviewHeader}>
                <img 
                  src={review.avatar} 
                  alt={review.name}
                  style={baseBodyStyles.reviewAvatar}
                />
                <div style={baseBodyStyles.reviewerInfo}>
                  <h4 style={baseBodyStyles.reviewerName}>
                    {review.name}
                  </h4>
                  <p style={baseBodyStyles.reviewerDetails}>
                    {review.location} • {review.service}
                  </p>
                  <div style={baseBodyStyles.starsContainer}>
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} style={baseBodyStyles.starIcon}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <p style={baseBodyStyles.reviewContent}>
                "{review.content}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Meet the Founders Section */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        marginBottom: isMobile ? '80px' : '120px',
        paddingTop: isMobile ? '0' : '0',
        paddingRight: isMobile ? '20px' : '40px',
        paddingBottom: isMobile ? '0' : '0',
        paddingLeft: isMobile ? '20px' : '40px',
        background: 'linear-gradient(135deg, rgba(240, 245, 255, 0.95) 0%, rgba(255, 255, 255, 1) 100%)',
        borderRadius: '32px',
        padding: isMobile ? '40px 20px' : '80px 40px',
        boxShadow: '0 20px 60px rgba(10, 10, 12, 0.08)',
        border: `1px solid ${colors.goldBorder}`,
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 20% 80%, ${colors.goldLight} 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(10, 10, 12, 0.03) 0%, transparent 50%)`,
          zIndex: 1,
        }}></div>
        
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '40px' : isTablet ? '50px' : '80px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
        }}>
          
          <div style={{
            flex: 1,
            position: 'relative',
          }}>
            <div style={{
              backgroundColor: colors.background,
              borderRadius: '30px',
              padding: '8px',
              position: 'relative',
              boxShadow: '0 40px 80px rgba(10, 10, 12, 0.3)',
            }}>
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="BRAVOS Founders"
                style={{
                  width: '100%',
                  height: isMobile ? '400px' : isTablet ? '500px' : '600px',
                  objectFit: 'cover',
                  borderRadius: '24px',
                  border: `4px solid ${colors.gold}`,
                }}
              />
              
              <div style={{
                position: 'absolute',
                bottom: isMobile ? '-20px' : isTablet ? '-25px' : '-30px',
                left: isMobile ? '20px' : '40px',
                right: isMobile ? '20px' : '40px',
                backgroundColor: colors.gold,
                paddingTop: isMobile ? '20px' : '30px',
                paddingRight: isMobile ? '20px' : '30px',
                paddingBottom: isMobile ? '20px' : '30px',
                paddingLeft: isMobile ? '20px' : '30px',
                borderRadius: '20px',
                textAlign: 'center',
                boxShadow: '0 20px 40px rgba(255, 184, 0, 0.4)',
                transform: 'rotate(-2deg)',
                zIndex: 3,
              }}>
                <div style={{
                  fontSize: isMobile ? '18px' : isTablet ? '20px' : '24px',
                  fontWeight: '700',
                  color: colors.background,
                  fontFamily: "'Inter', sans-serif",
                }}>
                  Quality Inspectors & Founders
                </div>
              </div>
            </div>
          </div>
          
          <div style={{
            flex: 1,
            textAlign: isMobile ? 'center' : 'left',
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: isMobile ? '8px' : '12px',
              backgroundColor: colors.goldLight,
              paddingTop: isMobile ? '12px' : '16px',
              paddingRight: isMobile ? '20px' : '32px',
              paddingBottom: isMobile ? '12px' : '16px',
              paddingLeft: isMobile ? '20px' : '32px',
              borderRadius: '50px',
              marginBottom: isMobile ? '30px' : '40px',
              border: `2px solid ${colors.goldBorder}`,
              backdropFilter: 'blur(10px)',
            }}>
              <span style={{
                color: colors.gold,
                fontWeight: '700',
                fontSize: isMobile ? '20px' : '24px',
                fontFamily: "'Inter', sans-serif",
              }}>
                ✦
              </span>
              <span style={{
                fontSize: isMobile ? '14px' : '18px',
                fontWeight: '700',
                color: colors.background,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                fontFamily: "'Inter', sans-serif",
              }}>
                Meet The Visionaries
              </span>
            </div>
            
            <div style={{
              marginBottom: isMobile ? '20px' : '30px',
            }}>
              <h2 style={{
                fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
                fontWeight: '700',
                color: colors.background,
                marginTop: 0,
                marginRight: 0,
                marginBottom: '8px',
                marginLeft: 0,
                fontFamily: "'Inter', sans-serif",
                lineHeight: '1',
                letterSpacing: '-1px',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
              }}>
                Meet The Founders:
              </h2>
              <h2 style={{
                fontSize: isMobile ? '3rem' : isTablet ? '4rem' : '5rem',
                fontWeight: '700',
                color: colors.background,
                marginTop: 0,
                marginRight: 0,
                marginBottom: '8px',
                marginLeft: 0,
                fontFamily: "'Inter', sans-serif",
                lineHeight: '0.9',
              }}>
                David{" "}
                <span style={{
                  color: colors.gold,
                  fontSize: isMobile ? '3.5rem' : isTablet ? '4.5rem' : '6rem',
                  display: 'inline-block',
                  margin: '0 20px',
                  transform: 'translateY(5px)',
                }}>
                  &
                </span>
                {" "}Sarah
              </h2>
            </div>
            
            <p style={{
              fontSize: isMobile ? '1.125rem' : isTablet ? '1.25rem' : '1.375rem',
              color: '#4B5563',
              lineHeight: '1.7',
              marginTop: 0,
              marginRight: 0,
              marginBottom: isMobile ? '20px' : '30px',
              marginLeft: 0,
              fontWeight: '400',
              fontFamily: "'Inter', sans-serif",
            }}>
              The husband-and-wife team behind Houston's most trusted roofing company. 
              Their commitment to craftsmanship and integrity has built BRAVOS into the region's premier roofing contractor.
            </p>
            
            <div style={{
              backgroundColor: 'rgba(10, 10, 12, 0.03)',
              padding: isMobile ? '30px' : '40px',
              borderRadius: '20px',
              border: `2px solid ${colors.goldBorder}`,
              marginBottom: isMobile ? '30px' : '40px',
              backdropFilter: 'blur(10px)',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.9) 100%)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.05)',
            }}>
              <h3 style={{
                fontSize: isMobile ? '1.5rem' : isTablet ? '1.75rem' : '2rem',
                fontWeight: '700',
                color: colors.background,
                marginTop: 0,
                marginRight: 0,
                marginBottom: isMobile ? '16px' : '20px',
                marginLeft: 0,
                fontFamily: "'Inter', sans-serif",
              }}>
                Our Story of Excellence
              </h3>
              <p style={{
                fontSize: isMobile ? '0.95rem' : '1rem',
                color: '#4B5563',
                lineHeight: '1.8',
                marginTop: 0,
                marginRight: 0,
                marginBottom: isMobile ? '16px' : '20px',
                marginLeft: 0,
                fontWeight: '400',
                fontFamily: "'Inter', sans-serif",
              }}>
                With over 25 years of combined experience in the roofing industry, David and Sarah founded BRAVOS with one mission: 
                to provide Houston homeowners with honest, high-quality roofing solutions backed by exceptional customer service.
              </p>
              <p style={{
                fontSize: isMobile ? '0.95rem' : '1rem',
                color: '#4B5563',
                lineHeight: '1.8',
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 0,
                fontWeight: '400',
                fontFamily: "'Inter', sans-serif",
              }}>
                What started as a family operation has grown into Houston's #1 rated roofing company, serving over 3,500 homeowners 
                and maintaining a 99.7% satisfaction rate. Their hands-on approach means they're personally invested in every project.
              </p>
            </div>
            
            <button
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                backgroundColor: colors.background,
                color: colors.white,
                border: 'none',
                paddingTop: isMobile ? '16px' : '20px',
                paddingRight: isMobile ? '24px' : '40px',
                paddingBottom: isMobile ? '16px' : '20px',
                paddingLeft: isMobile ? '24px' : '40px',
                borderRadius: '50px',
                fontSize: isMobile ? '0.95rem' : '1rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                fontFamily: "'Inter', sans-serif",
                transform: activeButton === 'learnMore' ? 'translateY(-3px)' : 'translateY(0)',
                boxShadow: activeButton === 'learnMore' 
                  ? '0 20px 40px rgba(10, 10, 12, 0.4)' 
                  : '0 10px 30px rgba(10, 10, 12, 0.3)',
              }}
              onMouseEnter={() => setActiveButton('learnMore')}
              onMouseLeave={() => setActiveButton(null)}
              onTouchStart={() => handleTouchStart(setActiveButton, 'learnMore')}
              onTouchEnd={() => handleTouchEnd(setActiveButton, null)}
              onClick={() => {
                window.location.href = '/about';
              }}
            >
              Learn More About Us
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none"
                style={{
                  transition: 'transform 0.3s ease',
                  transform: activeButton === 'learnMore' ? 'translateX(5px)' : 'translateX(0)'
                }}
              >
                <path 
                  d="M5 12H19M19 12L12 5M19 12L12 19" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div style={baseBodyStyles.ourStorySection}>
        <div style={baseBodyStyles.ourStorySectionBg}></div>
        <div style={baseBodyStyles.ourStoryContent}>
          <h2 style={baseBodyStyles.ourStoryTitle}>
            The BRAVOS Commitment
          </h2>
          
          <div style={baseBodyStyles.ourStoryDescription}>
            <p style={{
              marginTop: 0,
              marginBottom: '30px',
              fontSize: isMobile ? '1.125rem' : '1.25rem',
              lineHeight: 1.7,
              fontWeight: '400',
              color: '#4B5563',
              fontFamily: "'Inter', sans-serif",
            }}>
              While other contractors focus on speed, we focus on precision. Every BRAVOS roof is engineered for maximum 
              protection, optimal ventilation, and lasting beauty. We don't just install roofs—we create lasting relationships 
              built on trust, quality, and unparalleled customer service.
            </p>
            
            <StatsCounter />
            
            <p style={{
              marginTop: '40px',
              marginBottom: 0,
              fontSize: isMobile ? '1.125rem' : '1.25rem',
              lineHeight: 1.7,
              fontWeight: '400',
              color: '#4B5563',
              fontFamily: "'Inter', sans-serif",
            }}>
              Join thousands of satisfied homeowners who trust BRAVOS with their most valuable investment. 
              From our meticulous installation process to our comprehensive warranties, we're redefining 
              what it means to be a roofing contractor in Houston.
            </p>
          </div>
          
          <button
            style={baseBodyStyles.ourStoryButton(activeOurStory)}
            onMouseEnter={() => setActiveOurStory(true)}
            onMouseLeave={() => setActiveOurStory(false)}
            onTouchStart={() => handleTouchStart(setActiveOurStory, true)}
            onTouchEnd={() => handleTouchEnd(setActiveOurStory, false)}
            onClick={() => {
              window.location.href = '/about';
            }}
          >
            Discover Our Story
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none"
              style={{
                transition: 'transform 0.3s ease',
                transform: activeOurStory ? 'translateX(5px)' : 'translateX(0)'
              }}
            >
              <path 
                d="M5 12H19M19 12L12 5M19 12L12 19" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Roofing Services Section */}
      <div style={baseBodyStyles.flexibleSolutionsSection}>
        <div style={baseBodyStyles.flexibleSolutionsSectionBg}></div>
        <div style={baseBodyStyles.flexibleSolutionsHeader}>
          <div style={baseBodyStyles.flexibleSolutionsBadge}>
            <span style={baseBodyStyles.diamondIcon}>✦</span>
            <span style={baseBodyStyles.flexibleSolutionsBadgeText}>Roofing Services</span>
          </div>
          
          <h2 style={baseBodyStyles.flexibleSolutionsTitle}>
            Professional Roofing Solutions
          </h2>
          <h3 style={baseBodyStyles.flexibleSolutionsSubtitle}>
            <span style={{ color: colors.gold }}>Quality Craftsmanship</span> For Every Home
          </h3>
          
          <p style={baseBodyStyles.flexibleSolutionsDescription}>
            From complete replacements to emergency repairs, we deliver the same exceptional quality and attention to detail 
            on every project, regardless of size or scope.
          </p>
        </div>
        
        <div style={baseBodyStyles.cleaningPlansGrid}>
          {roofingPlans.map((plan, index) => (
            <div 
              key={plan.id}
              style={baseBodyStyles.cleaningPlanCard(activeScheduleCard === index, plan.color)}
              onMouseEnter={() => setActiveScheduleCard(index)}
              onMouseLeave={() => setActiveScheduleCard(null)}
              onTouchStart={() => handleTouchStart(setActiveScheduleCard, index)}
              onTouchEnd={() => handleTouchEnd(setActiveScheduleCard, null)}
            >
              <div style={baseBodyStyles.planHeader(plan.color)}>
                <div style={baseBodyStyles.planBadge}>
                  {plan.badge}
                </div>
                <h3 style={baseBodyStyles.planTitle}>
                  {plan.title}
                </h3>
                <p style={baseBodyStyles.planFrequency}>
                  {plan.frequency}
                </p>
                <p style={baseBodyStyles.planDescription}>
                  {plan.description}
                </p>
              </div>
              
              <div style={baseBodyStyles.planContent}>
                <p style={baseBodyStyles.planDetails}>
                  {plan.details}
                </p>
                
                <div style={baseBodyStyles.planFeatures}>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} style={baseBodyStyles.planFeature}>
                      <span style={baseBodyStyles.planFeatureIcon}>✓</span>
                      <span style={baseBodyStyles.planFeatureText}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                <button
                  style={baseBodyStyles.planButton(
                    activeScheduleButton === `plan-${plan.id}`,
                    plan.color
                  )}
                  onMouseEnter={() => setActiveScheduleButton(`plan-${plan.id}`)}
                  onMouseLeave={() => setActiveScheduleButton(null)}
                  onTouchStart={() => handleTouchStart(setActiveScheduleButton, `plan-${plan.id}`)}
                  onTouchEnd={() => handleTouchEnd(setActiveScheduleButton, null)}
                  onClick={() => {
                    window.location.href = '/contact';
                  }}
                >
                  {plan.buttonText}
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none"
                    style={{
                      transition: 'transform 0.3s ease',
                      transform: activeScheduleButton === `plan-${plan.id}` ? 'translateX(5px)' : 'translateX(0)'
                    }}
                  >
                    <path 
                      d="M5 12H19M19 12L12 5M19 12L12 19" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div style={baseBodyStyles.consultationSection}>
          <h3 style={baseBodyStyles.consultationTitle}>
            Not Sure What Your Roof Needs?
          </h3>
          <p style={baseBodyStyles.consultationDescription}>
            Our certified inspectors will assess your roof, identify any issues, and provide honest recommendations 
            with no pressure or hidden agendas. Free inspections, always.
          </p>
          <button
            style={baseBodyStyles.consultationButton(activeConsultation)}
            onMouseEnter={() => setActiveConsultation(true)}
            onMouseLeave={() => setActiveConsultation(false)}
            onTouchStart={() => handleTouchStart(setActiveConsultation, true)}
            onTouchEnd={() => handleTouchEnd(setActiveConsultation, false)}
            onClick={() => {
              window.location.href = '/contact';
            }}
          >
            Schedule Free Inspection
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none"
              style={{
                transition: 'transform 0.3s ease',
                transform: activeConsultation ? 'translateX(5px)' : 'translateX(0)'
              }}
            >
              <path 
                d="M5 12H19M19 12L12 5M19 12L12 19" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection 
        title="Frequently Asked Roofing Questions"
        subtitle="Find answers to common questions about our roofing services. If you don't see your question here, contact our team for personalized assistance."
        accentColor="#FFB800"
        textColor="#0A0A0C"
        backgroundColor="#FFFFFF"
        containerStyle={{
          marginTop: '0',
          marginBottom: '0',
          paddingTop: isMobile ? '60px' : '80px',
          paddingBottom: isMobile ? '60px' : '80px',
          paddingLeft: isMobile ? '20px' : '40px',
          paddingRight: isMobile ? '20px' : '40px',
          background: 'linear-gradient(135deg, rgba(248, 250, 252, 0.95) 0%, rgba(255, 255, 255, 1) 100%)',
          borderRadius: '32px',
          boxShadow: '0 20px 60px rgba(10, 10, 12, 0.08)',
          border: '1px solid rgba(255, 184, 0, 0.3)',
          position: 'relative',
          overflow: 'hidden',
        }}
      />
    </section>
  );
};

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <BodySection />
      <BottomCTAButtons 
        phoneNumber="+12815551234"
        callText="Call Now"
        quoteText="Free Quote"
        bookText="Schedule"
      />
    </>
  );
};

export default HomePage;