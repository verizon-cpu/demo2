"use client";

import { useState, useEffect, FormEvent, ChangeEvent, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';

// MicroInteraction Component - Image Logo for attention grabbing
const MicroInteraction = ({ 
  src = "/image/pointer1.png", // Default path - replace with your actual logo
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
        top: '0px',
        right: '0px',
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

// Bottom CTA Buttons Component
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

// Logo Carousel Component
interface LogoCarouselProps {
  logos?: Array<{ src: string; alt: string }>;
  autoRotate?: boolean;
  interval?: number;
  showNavigation?: boolean;
  backgroundColor?: string;
  height?: number;
}

function LogoCarousel({
  logos = [
    { src: "/image/logo1.png", alt: "GAF Certified" },
    { src: "/image/logo2.png", alt: "Owens Corning" },
    { src: "/image/logo3.png", alt: "CertainTeed" },
    { src: "/image/logo4.png", alt: "Malarkey" },
    { src: "/image/logo5.png", alt: "IKO" },
    { src: "/image/logo6.png", alt: "Atlas" },
    { src: "/image/logo7.png", alt: "Tamko" },
    { src: "/image/logo8.png", alt: "GAF" },
    { src: "/image/logo9.png", alt: "CertainTeed" },
    { src: "/image/logo10.png", alt: "Owens Corning" }
  ],
  autoRotate = true,
  interval = 3000,
  showNavigation = true,
  backgroundColor = 'transparent',
  height = 80
}: LogoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoRotateRef = useRef<NodeJS.Timeout>(undefined);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (autoRotate && !isHovered) {
      autoRotateRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % logos.length);
      }, interval);
    }
    return () => {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
      }
    };
  }, [autoRotate, isHovered, logos.length, interval]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + logos.length) % logos.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % logos.length);
  };

  const visibleLogos = isMobile ? 3 : 5;
  const startIndex = currentIndex;
  const visibleItems = [];
  
  for (let i = 0; i < visibleLogos; i++) {
    visibleItems.push(logos[(startIndex + i) % logos.length]);
  }

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor,
        padding: isMobile ? '20px 0' : '30px 0',
        margin: isMobile ? '20px 0' : '30px 0',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: isMobile ? '20px' : '40px',
          transition: 'all 0.5s ease',
          opacity: isHovered ? 0.9 : 1,
        }}
      >
        {visibleItems.map((logo, index) => (
          <div
            key={`${logo.alt}-${index}`}
            style={{
              flex: '0 0 auto',
              width: isMobile ? '80px' : '120px',
              height: isMobile ? height * 0.6 : height,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              transform: isHovered ? 'scale(1.1)' : 'scale(1)',
              filter: 'brightness(1) contrast(1)',
            }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                opacity: 0.9,
              }}
            />
          </div>
        ))}
      </div>

      {showNavigation && (
        <>
          <button
            onClick={handlePrevious}
            style={{
              position: 'absolute',
              left: isMobile ? '5px' : '15px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 184, 0, 0.2)',
              border: '2px solid #FFB800',
              borderRadius: '50%',
              width: isMobile ? '30px' : '40px',
              height: isMobile ? '30px' : '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#FFB800',
              fontSize: isMobile ? '16px' : '20px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              zIndex: 10,
              backdropFilter: 'blur(5px)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FFB800';
              e.currentTarget.style.color = '#0A0A0C';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 184, 0, 0.2)';
              e.currentTarget.style.color = '#FFB800';
            }}
          >
            ←
          </button>
          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: isMobile ? '5px' : '15px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 184, 0, 0.2)',
              border: '2px solid #FFB800',
              borderRadius: '50%',
              width: isMobile ? '30px' : '40px',
              height: isMobile ? '30px' : '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#FFB800',
              fontSize: isMobile ? '16px' : '20px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              zIndex: 10,
              backdropFilter: 'blur(5px)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FFB800';
              e.currentTarget.style.color = '#0A0A0C';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 184, 0, 0.2)';
              e.currentTarget.style.color = '#FFB800';
            }}
          >
            →
          </button>
        </>
      )}

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginTop: isMobile ? '15px' : '20px',
        }}
      >
        {logos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: isMobile ? '8px' : '10px',
              height: isMobile ? '8px' : '10px',
              borderRadius: '50%',
              background: index === currentIndex ? '#FFB800' : 'rgba(255, 184, 0, 0.3)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Rotating Star Ring Component
const RotatingStarRing = ({ 
  size = 300, 
  color = '#FFB800',
  opacity = 0.1,
  speed = 20,
  style = {}
}) => {
  const [rotation, setRotation] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, speed);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', checkMobile);
    };
  }, [speed]);

  const actualSize = isMobile ? size * 0.6 : size;

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        width: actualSize,
        height: actualSize,
        pointerEvents: 'none',
        zIndex: 0,
        ...style
      }}
    >
      <svg
        width={actualSize}
        height={actualSize}
        viewBox={`0 0 ${actualSize} ${actualSize}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity={opacity} />
            <stop offset="50%" stopColor={color} stopOpacity={opacity * 1.5} />
            <stop offset="100%" stopColor={color} stopOpacity={opacity} />
          </linearGradient>
        </defs>
        {[...Array(24)].map((_, i) => {
          const angle = (i * 15) * (Math.PI / 180);
          const radius = actualSize * 0.4;
          const x = actualSize / 2 + radius * Math.cos(angle);
          const y = actualSize / 2 + radius * Math.sin(angle);
          const starSize = actualSize * 0.08;
          
          return (
            <g key={i}>
              <path
                d={`M${x},${y - starSize} L${x + starSize * 0.3},${y - starSize * 0.2} L${x + starSize},${y} L${x + starSize * 0.3},${y + starSize * 0.2} L${x},${y + starSize} L${x - starSize * 0.3},${y + starSize * 0.2} L${x - starSize},${y} L${x - starSize * 0.3},${y - starSize * 0.2} Z`}
                fill="url(#starGradient)"
                transform={`rotate(${i * 15}, ${x}, ${y})`}
              />
              <circle
                cx={x}
                cy={y}
                r={starSize * 0.3}
                fill={color}
                fillOpacity={opacity * 2}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

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
      position: 'relative' as const,
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
      position: 'absolute' as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'url("/image/roofer1.png")',
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
      position: 'absolute' as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(10, 10, 12, 0.60) 0%, rgba(10, 10, 12, 0.50) 100%)',
      zIndex: 2,
    },

    heroContent: {
      position: 'relative' as const,
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
      flexDirection: 'column' as const,
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
      position: 'relative' as const,
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
      marginTop: '20px',
    },

    reviewsContainer: {
      display: 'flex',
      flexDirection: isMobile ? 'column' as const : 'row' as const,
      alignItems: isMobile ? 'flex-start' : 'center',
      gap: isMobile ? (isSmallMobile ? '0.5rem' : '0.75rem') : '1rem',
      flexWrap: 'wrap',
      width: '100%',
      marginTop: isMobile ? '20px' : '30px',
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
      position: 'relative' as const,
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
      flexDirection: isMobile ? 'column' as const : 'row' as const,
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
      textAlign: 'center' as const,
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
      flexDirection: 'column' as const,
      gap: '1.25rem',
      width: '100%',
    },
    
    formGroup: {
      display: 'flex',
      flexDirection: 'column' as const,
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
      position: 'relative' as const,
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
      textAlign: 'center' as const,
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
      textAlign: 'center' as const,
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
      textAlign: 'center' as const,
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
              {/* Wavy flag image on top of the badge */}
              <img
                src="/image/wavy-flag.png"
                alt="Wavy Flag"
                style={{
                  position: 'absolute' as const,
                  top: '-40px',
                  left: '20px',
                  width: isMobile ? '60px' : '80px',
                  height: isMobile ? '40px' : '50px',
                  objectFit: 'contain',
                  zIndex: 21,
                  filter: 'drop-shadow(0 8px 16px rgba(255, 184, 0, 0.4))',
                }}
              />
              
              <MicroInteraction 
                src="/image/pointer1.png"
                width={200}
                height={220}
                style={{ 
                  top: '80px', 
                  right: '-20px',
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
            
            {/* Replaced three images with "Licensed, Certified & Trusted" as a bold headline */}
            <div style={{
              width: '100%',
              marginTop: isMobile ? '20px' : '30px',
              marginBottom: isMobile ? '20px' : '30px',
            }}>
              <h2 style={{
                fontSize: isMobile ? (isSmallMobile ? '2rem' : '2.5rem') : (isTablet ? '3rem' : '3.5rem'),
                fontWeight: '800',
                color: colors.white,
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                margin: 0,
              }}>
                Licensed,{" "}
                <span style={{ color: colors.gold }}>Certified</span>
                {" "}& Trusted
              </h2>
              
              <div style={{
                display: 'flex',
                gap: isMobile ? '15px' : '25px',
                marginTop: isMobile ? '15px' : '20px',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                  <span style={{
                    fontSize: isMobile ? '1.25rem' : '1.5rem',
                    fontWeight: '700',
                    color: colors.gold,
                  }}>✓</span>
                  <span style={{
                    fontSize: isMobile ? '1rem' : '1.25rem',
                    fontWeight: '500',
                    color: colors.softWhite90,
                    fontFamily: "'Inter', sans-serif",
                  }}>Licensed</span>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                  <span style={{
                    fontSize: isMobile ? '1.25rem' : '1.5rem',
                    fontWeight: '700',
                    color: colors.gold,
                  }}>✓</span>
                  <span style={{
                    fontSize: isMobile ? '1rem' : '1.25rem',
                    fontWeight: '500',
                    color: colors.softWhite90,
                    fontFamily: "'Inter', sans-serif",
                  }}>Certified</span>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                  <span style={{
                    fontSize: isMobile ? '1.25rem' : '1.5rem',
                    fontWeight: '700',
                    color: colors.gold,
                  }}>✓</span>
                  <span style={{
                    fontSize: isMobile ? '1rem' : '1.25rem',
                    fontWeight: '500',
                    color: colors.softWhite90,
                    fontFamily: "'Inter', sans-serif",
                  }}>Trusted</span>
                </div>
              </div>
            </div>
            
            {/* Logo Carousel below "Licensed, Certified & Trusted" */}
            <LogoCarousel />
            
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
                    src="/image/pointer1.png"
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

// At the very end of your file, after all components are defined:

// At the very end of your file, after all components are defined:

const HomePage = () => {
  return (
    <>
      <HeroSection />
      
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