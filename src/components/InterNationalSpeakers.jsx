import React from 'react';// We'll create this CSS file
import Monika from '../assets/speakers/Monika.jpg'
const InterNationalSpeakers = () => {
  // Sample guest data (replace with your actual data)
  const guests = [
    {
      id:1,
      name: "Dr. Monika Pendukeni ", 
      title: "Co-Founder & Council Chairperson",
      image: Monika,
      Uiversity:"Welwitchia University"
    },
    
    
  ];

  return (
    <section className="confirmed-guests-section">
      <div className="container">
      <h2 style={{textAlign:"center"}} className="text-4xl md:text-5xl font-bold gradient-text mb-6">
        International Speakers
          </h2>
        <div className="guests-grid-flex">
          {guests.map(guest => (
            <div key={guest.id} className="guest-card">
              <div className="guest-image-container">
                <img 
                  src={guest.image} 
                  alt={guest.name}
                  className="guest-image"
                />
                <div className="image-overlay"></div>
              </div>
              <div className="guest-info">
                <h3 className="guest-name">{guest.name}</h3>
                <p className="guest-title">{guest.title}</p>
                <p className='guest-university'>{guest.Uiversity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterNationalSpeakers;