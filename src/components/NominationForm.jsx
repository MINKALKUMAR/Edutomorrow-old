import React, { useEffect } from 'react';

const NominationForm = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Education Tomorrow Awards 2025 - Nomination Form</h1>
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
          <iframe 
            src="https://forms.zohopublic.in/fintrexmedia1/form/EducationTomorrowAwards2025/formperma/nLpjrt2siI4EC3ZiYNbOfFiFkQHvQwjpZ2ry4RGjShY"
            width="100%" 
            height="800" 
            frameBorder="0"
            title="Education Tomorrow Awards 2025 Nomination Form"
            className="rounded-lg"
            style={{ minHeight: '80vh' }}
          >
            Loading nomination form...
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default NominationForm;
