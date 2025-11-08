import { useEffect } from 'react';

const DownloadAgendaForm = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Download Event Agenda</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <iframe 
            src="https://forms.zohopublic.in/fintrexmedia1/form/DownloadAgendaEducationTomorrowConclaveAwards2025/formperma/qzirwAC-9ix8irOaePwLqQdQElTs8Zv2pM2RV7FAM5w"
            width="100%" 
            height="950" 
            frameBorder="0"
            title="Download Agenda Form"
            className="rounded-lg"
          >
            Loading...
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default DownloadAgendaForm;
