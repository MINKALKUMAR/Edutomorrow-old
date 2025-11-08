import { useState, useEffect } from 'react';
import './News.css';

export default function News() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [imageErrors, setImageErrors] = useState({});

    const newsItems = [
        {
            title: "एजुकेशन टुमारो कॉन्क्लेव एंड अवार्ड्स 2025: चंडीगढ़ में उच्च शिक्षा और आर्टिफिशियल इंटेलिजेंस के भविष्य पर होगा मंथन",
            url: "https://khasrapat.com/business/education-tomorrow-conclave-and-awards-2025-the-future-of-higher-education-and-artificial-intelligence-will-be-discussed-in-chandigarh/",
            image: "https://khasrapat.com/wp-content/uploads/2025/10/hhhh-1024x576.jpg"
        },
        {
            title: "Education Tomorrow Conclave & Awards 2025: Chandigarh to Host Deliberations on the Future of Higher Education and Artificial Intelligence",
            url: "https://dailynewsnow.in/education-tomorrow-conclave-awards-2025-chandigarh-to-host-deliberations-on-the-future-of-higher-education-and-artificial-intelligence/",
            image: "https://khasrapat.com/wp-content/uploads/2025/10/hhhh-1024x576.jpg"
        },
        {
            title: "Education Tomorrow Conclave & Awards 2025: Exploring the Future of Education and AI in Chandigarh",
            url: "https://newsscroll.in/education-tomorrow-conclave-awards-2025-chandigarh-to-host-deliberations-on-the-future-of-higher-education-and-artificial-intelligence/",
            image: "https://khasrapat.com/wp-content/uploads/2025/10/hhhh-1024x576.jpg"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % newsItems.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const handleNewsClick = (url) => {
        window.open(url, '_blank');
    };

    const handleImageError = (index) => {
        console.log(`Image failed to load for slide ${index}`);
        setImageErrors(prev => ({
            ...prev,
            [index]: true
        }));
    };

    return (
        <div className="news-slider">
            <h2>Latest Updates</h2>
            <div className="slider-container">
                {newsItems.map((item, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentSlide ? 'active' : ''}`}
                    >
                        <div className="slide-content">
                            <div className="slide-image">
                                <img 
                                    src={item.image}
                                    alt={item.title}
                                    onError={() => handleImageError(index)}
                                    loading="lazy"
                                />
                                {imageErrors[index] && (
                                    <div className="fallback-image">
                                        <h4>Education Tomorrow</h4>
                                    </div>
                                )}
                            </div>
                            <div className="slide-text" onClick={() => handleNewsClick(item.url)}>
                                <h3>{item.title}</h3>
                                <button className="read-more">Read More →</button>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="slider-dots">
                    {newsItems.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}