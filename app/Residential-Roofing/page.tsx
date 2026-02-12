'use client';

import { useState, useEffect, useRef } from 'react';

// Hero Section Component for BRAVOS Roofing
export default function HeroSection() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
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
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div style={{
      position: 'relative',
      overflow: 'hidden',
      backgroundImage: 'url("https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=2070")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
      width: '100%',
    }}>
      {/* Top Border - Metallic Gold */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: '#FFB800',
        zIndex: 10,
      }} />

      {/* Dark Overlay for Background Image */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.7)',
        zIndex: 1,
      }} />

      {/* Content Container */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '60px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        width: '100%',
      }}>
        
        {/* Main Hero Content - Two Column Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
          width: '100%',
          '@media (max-width: 1024px)': {
            gridTemplateColumns: '1fr',
            gap: '40px',
          }
        }}>
          
          {/* Left Column - Text Content */}
          <div style={{
            color: '#FFFFFF',
          }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'rgba(255, 184, 0, 0.1)',
              padding: '10px 20px',
              borderRadius: '50px',
              border: '1px solid rgba(255, 184, 0, 0.3)',
              marginBottom: '24px',
              transition: 'all 0.3s ease',
            }}>
              <span style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#FFB800',
                letterSpacing: '1px',
              }}>
                ★ FAMILY-OWNED & OPERATED
              </span>
            </div>

            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: 900,
              color: '#FFFFFF',
              marginBottom: '24px',
              lineHeight: 1.1,
              fontFamily: "'Playfair Display', serif",
              '@media (max-width: 768px)': {
                fontSize: '2.5rem',
              }
            }}>
              Protect Your Home with<br />
              <span style={{
                color: '#FFB800',
                position: 'relative',
                display: 'inline-block',
              }}>
                BRAVOS Roofing
                <span style={{
                  position: 'absolute',
                  bottom: '-6px',
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: '#FFB800',
                }} />
              </span>
            </h1>

            <p style={{
              fontSize: '1.25rem',
              fontWeight: 400,
              color: '#FAFAFA',
              opacity: 0.9,
              lineHeight: 1.6,
              marginBottom: '40px',
              fontFamily: "'Playfair Display', serif",
            }}>
              Boston's trusted roofing experts delivering exceptional craftsmanship, 
              premium materials, and unwavering reliability. From emergency repairs 
              to complete roof replacements—we've got you covered.
            </p>

            {/* Trust Badges */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '30px',
              marginBottom: '40px',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(255, 184, 0, 0.1)',
                  border: '1px solid rgba(255, 184, 0, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#FFB800',
                  }}>25+ Years</div>
                  <div style={{
                    fontSize: '12px',
                    color: '#FAFAFA',
                    opacity: 0.7,
                  }}>Experience</div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(255, 184, 0, 0.1)',
                  border: '1px solid rgba(255, 184, 0, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 12C21 13.2 20.5 14.2 19.7 15.1C18.9 15.9 17.8 16.5 16.5 16.8C15.2 17.1 13.8 17.1 12.1 16.9H12C10.3 17.1 8.9 17.1 7.5 16.8C6.2 16.5 5.1 15.9 4.3 15.1C3.5 14.2 3 13.2 3 12C3 9.5 5.1 7.4 7.9 7.1C9.2 6.9 10.6 6.9 12.1 7.1C14.9 7.4 17 9.5 17 12" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 7V12L15 15" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#FFB800',
                  }}>24/7 Emergency</div>
                  <div style={{
                    fontSize: '12px',
                    color: '#FAFAFA',
                    opacity: 0.7,
                  }}>Rapid Response</div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(255, 184, 0, 0.1)',
                  border: '1px solid rgba(255, 184, 0, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 12L11 14L15 10" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: '#FFB800',
                  }}>5,000+</div>
                  <div style={{
                    fontSize: '12px',
                    color: '#FAFAFA',
                    opacity: 0.7,
                  }}>Homes Protected</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            width: '100%',
            maxWidth: '500px',
            margin: '0 auto',
          }}>
            <h2 style={{
              fontSize: '1.75rem',
              fontWeight: 800,
              color: '#1E1E1E',
              marginBottom: '12px',
              fontFamily: "'Playfair Display', serif",
              textAlign: 'center',
            }}>
              Get Your Free Estimate
            </h2>
            <p style={{
              fontSize: '0.95rem',
              color: '#666666',
              marginBottom: '30px',
              textAlign: 'center',
            }}>
              No obligation, no pressure—just honest advice from roofing experts.
            </p>

            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}>
              <div>
                <label htmlFor="fullname" style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#333333',
                  marginBottom: '6px',
                }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  required
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: '1px solid #E0E0E0',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#FFB800';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 184, 0, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#E0E0E0';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label htmlFor="email" style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#333333',
                  marginBottom: '6px',
                }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: '1px solid #E0E0E0',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#FFB800';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 184, 0, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#E0E0E0';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label htmlFor="phone" style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#333333',
                  marginBottom: '6px',
                }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: '1px solid #E0E0E0',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#FFB800';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 184, 0, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#E0E0E0';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label htmlFor="zipcode" style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#333333',
                  marginBottom: '6px',
                }}>
                  ZIP Code *
                </label>
                <input
                  type="text"
                  id="zipcode"
                  name="zipcode"
                  required
                  pattern="[0-9]{5}"
                  maxLength={5}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: '1px solid #E0E0E0',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#FFB800';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 184, 0, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#E0E0E0';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label htmlFor="message" style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#333333',
                  marginBottom: '6px',
                }}>
                  Tell us about your roofing needs
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '12px',
                    border: '1px solid #E0E0E0',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#FFB800';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 184, 0, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#E0E0E0';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  placeholder="Leaks, damage, new installation, etc..."
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                style={{
                  background: '#FFB800',
                  color: '#000000',
                  border: 'none',
                  padding: '16px 24px',
                  fontSize: '1rem',
                  fontWeight: 700,
                  borderRadius: '12px',
                  cursor: formStatus === 'submitting' ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  marginTop: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  opacity: formStatus === 'submitting' ? 0.7 : 1,
                }}
                onMouseEnter={(e) => {
                  if (formStatus !== 'submitting') {
                    e.currentTarget.style.background = '#E5A600';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(255, 184, 0, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (formStatus !== 'submitting') {
                    e.currentTarget.style.background = '#FFB800';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                {formStatus === 'submitting' ? (
                  <>Submitting...</>
                ) : formStatus === 'success' ? (
                  <>✓ Request Sent!</>
                ) : (
                  <>
                    Get Free Estimate
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>

              {formStatus === 'success' && (
                <div style={{
                  background: 'rgba(34, 197, 94, 0.1)',
                  border: '1px solid #22C55E',
                  borderRadius: '12px',
                  padding: '16px',
                  color: '#22C55E',
                  textAlign: 'center',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                }}>
                  Thank you! We'll contact you within 24 hours.
                </div>
              )}

              {formStatus === 'error' && (
                <div style={{
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid #EF4444',
                  borderRadius: '12px',
                  padding: '16px',
                  color: '#EF4444',
                  textAlign: 'center',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                }}>
                  Something went wrong. Please try again or call us directly.
                </div>
              )}

              <p style={{
                fontSize: '0.75rem',
                color: '#999999',
                textAlign: 'center',
                marginTop: '10px',
              }}>
                By submitting, you agree to receive communications from BRAVOS Roofing.
              </p>
            </form>
          </div>
        </div>

        {/* Service Icons */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '40px',
          marginTop: '80px',
          padding: '30px',
          background: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)',
          borderRadius: '50px',
          border: '1px solid rgba(255, 184, 0, 0.2)',
          width: '100%',
          maxWidth: '1100px',
        }}>
          {[
            { icon: '🏠', label: 'Residential Roofing' },
            { icon: '🔧', label: 'Repairs & Maintenance' },
            { icon: '🏢', label: 'Commercial Roofing' },
            { icon: '🌧️', label: 'Leak Detection' },
            { icon: '🔄', label: 'Roof Replacement' },
            { icon: '📋', label: 'Free Inspections' },
          ].map((service, index) => (
            <div key={index} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              <span style={{
                fontSize: '28px',
                background: 'rgba(255, 184, 0, 0.1)',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(255, 184, 0, 0.3)',
              }}>
                {service.icon}
              </span>
              <span style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#FFFFFF',
              }}>
                {service.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: #000000;
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
        
        @media (max-width: 768px) {
          h1 {
            font-size: 2.2rem !important;
          }
          
          .service-icons {
            gap: 20px !important;
            padding: 20px !important;
          }
        }
      `}</style>
    </div>
  );
}