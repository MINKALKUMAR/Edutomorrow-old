import React from 'react';// We'll create this CSS file
import SubarnoBhattacharyya from '../assets/speakers/SubarnoBhattacharyya.png';
import Manoj from '../assets/speakers/Manoj.png';
import Manpreet from '../assets/speakers/Manpreet.png'
import Vijay from '../assets/speakers/Vijay.png'
import Devendra from '../assets/speakers/Devendra.png'
import Anshu from '../assets/speakers/Anshu.png'
import Murari from '../assets/speakers/Murari.png'
import Ankur from '../assets/speakers/Ankur.png'
import Sanjay from '../assets/speakers/Sanjay.png'
import Honey from '../assets/speakers/Honey.png'
import Raghuveer from '../assets/speakers/Raghuveer.png'
import Amit from '../assets/speakers/Amit.png'
import Jayanand from '../assets/speakers/Jayanand.png'
import Ramandeep from '../assets/speakers/Ramandeep.png'
import Parvinder from '../assets/speakers/Parvinder.png'
import Pankaj from '../assets/speakers/Pankaj.png'
import Harpal from '../assets/speakers/Harpal.png'
import PankajKumar from '../assets/speakers/Pankaj Kumar.png'
import Gurpreet from '../assets/speakers/Gurpreet.png'
import Anand from '../assets/speakers/Anand.png'
import Picheswar from '../assets/speakers/Picheswar.png'
import AnuKaushal from '../assets/speakers/AnuKaushal.png'
import Rajanikant from '../assets/speakers/Rajanikant.png'
import Jagtar from '../assets/speakers/Jagtar.png'
import Shankar from '../assets/speakers/Shankar.png'
import Suresh from '../assets/speakers/Suresh.png'
import Akansha from '../assets/speakers/Akansha.png'



const Speakers = () => {
  // Sample guest data (replace with your actual data)
  const guests = [
    {
      id:1,
      name: "Dr. Anshu Kataria", 
      title: "Chairman",
      image: Anshu,
      Uiversity:"Aryan Group of Colleges"
    },
    {
      id:2,
      name: "Prof.(Dr.) Parvinder Singh", 
      title: "Chairman & Director",
      image: Parvinder,
      Uiversity:"Confederation of Indian Private Universities & International Academic Affairs-Chandigarh"
    },
    {
      id:21,
      name: "Dr. Picheswar Gadde", 
      title: "Chancellor",
      image: Picheswar,
      Uiversity:"Lingaya’s Vidyapeeth, Lingaya's Group, Haryana"
    },
    {
      id:3,
      name: "Dr. Manoj Manuja", 
      title: "Vice Chancellor",
      image: Manoj,
      Uiversity:"Geeta University"
    },
    {
      id:4,
      name: "Prof (Dr.) Manpreet Singh Manna", 
      title: "Vice Chancellor",
      image: Manpreet,
      Uiversity:"Chandigarh University"
    },
    {
      id:5,
      name: "Dr. Sanjay Bahl", 
      title: "Vice Chancellor",
      image: Sanjay,
      Uiversity:"Indus International University"
    },

    {
      id:6,
      name: "Prof. (Dr.) Murari Lal Gaur", 
      title: "Chief advisor",
      image: Murari,
      Uiversity:"Rawatpura sarkar group of  institutions MP Academic Board Member Banaras Hindu University"
    },
    {
      id:7,
      name: "Prof (Dr.) Devendra Sharma", 
      title: "Vice Chancellor ",
      image: Devendra,
      Uiversity:"HRIT University"
    },
    {
      id:7,
      name: "Dr. Akansha Jain", 
      title: "Co- Founder",
      image: Akansha,
      Uiversity:"EFOS.in"
    },
    {
      id:7,
      name: "Suresh Babu Lakshmanan", 
      title: "Associate Vice President",
      image: Suresh,
      Uiversity:"ICT Academy"
    },
    {
      id:8,
      name: "Prof. Jayanand", 
      title: "Pro Vice Chancellor ",
      image: Jayanand,
      Uiversity:"Shobhit Deemed University"
    },
    {
      id:9,
      name: "Prof. (Dr). Pankaj Kumar Mishra", 
      title: "Pro vice chancellor",
      image: PankajKumar,
      Uiversity:"Future university"
    },
    {
      id:9,
      name: "Dr. Jagtar Singh Dhiman", 
      title: "Pro Vice Chancellor",
      image: Jagtar,
      Uiversity:"Guru Kashi University, Punjab"
    },
    {
      id:10,
      name: "Dr Raghuveer VR", 
      title: "Pro Vice Chancellor – Academic Affairs",
      image: Raghuveer,
      Uiversity:"Chandigarh University"
    },
    {
      id:11,
      name: "Prof.(Dr.) Gurpreet Singh", 
      title: "Founder Director",
      image: Gurpreet,
      Uiversity:"Chandigarh University Online"
    },

    {
      id:12,
      name: "Ankur Gill", 
      title: "Director of Operations",
      image: Ankur,
      Uiversity:"Swami Vivekanand Group  of institutes (SVGOI)"
    },
    {
      id:13,
      name: "Prof.(Dr.) Pankaj Gupta", 
      title: "Executive Director (CESM)",
      image: Pankaj,
      Uiversity:"O P Jindal Global University"
    },
    {
      id:14,
      name: "Prof.(Dr.) Ramandeep Saini", 
      title: "Director-Principal",
      image: Ramandeep,
      Uiversity:"Chandigarh Business School of Administration"
    },
    {
      id:15,
      name: "Dr. Honey Sharma", 
      title: "Campus Director",
      image: Honey,
      Uiversity:"Gulzar Group Of Institutes"
    },
    {
      id:16,
      name: "Prof. Dr. Vijay Kumar Banga", 
      title: "Director",
      image: Vijay,
      Uiversity:"Govind Ballabh Pant Institute of Engineering & Technology, Pauri, Garhwal, Uttarakhand"
    },
    {
      id:17,
      name: "Dr. Harpal Thethi", 
      title: "Professor & Executive Dean - Corporate Relations & Career Planning",
      image: Harpal,
      Uiversity:"Lovely Professional University"
    },
    {
      id:18,
      name: "Dr. Amit Jain", 
      title: "Director",
      image: Amit,
      Uiversity:"Inderprastha Engineering College (IES)"
    },
    {
      id:19,
      name: "Subarno Bhattacharyya", 
      title: "Assistant Director",
      image: SubarnoBhattacharyya,
      Uiversity:"O.P. Jindal Global (Institution of Eminence) Deemed-to-be-University"
    },
    {
      id:19,
      name: "Prof. Shankar Iyer", 
      title: "Head Centre for Placements And Career Guidance",
      image: Shankar,
      Uiversity:"Christ University Pune Lavasa Campus Maharashtra"
    },
    {
      id:20,
      name: "Dr. Anand Kr Shukla", 
      title: "Dean",
      image: Anand,
      Uiversity:"Lovely Professional University"
    },
    {
      id:20,
      name: "Prof. Rajanikant Verma", 
      title: "Professor",
      image: Rajanikant,
      Uiversity:"Zakir Husain Delhi College, University of Delhi"
    },
    
  ];

  return (
    <section className="confirmed-guests-section">
      <div className="container">
      <h2 style={{textAlign:"center"}} className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Speakers
          </h2>
        <div className="guests-grid">
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

export default Speakers;