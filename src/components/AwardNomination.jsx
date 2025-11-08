import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/MainLogo.png";
import hotelImage from "../assets/Hotel-Chandigarh.jpg";
import awardLogo from "../assets/AwardLogo.jpg";
import awardLogo2 from "../assets/AwardLogo2.png";

const AwardNomination = () => {
  const [copied, setCopied] = useState(false);
  // Section 1: Hero Section with background image
  const HeroSection = () => (
    <div className="relative w-full pt-16 overflow-hidden bg-gray-100">
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 Aspect Ratio */}
        <img 
          src={awardLogo}
          alt="Award Logo"
          className="absolute inset-0 w-full h-full object-contain p-4 md:p-8 lg:p-12 animate-zoom-in-out"
          loading="eager"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          srcSet={`
            ${awardLogo}?w=400 400w,
            ${awardLogo}?w=800 800w,
            ${awardLogo}?w=1200 1200w
          `}
        />
      </div>
    </div>
  );

  // Section 2: About the Awards
  const AboutAwards = () => (
    <section 
      className="py-16"
      style={{
        background: 'linear-gradient(135deg, var(--color-blue-light-bg, #E6F7FF) 0%, var(--color-white, #FFFFFF) 50%, var(--color-blue-medium-bg, #D6EFFF) 100%)',
      }}
    >
      <div className="mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content - Takes 60% width on large screens */}
          <div className="w-full lg:w-3/5 text-lg text-gray-700 leading-relaxed">
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{background: 'var(--gradient-blue)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
                Celebrating Innovation and Leadership in Education
              </h2>
              <div className="w-24 h-1 mx-auto lg:mx-0 rounded-full" style={{background: 'var(--gradient-bar)'}}></div>
            </div>
            <p className="mb-6">
              The Education Tomorrow Conclave & Awards 2025 is a prestigious platform dedicated to recognizing and celebrating the trailblazers who are shaping the future of education. This exclusive gathering will honor visionary educators, pioneering institutions, and changemakers whose innovation, leadership, and commitment have transformed the learning ecosystem.
            </p>
            <p>
              The awards aim to spotlight outstanding contributions across higher education, EdTech, research, and skill development—fostering collaboration, knowledge-sharing, and impactful partnerships. With a mission to inspire progress and drive sustainable growth, the Education Tomorrow Awards 2025 seeks to honor individuals and organizations that are redefining benchmarks and setting new standards of excellence in the education sector.
            </p>
          </div>
          
          {/* Image Content - Takes 40% width on large screens */}
          <div className="w-full lg:w-2/5 flex justify-center items-center mt-8 lg:mt-0">
            <div className="w-full max-w-md">
              <img 
                src={awardLogo2}
                alt="Education Tomorrow Award Trophy" 
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Section 3: Important Dates
  const ImportantDates = () => {
    const dates = [
      { title: 'Last Date for Nomination', date: '05th October 2025', highlight: true },
      { title: 'Extended Deadline', date: '09th October 2025' },
      { title: 'Shortlist Announcement', date: '11th October 2025' },
      { title: 'Winner Announcement & Felicitation', date: '15th October 2025' }
    ];

    return (
      <section 
        className="py-16"
        style={{
          background: 'linear-gradient(135deg, var(--color-blue-light-bg, #E6F7FF) 0%, var(--color-white, #FFFFFF) 50%, var(--color-blue-medium-bg, #D6EFFF) 100%)',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{background: 'var(--gradient-blue)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              Important Dates
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{background: 'var(--gradient-bar)'}}></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {dates.map((item, index) => (
              <div key={index} className={`p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${item.highlight ? 'bg-yellow-100 border-2 border-yellow-400 hover:shadow-yellow-200' : 'bg-gray-50 hover:bg-white'}`}>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-lg text-gray-600">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Section 4: Award Categories
  const AwardCategories = () => {
    const categories = [
      {
        title: 'Higher Education Awards',
        items: [
          'Excellence in Student Outreach, Engagement and Digital Innovation 2025',
          'Excellence in Digital Education and Innovation 2025',
          'Most Promising University/Institute in R&D (Research & Development) 2025',
          'Remarkable Contribution in Online Learning and Digital Practices 2025',
          'Innovation in Higher Education and Skills Enhancement 2025',
          'Outstanding University/Institute in Learning Initiative and Skill Development 2025',
          'Outstanding University/Institute in Innovative Teaching and Learning Practices 2025',
          'Most Impactful University/Institute in Digital Infrastructure 2025',
          'Most Emerging University/Engineering Institute 2025',
          'Outstanding University/Institute with excellent infrastructure and Green Campus Initiative 2025',
          'Outstanding University/Institute in Digital Innovation,Technology and Best Practices 2025',
          'CSR Excellence in Higher Education 2025',
          'Most Impactful Contribution for Global Outreach and Exchange Program 2025',
          'Most Innovative University/Institute in Global Collaboration through Digital Learning 2025',
          'Most Emerging Startup University 2025',
          'Remarkable Contribution in Curriculum Development and Online Teaching 2025',
          'Most Promising University/Institute in Digital Transformation 2025',
          'Most Promising B-School of the Year 2025',
          'Most Promising Corporate-Governed University 2025',
          'Innovative Practices for Academic Excellence in Higher Education',
          'Outstanding Institute/University in Smart Class Initiative 2025',
          'Outstanding University in Training & Placements 2025',
          'Most Emerging University/Institute in India',
          'Most Promising University in Curriculum Design and Development 2025',
          'E-campus Award for the year 2025',
          'Remarkable contribution In Distance Learning Education',
          'Most Promising Medical Institute/University for the year 2025',
          'Most Promising Institute/University in India',
          'Outstanding Engineering Institute for Student Outreach and Global Exposure',
          'Most Promising Engineering Institute in India',
          'Outstanding Institute with Best Infrastructure for the year 2025'
        ]
      },
      {
        title: 'Individual Leadership Awards',
        items: [
          'Iconic Leadership in Higher Education 2025',
          'Outstanding Leadership in Higher Education 2025',
          'Outstanding Contribution in Online Education and Pedagogy 2025',
          'Outstanding Teaching Excellence Award 2025',
          'Excellent Digital Educator Award of the year 2025',
          'Excellence in Innovative Teaching & Learning Practices 2025',
          'Outstanding Research Scholar of the year 2025',
          'Emerging Leader in Higher Education 2025',
          'Entrepreneurship Award in Higher Education 2025',
          'Women Entrepreneurship Award in Higher Education 2025',
          'Outstanding Vice Chancellor of the year 2025',
          'Early Childhood Educator of the Year',
          'Pre-School Director of the Year',
          'Innovative Pre-School Leader',
          'Principal of the Year',
          'Excellence in Inclusive Education Leadership',
          'STEM Educator of the Year',
          'Dean of the Year',
          'University Chancellor/Vice Chancellor of the Year',
          'Innovative School Leader',
          'Outstanding Higher Education Administrator',
          'Best Higher Education Innovator',
          'EdTech Innovator of the Year',
          'EdTech Founder of the Year',
          'EdTech Thought Leader Award',
          'Best Educator in Online Learning',
          'Outstanding Women in Business Leadership',
          'Innovative Entrepreneur of the Year',
          'Business Leader of the Year',
          'Best Digital Transformation Leader',
          'Business Growth Leader of the Year'
        ]
      },
      {
        title: 'EdTech Awards',
        items: [
          'Leading E-learning Platform 2025',
          'Outstanding Tech Solution Provider for Higher Education 2025',
          'Outstanding Tech Solution Provider for Schools 2025',
          'Most promising Assessment Solution Provider of the Year 2025',
          'Outstanding Smart Class Solution Provider of the Year 2025',
          'Leading ERP Solution Provider of the Year 2025',
          'Outstanding Digital Education Platform Provider of the Year 2025',
          'Leading School Security Solution Provider of the Year 2025',
          'Most Promising Video Conferencing Solution Provider of the Year 2025',
          'Excellence in Multi-Language Content Provider of the Year 2025',
          'Outstanding Admission Solution Provider of the Year 2025',
          'Most Promising AR-VR Solution Provider of the Year 2025',
          'Outstanding Innovation in AI-ML 2025',
          'Outstanding Payment Solution Provider of the Year 2025',
          'Leading Display Solution Provider of the year 2025',
          'Most promising Hybrid Solution Provider of the year 2025',
          'Innovative Training Provider to Working Professionals 2025',
          'Innovative Digital Payment Solution Provider of the Year 2025',
          'Most promising LMS Provider of the year 2025',
          'Most Immersive learning Product of the year',
          'Best EdTech Company of the Year',
          'EdTech Startup of the Year',
          'Best EdTech Solution of the Year',
          'Best Cyber privacy/Security solution in Education',
          'Best Robotics Solution of the Year',
          'Best Classroom Tech Solution of the Year',
          'Best Test Prep Solution of the Year',
          'Emerging Technology Solution',
          'Best Learning Mobile App',
          'Most Effective Use of EdTech Tools'
        ]
      },
      {
        title: 'School Education Awards',
        items: [
          'Best Tech Savvy School of the Year',
          'Best Technically Advanced School Chain of the Year',
          'Best Standalone School of the Year',
          'School with best IT Infrastructure',
          'Innovation for Curriculum Award',
          'Educational Excellence Award',
          'Best School in Management System of the Year',
          'Most Innovative School of the Year',
          'Best E-learning Methodology School of the Year',
          'Most Progressive School of the Year',
          'Best School for Futuristic Education',
          'Most Inspirational School Award'
        ]
      },
      {
        title: 'Preschool Education Awards',
        items: [
          'Best Preschool Chain of the Year',
          'Best Standalone Preschool of the Year',
          'Innovation for Curriculum Award',
          'Innovation in Preschool Infrastructure',
          'Best Use of Technology in Preschool',
          'Effective Implementation & Integration of ICT'
        ]
      }
    ];

    return (
      <section 
        className="py-16"
        style={{
          background: 'linear-gradient(135deg, var(--color-blue-light-bg, #E6F7FF) 0%, var(--color-white, #FFFFFF) 50%, var(--color-blue-medium-bg, #D6EFFF) 100%)',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{background: 'var(--gradient-blue)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              Award Categories
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full" style={{background: 'var(--gradient-bar)'}}></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className="bg-white bg-opacity-90 backdrop-blur-sm border border-gray-200 rounded-lg overflow-hidden flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-600 to-blue-800">
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                <div className="p-6 flex-grow bg-white bg-opacity-80">
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start group">
                        <span className="text-blue-600 mr-2 mt-1 transform group-hover:scale-125 transition-transform">•</span>
                        <span className="text-gray-700 group-hover:text-blue-800 transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Section 5: Nomination Guidelines
  const NominationGuidelines = () => (
    <section 
      className="py-16"
      style={{
        background: 'linear-gradient(135deg, var(--color-blue-light-bg, #E6F7FF) 0%, var(--color-white, #FFFFFF) 50%, var(--color-blue-medium-bg, #D6EFFF) 100%)',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{background: 'var(--gradient-blue)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
            Nomination Guidelines
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{background: 'var(--gradient-bar)'}}></div>
        </div>
        <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:bg-white">
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              All nominations will be treated as strictly confidential.
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Applicants must submit the official online nomination form.
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Multiple categories can be selected while filling out the nomination form.
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              A nomination fee is applicable at this stage to ensure an independent and unbiased selection process.
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Attractive discounts are available for multiple entries:
              <ul className="ml-6 mt-2 space-y-2">
                <li>5–10 Categories: 10% discount</li>
                <li>More than 10 Categories: 15% discount</li>
              </ul>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              All submitted applications will be reviewed by an external panel of jurors.
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Please avoid sharing any highly confidential data, as applications are accessed by multiple evaluators.
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              The jury panel will determine the winners for each category.
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Some categories may have multiple winners depending on merit.
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Awards are non-transferable.
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              The nomination processing fee is non-refundable under any circumstances.
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Winners will be notified at least 15 days in advance of the ceremony.
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Final announcement and felicitation of winners will take place during the Education Tomorrow Awards 2025 on 14th October 2025 in Chandigarh.
            </li>
          </ul>
          <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200 mb-8 relative">
            <button 
              onClick={() => {
                const bankDetails = `Account Name: Fintrex Media Private Limited
Account No: 44367159331
Bank: State Bank of India (SBI)
Branch: Muzaffarnagar – Court Road branch
IFSC Code: SBIN0050259
SWIFT Code: SBIN0065135`;
                navigator.clipboard.writeText(bankDetails);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 px-3 py-1 text-sm sm:text-base text-gray-600 bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100 transition-colors"
              title="Copy bank details"
            >
              {copied ? '✓ Copied!' : '⎘ Copy'}
            </button>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Bank Account Details for Payment</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-gray-700">
              <div className="space-y-2">
                <p><span className="font-medium">Account Name:</span> Fintrex Media Private Limited</p>
                <p><span className="font-medium">Account No:</span> 44367159331</p>
                <p><span className="font-medium">Bank:</span> State Bank of India (SBI)</p>
              </div>
              <div className="space-y-2">
                <p><span className="font-medium">Branch:</span> Muzaffarnagar – Court Road branch</p>
                <p><span className="font-medium">IFSC Code:</span> SBIN0050259</p>
                <p><span className="font-medium">SWIFT Code:</span> SBIN0065135</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/nomination-form" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 inline-block">
              Nominate Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );

  // Section 6: Pricing
  const Pricing = () => (
    <section 
      className="py-16"
      style={{
        background: 'linear-gradient(135deg, var(--color-blue-light-bg, #E6F7FF) 0%, var(--color-white, #FFFFFF) 50%, var(--color-blue-medium-bg, #D6EFFF) 100%)',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{background: 'var(--gradient-blue)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
            Nomination Fee
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{background: 'var(--gradient-bar)'}}></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-2 hover:border-blue-100">
            <h3 className="text-2xl font-bold mb-4">Individual</h3>
            <p className="text-3xl font-bold text-blue-700 mb-4">INR 11,800</p>
            <p className="text-gray-600 mb-6">(INR 10,000 + 18% GST)</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center transform scale-105 border-2 border-blue-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:shadow-blue-100">
            <h3 className="text-2xl font-bold mb-4">Preschool, School & Higher Education</h3>
            <p className="text-3xl font-bold text-blue-700 mb-4">INR 17,700</p>
            <p className="text-gray-600 mb-6">(INR 15,000 + 18% GST)</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-2 hover:border-blue-100">
            <h3 className="text-2xl font-bold mb-4">EdTech</h3>
            <p className="text-3xl font-bold text-blue-700 mb-4">INR 30,000</p>
            <p className="text-gray-600 mb-6">(INR 25,000 + 18% GST)</p>
          </div>
        </div>
  
      </div>
    </section>
  );

  // Section 7: Location
  const Location = () => (
    <section 
      className="py-16"
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

  // Section 6: Contact
  const Contact = () => (
    <section 
      className="py-16"
      style={{
        background: 'linear-gradient(135deg, var(--color-blue-light-bg, #E6F7FF) 0%, var(--color-white, #FFFFFF) 50%, var(--color-blue-medium-bg, #D6EFFF) 100%)',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{background: 'var(--gradient-blue)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
            Contact Us
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" style={{background: 'var(--gradient-bar)'}}></div>
        </div>
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="md:w-2/5 bg-gray-100 flex items-center justify-center p-8">
              <img 
                src={logo} 
                alt="Education Tomorrow Logo" 
                className="h-48 w-auto object-contain"
              />
            </div>
            
            {/* Contact Card */}
            <div style={{cursor:"default"}} className="md:w-3/5 p-8 bg-gradient-to-br from-blue-50 to-white">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-200 pb-2">
                  For Award Nomination Queries
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-lg font-medium text-gray-700">Priyansh Saharawat</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-700 text-lg">
                        priyansh@fintrexmedia.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-700 text-lg">
                        +91 7011499056
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="font-sans">
      <HeroSection />
      <AboutAwards />
      <ImportantDates />
      <AwardCategories />
      <NominationGuidelines />
      <Pricing />
      <Location />
      <Contact />
    </div>
  );
};

export default AwardNomination;