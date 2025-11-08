import React from 'react';
import hotelImage from "../assets/Hotel-Chandigarh.jpg";

const Location = () => (
  <section 
    className="py-16"
    id="location"
    style={{
      background: 'linear-gradient(135deg, var(--color-blue-light-bg, #E6F7FF) 0%, var(--color-white, #FFFFFF) 50%, var(--color-blue-medium-bg, #D6EFFF) 100%)',
    }}
  >
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4" style={{background: 'var(--gradient-blue)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
          Venue
        </h2>
        <div className="w-24 h-1 mx-auto rounded-full" style={{background: 'var(--gradient-bar)'}}></div>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 h-96 bg-white rounded-lg shadow-lg overflow-hidden border-2 border-blue-200 transition-all duration-300 hover:shadow-xl hover:border-blue-300 hover:-translate-y-1">
          <img 
            src={hotelImage}
            alt="Award Ceremony Venue" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 h-96 rounded-lg overflow-hidden shadow-lg border-2 border-blue-200 transition-all duration-300 hover:shadow-xl hover:border-blue-300 hover:-translate-y-1">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.8609370970867!2d76.82252919999999!3d30.637876499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feb66c595c28b%3A0x45e2bcd3cdc71c1c!2sPark%20Plaza%20Chandigarh%20Zirakpur!5e0!3m2!1sen!2sin!4v1756630490296!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Awards Venue Location"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Location;
