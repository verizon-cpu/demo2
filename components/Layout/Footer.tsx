// components/Layout/Footer.tsx
"use client";

import { useState, useEffect } from 'react';

interface FooterProps {
  companyName?: string;
  phone?: string;
  email?: string;
  location?: string;
  license?: string;
}

export default function Footer({
  companyName = "BRAVOS ROOFING",
  phone = "(281) 555-1234",
  email = "info@bravosroofing.com",
  location = "Houston, TX & Surrounding Areas",
  license = "TEXAS Roofer License #TXL-12345"
}: FooterProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNavigation = (path: string) => {
    window.location.href = path;
  };

  const styles = {
    footer: {
      background: '#0A0A0C',
      color: '#FFFFFF',
      borderTop: '4px solid #FFB800',
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: isMobile ? '3rem 1.5rem' : '4rem 2rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
      gap: isMobile ? '2.5rem' : '3rem',
      marginBottom: '3rem',
    },
    // Brand Section
    brand: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '1.25rem',
    },
    logo: {
      fontSize: '28px',
      fontWeight: 800,
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      color: '#FFFFFF',
      letterSpacing: '-0.5px',
      marginBottom: '0.5rem',
    },
    logoAccent: {
      color: '#FFB800',
    },
    brandText: {
      fontSize: '15px',
      fontWeight: 400,
      fontFamily: "'DM Sans', sans-serif",
      color: '#FAFAFA',
      lineHeight: 1.6,
      opacity: 0.9,
    },
    // Section Headers
    sectionTitle: {
      fontSize: '18px',
      fontWeight: 700,
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      color: '#FFFFFF',
      marginBottom: '1.25rem',
      letterSpacing: '-0.3px',
    },
    // Links
    linkList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '0.75rem',
    },
    link: {
      fontSize: '15px',
      fontWeight: 400,
      fontFamily: "'DM Sans', sans-serif",
      color: '#FAFAFA',
      textDecoration: 'none',
      transition: 'color 0.2s ease',
      cursor: 'pointer',
      opacity: 0.9,
      ':hover': {
        color: '#FFB800',
      },
    },
    // Contact Info
    contactItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      marginBottom: '1rem',
    },
    contactIcon: {
      width: '20px',
      height: '20px',
      fill: '#FFB800',
      flexShrink: 0,
    },
    contactText: {
      fontSize: '15px',
      fontWeight: 400,
      fontFamily: "'DM Sans', sans-serif",
      color: '#FAFAFA',
      opacity: 0.9,
    },
    contactLink: {
      fontSize: '15px',
      fontWeight: 400,
      fontFamily: "'DM Sans', sans-serif",
      color: '#FAFAFA',
      textDecoration: 'none',
      transition: 'color 0.2s ease',
      ':hover': {
        color: '#FFB800',
      },
    },
    // Social Links
    socialGrid: {
      display: 'flex',
      gap: '12px',
      marginTop: '1rem',
    },
    socialIcon: {
      width: '44px',
      height: '44px',
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 184, 0, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    },
    // Bottom Bar
    bottomBar: {
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      paddingTop: '2rem',
      marginTop: '2rem',
      display: 'flex',
      flexDirection: isMobile ? 'column' as const : 'row' as const,
      justifyContent: 'space-between',
      alignItems: isMobile ? 'center' : 'center',
      gap: '1rem',
    },
    copyright: {
      fontSize: '14px',
      fontWeight: 400,
      fontFamily: "'DM Sans', sans-serif",
      color: '#FAFAFA',
      opacity: 0.7,
    },
    legalLinks: {
      display: 'flex',
      gap: '1.5rem',
      flexWrap: 'wrap' as const,
      justifyContent: 'center',
    },
    legalLink: {
      fontSize: '14px',
      fontWeight: 400,
      fontFamily: "'DM Sans', sans-serif",
      color: '#FAFAFA',
      textDecoration: 'none',
      opacity: 0.7,
      transition: 'opacity 0.2s ease',
      ':hover': {
        opacity: 1,
        color: '#FFB800',
      },
    },
    badge: {
      background: 'rgba(255, 184, 0, 0.1)',
      border: '1px solid rgba(255, 184, 0, 0.3)',
      padding: '8px 16px',
      fontSize: '13px',
      fontWeight: 600,
      fontFamily: "'DM Sans', sans-serif",
      color: '#FFB800',
      display: 'inline-block',
    },
  };

  const services = [
    { name: "Residential Roofing", url: "/services/residential" },
    { name: "Commercial Roofing", url: "/services/commercial" },
    { name: "Emergency Repairs", url: "/services/emergency" },
    { name: "Roof Inspection", url: "/services/inspection" },
    { name: "Storm Damage", url: "/services/storm-damage" },
    { name: "Maintenance", url: "/services/maintenance" },
  ];

  const company = [
    { name: "About Us", url: "/about" },
    { name: "Gallery", url: "/gallery" },
    { name: "Testimonials", url: "/testimonials" },
    { name: "Careers", url: "/careers" },
    { name: "Blog", url: "/blog" },
  ];

  const legal = [
    { name: "Privacy Policy", url: "/privacy" },
    { name: "Terms of Service", url: "/terms" },
    { name: "Sitemap", url: "/sitemap" },
  ];

  const socials = [
    { name: 'Facebook', icon: 'M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z' },
    { name: 'Instagram', icon: 'M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z' },
    { name: 'LinkedIn', icon: 'M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8ZM6 9H2V21H6V9ZM4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z' },
  ];

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Main Grid */}
        <div style={styles.grid}>
          {/* Brand Column */}
          <div style={styles.brand}>
            <div>
              <span style={styles.logo}>
                <span style={styles.logoAccent}>BRA</span>VOS
              </span>
              <div style={{ marginTop: '8px' }}>
                <span style={styles.badge}>LICENSED & INSURED</span>
              </div>
            </div>
            <p style={styles.brandText}>
              Houston's premier roofing contractor. Delivering exceptional craftsmanship 
              and premium materials on every project. Family-owned and operated since 2005.
            </p>
            <div style={styles.socialGrid}>
              {socials.map((social, index) => (
                <button
                  key={index}
                  style={styles.socialIcon}
                  onClick={() => window.open(`https://${social.name.toLowerCase()}.com`, '_blank')}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#FFB800';
                    e.currentTarget.style.borderColor = '#FFB800';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 184, 0, 0.2)';
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d={social.icon} fill="#FFB800" />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 style={styles.sectionTitle}>Services</h4>
            <ul style={styles.linkList}>
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    style={styles.link}
                    onClick={() => handleNavigation(service.url)}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#FFB800'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#FAFAFA'}
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 style={styles.sectionTitle}>Company</h4>
            <ul style={styles.linkList}>
              {company.map((item, index) => (
                <li key={index}>
                  <a
                    style={styles.link}
                    onClick={() => handleNavigation(item.url)}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#FFB800'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#FAFAFA'}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 style={styles.sectionTitle}>Contact</h4>
            
            <div style={styles.contactItem}>
              <svg style={styles.contactIcon} viewBox="0 0 24 24" fill="none">
                <path d="M20 10.999H22C22 5.869 18.127 2 12.99 2V4C17.052 4 20 6.943 20 10.999Z" fill="#FFB800"/>
                <path d="M13 8C15.103 8 16 8.897 16 11H18C18 7.774 16.225 6 13 6V8ZM16.422 13.443C16.229 13.268 15.978 13.192 15.727 13.192C15.476 13.192 15.225 13.268 15.031 13.443L13.638 14.828C13.174 14.559 12.639 14.346 12.077 14.195C11.516 14.044 10.953 13.971 10.413 13.971C9.873 13.971 9.311 14.044 8.749 14.195C8.188 14.346 7.653 14.559 7.189 14.828L5.796 13.443C5.603 13.268 5.352 13.192 5.101 13.192C4.85 13.192 4.599 13.268 4.405 13.443L2.69 15.145C2.497 15.32 2.4 15.572 2.4 15.824C2.4 16.076 2.497 16.328 2.69 16.503L5.574 19.4C6.985 20.812 8.947 21.6 11.038 21.6C13.13 21.6 15.091 20.812 16.502 19.4L19.386 16.503C19.58 16.328 19.676 16.076 19.676 15.824C19.676 15.572 19.58 15.32 19.386 15.145L17.672 13.443H16.422Z" fill="#FFB800"/>
              </svg>
              <a href={`tel:${phone.replace(/[^\d+]/g, '')}`} style={styles.contactLink}>
                {phone}
              </a>
            </div>

            <div style={styles.contactItem}>
              <svg style={styles.contactIcon} viewBox="0 0 24 24" fill="none">
                <path d="M22 6L12 12L2 6" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V6" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href={`mailto:${email}`} style={styles.contactLink}>
                {email}
              </a>
            </div>

            <div style={styles.contactItem}>
              <svg style={styles.contactIcon} viewBox="0 0 24 24" fill="none">
                <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span style={styles.contactText}>{location}</span>
            </div>

            <div style={styles.contactItem}>
              <svg style={styles.contactIcon} viewBox="0 0 24 24" fill="none">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 6V12L16 14" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span style={styles.contactText}>Mon-Fri: 7AM - 6PM | 24/7 Emergency</span>
            </div>
          </div>
        </div>

        {/* License Badge */}
        <div style={{ marginBottom: '2rem' }}>
          <span style={styles.badge}>{license}</span>
        </div>

        {/* Bottom Bar */}
        <div style={styles.bottomBar}>
          <div style={styles.copyright}>
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </div>
          <div style={styles.legalLinks}>
            {legal.map((item, index) => (
              <a
                key={index}
                style={styles.legalLink}
                onClick={() => handleNavigation(item.url)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#FFB800';
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#FAFAFA';
                  e.currentTarget.style.opacity = '0.7';
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}