// export default About;
const About = () => {
  return (
    <section id="about" className="pt-20 pb-28" style={{background: "linear-gradient(135deg, var(--color-blue-light-bg) 0%, var(--color-white) 50%, var(--color-blue-medium-bg) 100%)"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{background: 'var(--gradient-blue)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
            About Education Tomorrow
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 rounded-full" style={{background: 'var(--gradient-bar)'}}></div>
          <p className="text-xl max-w-3xl mx-auto" style={{color: 'var(--color-black)'}}>
            Shaping the future of higher education through innovation and collaboration
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4" style={{color: 'var(--color-blue-dark)'}}>
                Education Tomorrow Conclave & Awards 2025
              </h3>
              <p className="leading-relaxed mb-4" style={{color: 'var(--color-black)'}}>
                The Education Tomorrow Conclave & Awards 2025 will be held on 15th October in 
                Chandigarh, bringing together leading voices from academia, industry, and policy to shape the 
                future of higher education.
              </p>
              <p className="leading-relaxed mb-4" style={{color: 'var(--color-black)'}}>
                With the theme "AI and the Next Frontier of Higher Education," the conclave will explore how 
                artificial intelligence is transforming teaching, learning, and workforce development. From 
                redefining classrooms to enabling skill-driven education, the event will showcase innovations 
                that prepare students and professionals for an AI-powered future.
              </p>
              <p className="leading-relaxed" style={{color: 'var(--color-black)'}}>
                Designed as a platform for collaboration, the conclave will feature thought leaders, 
                policymakers, HR and L&D experts, and education pioneers, fostering dialogue and 
                partnerships that bridge the gap between education and industry.
              </p>
            </div>

            <div className="pt-4">
              {/* <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{background: 'var(--gradient-blue)'}}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold" style={{color: 'var(--color-blue-dark)'}}>October 14, 2025</h4>
                  <p style={{color: 'var(--color-black)'}}>Chandigarh, India</p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Right Content - Key Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: 'var(--gradient-blue)'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{color: 'var(--color-blue-dark)'}}>AI & Education</h3>
              <p className="text-sm" style={{color: 'var(--color-black)'}}>Exploring how AI transforms teaching and learning</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: 'var(--gradient-blue)'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{color: 'var(--color-blue-dark)'}}>Networking</h3>
              <p className="text-sm" style={{color: 'var(--color-black)'}}>Connect with education leaders and innovators</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: 'var(--gradient-blue)'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{color: 'var(--color-blue-dark)'}}>Innovation</h3>
              <p className="text-sm" style={{color: 'var(--color-black)'}}>Showcasing cutting-edge educational technologies</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{background: 'var(--gradient-blue)'}}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 112 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2v0" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{color: 'var(--color-blue-dark)'}}>Awards</h3>
              <p className="text-sm" style={{color: 'var(--color-black)'}}>Recognizing excellence in education innovation</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <p className="text-lg font-medium mb-6" style={{color: 'var(--color-blue-dark)'}}>
            Education Tomorrow Conclave & Awards 2025 is your platform to engage, collaborate, and 
            reimagine the future of education in the AI era.
          </p>
          {/* <button className="px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105" style={{background: 'var(--gradient-blue)'}}>
            Register Now
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default About;