import React from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isDownloadPage = location.pathname === '/download-agenda';
  
  const handleDownloadAgenda = () => {
    navigate('/download-agenda');
  };

  const buttonStyle = {
    position: 'fixed',
    right: '20px',
    top: '50%',
    transform: 'translateY(-50%) rotate(270deg)',
    transformOrigin: 'right center',
    backgroundColor: '#4a90e2',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '25px 25px 0 0',
    cursor: 'pointer',
    fontWeight: 'bold',
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap',
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#357abd',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    transform: 'translateY(-50%) rotate(270deg) scale(1.05)'
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <>
      {!isDownloadPage && (
        <button 
          style={isHovered ? buttonHoverStyle : buttonStyle}
          onClick={handleDownloadAgenda}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Download Agenda
        </button>
      )}
      <Outlet />
    </>
  );
};

export default MainLayout;
