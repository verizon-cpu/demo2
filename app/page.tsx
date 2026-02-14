"use client";

import { useState, useEffect, FormEvent, ChangeEvent, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';

// Waving USA Flag Component (as image)
const USAFlag = ({ width = 40, height = 30 }) => {
  return (
    <img 
      src="/image/usa-flag.png" 
      alt="USA Flag"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        objectFit: 'contain',
        marginRight: '8px',
        animation: 'waveFlag 2s ease-in-out infinite',
        transformOrigin: 'center',
      }}
    />
  );
};

// Rotating Star Ring Component
const RotatingStarRing = ({ color = '#FFB800', size = 60 }) => {
  return (
    <div style={{
      position: 'relative',
      width: size,
      height: size,
      animation: 'rotateRing 10s linear infinite',
    }}>
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45) * Math.PI / 180;
        const radius = size * 0.4;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        return (
          <div key={i} style={{
            position: 'absolute',
            left: `calc(50% + ${x}px - 6px)`,
            top: `calc(50% + ${y}px - 6px)`,
            width: '12px',
            height: '12px',
            backgroundColor: color,
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
            transform: `rotate(${i * 45}deg)`,
          }} />
        );
      })}
      <style jsx>{`
        @keyframes rotateRing {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

// Horizontal Auto-scrolling Logo Carousel
const LogoCarousel = ({ 
  backgroundColor = '#0A0A0C'
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const logos = [
    { id: 1, src: "/image/lifetime1.png", alt: "25+ Years Experience" },
    { id: 2, src: "/image/award1.png", alt: "Licensed & Bonded" },
    { id: 3, src: "/image/award1.png", alt: "Lifetime Warranty" },
    { id: 4, src: "/image/award1.png", alt: "GAF Certified" },
    { id: 5, src: "/image/award1.png", alt: "OSHA Certified" },
    { id: 6, src: "/image/award1.png", alt: "Insurance Approved" },
    { id: 7, src: "/image/lifetime1.png", alt: "5-Star Rated" },
    { id: 8, src: "/image/award1.png", alt: "BBB Accredited" },
    { id: 9, src: "/image/award1.png", alt: "Angi Super Service" },
    { id: 10, src: "/image/lifetime1.png", alt: "Home Advisor Elite" },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    let animationFrame: number;
    let scrollPosition = 0;

    const scroll = () => {
      if (!scrollContainer || isPaused) return;
      
      scrollPosition += 0.5;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Manual navigation
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div style={{
      width: '100%',
      backgroundColor: backgroundColor,
      padding: '20px 0',
      position: 'relative',
      borderTop: '1px solid rgba(255, 184, 0, 0.2)',
      borderBottom: '1px solid rgba(255, 184, 0, 0.2)',
    }}>
      <div style={{
        position: 'relative',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        {/* Navigation Buttons */}
        <button
          onClick={scrollLeft}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            position: 'absolute',
            left: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#FFB800',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            color: '#0A0A0C',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          }}
        >
          ←
        </button>
        
        <button
          onClick={scrollRight}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#FFB800',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            color: '#0A0A0C',
            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          }}
        >
          →
        </button>

        {/* Scrolling Container */}
        <div
          ref={scrollRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            display: 'flex',
            overflowX: 'hidden',
            scrollBehavior: 'smooth',
            padding: '10px 0',
            cursor: 'grab',
          }}
        >
          {/* Double the logos for seamless looping */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              style={{
                flex: '0 0 auto',
                width: isMobile ? '100px' : '150px',
                margin: '0 20px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: isMobile ? '60px' : '80px',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)',
                  opacity: 0.9,
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.filter = 'brightness(0) invert(0.8) sepia(1) hue-rotate(0deg) saturate(5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.opacity = '0.9';
                  e.currentTarget.style.filter = 'brightness(0) invert(1)';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Star Popper Component for sides
const StarPopper = ({ side = 'left' }) => {
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; color: string }>>([]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const newStar = {
        id: Date.now() + Math.random(),
        x: side === 'left' ? Math.random() * 30 : 70 + Math.random() * 30,
        y: Math.random() * 100,
        size: 15 + Math.random() * 25,
        color: side === 'left' ? '#3C3B6E' : '#B22234',
      };
      
      setStars(prev => [...prev.slice(-8), newStar]);
      
      setTimeout(() => {
        setStars(prev => prev.filter(s => s.id !== newStar.id));
      }, 2000);
    }, 200);
    
    return () => clearInterval(interval);
  }, [side]);
  
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: side === 'left' ? 0 : 'auto',
      right: side === 'right' ? 0 : 'auto',
      width: '150px',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 5,
      overflow: 'hidden',
    }}>
      {stars.map(star => (
        <div
          key={star.id}
          style={{
            position: 'absolute',
            left: `${star.x}%`,
            top: `${star.y}%`,
            animation: 'popStar 1.5s ease-out forwards',
          }}
        >
          <div style={{
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
            clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          }} />
        </div>
      ))}
      <style jsx>{`
        @keyframes popStar {
          0% {
            opacity: 1;
            transform: scale(0) translateY(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.2) translateY(-20px) rotate(180deg);
          }
          100% {
            opacity: 0;
            transform: scale(0) translateY(-40px) rotate(360deg);
          }
        }
        @keyframes waveFlag {
          0%, 100% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(2deg) scale(1.05); }
          75% { transform: rotate(-2deg) scale(1.05); }
        }
      `}</style>
    </div>
  );
};

// MicroInteraction Component - Image Logo for attention grabbing
const MicroInteraction = ({ 
  src = "/image/pointer1.png",
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
        background: '#0A0A0C',
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
  
  const [state, handleSubmit] = useForm("xqeedjny");
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    zipCode: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const [excellenceBadgeActive, setExcellenceBadgeActive] = useState(false);
  const [googleBadgeActive, setGoogleBadgeActive] = useState(false);
  const [googleReviewsActive, setGoogleReviewsActive] = useState(false);
  const [trustCardActive, setTrustCardActive] = useState<number | null>(null);
  const [submitButtonActive, setSubmitButtonActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
      setIsSmallMobile(width < 480);
    };

    checkScreenSize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

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

  const handleTouchStart = (setter: (value: any) => void, value: any) => {
    setter(value);
  };

  const handleTouchEnd = (setter: (value: any) => void, resetValue: any = null) => {
    setTimeout(() => setter(resetValue), 150);
  };

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
      backgroundImage: 'url("/image/roofer1.png")',
      backgroundSize: 'cover',
      backgroundPosition: isMobile ? 'center 30%' : 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: isMobile ? 'scroll' : 'fixed',
      zIndex: 1,
      width: '100%',
      height: '100%',
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
      position: 'relative',
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
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
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
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
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
      marginTop: '100px',
    },

    trustGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: isMobile ? (isSmallMobile ? '0.5rem' : '0.75rem') : '1rem',
      width: '100%',
    },
    
    trustCard: (active: boolean) => ({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      border: 'none',
      padding: 0,
      transition: 'all 0.3s ease',
      transform: active ? 'translateY(-2px)' : 'translateY(0)',
    }),
    
    trustIcon: {
      width: isMobile ? (isSmallMobile ? '100px' : '100px') : '200px',
      height: isMobile ? (isSmallMobile ? '100px' : '100px') : '200px',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    },
    
    trustImage: {
      width: '100%',
      height: '100%',
      objectFit: 'contain' as const,
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
      <StarPopper side="left" />
      <StarPopper side="right" />
      
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
                <USAFlag width={30} height={22} />
                <strong style={baseStyles.houstonBold}>HOUSTON'S PREMIER</strong> ROOFING CONTRACTOR
              </span>
            </div>
            
            <h1 style={baseStyles.headline}>
              <RotatingStarRing color="#FFB800" size={50} />
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
                  <img 
                    src="/image/lifetime1.png" 
                    alt="25+ Years Experience"
                    style={baseStyles.trustImage}
                  />
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
                  <img 
                    src="/image/award1.png" 
                    alt="Licensed & Bonded"
                    style={baseStyles.trustImage}
                  />
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
                  <img 
                    src="/image/award1.png" 
                    alt="Lifetime Warranty"
                    style={baseStyles.trustImage}
                  />
                </div>
              </div>
            </div>

            {/* Licensed, Certified & Trusted title with 10-logo carousel */}
            <div style={{ marginTop: '30px' }}>
              <h3 style={{
                fontSize: isMobile ? '1.5rem' : '2rem',
                fontWeight: '800',
                color: '#FFB800',
                textAlign: 'center',
                marginBottom: '20px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
              }}>
                licensed, certified & trusted
              </h3>
              <LogoCarousel backgroundColor="#0A0A0C" />
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

// Video Testimonial Card Component (keep as is from your original)
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
        backgroundColor: activeVideo === index ? '#F9FAFB' : '#FFFFFF',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: activeVideo === index 
          ? '0 30px 60px rgba(10, 10, 12, 0.2)' 
          : '0 20px 40px rgba(10, 10, 12, 0.1)',
        border: activeVideo === index 
          ? `2px solid #FFB800` 
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
        backgroundColor: '#0A0A0C',
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
              backgroundColor: '#FFB800',
              color: '#0A0A0C',
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
                backgroundColor: '#FFB800',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: activeVideo === index ? 'scale(1)' : 'scale(0.8)',
                transition: 'transform 0.3s ease',
              }}>
                <span style={{
                  color: '#0A0A0C',
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
          color: '#0A0A0C',
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
          color: '#FFB800',
          fontWeight: '600',
          fontFamily: "'Inter', sans-serif",
          backgroundColor: 'rgba(255, 184, 0, 0.1)',
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
          color: '#FFB800',
          fontFamily: "'Inter', sans-serif",
          marginBottom: '8px',
          transition: 'all 0.3s ease',
        }}>
          {yearsExperience}+
        </div>
        <div style={{
          fontSize: isMobile ? (isSmallMobile ? '11px' : '12px') : '14px',
          fontWeight: 400,
          color: '#FAFAFA',
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
          color: '#FFB800',
          fontFamily: "'Inter', sans-serif",
          marginBottom: '8px',
          transition: 'all 0.3s ease',
        }}>
          {projectsCompleted.toLocaleString()}+
        </div>
        <div style={{
          fontSize: isMobile ? (isSmallMobile ? '11px' : '12px') : '14px',
          fontWeight: 400,
          color: '#FAFAFA',
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
          color: '#FFB800',
          fontFamily: "'Inter', sans-serif",
          marginBottom: '8px',
          transition: 'all 0.3s ease',
        }}>
          {satisfactionRate}%
        </div>
        <div style={{
          fontSize: isMobile ? (isSmallMobile ? '11px' : '12px') : '14px',
          fontWeight: 400,
          color: '#FAFAFA',
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

// FAQ Section Component (keep as is from your original)
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
  subtitle = 'Find answers to common questions about our roofing services.',
  faqs = [
    {
      question: "How do I know if I need a roof replacement or repair?",
      answer: "Our expert inspectors will assess your roof's condition, age, and extent of damage."
    },
    {
      question: "How long does a typical roof replacement take?",
      answer: "Most residential roof replacements are completed within 1-3 days."
    },
    {
      question: "What roofing materials do you offer?",
      answer: "We offer architectural asphalt shingles, metal roofing, tile, slate, and flat roofing systems."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, BRAVOS is fully licensed, bonded, and insured."
    },
    {
      question: "Do you handle insurance claims?",
      answer: "Absolutely. Our team specializes in insurance claim assistance."
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
      background: '#FFFFFF',
      position: 'relative' as const,
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
    title: {
      fontSize: isMobile ? (isSmallMobile ? '1.75rem' : '2rem') : '2.5rem',
      fontWeight: 700,
      color: textColor,
      lineHeight: 1.2,
      fontFamily: "'Inter', sans-serif",
      marginBottom: '20px',
    },
    subtitle: {
      fontSize: isMobile ? (isSmallMobile ? '0.9rem' : '1rem') : '1.125rem',
      fontWeight: 400,
      color: '#666666',
      lineHeight: 1.6,
      maxWidth: '800px',
      margin: '0 auto',
    },
    faqContainer: {
      maxWidth: '900px',
      margin: '0 auto',
    },
    faqItem: (isOpen: boolean) => ({
      background: '#FFFFFF',
      borderRadius: '16px',
      marginBottom: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(10, 10, 12, 0.08)',
      border: `1px solid ${isOpen ? accentColor : 'rgba(10, 10, 12, 0.1)'}`,
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
    }),
    questionNumber: {
      width: isMobile ? (isSmallMobile ? '28px' : '32px') : '32px',
      height: isMobile ? (isSmallMobile ? '28px' : '32px') : '32px',
      background: `linear-gradient(135deg, ${accentColor} 0%, #E6A600 100%)`,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: isMobile ? (isSmallMobile ? '10px' : '12px') : '12px',
      fontWeight: 700,
      color: '#0A0A0C',
      flexShrink: 0,
      marginRight: '16px',
    },
    questionText: {
      fontSize: isMobile ? (isSmallMobile ? '0.9rem' : '1rem') : '1.125rem',
      fontWeight: 600,
      color: textColor,
      fontFamily: "'Inter', sans-serif",
      flex: 1,
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
    }),
    answerContent: {
      padding: isMobile ? (isSmallMobile ? '0 14px 14px 60px' : '0 16px 16px 68px') : '0 20px 20px 68px',
      opacity: 1,
    },
    answerText: {
      fontSize: isMobile ? (isSmallMobile ? '0.85rem' : '0.9rem') : '1rem',
      fontWeight: 400,
      color: '#666666',
      lineHeight: 1.6,
      margin: 0,
    },
    ctaContainer: {
      textAlign: 'center' as const,
      marginTop: isMobile ? (isSmallMobile ? '30px' : '40px') : '60px',
      padding: isMobile ? (isSmallMobile ? '20px' : '30px 20px') : '40px 20px',
      background: `linear-gradient(135deg, rgba(10, 10, 12, 0.05) 0%, rgba(255, 184, 0, 0.05) 100%)`,
      borderRadius: '20px',
      border: `1px solid rgba(255, 184, 0, 0.3)`,
    },
    ctaTitle: {
      fontSize: isMobile ? (isSmallMobile ? '1.25rem' : '1.5rem') : '1.75rem',
      fontWeight: 700,
      color: textColor,
      fontFamily: "'Inter', sans-serif",
      marginBottom: '20px',
    },
    ctaDescription: {
      fontSize: isMobile ? (isSmallMobile ? '0.9rem' : '1rem') : '1.125rem',
      fontWeight: 400,
      color: '#666666',
      lineHeight: 1.6,
      maxWidth: '600px',
      margin: '0 auto 24px',
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: isMobile ? 'column' as const : 'row' as const,
      gap: '16px',
      justifyContent: 'center',
      alignItems: 'center',
    },
    primaryButton: {
      background: `linear-gradient(135deg, ${accentColor} 0%, #E6A600 100%)`,
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
      <StarPopper side="left" />
      <StarPopper side="right" />
      <div style={baseStyles.container}>
        <div style={baseStyles.header}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <RotatingStarRing color={accentColor} size={50} />
          </div>
          <h2 style={baseStyles.title}>{title}</h2>
          <p style={baseStyles.subtitle}>{subtitle}</p>
        </div>

        <div style={baseStyles.faqContainer}>
          {faqs.map((faq, index) => (
            <div 
              key={index}
              style={baseStyles.faqItem(openIndex === index)}
            >
              <button
                onClick={() => toggleFAQ(index)}
                style={baseStyles.questionButton(openIndex === index)}
              >
                <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                  <div style={baseStyles.questionNumber}>Q{index + 1}</div>
                  <span style={baseStyles.questionText}>{faq.question}</span>
                </div>
                {showToggleIcon && (
                  <div style={baseStyles.toggleIcon(openIndex === index)}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5V19M5 12H19" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </button>
              
              <div style={baseStyles.answerContainer(openIndex === index)}>
                <div style={baseStyles.answerContent}>
                  <p style={baseStyles.answerText}>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={baseStyles.ctaContainer}>
          <h3 style={baseStyles.ctaTitle}>Still Have Roofing Questions?</h3>
          <p style={baseStyles.ctaDescription}>
            Our expert team is available 24/7 to answer any questions and schedule your free roof inspection.
          </p>
          <div style={baseStyles.buttonContainer}>
            <button 
              onClick={() => window.location.href = '/contact'}
              style={baseStyles.primaryButton}
            >
              Free Inspection
            </button>
            <button 
              onClick={() => window.location.href = 'tel:+12815551234'}
              style={baseStyles.secondaryButton}
            >
              Call (281) 555-1234
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// BodySection Component
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
    navy: '#1A2A3A',
    navyLight: '#2C3E50',
    navyDark: '#0F1A24',
    beige: '#D4C5B0',
    beigeLight: '#E5D9CC',
    beigeDark: '#B8A992',
    gray: '#4A5568',
    grayLight: '#64748B',
    grayDark: '#2D3748',
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
      beforeImage: "/image/spoiledroof.jpg",
      afterImage: "/image/repairedroof.jpg",
      description: "From severe storm damage to premium architectural shingle installation"
    },
    {
      id: 2,
      title: "#2 Metal Roof Replacement",
      beforeImage: "/image/smetalroof.jpg",
      afterImage: "/image/rmetalroof.jpg",
      description: "Aged asphalt shingles replaced with energy-efficient standing seam metal roof"
    }
  ];

  const videoTestimonials = [
    {
      id: 1,
      name: "David & Susan Thompson",
      location: "River Oaks",
      role: "Verified Homeowner",
      content: "BRAVOS replaced our roof after hail damage and the transformation was incredible.",
      videoThumbnail: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "/videos/roofing1.mp4",
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Memorial",
      role: "Verified Homeowner",
      content: "The team was professional, punctual, and completed our new roof in just two days.",
      videoThumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "/videos/roofing2.mp4",
    },
    {
      id: 3,
      name: "Jennifer Williams",
      location: "West University",
      role: "Verified Homeowner",
      content: "They helped us navigate the insurance claim process and got us a brand new roof.",
      videoThumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "/videos/roofing3.mp4",
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Robert Garcia",
      location: "Sugar Land",
      service: "Complete Roof Replacement",
      rating: 5,
      content: "BRAVOS exceeded our expectations in every way. Their crew was professional, the installation was flawless.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      name: "Patricia Martinez",
      location: "Katy",
      service: "Emergency Repair",
      rating: 5,
      content: "Our roof was leaking during a storm and BRAVOS responded within hours. True professionals!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b786d4d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      name: "James Anderson",
      location: "The Woodlands",
      service: "Insurance Claim Assistance",
      rating: 5,
      content: "The team at BRAVOS handled our insurance claim from start to finish. We got a complete roof replacement with no stress.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 4,
      name: "Lisa Johnson",
      location: "Pearland",
      service: "Metal Roof Installation",
      rating: 5,
      content: "We upgraded to a standing seam metal roof and it's stunning. The crew was meticulous.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const features = [
    {
      number: '01',
      title: 'Master Craftsmen & GAF-Certified',
      description: 'Our team consists of factory-trained, GAF-certified roofing professionals.',
      listItems: [
        'GAF Master Elite® Certification',
        'OSHA-Certified Safety Training',
        'Continuous Technical Education'
      ],
      image: '/image/team.jpg',
      imageAlt: 'Professional roofing team'
    },
    {
      number: '02',
      title: 'Precision Craftsmanship & Quality',
      description: 'Every project follows our proprietary 127-point quality checklist.',
      listItems: [
        '127-Point Quality Inspection',
        'Premium Material Selection',
        'Advanced Ventilation Systems'
      ],
      image: '/image/team.jpg',
      imageAlt: 'Detailed roofing craftsmanship'
    },
    {
      number: '03',
      title: 'Triple Protection Guarantee',
      description: 'Every BRAVOS roof comes with our comprehensive protection package.',
      listItems: [
        '25-Year Workmanship Warranty',
        '50-Year Material Coverage',
        'Leak-Free Installation Guarantee'
      ],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Satisfied homeowner'
    },
    {
      number: '04',
      title: 'Insurance Claim Specialists',
      description: 'Our dedicated claims team works directly with your adjuster.',
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
      details: "Complete tear-off, underlayment, premium shingles, flashing replacement.",
      features: [
        "Full tear-off & disposal",
        "Premium architectural shingles",
        "Ice & water shield protection",
        "New flashing & ridge vents"
      ],
      buttonText: "Get Free Estimate",
      color: colors.navy
    },
    {
      id: 2,
      badge: "REPAIR",
      title: "Roof Repair",
      frequency: "Targeted Solutions",
      description: "Fast, reliable repair service",
      details: "From minor leaks to storm damage repair, we provide prompt, lasting repairs.",
      features: [
        "Emergency leak repair",
        "Shingle replacement",
        "Flashing repair/replacement",
        "Storm damage restoration"
      ],
      buttonText: "Schedule Repair",
      color: colors.beige
    },
    {
      id: 3,
      badge: "INSPECTION",
      title: "Free Roof Inspection",
      frequency: "Comprehensive Assessment",
      description: "Expert evaluation & recommendations",
      details: "Drone and manual assessment, photo documentation, detailed report.",
      features: [
        "Drone & manual inspection",
        "Thermal imaging available",
        "Detailed photo report",
        "Written estimate"
      ],
      buttonText: "Book Inspection",
      color: colors.gray
    }
  ];

  const baseBodyStyles: any = {
    bodyContainer: {
      backgroundColor: colors.navyDark,
      paddingTop: isMobile ? '60px' : '120px',
      paddingRight: isMobile ? '20px' : '40px',
      paddingBottom: isMobile ? '60px' : '120px',
      paddingLeft: isMobile ? '20px' : '40px',
      fontFamily: "'Inter', sans-serif",
      position: 'relative',
    },
    
    differenceSection: {
      maxWidth: '1400px',
      margin: '0 auto',
      marginBottom: isMobile ? '80px' : '120px',
      textAlign: 'center',
      background: colors.navy,
      borderRadius: '32px',
      paddingTop: isMobile ? '40px' : '80px',
      paddingBottom: isMobile ? '40px' : '80px',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
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
      background: `radial-gradient(circle at 20% 80%, ${colors.goldLight} 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)`,
      zIndex: 1,
    },
    
    differenceBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: isMobile ? '8px' : '12px',
      backgroundColor: 'rgba(255, 184, 0, 0.15)',
      padding: isMobile ? '12px 20px' : '16px 32px',
      borderRadius: '50px',
      marginBottom: isMobile ? '30px' : '40px',
      border: `2px solid ${colors.goldBorder}`,
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
      color: colors.white,
      letterSpacing: '3px',
      textTransform: 'uppercase',
      fontFamily: "'Inter', sans-serif",
    },
    
    navySubtitle: {
      fontSize: isMobile ? '2rem' : isTablet ? '2.25rem' : '2.5rem',
      fontWeight: '700',
      color: colors.white,
      marginTop: 0,
      marginRight: 0,
      marginBottom: '8px',
      marginLeft: 0,
      fontFamily: "'Inter', sans-serif",
      lineHeight: '1',
      letterSpacing: '-0.5px',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
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
      textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
      letterSpacing: '-0.5px',
      position: 'relative',
      zIndex: 2,
    },
    
    differenceDescription: {
      fontSize: isMobile ? '1.125rem' : isTablet ? '1.25rem' : '1.375rem',
      color: colors.softWhite90,
      lineHeight: '1.7',
      maxWidth: '900px',
      margin: '0 auto 40px',
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
      margin: '0 auto 80px',
    },
    
    featureCard: (active: boolean) => ({
      backgroundColor: active ? colors.navyLight : colors.gray,
      borderRadius: '32px',
      overflow: 'hidden',
      boxShadow: active 
        ? '0 40px 80px rgba(0, 0, 0, 0.4)' 
        : '0 20px 60px rgba(0, 0, 0, 0.3)',
      border: active 
        ? `2px solid ${colors.gold}` 
        : `1px solid ${colors.goldBorder}`,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: active ? 'translateY(-15px) scale(1.02)' : 'translateY(0) scale(1)',
      position: 'relative',
    }),
    
    featureImageContainer: {
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
      backgroundColor: colors.gold,
      color: colors.navyDark,
      width: isMobile ? '50px' : '60px',
      height: isMobile ? '50px' : '60px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: isMobile ? '1.25rem' : '1.5rem',
      fontWeight: '700',
      marginRight: isMobile ? '12px' : '20px',
      flexShrink: 0,
    },
    
    featureContent: {
      padding: isMobile ? '24px 20px' : '48px 40px',
    },
    
    featureTitleContainer: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: isMobile ? '16px' : '24px',
    },
    
    featureTitle: {
      fontSize: isMobile ? '1.5rem' : isTablet ? '1.75rem' : '2rem',
      fontWeight: '700',
      color: colors.white,
      margin: 0,
      lineHeight: '1.2',
      fontFamily: "'Inter', sans-serif",
    },
    
    featureDescription: {
      fontSize: isMobile ? '1rem' : isTablet ? '1.125rem' : '1.125rem',
      color: colors.softWhite90,
      lineHeight: '1.8',
      marginBottom: isMobile ? '24px' : '32px',
    },
    
    featureList: {
      display: 'flex',
      flexDirection: 'column',
      gap: isMobile ? '12px' : '20px',
    },
    
    featureListItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '16px',
      padding: '12px 16px',
      backgroundColor: 'rgba(255, 184, 0, 0.15)',
      borderRadius: '12px',
      border: `1px solid ${colors.goldBorder}`,
    },
    
    checkIcon: {
      color: colors.gold,
      fontWeight: '700',
      fontSize: isMobile ? '20px' : '24px',
      flexShrink: 0,
    },
    
    featureListItemText: {
      fontSize: isMobile ? '0.95rem' : '1.1rem',
      color: colors.white,
      lineHeight: '1.6',
    },

    transformationsSection: {
      maxWidth: '1400px',
      margin: '0 auto 120px',
      textAlign: 'center',
      background: colors.beige,
      borderRadius: '32px',
      paddingTop: isMobile ? '40px' : '80px',
      paddingBottom: isMobile ? '40px' : '80px',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
      border: `1px solid ${colors.goldBorder}`,
      position: 'relative',
      overflow: 'hidden',
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
      color: colors.navyDark,
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
      textShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      lineHeight: '1.1',
    },
    
    transformationsSubtitle: {
      fontSize: isMobile ? '1.125rem' : '1.25rem',
      color: colors.navyDark,
      lineHeight: '1.6',
      maxWidth: '800px',
      margin: '0 auto',
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
      backgroundColor: active ? colors.beigeLight : colors.white,
      borderRadius: '32px',
      overflow: 'hidden',
      boxShadow: active 
        ? '0 40px 80px rgba(0, 0, 0, 0.25)' 
        : '0 20px 60px rgba(0, 0, 0, 0.15)',
      border: active 
        ? `2px solid ${colors.gold}` 
        : `1px solid ${colors.goldBorder}`,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: active ? 'translateY(-15px)' : 'translateY(0)',
    }),
    
    transformationTitle: {
      fontSize: isMobile ? '1.5rem' : '1.75rem',
      fontWeight: '700',
      color: colors.navyDark,
      margin: 0,
      padding: isMobile ? '30px 20px 0' : '40px 40px 0',
      textAlign: 'center',
    },
    
    beforeAfterGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? '20px' : '30px',
      padding: isMobile ? '20px' : '40px',
    },
    
    imageContainer: {
      position: 'relative',
      borderRadius: '24px',
      overflow: 'hidden',
      height: isMobile ? '250px' : isTablet ? '300px' : '350px',
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)',
    },
    
    imageLabel: {
      position: 'absolute',
      top: '20px',
      left: '20px',
      backgroundColor: colors.navyDark,
      color: colors.white,
      padding: '8px 20px',
      borderRadius: '30px',
      fontSize: isMobile ? '0.9rem' : '1rem',
      fontWeight: '600',
      zIndex: 2,
    },
    
    beforeLabel: {
      backgroundColor: colors.navyDark,
    },
    
    afterLabel: {
      backgroundColor: colors.grayDark,
    },
    
    transformationImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s ease',
    },
    
    transformationDescription: {
      fontSize: isMobile ? '1rem' : '1.125rem',
      color: colors.navyDark,
      lineHeight: '1.6',
      margin: 0,
      padding: isMobile ? '0 20px 30px' : '0 40px 40px',
      textAlign: 'center',
      borderTop: `2px solid ${colors.goldBorder}`,
      paddingTop: isMobile ? '20px' : '30px',
    },

    videoTestimonialsSection: {
      maxWidth: '1400px',
      margin: '0 auto 120px',
      textAlign: 'center',
      background: colors.gray,
      borderRadius: '32px',
      paddingTop: isMobile ? '40px' : '80px',
      paddingBottom: isMobile ? '40px' : '80px',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
      border: `1px solid ${colors.goldBorder}`,
      position: 'relative',
      overflow: 'hidden',
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
      color: colors.white,
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
      textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
      lineHeight: '1.1',
    },
    
    videoSubtitle: {
      fontSize: isMobile ? '1.125rem' : '1.25rem',
      color: colors.softWhite90,
      lineHeight: '1.6',
      maxWidth: '800px',
      margin: '0 auto',
    },
    
    videoGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
      gap: isMobile ? '20px' : isTablet ? '24px' : '32px',
      maxWidth: '1200px',
      margin: '40px auto 60px',
      position: 'relative',
      zIndex: 2,
    },

    reviewsSection: {
      maxWidth: '1400px',
      margin: '0 auto 120px',
      textAlign: 'center',
      background: colors.navyLight,
      borderRadius: '32px',
      paddingTop: isMobile ? '40px' : '80px',
      paddingBottom: isMobile ? '40px' : '80px',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
      border: `1px solid ${colors.goldBorder}`,
      position: 'relative',
      overflow: 'hidden',
    },
    
    reviewsTitle: {
      fontSize: isMobile ? '2rem' : isTablet ? '2.25rem' : '2.5rem',
      fontWeight: '700',
      color: colors.white,
      marginTop: 0,
      marginRight: 0,
      marginBottom: '20px',
      marginLeft: 0,
      fontFamily: "'Inter', sans-serif",
      lineHeight: '1.1',
    },
    
    reviewsSubtitle: {
      fontSize: isMobile ? '1.125rem' : '1.25rem',
      color: colors.softWhite90,
      lineHeight: '1.6',
      maxWidth: '800px',
      margin: '0 auto',
    },
    
    reviewsGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : 'repeat(2, 1fr)',
      gap: isMobile ? '20px' : isTablet ? '24px' : '32px',
      maxWidth: '1200px',
      margin: '40px auto 0',
      position: 'relative',
      zIndex: 2,
    },
    
    reviewCard: (active: boolean) => ({
      backgroundColor: active ? colors.grayLight : colors.white,
      borderRadius: '32px',
      padding: isMobile ? '30px 20px' : '40px 32px',
      textAlign: 'left',
      border: active 
        ? `2px solid ${colors.gold}` 
        : `2px solid ${colors.goldBorder}`,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: active ? 'translateY(-15px)' : 'translateY(0)',
      boxShadow: active 
        ? '0 40px 80px rgba(0, 0, 0, 0.3)' 
        : '0 20px 60px rgba(0, 0, 0, 0.2)',
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
    },
    
    reviewerInfo: {
      flex: 1,
    },
    
    reviewerName: {
      fontSize: isMobile ? '1.25rem' : '1.5rem',
      fontWeight: '700',
      color: colors.navyDark,
      margin: '0 0 8px 0',
    },
    
    reviewerDetails: {
      fontSize: isMobile ? '0.9rem' : '1rem',
      color: colors.grayDark,
      margin: '0 0 8px 0',
    },
    
    starsContainer: {
      display: 'flex',
      gap: '4px',
    },
    
    starIcon: {
      color: colors.gold,
      fontSize: isMobile ? '1rem' : '1.25rem',
    },
    
    reviewContent: {
      fontSize: isMobile ? '0.95rem' : '1.1rem',
      color: colors.grayDark,
      lineHeight: '1.7',
      margin: 0,
      fontStyle: 'italic',
    },

    flexibleSolutionsSection: {
      maxWidth: '1400px',
      margin: '0 auto 120px',
      textAlign: 'center',
      background: colors.navy,
      borderRadius: '32px',
      paddingTop: isMobile ? '40px' : '80px',
      paddingBottom: isMobile ? '40px' : '80px',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
      border: `1px solid ${colors.goldBorder}`,
      position: 'relative',
      overflow: 'hidden',
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
      backgroundColor: 'rgba(255, 184, 0, 0.15)',
      padding: isMobile ? '12px 20px' : '16px 32px',
      borderRadius: '50px',
      marginBottom: isMobile ? '20px' : '30px',
      border: `2px solid ${colors.goldBorder}`,
    },
    
    flexibleSolutionsBadgeText: {
      fontSize: isMobile ? '14px' : '18px',
      fontWeight: '700',
      color: colors.white,
      letterSpacing: '3px',
      textTransform: 'uppercase',
      fontFamily: "'Inter', sans-serif",
    },
    
    flexibleSolutionsTitle: {
      fontSize: isMobile ? '2.5rem' : isTablet ? '3rem' : '3.5rem',
      fontWeight: '700',
      color: colors.white,
      margin: '0 0 20px 0',
      lineHeight: '1',
      fontFamily: "'Inter', sans-serif",
      letterSpacing: '-1px',
    },
    
    flexibleSolutionsSubtitle: {
      fontSize: isMobile ? '1.75rem' : isTablet ? '2rem' : '2rem',
      fontWeight: '700',
      color: colors.white,
      margin: '0 0 16px 0',
      fontFamily: "'Inter', sans-serif",
      lineHeight: '1.2',
    },
    
    flexibleSolutionsDescription: {
      fontSize: isMobile ? '1.125rem' : isTablet ? '1.25rem' : '1.375rem',
      color: colors.softWhite90,
      lineHeight: '1.7',
      maxWidth: '900px',
      margin: '0 auto 60px',
    },
    
    cleaningPlansGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
      gap: isMobile ? '32px' : isTablet ? '24px' : '32px',
      maxWidth: '1400px',
      margin: '0 auto 60px',
      position: 'relative',
      zIndex: 2,
    },
    
    cleaningPlanCard: (active: boolean, color: string) => ({
      backgroundColor: active ? colors.grayLight : colors.white,
      borderRadius: '32px',
      overflow: 'hidden',
      boxShadow: active 
        ? '0 40px 80px rgba(0, 0, 0, 0.3)' 
        : '0 20px 60px rgba(0, 0, 0, 0.2)',
      border: active 
        ? `3px solid ${colors.gold}` 
        : `2px solid ${colors.goldBorder}`,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: active ? 'translateY(-20px)' : 'translateY(0)',
      display: 'flex',
      flexDirection: 'column',
    }),
    
    planHeader: (color: string) => ({
      backgroundColor: color,
      padding: isMobile ? '30px 24px' : '40px 32px',
      textAlign: 'center',
      color: color === colors.beige ? colors.navyDark : colors.white,
    }),
    
    planBadge: {
      display: 'inline-block',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      padding: '8px 20px',
      borderRadius: '30px',
      fontSize: '14px',
      fontWeight: '700',
      marginBottom: '20px',
      letterSpacing: '2px',
      textTransform: 'uppercase',
    },
    
    planTitle: {
      fontSize: isMobile ? '1.75rem' : '2rem',
      fontWeight: '700',
      margin: '0 0 12px 0',
      lineHeight: '1.1',
    },
    
    planFrequency: {
      fontSize: isMobile ? '1.125rem' : '1.25rem',
      fontWeight: '600',
      margin: '0 0 8px 0',
      opacity: 0.9,
    },
    
    planDescription: {
      fontSize: isMobile ? '1rem' : '1.125rem',
      margin: 0,
    },
    
    planContent: {
      padding: isMobile ? '30px 24px' : '40px 32px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    
    planDetails: {
      fontSize: isMobile ? '0.95rem' : '1rem',
      color: colors.grayDark,
      lineHeight: '1.7',
      margin: '0 0 32px 0',
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
      fontSize: '20px',
      flexShrink: 0,
    },
    
    planFeatureText: {
      fontSize: isMobile ? '0.9rem' : '1rem',
      color: colors.navyDark,
      lineHeight: '1.5',
    },
    
    planButton: (active: boolean, color: string) => ({
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      backgroundColor: active ? color : 'transparent',
      color: active ? (color === colors.beige ? colors.navyDark : colors.white) : color,
      border: `3px solid ${color}`,
      padding: isMobile ? '16px 24px' : '20px 32px',
      borderRadius: '50px',
      fontSize: isMobile ? '0.95rem' : '1rem',
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      transform: active ? 'translateY(-3px)' : 'translateY(0)',
      boxShadow: active ? '0 15px 30px rgba(0, 0, 0, 0.2)' : 'none',
      width: '100%',
    }),

    consultationSection: {
      backgroundColor: colors.beigeDark,
      borderRadius: '24px',
      padding: isMobile ? '40px 24px' : '60px 40px',
      textAlign: 'center',
      border: `2px solid ${colors.goldBorder}`,
      maxWidth: '1000px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2,
      background: `linear-gradient(135deg, ${colors.beigeDark} 0%, ${colors.beige} 100%)`,
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
    },
    
    consultationTitle: {
      fontSize: isMobile ? '1.75rem' : isTablet ? '2rem' : '2.25rem',
      fontWeight: '700',
      color: colors.navyDark,
      margin: '0 0 24px 0',
      lineHeight: '1.2',
    },
    
    consultationDescription: {
      fontSize: isMobile ? '1.125rem' : isTablet ? '1.25rem' : '1.375rem',
      color: colors.navyDark,
      lineHeight: '1.7',
      margin: '0 auto 40px',
      maxWidth: '800px',
    },
    
    consultationButton: (active: boolean) => ({
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      backgroundColor: active ? colors.gold : colors.navy,
      color: active ? colors.navyDark : colors.white,
      border: 'none',
      padding: isMobile ? '16px 32px' : '20px 48px',
      borderRadius: '50px',
      fontSize: isMobile ? '1rem' : '1.125rem',
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      transform: active ? 'translateY(-3px)' : 'translateY(0)',
      boxShadow: active 
        ? '0 20px 40px rgba(255, 184, 0, 0.4)' 
        : '0 15px 30px rgba(0, 0, 0, 0.3)',
    }),
  };

  return (
    <section style={baseBodyStyles.bodyContainer}>
      <StarPopper side="left" />
      <StarPopper side="right" />
      
      {/* Section 1: The BRAVOS Difference */}
      <div style={baseBodyStyles.differenceSection}>
        <div style={baseBodyStyles.differenceSectionBg}></div>
        <div style={baseBodyStyles.differenceBadge}>
          <span style={baseBodyStyles.diamondIcon}>✦</span>
          <span style={baseBodyStyles.differenceBadgeText}>The BRAVOS Difference</span>
        </div>
        
        <div>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <RotatingStarRing color="#FFB800" size={60} />
          </div>
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

      {/* Logo Carousel between Section 1 and Section 2 */}
      <LogoCarousel backgroundColor={colors.navyDark} />

      {/* Section 2: Features Grid */}
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

      {/* Logo Carousel between Section 2 and Section 3 */}
      <LogoCarousel backgroundColor={colors.navyDark} />

      {/* Section 3: Before & After */}
      <div style={baseBodyStyles.transformationsSection}>
        <div style={baseBodyStyles.transformationsSectionBg}></div>
        <div style={baseBodyStyles.transformationsHeader}>
          <div style={baseBodyStyles.transformationsTitleContainer}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <RotatingStarRing color="#3C3B6E" size={60} />
            </div>
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
      </div>

      {/* Logo Carousel between Section 3 and Section 4 */}
      <LogoCarousel backgroundColor={colors.navyDark} />

      {/* Section 4: Video Testimonials */}
      <div style={baseBodyStyles.videoTestimonialsSection}>
        <div style={baseBodyStyles.videoTestimonialsSectionBg}></div>
        <div style={baseBodyStyles.transformationsHeader}>
          <div style={baseBodyStyles.videoTitleContainer}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <RotatingStarRing color="#FFB800" size={60} />
            </div>
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

      {/* Logo Carousel between Section 4 and Section 5 */}
      <LogoCarousel backgroundColor={colors.navyDark} />

      {/* Section 5: Customer Reviews */}
      <div style={baseBodyStyles.reviewsSection}>
        <div style={baseBodyStyles.reviewsSectionBg}></div>
        <div style={baseBodyStyles.transformationsHeader}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <RotatingStarRing color="#FFB800" size={60} />
          </div>
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

      {/* Logo Carousel between Section 5 and Section 6 */}
      <LogoCarousel backgroundColor={colors.navyDark} />

      {/* Section 6: Roofing Services */}
      <div style={baseBodyStyles.flexibleSolutionsSection}>
        <div style={baseBodyStyles.flexibleSolutionsSectionBg}></div>
        <div style={baseBodyStyles.flexibleSolutionsHeader}>
          <div style={baseBodyStyles.flexibleSolutionsBadge}>
            <span style={baseBodyStyles.diamondIcon}>✦</span>
            <span style={baseBodyStyles.flexibleSolutionsBadgeText}>Roofing Services</span>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <RotatingStarRing color="#FFB800" size={70} />
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
        
        {/* Consultation Card */}
        <div style={baseBodyStyles.consultationSection}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <RotatingStarRing color="#3C3B6E" size={50} />
          </div>
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

      {/* Logo Carousel before FAQ */}
      <LogoCarousel backgroundColor={colors.navyDark} />

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
          background: colors.beigeDark,
          borderRadius: '32px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
          border: `1px solid ${colors.goldBorder}`,
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