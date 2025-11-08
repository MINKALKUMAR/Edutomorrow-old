import React from "react";

export default function Contact() {
  const gradientBg = {
    background:
      "linear-gradient(135deg, var(--color-blue-light-bg, #E6F7FF) 0%, var(--color-white, #FFFFFF) 50%, var(--color-blue-medium-bg, #D6EFFF) 100%)",
  };

  return (
    <section
      className="contact-section"
      aria-labelledby="contact-heading"
      style={gradientBg}
    >
      <div className="contact-container">
        <header className="contact-header">
        <h2 id="why-partner-title" className="wpwu__title">
            Contact <span className="wpwu__titleAccent"> Information</span>
          </h2>
          <p className="subtitle">
            Reach the right person directly for partnerships, speaking, awards,
            or delegate inquiries.
          </p>
        </header>

        <div className="cards">
          <ContactCard
            title="For Sponsorship & Exhibition"
            name="Priyansh Saharawat"
            email="priyansh@fintrexmedia.com"
            phone="7011499056"
          />
          <ContactCard
            title="For Speaking & Award Nomination"
            name="Priyanshi Choudhary"
            email="priyanshi@fintrexmedia.com"
            phone="8755676010"
          />
          <ContactCard
            title="For Delegate Opportunity"
            name="Basant Sharma"
            email="basant@fintrexmedia.com"
            phone="7505024107"
          />
        </div>
      </div>

      <style>{`
        .contact-section {
          position: relative;
          padding: 64px 16px;
          color: var(--color-black, #1A1A1A);
        }

        .contact-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .title {
          margin: 10px 0 6px 0;
          font-size: 28px;
          line-height: 1.25;
          font-weight: 700;
          color: var(--color-black, #1A1A1A);
        }

        .subtitle {
          font-size: 14px;
          line-height: 1.6;
          color: rgba(0, 0, 0, 0.7);
          max-width: 680px;
          margin: 0 auto;
        }

        .cards {
          margin-top: 28px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        @media (min-width: 720px) {
          .cards {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
        }

        .card {
          background: var(--color-white, #FFFFFF);
          border-radius: 14px;
          padding: 30px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          height: 100%;
          box-shadow:
            0 1px 1px rgba(0,0,0,0.03),
            0 8px 24px rgba(0,0,0,0.06);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .card-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 15px;
          width: 100%;
        }
        
        .name {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin: 0;
        }
        
        .name-linkedin-link {
          color: #0077b5;
          opacity: 1;
          transform: translateX(-5px);
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
        }
        
        .name-linkedin-link:hover {
          color: #ffffff;
          background: #0077b5;
          border-radius: 4px;
        }
        .card:hover .name-linkedin-link {
          opacity: 1;
          transform: translateX(0);
        }
        
        .linkedin-link {
          color: #0077b5;
          opacity: 1;
          transform: translateY(-5px);
          transition: all 0.3s ease;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          position: relative;
          margin-top: 10px;
        }
        
        .card:hover .linkedin-link {
          opacity: 1;
          transform: translateY(0);
        }
        
        .linkedin-link:hover {
          color: #ffffff;
          background: #0077b5;
        }
        
        .linkedin-link::after {
          content: 'View Profile';
          position: absolute;
          top: 50%;
          right: 100%;
          transform: translateY(-50%);
          background: #0077b5;
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          white-space: nowrap;
          margin-right: 8px;
          opacity: 1;
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
          transform: translate(10px, -50%);
        }
        
        // .linkedin-link:hover::after {
        //   opacity: 1;
        //   transform: translate(0, -50%);
        // }
        .card:hover {
          transform: translateY(-2px);
          box-shadow:
            0 2px 4px rgba(24, 124, 207, 0.2),
            0 12px 30px rgba(6, 105, 162, 0.26);
            border: 2px solid #0077b5;
        }

        .cardTitle {
          font-size: 17px;
          font-weight: 700;
          color: var(--color-black, #1A1A1A);
          margin: 0;
          text-align: center;
        }
        .person {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 14px;
        }

        .avatar {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--color-blue-medium-bg, #D6EFFF);
          background: var(--color-blue-medium-bg, #D6EFFF);
          flex: 0 0 72px;
        }

        .name {
          font-size: 16px;
          font-weight: 700;
          color: var(--color-black, #1A1A1A);
          margin: 0;
        }

        .list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          width: 100%;
        }

        .item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
        }

        .icon {
          width: 18px;
          height: 18px;
          color: var(--color-blue-medium, #0071CE);
          flex: 0 0 18px;
          margin-top: 2px;
        }

        .value {
          color: var(--color-black, #1A1A1A);
          word-break: break-word;
        }

        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0 0 0 0);
          white-space: nowrap;
          border: 0;
        }
      `}</style>
    </section>
  );
}

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="linkedin-icon"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const linkedInProfiles = {
  'Basant Sharma': 'https://www.linkedin.com/in/basant-sharma-300626314/',
  'Priyanshi Choudhary': 'https://www.linkedin.com/in/priyanshi-chaudhary-a434a528b/',
  'Priyansh Saharawat': 'https://www.linkedin.com/in/priyansh-saharawat-67b43a2aa/'
};

function ContactCard({ title, name, email, phone, photoSrc }) {
  const linkedinUrl = linkedInProfiles[name] || '#';
  
  return (
    <article className="card" role="group" aria-label={title}>
      <div className="card-header">
        <h3 className="cardTitle">{title}</h3>
      </div>

      <div className="person">
        <p className="name">
          {name}
          <a 
            href={linkedinUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="name-linkedin-link"
            aria-label={`Connect with ${name} on LinkedIn`}
          >
            <LinkedInIcon />
          </a>
        </p>
      </div>

      <ul className="list">
        <li className="item">
          <MailIcon className="icon" aria-hidden="true" />
          <span className="value">
            <span className="visually-hidden">Email: </span>
            {email}
          </span>
        </li>
        <li className="item">
          <PhoneIcon className="icon" aria-hidden="true" />
          <span className="value">
            <span className="visually-hidden">Phone: </span>
            {formatPhone(phone)}
          </span>
        </li>
      </ul>
    </article>
  );
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
      />
      <path
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m22 8-10 6L2 8"
      />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 16.92v2a2 2 0 0 1-2.18 2 19.9 19.9 0 0 1-8.66-3.07A19.5 19.5 0 0 1 3.15 12.84 19.9 19.9 0 0 1 .08 4.18 2 2 0 0 1 2.06 2h2a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.6a2 2 0 0 1-.45 2.11L5.6 9.6a16 16 0 0 0 8.8 8.8l1.16-1.64a2 2 0 0 1 2.11-.45c.83.3 1.7.51 2.6.63A2 2 0 0 1 22 16.92Z"
      />
    </svg>
  );
}

function formatPhone(num = "") {
  const digits = String(num).replace(/\D/g, "");
  if (digits.length === 10) {
    return `${digits.slice(0, 5)} ${digits.slice(5)}`;
  }
  return digits;
}
