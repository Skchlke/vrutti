
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { useLocation } from 'react-router-dom';


const Result = () => {
  const location = useLocation();
  const resultData = location.state?.resultData;

  const [isOpen, setIsOpen] = useState(false);
  const [assessmentResults, setAssessmentResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!resultData) {
      setError("No assessment result data found. Please submit the form first.");
      setLoading(false);
    } else {
      setAssessmentResults(resultData);
      setLoading(false);
    }
  }, [resultData]);

  if (loading) return <div>Loading results...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

 
 const toggle = () => {
    setIsOpen(!isOpen);
  };

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f5f7fa' }}>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <div style={{ marginLeft: isOpen ? '250px' : '0', padding: '20px' }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '30px',
            textAlign: 'center'
          }}>
            <div style={{ marginBottom: '20px' }}>
              <p>Analyzing your assessment responses...</p>
              <p>This may take a moment as we generate your personalized report.</p>
            </div>
            <div style={{
              display: 'inline-block',
              width: '50px',
              height: '50px',
              border: '5px solid #f3f3f3',
              borderTop: '5px solid #3498db',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto'
            }}></div>
            <style>{`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#f5f7fa' }}>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <div style={{ marginLeft: isOpen ? '250px' : '0', padding: '20px' }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '30px',
            textAlign: 'center',
            color: '#e74c3c'
          }}>
            <h3 style={{ marginBottom: '15px' }}>Error Loading Results</h3>
            <p style={{ marginBottom: '20px' }}>{error}</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
              <button 
                onClick={() => window.location.reload()}
                style={{
                  backgroundColor: '#3498db',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Try Again
              </button>
              <button 
                onClick={() => window.location.href = '/assessment'}
                style={{
                  backgroundColor: '#2ecc71',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Retake Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Safely access nested properties with fallbacks
  const ikigai = assessmentResults?.ikigai || {};
  const careerMatches = assessmentResults?.careerMatches || [];
  const recommendedSkills = assessmentResults?.recommendedSkills || [];
  const growthAreas = assessmentResults?.growthAreas || [];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f7fa' }}>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      
      <div style={{
        marginLeft: isOpen ? '250px' : '0',
        transition: 'margin 0.3s ease',
        padding: '20px'
      }}>
        {/* Main Content Container */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          padding: '40px',
          position: 'relative'
        }}>
          {/* Personalized Greeting */}
          <div style={{ 
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            <h1 style={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#2c3e50',
              marginBottom: '10px'
            }}>Welcome, sakshi</h1>
            <p style={{
              fontSize: '18px',
              color: '#7f8c8d'
            }}>Here's your personalized career guidance based on your assessment</p>
          </div>

          {/* Ikigai Section */}
          <div style={{
            backgroundColor: '#f0f7f4',
            borderRadius: '10px',
            padding: '25px',
            marginBottom: '30px',
            borderLeft: '5px solid #4CAF50'
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#2c3e50',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{
                display: 'inline-block',
                width: '30px',
                height: '30px',
                backgroundColor: '#4CAF50',
                color: 'white',
                borderRadius: '50%',
                textAlign: 'center',
                lineHeight: '30px',
                marginRight: '10px',
                fontSize: '16px'
              }}>i</span>
              Your Ikigai Discovery
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
              marginBottom: '20px'
            }}>
              <div style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '15px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#4CAF50',
                  marginBottom: '10px'
                }}>What You Love</h3>
                <p>{assessmentResults?.ikigai_discovery?.what_you_love || 'Not specified'}</p>
              </div>
              
              <div style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '15px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#4CAF50',
                  marginBottom: '10px'
                }}>What You're Good At</h3>
                <p>{assessmentResults?.ikigai_discovery?.what_you_are_good_at || 'Not specified'}</p>
              </div>
              
              <div style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '15px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#4CAF50',
                  marginBottom: '10px'
                }}>What The World Needs</h3>
                <p>{assessmentResults?.ikigai_discovery?.what_the_world_needs || 'Not specified'}</p>
              </div>
              
              <div style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '15px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#4CAF50',
                  marginBottom: '10px'
                }}>What You Can Be Paid For</h3>
                <p>{assessmentResults?.ikigai_discovery?.what_you_can_be_paid_for || 'Not specified'}</p>
              </div>
            </div>
            
            <div style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '20px',
              borderTop: '2px solid #4CAF50'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#2c3e50',
                marginBottom: '10px'
              }}>Your Career Sweet Spot</h3>
              <p>{assessmentResults?.career_sweet_spot || 'No conclusion available'}</p>
            </div>
          </div>

          {/* Career Matches Section */}
          <div style={{ marginBottom: '30px' }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#2c3e50',
              marginBottom: '20px',
              paddingBottom: '10px',
              borderBottom: '2px solid #f0f0f0'
            }}>Recommended Career Paths</h2>
            
            {assessmentResults?.recommended_careers?.length > 0 ? (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '20px'
              }}>
                {assessmentResults?.recommended_careers?.map((career, index) => (
                  <div key={index} style={{
                    backgroundColor: '#f9f9f9',
                    borderRadius: '8px',
                    padding: '20px',
                    borderLeft: '4px solid #2196F3',
                    transition: 'transform 0.3s ease',
                    ':hover': {
                      transform: 'translateY(-5px)'
                    }
                  }}>
                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#2196F3',
                      marginBottom: '10px'
                    }}>{career.title || 'Career Title'}</h3>
                    <p style={{ marginBottom: '15px' }}>{career.description || 'No description available'}</p>
                    
                    <div style={{ marginBottom: '15px' }}>
                      <h4 style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        marginBottom: '8px',
                        color: '#555'
                      }}>Key Skills Needed:</h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {(career.key_skills || []).length > 0 ? (
                          career.key_skills.map((skill, i) => (
                            <span key={i} style={{
                              backgroundColor: '#e3f2fd',
                              color: '#2196F3',
                              padding: '4px 10px',
                              borderRadius: '12px',
                              fontSize: '12px',
                              fontWeight: '500'
                            }}>{skill}</span>
                          ))
                        ) : (
                          <span style={{
                            backgroundColor: '#e3f2fd',
                            color: '#2196F3',
                            padding: '4px 10px',
                            borderRadius: '12px',
                            fontSize: '12px',
                            fontWeight: '500'
                          }}>Skills not specified</span>
                        )}
                      </div>
                    </div>
                    
                    <p style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#555'
                    }}>
                      Typical Salary: <span style={{ color: '#2196F3' }}>
                        {career.typical_salary || 'Not specified'}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
                padding: '20px',
                textAlign: 'center',
                color: '#555'
              }}>
                No career matches found based on your assessment.
              </div>
            )}
          </div>

          {/* Skills Development Section */}
          <div style={{ marginBottom: '30px' }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#2c3e50',
              marginBottom: '20px',
              paddingBottom: '10px',
              borderBottom: '2px solid #f0f0f0'
            }}>Skills Development Plan</h2>
            
            <div style={{
              backgroundColor: '#fff8e1',
              borderRadius: '8px',
              padding: '20px',
              marginBottom: '20px'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#ff9800',
                marginBottom: '15px'
              }}>Recommended Skills to Develop</h3>
              
              {assessmentResults?.skills_development_plan?.skills?.length > 0 ? (
                assessmentResults.skills_development_plan.skills.map((skill, index) => (
                  <div key={index} style={{ marginBottom: '15px' }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '5px'
                    }}>
                      <span>{skill.name || 'Skill'}</span>
                      <span>{skill.progress || 0}%</span>
                    </div>
                    <div style={{
                      height: '8px',
                      backgroundColor: '#ffe0b2',
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: `${skill.progress || 0}%`,
                        height: '100%',
                        backgroundColor: '#ff9800',
                        borderRadius: '4px'
                      }}></div>
                    </div>
                  </div>
                ))
              ) : (
                <div style={{ textAlign: 'center', color: '#555' }}>
                  No specific skills recommendations available.
                </div>
              )}
            </div>
            
            <div style={{
              backgroundColor: '#e8f5e9',
              borderRadius: '8px',
              padding: '20px'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#4CAF50',
                marginBottom: '15px'
              }}>Areas for Growth</h3>
              {assessmentResults?.skills_development_plan?.areas_for_growth?.length > 0 ? (
                <ul style={{ paddingLeft: '20px' }}>
                  {assessmentResults.skills_development_plan.areas_for_growth.map((area, index) => (
                    <li key={index} style={{ marginBottom: '8px', position: 'relative' }}>
                      <span style={{
                        position: 'absolute',
                        left: '-15px',
                        color: '#4CAF50'
                      }}>•</span>
                      {area}
                    </li>
                  ))}
                </ul>
              ) : (
                <div style={{ textAlign: 'center', color: '#555' }}>
                  No specific growth areas identified.
                </div>
              )}
            </div>
          </div>

          {/* Next Steps CTA */}
          <div style={{
            backgroundColor: '#e3f2fd',
            borderRadius: '8px',
            padding: '20px',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#1976D2',
              marginBottom: '10px'
            }}>Ready to Take the Next Step?</h3>
            <p style={{ marginBottom: '20px' }}>
              Based on your assessment, we recommend exploring courses that align with your career goals.
            </p>
            <button style={{
              backgroundColor: '#1976D2',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '4px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              ':hover': {
                backgroundColor: '#1565C0'
              }
            }}>
              Explore Recommended Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;