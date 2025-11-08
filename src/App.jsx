import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import MainLayout from './components/MainLayout';
import Home from './components/Home';
import About from './components/About';
import EventHighlight from './components/EventHighlight';
import Partners from './components/Partners';
import Speakers from './components/Speakers';
import InterNationalSpeakers from './components/InterNationalSpeakers';
import FocusSectors from './components/FocusSectors';
import WhyPartner from './components/WhyPartner';
import Contact from './components/Contact';
import AwardNomination from './components/AwardNomination';
import RegistrationForm from './components/RegistrationForm';
import NominationForm from './components/NominationForm';
import SponsorshipQueryForm from './components/SponsorshipQueryForm';
import DownloadAgendaForm from './components/DownloadAgendaForm';
import ErrorPage from './components/ErrorPage';
import Guest from './components/Guest'
import News from './components/News';
function App() {
  const location = useLocation();
  
  // Scroll to top on route change, but not for hash changes
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);
  
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route  element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/event-highlight" element={<EventHighlight />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/guest" element={<Guest />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/international-speakers" element={<InterNationalSpeakers />} />
            <Route path="/focus-sectors" element={<FocusSectors />} />
            <Route path="/why-partner" element={<WhyPartner />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/award-nomination" element={<AwardNomination />} />
            <Route path="/nomination-form" element={<NominationForm />} />
            <Route path="/delegate-registration" element={<RegistrationForm />} />
            <Route path="/sponsorship-query" element={<SponsorshipQueryForm />} />
            <Route path="/download-agenda" element={<DownloadAgendaForm />} />
              <Route path="/News" element={<News />} />
            <Route path='/*' element={<ErrorPage/>}/>
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;