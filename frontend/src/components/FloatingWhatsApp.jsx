import { useState, useEffect } from 'react';
import { Fab, Zoom } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const FloatingWhatsApp = () => {
  const [visible, setVisible] = useState(false);
  const whatsappNumber = '917006327776';

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    // Show immediately on mobile
    if (window.innerWidth < 768) {
      setVisible(true);
    } else {
      window.addEventListener('scroll', handleScroll);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    const message = encodeURIComponent('Hi! I am interested in Kashmir/Ladakh tour packages. Please share details.');
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <Zoom in={visible}>
      <Fab
        onClick={handleClick}
        aria-label="Contact us on WhatsApp"
        sx={{
          position: 'fixed',
          bottom: { xs: 16, md: 24 },
          right: { xs: 16, md: 24 },
          bgcolor: '#25D366',
          color: 'white',
          width: { xs: 56, md: 64 },
          height: { xs: 56, md: 64 },
          zIndex: 1000,
          '&:hover': {
            bgcolor: '#20BA5A',
            transform: 'scale(1.1)',
          },
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 12px rgba(37, 211, 102, 0.4)',
        }}
      >
        <WhatsAppIcon sx={{ fontSize: { xs: 28, md: 32 } }} />
      </Fab>
    </Zoom>
  );
};

export default FloatingWhatsApp;
