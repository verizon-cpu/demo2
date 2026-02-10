"use client";

import { useState, useEffect, FormEvent, ChangeEvent, useRef } from 'react';

// Bottom CTA Buttons Component - UPDATED FOR MOBILE
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
  quoteText = 'Get Quote',
  bookText = 'Book Now',
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
    fontFamily: "'Cormorant Garamond', serif",
    fontWeight: 600,
    fontSize: isMobile ? '10px' : '11px',
    letterSpacing: '0.5px',
    textTransform: 'uppercase' as const,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    ...buttonStyle
  };

  const callButtonStyle: React.CSSProperties = {
    ...baseButtonStyle,
    background: 'linear-gradient(135deg, #C2B280 0%, #D4C9A1 100%)',
    color: '#1A3C34',
    boxShadow: '0 4px 15px rgba(194, 178, 128, 0.2)',
  };

  const quoteButtonStyle: React.CSSProperties = {
    ...baseButtonStyle,
    background: 'linear-gradient(135deg, #1A3C34 0%, #2D5C4F 100%)',
    color: '#F5F1E8',
    boxShadow: '0 4px 15px rgba(26, 60, 52, 0.2)',
  };

  const bookButtonStyle: React.CSSProperties = {
    ...baseButtonStyle,
    background: 'linear-gradient(135deg, #C2B280 0%, #D4C9A1 100%)',
    color: '#1A3C34',
    boxShadow: '0 4px 15px rgba(194, 178, 128, 0.2)',
  };

  const buttonHoverStyle: React.CSSProperties = {
    transform: 'translateY(-3px) scale(1.05)',
  };

  const callHoverStyle: React.CSSProperties = {
    ...buttonHoverStyle,
    boxShadow: '0 8px 20px rgba(194, 178, 128, 0.3)',
    background: 'linear-gradient(135deg, #D4C9A1 0%, #C2B280 100%)',
  };

  const quoteHoverStyle: React.CSSProperties = {
    ...buttonHoverStyle,
    boxShadow: '0 8px 20px rgba(26, 60, 52, 0.3)',
    background: 'linear-gradient(135deg, #2D5C4F 0%, #1A3C34 100%)',
  };

  const bookHoverStyle: React.CSSProperties = {
    ...buttonHoverStyle,
    boxShadow: '0 8px 20px rgba(194, 178, 128, 0.3)',
    background: 'linear-gradient(135deg, #D4C9A1 0%, #C2B280 100%)',
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
        background: 'rgba(245, 241, 232, 0.95)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: '50px',
        padding: isMobile ? '6px' : '8px',
        boxShadow: '0 8px 30px rgba(26, 60, 52, 0.1)',
        border: '1px solid rgba(194, 178, 128, 0.2)',
        width: isMobile ? 'calc(100vw - 20px)' : 'calc(100vw - 30px)',
        maxWidth: '500px',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
        transition: 'all 0.3s ease',
        ...containerStyle
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateX(-50%) translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 15px 40px rgba(26, 60, 52, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateX(-50%) translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 30px rgba(26, 60, 52, 0.1)';
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
              <path d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z" fill="#1A3C34"/>
              <path d="M13 8C15.103 8 16 8.897 16 11H18C18 7.774 16.225 6 13 6V8ZM16.422 13.443C16.229 13.268 15.978 13.192 15.727 13.192C15.476 13.192 15.225 13.268 15.031 13.443L13.638 14.828C13.174 14.559 12.639 14.346 12.077 14.195C11.516 14.044 10.953 13.971 10.413 13.971C9.873 13.971 9.311 14.044 8.749 14.195C8.188 14.346 7.653 14.559 7.189 14.828L5.796 13.443C5.603 13.268 5.352 13.192 5.101 13.192C4.85 13.192 4.599 13.268 4.405 13.443L2.69 15.145C2.497 15.32 2.4 15.572 2.4 15.824C2.4 16.076 2.497 16.328 2.69 16.503L5.574 19.4C6.985 20.812 8.947 21.6 11.038 21.6C13.13 21.6 15.091 20.812 16.502 19.4L19.386 16.503C19.58 16.328 19.676 16.076 19.676 15.824C19.676 15.572 19.58 15.32 19.386 15.145L17.672 13.443H16.422Z" fill="#1A3C34"/>
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
              <path d="M9 12H15M12 9V15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#F5F1E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
              <path d="M5 12H19M12 5L19 12L12 19" stroke="#1A3C34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
  
  const [formData, setFormData] = useState({
    bedrooms: '1',
    bathrooms: '1',
    squareFeet: '1000',
    serviceType: 'deep-cleaning',
    frequency: 'one-time'
  });
  
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [showEstimate, setShowEstimate] = useState(false);
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
  const [calculateButtonActive, setCalculateButtonActive] = useState(false);
  const [bookNowButtonActive, setBookNowButtonActive] = useState(false);
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

  const calculateEstimate = () => {
    const baseRate = 100;
    const bedroomRate = parseInt(formData.bedrooms) * 25;
    const bathroomRate = parseInt(formData.bathrooms) * 20;
    const squareFootRate = Math.max(0, (parseInt(formData.squareFeet) - 1000) / 100) * 5;
    
    let serviceMultiplier = 1;
    switch(formData.serviceType) {
      case 'deep-cleaning': serviceMultiplier = 1.5; break;
      case 'move-in-out': serviceMultiplier = 1.8; break;
      case 'post-construction': serviceMultiplier = 2.0; break;
      case 'regular': serviceMultiplier = 1.0; break;
      default: serviceMultiplier = 1.0;
    }
    
    let frequencyDiscount = 0;
    switch(formData.frequency) {
      case 'weekly': frequencyDiscount = 0.15; break;
      case 'bi-weekly': frequencyDiscount = 0.10; break;
      case 'monthly': frequencyDiscount = 0.05; break;
      default: frequencyDiscount = 0;
    }
    
    let total = (baseRate + bedroomRate + bathroomRate + squareFootRate) * serviceMultiplier;
    total = total * (1 - frequencyDiscount);
    
    setEstimatedPrice(Math.round(total));
    setShowEstimate(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (showEstimate) {
      setShowEstimate(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setMobileServicesOpen(false);
    }
  };

  const toggleMobileServices = () => {
    setMobileServicesOpen(!mobileServicesOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const handleNavigation = (path: string) => {
    window.location.href = path;
    closeMobileMenu();
  };
  
  const handleGoogleReviewsClick = () => {
    window.open("https://g.page/r/CYOUR_GOOGLE_REVIEWS_LINK_HERE", '_blank');
  };
  
  const services = [
    { name: "Airbnb Cleaning", url: "/airbnb-cleaning" },
    { name: "Housekeeping", url: "/housekeeping" },
    { name: "Move In/Move Out Cleaning", url: "/move-in-move-out-cleaning" },
    { name: "Apartment Cleaning", url: "/apartment-cleaning" },
    { name: "Commercial Cleaning", url: "/commercial-cleaning" },
    { name: "Deep Cleaning", url: "/deep-cleaning" }
  ];

  const handleTouchStart = (setter: (value: any) => void, value: any) => {
    setter(value);
  };

  const handleTouchEnd = (setter: (value: any) => void, resetValue: any = null) => {
    setTimeout(() => setter(resetValue), 150);
  };

  const baseStyles: any = {
    heroSection: {
      position: 'relative',
      minHeight: '100dvh',
      backgroundColor: '#1A3C34',
      overflow: 'hidden',
      fontFamily: "'Cormorant Garamond', serif",
      width: '100%',
      maxWidth: '100vw',
      boxSizing: 'border-box',
    },

    headerContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: isMobile ? (isSmallMobile ? '12px 16px' : '15px 20px') : '20px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: isMobile ? '10px' : '40px',
      width: '100%',
      boxSizing: 'border-box' ,
    },
    
    brandSection: {
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0,
      minWidth: 0,
    },
    
    logoMark: {
      display: 'flex',
      alignItems: 'center',
      gap: isMobile ? (isSmallMobile ? '8px' : '10px') : '16px',
      textDecoration: 'none',
      cursor: 'pointer',
      flexShrink: 0,
    },
    
    logoCircle: {
      width: isMobile ? (isSmallMobile ? '36px' : '40px') : '50px',
      height: isMobile ? (isSmallMobile ? '36px' : '40px') : '50px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #C2B280 0%, #D4C9A1 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 20px rgba(194, 178, 128, 0.2)',
      flexShrink: 0,
    },
    
    logoLetter: {
      fontSize: isMobile ? (isSmallMobile ? '18px' : '20px') : '24px',
      fontWeight: 600,
      color: '#1A3C34',
      fontFamily: "'Cormorant Garamond', serif",
    },
    
    logoTextContainer: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
    },
    
    logoName: {
      fontSize: isMobile ? (isSmallMobile ? '18px' : '20px') : '28px',
      fontWeight: 600,
      color: '#F5F1E8',
      letterSpacing: '0.5px',
      fontFamily: "'Cormorant Garamond', serif",
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    
    logoTagline: {
      fontSize: isMobile ? (isSmallMobile ? '6px' : '8px') : '11px',
      fontWeight: 500,
      color: '#C2B280',
      letterSpacing: isMobile ? '1px' : '2px',
      textTransform: 'uppercase',
      textShadow: '0 1px 1px rgba(0, 0, 0, 0.1)',
      fontFamily: "'Inter', sans-serif",
      lineHeight: 1,
      marginTop: '2px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    
    navigation: {
      display: isMobile ? 'none' : 'flex',
      alignItems: 'center',
      gap: isTablet ? '25px' : '40px',
      flex: 1,
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    
    navItem: (active: boolean) => ({
      fontSize: isTablet ? '14px' : '15px',
      fontWeight: 500,
      color: active ? '#C2B280' : '#F5F1E8',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      position: 'relative',
      padding: '8px 0',
      cursor: 'pointer',
      fontFamily: "'Inter', sans-serif",
      whiteSpace: 'nowrap',
    }),
    
    servicesDropdownContainer: {
      position: 'relative',
      display: 'inline-block',
    },
    
    servicesButton: (active: boolean, open: boolean) => ({
      background: open ? 'rgba(194, 178, 128, 0.1)' : 'transparent',
      border: 'none',
      color: active || open ? '#C2B280' : '#F5F1E8',
      fontSize: isTablet ? '14px' : '15px',
      fontWeight: 500,
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer',
      padding: '8px 16px',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      fontFamily: "'Inter', sans-serif",
      whiteSpace: 'nowrap',
    }),
    
    servicesDropdown: {
      position: 'absolute',
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'rgba(26, 60, 52, 0.98)',
      backdropFilter: 'blur(20px)',
      borderRadius: '12px',
      padding: '12px',
      minWidth: isMobile ? '250px' : '280px',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
      border: '1px solid rgba(194, 178, 128, 0.2)',
      zIndex: 1000,
      marginTop: '8px',
    },
    
    serviceItem: (active: boolean) => ({
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 16px',
      borderRadius: '8px',
      textDecoration: 'none',
      transition: 'all 0.2s ease',
      color: active ? '#C2B280' : '#F5F1E8',
      backgroundColor: active ? 'rgba(194, 178, 128, 0.1)' : 'transparent',
      cursor: 'pointer',
      fontFamily: "'Inter', sans-serif",
    }),
    
    serviceItemText: {
      fontSize: isMobile ? '13px' : '14px',
      fontWeight: 500,
      fontFamily: "'Inter', sans-serif",
    },
    
    ctaSection: {
      display: isMobile ? 'none' : 'flex',
      alignItems: 'center',
      gap: isTablet ? '20px' : '30px',
      flexShrink: 0,
    },
    
    phoneWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    
    phoneIcon: (active: boolean) => ({
      width: isTablet ? '35px' : '40px',
      height: isTablet ? '35px' : '40px',
      borderRadius: '50%',
      background: active ? 'rgba(194, 178, 128, 0.2)' : 'rgba(194, 178, 128, 0.15)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
    }),
    
    phoneLabel: {
      fontSize: isTablet ? '10px' : '11px',
      fontWeight: 500,
      color: '#C2B280',
      letterSpacing: '0.5px',
      textShadow: '0 1px 1px rgba(0, 0, 0, 0.1)',
      fontFamily: "'Inter', sans-serif",
    },
    
    phoneNumber: (active: boolean) => ({
      fontSize: isTablet ? '14px' : '16px',
      fontWeight: 500,
      color: active ? '#C2B280' : '#F5F1E8',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
      textShadow: '0 1px 1px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      fontFamily: "'Inter', sans-serif",
    }),
    
    headerButton: (active: boolean) => ({
      background: 'linear-gradient(135deg, #C2B280 0%, #D4C9A1 100%)',
      color: '#1A3C34',
      border: 'none',
      padding: isTablet ? '12px 24px' : '14px 32px',
      fontSize: isTablet ? '14px' : '15px',
      fontWeight: 500,
      borderRadius: '30px',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      letterSpacing: '0.5px',
      boxShadow: active ? '0 12px 30px rgba(194, 178, 128, 0.2)' : '0 8px 25px rgba(194, 178, 128, 0.15)',
      transform: active ? 'translateY(-2px)' : 'translateY(0)',
      fontFamily: "'Inter', sans-serif",
      whiteSpace: 'nowrap',
    }),
    
    mobileMenuButton: {
      display: isMobile ? 'flex' : 'none',
      background: 'transparent',
      border: 'none',
      flexDirection: 'column',
      gap: '4px',
      cursor: 'pointer',
      padding: '8px',
    },
    
    menuLine: {
      width: '24px',
      height: '2px',
      backgroundColor: '#F5F1E8',
      borderRadius: '1px',
      transition: 'all 0.3s ease',
    },

    mobileMenuOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(26, 60, 52, 0.98)',
      zIndex: 999,
      display: 'flex',
      flexDirection: 'column',
      backdropFilter: 'blur(20px)',
      transition: 'all 0.3s ease',
      overflowY: 'auto',
      WebkitOverflowScrolling: 'touch',
    },
    
    mobileMenuHeader: {
      padding: isSmallMobile ? '1rem' : '1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid rgba(245, 241, 232, 0.1)',
      flexShrink: 0,
    },
    
    mobileMenuContent: {
      padding: isSmallMobile ? '1.5rem 1rem' : '2rem 1.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      flex: 1,
      overflowY: 'auto',
    },
    
    mobileNavItem: (active: boolean) => ({
      color: active ? '#C2B280' : '#F5F1E8',
      textDecoration: 'none',
      fontWeight: 500,
      fontSize: isSmallMobile ? '1rem' : '1.1rem',
      paddingTop: '0.75rem',
      paddingBottom: '0.75rem',
      borderBottom: '1px solid rgba(245, 241, 232, 0.1)',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
      fontFamily: "'Inter', sans-serif",
    }),
    
    mobileServicesButton: (active: boolean, open: boolean) => ({
      background: 'transparent',
      border: 'none',
      color: active || open ? '#C2B280' : '#F5F1E8',
      fontWeight: 500,
      fontSize: isSmallMobile ? '1rem' : '1.1rem',
      paddingTop: '0.75rem',
      paddingBottom: '0.75rem',
      borderBottom: '1px solid rgba(245, 241, 232, 0.1)',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      textAlign: 'left',
      fontFamily: "'Inter', sans-serif",
    }),
    
    mobileServicesDropdown: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      paddingTop: '0.75rem',
      paddingBottom: '0.75rem',
      paddingLeft: '1rem',
      borderBottom: '1px solid rgba(245, 241, 232, 0.1)',
    },
    
    mobileServiceItem: (active: boolean) => ({
      color: active ? '#C2B280' : '#F5F1E8',
      textDecoration: 'none',
      fontWeight: 500,
      fontSize: isSmallMobile ? '0.85rem' : '0.95rem',
      padding: '0.5rem 0.75rem',
      borderRadius: '8px',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
      backgroundColor: active ? 'rgba(194, 178, 128, 0.1)' : 'transparent',
      fontFamily: "'Inter', sans-serif",
    }),
    
    mobileCTASection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      padding: isSmallMobile ? '1rem' : '1.5rem',
      borderTop: '1px solid rgba(245, 241, 232, 0.1)',
      flexShrink: 0,
    },
    
    mobilePhoneWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
    },
    
    mobilePhoneIcon: (active: boolean) => ({
      width: '44px',
      height: '44px',
      backgroundColor: active ? 'rgba(194, 178, 128, 0.15)' : 'rgba(194, 178, 128, 0.1)',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid rgba(194, 178, 128, 0.15)',
      transition: 'all 0.3s ease',
    }),
    
    mobilePhoneLabel: {
      fontSize: isSmallMobile ? '0.7rem' : '0.8rem',
      color: '#C2B280',
      fontWeight: 500,
      lineHeight: '1.2',
      fontFamily: "'Inter', sans-serif",
    },
    
    mobilePhoneNumber: (active: boolean) => ({
      fontSize: isSmallMobile ? '0.85rem' : '0.95rem',
      fontWeight: 500,
      color: active ? '#C2B280' : '#F5F1E8',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
      cursor: 'pointer',
      fontFamily: "'Inter', sans-serif",
    }),
    
    mobileHeaderButton: (active: boolean) => ({
      padding: '0.75rem 1rem',
      background: 'linear-gradient(135deg, #C2B280 0%, #D4C9A1 100%)',
      color: '#1A3C34',
      border: 'none',
      borderRadius: '30px',
      fontWeight: 500,
      fontSize: isSmallMobile ? '0.85rem' : '0.95rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textAlign: 'center',
      transform: active ? 'translateY(-2px)' : 'translateY(0)',
      fontFamily: "'Inter', sans-serif",
    }),
    
    closeMenuButton: (active: boolean) => ({
      background: 'none',
      border: 'none',
      color: active ? '#C2B280' : '#F5F1E8',
      fontSize: '1.5rem',
      cursor: 'pointer',
      padding: '0.5rem',
      fontWeight: 400,
      transition: 'color 0.3s ease',
      fontFamily: "'Cormorant Garamond', serif",
    }),

   backgroundContainer: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: isMobile 
    ? 'url("https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")'
    : 'url("https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
  backgroundSize: isMobile ? 'cover' : 'cover',
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
      background: 'linear-gradient(135deg, rgba(26, 60, 52, 0.4) 0%, rgba(26, 60, 52, 0.3) 100%)',
      zIndex: 2,
    },

    heroContent: {
      position: 'relative',
      zIndex: 10,
      paddingTop: isMobile ? (isSmallMobile ? '80px' : '100px') : '160px',
      paddingBottom: isMobile ? (isSmallMobile ? '40px' : '60px') : '80px',
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
  backgroundColor: active ? 'rgba(194, 178, 128, 0.2)' : 'rgba(194, 178, 128, 0.15)',
  border: active ? (isSmallMobile ? '1px solid #C2B280' : '2px solid #C2B280') : (isSmallMobile ? '1px solid #C2B280' : '2px solid #C2B280'),
  borderRadius: isSmallMobile ? '40px' : '60px',
  padding: isMobile ? (isSmallMobile ? '0.4rem 0.6rem' : '0.6rem 0.8rem') : '1rem 1.5rem',
  width: '100%',
  maxWidth: '100%',
  boxSizing: 'border-box' as const,
  backdropFilter: 'blur(10px)',
  boxShadow: active 
    ? '0 10px 30px rgba(194, 178, 128, 0.3), 0 0 0 1px rgba(245, 241, 232, 0.1) inset' 
    : '0 5px 20px rgba(194, 178, 128, 0.2), 0 0 0 1px rgba(245, 241, 232, 0.05) inset',
  transform: active ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  flexWrap: isSmallMobile ? 'wrap' as const : 'nowrap' as const,
  textAlign: isSmallMobile ? 'center' as const : 'left' as const,
}),
    
    numberOneBadge: (active: boolean) => ({
      width: isMobile ? (isSmallMobile ? '32px' : '40px') : '50px',
      height: isMobile ? (isSmallMobile ? '32px' : '40px') : '50px',
      backgroundColor: active ? '#D4C9A1' : '#C2B280',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      fontWeight: '600',
      boxShadow: active 
        ? '0 5px 15px rgba(194, 178, 128, 0.4), 0 0 0 2px rgba(245, 241, 232, 0.1) inset' 
        : '0 4px 12px rgba(194, 178, 128, 0.3), 0 0 0 1px rgba(245, 241, 232, 0.05) inset',
      transform: active ? 'scale(1.08)' : 'scale(1)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    }),
    
    numberOne: {
      color: '#1A3C34',
      fontWeight: '600',
      fontSize: isMobile ? (isSmallMobile ? '2rem' : '2rem') : '2rem',
      fontFamily: "'Cormorant Garamond', serif",
    },
    badgeText: {
  fontSize: isMobile ? (isSmallMobile ? '0.6rem' : '0.75rem') : '1rem',
  fontWeight: '500',
  color: '#F5F1E8',
  lineHeight: '1.2',
  letterSpacing: isMobile ? (isSmallMobile ? '0.2px' : '0.3px') : '0.5px',
  fontFamily: "'Inter', sans-serif",
  textTransform: 'uppercase',
  whiteSpace: isSmallMobile ? 'normal' : 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  flexShrink: 1,
  minWidth: 0,
},
    
    houstonBold: {
      fontWeight: '600',
      color: '#C2B280',
      fontSize: isMobile ? (isSmallMobile ? '2rem' : '2rem') : '2rem',
      fontFamily: "'Cormorant Garamond', serif",
    },

    headline: {
      fontSize: isMobile ? (isSmallMobile ? '2rem' : '2rem') : (isTablet ? '3rem' : '4rem'),
      fontWeight: '500',
      color: '#F5F1E8',
      lineHeight: 1.1,
      margin: 0,
      fontFamily: "'Cormorant Garamond', serif",
      letterSpacing: '-0.5px',
    },
    
    headlineHighlight: {
      background: 'linear-gradient(135deg, #C2B280 0%, #D4C9A1 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      display: 'block',
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: '500',
      fontSize: isMobile ? (isSmallMobile ? '1.9rem' : '2.2rem') : (isTablet ? '3.2rem' : '4rem'),
      lineHeight: 1.1,
      marginTop: isMobile ? '0.5rem' : '0',
    },

    subheadline: {
      fontSize: isMobile ? (isSmallMobile ? '0.9rem' : '1rem') : (isTablet ? '1.125rem' : '1.5rem'),
      color: 'rgba(245, 241, 232, 0.9)',
      lineHeight: 1.6,
      maxWidth: '600px',
      margin: 0,
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: '400',
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
      backgroundColor: active ? 'rgba(245, 241, 232, 0.1)' : 'rgba(245, 241, 232, 0.05)',
      borderRadius: '12px',
      padding: isMobile ? (isSmallMobile ? '0.5rem' : '0.75rem') : '1rem',
      border: `1px solid ${active ? '#C2B280' : 'rgba(245, 241, 232, 0.15)'}`,
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      transform: active ? 'translateY(-2px)' : 'translateY(0)',
      minHeight: isSmallMobile ? '60px' : 'auto',
    }),
    
    trustIcon: {
      width: isMobile ? (isSmallMobile ? '24px' : '30px') : '40px',
      height: isMobile ? (isSmallMobile ? '24px' : '30px') : '40px',
      backgroundColor: 'rgba(194, 178, 128, 0.1)',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },
    
    trustTitle: {
      fontSize: isMobile ? (isSmallMobile ? '0.6rem' : '0.7rem') : '0.875rem',
      fontWeight: '500',
      color: '#C2B280',
      marginBottom: '0.25rem',
      fontFamily: "'Inter', sans-serif",
      whiteSpace: 'nowrap',
    },
    
    trustDesc: {
      fontSize: isMobile ? (isSmallMobile ? '0.5rem' : '0.6rem') : '0.75rem',
      color: 'rgba(245, 241, 232, 0.8)',
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
      color: '#C2B280',
      fontSize: isMobile ? (isSmallMobile ? '0.8rem' : '1rem') : '1.5rem',
      fontWeight: '400',
    },
    
    reviewText: {
      fontSize: isMobile ? (isSmallMobile ? '0.8rem' : '0.9rem') : '1.125rem',
      color: 'rgba(245, 241, 232, 0.9)',
      fontFamily: "'Cormorant Garamond', serif",
      fontWeight: '400',
    },
    
    reviewRating: {
      color: '#C2B280',
      fontWeight: '500',
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: isMobile ? (isSmallMobile ? '0.9rem' : '1rem') : '1.25rem',
    },
    
    googleBadge: (active: boolean) => ({
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      backgroundColor: active ? 'rgba(245, 241, 232, 0.15)' : 'rgba(245, 241, 232, 0.1)',
      padding: isMobile ? (isSmallMobile ? '0.5rem 0.75rem' : '0.75rem 1rem') : '1rem 1.25rem',
      borderRadius: '30px',
      backdropFilter: 'blur(10px)',
      border: active ? '1px solid rgba(194, 178, 128, 0.4)' : '1px solid rgba(245, 241, 232, 0.2)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      transform: active ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)',
      boxShadow: active ? '0 8px 20px rgba(0, 0, 0, 0.1)' : '0 4px 12px rgba(0, 0, 0, 0.05)',
    }),
    
    googleText: {
      fontSize: isMobile ? (isSmallMobile ? '0.8rem' : '0.9rem') : '1rem',
      color: '#F5F1E8',
      fontWeight: '500',
      fontFamily: "'Inter', sans-serif",
      letterSpacing: '0.5px',
    },

    googleReviewsCTA: (active: boolean) => ({
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      backgroundColor: active ? '#C2B280' : 'rgba(194, 178, 128, 0.1)',
      color: active ? '#1A3C34' : '#F5F1E8',
      border: active ? '1px solid #C2B280' : '1px solid rgba(194, 178, 128, 0.2)',
      padding: isMobile ? (isSmallMobile ? '0.5rem 0.75rem' : '0.75rem 1rem') : '1rem 1.25rem',
      borderRadius: '30px',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      transform: active ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)',
      boxShadow: active ? '0 8px 20px rgba(194, 178, 128, 0.2)' : '0 4px 12px rgba(0, 0, 0, 0.05)',
      fontWeight: '500',
      fontFamily: "'Inter', sans-serif",
    }),
    
    googleReviewsText: {
      fontSize: isMobile ? (isSmallMobile ? '0.8rem' : '0.9rem') : '1rem',
      fontWeight: '500',
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
      backgroundColor: 'rgba(45, 92, 79, 0.4)',
      padding: '0.5rem 0.75rem',
      borderRadius: '20px',
      width: 'fit-content',
      maxWidth: '100%',
      backdropFilter: 'blur(10px)',
    },
    
    bostonText: {
      fontSize: isMobile ? (isSmallMobile ? '0.6rem' : '0.7rem') : '0.875rem',
      color: 'rgba(245, 241, 232, 0.9)',
      fontWeight: '400',
      fontFamily: "'Inter', sans-serif",
    },

    rightColumn: {
      marginTop: isMobile ? (isSmallMobile ? '1.5rem' : '2rem') : '0',
      width: '100%',
    },
    
    bookingCard: {
      backgroundColor: '#F5F1E8',
      borderRadius: '20px',
      padding: isMobile ? (isSmallMobile ? '1rem' : '1.5rem') : '2rem',
      boxShadow: '0 20px 60px rgba(26, 60, 52, 0.1)',
      border: '1px solid rgba(194, 178, 128, 0.2)',
      width: '100%',
      boxSizing: 'border-box',
    },
    
    cardHeader: {
      textAlign: 'center',
      marginBottom: '1.5rem',
    },
    
    formTitle: {
      fontSize: isMobile ? (isSmallMobile ? '1.25rem' : '1.5rem') : '1.75rem',
      fontWeight: '500',
      color: '#1A3C34',
      margin: '0 0 0.5rem 0',
      lineHeight: '1.2',
      fontFamily: "'Cormorant Garamond', serif",
    },
    
    formSubtitle: {
      fontSize: isMobile ? (isSmallMobile ? '0.8rem' : '0.9rem') : '1rem',
      color: '#5D7168',
      margin: 0,
      fontFamily: "'Inter', sans-serif",
      fontWeight: '400',
    },
    
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
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
      fontWeight: '500',
      color: '#1A3C34',
      fontFamily: "'Inter', sans-serif",
    },
    
    formInput: {
      padding: isMobile ? (isSmallMobile ? '0.5rem' : '0.75rem') : '1rem',
      borderRadius: '10px',
      border: '1px solid #D8D1C1',
      fontSize: isMobile ? (isSmallMobile ? '0.8rem' : '0.85rem') : '0.875rem',
      transition: 'all 0.3s ease',
      outline: 'none',
      fontFamily: "'Inter', sans-serif",
      fontWeight: '400',
      width: '100%',
      boxSizing: 'border-box',
      backgroundColor: '#FCFAF5',
      '&:focus': {
        borderColor: '#C2B280',
        boxShadow: '0 0 0 2px rgba(194, 178, 128, 0.1)',
      },
      '&::placeholder': {
        color: '#8C9A94',
        fontWeight: '400',
        fontFamily: "'Inter', sans-serif",
      },
    },
    
    formRow: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr 1fr' : '1fr 1fr',
      gap: '0.75rem',
      width: '100%',
    },
    
    formSelect: {
      padding: isMobile ? (isSmallMobile ? '0.5rem' : '0.75rem') : '1rem',
      borderRadius: '10px',
      border: '1px solid #D8D1C1',
      fontSize: isMobile ? (isSmallMobile ? '0.8rem' : '0.85rem') : '0.875rem',
      backgroundColor: '#FCFAF5',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      outline: 'none',
      fontFamily: "'Inter', sans-serif",
      fontWeight: '400',
      width: '100%',
      boxSizing: 'border-box',
      '&:focus': {
        borderColor: '#C2B280',
        boxShadow: '0 0 0 2px rgba(194, 178, 128, 0.1)',
      },
    },
    
    calculateButton: (active: boolean) => ({
      marginTop: '1rem',
      padding: isMobile ? (isSmallMobile ? '0.75rem' : '1rem') : '1.25rem',
      backgroundColor: '#1A3C34',
      color: '#F5F1E8',
      border: 'none',
      borderRadius: '10px',
      fontSize: isMobile ? (isSmallMobile ? '0.9rem' : '1rem') : '1.125rem',
      fontWeight: '500',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease',
      background: 'linear-gradient(135deg, #1A3C34 0%, #2D5C4F 100%)',
      fontFamily: "'Inter', sans-serif",
      transform: active ? 'translateY(-2px)' : 'translateY(0)',
      boxShadow: active ? '0 10px 25px rgba(26, 60, 52, 0.2)' : '0 5px 15px rgba(26, 60, 52, 0.15)',
      width: '100%',
    }),
    
    estimateResult: {
      marginTop: '1.5rem',
      padding: '1rem',
      backgroundColor: '#F0F5F2',
      borderRadius: '12px',
      border: '1px solid #1A3C34',
      textAlign: 'center',
      width: '100%',
      boxSizing: 'border-box',
    },
    
    estimateTitle: {
      fontSize: isMobile ? (isSmallMobile ? '1rem' : '1.1rem') : '1.25rem',
      fontWeight: '500',
      color: '#1A3C34',
      marginBottom: '0.5rem',
      fontFamily: "'Cormorant Garamond', serif",
    },
    
    estimatePrice: {
      fontSize: isMobile ? (isSmallMobile ? '1.5rem' : '2rem') : '2.5rem',
      fontWeight: '500',
      color: '#C2B280',
      marginBottom: '1rem',
      fontFamily: "'Cormorant Garamond', serif",
    },
    
    estimateNote: {
      fontSize: isMobile ? (isSmallMobile ? '0.7rem' : '0.8rem') : '0.875rem',
      color: '#5D7168',
      marginBottom: '1rem',
      fontFamily: "'Inter', sans-serif",
      fontWeight: '400',
    },
    
    bookNowButton: (active: boolean) => ({
      padding: isMobile ? (isSmallMobile ? '0.75rem' : '1rem') : '1.25rem',
      backgroundColor: '#C2B280',
      color: '#1A3C34',
      border: 'none',
      borderRadius: '10px',
      fontSize: isMobile ? (isSmallMobile ? '0.9rem' : '1rem') : '1.125rem',
      fontWeight: '500',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease',
      background: 'linear-gradient(135deg, #C2B280 0%, #D4C9A1 100%)',
      fontFamily: "'Inter', sans-serif",
      transform: active ? 'translateY(-2px)' : 'translateY(0)',
      boxShadow: active ? '0 10px 25px rgba(194, 178, 128, 0.2)' : '0 5px 15px rgba(194, 178, 128, 0.15)',
      width: '100%',
    }),
    
    buttonText: {
      fontWeight: '500',
    },
    
    buttonArrow: {
      transition: 'transform 0.3s ease',
    },
    
    formNote: {
      fontSize: isMobile ? (isSmallMobile ? '0.6rem' : '0.7rem') : '0.75rem',
      color: '#8C9A94',
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
      borderTop: '1px solid #D8D1C1',
      width: '100%',
    },
    
    securityText: {
      fontSize: isMobile ? (isSmallMobile ? '0.6rem' : '0.7rem') : '0.75rem',
      color: '#8C9A94',
      fontWeight: '400',
      fontFamily: "'Inter', sans-serif",
    },
  };

  return (
    <section style={baseStyles.heroSection}>
      {isMobileMenuOpen && (
        <div style={baseStyles.mobileMenuOverlay}>
          <div style={baseStyles.mobileMenuHeader}>
            <div style={{
              ...baseStyles.brandSection,
              justifyContent: 'center',
              width: '100%'
            }}>
              <div 
                style={baseStyles.logoMark}
                onClick={() => handleNavigation('/')}
                onMouseEnter={() => setActiveItem('logo')}
                onMouseLeave={() => setActiveItem(null)}
              >
                <img 
                  src="/videos/logo.png"
                  alt="BraBos Cleaning Logo"
                  style={{
                    height: isMobile ? '0px' : '0px',
                    width: 'auto',
                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'drop-shadow(0 3px 6px rgba(194, 178, 128, 0.2)) brightness(1.05)';
                    e.currentTarget.style.transform = 'scale(1.02)';
                    setActiveItem('logo');
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))';
                    e.currentTarget.style.transform = 'scale(1)';
                    setActiveItem(null);
                  }}
                />
              </div>
            </div>
            <button 
              style={{
                ...baseStyles.closeMenuButton(activeMobileItem === 'close'),
                position: 'absolute',
                right: isSmallMobile ? '16px' : '20px',
                top: '50%',
                transform: 'translateY(-50%)'
              }} 
              onClick={toggleMobileMenu}
              onMouseEnter={() => setActiveMobileItem('close')}
              onMouseLeave={() => setActiveMobileItem(null)}
              onTouchStart={() => handleTouchStart(setActiveMobileItem, 'close')}
              onTouchEnd={() => handleTouchEnd(setActiveMobileItem, null)}
            >
              ✕
            </button>
          </div>
          <div style={baseStyles.mobileMenuContent}>
            <div 
              style={baseStyles.mobileNavItem(activeMobileItem === 'home')}
              onClick={() => handleNavigation('/')}
              onMouseEnter={() => setActiveMobileItem('home')}
              onMouseLeave={() => setActiveMobileItem(null)}
              onTouchStart={() => handleTouchStart(setActiveMobileItem, 'home')}
              onTouchEnd={() => handleTouchEnd(setActiveMobileItem, null)}
            >
              Home
            </div>
            
            <button 
              style={baseStyles.mobileServicesButton(activeMobileItem === 'services', mobileServicesOpen)}
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              onMouseEnter={() => setActiveMobileItem('services')}
              onMouseLeave={() => setActiveMobileItem(null)}
              onTouchStart={() => handleTouchStart(setActiveMobileItem, 'services')}
              onTouchEnd={() => handleTouchEnd(setActiveMobileItem, null)}
            >
              <span>Services</span>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none"
                style={{
                  transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }}
              >
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {mobileServicesOpen && (
              <div style={baseStyles.mobileServicesDropdown}>
                {services.map((service, index) => (
                  <div
                    key={index}
                    style={baseStyles.mobileServiceItem(activeMobileService === index)}
                    onClick={() => handleNavigation(service.url)}
                    onMouseEnter={() => setActiveMobileService(index)}
                    onMouseLeave={() => setActiveMobileService(null)}
                    onTouchStart={() => handleTouchStart(setActiveMobileService, index)}
                    onTouchEnd={() => handleTouchEnd(setActiveMobileService, null)}
                  >
                    {service.name}
                  </div>
                ))}
              </div>
            )}
            
            <div 
              style={baseStyles.mobileNavItem(activeMobileItem === 'about')}
              onClick={() => handleNavigation('/about')}
              onMouseEnter={() => setActiveMobileItem('about')}
              onMouseLeave={() => setActiveMobileItem(null)}
              onTouchStart={() => handleTouchStart(setActiveMobileItem, 'about')}
              onTouchEnd={() => handleTouchEnd(setActiveMobileItem, null)}
            >
              About
            </div>
            
            <div 
              style={baseStyles.mobileNavItem(activeMobileItem === 'contact')}
              onClick={() => handleNavigation('/contact')}
              onMouseEnter={() => setActiveMobileItem('contact')}
              onMouseLeave={() => setActiveMobileItem(null)}
              onTouchStart={() => handleTouchStart(setActiveMobileItem, 'contact')}
              onTouchEnd={() => handleTouchEnd(setActiveMobileItem, null)}
            >
              Contact
            </div>
            <div 
              style={baseStyles.mobileNavItem(activeMobileItem === 'Before/After Gallery')}
              onClick={() => handleNavigation('/before-after')}
              onMouseEnter={() => setActiveMobileItem('Before/After Gallery')}
              onMouseLeave={() => setActiveMobileItem(null)}
              onTouchStart={() => handleTouchStart(setActiveMobileItem, 'Before/After Gallery')}
              onTouchEnd={() => handleTouchEnd(setActiveMobileItem, null)}
            >
              Before/After Gallery
            </div>
          </div>
          
          <div style={baseStyles.mobileCTASection}>
            <div style={baseStyles.mobilePhoneWrapper}>
              <div style={baseStyles.mobilePhoneIcon(activeMobileItem === 'phoneIcon')}
                   onMouseEnter={() => setActiveMobileItem('phoneIcon')}
                   onMouseLeave={() => setActiveMobileItem(null)}
                   onTouchStart={() => handleTouchStart(setActiveMobileItem, 'phoneIcon')}
                   onTouchEnd={() => handleTouchEnd(setActiveMobileItem, null)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z" fill="#F5F1E8"/>
                  <path d="M13 8C15.103 8 16 8.897 16 11H18C18 7.774 16.225 6 13 6V8ZM16.422 13.443C16.229 13.268 15.978 13.192 15.727 13.192C15.476 13.192 15.225 13.268 15.031 13.443L13.638 14.828C13.174 14.559 12.639 14.346 12.077 14.195C11.516 14.044 10.953 13.971 10.413 13.971C9.873 13.971 9.311 14.044 8.749 14.195C8.188 14.346 7.653 14.559 7.189 14.828L5.796 13.443C5.603 13.268 5.352 13.192 5.101 13.192C4.85 13.192 4.599 13.268 4.405 13.443L2.69 15.145C2.497 15.32 2.4 15.572 2.4 15.824C2.4 16.076 2.497 16.328 2.69 16.503L5.574 19.4C6.985 20.812 8.947 21.6 11.038 21.6C13.13 21.6 15.091 20.812 16.502 19.4L19.386 16.503C19.58 16.328 19.676 16.076 19.676 15.824C19.676 15.572 19.58 15.32 19.386 15.145L17.672 13.443H16.422Z" fill="#F5F1E8"/>
                </svg>
              </div>
              <div>
                <div style={baseStyles.mobilePhoneLabel}>Premium Concierge</div>
                <a 
                  href="tel:+12815551234" 
                  style={baseStyles.mobilePhoneNumber(activeMobileItem === 'phoneNumber')}
                  onMouseEnter={() => setActiveMobileItem('phoneNumber')}
                  onMouseLeave={() => setActiveMobileItem(null)}
                  onTouchStart={() => handleTouchStart(setActiveMobileItem, 'phoneNumber')}
                  onTouchEnd={() => handleTouchEnd(setActiveMobileItem, null)}
                >
                  (281) 555-1234
                </a>
              </div>
            </div>
            <button 
              style={baseStyles.mobileHeaderButton(activeMobileItem === 'mobileBookNow')}
              onClick={() => handleNavigation('/contact')}
              onMouseEnter={() => setActiveMobileItem('mobileBookNow')}
              onMouseLeave={() => setActiveMobileItem(null)}
              onTouchStart={() => handleTouchStart(setActiveMobileItem, 'mobileBookNow')}
              onTouchEnd={() => handleTouchEnd(setActiveMobileItem, null)}
            >
              Book Now
            </button>
          </div>
        </div>
      )}

      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        background: isScrolled 
          ? 'rgba(26, 60, 52, 0.98)' 
          : 'rgba(26, 60, 52, 0.95)',
        boxShadow: isScrolled 
          ? '0 4px 20px rgba(0, 0, 0, 0.1)' 
          : 'none',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(194, 178, 128, 0.2)',
        height: isMobile ? (isSmallMobile ? '60px' : '70px') : '80px',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={baseStyles.headerContainer}>
          <div style={baseStyles.brandSection}>
            <div 
              style={baseStyles.logoMark}
              onClick={() => handleNavigation('/')}
              onMouseEnter={() => setActiveItem('logo')}
              onMouseLeave={() => setActiveItem(null)}
              onTouchStart={() => handleTouchStart(setActiveItem, 'logo')}
              onTouchEnd={() => handleTouchEnd(setActiveItem, null)}
            >
              <img 
                src="/videos/logo.png"
                alt="BraBos Cleaning Logo"
                style={{
                  height: isMobile ? '150px' : '300px',
                  width: 'auto',
                  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'drop-shadow(0 3px 6px rgba(194, 178, 128, 0.2)) brightness(1.05)';
                  e.currentTarget.style.transform = 'scale(1.02)';
                  setActiveItem('logo');
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))';
                  e.currentTarget.style.transform = 'scale(1)';
                  setActiveItem(null);
                }}
              />
              <div style={baseStyles.logoTextContainer}>
                <span style={baseStyles.logoName}></span>
                <span style={baseStyles.logoTagline}></span>
              </div>
            </div>
          </div>
          
          {!isMobile && (
            <nav style={baseStyles.navigation}>
              <div 
                style={baseStyles.navItem(activeItem === 'home')}
                onClick={() => handleNavigation('/')}
                onMouseEnter={() => setActiveItem('home')}
                onMouseLeave={() => setActiveItem(null)}
                onTouchStart={() => handleTouchStart(setActiveItem, 'home')}
                onTouchEnd={() => handleTouchEnd(setActiveItem, null)}
              >
                Home
              </div>
              
              <div style={baseStyles.servicesDropdownContainer}>
                <button 
                  style={baseStyles.servicesButton(activeItem === 'services', servicesDropdownOpen)}
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  onMouseEnter={() => setActiveItem('services')}
                  onMouseLeave={() => setActiveItem(null)}
                  onTouchStart={() => handleTouchStart(setActiveItem, 'services')}
                  onTouchEnd={() => handleTouchEnd(setActiveItem, null)}
                >
                  <span>Services</span>
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none"
                    style={{
                      transform: servicesDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}
                  >
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                {servicesDropdownOpen && (
                  <div style={baseStyles.servicesDropdown}>
                    {services.map((service, index) => (
                      <div
                        key={index}
                        style={baseStyles.serviceItem(activeService === index)}
                        onClick={() => handleNavigation(service.url)}
                        onMouseEnter={() => setActiveService(index)}
                        onMouseLeave={() => setActiveService(null)}
                        onTouchStart={() => handleTouchStart(setActiveService, index)}
                        onTouchEnd={() => handleTouchEnd(setActiveService, null)}
                      >
                        <div style={baseStyles.serviceItemIcon}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#C2B280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span style={baseStyles.serviceItemText}>{service.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div 
                style={baseStyles.navItem(activeItem === 'about')}
                onClick={() => handleNavigation('/about')}
                onMouseEnter={() => setActiveItem('about')}
                onMouseLeave={() => setActiveItem(null)}
                onTouchStart={() => handleTouchStart(setActiveItem, 'about')}
                onTouchEnd={() => handleTouchEnd(setActiveItem, null)}
              >
                About
              </div>
              
              <div 
                style={baseStyles.navItem(activeItem === 'contact')}
                onClick={() => handleNavigation('/contact')}
                onMouseEnter={() => setActiveItem('contact')}
                onMouseLeave={() => setActiveItem(null)}
                onTouchStart={() => handleTouchStart(setActiveItem, 'contact')}
                onTouchEnd={() => handleTouchEnd(setActiveItem, null)}
              >
                Contact
              </div>
              <div 
                style={baseStyles.navItem(activeItem === 'Before/After Gallery')}
                onClick={() => handleNavigation('/before-after')}
                onMouseEnter={() => setActiveItem('Before/After Gallery')}
                onMouseLeave={() => setActiveItem(null)}
                onTouchStart={() => handleTouchStart(setActiveItem, 'Before/After Gallery')}
                onTouchEnd={() => handleTouchEnd(setActiveItem, null)}
              >
                Before/After Gallery
              </div>
            </nav>
          )}
          
          {!isMobile && (
            <div style={baseStyles.ctaSection}>
              <div style={baseStyles.phoneWrapper}>
                <div style={baseStyles.phoneIcon(activeItem === 'phoneIcon')}
                     onMouseEnter={() => setActiveItem('phoneIcon')}
                     onMouseLeave={() => setActiveItem(null)}
                     onTouchStart={() => handleTouchStart(setActiveItem, 'phoneIcon')}
                     onTouchEnd={() => handleTouchEnd(setActiveItem, null)}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z" fill="#F5F1E8"/>
                    <path d="M13 8C15.103 8 16 8.897 16 11H18C18 7.774 16.225 6 13 6V8ZM16.422 13.443C16.229 13.268 15.978 13.192 15.727 13.192C15.476 13.192 15.225 13.268 15.031 13.443L13.638 14.828C13.174 14.559 12.639 14.346 12.077 14.195C11.516 14.044 10.953 13.971 10.413 13.971C9.873 13.971 9.311 14.044 8.749 14.195C8.188 14.346 7.653 14.559 7.189 14.828L5.796 13.443C5.603 13.268 5.352 13.192 5.101 13.192C4.85 13.192 4.599 13.268 4.405 13.443L2.69 15.145C2.497 15.32 2.4 15.572 2.4 15.824C2.4 16.076 2.497 16.328 2.69 16.503L5.574 19.4C6.985 20.812 8.947 21.6 11.038 21.6C13.13 21.6 15.091 20.812 16.502 19.4L19.386 16.503C19.58 16.328 19.676 16.076 19.676 15.824C19.676 15.572 19.58 15.32 19.386 15.145L17.672 13.443H16.422Z" fill="#F5F1E8"/>
                  </svg>
                </div>
                <div>
                  <div style={baseStyles.phoneLabel}>Premium Concierge</div>
                  <a 
                    href="tel:+12815551234" 
                    style={baseStyles.phoneNumber(activeItem === 'phoneNumber')}
                    onMouseEnter={() => setActiveItem('phoneNumber')}
                    onMouseLeave={() => setActiveItem(null)}
                    onTouchStart={() => handleTouchStart(setActiveItem, 'phoneNumber')}
                    onTouchEnd={() => handleTouchEnd(setActiveItem, null)}
                  >
                    (281) 555-1234
                  </a>
                </div>
              </div>
              <button 
                style={baseStyles.headerButton(activeItem === 'bookNow')}
                onClick={() => handleNavigation('/contact')}
                onMouseEnter={() => setActiveItem('bookNow')}
                onMouseLeave={() => setActiveItem(null)}
                onTouchStart={() => handleTouchStart(setActiveItem, 'bookNow')}
                onTouchEnd={() => handleTouchEnd(setActiveItem, null)}
              >
                Book Now
              </button>
            </div>
          )}
          
          {isMobile && (
            <button 
              style={baseStyles.mobileMenuButton} 
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              onMouseEnter={() => setActiveItem('mobileMenuButton')}
              onMouseLeave={() => setActiveItem(null)}
              onTouchStart={() => handleTouchStart(setActiveItem, 'mobileMenuButton')}
              onTouchEnd={() => handleTouchEnd(setActiveItem, null)}
            >
              <span style={{
                ...baseStyles.menuLine,
                transform: isMobileMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'
              }}></span>
              <span style={{
                ...baseStyles.menuLine,
                opacity: isMobileMenuOpen ? 0 : 1
              }}></span>
              <span style={{
                ...baseStyles.menuLine,
                transform: isMobileMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'
              }}></span>
            </button>
          )}
        </div>
      </header>
      
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
              <div style={baseStyles.numberOneBadge(excellenceBadgeActive)}>
                <span style={baseStyles.numberOne}>#1</span>
              </div>
              <span style={baseStyles.badgeText}>
                <strong style={baseStyles.houstonBold}>HOUSTON'S #1 RATED</strong> LUXURY CLEANING SERVICE
              </span>
            </div>
            
            <h1 style={baseStyles.headline}>
              Experience The Ultimate
              <span style={baseStyles.headlineHighlight}> Clean</span>
            </h1>
            
            <p style={baseStyles.subheadline}>
              Where meticulous attention to detail meets unparalleled service excellence. 
              We transform spaces into pristine sanctuaries of comfort and luxury.
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
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#C2B280" stroke="#C2B280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div style={baseStyles.trustTitle}>5-Star Rated</div>
                  <div style={baseStyles.trustDesc}>500+ Luxury Homes</div>
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
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#C2B280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.4 15C20.2837 15 21 15.7163 21 16.6V19.4C21 20.2837 20.2837 21 19.4 21H4.6C3.71634 21 3 20.2837 3 19.4V16.6C3 15.7163 3.71634 15 4.6 15" stroke="#C2B280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 7C16 8.65685 14.6569 10 13 10C11.3431 10 10 8.65685 10 7C10 5.34315 11.3431 4 13 4C14.6569 4 16 5.34315 16 7Z" stroke="#C2B280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div style={baseStyles.trustTitle}>Certified Experts</div>
                  <div style={baseStyles.trustDesc}>Trained Specialists</div>
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
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#C2B280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01L9 11.01" stroke="#C2B280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div style={baseStyles.trustTitle}>Satisfaction</div>
                  <div style={baseStyles.trustDesc}>100% Guaranteed</div>
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
                <strong style={baseStyles.reviewRating}>4.9/5</strong> from 247 Google Reviews
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
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="#F5F1E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z" stroke="#F5F1E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span style={baseStyles.bostonText}>Also serving Boston as OTON Cleaning Services</span>
              </div>
            </div>
          </div>
          
          <div style={baseStyles.rightColumn}>
            <div style={baseStyles.bookingCard}>
              <div style={baseStyles.cardHeader}>
                <h3 style={baseStyles.formTitle}>Get Your Instant Quote</h3>
                <p style={baseStyles.formSubtitle}>No commitment - Get your personalized estimate in seconds</p>
              </div>
              
              <div style={baseStyles.form}>
                <div style={baseStyles.formGroup}>
                  <label style={baseStyles.inputLabel}>Number of Bedrooms</label>
                  <select 
                    name="bedrooms" 
                    value={formData.bedrooms} 
                    onChange={handleChange}
                    style={baseStyles.formSelect}
                  >
                    <option value="1">1 Bedroom</option>
                    <option value="2">2 Bedrooms</option>
                    <option value="3">3 Bedrooms</option>
                    <option value="4">4 Bedrooms</option>
                    <option value="5">5+ Bedrooms</option>
                  </select>
                </div>
                
                <div style={baseStyles.formGroup}>
                  <label style={baseStyles.inputLabel}>Number of Bathrooms</label>
                  <select 
                    name="bathrooms" 
                    value={formData.bathrooms} 
                    onChange={handleChange}
                    style={baseStyles.formSelect}
                  >
                    <option value="1">1 Bathroom</option>
                    <option value="2">2 Bathrooms</option>
                    <option value="3">3 Bathrooms</option>
                    <option value="4">4 Bathrooms</option>
                    <option value="5">5+ Bathrooms</option>
                  </select>
                </div>
                
                <div style={baseStyles.formRow}>
                  <div style={baseStyles.formGroup}>
                    <label style={baseStyles.inputLabel}>Square Feet</label>
                    <input
                      type="number"
                      name="squareFeet"
                      placeholder="e.g., 1500"
                      value={formData.squareFeet}
                      onChange={handleChange}
                      style={baseStyles.formInput}
                    />
                  </div>
                  
                  <div style={baseStyles.formGroup}>
                    <label style={baseStyles.inputLabel}>Service Type</label>
                    <select 
                      name="serviceType" 
                      value={formData.serviceType} 
                      onChange={handleChange}
                      style={baseStyles.formSelect}
                    >
                      <option value="regular">Regular Cleaning</option>
                      <option value="deep-cleaning">Deep Cleaning</option>
                      <option value="move-in-out">Move In/Out</option>
                      <option value="post-construction">Post Construction</option>
                    </select>
                  </div>
                </div>
                
                <div style={baseStyles.formGroup}>
                  <label style={baseStyles.inputLabel}>Cleaning Frequency</label>
                  <select 
                    name="frequency" 
                    value={formData.frequency} 
                    onChange={handleChange}
                    style={baseStyles.formSelect}
                  >
                    <option value="one-time">One-time</option>
                    <option value="weekly">Weekly</option>
                    <option value="bi-weekly">Bi-weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>
                
                <button 
                  type="button" 
                  style={baseStyles.calculateButton(calculateButtonActive)}
                  onClick={calculateEstimate}
                  onMouseEnter={() => setCalculateButtonActive(true)}
                  onMouseLeave={() => setCalculateButtonActive(false)}
                  onTouchStart={() => handleTouchStart(setCalculateButtonActive, true)}
                  onTouchEnd={() => handleTouchEnd(setCalculateButtonActive, false)}
                >
                  <span style={baseStyles.buttonText}>
                    Calculate My Instant Quote
                  </span>
                  <span style={baseStyles.buttonArrow}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#F5F1E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                
                {showEstimate && (
                  <div style={baseStyles.estimateResult}>
                    <div style={baseStyles.estimateTitle}>Your Estimated Cost:</div>
                    <div style={baseStyles.estimatePrice}>${estimatedPrice}</div>
                    <div style={baseStyles.estimateNote}>
                      This is an instant estimate. Final price may vary based on specific requirements.
                      Includes professional cleaning supplies and equipment.
                    </div>
                    <button 
                      style={baseStyles.bookNowButton(bookNowButtonActive)}
                      onClick={() => window.location.href = '/contact'}
                      onMouseEnter={() => setBookNowButtonActive(true)}
                      onMouseLeave={() => setBookNowButtonActive(false)}
                      onTouchStart={() => handleTouchStart(setBookNowButtonActive, true)}
                      onTouchEnd={() => handleTouchEnd(setBookNowButtonActive, false)}
                    >
                      <span style={baseStyles.buttonText}>Book Now & Lock This Price</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#1A3C34" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                )}
                
                <p style={baseStyles.formNote}>
                  Your quote is 100% free with no obligation. We guarantee the best price for premium service.
                </p>
                
                <div style={baseStyles.securityBadge}>
                  <div style={baseStyles.securityIcon}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="#8C9A94" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11" stroke="#8C9A94" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={baseStyles.securityText}>Secure & Confidential Quote</span>
                </div>
              </div>
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
        backgroundColor: activeVideo === index ? '#F5F1E8' : '#FCFAF5',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: activeVideo === index 
          ? '0 20px 40px rgba(26, 60, 52, 0.1)' 
          : '0 10px 30px rgba(26, 60, 52, 0.05)',
        border: '1px solid rgba(26, 60, 52, 0.1)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        transform: activeVideo === index ? 'translateY(-5px)' : 'translateY(0)',
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
        backgroundColor: '#1A3C34',
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
                filter: activeVideo === index ? 'brightness(0.8)' : 'brightness(1)',
                transition: 'filter 0.3s ease',
              }}
            />
            
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              backgroundColor: '#C2B280',
              color: '#1A3C34',
              width: isMobile ? (isSmallMobile ? '35px' : '40px') : '50px',
              height: isMobile ? (isSmallMobile ? '35px' : '40px') : '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: isMobile ? (isSmallMobile ? '14px' : '16px') : '20px',
              fontWeight: '400',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
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
              backgroundColor: 'rgba(26, 60, 52, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: activeVideo === index ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }}>
              <div style={{
                width: isMobile ? (isSmallMobile ? '50px' : '60px') : '80px',
                height: isMobile ? (isSmallMobile ? '50px' : '60px') : '80px',
                backgroundColor: '#C2B280',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: activeVideo === index ? 'scale(1)' : 'scale(0.8)',
                transition: 'transform 0.3s ease',
              }}>
                <span style={{
                  color: '#1A3C34',
                  fontSize: isMobile ? (isSmallMobile ? '1.25rem' : '1.5rem') : '2rem',
                  marginLeft: '8px',
                  fontWeight: '400',
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
          fontWeight: '500',
          color: '#1A3C34',
          marginTop: 0,
          marginBottom: '8px',
          fontFamily: "'Cormorant Garamond', serif",
        }}>
          {video.name}
        </h4>
        <p style={{
          fontSize: isMobile ? (isSmallMobile ? '0.8rem' : '0.9rem') : '1rem',
          color: '#5D7168',
          fontWeight: '400',
          fontFamily: "'Inter', sans-serif",
          marginBottom: '12px',
        }}>
          {video.location}
        </p>
        <div style={{
          fontSize: isMobile ? (isSmallMobile ? '0.7rem' : '0.75rem') : '0.875rem',
          color: '#C2B280',
          fontWeight: '500',
          fontFamily: "'Inter', sans-serif",
          backgroundColor: 'rgba(194, 178, 128, 0.1)',
          padding: '4px 12px',
          borderRadius: '20px',
          display: 'inline-block',
          marginBottom: '16px',
        }}>
          {video.role}
        </div>
        <p style={{
          fontSize: isMobile ? (isSmallMobile ? '0.8rem' : '0.9rem') : '1rem',
          color: '#3D4D47',
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
  const [homesCleaned, setHomesCleaned] = useState(0);
  const [satisfactionRate, setSatisfactionRate] = useState(0);
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
    
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const incrementYears = 2/ steps;
      const incrementHomes = 100 / steps;
      const incrementSatisfaction = 99.8 / steps;
      
      let currentYears = 0;
      let currentHomes = 0;
      let currentSatisfaction = 0;
      let step = 0;
      
      const counterInterval = setInterval(() => {
        if (step >= steps) {
          clearInterval(counterInterval);
          setYearsExperience(2);
          setHomesCleaned(100);
          setSatisfactionRate(99.8);
          return;
        }
        
        currentYears += incrementYears;
        currentHomes += incrementHomes;
        currentSatisfaction += incrementSatisfaction;
        
        setYearsExperience(Math.floor(currentYears));
        setHomesCleaned(Math.floor(currentHomes));
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
          transform: activeStat === 0 ? 'translateY(-3px)' : 'translateY(0)',
        }}
        onMouseEnter={() => setActiveStat(0)}
        onMouseLeave={() => setActiveStat(null)}
        onTouchStart={() => setActiveStat(0)}
        onTouchEnd={() => setTimeout(() => setActiveStat(null), 150)}
      >
        <div style={{
          fontSize: isMobile ? (isSmallMobile ? '1.75rem' : '2rem') : '2.5rem',
          fontWeight: 500,
          color: '#1A3C34',
          fontFamily: "'Cormorant Garamond', serif",
          marginBottom: '8px',
          transition: 'all 0.3s ease',
        }}>
          {yearsExperience}+
        </div>
        <div style={{
          fontSize: isMobile ? (isSmallMobile ? '11px' : '12px') : '14px',
          fontWeight: 400,
          color: '#5D7168',
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
          transform: activeStat === 1 ? 'translateY(-3px)' : 'translateY(0)',
        }}
        onMouseEnter={() => setActiveStat(1)}
        onMouseLeave={() => setActiveStat(null)}
        onTouchStart={() => setActiveStat(1)}
        onTouchEnd={() => setTimeout(() => setActiveStat(null), 150)}
      >
        <div style={{
          fontSize: isMobile ? (isSmallMobile ? '1.75rem' : '2rem') : '2.5rem',
          fontWeight: 500,
          color: '#1A3C34',
          fontFamily: "'Cormorant Garamond', serif",
          marginBottom: '8px',
          transition: 'all 0.3s ease',
        }}>
          {homesCleaned.toLocaleString()}+
        </div>
        <div style={{
          fontSize: isMobile ? (isSmallMobile ? '11px' : '12px') : '14px',
          fontWeight: 400,
          color: '#5D7168',
          letterSpacing: '0.5px',
          transition: 'all 0.3s ease',
          fontFamily: "'Inter', sans-serif",
        }}>
          Homes Transformed
        </div>
      </div>
      
      <div 
        style={{
          textAlign: 'center' as const,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          transform: activeStat === 2 ? 'translateY(-3px)' : 'translateY(0)',
        }}
        onMouseEnter={() => setActiveStat(2)}
        onMouseLeave={() => setActiveStat(null)}
        onTouchStart={() => setActiveStat(2)}
        onTouchEnd={() => setTimeout(() => setActiveStat(null), 150)}
      >
        <div style={{
          fontSize: isMobile ? (isSmallMobile ? '1.75rem' : '2rem') : '2.5rem',
          fontWeight: 500,
          color: '#1A3C34',
          fontFamily: "'Cormorant Garamond', serif",
          marginBottom: '8px',
          transition: 'all 0.3s ease',
        }}>
          {satisfactionRate}%
        </div>
        <div style={{
          fontSize: isMobile ? (isSmallMobile ? '11px' : '12px') : '14px',
          fontWeight: 400,
          color: '#5D7168',
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
  title = 'Frequently Asked Questions',
  subtitle = 'Find answers to common questions about our premium cleaning services.',
  faqs = [
    {
      question: "What's included in a maid service cleaning?",
      answer: "Our maid service cleaning includes comprehensive dusting, vacuuming, mopping, kitchen and bathroom sanitization, surface cleaning, and trash removal. We follow a detailed checklist to ensure every area of your home is spotless and fresh."
    },
    {
      question: "What time do you offer cleaning services?",
      answer: "We offer flexible scheduling with services available from 7:00 AM to 9:00 PM, 7 days a week. Our premium concierge team can accommodate your specific timing needs, including same-day and emergency cleaning services."
    }
  ],
  accentColor = '#C2B280',
  textColor = '#1A3C34',
  backgroundColor = '#FCFAF5',
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
      background: 'linear-gradient(180deg, #FCFAF5 0%, #F5F1E8 100%)',
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
      background: `rgba(${parseInt(accentColor.slice(1, 3), 16)}, ${parseInt(accentColor.slice(3, 5), 16)}, ${parseInt(accentColor.slice(5, 7), 16)}, 0.1)`,
      padding: isMobile ? (isSmallMobile ? '6px 12px' : '8px 16px') : '10px 20px',
      borderRadius: '50px',
      border: `1px solid ${accentColor}33`,
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
      fontWeight: 500,
      color: textColor,
      letterSpacing: '1px',
      transition: 'all 0.3s ease',
    },
    title: {
      fontSize: isMobile ? (isSmallMobile ? '1.75rem' : '2rem') : '2.5rem',
      fontWeight: 500,
      color: textColor,
      lineHeight: 1.2,
      fontFamily: "'Cormorant Garamond', serif",
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
      color: '#5D7168',
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
      background: '#FCFAF5',
      borderRadius: '16px',
      marginBottom: '12px',
      overflow: 'hidden',
      boxShadow: '0 2px 12px rgba(26, 60, 52, 0.05)',
      border: `1px solid ${textColor}1A`,
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      ...faqItemStyle
    }),
    questionButton: (isOpen: boolean) => ({
      width: '100%',
      background: isOpen ? `${accentColor}0D` : '#FCFAF5',
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
      background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}CC 100%)`,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: isMobile ? (isSmallMobile ? '10px' : '12px') : '12px',
      fontWeight: 500,
      color: textColor,
      flexShrink: 0,
      transition: 'all 0.3s ease',
    },
    questionText: {
      fontSize: isMobile ? (isSmallMobile ? '0.9rem' : '1rem') : '1.125rem',
      fontWeight: 500,
      color: textColor,
      fontFamily: "'Cormorant Garamond', serif",
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
      background: isOpen ? `${textColor}05` : 'transparent',
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
      background: `${textColor}1A`,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '10px',
      fontWeight: 500,
      color: textColor,
      flexShrink: 0,
      marginTop: '3px',
      transition: 'all 0.3s ease',
    },
    answerText: {
      fontSize: isMobile ? (isSmallMobile ? '0.85rem' : '0.9rem') : '1rem',
      fontWeight: 400,
      color: '#5D7168',
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
      background: `linear-gradient(135deg, ${textColor}0D 0%, ${accentColor}0D 100%)`,
      borderRadius: '20px',
      border: `1px solid ${accentColor}33`,
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    ctaTitle: {
      fontSize: isMobile ? (isSmallMobile ? '1.25rem' : '1.5rem') : '1.75rem',
      fontWeight: 500,
      color: textColor,
      fontFamily: "'Cormorant Garamond', serif",
      marginBottom: '20px',
      transition: 'all 0.3s ease',
    },
    ctaDescription: {
      fontSize: isMobile ? (isSmallMobile ? '0.9rem' : '1rem') : '1.125rem',
      fontWeight: 400,
      color: '#5D7168',
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
      background: `linear-gradient(135deg, ${textColor} 0%, ${textColor}CC 100%)`,
      color: '#F5F1E8',
      border: 'none',
      padding: isMobile ? (isSmallMobile ? '14px 20px' : '16px 24px') : '16px 24px',
      fontSize: isMobile ? (isSmallMobile ? '14px' : '15px') : '15px',
      fontWeight: 500,
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: `0 4px 15px ${textColor}33`,
      fontFamily: "'Inter', sans-serif",
      letterSpacing: '0.5px',
      width: isMobile ? '100%' : 'auto',
      maxWidth: '300px',
    },
    secondaryButton: {
      background: 'transparent',
      color: textColor,
      border: `1px solid ${textColor}4D`,
      padding: isMobile ? (isSmallMobile ? '14px 20px' : '16px 24px') : '16px 24px',
      fontSize: isMobile ? (isSmallMobile ? '14px' : '15px') : '15px',
      fontWeight: 500,
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
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.background = `rgba(${parseInt(accentColor.slice(1, 3), 16)}, ${parseInt(accentColor.slice(3, 5), 16)}, ${parseInt(accentColor.slice(5, 7), 16)}, 0.15)`;
              e.currentTarget.style.boxShadow = `0 4px 12px ${accentColor}33`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = `rgba(${parseInt(accentColor.slice(1, 3), 16)}, ${parseInt(accentColor.slice(3, 5), 16)}, ${parseInt(accentColor.slice(5, 7), 16)}, 0.1)`;
              e.currentTarget.style.boxShadow = 'none';
            }}>
            <div style={baseStyles.badgeIcon}>❓</div>
            <span style={baseStyles.badgeText}>
              Got Questions?
            </span>
          </div>
          
          <h2 style={baseStyles.title}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.01)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}>
            {title}
          </h2>
          
          <p style={baseStyles.subtitle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = textColor;
              e.currentTarget.style.transform = 'scale(1.01)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#5D7168';
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
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(26, 60, 52, 0.1)';
                e.currentTarget.style.borderColor = `${accentColor}4D`;
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(26, 60, 52, 0.05)';
                e.currentTarget.style.borderColor = `${textColor}1A`;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                style={baseStyles.questionButton(openIndex === index)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${accentColor}0F`;
                  e.currentTarget.style.transform = 'scale(1.01)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = openIndex === index ? `${accentColor}0D` : '#FCFAF5';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <div style={baseStyles.questionContent}>
                  <div style={baseStyles.questionNumber}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
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
                      e.currentTarget.style.transform = openIndex === index ? 'rotate(45deg) scale(1.1)' : 'rotate(0deg) scale(1.1)';
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
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.background = `${textColor}33`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.background = `${textColor}1A`;
                      }}>
                      A
                    </div>
                    <p style={baseStyles.answerText}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = textColor;
                        e.currentTarget.style.transform = 'scale(1.01)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#5D7168';
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
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.background = `linear-gradient(135deg, ${textColor}0F 0%, ${accentColor}0F 100%)`;
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(26, 60, 52, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.background = `linear-gradient(135deg, ${textColor}0D 0%, ${accentColor}0D 100%)`;
            e.currentTarget.style.boxShadow = 'none';
          }}>
          <h3 style={baseStyles.ctaTitle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = accentColor;
              e.currentTarget.style.transform = 'scale(1.01)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = textColor;
              e.currentTarget.style.transform = 'scale(1)';
            }}>
            Still Have Questions?
          </h3>
          <p style={baseStyles.ctaDescription}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = textColor;
              e.currentTarget.style.transform = 'scale(1.01)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#5D7168';
              e.currentTarget.style.transform = 'scale(1)';
            }}>
            Our premium concierge team is available to answer any questions and help you schedule your cleaning service.
          </p>
          <div style={baseStyles.buttonContainer}>
            <button 
              onClick={() => window.location.href = '/contact'}
              style={baseStyles.primaryButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                e.currentTarget.style.boxShadow = `0 6px 20px ${textColor}40`;
                e.currentTarget.style.background = `linear-gradient(135deg, ${textColor}CC 0%, ${textColor} 100%)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = `0 4px 15px ${textColor}33`;
                e.currentTarget.style.background = `linear-gradient(135deg, ${textColor} 0%, ${textColor}CC 100%)`;
              }}
            >
              Contact Our Concierge
            </button>
            <button 
              onClick={() => window.location.href = 'tel:+12815551234'}
              style={baseStyles.secondaryButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = `${textColor}0D`;
                e.currentTarget.style.borderColor = `${textColor}80`;
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                e.currentTarget.style.color = accentColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = `${textColor}4D`;
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
  const [activeMoreVideos, setActiveMoreVideos] = useState(false);
  const [activeConsultation, setActiveConsultation] = useState(false);
  const [activeBeforeAfterButton, setActiveBeforeAfterButton] = useState(false);
  const [activeOurStory, setActiveOurStory] = useState(false);

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
      title: "Kitchen Transformation",
      beforeImage: "https://t3.ftcdn.net/jpg/00/39/40/52/360_F_39405233_UL1bFX3Uo1mjGxq2WtPCXvhl6Qm9OrU.jpg",
      afterImage: "https://t3.ftcdn.net/jpg/06/36/14/94/240_F_636149478_CBpitAd8ZEClAhCKw0ui27gHSQhZ6h2e.jpg",
      description: "From greasy, cluttered kitchen to spotless culinary workspace"
    },
    {
      id: 2,
      title: "Bathroom Transformation",
      beforeImage: "https://t4.ftcdn.net/jpg/03/03/81/55/240_F_303815576_vBDDsTnvxS9o71lHYMxx61LZhC3ugOOS.jpg",
      afterImage: "https://t3.ftcdn.net/jpg/00/73/18/64/240_F_73186485_K4zhlw5QhtZ69XpqDiGOL6M1PjFFTGud.jpg",
      description: "Moldy, stained bathroom to sparkling clean sanctuary"
    }
  ];

  const videoTestimonials = [
    {
      id: 1,
      name: "Jennifer K.",
      location: "River Oaks Estate",
      role: "Verified Client",
      content: "OTON transformed our 12,000 sq ft home. Their attention to detail is simply unparalleled. The team is professional, discreet, and perfectionists.",
      videoThumbnail: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "/videos/jaco7.mp4",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b786d4d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      name: "Robert & Sarah M.",
      location: "Memorial Area Mansion",
      role: "Verified Client",
      content: "We've tried every luxury cleaning service in Houston. OTON is the only one that truly understands what 'white glove' service means.",
      videoThumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "/videos/jaco7.mp4",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      name: "Dr. Michael Chen",
      location: "West University Place",
      role: "Verified Client",
      content: "As a physician, I appreciate their medical-grade sanitation standards. My home has never been cleaner or felt more pristine.",
      videoThumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "/videos/jaco7.mp4",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "River Oaks",
      service: "Deep Cleaning",
      rating: 5,
      content: "OTON transformed our home! The attention to detail is incredible. They noticed things we didn't even know needed cleaning.",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvPKUQMSN0wjDX6D4pHPvmFforYqw_RKraQ&s"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Memorial",
      service: "Regular Maintenance",
      rating: 5,
      content: "As a busy professional, I need reliability. OTON shows up on time, every time, and does exceptional work. Worth every penny!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      name: "Jessica Williams",
      location: "West University",
      service: "Move-Out Cleaning",
      rating: 5,
      content: "Our move-out cleaning was flawless. The landlord returned our full deposit and complimented the cleaning. Thank you OTON!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const features = [
    {
      number: '01',
      title: 'Elite Team of Cleaning Connoisseurs',
      description: 'Our team isn\'t just trained—they\'re artisans of cleanliness. Each member undergoes specialized training in luxury home protocols and eco-conscious cleaning methodologies.',
      listItems: [
        'Specialized Training',
        'Background Checked & Insured',
        'Continuous Performance Excellence'
      ],
      image: 'https://t3.ftcdn.net/jpg/02/17/25/42/360_F_217254228_LXpIn9UanEygxR4j3T6LM5ASzKI8gSKr.jpg',
      imageAlt: 'Professional cleaning team working meticulously'
    },
    {
      number: '02',
      title: 'The Art of Impeccable Detail',
      description: 'Where others see cleaning, we see storytelling. Our detailed inspection checklist ensures no detail escapes our notice.',
      listItems: [
        'Detailed Quality Checklist',
        'Luxury-Grade Solutions',
        'Attention to Detail'
      ],
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Detailed cleaning work with attention to every corner'
    },
    {
      number: '03',
      title: 'Happiness, Guaranteed & Insured',
      description: 'Our promise isn\'t just a tagline—it\'s our company\'s DNA. Every service comes with our unprecedented guarantee and comprehensive insurance.',
      listItems: [
        'Satisfaction Guarantee',
        'Comprehensive Insurance',
        'Quality Assurance'
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Satisfied customer reviewing cleaning service'
    },
    {
      number: '04',
      title: 'Bespoke Service Tailored to You',
      description: 'Your home is as unique as your fingerprint, and your cleaning service should be too. Our concierge approach means we design every aspect around your lifestyle.',
      listItems: [
        'Personalized Planning',
        'Flexible Scheduling',
        'Eco & Family-Safe Customization'
      ],
      image: 'https://www.taskbird.com/_next/image?url=https%3A%2F%2Fstark-shiny-house.media.strapiapp.com%2FAirbnb_cleaner_ceceaee334.jpg&w=3840&q=75',
      imageAlt: 'Customized cleaning service consultation'
    }
  ];

  const cleaningPlans = [
    {
      id: 1,
      badge: "WEEKLY",
      title: "Weekly Cleaning",
      frequency: "Every Week",
      description: "Perfect for busy households",
      details: "Perfect for busy parents, active professionals, or anyone who wishes for their home to be in great shape at all times.",
      features: [
        "Consistent freshness & cleanliness",
        "Perfect for high-traffic homes",
        "Allergen reduction & dust control",
        "Priority scheduling"
      ],
      buttonText: "Book Weekly Service",
      color: "#1A3C34"
    },
    {
      id: 2,
      badge: "BI-WEEKLY",
      title: "Bi-Weekly Cleaning",
      frequency: "Every Two Weeks",
      description: "Ideal balance of value & freshness",
      details: "Looking to strike a balance between constant attention and practicality? Our bi-weekly cleaning service could be just what you need.",
      features: [
        "Perfect balance of freshness & value",
        "Ideal for moderate-use homes",
        "Deep clean maintenance",
        "Flexible scheduling options"
      ],
      buttonText: "Book Bi-Weekly Service",
      color: "#C2B280"
    },
    {
      id: 3,
      badge: "MONTHLY",
      title: "Monthly Cleaning",
      frequency: "Once a Month",
      description: "Thorough maintenance cleaning",
      details: "Our monthly house cleaning is great for keeping things in check without a major commitment.",
      features: [
        "Thorough deep cleaning each visit",
        "Perfect for low-occupancy homes",
        "Budget-friendly maintenance",
        "Schedule flexibility"
      ],
      buttonText: "Book Monthly Service",
      color: "#1A3C34"
    }
  ];

  const baseBodyStyles: any = {
    bodyContainer: {
      backgroundColor: '#FCFAF5',
      paddingTop: isMobile ? '60px' : '120px',
      paddingRight: isMobile ? '20px' : '40px',
      paddingBottom: isMobile ? '60px' : '120px',
      paddingLeft: isMobile ? '20px' : '40px',
      fontFamily: "'Cormorant Garamond', serif",
    },
    
    differenceSection: {
      maxWidth: '1400px',
      margin: '0 auto',
      marginBottom: isMobile ? '80px' : '120px',
      textAlign: 'center',
      paddingLeft: isMobile ? '20px' : '0',
      paddingRight: isMobile ? '20px' : '0',
      background: 'linear-gradient(135deg, rgba(245, 241, 232, 0.95) 0%, rgba(252, 250, 245, 1) 100%)',
      borderRadius: '20px',
      paddingTop: isMobile ? '40px' : '80px',
      paddingBottom: isMobile ? '40px' : '80px',
      boxShadow: '0 10px 40px rgba(26, 60, 52, 0.05)',
      border: '1px solid rgba(194, 178, 128, 0.1)',
      position: 'relative',
      overflow: 'hidden',
    },
    
    differenceSectionBg: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'radial-gradient(circle at 20% 80%, rgba(194, 178, 128, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(26, 60, 52, 0.03) 0%, transparent 50%)',
      zIndex: 1,
    },
    
    differenceBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: isMobile ? '8px' : '12px',
      backgroundColor: 'rgba(194, 178, 128, 0.1)',
      padding: isMobile ? '12px 20px' : '16px 32px',
      borderRadius: '50px',
      marginBottom: isMobile ? '30px' : '40px',
      border: '1px solid rgba(194, 178, 128, 0.2)',
      backdropFilter: 'blur(10px)',
      position: 'relative',
      zIndex: 2,
    },
    
    diamondIcon: {
      color: '#C2B280',
      fontWeight: '500',
      fontSize: isMobile ? '20px' : '24px',
    },
    
    differenceBadgeText: {
      fontSize: isMobile ? '14px' : '18px',
      fontWeight: '500',
      color: '#1A3C34',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      fontFamily: "'Inter', sans-serif",
    },
    
    differenceTitle: {
      fontSize: isMobile ? '2.5rem' : isTablet ? '3rem' : '3.5rem',
      fontWeight: '500',
      color: '#1A3C34',
      marginTop: 0,
      marginRight: 0,
      marginBottom: '16px',
      marginLeft: 0,
      lineHeight: '1',
      fontFamily: "'Cormorant Garamond', serif",
      letterSpacing: '-0.5px',
      position: 'relative',
      zIndex: 2,
    },
    
    navySubtitle: {
      fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
      fontWeight: '500',
      color: '#1A3C34',
      marginTop: 0,
      marginRight: 0,
      marginBottom: '8px',
      marginLeft: 0,
      fontFamily: "'Cormorant Garamond', serif",
      letterSpacing: '-0.5px',
      position: 'relative',
      zIndex: 2,
    },
    
    goldSubtitle: {
      fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
      fontWeight: '500',
      color: '#C2B280',
      marginTop: 0,
      marginRight: 0,
      marginBottom: '48px',
      marginLeft: 0,
      fontFamily: "'Cormorant Garamond', serif",
      letterSpacing: '-0.5px',
      position: 'relative',
      zIndex: 2,
    },
    
    differenceDescription: {
      fontSize: isMobile ? '1.125rem' : isTablet ? '1.25rem' : '1.375rem',
      color: '#5D7168',
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
      backgroundColor: active ? '#F5F1E8' : '#FCFAF5',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: active 
        ? '0 20px 60px rgba(26, 60, 52, 0.1)' 
        : '0 10px 40px rgba(26, 60, 52, 0.05)',
      border: '1px solid rgba(26, 60, 52, 0.1)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: active ? 'translateY(-10px) scale(1.01)' : 'translateY(0) scale(1)',
      position: 'relative',
      '&::before': active ? {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, #C2B280, #D4C9A1)',
        zIndex: 3,
      } : {},
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
      backgroundColor: '#1A3C34',
      color: '#F5F1E8',
      width: isMobile ? '50px' : '60px',
      height: isMobile ? '50px' : '60px',
      borderRadius: '50%',
      fontSize: isMobile ? '1.25rem' : '1.5rem',
      fontWeight: '500',
      fontFamily: "'Cormorant Garamond', serif",
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      marginRight: isMobile ? '12px' : '20px',
      flexShrink: 0,
      transition: 'all 0.3s ease',
    },
    
    featureContent: {
      paddingTop: isMobile ? '24px' : '48px',
      paddingRight: isMobile ? '20px' : '40px',
      paddingBottom: isMobile ? '24px' : '48px',
      paddingLeft: isMobile ? '20px' : '40px',
      background: 'linear-gradient(180deg, #FCFAF5 0%, #F5F1E8 100%)',
    },
    
    featureTitleContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: isMobile ? '16px' : '24px',
    },
    
    featureTitle: {
      fontSize: isMobile ? '1.5rem' : isTablet ? '1.75rem' : '2rem',
      fontWeight: '500',
      color: '#1A3C34',
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      lineHeight: '1.2',
      fontFamily: "'Cormorant Garamond', serif",
      letterSpacing: '-0.25px',
      background: 'linear-gradient(135deg, #1A3C34 0%, #2D5C4F 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    
    featureDescription: {
      fontSize: isMobile ? '1rem' : isTablet ? '1.125rem' : '1.25rem',
      color: '#5D7168',
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
      backgroundColor: 'rgba(194, 178, 128, 0.05)',
      borderRadius: '12px',
      border: '1px solid rgba(194, 178, 128, 0.1)',
      transition: 'all 0.3s ease',
    },
    
    checkIcon: {
      color: '#C2B280',
      fontWeight: '400',
      fontSize: isMobile ? '20px' : '24px',
      flexShrink: 0,
      marginTop: '2px',
    },
    
    featureListItemText: {
      fontSize: isMobile ? '0.9rem' : '1rem',
      color: '#3D4D47',
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
      background: 'linear-gradient(135deg, rgba(252, 250, 245, 0.95) 0%, rgba(252, 250, 245, 1) 100%)',
      borderRadius: '20px',
      paddingTop: isMobile ? '40px' : '80px',
      paddingBottom: isMobile ? '40px' : '80px',
      boxShadow: '0 10px 40px rgba(26, 60, 52, 0.05)',
      border: '1px solid rgba(194, 178, 128, 0.1)',
      position: 'relative',
      overflow: 'hidden',
    },
    
    transformationsSectionBg: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'radial-gradient(circle at 10% 10%, rgba(194, 178, 128, 0.08) 0%, transparent 40%), radial-gradient(circle at 90% 90%, rgba(26, 60, 52, 0.03) 0%, transparent 40%)',
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
      fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
      fontWeight: '500',
      color: '#1A3C34',
      marginTop: 0,
      marginRight: 0,
      marginBottom: '8px',
      marginLeft: 0,
      fontFamily: "'Cormorant Garamond', serif",
      lineHeight: '1.1',
    },
    
    goldTitle: {
      fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
      fontWeight: '500',
      color: '#C2B280',
      marginTop: 0,
      marginRight: 0,
      marginBottom: '20px',
      marginLeft: 0,
      fontFamily: "'Cormorant Garamond', serif",
      lineHeight: '1.1',
    },
    
    transformationsSubtitle: {
      fontSize: isMobile ? '1.125rem' : '1.25rem',
      color: '#5D7168',
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
      backgroundColor: active ? '#F5F1E8' : '#FCFAF5',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: active 
        ? '0 20px 60px rgba(26, 60, 52, 0.1)' 
        : '0 10px 40px rgba(26, 60, 52, 0.05)',
      border: '1px solid rgba(26, 60, 52, 0.1)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: active ? 'translateY(-10px)' : 'translateY(0)',
      '&::before': active ? {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, #C2B280, #D4C9A1)',
        zIndex: 3,
      } : {},
    }),
    
    transformationTitle: {
      fontSize: isMobile ? '1.5rem' : '2rem',
      fontWeight: '500',
      color: '#1A3C34',
      marginTop: 0,
      marginRight: 0,
      marginBottom: isMobile ? '20px' : '30px',
      marginLeft: 0,
      textAlign: 'center',
      fontFamily: "'Cormorant Garamond', serif",
      paddingTop: isMobile ? '30px' : '40px',
      paddingRight: isMobile ? '20px' : '40px',
      paddingBottom: 0,
      paddingLeft: isMobile ? '20px' : '40px',
      background: 'linear-gradient(135deg, #1A3C34 0%, #2D5C4F 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
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
      borderRadius: '16px',
      overflow: 'hidden',
      height: isMobile ? '250px' : isTablet ? '300px' : '400px',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
    },
    
    imageLabel: {
      position: 'absolute',
      top: '20px',
      left: '20px',
      backgroundColor: '#1A3C34',
      color: '#F5F1E8',
      paddingTop: '8px',
      paddingRight: '20px',
      paddingBottom: '8px',
      paddingLeft: '20px',
      borderRadius: '30px',
      fontSize: isMobile ? '0.9rem' : '1rem',
      fontWeight: '500',
      fontFamily: "'Inter', sans-serif",
      zIndex: 2,
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
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
      color: '#5D7168',
      lineHeight: '1.6',
      marginTop: isMobile ? '20px' : '30px',
      marginRight: isMobile ? '20px' : '40px',
      marginBottom: isMobile ? '30px' : '40px',
      marginLeft: isMobile ? '20px' : '40px',
      fontWeight: '400',
      fontFamily: "'Inter', sans-serif",
      textAlign: 'center',
      borderTop: '1px solid #D8D1C1',
      paddingTop: isMobile ? '20px' : '30px',
    },

    videoTestimonialsSection: {
      maxWidth: '1400px',
      margin: '0 auto',
      marginBottom: isMobile ? '80px' : '120px',
      textAlign: 'center',
      paddingLeft: isMobile ? '20px' : '0',
      paddingRight: isMobile ? '20px' : '0',
      background: 'linear-gradient(135deg, rgba(245, 241, 232, 0.95) 0%, rgba(252, 250, 245, 1) 100%)',
      borderRadius: '20px',
      paddingTop: isMobile ? '40px' : '80px',
      paddingBottom: isMobile ? '40px' : '80px',
      boxShadow: '0 10px 40px rgba(26, 60, 52, 0.05)',
      border: '1px solid rgba(26, 60, 52, 0.1)',
      position: 'relative',
      overflow: 'hidden',
    },
    
    videoTestimonialsSectionBg: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'radial-gradient(circle at 30% 30%, rgba(26, 60, 52, 0.03) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(194, 178, 128, 0.05) 0%, transparent 50%)',
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
      fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
      fontWeight: '500',
      color: '#1A3C34',
      marginTop: 0,
      marginRight: 0,
      marginBottom: '8px',
      marginLeft: 0,
      fontFamily: "'Cormorant Garamond', serif",
      lineHeight: '1.1',
    },
    
    videoGoldTitle: {
      fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
      fontWeight: '500',
      color: '#C2B280',
      marginTop: 0,
      marginRight: 0,
      marginBottom: '20px',
      marginLeft: 0,
      fontFamily: "'Cormorant Garamond', serif",
      lineHeight: '1.1',
    },
    
    videoSubtitle: {
      fontSize: isMobile ? '1.125rem' : '1.25rem',
      color: '#5D7168',
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
    
    moreVideosButton: (active: boolean) => ({
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      backgroundColor: active ? '#1A3C34' : 'transparent',
      color: active ? '#F5F1E8' : '#1A3C34',
      border: '1px solid #1A3C34',
      paddingTop: isMobile ? '16px' : '20px',
      paddingRight: isMobile ? '24px' : '40px',
      paddingBottom: isMobile ? '16px' : '20px',
      paddingLeft: isMobile ? '24px' : '40px',
      borderRadius: '50px',
      fontSize: isMobile ? '1rem' : '1.125rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      fontFamily: "'Inter', sans-serif",
      transform: active ? 'translateY(-2px)' : 'translateY(0)',
      boxShadow: active ? '0 8px 25px rgba(0, 0, 0, 0.1)' : 'none',
      position: 'relative',
      zIndex: 2,
    }),
    
    reviewsSection: {
      maxWidth: '1400px',
      margin: '0 auto',
      marginBottom: isMobile ? '80px' : '120px',
      textAlign: 'center',
      paddingLeft: isMobile ? '20px' : '0',
      paddingRight: isMobile ? '20px' : '0',
      background: 'linear-gradient(135deg, rgba(252, 250, 245, 0.95) 0%, rgba(252, 250, 245, 1) 100%)',
      borderRadius: '20px',
      paddingTop: isMobile ? '40px' : '80px',
      paddingBottom: isMobile ? '40px' : '80px',
      boxShadow: '0 10px 40px rgba(26, 60, 52, 0.05)',
      border: '1px solid rgba(194, 178, 128, 0.1)',
      position: 'relative',
      overflow: 'hidden',
    },
    
    reviewsSectionBg: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'radial-gradient(circle at 20% 20%, rgba(194, 178, 128, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(26, 60, 52, 0.03) 0%, transparent 50%)',
      zIndex: 1,
    },
    
    reviewsHeader: {
      marginBottom: isMobile ? '40px' : '60px',
      position: 'relative',
      zIndex: 2,
    },
    
    reviewsTitle: {
      fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
      fontWeight: '500',
      color: '#1A3C34',
      marginTop: 0,
      marginRight: 0,
      marginBottom: '20px',
      marginLeft: 0,
      fontFamily: "'Cormorant Garamond', serif",
      lineHeight: '1.1',
    },
    
    reviewsSubtitle: {
      fontSize: isMobile ? '1.125rem' : '1.25rem',
      color: '#5D7168',
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
      backgroundColor: active ? '#F5F1E8' : '#FCFAF5',
      borderRadius: '20px',
      paddingTop: isMobile ? '30px' : '40px',
      paddingRight: isMobile ? '20px' : '32px',
      paddingBottom: isMobile ? '30px' : '40px',
      paddingLeft: isMobile ? '20px' : '32px',
      textAlign: 'left',
      border: active ? '1px solid #C2B280' : '1px solid rgba(26, 60, 52, 0.1)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: active ? 'translateY(-10px)' : 'translateY(0)',
      boxShadow: active 
        ? '0 20px 60px rgba(26, 60, 52, 0.1)' 
        : '0 10px 40px rgba(26, 60, 52, 0.05)',
      '&::before': active ? {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, #C2B280, #D4C9A1)',
        zIndex: 3,
      } : {},
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
      border: '2px solid #C2B280',
      boxShadow: '0 2px 8px rgba(194, 178, 128, 0.2)',
    },
    
    reviewerInfo: {
      flex: 1,
    },
    
    reviewerName: {
      fontSize: isMobile ? '1.25rem' : '1.5rem',
      fontWeight: '500',
      color: '#1A3C34',
      marginTop: 0,
      marginRight: 0,
      marginBottom: '8px',
      marginLeft: 0,
      fontFamily: "'Cormorant Garamond', serif",
    },
    
    reviewerDetails: {
      fontSize: isMobile ? '0.9rem' : '1rem',
      color: '#5D7168',
      fontWeight: '400',
      fontFamily: "'Inter', sans-serif",
      marginBottom: '8px',
    },
    
    starsContainer: {
      display: 'flex',
      gap: '4px',
    },
    
    starIcon: {
      color: '#C2B280',
      fontSize: isMobile ? '1rem' : '1.25rem',
      fontWeight: '400',
    },
    
    reviewContent: {
      fontSize: isMobile ? '1rem' : '1.125rem',
      color: '#5D7168',
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
      background: 'linear-gradient(135deg, rgba(245, 241, 232, 0.95) 0%, rgba(252, 250, 245, 1) 100%)',
      borderRadius: '20px',
      paddingTop: isMobile ? '40px' : '80px',
      paddingBottom: isMobile ? '40px' : '80px',
      boxShadow: '0 10px 40px rgba(26, 60, 52, 0.05)',
      border: '1px solid rgba(26, 60, 52, 0.1)',
      position: 'relative',
      overflow: 'hidden',
    },
    
    flexibleSolutionsSectionBg: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'radial-gradient(circle at 10% 90%, rgba(194, 178, 128, 0.05) 0%, transparent 50%), radial-gradient(circle at 90% 10%, rgba(26, 60, 52, 0.03) 0%, transparent 50%)',
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
      backgroundColor: 'rgba(194, 178, 128, 0.1)',
      paddingTop: isMobile ? '12px' : '16px',
      paddingRight: isMobile ? '20px' : '32px',
      paddingBottom: isMobile ? '12px' : '16px',
      paddingLeft: isMobile ? '20px' : '32px',
      borderRadius: '50px',
      marginBottom: isMobile ? '20px' : '30px',
      border: '1px solid rgba(194, 178, 128, 0.2)',
      backdropFilter: 'blur(10px)',
    },
    
    flexibleSolutionsBadgeText: {
      fontSize: isMobile ? '14px' : '18px',
      fontWeight: '500',
      color: '#1A3C34',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      fontFamily: "'Inter', sans-serif",
    },
    
    flexibleSolutionsTitle: {
      fontSize: isMobile ? '2.5rem' : isTablet ? '3rem' : '3.5rem',
      fontWeight: '500',
      color: '#1A3C34',
      marginTop: 0,
      marginRight: 0,
      marginBottom: '20px',
      marginLeft: 0,
      lineHeight: '1',
      fontFamily: "'Cormorant Garamond', serif",
      letterSpacing: '-0.5px',
    },
    
    flexibleSolutionsSubtitle: {
      fontSize: isMobile ? '1.75rem' : isTablet ? '2rem' : '2.25rem',
      fontWeight: '500',
      color: '#1A3C34',
      marginTop: 0,
      marginRight: 0,
      marginBottom: '16px',
      marginLeft: 0,
      fontFamily: "'Cormorant Garamond', serif",
      lineHeight: '1.2',
    },
    
    flexibleSolutionsDescription: {
      fontSize: isMobile ? '1.125rem' : isTablet ? '1.25rem' : '1.375rem',
      color: '#5D7168',
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
      backgroundColor: active ? '#F5F1E8' : '#FCFAF5',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: active 
        ? '0 20px 60px rgba(26, 60, 52, 0.1)' 
        : '0 10px 40px rgba(26, 60, 52, 0.05)',
      border: active ? `2px solid ${color}` : '1px solid rgba(26, 60, 52, 0.1)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: active ? 'translateY(-15px)' : 'translateY(0)',
      display: 'flex',
      flexDirection: 'column',
      '&::before': active ? {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, #C2B280, #D4C9A1)',
        zIndex: 3,
      } : {},
    }),
    
    planHeader: (color: string) => ({
      backgroundColor: color,
      paddingTop: isMobile ? '30px' : '40px',
      paddingRight: isMobile ? '24px' : '32px',
      paddingBottom: isMobile ? '30px' : '40px',
      paddingLeft: isMobile ? '24px' : '32px',
      textAlign: 'center',
      color: color === '#C2B280' ? '#1A3C34' : '#F5F1E8',
    }),
    
    planBadge: {
      display: 'inline-block',
      backgroundColor: 'rgba(245, 241, 232, 0.2)',
      paddingTop: '8px',
      paddingRight: '20px',
      paddingBottom: '8px',
      paddingLeft: '20px',
      borderRadius: '30px',
      fontSize: '14px',
      fontWeight: '500',
      marginBottom: '20px',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      fontFamily: "'Inter', sans-serif",
    },
    
    planTitle: {
      fontSize: isMobile ? '1.75rem' : '2rem',
      fontWeight: '500',
      marginTop: 0,
      marginRight: 0,
      marginBottom: '12px',
      marginLeft: 0,
      fontFamily: "'Cormorant Garamond', serif",
      lineHeight: '1.1',
    },
    
    planFrequency: {
      fontSize: isMobile ? '1.125rem' : '1.25rem',
      fontWeight: '500',
      marginTop: 0,
      marginRight: 0,
      marginBottom: '8px',
      marginLeft: 0,
      fontFamily: "'Cormorant Garamond', serif",
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
      background: 'linear-gradient(180deg, #FCFAF5 0%, #F5F1E8 100%)',
    },
    
    planDetails: {
      fontSize: isMobile ? '0.9rem' : '1rem',
      color: '#5D7168',
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
      backgroundColor: 'rgba(194, 178, 128, 0.05)',
      borderRadius: '12px',
      border: '1px solid rgba(194, 178, 128, 0.1)',
    },
    
    planFeatureIcon: {
      color: '#C2B280',
      fontWeight: '400',
      fontSize: '20px',
      flexShrink: 0,
      marginTop: '2px',
    },
    
    planFeatureText: {
      fontSize: isMobile ? '0.9rem' : '1rem',
      color: '#3D4D47',
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
      color: active ? (color === '#C2B280' ? '#1A3C34' : '#F5F1E8') : color,
      border: `1px solid ${color}`,
      paddingTop: isMobile ? '16px' : '20px',
      paddingRight: isMobile ? '24px' : '32px',
      paddingBottom: isMobile ? '16px' : '20px',
      paddingLeft: isMobile ? '24px' : '32px',
      borderRadius: '50px',
      fontSize: isMobile ? '1rem' : '1.125rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      fontFamily: "'Inter', sans-serif",
      transform: active ? 'translateY(-2px)' : 'translateY(0)',
      boxShadow: active ? '0 8px 20px rgba(0, 0, 0, 0.1)' : 'none',
      width: '100%',
    }),
    
    consultationSection: {
      backgroundColor: 'rgba(26, 60, 52, 0.03)',
      borderRadius: '20px',
      paddingTop: isMobile ? '40px' : '60px',
      paddingRight: isMobile ? '24px' : '40px',
      paddingBottom: isMobile ? '40px' : '60px',
      paddingLeft: isMobile ? '24px' : '40px',
      textAlign: 'center',
      border: '1px solid rgba(194, 178, 128, 0.1)',
      maxWidth: '1000px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2,
      backdropFilter: 'blur(10px)',
      background: 'linear-gradient(135deg, rgba(252, 250, 245, 0.9) 0%, rgba(245, 241, 232, 0.9) 100%)',
      boxShadow: '0 10px 40px rgba(26, 60, 52, 0.05)',
    },
    
    consultationTitle: {
      fontSize: isMobile ? '1.75rem' : isTablet ? '2.25rem' : '2.5rem',
      fontWeight: '500',
      color: '#1A3C34',
      marginTop: 0,
      marginRight: 0,
      marginBottom: '24px',
      marginLeft: 0,
      fontFamily: "'Cormorant Garamond', serif",
      lineHeight: '1.2',
    },
    
    consultationDescription: {
      fontSize: isMobile ? '1.125rem' : isTablet ? '1.25rem' : '1.375rem',
      color: '#5D7168',
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
      backgroundColor: active ? '#C2B280' : '#1A3C34',
      color: active ? '#1A3C34' : '#F5F1E8',
      border: 'none',
      paddingTop: isMobile ? '16px' : '20px',
      paddingRight: isMobile ? '32px' : '48px',
      paddingBottom: isMobile ? '16px' : '20px',
      paddingLeft: isMobile ? '32px' : '48px',
      borderRadius: '50px',
      fontSize: isMobile ? '1.125rem' : '1.25rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      fontFamily: "'Inter', sans-serif",
      transform: active ? 'translateY(-2px)' : 'translateY(0)',
      boxShadow: active 
        ? '0 8px 25px rgba(194, 178, 128, 0.2)' 
        : '0 4px 15px rgba(26, 60, 52, 0.15)',
    }),
    
    beforeAfterCTA: (active: boolean) => ({
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      backgroundColor: active ? '#C2B280' : '#1A3C34',
      color: active ? '#1A3C34' : '#F5F1E8',
      border: 'none',
      paddingTop: isMobile ? '16px' : '20px',
      paddingRight: isMobile ? '24px' : '40px',
      paddingBottom: isMobile ? '16px' : '20px',
      paddingLeft: isMobile ? '24px' : '40px',
      borderRadius: '50px',
      fontSize: isMobile ? '1rem' : '1.125rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      fontFamily: "'Inter', sans-serif",
      transform: active ? 'translateY(-2px)' : 'translateY(0)',
      boxShadow: active 
        ? '0 8px 20px rgba(194, 178, 128, 0.2)' 
        : '0 4px 15px rgba(26, 60, 52, 0.15)',
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
      background: 'linear-gradient(135deg, rgba(252, 250, 245, 0.95) 0%, rgba(252, 250, 245, 1) 100%)',
      borderRadius: '20px',
      paddingTop: isMobile ? '40px' : '80px',
      paddingBottom: isMobile ? '40px' : '80px',
      boxShadow: '0 10px 40px rgba(26, 60, 52, 0.05)',
      border: '1px solid rgba(194, 178, 128, 0.1)',
      position: 'relative',
      overflow: 'hidden',
    },
    
    ourStorySectionBg: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'radial-gradient(circle at 20% 30%, rgba(194, 178, 128, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(26, 60, 52, 0.03) 0%, transparent 50%)',
      zIndex: 1,
    },
    
    ourStoryContent: {
      maxWidth: '1000px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2,
    },
    
    ourStoryTitle: {
      fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : '3rem',
      fontWeight: '500',
      color: '#1A3C34',
      marginTop: 0,
      marginRight: 0,
      marginBottom: '30px',
      marginLeft: 0,
      fontFamily: "'Cormorant Garamond', serif",
      lineHeight: '1.2',
      background: 'linear-gradient(135deg, #1A3C34 0%, #2D5C4F 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    
    ourStoryDescription: {
      fontSize: isMobile ? '1.125rem' : isTablet ? '1.25rem' : '1.375rem',
      color: '#5D7168',
      lineHeight: '1.8',
      marginTop: 0,
      marginRight: 'auto',
      marginBottom: isMobile ? '40px' : '60px',
      marginLeft: 'auto',
      fontWeight: '400',
      fontFamily: "'Inter', sans-serif",
      maxWidth: '900px',
      padding: isMobile ? '20px' : '40px',
      backgroundColor: 'rgba(252, 250, 245, 0.8)',
      borderRadius: '20px',
      boxShadow: '0 5px 20px rgba(0, 0, 0, 0.03)',
      border: '1px solid rgba(194, 178, 128, 0.1)',
    },
    
    ourStoryButton: (active: boolean) => ({
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      backgroundColor: active ? '#C2B280' : '#1A3C34',
      color: active ? '#1A3C34' : '#F5F1E8',
      border: 'none',
      paddingTop: isMobile ? '16px' : '20px',
      paddingRight: isMobile ? '24px' : '40px',
      paddingBottom: isMobile ? '16px' : '20px',
      paddingLeft: isMobile ? '24px' : '40px',
      borderRadius: '50px',
      fontSize: isMobile ? '1rem' : '1.125rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      fontFamily: "'Inter', sans-serif",
      transform: active ? 'translateY(-2px)' : 'translateY(0)',
      boxShadow: active 
        ? '0 8px 20px rgba(194, 178, 128, 0.2)' 
        : '0 4px 15px rgba(26, 60, 52, 0.15)',
    }),
  };

  return (
    <section style={baseBodyStyles.bodyContainer}>
      <div style={baseBodyStyles.differenceSection}>
        <div style={baseBodyStyles.differenceSectionBg}></div>
        <div style={baseBodyStyles.differenceBadge}>
          <span style={baseBodyStyles.diamondIcon}>✦</span>
          <span style={baseBodyStyles.differenceBadgeText}>The BraBos Difference</span>
        </div>
        
        <div>
          <h2 style={baseBodyStyles.navySubtitle}>
            What You Can Expect from BraBos
          </h2>
          <h3 style={baseBodyStyles.goldSubtitle}>
            The Top-Rated Cleaning Services in Boston
          </h3>
        </div>
      </div>

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
                  transform: activeFeatureCard === index ? 'scale(1.05)' : 'scale(1)'
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

      <div style={baseBodyStyles.transformationsSection}>
        <div style={baseBodyStyles.transformationsSectionBg}></div>
        <div style={baseBodyStyles.transformationsHeader}>
          <div style={baseBodyStyles.transformationsTitleContainer}>
            <h2 style={baseBodyStyles.navyTitle}>
              See the BraBos Difference:
            </h2>
            <h2 style={baseBodyStyles.goldTitle}>
              Before & After
            </h2>
          </div>
          <p style={baseBodyStyles.transformationsSubtitle}>
            See how we turn neglected spaces into pristine sanctuaries with our professional luxury cleaning.
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
                    alt="Before transformation"
                    style={{
                      ...baseBodyStyles.transformationImage,
                      transform: activeBeforeAfter === index ? 'scale(1.02)' : 'scale(1)'
                    }}
                  />
                </div>
                
                <div style={baseBodyStyles.imageContainer}>
                  <div style={{...baseBodyStyles.imageLabel, ...baseBodyStyles.afterLabel}}>
                    AFTER
                  </div>
                  <img 
                    src={transformation.afterImage} 
                    alt="After transformation"
                    style={{
                      ...baseBodyStyles.transformationImage,
                      transform: activeBeforeAfter === index ? 'scale(1.02)' : 'scale(1)'
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

      <div style={baseBodyStyles.videoTestimonialsSection}>
        <div style={baseBodyStyles.videoTestimonialsSectionBg}></div>
        <div style={baseBodyStyles.videoTestimonialsHeader}>
          <div style={baseBodyStyles.videoTitleContainer}>
            <h2 style={baseBodyStyles.videoNavyTitle}>
              Video Testimonials
            </h2>
            <h2 style={baseBodyStyles.videoGoldTitle}>
              From Our Bostonian Clients
            </h2>
          </div>
          <p style={baseBodyStyles.videoSubtitle}>
            Hear directly from clients who have experienced the BraBos transformation
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

      <div style={baseBodyStyles.reviewsSection}>
        <div style={baseBodyStyles.reviewsSectionBg}></div>
        <div style={baseBodyStyles.reviewsHeader}>
          <h2 style={baseBodyStyles.reviewsTitle}>
            Real reviews from our customers
          </h2>
          <p style={baseBodyStyles.reviewsSubtitle}>
            Hear directly from Houston homeowners who have experienced the BraBos difference firsthand
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

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        marginBottom: isMobile ? '80px' : '120px',
        paddingTop: isMobile ? '0' : '0',
        paddingRight: isMobile ? '20px' : '40px',
        paddingBottom: isMobile ? '0' : '0',
        paddingLeft: isMobile ? '20px' : '40px',
        background: 'linear-gradient(135deg, rgba(245, 241, 232, 0.95) 0%, rgba(252, 250, 245, 1) 100%)',
        borderRadius: '20px',
        padding: isMobile ? '40px 20px' : '80px 40px',
        boxShadow: '0 10px 40px rgba(26, 60, 52, 0.05)',
        border: '1px solid rgba(26, 60, 52, 0.1)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(194, 178, 128, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(26, 60, 52, 0.03) 0%, transparent 50%)',
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
              backgroundColor: '#1A3C34',
              borderRadius: '20px',
              padding: '8px',
              position: 'relative',
              boxShadow: '0 20px 60px rgba(26, 60, 52, 0.1)',
            }}>
              <img 
                src="https://i.pinimg.com/736x/cc/0c/e0/cc0ce07fd30b038b573610c481791779.jpg" 
                alt="Mike & Ruth - Founders of OTON"
                style={{
                  width: '100%',
                  height: isMobile ? '400px' : isTablet ? '500px' : '600px',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  border: '2px solid #C2B280',
                }}
              />
              
              <div style={{
                position: 'absolute',
                bottom: isMobile ? '-20px' : isTablet ? '-25px' : '-30px',
                left: isMobile ? '20px' : '40px',
                right: isMobile ? '20px' : '40px',
                backgroundColor: '#C2B280',
                paddingTop: isMobile ? '20px' : '30px',
                paddingRight: isMobile ? '20px' : '30px',
                paddingBottom: isMobile ? '20px' : '30px',
                paddingLeft: isMobile ? '20px' : '30px',
                borderRadius: '16px',
                textAlign: 'center',
                boxShadow: '0 8px 25px rgba(194, 178, 128, 0.2)',
                transform: 'rotate(-2deg)',
                zIndex: 3,
              }}>
                <div style={{
                  fontSize: isMobile ? '18px' : isTablet ? '20px' : '24px',
                  fontWeight: '500',
                  color: '#1A3C34',
                  fontFamily: "'Cormorant Garamond', serif",
                }}>
                  Owners & Quality Inspectors
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
              backgroundColor: 'rgba(194, 178, 128, 0.1)',
              paddingTop: isMobile ? '12px' : '16px',
              paddingRight: isMobile ? '20px' : '32px',
              paddingBottom: isMobile ? '12px' : '16px',
              paddingLeft: isMobile ? '20px' : '32px',
              borderRadius: '50px',
              marginBottom: isMobile ? '30px' : '40px',
              border: '1px solid rgba(194, 178, 128, 0.2)',
              backdropFilter: 'blur(10px)',
            }}>
              <span style={{
                color: '#C2B280',
                fontWeight: '500',
                fontSize: isMobile ? '20px' : '24px',
                fontFamily: "'Cormorant Garamond', serif",
              }}>
                ✦
              </span>
              <span style={{
                fontSize: isMobile ? '14px' : '18px',
                fontWeight: '500',
                color: '#1A3C34',
                letterSpacing: '2px',
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
                fontSize: isMobile ? '2rem' : isTablet ? '3rem' : '3.5rem',
                fontWeight: '500',
                color: '#1A3C34',
                marginTop: 0,
                marginRight: 0,
                marginBottom: '8px',
                marginLeft: 0,
                fontFamily: "'Cormorant Garamond', serif",
                lineHeight: '1',
                letterSpacing: '-0.5px',
              }}>
                Meet The Owners:
              </h2>
              <h2 style={{
                fontSize: isMobile ? '2.5rem' : isTablet ? '3.5rem' : '4.5rem',
                fontWeight: '500',
                color: '#1A3C34',
                marginTop: 0,
                marginRight: 0,
                marginBottom: '8px',
                marginLeft: 0,
                fontFamily: "'Cormorant Garamond', serif",
                lineHeight: '0.9',
              }}>
                Mike{" "}
                <span style={{
                  color: '#C2B280',
                  fontSize: isMobile ? '3rem' : isTablet ? '4rem' : '5rem',
                  display: 'inline-block',
                  margin: '0 20px',
                  transform: 'translateY(5px)',
                }}>
                  &
                </span>
                {" "}Ruth
              </h2>
            </div>
            
            <p style={{
              fontSize: isMobile ? '1.125rem' : isTablet ? '1.25rem' : '1.375rem',
              color: '#5D7168',
              lineHeight: '1.7',
              marginTop: 0,
              marginRight: 0,
              marginBottom: isMobile ? '20px' : '30px',
              marginLeft: 0,
              fontWeight: '400',
              fontFamily: "'Inter', sans-serif",
            }}>
              The passionate husband-and-wife team behind Boston's most trusted luxury cleaning service. 
              Their hands-on approach and commitment to excellence is what sets BraBos apart.
            </p>
            
            <div style={{
              backgroundColor: 'rgba(26, 60, 52, 0.03)',
              padding: isMobile ? '30px' : '40px',
              borderRadius: '16px',
              border: '1px solid rgba(194, 178, 128, 0.1)',
              marginBottom: isMobile ? '30px' : '40px',
              backdropFilter: 'blur(10px)',
              background: 'linear-gradient(135deg, rgba(252, 250, 245, 0.9) 0%, rgba(245, 241, 232, 0.9) 100%)',
              boxShadow: '0 5px 20px rgba(0, 0, 0, 0.03)',
            }}>
              <h3 style={{
                fontSize: isMobile ? '1.75rem' : isTablet ? '2rem' : '2.25rem',
                fontWeight: '500',
                color: '#1A3C34',
                marginTop: 0,
                marginRight: 0,
                marginBottom: isMobile ? '16px' : '20px',
                marginLeft: 0,
                fontFamily: "'Cormorant Garamond', serif",
              }}>
                Our Story of Excellence
              </h3>
              <p style={{
                fontSize: isMobile ? '0.9rem' : '1rem',
                color: '#5D7168',
                lineHeight: '1.8',
                marginTop: 0,
                marginRight: 0,
                marginBottom: isMobile ? '16px' : '20px',
                marginLeft: 0,
                fontWeight: '400',
                fontFamily: "'Inter', sans-serif",
              }}>
                With over 15 years combined experience in luxury hospitality and premium service industries, 
                Mike and Ruth founded BraBos with one simple mission: to redefine what exceptional cleaning 
                service means in Houston and Boston.
              </p>
              <p style={{
                fontSize: isMobile ? '0.9rem' : '1rem',
                color: '#5D7168',
                lineHeight: '1.8',
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 0,
                fontWeight: '400',
                fontFamily: "'Inter', sans-serif",
              }}>
                What started as a passion project has grown into Houston's #1 rated luxury cleaning service, 
                serving over 5,000 homes and maintaining a 99.8% satisfaction rate. Their hands-on approach 
                means they're involved in every aspect of your service, from initial consultation to final 
                quality inspection.
              </p>
            </div>
            
            <button
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                backgroundColor: '#1A3C34',
                color: '#F5F1E8',
                border: 'none',
                paddingTop: isMobile ? '16px' : '20px',
                paddingRight: isMobile ? '24px' : '40px',
                paddingBottom: isMobile ? '16px' : '20px',
                paddingLeft: isMobile ? '24px' : '40px',
                borderRadius: '50px',
                fontSize: isMobile ? '1rem' : '1.125rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                fontFamily: "'Inter', sans-serif",
                transform: activeButton === 'learnMore' ? 'translateY(-2px)' : 'translateY(0)',
                boxShadow: activeButton === 'learnMore' 
                  ? '0 8px 25px rgba(26, 60, 52, 0.2)' 
                  : '0 4px 15px rgba(26, 60, 52, 0.15)',
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

      <div style={baseBodyStyles.ourStorySection}>
        <div style={baseBodyStyles.ourStorySectionBg}></div>
        <div style={baseBodyStyles.ourStoryContent}>
          <h2 style={baseBodyStyles.ourStoryTitle}>
            The BraBos Transformation Journey
          </h2>
          
          <div style={baseBodyStyles.ourStoryDescription}>
            <p style={{
              marginTop: 0,
              marginBottom: '30px',
              fontSize: isMobile ? '1.125rem' : '1.375rem',
              lineHeight: 1.7,
              fontWeight: '400',
              color: '#5D7168',
              fontFamily: "'Inter', sans-serif",
            }}>
              While our competitors clean, we transform. Every BraBos service is a meticulous 
              journey from ordinary to extraordinary, where we don't just meet expectations—we 
              shatter them. This isn't just cleaning; it's an elevated experience designed for 
              those who appreciate the difference between adequate and exceptional.
            </p>
            
            <StatsCounter />
            
            <p style={{
              marginTop: '40px',
              marginBottom: 0,
              fontSize: isMobile ? '1.125rem' : '1.375rem',
              lineHeight: 1.7,
              fontWeight: '400',
              color: '#5D7168',
              fontFamily: "'Inter', sans-serif",
            }}>
              Join the thousands of satisfied homeowners who have experienced the BraBos 
              difference. From our meticulous attention to detail to our unparalleled customer 
              service, we're redefining what luxury cleaning means in Houston and Boston.
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
            Discover Our Full Story
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

      <div style={baseBodyStyles.flexibleSolutionsSection}>
        <div style={baseBodyStyles.flexibleSolutionsSectionBg}></div>
        <div style={baseBodyStyles.flexibleSolutionsHeader}>
          <div style={baseBodyStyles.flexibleSolutionsBadge}>
            <span style={baseBodyStyles.diamondIcon}>✦</span>
            <span style={baseBodyStyles.flexibleSolutionsBadgeText}>Flexible Solutions</span>
          </div>
          
          <h2 style={baseBodyStyles.flexibleSolutionsTitle}>
            Flexible Solutions for Busy Households
          </h2>
          <h3 style={baseBodyStyles.flexibleSolutionsSubtitle}>
            <span style={{ color: '#C2B280' }}>Recurring House Cleaning</span> That Fits Your Schedule
          </h3>
          
          <p style={baseBodyStyles.flexibleSolutionsDescription}>
            Choose the perfect cleaning schedule that matches your lifestyle and budget. 
            Whether you need weekly maintenance or monthly deep cleaning, we've got you covered.
          </p>
        </div>
        
        <div style={baseBodyStyles.cleaningPlansGrid}>
          {cleaningPlans.map((plan, index) => (
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
            Not Sure Which Plan Is Right For You?
          </h3>
          <p style={baseBodyStyles.consultationDescription}>
            Our cleaning experts will assess your home and recommend the perfect schedule 
            based on your lifestyle, home size, and cleaning needs.
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
            Get Free Consultation
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

      <FAQSection 
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our premium cleaning services."
        accentColor="#C2B280"
        textColor="#1A3C34"
        backgroundColor="#FCFAF5"
        containerStyle={{
          marginTop: '0',
          marginBottom: '0',
          paddingTop: isMobile ? '60px' : '80px',
          paddingBottom: isMobile ? '60px' : '80px',
          paddingLeft: isMobile ? '20px' : '40px',
          paddingRight: isMobile ? '20px' : '40px',
          background: 'linear-gradient(135deg, rgba(245, 241, 232, 0.95) 0%, rgba(252, 250, 245, 1) 100%)',
          borderRadius: '20px',
          boxShadow: '0 10px 40px rgba(26, 60, 52, 0.05)',
          border: '1px solid rgba(26, 60, 52, 0.1)',
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
        quoteText="Get Quote"
        bookText="Book Now"
      />
    </>
  );
};

export default HomePage;