import React, { useState } from 'react';

const DiscussionPoints = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);
  
  const points = [
    {
      title: "EdTech Innovation",
      description: "Integrating IoT in Smart Campuses and Incorporating Digital Twins in Higher Education",
      icon: '🚀', // Rocket for innovation
      gradient: "from-blue-600 to-blue-800"
    },
    {
      title: "Digital Transformation",
      description: "Role of AI, VR & AR in Harnessing Transformative Learning in Higher Education",
      icon: '🌐', // Globe for digital transformation
      gradient: "from-blue-500 to-blue-700"
    },
    {
      title: "Inclusive Education",
      description: "Role of evolving Online Learning Platforms in embracing Inclusivity & Personalized Learning Paths",
      icon: '🌍', // Earth for inclusivity
      gradient: "from-teal-500 to-blue-600"
    },
    {
      title: "Cybersecurity in HE",
      description: "Securing Sensitive Data, Ensuring Safety, and Examining Ethical Considerations of Embracing New Technologies",
      icon: '🔐', // Lock for security
      gradient: "from-indigo-600 to-indigo-800"
    },
    {
      title: "Immersive Tech",
      description: "Enhancing Learning with AI, AR, and VR in Classrooms",
      icon: '👓', // Glasses for AR/VR
      gradient: "from-sky-500 to-sky-700"
    },
    {
      title: "Entrepreneurial Mindsets",
      description: "Role of Technology and Blockchain in Fostering Innovation and Creativity",
      icon: '💎', // Diamond for value creation
      gradient: "from-purple-500 to-indigo-700"
    },
    {
      title: "Digital Literacy",
      description: "Navigating the Digital Age in Education",
      icon: '📱', // Smartphone for digital
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "Future of Work",
      description: "Study of Career Evolution, Digital Credentials and Skill Enhancement to create Future Ready Workforce",
      icon: '🚀', // Rocket for future
      gradient: "from-blue-600 to-indigo-700"
    }
  ];

  const handleCardHover = (index) => {
    setFlippedIndex(index);
  };

  const handleCardLeave = () => {
    setFlippedIndex(null);
  };

  return (
    <section 
      id="discussion-points"
      className="py-16 md:py-20 lg:py-24 w-full overflow-hidden"
      style={{
        background: "linear-gradient(135deg, var(--color-blue-light-bg) 0%, var(--color-white) 50%, var(--color-blue-medium-bg) 100%)"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-blue-800">
            Key Discussion Points
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-4 sm:mb-6 rounded-full"></div>
          {/* <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto px-2 sm:px-4">
            Click on the cards to explore the transformative themes
          </p> */}
        </div>

        {/* Flip Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {points.map((point, index) => (
            <div 
              key={index}
              className="flip-card h-64 w-full cursor-pointer"
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={handleCardLeave}
              onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
            >
              <div className={`flip-card-inner ${flippedIndex === index ? 'flipped' : ''}`}>
                {/* Front of Card */}
                <div className="flip-card-front bg-gradient-to-br from-blue-100 via-white to-blue-50 rounded-xl shadow-sm p-6 flex flex-col items-center justify-center border border-blue-100 hover:shadow-md transition-all duration-300 hover:from-blue-50 hover:to-blue-100">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center shadow-inner mb-4 ring-2 ring-white ring-opacity-50">
                    <span className="text-3xl drop-shadow-sm">{point.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent text-center">
                    {point.title}
                  </h3>
                </div>
                
                {/* Back of Card */}
                <div 
                  className={`flip-card-back rounded-xl p-6 flex items-center justify-center text-white ${point.gradient.includes('to-') ? `bg-gradient-to-br ${point.gradient}` : `bg-${point.gradient}`} shadow-lg`}
                >
                  <p className="text-center text-sm sm:text-base">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx="true" global="true">{`
        .flip-card {
          perspective: 1000px;
        }
        
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        
        .flip-card:hover .flip-card-inner,
        .flip-card.flipped .flip-card-inner {
          transform: rotateY(180deg);
        }
        
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 0.75rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          box-sizing: border-box;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .flip-card-back {
          transform: rotateY(180deg);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .discussion-card {
          animation: fadeIn 0.5s ease-out forwards;
          animation-delay: calc(var(--index) * 0.1s);
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default DiscussionPoints;
