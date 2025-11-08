
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import About from './About';
import EventHighlight from './EventHighlight';
import Partners from './Partners';
import Guest from './Guest';
import Speakers from './Speakers';
import InterNationalSpeakers from './InterNationalSpeakers';
import FocusSectors from './FocusSectors';
import DiscussionPoints from './DiscussionPoints';
import WhyPartner from './WhyPartner';
import Location from './Location';
import Contact from './Contact';
import News from './News';
// import logo from "../assets/MainLogo.png";
import logo from "../assets/MainLogo2.png";
import aiLogo from "../assets/Ai_Logo.png";

const Home = () => {
  const location = useLocation();

  const homeRef = useRef(null);

  useEffect(() => {
    // Update vh unit on initial load and window resize
    const updateVh = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    };
    
    updateVh();
    window.addEventListener('resize', updateVh);
    
    // Check if there's a hash in the URL and scroll to that section
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', updateVh);
    };
  }, [location]);

  return (
    <div className="home-container" ref={homeRef}>
      <section id="home" className="hero-section">
        {/* Background with gradient */}
        <div className="hero-bg-gradient"></div>

        {/* Animated background elements */}
        <div className="animated-bg-elements">
          <div className="bg-circle circle-1"></div>
          <div className="bg-circle circle-2"></div>
        </div>

        <div className="hero-grid">
          {/* Left: Main Content */}
          <div className="hero-left hero-content">
            {/* Main Logo with Animation */}
            <div className="logo-container">
              <img
                src={logo}
                alt="CIO Horizon Logo"
                className="main-logo"
              />
              <div className="event-info mrgn-4rem">
                <div className="event-badge">15th October 2025 • Hotel Park Plaza • Chandigarh</div>
                <h1 className="hero-title">AI and the Next Frontier of Higher Education</h1>
                <p className="hero-subtitle">
                  {/* Explore how AI is reshaping universities, research, and student experience. */}
                </p>
              </div>
            </div>
            {/* CTA Buttons */}
            <div className="cta-container">
              <a
                href="/delegate-registration"
                className="cta-btn primary"
              >
                Delegate Registration
              </a>
              <a
                href="/sponsorship-query"
                className="cta-btn secondary"
              >
                Express Interest
              </a>
            </div>
          </div>

          {/* Right: Animated AI Logo */}
          <div className="hero-right">
            <img src={aiLogo} alt="AI Illustration" className="ai-hero-image float-y" />
          </div>
        </div>
      </section>
      <section id="about" className="scroll-mt-24"><About/></section>
      <section id="event-highlight"><EventHighlight/></section>
      <section id="partners"><Partners/></section>
      <section id="guest"><Guest/></section>
      <section id="international-speakers"><InterNationalSpeakers/></section>
     <section id="speakers"><Speakers/></section>
      <section id="focus-sectors"><FocusSectors/></section>
      <DiscussionPoints />
      <section id="why-partner"><WhyPartner/></section>
      <section id="news"><News/></section>
      <Location />
      <section id="contact"><Contact/></section>
    </div>
  );
};

export default Home;