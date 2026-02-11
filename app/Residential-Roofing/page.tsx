'use client';

import { useState, useEffect, useRef } from 'react';
import { Header, Footer } from '@/components/Layout';

// Header and Footer are imported from separate files - no need to redefine them here
// import Header from './Header'; // Uncomment when you have the header file
// import Footer from './Footer'; // Uncomment when you have the footer file

// Before & After Section Component - Roofing Transformations
function BeforeAfterSection() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const roofingTransformations = [
    {
      before: "https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=600",
      after: "https://images.pexels.com/photos/159358/construction-site-build-architecture-159358.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Complete Roof Replacement",
      description: "From weathered and leaking to durable and beautiful - 5,200 sqft residential roof"
    },
    {
      before: "https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg?auto=compress&cs=tinysrgb&w=600",
      after: "https://images.pexels.com/photos/162539/architecture-building-facade-house-162539.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Storm Damage Restoration",
      description: "Emergency repair after severe weather - complete restoration in 3 days"
    }
  ];

  const handleImageError = (url: string) => {
    console.warn(`Image failed to load: ${url}`);
    setImageErrors(prev => ({ ...prev, [url]: true }));
  };

  const fallbackBefore = "https://placehold.co/600x400/0A0A0C/FFB800?text=Before+Roofing";
  const fallbackAfter = "https://placehold.co/600x400/FFB800/0A0A0C?text=After+Roofing";

  return (
    <section style={{
      padding: '80px 20px',
      background: '#0A0A0C',
      position: 'relative' as const,
      overflow: 'hidden',
      borderTop: '4px solid #FFB800',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative' as const,
        zIndex: 2,
      }}>
        {/* Section Header */}
        <div style={{
          textAlign: 'center' as const,
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
            transition: 'all 0.3s ease',
            cursor: 'pointer',
          }}>
            <span style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#FFB800',
              letterSpacing: '1px',
            }}>
              PROVEN RESULTS
            </span>
          </div>
          
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 900,
            color: '#FFFFFF',
            lineHeight: 1.2,
            fontFamily: "'Playfair Display', serif",
            marginBottom: '20px',
            position: 'relative' as const,
            display: 'inline-block',
          }}>
            <span style={{
              color: '#FFB800',
              position: 'relative' as const,
            }}>
              Roofing Transformations
              <span style={{
                position: 'absolute',
                bottom: '-10px',
                left: '0',
                width: '100%',
                height: '3px',
                background: 'linear-gradient(90deg, #FFB800, #FFD700, #FFB800)',
                borderRadius: '2px',
              }} />
            </span>
          </h2>
          
          <p style={{
            fontSize: '1.25rem',
            fontWeight: 400,
            color: '#FAFAFA',
            opacity: 0.9,
            lineHeight: 1.6,
            maxWidth: '800px',
            margin: '30px auto',
            fontFamily: "'Playfair Display', serif",
          }}>
            "Quality craftsmanship that stands the test of time — protecting your home with excellence"
          </p>
        </div>

        {/* Roofing Transformations */}
        {roofingTransformations.map((project, index) => (
          <div key={index} style={{
            position: 'relative',
            maxWidth: '1200px',
            margin: index === 0 ? '0 auto 60px' : '0 auto',
          }}>
            {/* Title */}
            <div style={{
              textAlign: 'center',
              marginBottom: '40px',
            }}>
              <h3 style={{
                fontSize: '1.75rem',
                fontWeight: 800,
                color: '#FFFFFF',
                fontFamily: "'Playfair Display', serif",
                marginBottom: '12px',
              }}>
                {project.title}
              </h3>
              <p style={{
                fontSize: '1.125rem',
                fontWeight: 500,
                color: '#FAFAFA',
                opacity: 0.9,
                fontFamily: "'Playfair Display', serif",
              }}>
                {project.description}
              </p>
            </div>

            {/* Before & After Images Side by Side */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '30px',
              marginBottom: index === 0 ? '40px' : '0',
            }}>
              {/* Before Image */}
              <div style={{
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
                height: '400px',
                backgroundColor: '#0A0A0C',
                border: '1px solid rgba(255, 184, 0, 0.2)',
              }}>
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  background: '#0A0A0C',
                  color: '#FFB800',
                  padding: '10px 20px',
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontWeight: 700,
                  fontFamily: "'Playfair Display', serif",
                  zIndex: 2,
                  letterSpacing: '1px',
                  border: '1px solid #FFB800',
                }}>
                  BEFORE
                </div>
                {!imageErrors[project.before] ? (
                  <img 
                    src={project.before}
                    alt="Roof before installation"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                    onError={() => handleImageError(project.before)}
                    loading="lazy"
                  />
                ) : (
                  <img 
                    src={fallbackBefore}
                    alt="Roof before - placeholder"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                )}
              </div>
              
              {/* After Image */}
              <div style={{
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
                height: '400px',
                backgroundColor: '#0A0A0C',
                border: '1px solid rgba(255, 184, 0, 0.2)',
              }}>
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  background: '#FFB800',
                  color: '#0A0A0C',
                  padding: '10px 20px',
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontWeight: 700,
                  fontFamily: "'Playfair Display', serif",
                  zIndex: 2,
                  letterSpacing: '1px',
                }}>
                  AFTER
                </div>
                {!imageErrors[project.after] ? (
                  <img 
                    src={project.after}
                    alt="Roof after installation"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                    onError={() => handleImageError(project.after)}
                    loading="lazy"
                  />
                ) : (
                  <img 
                    src={fallbackAfter}
                    alt="Roof after - placeholder"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        ))}

        {/* View More Button */}
        <div style={{
          textAlign: 'center',
          marginTop: '60px',
        }}>
          <button 
            onClick={() => window.location.href = '/gallery'}
            style={{
              background: 'transparent',
              color: '#FFFFFF',
              border: '2px solid #FFB800',
              padding: '16px 32px',
              fontSize: '16px',
              fontWeight: 700,
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
              fontFamily: "'Playfair Display', serif",
              letterSpacing: '0.5px',
              width: '100%',
              maxWidth: '400px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#FFB800';
              e.currentTarget.style.color = '#0A0A0C';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(255, 184, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
            }}
          >
            View More Roofing Projects
          </button>
        </div>
      </div>
    </section>
  );
}

// Why Choose BRAVOS Section Component
function WhyChooseBravosSection() {
  const [yearsExperience, setYearsExperience] = useState(0);
  const [roofsCompleted, setRoofsCompleted] = useState(0);
  const [satisfactionRate, setSatisfactionRate] = useState(0);
  
  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const incrementYears = 25 / steps;
      const incrementRoofs = 3500 / steps;
      const incrementSatisfaction = 99.7 / steps;
      
      let currentYears = 0;
      let currentRoofs = 0;
      let currentSatisfaction = 0;
      let step = 0;
      
      const counterInterval = setInterval(() => {
        if (step >= steps) {
          clearInterval(counterInterval);
          setYearsExperience(25);
          setRoofsCompleted(3500);
          setSatisfactionRate(99.7);
          return;
        }
        
        currentYears += incrementYears;
        currentRoofs += incrementRoofs;
        currentSatisfaction += incrementSatisfaction;
        
        setYearsExperience(Math.floor(currentYears));
        setRoofsCompleted(Math.floor(currentRoofs));
        setSatisfactionRate(parseFloat(currentSatisfaction.toFixed(1)));
        
        step++;
      }, duration / steps);
    };
    
    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section style={{
      padding: '80px 20px',
      background: '#0A0A0C',
      position: 'relative' as const,
      borderTop: '1px solid rgba(255, 184, 0, 0.2)',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        {/* Section Header */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto 60px',
          textAlign: 'center' as const,
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
            <span style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#FFB800',
              letterSpacing: '1px',
            }}>
              THE BRAVOS DIFFERENCE
            </span>
          </div>
          
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            color: '#FFFFFF',
            lineHeight: 1.2,
            fontFamily: "'Playfair Display', serif",
            margin: '0 0 20px 0',
            maxWidth: '900px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            Why Choose BRAVOS for Your{' '}
            <span style={{ color: '#FFB800' }}>Residential Roofing in Boston?</span>
          </h2>
          
          <p style={{
            fontSize: '1.125rem',
            fontWeight: 400,
            color: '#FAFAFA',
            opacity: 0.9,
            lineHeight: 1.6,
            maxWidth: '800px',
            margin: '0 auto 30px',
          }}>
            With over two decades of experience, BRAVOS has become Boston's most trusted name in residential roofing. 
            Our commitment to quality materials, expert craftsmanship, and customer satisfaction sets us apart.
          </p>
          
          {/* Animated Stats Counter */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
            marginTop: '30px',
            maxWidth: '800px',
            margin: '30px auto',
          }}>
            <div style={{ textAlign: 'center' as const }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                color: '#FFB800',
                fontFamily: "'Montserrat', sans-serif",
                marginBottom: '8px',
              }}>
                {yearsExperience}+
              </div>
              <div style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#FAFAFA',
                opacity: 0.9,
                letterSpacing: '0.5px',
              }}>
                Years of Excellence
              </div>
            </div>
            
            <div style={{ textAlign: 'center' as const }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                color: '#FFB800',
                fontFamily: "'Montserrat', sans-serif",
                marginBottom: '8px',
              }}>
                {roofsCompleted.toLocaleString()}+
              </div>
              <div style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#FAFAFA',
                opacity: 0.9,
                letterSpacing: '0.5px',
              }}>
                Roofs Completed
              </div>
            </div>
            
            <div style={{ textAlign: 'center' as const }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                color: '#FFB800',
                fontFamily: "'Montserrat', sans-serif",
                marginBottom: '8px',
              }}>
                {satisfactionRate}%
              </div>
              <div style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#FAFAFA',
                opacity: 0.9,
                letterSpacing: '0.5px',
              }}>
                Satisfaction Rate
              </div>
            </div>
          </div>
        </div>
        
        {/* Service Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          margin: '0 auto',
        }}>
          {/* Card 1: Premium Materials */}
          <div style={{
            background: '#0A0A0C',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
            transition: 'all 0.3s ease',
            border: '1px solid rgba(255, 184, 0, 0.2)',
            paddingBottom: '30px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.5)';
            e.currentTarget.style.borderColor = '#FFB800';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.4)';
            e.currentTarget.style.borderColor = 'rgba(255, 184, 0, 0.2)';
          }}>
            <div style={{
              position: 'relative' as const,
              height: '250px',
              overflow: 'hidden',
            }}>
              <img 
                src="https://images.pexels.com/photos/129600/pexels-photo-129600.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Premium roofing materials"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover' as const,
                  objectPosition: 'center',
                }}
              />
            </div>
            
            <div style={{ padding: '25px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '20px',
              }}>
                <span style={{
                  fontSize: '14px',
                  fontWeight: 800,
                  color: '#FFB800',
                  background: 'rgba(255, 184, 0, 0.1)',
                  width: '36px',
                  height: '36px',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  01
                </span>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  fontFamily: "'Playfair Display', serif",
                  margin: 0,
                }}>
                  Premium Materials Only
                </h3>
              </div>
              
              <p style={{
                fontSize: '1rem',
                fontWeight: 400,
                color: '#FAFAFA',
                opacity: 0.9,
                lineHeight: 1.6,
                marginBottom: '20px',
              }}>
                We source only the highest-grade roofing materials from GAF, CertainTeed, and Owens Corning. 
                Our 50-year architectural shingles and premium metal roofing options come with industry-leading warranties.
              </p>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column' as const,
                gap: '12px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    background: 'rgba(255, 184, 0, 0.1)',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFB800',
                    fontSize: '12px',
                  }}>✓</div>
                  <span style={{ fontSize: '14px', fontWeight: 500, color: '#FAFAFA', opacity: 0.9 }}>
                    50-Year Architectural Shingles
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    background: 'rgba(255, 184, 0, 0.1)',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFB800',
                    fontSize: '12px',
                  }}>✓</div>
                  <span style={{ fontSize: '14px', fontWeight: 500, color: '#FAFAFA', opacity: 0.9 }}>
                    Premium Metal Roofing Systems
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    background: 'rgba(255, 184, 0, 0.1)',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFB800',
                    fontSize: '12px',
                  }}>✓</div>
                  <span style={{ fontSize: '14px', fontWeight: 500, color: '#FAFAFA', opacity: 0.9 }}>
                    Manufacturer-Certified Materials
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Card 2: Master Craftsmen */}
          <div style={{
            background: '#0A0A0C',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
            transition: 'all 0.3s ease',
            border: '1px solid rgba(255, 184, 0, 0.2)',
            paddingBottom: '30px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.5)';
            e.currentTarget.style.borderColor = '#FFB800';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.4)';
            e.currentTarget.style.borderColor = 'rgba(255, 184, 0, 0.2)';
          }}>
            <div style={{
              position: 'relative' as const,
              height: '250px',
              overflow: 'hidden',
            }}>
              <img 
                src="https://images.pexels.com/photos/261770/pexels-photo-261770.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Professional roofing team"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover' as const,
                  objectPosition: 'center',
                }}
              />
            </div>
            
            <div style={{ padding: '25px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '20px',
              }}>
                <span style={{
                  fontSize: '14px',
                  fontWeight: 800,
                  color: '#FFB800',
                  background: 'rgba(255, 184, 0, 0.1)',
                  width: '36px',
                  height: '36px',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  02
                </span>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  fontFamily: "'Playfair Display', serif",
                  margin: 0,
                }}>
                  Master Craftsmen
                </h3>
              </div>
              
              <p style={{
                fontSize: '1rem',
                fontWeight: 400,
                color: '#FAFAFA',
                opacity: 0.9,
                lineHeight: 1.6,
                marginBottom: '20px',
              }}>
                Our GAF Master Elite® certified roofers average 15+ years of experience. 
                Each team undergoes continuous training in the latest installation techniques and safety protocols.
              </p>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column' as const,
                gap: '12px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    background: 'rgba(255, 184, 0, 0.1)',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFB800',
                    fontSize: '12px',
                  }}>✓</div>
                  <span style={{ fontSize: '14px', fontWeight: 500, color: '#FAFAFA', opacity: 0.9 }}>
                    GAF Master Elite® Certified
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    background: 'rgba(255, 184, 0, 0.1)',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFB800',
                    fontSize: '12px',
                  }}>✓</div>
                  <span style={{ fontSize: '14px', fontWeight: 500, color: '#FAFAFA', opacity: 0.9 }}>
                    Fully Licensed & Insured
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    background: 'rgba(255, 184, 0, 0.1)',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFB800',
                    fontSize: '12px',
                  }}>✓</div>
                  <span style={{ fontSize: '14px', fontWeight: 500, color: '#FAFAFA', opacity: 0.9 }}>
                    OSHA Safety Certified
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Card 3: Lifetime Warranty */}
          <div style={{
            background: '#0A0A0C',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
            transition: 'all 0.3s ease',
            border: '1px solid rgba(255, 184, 0, 0.2)',
            paddingBottom: '30px',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.5)';
            e.currentTarget.style.borderColor = '#FFB800';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.4)';
            e.currentTarget.style.borderColor = 'rgba(255, 184, 0, 0.2)';
          }}>
            <div style={{
              position: 'relative' as const,
              height: '250px',
              overflow: 'hidden',
            }}>
              <img 
                src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Roof warranty"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover' as const,
                  objectPosition: 'center',
                }}
              />
            </div>
            
            <div style={{ padding: '25px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '20px',
              }}>
                <span style={{
                  fontSize: '14px',
                  fontWeight: 800,
                  color: '#FFB800',
                  background: 'rgba(255, 184, 0, 0.1)',
                  width: '36px',
                  height: '36px',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  03
                </span>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  fontFamily: "'Playfair Display', serif",
                  margin: 0,
                }}>
                  Lifetime Warranty
                </h3>
              </div>
              
              <p style={{
                fontSize: '1rem',
                fontWeight: 400,
                color: '#FAFAFA',
                opacity: 0.9,
                lineHeight: 1.6,
                marginBottom: '20px',
              }}>
                Every BRAVOS installation comes with comprehensive warranties — both manufacturer and 
                workmanship. Your investment is protected for decades to come.
              </p>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column' as const,
                gap: '12px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    background: 'rgba(255, 184, 0, 0.1)',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFB800',
                    fontSize: '12px',
                  }}>✓</div>
                  <span style={{ fontSize: '14px', fontWeight: 500, color: '#FAFAFA', opacity: 0.9 }}>
                    50-Year Manufacturer Warranty
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    background: 'rgba(255, 184, 0, 0.1)',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFB800',
                    fontSize: '12px',
                  }}>✓</div>
                  <span style={{ fontSize: '14px', fontWeight: 500, color: '#FAFAFA', opacity: 0.9 }}>
                    25-Year Workmanship Guarantee
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    background: 'rgba(255, 184, 0, 0.1)',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFB800',
                    fontSize: '12px',
                  }}>✓</div>
                  <span style={{ fontSize: '14px', fontWeight: 500, color: '#FAFAFA', opacity: 0.9 }}>
                    Transferable to New Homeowners
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Residential Roofing Services Section
function ResidentialRoofingServices() {
  const services = [
    {
      id: 1,
      title: "Roof Installation & Replacement",
      description: "Complete tear-off and replacement with premium architectural shingles, metal roofing, or slate. We ensure proper ventilation and waterproofing for maximum longevity.",
      image: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      title: "Storm Damage Repair",
      description: "24/7 emergency response for hail, wind, and falling debris damage. We work with all insurance companies to restore your roof quickly and efficiently.",
      image: "https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      title: "Leak Detection & Repair",
      description: "Advanced moisture detection technology to pinpoint and repair leaks at their source. We prevent interior water damage and mold growth.",
      image: "https://images.pexels.com/photos/276514/pexels-photo-276514.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 4,
      title: "Gutter Installation & Repair",
      description: "Seamless aluminum gutter systems, gutter guards, and downspouts. Proper drainage protects your roof's edge and foundation.",
      image: "https://images.pexels.com/photos/162539/architecture-building-facade-house-162539.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 5,
      title: "Skylight Installation",
      description: "Energy-efficient skylights and solar tubes that bring natural light while maintaining your roof's integrity and weather protection.",
      image: "https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 6,
      title: "Roof Maintenance & Inspection",
      description: "Annual maintenance plans including thorough inspections, minor repairs, and preventive treatments to extend your roof's lifespan.",
      image: "https://images.pexels.com/photos/257775/pexels-photo-257775.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section style={{
      padding: '80px 20px',
      background: '#0A0A0C',
      position: 'relative' as const,
      borderTop: '1px solid rgba(255, 184, 0, 0.2)',
      borderBottom: '1px solid rgba(255, 184, 0, 0.2)',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        {/* Section Header */}
        <div style={{
          textAlign: 'center' as const,
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
            <span style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#FFB800',
              letterSpacing: '1px',
            }}>
              OUR EXPERTISE
            </span>
          </div>
          
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 900,
            color: '#FFFFFF',
            lineHeight: 1.2,
            fontFamily: "'Playfair Display', serif",
            marginBottom: '20px',
          }}>
            Comprehensive{' '}
            <span style={{ color: '#FFB800' }}>Residential Roofing</span>
          </h2>
          
          <p style={{
            fontSize: '1.125rem',
            fontWeight: 400,
            color: '#FAFAFA',
            opacity: 0.9,
            lineHeight: 1.6,
            maxWidth: '800px',
            margin: '0 auto 30px',
          }}>
            From complete replacements to emergency repairs, our certified roofers deliver 
            exceptional craftsmanship on every project. Here's what we offer:
          </p>
        </div>
        
        {/* Service Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginBottom: '40px',
        }}>
          {services.map((service) => (
            <div key={service.id} style={{
              background: '#0A0A0C',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(255, 184, 0, 0.2)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.6)';
              e.currentTarget.style.borderColor = '#FFB800';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.4)';
              e.currentTarget.style.borderColor = 'rgba(255, 184, 0, 0.2)';
            }}>
              <div style={{
                position: 'relative' as const,
                height: '200px',
                overflow: 'hidden',
              }}>
                <img 
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover' as const,
                    objectPosition: 'center',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, rgba(10, 10, 12, 0.2) 0%, transparent 50%)',
                }} />
              </div>
              
              <div style={{ padding: '25px' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  fontFamily: "'Playfair Display', serif",
                  marginBottom: '12px',
                }}>
                  {service.title}
                </h3>
                
                <p style={{
                  fontSize: '1rem',
                  fontWeight: 400,
                  color: '#FAFAFA',
                  opacity: 0.9,
                  lineHeight: 1.6,
                  marginBottom: '0',
                }}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Form Component with Formspree
function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    zipCode: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/xqeedjny', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          zipCode: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section style={{
      padding: '80px 20px',
      background: '#0A0A0C',
      position: 'relative' as const,
      borderTop: '4px solid #FFB800',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center',
      }}>
        {/* Left Content */}
        <div>
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
            <span style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#FFB800',
              letterSpacing: '1px',
            }}>
              GET STARTED TODAY
            </span>
          </div>
          
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 900,
            color: '#FFFFFF',
            lineHeight: 1.2,
            fontFamily: "'Playfair Display', serif",
            marginBottom: '20px',
          }}>
            Request Your{' '}
            <span style={{ color: '#FFB800' }}>Free Estimate</span>
          </h2>
          
          <p style={{
            fontSize: '1.125rem',
            fontWeight: 400,
            color: '#FAFAFA',
            opacity: 0.9,
            lineHeight: 1.6,
            marginBottom: '30px',
          }}>
            Tell us about your roofing project. Our team will provide a detailed, 
            no-obligation quote within 24 hours.
          </p>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column' as const,
            gap: '20px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'rgba(255, 184, 0, 0.1)',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFB800',
                fontSize: '18px',
                fontWeight: 600,
              }}>
                1
              </div>
              <span style={{ fontSize: '16px', color: '#FFFFFF' }}>
                Free in-home consultation
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'rgba(255, 184, 0, 0.1)',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFB800',
                fontSize: '18px',
                fontWeight: 600,
              }}>
                2
              </div>
              <span style={{ fontSize: '16px', color: '#FFFFFF' }}>
                Detailed written proposal
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'rgba(255, 184, 0, 0.1)',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFB800',
                fontSize: '18px',
                fontWeight: 600,
              }}>
                3
              </div>
              <span style={{ fontSize: '16px', color: '#FFFFFF' }}>
                Flexible financing available
              </span>
            </div>
          </div>
        </div>
        
        {/* Form - White Background */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '12px',
          padding: '40px',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
        }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: 600,
                color: '#0A0A0C',
                marginBottom: '8px',
              }}>
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  fontSize: '16px',
                  border: '1px solid #E0E0E0',
                  borderRadius: '4px',
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
            
            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: 600,
                color: '#0A0A0C',
                marginBottom: '8px',
              }}>
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  fontSize: '16px',
                  border: '1px solid #E0E0E0',
                  borderRadius: '4px',
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
            
            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: 600,
                color: '#0A0A0C',
                marginBottom: '8px',
              }}>
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  fontSize: '16px',
                  border: '1px solid #E0E0E0',
                  borderRadius: '4px',
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
            
            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: 600,
                color: '#0A0A0C',
                marginBottom: '8px',
              }}>
                ZIP Code *
              </label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                required
                maxLength={5}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  fontSize: '16px',
                  border: '1px solid #E0E0E0',
                  borderRadius: '4px',
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
            
            <div style={{ marginBottom: '32px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: 600,
                color: '#0A0A0C',
                marginBottom: '8px',
              }}>
                Tell Us About Your Project
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  fontSize: '16px',
                  border: '1px solid #E0E0E0',
                  borderRadius: '4px',
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
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: '100%',
                padding: '16px',
                background: '#FFB800',
                color: '#0A0A0C',
                border: 'none',
                borderRadius: '4px',
                fontSize: '16px',
                fontWeight: 700,
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 5px 15px rgba(255, 184, 0, 0.3)',
                opacity: isSubmitting ? 0.7 : 1,
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.background = '#0A0A0C';
                  e.currentTarget.style.color = '#FFB800';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(255, 184, 0, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.background = '#FFB800';
                  e.currentTarget.style.color = '#0A0A0C';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(255, 184, 0, 0.3)';
                }
              }}
            >
              {isSubmitting ? 'SENDING...' : 'GET FREE ESTIMATE'}
            </button>
            
            {submitStatus === 'success' && (
              <div style={{
                marginTop: '20px',
                padding: '12px',
                background: 'rgba(0, 200, 0, 0.1)',
                border: '1px solid #00A000',
                borderRadius: '4px',
                color: '#0A0A0C',
                textAlign: 'center' as const,
              }}>
                Thank you! We'll contact you within 24 hours.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div style={{
                marginTop: '20px',
                padding: '12px',
                background: 'rgba(255, 0, 0, 0.1)',
                border: '1px solid #FF0000',
                borderRadius: '4px',
                color: '#0A0A0C',
                textAlign: 'center' as const,
              }}>
                Something went wrong. Please try again or call us directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

// FAQ Section Component
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does a roof replacement take?",
      answer: "Most residential roof replacements are completed in 1-3 days, depending on the size and complexity of your roof. We provide a detailed timeline during your free estimate and work efficiently to minimize disruption to your home."
    },
    {
      question: "Does homeowners insurance cover roof replacement?",
      answer: "Most policies cover roof replacement if damage is caused by sudden events like storms, hail, or fallen trees. Our team works directly with your insurance adjuster to ensure you receive maximum coverage. We also assist with the claims process at no additional cost."
    },
    {
      question: "What are signs I need a new roof?",
      answer: "Key indicators include: shingles that are curling, cracking, or missing; granules in gutters; daylight visible through roof boards; water stains on ceilings; sagging areas; and a roof age of 20+ years. We offer free inspections to assess your roof's condition."
    },
    {
      question: "Do you offer financing?",
      answer: "Yes! We partner with several reputable financing companies to offer flexible payment options, including 0% APR promotional periods for qualified applicants. Our team can help you find a payment plan that fits your budget."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Absolutely. BRAVOS is fully licensed in Massachusetts (#12345), bonded, and carries $2 million in general liability insurance plus workers' compensation. We're also GAF Master Elite® certified, a designation held by only 2% of roofing contractors."
    },
    {
      question: "What warranty do you provide?",
      answer: "We offer comprehensive protection: 50-year manufacturer warranties on materials, a 25-year workmanship warranty from BRAVOS, and a lifetime warranty on labor for as long as you own your home. All warranties are fully transferable."
    },
    {
      question: "Do you handle insurance claims?",
      answer: "Yes, we specialize in insurance restoration. Our claims specialists will inspect your property, document all damage, meet with your adjuster, and ensure you receive fair compensation for your roof replacement or repair."
    },
    {
      question: "What roofing materials do you recommend?",
      answer: "We primarily install GAF Timberline HDZ architectural shingles, CertainTeed Landmark, and premium standing seam metal roofing. Each material offers different benefits in terms of durability, aesthetics, and cost. We'll help you choose the best option for your home."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{
      padding: '80px 20px',
      background: '#0A0A0C',
      position: 'relative' as const,
      borderTop: '1px solid rgba(255, 184, 0, 0.2)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {/* Section Header */}
        <div style={{
          textAlign: 'center' as const,
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
            <span style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#FFB800',
              letterSpacing: '1px',
            }}>
              HAVE QUESTIONS?
            </span>
          </div>
          
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 900,
            color: '#FFFFFF',
            lineHeight: 1.2,
            fontFamily: "'Playfair Display', serif",
            margin: '0 0 20px 0',
          }}>
            Frequently Asked <span style={{ color: '#FFB800' }}>Questions</span>
          </h2>
          
          <p style={{
            fontSize: '1.125rem',
            fontWeight: 400,
            color: '#FAFAFA',
            opacity: 0.9,
            lineHeight: 1.6,
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            Get answers to common questions about our roofing services, warranties, and process.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          {faqs.map((faq, index) => (
            <div 
              key={index}
              style={{
                background: '#0A0A0C',
                borderRadius: '8px',
                marginBottom: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                border: openIndex === index 
                  ? '1px solid #FFB800' 
                  : '1px solid rgba(255, 184, 0, 0.2)',
                transition: 'all 0.3s ease',
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                style={{
                  width: '100%',
                  background: openIndex === index ? 'rgba(255, 184, 0, 0.05)' : 'transparent',
                  border: 'none',
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  textAlign: 'left' as const,
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  flex: 1,
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    background: '#FFB800',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 700,
                    color: '#0A0A0C',
                    flexShrink: 0,
                  }}>
                    Q{index + 1}
                  </div>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    fontFamily: "'Playfair Display', serif",
                    margin: 0,
                    lineHeight: 1.4,
                  }}>
                    {faq.question}
                  </h3>
                </div>
                
                <div style={{
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.3s ease',
                  transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                  flexShrink: 0,
                  marginLeft: '10px',
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 5V19M5 12H19" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
              
              <div style={{
                maxHeight: openIndex === index ? '500px' : '0',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              }}>
                <div style={{
                  padding: openIndex === index ? '0 20px 20px 68px' : '0 20px',
                  opacity: openIndex === index ? 1 : 0,
                  transition: 'opacity 0.3s ease 0.2s',
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                  }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      background: 'rgba(255, 184, 0, 0.1)',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '10px',
                      fontWeight: 700,
                      color: '#FFB800',
                      flexShrink: 0,
                      marginTop: '3px',
                    }}>
                      A
                    </div>
                    <p style={{
                      fontSize: '1rem',
                      fontWeight: 400,
                      color: '#FAFAFA',
                      opacity: 0.9,
                      lineHeight: 1.6,
                      margin: 0,
                    }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HeroSection() {
  return (
    <div style={{
      position: 'relative',
      overflow: 'hidden',
      background: '#0A0A0C',
    }}>
      {/* Hero Section */}
      <div style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0A0A0C',
        paddingTop: '80px',
        width: '100%',
        overflowX: 'hidden',
        borderTop: '4px solid #FFB800',
      }}>
        {/* Full-Width Background Image with Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          width: '100%',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("https://images.pexels.com/photos/159358/construction-site-build-architecture-159358.jpeg?auto=compress&cs=tinysrgb&w=2070")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            minWidth: '100%',
            opacity: 0.6,
          }} />
          
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, #0A0A0C 0%, rgba(10, 10, 12, 0.8) 40%, rgba(10, 10, 12, 0.6) 100%)',
            width: '100%',
          }} />
        </div>

        {/* Hero Content */}
        <div style={{
          position: 'relative',
          zIndex: 3,
          maxWidth: '1400px',
          padding: '20px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column' as const,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(255, 184, 0, 0.1)',
            padding: '10px 20px',
            borderRadius: '50px',
            border: '1px solid rgba(255, 184, 0, 0.3)',
            marginBottom: '30px',
          }}>
            <span style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#FFB800',
              letterSpacing: '1px',
            }}>
              MASSACHUSETTS' TRUSTED ROOFING EXPERTS
            </span>
          </div>
          
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 900,
            color: '#FFFFFF',
            marginBottom: '24px',
            lineHeight: 1.1,
            letterSpacing: '-0.5px',
            textShadow: '0 4px 25px rgba(0, 0, 0, 0.5)',
            fontFamily: "'Playfair Display', serif",
            maxWidth: '1100px',
            width: '100%',
          }}>
            Premium Residential Roofing in{' '}
            <span style={{
              color: '#FFB800',
              position: 'relative',
              display: 'inline-block',
            }}>
              Boston
              <span style={{
                position: 'absolute',
                bottom: '-6px',
                left: 0,
                right: 0,
                height: '4px',
                background: '#FFB800',
              }} />
            </span>
          </h1>

          <p style={{
            fontSize: '1.35rem',
            fontWeight: 500,
            color: '#FAFAFA',
            opacity: 0.95,
            marginBottom: '40px',
            lineHeight: 1.6,
            maxWidth: '900px',
            fontFamily: "'Playfair Display', serif",
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.4)',
            width: '100%',
          }}>
            Expert craftsmanship, premium materials, and lifetime warranties. 
            Protect your home with Boston's highest-rated roofing company.
          </p>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px',
            marginTop: '20px',
            maxWidth: '800px',
            width: '100%',
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 900,
                color: '#FFB800',
                marginBottom: '8px',
                fontFamily: "'Playfair Display', serif",
              }}>
                25+
              </div>
              <div style={{
                fontSize: '14px',
                fontWeight: 700,
                color: '#FFFFFF',
                textTransform: 'uppercase' as const,
                letterSpacing: '2px',
              }}>
                Years Experience
              </div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 900,
                color: '#FFB800',
                marginBottom: '8px',
                fontFamily: "'Playfair Display', serif",
              }}>
                3,500+
              </div>
              <div style={{
                fontSize: '14px',
                fontWeight: 700,
                color: '#FFFFFF',
                textTransform: 'uppercase' as const,
                letterSpacing: '2px',
              }}>
                Roofs Completed
              </div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 900,
                color: '#FFB800',
                marginBottom: '8px',
                fontFamily: "'Playfair Display', serif",
              }}>
                A+
              </div>
              <div style={{
                fontSize: '14px',
                fontWeight: 700,
                color: '#FFFFFF',
                textTransform: 'uppercase' as const,
                letterSpacing: '2px',
              }}>
                BBB Rating
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Body Content Section */}
      <div style={{
        background: '#0A0A0C',
        padding: '80px 20px',
        position: 'relative',
        width: '100%',
        overflowX: 'hidden',
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          width: '100%',
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '60px',
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px',
            }}>
              <div style={{
                width: '30px',
                height: '1px',
                background: '#FFB800',
              }} />
              <span style={{
                fontSize: '12px',
                fontWeight: 800,
                color: '#FFB800',
                letterSpacing: '2px',
                textTransform: 'uppercase' as const,
                fontFamily: "'Playfair Display', serif",
              }}>
                CRAFTSMANSHIP & INTEGRITY
              </span>
              <div style={{
                width: '30px',
                height: '1px',
                background: '#FFB800',
              }} />
            </div>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: 900,
              color: '#FFFFFF',
              lineHeight: 1.2,
              fontFamily: "'Playfair Display', serif",
              marginBottom: '20px',
            }}>
              Protecting Boston's Homes<br />
              <span style={{
                color: '#FFB800',
                position: 'relative',
                display: 'inline-block',
              }}>
                For Over Two Decades
                <span style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: '#FFB800',
                }} />
              </span>
            </h2>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column' as const,
            gap: '30px',
          }}>
            <div style={{
              position: 'relative',
              paddingLeft: '25px',
              width: '100%',
            }}>
              <div style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '3px',
                height: '100%',
                background: '#FFB800',
                borderRadius: '2px',
              }} />
              <p style={{
                fontSize: '1.125rem',
                fontWeight: 500,
                color: '#FAFAFA',
                opacity: 0.95,
                lineHeight: 1.8,
                fontFamily: "'Playfair Display', serif",
                marginBottom: '20px',
              }}>
                Since 1999, BRAVOS has been the premier choice for residential roofing in the Greater Boston area. 
                We've built our reputation on quality workmanship, transparent communication, and roofs that stand 
                strong against New England's challenging weather conditions.
              </p>
              <p style={{
                fontSize: '1.125rem',
                fontWeight: 500,
                color: '#FAFAFA',
                opacity: 0.95,
                lineHeight: 1.8,
                fontFamily: "'Playfair Display', serif",
              }}>
                Whether you need a complete roof replacement, emergency storm repair, or routine maintenance, 
                our GAF Master Elite® certified team delivers exceptional results that enhance your home's 
                beauty, value, and protection.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Before & After Section */}
      <BeforeAfterSection />

      {/* Why Choose BRAVOS Section */}
      <WhyChooseBravosSection />

      {/* Residential Roofing Services Section */}
      <ResidentialRoofingServices />

      {/* Contact Form Section */}
      <ContactForm />

      {/* FAQ Section */}
      <FAQSection />

      {/* Responsive CSS */}
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html, body {
          overflow-x: hidden;
          width: 100%;
          max-width: 100vw;
          font-family: 'Playfair Display', serif;
          background: #0A0A0C;
          color: #FFFFFF;
        }
        
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&display=swap');
        
        @media (max-width: 1024px) {
          .hero-heading {
            font-size: 2.2rem !important;
          }
          
          h2 {
            font-size: 2rem !important;
          }
          
          [style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
        
        @media (max-width: 768px) {
          .hero-heading {
            font-size: 1.8rem !important;
          }
          
          h2 {
            font-size: 1.8rem !important;
          }
          
          [style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        img {
          max-width: 100%;
          height: auto;
        }
        
        button, a {
          user-select: none;
        }
      `}</style>
    </div>
  );
}