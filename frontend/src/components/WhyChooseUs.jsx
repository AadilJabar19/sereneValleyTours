import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import NatureIcon from '@mui/icons-material/Nature';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PersonIcon from '@mui/icons-material/Person';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <PersonIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Expert Local Guides',
      description: 'Native guides with deep knowledge of Kashmir & Ladakh culture, history, and hidden gems.',
    },
    {
      icon: <NatureIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Eco-Friendly Travel',
      description: 'Committed to sustainable tourism practices that preserve the natural beauty of the Himalayas.',
    },
    {
      icon: <LocalPoliceIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Safe & Reliable',
      description: 'Licensed tour operator with comprehensive safety measures and 24/7 emergency support.',
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: '24/7 Support',
      description: 'Round-the-clock customer service before, during, and after your journey.',
    },
    {
      icon: <VerifiedIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Personalized Itineraries',
      description: 'Customizable tour packages tailored to your preferences, budget, and travel style.',
    },
  ];

  return (
    <Box component="section" sx={{ bgcolor: '#F0F9FA', py: { xs: 8, md: 12 } }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            sx={{ 
              fontFamily: 'Pacifico, cursive', 
              fontSize: { xs: '1.5rem', md: '2rem' }, 
              color: 'primary.main',
              mb: 1
            }}
          >
            Our Services
          </Typography>
          <Typography 
            variant="h2" 
            sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 'bold', mb: 2, color: '#2C3E50' }}
          >
            Why Choose Serene Valley Tours?
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary" 
            sx={{ fontSize: { xs: '1rem', md: '1.125rem' }, maxWidth: '600px', mx: 'auto' }}
          >
            Your trusted partner for unforgettable Kashmir and Ladakh adventures
          </Typography>
        </Box>

        <Swiper
          modules={[Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          loopedSlides={5}
          slideToClickedSlide={true}
          allowTouchMove={true}
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 200,
            modifier: 1.5,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{ paddingBottom: '60px', paddingTop: '20px' }}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index} style={{ width: '380px' }}>
              <Card 
                sx={{ 
                  height: '100%',
                  textAlign: 'center',
                  p: 1,
                  minHeight: '300px',
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'none',
                    boxShadow: '0 10px 40px rgba(28, 168, 175, 0.15)',
                  }
                }}
              >
                <CardContent sx={{ p: 4, width: '100%' }}>
                  <Box 
                    sx={{ 
                      mb: 2.5,
                      display: 'inline-flex',
                      p: 2.5,
                      borderRadius: '50%',
                      bgcolor: '#E0F7F8'
                    }} 
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </Box>
                  <Typography 
                    variant="h3" 
                    sx={{ fontSize: '1.375rem', fontWeight: 'bold', mb: 1.5, color: '#2C3E50' }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, fontSize: '1rem' }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Trust Badges */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5, fontSize: '0.9375rem' }}>
            🏆 Registered Tour Operator | ✓ Sustainable Tourism Certified | ⭐ 500+ Happy Travelers
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
