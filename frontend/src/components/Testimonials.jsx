import { Box, Container, Typography, Card, CardContent, Avatar, Rating } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Delhi',
      avatar: 'P',
      rating: 5,
      text: 'Amazing Kashmir experience! The houseboat stay and Gulmarg trip were highlights. Our guide was knowledgeable and friendly. Highly recommend Serene Valley Tours!',
    },
    {
      name: 'Rajesh Kumar',
      location: 'Mumbai',
      avatar: 'R',
      rating: 5,
      text: 'Best Ladakh tour ever! Well-organized itinerary, comfortable accommodations, and breathtaking views. The team handled everything professionally.',
    },
    {
      name: 'Anita & Vikram',
      location: 'Bangalore',
      avatar: 'A',
      rating: 5,
      text: 'Perfect honeymoon package! Romantic houseboat, beautiful locations, and excellent service. Thank you for making our trip so special and memorable.',
    },
    {
      name: 'Amit Patel',
      location: 'Ahmedabad',
      avatar: 'A',
      rating: 5,
      text: 'Fantastic family trip to Kashmir! Kids loved the snow activities in Gulmarg. Safe, fun, and well-planned. Will definitely book again for Ladakh!',
    },
    {
      name: 'Sneha Reddy',
      location: 'Hyderabad',
      avatar: 'S',
      rating: 5,
      text: 'Solo traveler here - felt completely safe and welcomed. The group tour was well-paced with amazing people. Kashmir is truly paradise on earth!',
    },
  ];

  return (
    <Box component="section" sx={{ bgcolor: '#F0F9FA', py: { xs: 8, md: 12 }, overflow: 'hidden' }}>
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
            Testimonial
          </Typography>
          <Typography 
            variant="h2" 
            sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 'bold', mb: 2, color: '#2C3E50' }}
          >
            What Our Travelers Say
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary" 
            sx={{ fontSize: { xs: '1rem', md: '1.125rem' }, maxWidth: '600px', mx: 'auto' }}
          >
            Real experiences from real travelers
          </Typography>
        </Box>

        <Swiper
          modules={[Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          centeredSlides={true}
          slidesPerView="auto"
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
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          style={{ paddingBottom: '60px', paddingTop: '20px' }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} style={{ width: '600px', maxWidth: '90vw' }}>
              <Card 
                sx={{ 
                  height: '100%',
                  p: 1,
                  minHeight: '320px',
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FCFF 100%)',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'none',
                    boxShadow: '0 10px 40px rgba(28, 168, 175, 0.15)',
                  }
                }}
              >
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <FormatQuoteIcon 
                    sx={{ 
                      fontSize: 48, 
                      color: 'primary.main', 
                      opacity: 0.3,
                      mb: 2
                    }} 
                    aria-hidden="true"
                  />
                  
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: '1.0625rem', mb: 3, fontStyle: 'italic' }}>
                    "{testimonial.text}"
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5 }}>
                    <Avatar 
                      sx={{ 
                        bgcolor: 'primary.main', 
                        width: 64, 
                        height: 64,
                        fontSize: '1.75rem',
                        fontWeight: 600
                      }}
                    >
                      {testimonial.avatar}
                    </Avatar>
                    <Box>
                      <Typography variant="h4" sx={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#2C3E50', mb: 0.5 }}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        {testimonial.location}
                      </Typography>
                      <Rating value={testimonial.rating} readOnly size="small" sx={{ color: '#FFC107' }} />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default Testimonials;
