"use client";

import { useState, useEffect } from 'react';


// ==================== HEADER COMPONENT (MODIFIED FOR BRAVOS ROOFING) ====================
interface HeaderProps {
  logoName?: string;
  logoTagline?: string;
  phoneNumber?: string;
  services?: Array<{ name: string; url: string }>;
}

function Header({
  logoName = "BRAVOS",
  logoTagline = "PREMIUM ROOFING CONTRACTORS",
  phoneNumber = "(281) 555-1234",
  services = [
    { name: "Residential Roofing", url: "/residential-roofing" },
    { name: "Commercial Roofing", url: "/commercial-roofing" },
    { name: "Emergency Repairs", url: "/emergency-repairs" },
    { name: "Roof Inspection", url: "/roof-inspection" },
    { name: "Storm Damage", url: "/storm-damage" },
    { name: "Roof Replacement", url: "/roof-replacement" },
  ]
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [activeMobileItem, setActiveMobileItem] = useState<string | null>(null);
  const [activeMobileService, setActiveMobileService] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsMobileMenuOpen(false);
        setMobileServicesOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleNavigation = (path: string) => {
    window.location.href = path;
    closeMobileMenu();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setMobileServicesOpen(false);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const toggleMobileServices = () => {
    setMobileServicesOpen(!mobileServicesOpen);
  };

  const handleTouchStart = (setter: (value: any) => void, value: any) => {
    setter(value);
  };

  const handleTouchEnd = (setter: (value: any) => void, resetValue: any = null) => {
    setTimeout(() => setter(resetValue), 150);
  };

  const baseStyles: any = {
    headerContainer: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      background: isScrolled ? '#0A0A0C' : '#0A0A0C',
      boxShadow: isScrolled ? '0 8px 32px rgba(0, 0, 0, 0.3)' : 'none',
      backdropFilter: 'blur(20px)',
      borderTop: '4px solid #FFB800',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    },
    
    innerContainer: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: isMobile ? '1rem' : '20px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '40px',
      width: '100%',
      boxSizing: 'border-box',
    },
    
    brandSection: {
      display: 'flex',
      alignItems: 'center',
    },
    
    logoMark: {
      display: 'flex',
      alignItems: 'center',
      gap: isMobile ? '12px' : '16px',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    
    logoCircle: {
      width: isMobile ? '48px' : '60px',
      height: isMobile ? '48px' : '60px',
      borderRadius: '8px',
      background: 'linear-gradient(135deg, #FFB800 0%, #FFB800 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 20px rgba(255, 184, 0, 0.3)',
    },
    
    logoLetter: {
      fontSize: isMobile ? '28px' : '32px',
      fontWeight: 900,
      color: '#0A0A0C',
      fontFamily: "'Playfair Display', serif",
    },
    
    logoTextContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    
    logoName: {
      fontSize: isMobile ? '24px' : '32px',
      fontWeight: 900,
      color: '#FFFFFF',
      letterSpacing: '2px',
      fontFamily: "'Playfair Display', serif",
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    },
    
    logoTagline: {
      fontSize: isMobile ? '10px' : '12px',
      fontWeight: 900,
      color: '#FFB800',
      letterSpacing: '3px',
      textTransform: 'uppercase',
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
      fontFamily: "'Playfair Display', serif",
    },
    
    navigation: {
      display: isMobile ? 'none' : 'flex',
      alignItems: 'center',
      gap: '40px',
      flex: 1,
      justifyContent: 'center',
    },
    
    navItem: (active: boolean) => ({
      fontSize: '15px',
      fontWeight: 900,
      color: active ? '#FFB800' : '#FAFAFA',
      opacity: active ? 1 : 0.9,
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      position: 'relative',
      padding: '8px 0',
      cursor: 'pointer',
      fontFamily: "'Playfair Display', serif",
    }),
    
    servicesDropdownContainer: {
      position: 'relative',
      display: 'inline-block',
    },
    
    servicesButton: (active: boolean, open: boolean) => ({
      background: open ? 'rgba(255, 184, 0, 0.1)' : 'transparent',
      border: 'none',
      color: active || open ? '#FFB800' : '#FAFAFA',
      opacity: active || open ? 1 : 0.9,
      fontSize: '15px',
      fontWeight: 900,
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer',
      padding: '8px 16px',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      fontFamily: "'Playfair Display', serif",
    }),
    
    servicesDropdown: {
      position: 'absolute',
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#0A0A0C',
      backdropFilter: 'blur(20px)',
      borderRadius: '12px',
      padding: '12px',
      minWidth: '280px',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
      border: '1px solid rgba(255, 184, 0, 0.3)',
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
      color: active ? '#FFB800' : '#FAFAFA',
      opacity: active ? 1 : 0.9,
      backgroundColor: active ? 'rgba(255, 184, 0, 0.1)' : 'transparent',
      cursor: 'pointer',
      fontFamily: "'Playfair Display', serif",
    }),
    
    serviceItemText: {
      fontSize: '14px',
      fontWeight: 900,
      fontFamily: "'Playfair Display', serif",
    },
    
    ctaSection: {
      display: isMobile ? 'none' : 'flex',
      alignItems: 'center',
      gap: '30px',
    },
    
    phoneWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    
    phoneIcon: (active: boolean) => ({
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: active ? 'rgba(255, 184, 0, 0.2)' : 'rgba(255, 184, 0, 0.1)',
      border: '1px solid rgba(255, 184, 0, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
    }),
    
    phoneLabel: {
      fontSize: '11px',
      fontWeight: 900,
      color: '#FFB800',
      letterSpacing: '1px',
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
      fontFamily: "'Playfair Display', serif",
    },
    
    phoneNumber: (active: boolean) => ({
      fontSize: '16px',
      fontWeight: 900,
      color: active ? '#FFB800' : '#FAFAFA',
      opacity: active ? 1 : 0.9,
      textDecoration: 'none',
      transition: 'color 0.3s ease',
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
      cursor: 'pointer',
      fontFamily: "'Playfair Display', serif",
    }),
    
    headerButton: (active: boolean) => ({
      background: 'linear-gradient(135deg, #FFB800 0%, #FFB800 100%)',
      color: '#0A0A0C',
      border: 'none',
      padding: '14px 32px',
      fontSize: '15px',
      fontWeight: 900,
      borderRadius: '30px',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      letterSpacing: '0.5px',
      boxShadow: active ? '0 12px 30px rgba(255, 184, 0, 0.4)' : '0 8px 25px rgba(255, 184, 0, 0.3)',
      transform: active ? 'translateY(-2px)' : 'translateY(0)',
      fontFamily: "'Playfair Display', serif",
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
      height: '3px',
      backgroundColor: '#FAFAFA',
      opacity: 0.9,
      borderRadius: '1px',
      transition: 'all 0.3s ease',
    },

    mobileMenuOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#0A0A0C',
      zIndex: 999,
      display: 'flex',
      flexDirection: 'column',
      backdropFilter: 'blur(20px)',
      transition: 'all 0.3s ease',
      width: '100%',
      borderTop: '4px solid #FFB800',
    },
    
    mobileMenuHeader: {
      padding: '1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      width: '100%',
      boxSizing: 'border-box',
    },
    
    mobileMenuContent: {
      padding: '2rem 1.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      flex: 1,
      overflowY: 'auto',
      width: '100%',
      boxSizing: 'border-box',
    },
    
    mobileNavItem: (active: boolean) => ({
      color: active ? '#FFB800' : '#FAFAFA',
      opacity: active ? 1 : 0.9,
      textDecoration: 'none',
      fontWeight: 900,
      fontSize: '1.25rem',
      padding: '1rem 0',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
      fontFamily: "'Playfair Display', serif",
      width: '100%',
    }),
    
    mobileServicesButton: (active: boolean, open: boolean) => ({
      background: 'transparent',
      border: 'none',
      color: active || open ? '#FFB800' : '#FAFAFA',
      opacity: active || open ? 1 : 0.9,
      fontWeight: 900,
      fontSize: '1.25rem',
      padding: '1rem 0',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      textAlign: 'left',
      fontFamily: "'Playfair Display', serif",
    }),
    
    mobileServicesDropdown: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      padding: '1rem 0 1rem 1rem',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      width: '100%',
    },
    
    mobileServiceItem: (active: boolean) => ({
      color: active ? '#FFB800' : '#FAFAFA',
      opacity: active ? 1 : 0.9,
      textDecoration: 'none',
      fontWeight: 900,
      fontSize: '1rem',
      padding: '0.75rem 1rem',
      borderRadius: '8px',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
      backgroundColor: active ? 'rgba(255, 184, 0, 0.1)' : 'transparent',
      fontFamily: "'Playfair Display', serif",
      width: '100%',
    }),
    
    mobileCTASection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      padding: '1.5rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      width: '100%',
      boxSizing: 'border-box',
    },
    
    mobilePhoneWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      width: '100%',
    },
    
    mobilePhoneIcon: (active: boolean) => ({
      width: '44px',
      height: '44px',
      backgroundColor: active ? 'rgba(255, 184, 0, 0.2)' : 'rgba(255, 184, 0, 0.1)',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid rgba(255, 184, 0, 0.2)',
      transition: 'all 0.3s ease',
    }),
    
    mobilePhoneLabel: {
      fontSize: '0.875rem',
      color: '#FFB800',
      fontWeight: 900,
      lineHeight: '1.2',
      fontFamily: "'Playfair Display', serif",
    },
    
    mobilePhoneNumber: (active: boolean) => ({
      fontSize: '1rem',
      fontWeight: 900,
      color: active ? '#FFB800' : '#FAFAFA',
      opacity: active ? 1 : 0.9,
      textDecoration: 'none',
      transition: 'color 0.3s ease',
      cursor: 'pointer',
      fontFamily: "'Playfair Display', serif",
    }),
    
    mobileHeaderButton: (active: boolean) => ({
      padding: '1rem 1.5rem',
      background: 'linear-gradient(135deg, #FFB800 0%, #FFB800 100%)',
      color: '#0A0A0C',
      border: 'none',
      borderRadius: '30px',
      fontWeight: 900,
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textAlign: 'center',
      transform: active ? 'translateY(-2px)' : 'translateY(0)',
      fontFamily: "'Playfair Display', serif",
      width: '100%',
    }),
    
    closeMenuButton: (active: boolean) => ({
      background: 'none',
      border: 'none',
      color: active ? '#FFB800' : '#FAFAFA',
      opacity: active ? 1 : 0.9,
      fontSize: '1.5rem',
      cursor: 'pointer',
      padding: '0.5rem',
      fontWeight: 900,
      transition: 'color 0.3s ease',
      fontFamily: "'Playfair Display', serif",
    }),
  };

  return (
    <>
      <header style={baseStyles.headerContainer}>
        <div style={baseStyles.innerContainer}>
          <div style={baseStyles.brandSection}>
            <div 
              style={baseStyles.logoMark}
              onClick={() => handleNavigation('/')}
              onMouseEnter={() => setActiveItem('logo')}
              onMouseLeave={() => setActiveItem(null)}
              onTouchStart={() => handleTouchStart(setActiveItem, 'logo')}
              onTouchEnd={() => handleTouchEnd(setActiveItem, null)}
            >
              <div style={baseStyles.logoCircle}>
                <span style={baseStyles.logoLetter}>B</span>
              </div>
              <div style={baseStyles.logoTextContainer}>
                <span style={baseStyles.logoName}>{logoName}</span>
                <span style={baseStyles.logoTagline}>{logoTagline}</span>
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
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
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
                style={baseStyles.navItem(activeItem === 'gallery')}
                onClick={() => handleNavigation('/gallery')}
                onMouseEnter={() => setActiveItem('gallery')}
                onMouseLeave={() => setActiveItem(null)}
                onTouchStart={() => handleTouchStart(setActiveItem, 'gallery')}
                onTouchEnd={() => handleTouchEnd(setActiveItem, null)}
              >
                Project Gallery
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
                    <path d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z" fill="#FAFAFA" fillOpacity="0.9"/>
                    <path d="M13 8C15.103 8 16 8.897 16 11H18C18 7.774 16.225 6 13 6V8ZM16.422 13.443C16.229 13.268 15.978 13.192 15.727 13.192C15.476 13.192 15.225 13.268 15.031 13.443L13.638 14.828C13.174 14.559 12.639 14.346 12.077 14.195C11.516 14.044 10.953 13.971 10.413 13.971C9.873 13.971 9.311 14.044 8.749 14.195C8.188 14.346 7.653 14.559 7.189 14.828L5.796 13.443C5.603 13.268 5.352 13.192 5.101 13.192C4.85 13.192 4.599 13.268 4.405 13.443L2.69 15.145C2.497 15.32 2.4 15.572 2.4 15.824C2.4 16.076 2.497 16.328 2.69 16.503L5.574 19.4C6.985 20.812 8.947 21.6 11.038 21.6C13.13 21.6 15.091 20.812 16.502 19.4L19.386 16.503C19.58 16.328 19.676 16.076 19.676 15.824C19.676 15.572 19.58 15.32 19.386 15.145L17.672 13.443H16.422Z" fill="#FAFAFA" fillOpacity="0.9"/>
                  </svg>
                </div>
                <div>
                  <div style={baseStyles.phoneLabel}>24/7 EMERGENCY SERVICE</div>
                  <a 
                    href={`tel:${phoneNumber.replace(/[^\d+]/g, '')}`} 
                    style={baseStyles.phoneNumber(activeItem === 'phoneNumber')}
                    onMouseEnter={() => setActiveItem('phoneNumber')}
                    onMouseLeave={() => setActiveItem(null)}
                    onTouchStart={() => handleTouchStart(setActiveItem, 'phoneNumber')}
                    onTouchEnd={() => handleTouchEnd(setActiveItem, null)}
                  >
                    {phoneNumber}
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
                Get Free Quote
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
      
      {isMobileMenuOpen && isMobile && (
        <div style={baseStyles.mobileMenuOverlay}>
          <div style={baseStyles.mobileMenuHeader}>
            <div style={baseStyles.brandSection}>
              <div 
                style={baseStyles.logoMark}
                onClick={() => handleNavigation('/')}
                onMouseEnter={() => setActiveMobileItem('logo')}
                onMouseLeave={() => setActiveMobileItem(null)}
                onTouchStart={() => handleTouchStart(setActiveMobileItem, 'logo')}
                onTouchEnd={() => handleTouchEnd(setActiveMobileItem, null)}
              >
                <div style={baseStyles.logoCircle}>
                  <span style={baseStyles.logoLetter}>B</span>
                </div>
                <div style={baseStyles.logoTextContainer}>
                  <span style={baseStyles.logoName}>{logoName}</span>
                  <span style={baseStyles.logoTagline}>{logoTagline}</span>
                </div>
              </div>
            </div>
            <button 
              style={baseStyles.closeMenuButton(activeMobileItem === 'close')} 
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
              onClick={toggleMobileServices}
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
              style={baseStyles.mobileNavItem(activeMobileItem === 'gallery')}
              onClick={() => handleNavigation('/gallery')}
              onMouseEnter={() => setActiveMobileItem('gallery')}
              onMouseLeave={() => setActiveMobileItem(null)}
              onTouchStart={() => handleTouchStart(setActiveMobileItem, 'gallery')}
              onTouchEnd={() => handleTouchEnd(setActiveMobileItem, null)}
            >
              Project Gallery
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
                  <path d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z" fill="#FAFAFA" fillOpacity="0.9"/>
                  <path d="M13 8C15.103 8 16 8.897 16 11H18C18 7.774 16.225 6 13 6V8ZM16.422 13.443C16.229 13.268 15.978 13.192 15.727 13.192C15.476 13.192 15.225 13.268 15.031 13.443L13.638 14.828C13.174 14.559 12.639 14.346 12.077 14.195C11.516 14.044 10.953 13.971 10.413 13.971C9.873 13.971 9.311 14.044 8.749 14.195C8.188 14.346 7.653 14.559 7.189 14.828L5.796 13.443C5.603 13.268 5.352 13.192 5.101 13.192C4.85 13.192 4.599 13.268 4.405 13.443L2.69 15.145C2.497 15.32 2.4 15.572 2.4 15.824C2.4 16.076 2.497 16.328 2.69 16.503L5.574 19.4C6.985 20.812 8.947 21.6 11.038 21.6C13.13 21.6 15.091 20.812 16.502 19.4L19.386 16.503C19.58 16.328 19.676 16.076 19.676 15.824C19.676 15.572 19.58 15.32 19.386 15.145L17.672 13.443H16.422Z" fill="#FAFAFA" fillOpacity="0.9"/>
                </svg>
              </div>
              <div>
                <div style={baseStyles.mobilePhoneLabel}>24/7 EMERGENCY SERVICE</div>
                <a 
                  href={`tel:${phoneNumber.replace(/[^\d+]/g, '')}`} 
                  style={baseStyles.mobilePhoneNumber(activeMobileItem === 'phoneNumber')}
                  onMouseEnter={() => setActiveMobileItem('phoneNumber')}
                  onMouseLeave={() => setActiveMobileItem(null)}
                  onTouchStart={() => handleTouchStart(setActiveMobileItem, 'phoneNumber')}
                  onTouchEnd={() => handleTouchEnd(setActiveMobileItem, null)}
                >
                  {phoneNumber}
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
              Get Free Quote
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// ==================== FOOTER COMPONENT (MODIFIED FOR BRAVOS ROOFING) ====================
interface FooterProps {
  companyName?: string;
  tagline?: string;
  email?: string;
  phone?: string;
  location?: string;
  businessHours?: string;
  emergencyPhone?: string;
  servicesLinks?: Array<{ name: string; url: string }>;
  companyLinks?: Array<{ name: string; url: string }>;
  legalLinks?: Array<{ name: string; url: string }>;
}

function Footer({
  companyName = "BRAVOS",
  tagline = "PREMIUM ROOFING CONTRACTORS",
  email = "info@bravosroofing.com",
  phone = "(281) 555-1234",
  location = "Serving Houston, TX & Surrounding Areas",
  businessHours = "Mon-Sun: 24/7 Emergency Service",
  emergencyPhone = "(281) 555-1234",
  servicesLinks = [
    { name: "Residential Roofing", url: "/residential-roofing" },
    { name: "Commercial Roofing", url: "/commercial-roofing" },
    { name: "Emergency Repairs", url: "/emergency-repairs" },
    { name: "Roof Inspection", url: "/roof-inspection" },
    { name: "Storm Damage", url: "/storm-damage" },
  ],
  companyLinks = [
    { name: "About Us", url: "/about" },
    { name: "Our Team", url: "/our-team" },
    { name: "Careers", url: "/careers" },
    { name: "Testimonials", url: "/testimonials" },
    { name: "Project Gallery", url: "/gallery" },
  ],
  legalLinks = [
    { name: "Privacy Policy", url: "/privacy-policy" },
    { name: "Terms of Service", url: "/terms-of-service" },
    { name: "Sitemap", url: "/sitemap" },
  ]
}: FooterProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [backToTopHover, setBackToTopHover] = useState(false);

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

  const handleNavigation = (path: string) => {
    window.location.href = path;
  };

  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com', icon: 'M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z' },
    { name: 'Instagram', url: 'https://instagram.com', icon: 'M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z' },
  ];

  return (
    <footer style={{
      background: '#0A0A0C',
      color: '#FAFAFA',
      opacity: 0.9,
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: isMobile ? '40px 20px 20px' : isTablet ? '50px 30px 25px' : '60px 40px 30px',
        position: 'relative',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        {/* Main Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: isMobile ? '30px' : '40px',
          marginBottom: isMobile ? '20px' : '30px',
          width: '100%',
        }}>
          {/* Column 1: Brand & Social */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '12px',
              cursor: 'pointer',
            }}
            onClick={() => handleNavigation('/')}>
              <div style={{
                width: isMobile ? '48px' : '60px',
                height: isMobile ? '48px' : '60px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #FFB800 0%, #FFB800 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(255, 184, 0, 0.3)',
              }}>
                <span style={{
                  fontSize: isMobile ? '28px' : '32px',
                  fontWeight: 900,
                  color: '#0A0A0C',
                  fontFamily: "'Playfair Display', serif",
                }}>
                  B
                </span>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
              }}>
                <span style={{
                  fontSize: isMobile ? '24px' : '32px',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  letterSpacing: '2px',
                  fontFamily: "'Playfair Display', serif",
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                }}>
                  {companyName}
                </span>
                <span style={{
                  fontSize: isMobile ? '10px' : '12px',
                  fontWeight: 600,
                  color: '#FFB800',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
                }}>
                  {tagline}
                </span>
              </div>
            </div>
            
            <p style={{
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: 400,
              color: '#FAFAFA',
              opacity: 0.9,
              lineHeight: 1.6,
              marginBottom: '16px',
            }}>
              Houston's premier roofing contractor. Quality craftsmanship, 
              superior materials, and exceptional service for over 20 years.
            </p>
            
            {/* Social Media */}
            <div style={{
              marginTop: '16px',
            }}>
              <h4 style={{
                fontSize: isMobile ? '16px' : '18px',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '12px',
              }}>
                Follow Us
              </h4>
              <div style={{
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap',
              }}>
                {socialLinks.map((social, index) => (
                  <button 
                    key={index}
                    style={{
                      width: isMobile ? '40px' : '44px',
                      height: isMobile ? '40px' : '44px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 184, 0, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    onClick={() => window.open(social.url, '_blank')}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 184, 0, 0.2)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d={social.icon} stroke="#FFB800" strokeWidth="2" 
                        strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Services & Company Links */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? '20px' : '30px',
          }}>
            {/* Services Links */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
              <h4 style={{
                fontSize: isMobile ? '18px' : '20px',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '16px',
                fontFamily: "'Playfair Display', serif",
              }}>
                Our Services
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}>
                {servicesLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      style={{
                        fontSize: isMobile ? '14px' : '16px',
                        fontWeight: 500,
                        color: '#FAFAFA',
                        opacity: 0.9,
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                        display: 'inline-block',
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(link.url);
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#FFB800';
                        e.currentTarget.style.opacity = '1';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#FAFAFA';
                        e.currentTarget.style.opacity = '0.9';
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Company Links */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
              <h4 style={{
                fontSize: isMobile ? '18px' : '20px',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '16px',
                fontFamily: "'Playfair Display', serif",
              }}>
                Company
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}>
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      style={{
                        fontSize: isMobile ? '14px' : '16px',
                        fontWeight: 500,
                        color: '#FAFAFA',
                        opacity: 0.9,
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                        display: 'inline-block',
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(link.url);
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#FFB800';
                        e.currentTarget.style.opacity = '1';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#FAFAFA';
                        e.currentTarget.style.opacity = '0.9';
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            <h4 style={{
              fontSize: isMobile ? '18px' : '20px',
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: '16px',
              fontFamily: "'Playfair Display', serif",
            }}>
              Contact Info
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: isMobile ? '12px' : '16px',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
              }}>
                <div style={{
                  marginTop: '2px',
                  flexShrink: 0,
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92V19C22 19.5304 21.7893 20.0391 21.4142 20.4142C21.0391 20.7893 20.5304 21 20 21H4C3.46957 21 2.96086 20.7893 2.58579 20.4142C2.21071 20.0391 2 19.5304 2 19V16.92C2 16.37 2.28 15.86 2.76 15.58L10.76 10.58C11.44 10.21 12.24 10.21 12.92 10.58L20.92 15.58C21.4 15.86 21.68 16.37 21.68 16.92H22Z" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6L12 12L2 6" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                }}>
                  <div style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#FFB800',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                  }}>
                    Email
                  </div>
                  <a href={`mailto:${email}`} style={{
                    fontSize: isMobile ? '14px' : '16px',
                    fontWeight: 500,
                    color: '#FAFAFA',
                    opacity: 0.9,
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#FFB800';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#FAFAFA';
                    e.currentTarget.style.opacity = '0.9';
                  }}>
                    {email}
                  </a>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
              }}>
                <div style={{
                  marginTop: '2px',
                  flexShrink: 0,
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z" fill="#FFB800"/>
                    <path d="M13 8C15.103 8 16 8.897 16 11H18C18 7.774 16.225 6 13 6V8ZM16.422 13.443C16.229 13.268 15.978 13.192 15.727 13.192C15.476 13.192 15.225 13.268 15.031 13.443L13.638 14.828C13.174 14.559 12.639 14.346 12.077 14.195C11.516 14.044 10.953 13.971 10.413 13.971C9.873 13.971 9.311 14.044 8.749 14.195C8.188 14.346 7.653 14.559 7.189 14.828L5.796 13.443C5.603 13.268 5.352 13.192 5.101 13.192C4.85 13.192 4.599 13.268 4.405 13.443L2.69 15.145C2.497 15.32 2.4 15.572 2.4 15.824C2.4 16.076 2.497 16.328 2.69 16.503L5.574 19.4C6.985 20.812 8.947 21.6 11.038 21.6C13.13 21.6 15.091 20.812 16.502 19.4L19.386 16.503C19.58 16.328 19.676 16.076 19.676 15.824C19.676 15.572 19.58 15.32 19.386 15.145L17.672 13.443H16.422Z" fill="#FFB800"/>
                  </svg>
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                }}>
                  <div style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#FFB800',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                  }}>
                    Phone (24/7)
                  </div>
                  <a href={`tel:${phone.replace(/[^\d+]/g, '')}`} style={{
                    fontSize: isMobile ? '14px' : '16px',
                    fontWeight: 500,
                    color: '#FAFAFA',
                    opacity: 0.9,
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#FFB800';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#FAFAFA';
                    e.currentTarget.style.opacity = '0.9';
                  }}>
                    {phone}
                  </a>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
              }}>
                <div style={{
                  marginTop: '2px',
                  flexShrink: 0,
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                }}>
                  <div style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#FFB800',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                  }}>
                    Service Area
                  </div>
                  <div style={{
                    fontSize: isMobile ? '14px' : '16px',
                    fontWeight: 500,
                    color: '#FAFAFA',
                    opacity: 0.9,
                  }}>
                    {location}
                  </div>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
              }}>
                <div style={{
                  marginTop: '2px',
                  flexShrink: 0,
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V12L16 14" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                }}>
                  <div style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#FFB800',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                  }}>
                    Hours
                  </div>
                  <div style={{
                    fontSize: isMobile ? '14px' : '16px',
                    fontWeight: 500,
                    color: '#FAFAFA',
                    opacity: 0.9,
                  }}>
                    {businessHours}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Emergency Contact */}
            <div style={{
              background: 'rgba(255, 184, 0, 0.1)',
              borderRadius: '12px',
              padding: isMobile ? '16px' : '20px',
              border: '1px solid rgba(255, 184, 0, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginTop: '16px',
            }}>
              <div style={{
                flexShrink: 0,
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 2Z" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 12L15 15M12 12L9 9M12 12V6" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
              }}>
                <div style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#FFB800',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                }}>
                  24/7 Emergency Service
                </div>
                <a href={`tel:${emergencyPhone.replace(/[^\d+]/g, '')}`} style={{
                  fontSize: isMobile ? '16px' : '18px',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  fontFamily: "'Playfair Display', serif",
                }}>
                  {emergencyPhone}
                </a>
                <div style={{
                  fontSize: '11px',
                  fontWeight: 500,
                  color: '#FAFAFA',
                  opacity: 0.7,
                }}>
                  Immediate response, 24/7
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: 'rgba(255, 255, 255, 0.1)',
          margin: isMobile ? '20px 0' : '30px 0',
          width: '100%',
        }}></div>
        
        {/* Bottom Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          textAlign: 'center',
          width: '100%',
        }}>
          <div style={{
            fontSize: isMobile ? '12px' : '14px',
            fontWeight: 500,
            color: '#FAFAFA',
            opacity: 0.7,
          }}>
            © {new Date().getFullYear()} {companyName} Premium Roofing. All rights reserved.
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            {legalLinks.map((link, index) => (
              <span key={index}>
                <a 
                  href={link.url} 
                  style={{
                    fontSize: isMobile ? '12px' : '14px',
                    fontWeight: 500,
                    color: '#FAFAFA',
                    opacity: 0.7,
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(link.url);
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#FFB800';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#FAFAFA';
                    e.currentTarget.style.opacity = '0.7';
                  }}
                >
                  {link.name}
                </a>
                {index < legalLinks.length - 1 && (
                  <span style={{
                    color: 'rgba(255, 255, 255, 0.1)',
                    marginLeft: '8px',
                  }}>•</span>
                )}
              </span>
            ))}
          </div>
        </div>
        
        {/* Back to Top Button */}
        <button 
          style={{
            position: isMobile ? 'fixed' : 'absolute',
            right: isMobile ? '16px' : '20px',
            bottom: isMobile ? '80px' : 'auto',
            top: isMobile ? 'auto' : '60px',
            width: isMobile ? '44px' : '48px',
            height: isMobile ? '44px' : '48px',
            borderRadius: '50%',
            background: backToTopHover ? 'rgba(255, 184, 0, 0.2)' : 'rgba(255, 184, 0, 0.1)',
            border: '2px solid rgba(255, 184, 0, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            color: '#FFB800',
            zIndex: 1000,
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          onMouseEnter={() => setBackToTopHover(true)}
          onMouseLeave={() => setBackToTopHover(false)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M5 15L12 8L19 15" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </footer>
  );
}

// ==================== CONTACT PAGE WITH WHITE FORM BACKGROUND ====================
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  zipCode: string;
  message: string;
}

export default function ContactPage() {
  // ========== STATE FOR CONTACT FORM ==========
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    zipCode: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [hoverStates, setHoverStates] = useState<{[key: string]: boolean}>({});
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

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

  const companyInfo = {
    title: "Why Choose BRAVOS Roofing?",
    points: [
      "✓ 24/7 Emergency Roof Repair",
      "✓ Free Estimates & Inspections",
      "✓ Fully Licensed & Insured",
      "✓ 20+ Years of Experience",
      "✓ Lifetime Workmanship Warranty",
      "✓ Storm Damage Specialists"
    ],
    description: "With over two decades of experience serving Houston homeowners and businesses, BRAVOS Roofing has built a reputation for quality craftsmanship, honest assessments, and superior customer service. We use only premium materials and stand behind every roof we install or repair."
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Formspree endpoint with your form ID
    const formSpreeEndpoint = "https://formspree.io/f/xqeedjny";
    
    try {
      const response = await fetch(formSpreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          zipCode: formData.zipCode,
          message: formData.message,
          subject: `New Roofing Quote Request from ${formData.name}`,
          _subject: `New Roofing Quote Request from ${formData.name}`,
        }),
      });
      
      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          zipCode: '',
          message: ''
        });
        
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setSubmitError('There was an error submitting your form. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMouseEnter = (field: string) => {
    setHoverStates(prev => ({ ...prev, [field]: true }));
  };

  const handleMouseLeave = (field: string) => {
    setHoverStates(prev => ({ ...prev, [field]: false }));
  };

  // ========== CONTACT FORM JSX (WHITE BACKGROUND) ==========
  const renderContactForm = () => (
    <div style={{
      background: '#FFFFFF',
      borderRadius: '12px',
      padding: isMobile ? '1.5rem' : '2rem',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
      width: '100%',
      boxSizing: 'border-box',
    }}>
      <h2 style={{
        fontSize: isMobile ? '1.5rem' : '2rem',
        fontWeight: 900,
        color: '#0A0A0C',
        marginBottom: '0.75rem',
        fontFamily: "'Playfair Display', serif",
      }}>
        Get Your Free Roofing Quote
      </h2>
      <p style={{
        fontSize: isMobile ? '0.9rem' : '1rem',
        color: '#0A0A0C',
        opacity: 0.7,
        marginBottom: '1.5rem',
        fontFamily: "'Playfair Display', serif",
        lineHeight: 1.5,
      }}>
        Fill out the form below and our roofing specialists will contact you within 30 minutes for a free estimate.
      </p>
      
      <form onSubmit={handleSubmit} style={{width: '100%'}}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '1rem',
          marginBottom: '1.5rem',
          width: '100%',
          boxSizing: 'border-box',
        }}>
          <div style={{
            marginBottom: '1rem',
            width: '100%',
            boxSizing: 'border-box',
          }}>
            <label style={{
              display: 'block',
              fontSize: isMobile ? '0.85rem' : '0.9rem',
              fontWeight: 700,
              color: '#0A0A0C',
              marginBottom: '0.5rem',
              fontFamily: "'Playfair Display', serif",
              width: '100%',
            }}>
              Full Name<span style={{color: '#FFB800', marginLeft: '2px'}}>*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              style={{
                width: '100%',
                padding: isMobile ? '0.75rem' : '0.9rem',
                background: '#FFFFFF',
                border: '2px solid rgba(10, 10, 12, 0.1)',
                borderRadius: '6px',
                fontSize: isMobile ? '0.9rem' : '1rem',
                color: '#0A0A0C',
                fontFamily: "'Playfair Display', serif",
                transition: 'all 0.3s ease',
                boxSizing: 'border-box',
                outline: hoverStates['name'] ? 'none' : 'none',
                borderColor: hoverStates['name'] ? '#FFB800' : 'rgba(10, 10, 12, 0.1)',
                boxShadow: hoverStates['name'] ? '0 0 0 3px rgba(255, 184, 0, 0.2)' : 'none',
              }}
              placeholder="John Smith"
              onMouseEnter={() => handleMouseEnter('name')}
              onMouseLeave={() => handleMouseLeave('name')}
            />
          </div>
          
          <div style={{
            marginBottom: '1rem',
            width: '100%',
            boxSizing: 'border-box',
          }}>
            <label style={{
              display: 'block',
              fontSize: isMobile ? '0.85rem' : '0.9rem',
              fontWeight: 700,
              color: '#0A0A0C',
              marginBottom: '0.5rem',
              fontFamily: "'Playfair Display', serif",
              width: '100%',
            }}>
              Email Address<span style={{color: '#FFB800', marginLeft: '2px'}}>*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={{
                width: '100%',
                padding: isMobile ? '0.75rem' : '0.9rem',
                background: '#FFFFFF',
                border: '2px solid rgba(10, 10, 12, 0.1)',
                borderRadius: '6px',
                fontSize: isMobile ? '0.9rem' : '1rem',
                color: '#0A0A0C',
                fontFamily: "'Playfair Display', serif",
                transition: 'all 0.3s ease',
                boxSizing: 'border-box',
                outline: hoverStates['email'] ? 'none' : 'none',
                borderColor: hoverStates['email'] ? '#FFB800' : 'rgba(10, 10, 12, 0.1)',
                boxShadow: hoverStates['email'] ? '0 0 0 3px rgba(255, 184, 0, 0.2)' : 'none',
              }}
              placeholder="john@example.com"
              onMouseEnter={() => handleMouseEnter('email')}
              onMouseLeave={() => handleMouseLeave('email')}
            />
          </div>
          
          <div style={{
            marginBottom: '1rem',
            width: '100%',
            boxSizing: 'border-box',
          }}>
            <label style={{
              display: 'block',
              fontSize: isMobile ? '0.85rem' : '0.9rem',
              fontWeight: 700,
              color: '#0A0A0C',
              marginBottom: '0.5rem',
              fontFamily: "'Playfair Display', serif",
              width: '100%',
            }}>
              Phone Number<span style={{color: '#FFB800', marginLeft: '2px'}}>*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              style={{
                width: '100%',
                padding: isMobile ? '0.75rem' : '0.9rem',
                background: '#FFFFFF',
                border: '2px solid rgba(10, 10, 12, 0.1)',
                borderRadius: '6px',
                fontSize: isMobile ? '0.9rem' : '1rem',
                color: '#0A0A0C',
                fontFamily: "'Playfair Display', serif",
                transition: 'all 0.3s ease',
                boxSizing: 'border-box',
                outline: hoverStates['phone'] ? 'none' : 'none',
                borderColor: hoverStates['phone'] ? '#FFB800' : 'rgba(10, 10, 12, 0.1)',
                boxShadow: hoverStates['phone'] ? '0 0 0 3px rgba(255, 184, 0, 0.2)' : 'none',
              }}
              placeholder="(281) 555-1234"
              onMouseEnter={() => handleMouseEnter('phone')}
              onMouseLeave={() => handleMouseLeave('phone')}
            />
          </div>
          
          <div style={{
            marginBottom: '1rem',
            width: '100%',
            boxSizing: 'border-box',
          }}>
            <label style={{
              display: 'block',
              fontSize: isMobile ? '0.85rem' : '0.9rem',
              fontWeight: 700,
              color: '#0A0A0C',
              marginBottom: '0.5rem',
              fontFamily: "'Playfair Display', serif",
              width: '100%',
            }}>
              Zip Code<span style={{color: '#FFB800', marginLeft: '2px'}}>*</span>
            </label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              required
              pattern="[0-9]{5}"
              maxLength={5}
              style={{
                width: '100%',
                padding: isMobile ? '0.75rem' : '0.9rem',
                background: '#FFFFFF',
                border: '2px solid rgba(10, 10, 12, 0.1)',
                borderRadius: '6px',
                fontSize: isMobile ? '0.9rem' : '1rem',
                color: '#0A0A0C',
                fontFamily: "'Playfair Display', serif",
                transition: 'all 0.3s ease',
                boxSizing: 'border-box',
                outline: hoverStates['zipCode'] ? 'none' : 'none',
                borderColor: hoverStates['zipCode'] ? '#FFB800' : 'rgba(10, 10, 12, 0.1)',
                boxShadow: hoverStates['zipCode'] ? '0 0 0 3px rgba(255, 184, 0, 0.2)' : 'none',
              }}
              placeholder="77001"
              onMouseEnter={() => handleMouseEnter('zipCode')}
              onMouseLeave={() => handleMouseLeave('zipCode')}
            />
          </div>
          
          <div style={{
            gridColumn: isMobile ? 'span 1' : 'span 2',
            marginBottom: '1rem',
            width: '100%',
            boxSizing: 'border-box',
          }}>
            <label style={{
              display: 'block',
              fontSize: isMobile ? '0.85rem' : '0.9rem',
              fontWeight: 700,
              color: '#0A0A0C',
              marginBottom: '0.5rem',
              fontFamily: "'Playfair Display', serif",
              width: '100%',
            }}>
              Message / Project Details
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              style={{
                width: '100%',
                padding: isMobile ? '0.75rem' : '0.9rem',
                background: '#FFFFFF',
                border: '2px solid rgba(10, 10, 12, 0.1)',
                borderRadius: '6px',
                fontSize: isMobile ? '0.9rem' : '1rem',
                color: '#0A0A0C',
                fontFamily: "'Playfair Display', 'serif'",
                transition: 'all 0.3s ease',
                boxSizing: 'border-box',
                resize: 'vertical',
                minHeight: '100px',
                outline: hoverStates['message'] ? 'none' : 'none',
                borderColor: hoverStates['message'] ? '#FFB800' : 'rgba(10, 10, 12, 0.1)',
                boxShadow: hoverStates['message'] ? '0 0 0 3px rgba(255, 184, 0, 0.2)' : 'none',
              }}
              placeholder="Tell us about your roofing project: roof repair, replacement, inspection, storm damage, etc. Include your roof type and approximate square footage if known."
              onMouseEnter={() => handleMouseEnter('message')}
              onMouseLeave={() => handleMouseLeave('message')}
            />
          </div>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            background: isSubmitting ? 'rgba(255, 184, 0, 0.3)' : 'linear-gradient(135deg, #FFB800 0%, #FFB800 100%)',
            color: '#0A0A0C',
            border: 'none',
            padding: isMobile ? '0.875rem 1.5rem' : '1rem 2rem',
            fontSize: isMobile ? '0.95rem' : '1rem',
            fontWeight: 900,
            borderRadius: '30px',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            letterSpacing: '0.5px',
            boxShadow: hoverStates['submit'] ? '0 10px 25px rgba(255, 184, 0, 0.4)' : '0 6px 20px rgba(255, 184, 0, 0.3)',
            transform: hoverStates['submit'] ? 'translateY(-2px)' : 'translateY(0)',
            fontFamily: "'Playfair Display', serif",
            width: '100%',
            marginTop: '1rem',
            boxSizing: 'border-box',
          }}
          onMouseEnter={() => handleMouseEnter('submit')}
          onMouseLeave={() => handleMouseLeave('submit')}
        >
          {isSubmitting ? 'Submitting...' : 'Get Free Roofing Quote'}
        </button>
        
        {submitSuccess && (
          <div style={{
            background: 'rgba(255, 184, 0, 0.1)',
            border: '1px solid rgba(255, 184, 0, 0.3)',
            borderRadius: '6px',
            padding: '1rem',
            marginTop: '1.5rem',
            textAlign: 'center',
            width: '100%',
          }}>
            <p style={{
              color: '#0A0A0C',
              fontSize: isMobile ? '0.85rem' : '0.9rem',
              fontWeight: 700,
              fontFamily: "'Playfair Display', serif",
            }}>
              Thank you! Your quote request has been submitted successfully. 
              Our roofing specialist will contact you within 30 minutes.
            </p>
          </div>
        )}
        
        {submitError && (
          <div style={{
            background: 'rgba(255, 0, 0, 0.1)',
            border: '1px solid rgba(255, 0, 0, 0.3)',
            borderRadius: '6px',
            padding: '1rem',
            marginTop: '1.5rem',
            textAlign: 'center',
            width: '100%',
          }}>
            <p style={{
              color: '#D32F2F',
              fontSize: isMobile ? '0.85rem' : '0.9rem',
              fontWeight: 700,
              fontFamily: "'Playfair Display', serif",
            }}>
              {submitError}
            </p>
          </div>
        )}
        
        <p style={{
          fontSize: isMobile ? '0.8rem' : '0.9rem',
          color: '#0A0A0C',
          opacity: 0.7,
          textAlign: 'center',
          marginTop: '1rem',
          fontFamily: "'Playfair Display', serif",
        }}>
          We respect your privacy. Your information will only be used to contact you about your roofing quote.
        </p>
      </form>
    </div>
  );

  // ========== FAQ SECTION (ONLY 2 QUESTIONS) ==========
  const renderFAQSection = () => (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isMobile ? '2rem 1rem' : '3rem 2rem',
      background: '#0A0A0C',
      width: '100%',
      boxSizing: 'border-box',
    }}>
      <h2 style={{
        fontSize: isMobile ? '1.8rem' : '2.5rem',
        fontWeight: 900,
        color: '#FFFFFF',
        marginBottom: '2rem',
        fontFamily: "'Playfair Display', serif",
        textAlign: 'center',
      }}>
        Frequently Asked Questions
      </h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
        gap: '2rem',
      }}>
        {/* FAQ 1 */}
        <div style={{
          background: 'rgba(255, 184, 0, 0.1)',
          borderRadius: '12px',
          padding: '2rem',
          border: '1px solid rgba(255, 184, 0, 0.3)',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1rem',
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              background: 'rgba(255, 184, 0, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16V12" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8H12.01" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 style={{
              fontSize: isMobile ? '1.1rem' : '1.3rem',
              fontWeight: 900,
              color: '#FFFFFF',
              fontFamily: "'Playfair Display', serif",
              margin: 0,
            }}>
              How long does a roof replacement take?
            </h3>
          </div>
          <p style={{
            fontSize: isMobile ? '0.9rem' : '1rem',
            color: '#FAFAFA',
            opacity: 0.9,
            lineHeight: 1.6,
            marginLeft: '56px',
            fontFamily: "'Playfair Display', serif",
          }}>
            Most residential roof replacements are completed in 1-3 days, depending on the size, complexity, and weather conditions. Our team works efficiently while maintaining the highest quality standards.
          </p>
        </div>

        {/* FAQ 2 */}
        <div style={{
          background: 'rgba(255, 184, 0, 0.1)',
          borderRadius: '12px',
          padding: '2rem',
          border: '1px solid rgba(255, 184, 0, 0.3)',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '1rem',
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              background: 'rgba(255, 184, 0, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 2Z" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12L15 15M12 12L9 9M12 12V6" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 style={{
              fontSize: isMobile ? '1.1rem' : '1.3rem',
              fontWeight: 900,
              color: '#FFFFFF',
              fontFamily: "'Playfair Display', serif",
              margin: 0,
            }}>
              Does insurance cover roof damage?
            </h3>
          </div>
          <p style={{
            fontSize: isMobile ? '0.9rem' : '1rem',
            color: '#FAFAFA',
            opacity: 0.9,
            lineHeight: 1.6,
            marginLeft: '56px',
            fontFamily: "'Playfair Display', serif",
          }}>
            Most homeowners insurance policies cover storm damage, hail, and wind-related roof damage. We work directly with your insurance company, helping you navigate the claims process and ensuring you receive maximum coverage.
          </p>
        </div>
      </div>
    </div>
  );

  const pageStyles: any = {
    pageContainer: {
      minHeight: '100vh',
      background: '#0A0A0C',
      fontFamily: "'Playfair Display', serif",
      width: '100%',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },
    
    heroSection: {
      minHeight: isMobile ? '60vh' : '70vh',
      background: 'linear-gradient(rgba(10, 10, 12, 0.7), rgba(10, 10, 12, 0.7)), url("https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=1920")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '6rem 1rem 3rem' : '8rem 2rem 4rem',
      width: '100%',
      boxSizing: 'border-box',
    },
    
    heroContent: {
      maxWidth: '1200px',
      width: '100%',
      textAlign: 'center',
      boxSizing: 'border-box',
    },
    
    heroTitle: {
      fontSize: isMobile ? '2rem' : isTablet ? '3rem' : '3.5rem',
      fontWeight: 900,
      color: '#FFFFFF',
      marginBottom: '1rem',
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
      fontFamily: "'Playfair Display', serif",
      lineHeight: 1.2,
    },
    
    heroSubtitle: {
      fontSize: isMobile ? '1rem' : isTablet ? '1.2rem' : '1.4rem',
      fontWeight: 700,
      color: '#FFB800',
      marginBottom: '1rem',
      maxWidth: '800px',
      margin: '0 auto 1rem',
      lineHeight: 1.5,
      fontFamily: "'Playfair Display', serif",
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
    },
    
    heroText: {
      fontSize: isMobile ? '0.9rem' : '1.1rem',
      color: '#FAFAFA',
      opacity: 0.9,
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: 1.5,
      fontFamily: "'Playfair Display', serif",
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
    },
    
    mainContent: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: isMobile ? '2rem 1rem' : '3rem 2rem',
      background: '#0A0A0C',
      width: '100%',
      boxSizing: 'border-box',
    },
    
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: isMobile ? '2rem' : '3rem',
      marginBottom: '3rem',
      width: '100%',
      boxSizing: 'border-box',
    },
    
    imageSection: {
      width: '100%',
      height: isMobile ? '250px' : '400px',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
      boxSizing: 'border-box',
    },
    
    roofingImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    },
    
    companyInfoSection: {
      background: 'rgba(255, 184, 0, 0.1)',
      borderRadius: '12px',
      padding: isMobile ? '1.5rem' : '2rem',
      marginTop: isMobile ? '2rem' : '0',
      width: '100%',
      boxSizing: 'border-box',
      border: '1px solid rgba(255, 184, 0, 0.3)',
    },
    
    companyTitle: {
      fontSize: isMobile ? '1.3rem' : '1.8rem',
      fontWeight: 900,
      color: '#FFFFFF',
      marginBottom: '1rem',
      fontFamily: "'Playfair Display', serif",
    },
    
    pointsList: {
      listStyle: 'none',
      padding: 0,
      margin: '0 0 1.5rem 0',
    },
    
    pointItem: {
      fontSize: isMobile ? '0.9rem' : '1rem',
      color: '#FAFAFA',
      opacity: 0.9,
      marginBottom: '0.75rem',
      paddingLeft: '0.5rem',
      fontFamily: "'Playfair Display', serif",
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.5rem',
      width: '100%',
    },
    
    companyDescription: {
      fontSize: isMobile ? '0.9rem' : '1rem',
      color: '#FAFAFA',
      opacity: 0.9,
      lineHeight: 1.6,
      fontFamily: "'Playfair Display', serif",
    },
  };

  return (
    <div style={pageStyles.pageContainer}>
      
      
      <section style={pageStyles.heroSection}>
        <div style={pageStyles.heroContent}>
          <h1 style={pageStyles.heroTitle}>
            BRAVOS Premium Roofing
          </h1>
          <p style={pageStyles.heroSubtitle}>
            Quality • Integrity • Excellence Since 2003
          </p>
          <p style={pageStyles.heroText}>
            Fill out the form below for a free, no-obligation roofing quote. Our specialists will contact you within 30 minutes.
          </p>
        </div>
      </section>
      
      <main style={pageStyles.mainContent}>
        <div style={pageStyles.contentGrid}>
          {/* Left Side - Contact Form (WHITE BACKGROUND) */}
          <div style={{width: '100%'}}>
            {renderContactForm()}
          </div>
          
          {/* Right Side - Image */}
          <div style={{width: '100%'}}>
            <div style={pageStyles.imageSection}>
              <img 
                src="https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=800" 
                alt="Professional roofing installation"
                style={pageStyles.roofingImage}
              />
            </div>
            
            {/* Company Info Section (Moved to right column for desktop) */}
            <div style={{
              ...pageStyles.companyInfoSection,
              marginTop: '2rem',
            }}>
              <h3 style={pageStyles.companyTitle}>{companyInfo.title}</h3>
              
              <ul style={pageStyles.pointsList}>
                {companyInfo.points.map((point, index) => (
                  <li key={index} style={pageStyles.pointItem}>
                    <span style={{color: '#FFB800', fontWeight: 'bold'}}>✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              
              <p style={pageStyles.companyDescription}>
                {companyInfo.description}
              </p>
            </div>
          </div>
        </div>
      </main>
      
      {/* FAQ Section - Only 2 Questions */}
      {renderFAQSection()}
      
      
    </div>
  );
}