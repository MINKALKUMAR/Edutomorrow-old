import React from 'react';
import styles from './Guest.module.css';
import Speaker1 from '../assets/guest/Chandrasekhar.png';
import Speaker3 from '../assets/guest/Jatinder.png';
import Speaker2 from '../assets/guest/Sandeep.png';


const Guest = () => {
  const guestCards = [
    // {
    //   id: 1,
    //   name: 'Dr Sandeep Singh Kaura',
    //   title: '',
    //   image: Speaker2,
    //   university: 'Founder Chancellor, Shaheed Udham Singh Skill Development and Entrepreneurship University Punjab'
    // },
    {
      id: 2,
      name: 'Dr. Jatinder Pal Singh',
      title: '',
      image: Speaker3,
      university: 'Deputy Director, Directorate of Higher Education, Government of Punjab'
    },
    {
      id: 3,
      name: 'Dr. Chandrasekhar Buddha',
      title: '',
      image: Speaker1,
      university: 'CEO, Anuvadini AI & Chief Coordinating Officer AICTE, Government of India'
    },
    
  ];

  return (
    <section className={styles.guestContainer} id="guest">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 gradient-text">
          Guest of Honour
        </h2>
        <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-4 sm:mb-6 rounded-full"></div>
      </div>
      <div className={styles.cardsContainer}>
        {guestCards.map((card) => (
          <div key={card.id} className={styles.guestCard}>
            <div className={styles.guestImageContainer}>
              <img 
                src={card.image} 
                alt={card.name}
                className={styles.guestImage}
              />
              <div className={styles.imageOverlay}></div>
            </div>
            <div className={styles.guestInfo}>
              <h3 className={styles.guestName}>{card.name}</h3>
              <p className={styles.guestTitle}>{card.title}</p>
              <p className={styles.guestUniversity}>{card.university}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Guest;