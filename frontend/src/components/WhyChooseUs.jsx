import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import NatureIcon from '@mui/icons-material/Nature';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PersonIcon from '@mui/icons-material/Person';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import SectionHeader from './SectionHeader';
import 'swiper/css';
import 'swiper/css/pagination';

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
    <Box component="section" sx={{ bgcolor: 'transparent', py: { xs: 8, md: 10 }, overflow: 'hidden', position: 'relative' }}>
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <SectionHeader
          subtitle="Our Services"
          title="Why Choose Serene Valley Tours?"
          description="Your trusted partner for unforgettable Kashmir and Ladakh adventures"
        />

        <Box
          sx={{
            '& .swiper': { overflow: 'visible' },
            '& .swiper-slide': {
              transition: 'transform 0.35s ease, opacity 0.35s ease',
              opacity: 0.72,
              transform: 'scale(0.92)',
            },
            '& .swiper-slide-active': {
              opacity: 1,
              transform: 'scale(1)',
            },
            '& .swiper-pagination': {
              bottom: '0 !important',
            },
            '& .swiper-pagination-bullet': {
              background: '#D7EDF3 !important',
              opacity: '1 !important',
              width: '12px',
              height: '12px',
              margin: '0 6px !important',
            },
            '& .swiper-pagination-bullet-active': {
              background: '#1AB8D2 !important',
            },
          }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            centeredSlides
            slidesPerView="auto"
            spaceBetween={18}
            loop
            loopedSlides={features.length}
            slideToClickedSlide
            pagination={{ clickable: true }}
            autoplay={{ delay: 4300, disableOnInteraction: false }}
            style={{ paddingBottom: '42px', paddingTop: '6px' }}
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index} style={{ width: '740px', maxWidth: '90vw' }}>
                <Card
                  sx={{
                    bgcolor: '#E3F1F5',
                    borderRadius: '26px',
                    border: '1px solid #D3E9EF',
                    boxShadow: 'none',
                    overflow: 'visible',
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 }, textAlign: 'center' }}>
                    <Box
                      sx={{
                        mb: 2.2,
                        display: 'inline-flex',
                        p: 2.3,
                        borderRadius: '50%',
                        bgcolor: '#D6EEF3',
                      }}
                      aria-hidden="true"
                    >
                      {feature.icon}
                    </Box>

                    <Typography sx={{ fontSize: { xs: '1.2rem', md: '1.85rem' }, fontWeight: 700, color: '#1F2937', lineHeight: 1.2, mb: 1.1 }}>
                      {feature.title}
                    </Typography>

                    <Typography sx={{ color: '#1F2937', lineHeight: 1.55, fontSize: { xs: '1.05rem', md: '1.2rem' } }}>
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1.4rem' }}>
            {'Registered Tour Operator | Sustainable Tourism Certified | 500+ Happy Travelers'}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
