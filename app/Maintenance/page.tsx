'use client';

import { useState, useEffect } from 'react';

// Service Card Component
function ServiceCard({ title, description, image, features }: {
  title: string;
  description: string;
  image: string;
  features: string[];
}) {
  return (
    <div style={{
      background: '#FFFFFF',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      border: '1px solid rgba(255, 184, 0, 0.2)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-8px)';
      e.currentTarget.style.boxShadow = '0 20px 40px rgba(255, 184, 0, 0.15)';
      e.currentTarget.style.borderColor = 'rgba(255, 184, 0, 0.5)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
      e.currentTarget.style.borderColor = 'rgba(255, 184, 0, 0.2)';
    }}>
      <div style={{
        position: 'relative',
        height: '220px',
        overflow: 'hidden',
      }}>
        <img 
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.7) 100%)',
        }} />
      </div>
      
      <div style={{ padding: '24px' }}>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 800,
          color: '#1A1A1A',
          fontFamily: "'Playfair Display', serif",
          marginBottom: '12px',
        }}>
          {title}
        </h3>
        
        <p style={{
          fontSize: '0.95rem',
          color: '#4B5563',
          lineHeight: 1.6,
          marginBottom: '20px',
          fontFamily: "'Playfair Display', serif",
        }}>
          {description}
        </p>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}>
          {features.map((feature, idx) => (
            <div key={idx} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}>
              <span style={{
                color: '#FFB800',
                fontSize: '1.1rem',
              }}>✓</span>
              <span style={{
                fontSize: '0.9rem',
                color: '#374151',
                fontFamily: "'Playfair Display', serif",
              }}>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Before & After Component
function BeforeAfterSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const projects = [
    {
      title: "Complete Roof Replacement",
      location: "Newton, MA",
      before: "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=600",
      after: "https://images.pexels.com/photos/280471/pexels-photo-280471.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Full tear-off and replacement with architectural shingles",
      duration: "3 days",
    },
    {
      title: "Emergency Leak Repair",
      location: "Boston, MA",
      before: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
      after: "https://images.pexels.com/photos/280471/pexels-photo-280471.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Storm damage repair and full leak remediation",
      duration: "1 day",
    },
    {
      title: "New Construction Roofing",
      location: "Cambridge, MA",
      before: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600",
      after: "https://images.pexels.com/photos/280471/pexels-photo-280471.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Premium architectural shingles with ice/water shield",
      duration: "4 days",
    },
  ];

  return (
    <section style={{
      padding: '80px 20px',
      background: 'linear-gradient(180deg, #F8FAFF 0%, #FFFFFF 100%)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '60px',
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255, 184, 0, 0.1)',
            padding: '10px 20px',
            borderRadius: '50px',
            border: '1px solid rgba(255, 184, 0, 0.3)',
            marginBottom: '20px',
          }}>
            <span style={{ fontSize: '20px' }}>🏠</span>
            <span style={{
              fontSize: '14px',
              fontWeight: 700,
              color: '#FFB800',
              letterSpacing: '1px',
            }}>
              OUR WORK SPEAKS FOR ITSELF
            </span>
          </div>
          
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 900,
            color: '#1A1A1A',
            fontFamily: "'Playfair Display', serif",
            marginBottom: '20px',
          }}>
            Before & After{' '}
            <span style={{
              color: '#FFB800',
              position: 'relative',
            }}>
              Transformations
              <span style={{
                position: 'absolute',
                bottom: '-6px',
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #FFB800, #FFD700)',
                borderRadius: '2px',
              }} />
            </span>
          </h2>
        </div>

        {/* Project Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
          marginBottom: '40px',
          flexWrap: 'wrap',
        }}>
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              style={{
                padding: '12px 24px',
                background: activeIndex === index 
                  ? 'linear-gradient(135deg, #FFB800 0%, #FFD700 100%)'
                  : 'transparent',
                border: activeIndex === index
                  ? 'none'
                  : '2px solid rgba(255, 184, 0, 0.3)',
                borderRadius: '30px',
                color: activeIndex === index ? '#FFFFFF' : '#FFB800',
                fontWeight: 700,
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: "'Playfair Display', serif",
              }}
              onMouseEnter={(e) => {
                if (activeIndex !== index) {
                  e.currentTarget.style.background = 'rgba(255, 184, 0, 0.1)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeIndex !== index) {
                  e.currentTarget.style.background = 'transparent';
                }
              }}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* Before & After Display */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '30px',
          marginBottom: '40px',
        }}>
          {/* Before */}
          <div style={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
            height: '350px',
          }}>
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              background: 'rgba(0,0,0,0.8)',
              color: '#FFFFFF',
              padding: '12px 24px',
              borderRadius: '30px',
              fontSize: '14px',
              fontWeight: 700,
              zIndex: 2,
              border: '2px solid #FFB800',
            }}>
              BEFORE
            </div>
            <img 
              src={projects[activeIndex].before}
              alt="Before"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
          
          {/* After */}
          <div style={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 15px 30px rgba(255,184,0,0.2)',
            height: '350px',
          }}>
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              background: 'linear-gradient(135deg, #FFB800 0%, #FFD700 100%)',
              color: '#1A1A1A',
              padding: '12px 24px',
              borderRadius: '30px',
              fontSize: '14px',
              fontWeight: 700,
              zIndex: 2,
            }}>
              AFTER
            </div>
            <img 
              src={projects[activeIndex].after}
              alt="After"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>

        {/* Project Details */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(255,184,0,0.05) 0%, rgba(255,215,0,0.05) 100%)',
          borderRadius: '16px',
          padding: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}>
          <div>
            <h4 style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#1A1A1A',
              marginBottom: '8px',
              fontFamily: "'Playfair Display', serif",
            }}>
              {projects[activeIndex].title}
            </h4>
            <p style={{
              color: '#4B5563',
              fontSize: '0.95rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <span>📍</span> {projects[activeIndex].location}
            </p>
            <p style={{
              color: '#4B5563',
              fontSize: '0.95rem',
              marginTop: '8px',
            }}>
              {projects[activeIndex].description}
            </p>
          </div>
          <div style={{
            background: 'rgba(255,184,0,0.1)',
            padding: '16px 24px',
            borderRadius: '12px',
            border: '1px solid rgba(255,184,0,0.3)',
          }}>
            <span style={{
              color: '#4B5563',
              fontSize: '0.9rem',
              display: 'block',
              marginBottom: '4px',
            }}>Completion Time</span>
            <span style={{
              fontSize: '1.5rem',
              fontWeight: 800,
              color: '#FFB800',
            }}>{projects[activeIndex].duration}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Residential Roofing Services Section
function ResidentialServicesSection() {
  const services = [
    {
      title: "Complete Roof Replacement",
      description: "Full tear-off and replacement with premium architectural shingles. Includes new underlayment, flashing, and ventilation.",
      image: "https://images.pexels.com/photos/280471/pexels-photo-280471.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Premium architectural shingles",
        "Ice & water shield protection",
        "New drip edge & flashing",
        "Ridge vent installation",
        "20-30 year warranty",
        "Professional cleanup"
      ]
    },
    {
      title: "Roof Repair & Leak Fixes",
      description: "Expert repair services for leaks, missing shingles, storm damage, and general wear and tear. Same-day emergency service available.",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Leak detection & repair",
        "Shingle replacement",
        "Flashing repair",
        "Storm damage repair",
        "Emergency tarping",
        "Insurance claim assistance"
      ]
    },
    {
      title: "New Construction Roofing",
      description: "Complete roofing installation for new homes and additions. We work directly with builders and homeowners to ensure perfect installation.",
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Custom roof design",
        "Multiple material options",
        "Proper ventilation systems",
        "Energy-efficient options",
        "Pre-construction consultation",
        "Warranty registration"
      ]
    },
    {
      title: "Gutter Installation & Repair",
      description: "Seamless gutter systems, gutter guards, and downspouts to protect your home's foundation and landscaping.",
      image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Seamless aluminum gutters",
        "Gutter guard protection",
        "Downspout extensions",
        "Leaf guard systems",
        "Repair & maintenance",
        "Free estimates"
      ]
    },
    {
      title: "Skylight Installation",
      description: "Professional skylight installation to bring natural light into your home. Includes flashing, sealing, and interior finishing.",
      image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "Energy-efficient models",
        "Vented & fixed options",
        "Leak-proof installation",
        "Interior trim work",
        "10-year warranty",
        "Solar-powered blinds"
      ]
    },
    {
      title: "Emergency Roof Tarping",
      description: "24/7 emergency response for storm damage, fallen trees, and sudden leaks. We secure your property immediately.",
      image: "https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        "24/7 emergency dispatch",
        "Heavy-duty tarping",
        "Temporary repairs",
        "Insurance coordination",
        "Same-day service",
        "Free inspections"
      ]
    }
  ];

  return (
    <section style={{
      padding: '80px 20px',
      background: '#FFFFFF',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '60px',
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255, 184, 0, 0.1)',
            padding: '10px 20px',
            borderRadius: '50px',
            border: '1px solid rgba(255, 184, 0, 0.3)',
            marginBottom: '20px',
          }}>
            <span style={{ fontSize: '20px' }}>🔨</span>
            <span style={{
              fontSize: '14px',
              fontWeight: 700,
              color: '#FFB800',
              letterSpacing: '1px',
            }}>
              WHAT WE OFFER
            </span>
          </div>
          
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 900,
            color: '#1A1A1A',
            fontFamily: "'Playfair Display', serif",
            marginBottom: '20px',
          }}>
            Residential Roofing{' '}
            <span style={{
              color: '#FFB800',
            }}>
              Services
            </span>
          </h2>
          
          <p style={{
            fontSize: '1.125rem',
            color: '#4B5563',
            maxWidth: '800px',
            margin: '0 auto',
            fontFamily: "'Playfair Display', serif",
          }}>
            Comprehensive roofing solutions for your home. Every service includes our quality guarantee, 
            premium materials, and expert craftsmanship.
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px',
        }}>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Service Guarantee */}
        <div style={{
          marginTop: '60px',
          background: 'linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%)',
          borderRadius: '20px',
          padding: '40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'rgba(255,184,0,0.1)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid rgba(255,184,0,0.3)',
            }}>
              <span style={{ fontSize: '28px' }}>🏆</span>
            </div>
            <div>
              <h4 style={{
                color: '#FFB800',
                fontSize: '1.1rem',
                fontWeight: 700,
                marginBottom: '4px',
              }}>10-Year Warranty</h4>
              <p style={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: '0.9rem',
              }}>On all workmanship</p>
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'rgba(255,184,0,0.1)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid rgba(255,184,0,0.3)',
            }}>
              <span style={{ fontSize: '28px' }}>⚡</span>
            </div>
            <div>
              <h4 style={{
                color: '#FFB800',
                fontSize: '1.1rem',
                fontWeight: 700,
                marginBottom: '4px',
              }}>24/7 Emergency</h4>
              <p style={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: '0.9rem',
              }}>Same-day response</p>
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'rgba(255,184,0,0.1)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid rgba(255,184,0,0.3)',
            }}>
              <span style={{ fontSize: '28px' }}>💰</span>
            </div>
            <div>
              <h4 style={{
                color: '#FFB800',
                fontSize: '1.1rem',
                fontWeight: 700,
                marginBottom: '4px',
              }}>Free Estimates</h4>
              <p style={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: '0.9rem',
              }}>No obligation quotes</p>
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              background: 'rgba(255,184,0,0.1)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid rgba(255,184,0,0.3)',
            }}>
              <span style={{ fontSize: '28px' }}>🛡️</span>
            </div>
            <div>
              <h4 style={{
                color: '#FFB800',
                fontSize: '1.1rem',
                fontWeight: 700,
                marginBottom: '4px',
              }}>Fully Insured</h4>
              <p style={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: '0.9rem',
              }}>$2M liability coverage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I know if I need a roof repair or full replacement?",
      answer: "The typical residential roof lasts 20-30 years depending on materials. Signs you need repair: isolated leaks, missing shingles, minor damage. Signs you need replacement: widespread shingle curling/buckling, multiple leaks, roof age over 25 years, daylight through roof boards, granules in gutters. We offer free inspections to help you make the right decision."
    },
    {
      question: "How long does a roof replacement take?",
      answer: "For an average 2,500 sq ft home, a complete roof replacement typically takes 2-4 days depending on weather, roof complexity, and material type. Tear-off: 1 day, Underlayment/Flashing: 1 day, Shingle installation: 1-2 days, Cleanup: half day. We always provide a detailed timeline in your estimate."
    },
    {
      question: "Do you work with insurance claims?",
      answer: "Yes! We have dedicated insurance claim specialists who work directly with your insurance company. We help document damage, provide detailed estimates, meet with adjusters, and ensure you receive maximum coverage for your claim. We never charge for insurance consultation."
    },
    {
      question: "What roofing materials do you offer?",
      answer: "We offer: Architectural asphalt shingles (most popular, 30-year warranty), Luxury dimensional shingles (premium look, 50-year warranty), Metal roofing (standing seam, steel, aluminum), Slate and synthetic slate, Cedar shakes, Flat roofing systems (TPO, EPDM, modified bitumen). We help you choose based on budget, style, and durability needs."
    },
    {
      question: "Do I need to be home during the roof replacement?",
      answer: "You don't need to be present the entire time, but we recommend being home for the initial walk-through and final inspection. We'll protect your property with tarps and magnets, clean magnetically every evening, and provide daily progress updates via text/email."
    },
    {
      question: "What is your warranty coverage?",
      answer: "We provide comprehensive warranties: 10-year workmanship warranty on all labor, manufacturer warranties on materials (25-50 years), lifetime warranty on premium systems, 5-year warranty on repairs. All warranties are fully transferable if you sell your home."
    },
    {
      question: "How do you handle unexpected issues during replacement?",
      answer: "We always do a thorough inspection before starting, but occasionally find rotten decking or other issues. We'll immediately stop, show you the problem with photos, provide a clear estimate for the additional work, and only proceed with your approval. No surprises on your final bill."
    },
    {
      question: "What happens to my landscaping during roof work?",
      answer: "We take extensive precautions: protect shrubs and plants with plywood covers, place plywood walkways on lawns, use magnets to collect all nails daily, run full property magnetic sweeps after completion, and include professional cleanup in every estimate. Any damage caused is repaired immediately."
    },
    {
      question: "Can you match my existing roof for a small repair?",
      answer: "We maintain relationships with manufacturers to source discontinued colors and styles whenever possible. Even with slight color variations (roofs fade over time), we can often match closely. If exact matching isn't possible, we'll discuss replacement options for that section or the whole roof."
    },
    {
      question: "What payment options do you offer?",
      answer: "We accept: All major credit cards (Visa, MC, Amex, Discover), Checks, Bank transfers, Cash. We offer 0% financing for qualified customers through our partners, deposit options starting at 25%, and final payment due upon completion and your satisfaction."
    },
    {
      question: "Do you offer emergency services?",
      answer: "Yes, 24/7/365. Our emergency line (617-555-ROOF) connects you directly to our dispatch team. For active leaks or storm damage, we provide immediate tarping services within 2 hours, emergency repairs within 24 hours, and work directly with your insurance company."
    }
  ];

  return (
    <section style={{
      padding: '80px 20px',
      background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)',
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '60px',
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255, 184, 0, 0.1)',
            padding: '10px 20px',
            borderRadius: '50px',
            border: '1px solid rgba(255, 184, 0, 0.3)',
            marginBottom: '20px',
          }}>
            <span style={{ fontSize: '20px' }}>❓</span>
            <span style={{
              fontSize: '14px',
              fontWeight: 700,
              color: '#FFB800',
              letterSpacing: '1px',
            }}>
              COMMON QUESTIONS
            </span>
          </div>
          
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 900,
            color: '#1A1A1A',
            fontFamily: "'Playfair Display', serif",
            marginBottom: '20px',
          }}>
            Frequently Asked{' '}
            <span style={{
              color: '#FFB800',
              position: 'relative',
            }}>
              Questions
              <span style={{
                position: 'absolute',
                bottom: '-6px',
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #FFB800, #FFD700)',
                borderRadius: '2px',
              }} />
            </span>
          </h2>
          
          <p style={{
            fontSize: '1.125rem',
            color: '#4B5563',
            maxWidth: '700px',
            margin: '0 auto',
            fontFamily: "'Playfair Display', serif",
          }}>
            Everything you need to know about our roofing services. Don't see your question? 
            Call us at (617) 555-ROOF for immediate answers.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid rgba(255,184,0,0.2)',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  background: openIndex === index ? 'rgba(255,184,0,0.05)' : '#FFFFFF',
                  border: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.3s ease',
                }}
              >
                <span style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#1A1A1A',
                  fontFamily: "'Playfair Display', serif",
                  flex: 1,
                }}>
                  {faq.question}
                </span>
                <span style={{
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFB800',
                  fontSize: '1.5rem',
                  transition: 'transform 0.3s ease',
                  transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0)',
                }}>
                  +
                </span>
              </button>
              
              {openIndex === index && (
                <div style={{
                  padding: '0 24px 24px 24px',
                  color: '#4B5563',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  fontFamily: "'Playfair Display', serif",
                  borderTop: '1px solid rgba(255,184,0,0.1)',
                  marginTop: '0',
                  paddingTop: '20px',
                }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div style={{
          marginTop: '60px',
          textAlign: 'center',
          padding: '40px',
          background: 'linear-gradient(135deg, rgba(255,184,0,0.05) 0%, rgba(255,215,0,0.05) 100%)',
          borderRadius: '20px',
          border: '1px solid rgba(255,184,0,0.2)',
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#1A1A1A',
            marginBottom: '16px',
            fontFamily: "'Playfair Display', serif",
          }}>
            Still Have Questions?
          </h3>
          <p style={{
            color: '#4B5563',
            marginBottom: '24px',
            fontSize: '1.1rem',
          }}>
            Our roofing experts are here to help. Call us or schedule a free consultation.
          </p>
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <button
              onClick={() => window.location.href = 'tel:+1617555ROOF'}
              style={{
                padding: '14px 32px',
                background: 'linear-gradient(135deg, #FFB800 0%, #FFD700 100%)',
                color: '#1A1A1A',
                border: 'none',
                borderRadius: '30px',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: "'Playfair Display', serif",
                boxShadow: '0 8px 20px rgba(255,184,0,0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 25px rgba(255,184,0,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(255,184,0,0.3)';
              }}
            >
              📞 Call (617) 555-ROOF
            </button>
            
            <button
              onClick={() => {
                const formSection = document.getElementById('quote-form');
                if (formSection) {
                  formSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              style={{
                padding: '14px 32px',
                background: 'transparent',
                color: '#FFB800',
                border: '2px solid #FFB800',
                borderRadius: '30px',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: "'Playfair Display', serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,184,0,0.1)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              📋 Schedule Inspection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Hero Section with Form
function HeroSection() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    zipCode: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    try {
      const response = await fetch('https://formspree.io/f/xqeedjny', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Roofing Quote Request - ${formData.zipCode}`,
          _replyto: formData.email
        }),
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
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <section id="quote-form" style={{
      position: 'relative',
      minHeight: '100vh',
      width: '100%',
      backgroundImage: 'url("https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=2070")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      isolation: 'isolate',
    }}>
      {/* Top Border */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: '#FFB800',
        boxShadow: '0 0 20px rgba(255, 184, 0, 0.5)',
        zIndex: 10,
      }} />

      {/* Dark Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.75)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
          width: '100%',
        }}>
          {/* Left Column - Text */}
          <div>
            {/* Logo */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '32px',
            }}>
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #FFB800 0%, #FFD700 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(255, 184, 0, 0.3)',
              }}>
                <span style={{
                  fontSize: '38px',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  fontFamily: "'Playfair Display', serif",
                }}>
                  B
                </span>
              </div>
              <div>
                <span style={{
                  fontSize: '48px',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  letterSpacing: '2px',
                  fontFamily: "'Playfair Display', serif",
                  lineHeight: 1,
                  display: 'block',
                }}>
                  BRAVOS
                </span>
                <span style={{
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#FFB800',
                  letterSpacing: '4px',
                  textTransform: 'uppercase',
                  fontFamily: "'Playfair Display', serif",
                }}>
                  ROOFING & CONSTRUCTION
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1 style={{
              fontSize: '3.2rem',
              fontWeight: 900,
              color: '#FFFFFF',
              lineHeight: 1.1,
              marginBottom: '24px',
              fontFamily: "'Playfair Display', serif",
            }}>
              Professional{' '}
              <span style={{
                color: '#FFB800',
                position: 'relative',
                display: 'inline-block',
              }}>
                Residential Roofing
                <span style={{
                  position: 'absolute',
                  bottom: '-8px',
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #FFB800, #FFD700)',
                  borderRadius: '2px',
                }} />
              </span>
            </h1>

            {/* Description */}
            <p style={{
              fontSize: '1.2rem',
              color: 'rgba(250, 250, 250, 0.95)',
              lineHeight: 1.7,
              marginBottom: '40px',
              fontFamily: "'Playfair Display', serif",
            }}>
              Boston's most trusted roofing contractor. We protect what matters most with 
              premium materials, expert installation, and unwavering quality. Free inspections, 
              lifetime workmanship warranty, and financing available.
            </p>

            {/* Trust Badges */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '15px',
            }}>
              {[
                '✓ Free Inspections',
                '✓ Lifetime Warranty',
                '✓ 24/7 Emergency',
                '✓ Licensed & Insured',
                '✓ A+ BBB Rating',
                '✓ 0% Financing'
              ].map((badge, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '8px 16px',
                    background: 'rgba(255, 184, 0, 0.1)',
                    border: '1px solid rgba(255, 184, 0, 0.3)',
                    borderRadius: '30px',
                    color: '#FFB800',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                  }}
                >
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            padding: '40px',
            boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
            border: '1px solid rgba(255, 184, 0, 0.3)',
          }}>
            <div style={{
              marginBottom: '32px',
            }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: 800,
                color: '#1A1A1A',
                fontFamily: "'Playfair Display', serif",
                marginBottom: '8px',
              }}>
                Get Your Free Roof Inspection
              </h2>
              <p style={{
                fontSize: '1rem',
                color: '#4B5563',
              }}>
                No obligation • Same-day availability • Insurance help
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name *"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  borderRadius: '12px',
                  border: '2px solid #E5E7EB',
                  fontSize: '1rem',
                  fontFamily: "'Playfair Display', serif",
                  transition: 'all 0.3s ease',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#FFB800';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255,184,0,0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  borderRadius: '12px',
                  border: '2px solid #E5E7EB',
                  fontSize: '1rem',
                  fontFamily: "'Playfair Display', serif",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#FFB800';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255,184,0,0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  borderRadius: '12px',
                  border: '2px solid #E5E7EB',
                  fontSize: '1rem',
                  fontFamily: "'Playfair Display', serif",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#FFB800';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255,184,0,0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />

              <input
                type="text"
                name="zipCode"
                placeholder="Zip Code *"
                value={formData.zipCode}
                onChange={handleInputChange}
                required
                pattern="[0-9]{5}"
                maxLength={5}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  borderRadius: '12px',
                  border: '2px solid #E5E7EB',
                  fontSize: '1rem',
                  fontFamily: "'Playfair Display', serif",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#FFB800';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255,184,0,0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />

              <textarea
                name="message"
                placeholder="Tell us about your roofing needs (type of damage, age of roof, etc.)"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  borderRadius: '12px',
                  border: '2px solid #E5E7EB',
                  fontSize: '1rem',
                  fontFamily: "'Playfair Display', serif",
                  resize: 'vertical',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#FFB800';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255,184,0,0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                style={{
                  padding: '16px 24px',
                  background: formStatus === 'sending' 
                    ? 'rgba(255,184,0,0.5)' 
                    : 'linear-gradient(135deg, #FFB800 0%, #FFD700 100%)',
                  color: '#1A1A1A',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  cursor: formStatus === 'sending' ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  marginTop: '8px',
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {formStatus === 'sending' ? 'SENDING...' : 'GET FREE QUOTE →'}
              </button>

              {formStatus === 'success' && (
                <div style={{
                  padding: '16px',
                  background: 'rgba(16,185,129,0.1)',
                  border: '1px solid #10B981',
                  borderRadius: '12px',
                  color: '#065F46',
                  textAlign: 'center',
                }}>
                  ✓ Thank you! A roofing specialist will contact you within 30 minutes.
                </div>
              )}

              {formStatus === 'error' && (
                <div style={{
                  padding: '16px',
                  background: 'rgba(239,68,68,0.1)',
                  border: '1px solid #EF4444',
                  borderRadius: '12px',
                  color: '#991B1B',
                  textAlign: 'center',
                }}>
                  Something went wrong. Please call us directly at (617) 555-ROOF.
                </div>
              )}

              <p style={{
                fontSize: '0.75rem',
                color: '#9CA3AF',
                textAlign: 'center',
                marginTop: '8px',
              }}>
                By submitting, you agree to receive SMS/text messages. Reply STOP to opt-out.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Page Component
export default function RoofingPage() {
  return (
    <div>
      {/* Hero with Form */}
      <HeroSection />

      {/* Residential Services - CLEAR breakdown */}
      <ResidentialServicesSection />

      {/* Before & After Gallery */}
      <BeforeAfterSection />

      {/* Comprehensive FAQ */}
      <FAQSection />

      {/* Global Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html, body {
          overflow-x: hidden;
          width: 100%;
          font-family: 'Playfair Display', serif;
          scroll-behavior: smooth;
        }
        
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
        
        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem !important;
          }
          h2 {
            font-size: 2rem !important;
          }
        }
        
        @media (max-width: 480px) {
          h1 {
            font-size: 2rem !important;
          }
          .form-container {
            padding: 30px 20px !important;
          }
        }
      `}</style>
    </div>
  );
}