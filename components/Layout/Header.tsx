"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeaderProps {
  logoName?: string;
  phoneNumber?: string;
  isTransparent?: boolean;
  logoImage?: string; // Add this prop for PNG logo
}

export default function Header({ 
  logoName = "BRAVOS",
  phoneNumber = "(281) 555-1234",
  isTransparent = false,
  logoImage = "/image/bravos.png" // Default path
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const services = [
    { name: "Residential Roofing", url: "/Residential-Roofing" },
    { name: "Commercial Roofing", url: "/Commercial-Roofing" },
    { name: "Emergency Repairs", url: "/Emergency-Repairs" },
    { name: "Roof Inspection", url: "/Roof-inspection" },
    { name: "Storm Damage", url: "//Storm-damage" },
    { name: "Maintenance", url: "/Maintenance" }
  ];

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

  const getHeaderBackground = () => {
    // On homepage (isTransparent=true) and not scrolled → use dark glass
  if (isTransparent && !isScrolled) {
    return 'rgba(10, 10, 12, 0.78)'; // Deep charcoal glass
  }
  // Scrolled or inner pages → solid charcoal
  return '#0A0A0C';
  };

  const styles = {
    header: {
      position: 'fixed' as const,
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: getHeaderBackground(),
       backdropFilter: isScrolled || !isTransparent ? 'none' : 'blur(12px) saturate(180%)', // Stronger blur
  WebkitBackdropFilter: isScrolled || !isTransparent ? 'none' : 'blur(12px) saturate(180%)',
  backgroundColor: getHeaderBackground(),
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: isMobile ? '0.6rem 0.75rem' : '0.6rem 0.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      boxSizing: 'border-box' as const,
        minHeight: isMobile ? '70px' : '80px', // Fixed height
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      cursor: 'pointer',
      height: isMobile ? '100px': '60px',
       marginTop: '-20px', // ← Pull logo up
  marginBottom: '-20px', // ← Pull logo down
    },
    logoImage: {
      width: '700',
      height: '100%',
      objectFit: 'contain' as const,
    },
    nav: {
      display: isMobile ? 'none' : 'flex',
      alignItems: 'center',
      gap: '32px',
    },
    navItem: (active: boolean) => ({
      fontSize: '15px',
      fontWeight: 600,
      fontFamily: "'DM Sans', sans-serif",
      color: active ? '#FFB800' : '#FFFFFF',
      textDecoration: 'none',
      transition: 'color 0.2s ease',
      cursor: 'pointer',
      padding: '4px 0',
    }),
    servicesButton: (open: boolean) => ({
      background: 'none',
      border: 'none',
      fontSize: '15px',
      fontWeight: 600,
      fontFamily: "'DM Sans', sans-serif",
      color: open ? '#FFB800' : '#FFFFFF',
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      cursor: 'pointer',
      padding: '4px 0',
    }),
    servicesDropdown: {
      position: 'absolute' as const,
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#0A0A0C',
      borderRadius: '0',
      padding: '8px 0',
      minWidth: '240px',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
      border: '1px solid rgba(255, 184, 0, 0.2)',
      marginTop: '8px',
    },
    serviceItem: {
      display: 'block',
      padding: '12px 20px',
      fontSize: '14px',
      fontWeight: 500,
      fontFamily: "'DM Sans', sans-serif",
      color: '#FFFFFF',
      textDecoration: 'none',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
      ':hover': {
        background: 'rgba(255, 184, 0, 0.1)',
        color: '#FFB800',
      },
    },
    cta: {
      display: isMobile ? 'none' : 'flex',
      alignItems: 'center',
      gap: '24px',
    },
    phone: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      textDecoration: 'none',
    },
    phoneNumber: {
      fontSize: '16px',
      fontWeight: 600,
      fontFamily: "'DM Sans', sans-serif",
      color: '#FFFFFF',
      transition: 'color 0.2s ease',
    },
    phoneIcon: {
      width: '20px',
      height: '20px',
      fill: '#FFB800',
    },
    bookButton: {
      background: '#FFB800',
      color: '#0A0A0C',
      border: 'none',
      padding: '12px 28px',
      fontSize: '15px',
      fontWeight: 700,
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      borderRadius: '0',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      letterSpacing: '0.5px',
    },
    mobileMenuButton: {
      display: isMobile ? 'flex' : 'none',
      background: 'none',
      border: 'none',
      flexDirection: 'column' as const,
      gap: '4px',
      cursor: 'pointer',
      padding: '8px',
    },
    menuLine: {
      width: '24px',
      height: '2px',
      backgroundColor: '#FFFFFF',
      transition: 'all 0.3s ease',
    },
    mobileMenu: {
      position: 'fixed' as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: '#0A0A0C',
      zIndex: 999,
      display: 'flex',
      flexDirection: 'column' as const,
      padding: '2rem 1.5rem',
    },
    mobileMenuHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '2rem',
      height: '60px',
    },
    mobileLogo: {
      height: '50px',
      width: 'auto',
    },
    mobileNavItem: {
      fontSize: '20px',
      fontWeight: 700,
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      color: '#FFFFFF',
      textDecoration: 'none',
      padding: '1rem 0',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      cursor: 'pointer',
      display: 'block',
    },
    mobileServicesButton: {
      width: '100%',
      background: 'none',
      border: 'none',
      fontSize: '20px',
      fontWeight: 700,
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      color: '#FFFFFF',
      padding: '1rem 0',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer',
    },
    mobileServicesDropdown: {
      padding: '0.5rem 0 0.5rem 1rem',
    },
    mobileServiceItem: {
      fontSize: '16px',
      fontWeight: 500,
      fontFamily: "'DM Sans', sans-serif",
      color: '#FFFFFF',
      textDecoration: 'none',
      padding: '0.75rem 0',
      display: 'block',
    },
    closeButton: {
      background: 'none',
      border: 'none',
      fontSize: '28px',
      color: '#FFFFFF',
      cursor: 'pointer',
    },
  };

  return (
    <>
      <header style={styles.header}>
        <div style={styles.container}>
          {/* Logo - PNG Image */}
          <div style={styles.logo} onClick={() => handleNavigation('/')}>
            <Image 
  src={logoImage}
  alt={logoName}
  width={450}  // ← YOU control this
  height={140} // ← YOU control this
  style={{
    width: 'auto',
    height: '200px', // Match height above
    objectFit: 'contain',
  }}
  priority
/>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav style={styles.nav}>
              <a 
                style={styles.navItem(activeItem === 'home')}
                onClick={() => handleNavigation('/')}
                onMouseEnter={() => setActiveItem('home')}
                onMouseLeave={() => setActiveItem(null)}
              >
                Home
              </a>

              <div style={{ position: 'relative' }}>
                <button
                  style={styles.servicesButton(servicesDropdownOpen)}
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  onMouseEnter={() => setActiveItem('services')}
                  onMouseLeave={() => setActiveItem(null)}
                >
                  Services
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M6 9L12 15L18 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {servicesDropdownOpen && (
                  <div style={styles.servicesDropdown}>
                    {services.map((service, index) => (
                      <a
                        key={index}
                        style={styles.serviceItem}
                        onClick={() => handleNavigation(service.url)}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 184, 0, 0.1)';
                          e.currentTarget.style.color = '#FFB800';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = '#FFFFFF';
                        }}
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a 
                style={styles.navItem(activeItem === 'about')}
                onClick={() => handleNavigation('/about')}
                onMouseEnter={() => setActiveItem('about')}
                onMouseLeave={() => setActiveItem(null)}
              >
                About
              </a>

              <a 
                style={styles.navItem(activeItem === 'gallery')}
                onClick={() => handleNavigation('/gallery')}
                onMouseEnter={() => setActiveItem('gallery')}
                onMouseLeave={() => setActiveItem(null)}
              >
                Gallery
              </a>

              <a 
                style={styles.navItem(activeItem === 'contact')}
                onClick={() => handleNavigation('/contact')}
                onMouseEnter={() => setActiveItem('contact')}
                onMouseLeave={() => setActiveItem(null)}
              >
                Contact
              </a>
            </nav>
          )}

          {/* Desktop CTA */}
          {!isMobile && (
            <div style={styles.cta}>
              <a href={`tel:${phoneNumber.replace(/[^\d+]/g, '')}`} style={styles.phone}>
                <svg style={styles.phoneIcon} viewBox="0 0 24 24" fill="none">
                  <path d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z" fill="#FFB800"/>
                  <path d="M13 8C15.103 8 16 8.897 16 11H18C18 7.774 16.225 6 13 6V8ZM16.422 13.443C16.229 13.268 15.978 13.192 15.727 13.192C15.476 13.192 15.225 13.268 15.031 13.443L13.638 14.828C13.174 14.559 12.639 14.346 12.077 14.195C11.516 14.044 10.953 13.971 10.413 13.971C9.873 13.971 9.311 14.044 8.749 14.195C8.188 14.346 7.653 14.559 7.189 14.828L5.796 13.443C5.603 13.268 5.352 13.192 5.101 13.192C4.85 13.192 4.599 13.268 4.405 13.443L2.69 15.145C2.497 15.32 2.4 15.572 2.4 15.824C2.4 16.076 2.497 16.328 2.69 16.503L5.574 19.4C6.985 20.812 8.947 21.6 11.038 21.6C13.13 21.6 15.091 20.812 16.502 19.4L19.386 16.503C19.58 16.328 19.676 16.076 19.676 15.824C19.676 15.572 19.58 15.32 19.386 15.145L17.672 13.443H16.422Z" fill="#FFB800"/>
                </svg>
                <span style={styles.phoneNumber}>{phoneNumber}</span>
              </a>
              <button 
                style={styles.bookButton}
                onClick={() => handleNavigation('/contact')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#E6A600';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#FFB800';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                GET A QUOTE
              </button>
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button style={styles.mobileMenuButton} onClick={toggleMobileMenu}>
              <span style={{
                ...styles.menuLine,
                transform: isMobileMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'
              }} />
              <span style={{
                ...styles.menuLine,
                opacity: isMobileMenuOpen ? 0 : 1
              }} />
              <span style={{
                ...styles.menuLine,
                transform: isMobileMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'
              }} />
            </button>
          )}
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && isMobile && (
        <div style={styles.mobileMenu}>
          <div style={styles.mobileMenuHeader}>
            <div style={styles.mobileLogo}>
              <Image 
  src={logoImage}
  alt={logoName}
  width={450}  // ← YOU control this
  height={140} // ← YOU control this
  style={{
    width: 'auto',
    height: '300px', // Match height above
    objectFit: 'contain',
  }}
  priority
/>
            </div>
            <button style={styles.closeButton} onClick={toggleMobileMenu}>
              ✕
            </button>
          </div>

          <nav>
            <a style={styles.mobileNavItem} onClick={() => handleNavigation('/')}>
              Home
            </a>

            <button 
              style={styles.mobileServicesButton}
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              Services
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M6 9L12 15L18 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {mobileServicesOpen && (
              <div style={styles.mobileServicesDropdown}>
                {services.map((service, index) => (
                  <a
                    key={index}
                    style={styles.mobileServiceItem}
                    onClick={() => handleNavigation(service.url)}
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            )}

            <a style={styles.mobileNavItem} onClick={() => handleNavigation('/about')}>
              About
            </a>

            <a style={styles.mobileNavItem} onClick={() => handleNavigation('/gallery')}>
              Gallery
            </a>

            <a style={styles.mobileNavItem} onClick={() => handleNavigation('/contact')}>
              Contact
            </a>
          </nav>

          <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
            <a href={`tel:${phoneNumber.replace(/[^\d+]/g, '')}`} style={{ textDecoration: 'none' }}>
              <button style={{
                ...styles.bookButton,
                width: '100%',
                marginBottom: '1rem',
              }}>
                {phoneNumber}
              </button>
            </a>
            <button 
              style={{
                ...styles.bookButton,
                width: '100%',
                background: 'transparent',
                border: '2px solid #FFB800',
                color: '#FFB800',
              }}
              onClick={() => handleNavigation('/contact')}
            >
              GET A QUOTE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
