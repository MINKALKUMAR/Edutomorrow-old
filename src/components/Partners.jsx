import React from 'react';
import FintrexLogo from '../assets/partner/Fintrex.png';
import EducoreLogo from '../assets/partner/Educore.png';
import WULogoWhite from '../assets/partner/WULogoWhite.png';
import LINGAYA from '../assets/partner/LINGAYA.png';
import KHASRAPAT from '../assets/partner/KHASRAPAT.png';
import ICTAcademy from '../assets/partner/ICTAcademy.png';
import Education_Future_One from '../assets/partner/Education_Future_One.png';
const Partner = () => {
  const partnerCategories = [
    {
      title: "",
      partners: [
        {
          name: "Organiser",
          logo: FintrexLogo,
          link: "https://fintrexmedia.com/"
        },
        {
          name: "Knowledge Partner", 
          logo: EducoreLogo,
          link: "#"
        },
        {
          name: "Presenting Partner", 
          logo: WULogoWhite,
          link: "#"
        },
      ]
    },
    {
      title: "",
      partners: [
        {
          name: "University Partner",
          logo: LINGAYA,
          link: "#"
        },
        {
          name: "Networking Partner",
          logo: Education_Future_One,
          link: "#"
        },
        {
          name: "Skilling Partner",
          logo: ICTAcademy,
          link: "#"
        }
      ]
    },
    {
      title: "", 
      partners: [
        {
          name: "News Partner",
          logo: KHASRAPAT,
          link: "#"
        }
      ]
    },
  ];

  return (
    <section style={{
            background: `linear-gradient(135deg, var(--color-blue-light-bg) 0%, var(--color-white) 50%, var(--color-blue-medium-bg) 100%)`,
          }} className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Partners
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Partners Grid */}
        <div className="space-y-12">
          {partnerCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="text-center">
              {/* Category Title */}
              <h3 className="text-2xl font-semibold text-gray-700 mb-8">
                {category.title}
              </h3>
              
              {/* Partners in this category */}
              <div className="flex flex-wrap justify-center items-center gap-8">
                {category.partners.map((partner, partnerIndex) => (
                  <div
                    key={partnerIndex}
                    className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-100/50"
                  >
                    <a
                      href={partner.link}
                      className="block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 w-64 h-40 flex flex-col items-center justify-center group-hover:border-blue-200">
                      <p className="mt-2 text-sm text-gray-900 font-bold text-center">
                          {partner.name}
                        </p>
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="w-full h-28 object-contain p-2"
                        />
                       
                      </div>
                     
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;