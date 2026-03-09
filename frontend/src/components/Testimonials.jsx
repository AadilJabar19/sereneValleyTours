import { Box, Container, Typography, Card, CardContent, Avatar, Rating } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import SectionHeader from './SectionHeader';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Delhi',
      avatar: 'P',
      rating: 5,
      text: 'Amazing Kashmir experience! The houseboat stay and Gulmarg trip were highlights. Our guide was knowledgeable and friendly. Highly recommend Serene Valley Tours!',
      avatarImage: '/images/srinagar2.webp',
    },
    {
      name: 'Rajesh Kumar',
      location: 'Mumbai',
      avatar: 'R',
      rating: 5,
      text: 'Best Ladakh tour ever! Well-organized itinerary, comfortable accommodations, and breathtaking views. The team handled everything professionally.',
      avatarImage: '/images/aruvalley2.webp',
    },
    {
      name: 'Anita & Vikram',
      location: 'Bangalore',
      avatar: 'A',
      rating: 5,
      text: 'Perfect honeymoon package! Romantic houseboat, beautiful locations, and excellent service. Thank you for making our trip so special and memorable.',
      avatarImage: '/images/pahalgam2.webp',
    },
    {
      name: 'Amit Patel',
      location: 'Ahmedabad',
      avatar: 'A',
      rating: 5,
      text: 'Fantastic family trip to Kashmir! Kids loved the snow activities in Gulmarg. Safe, fun, and well-planned. Will definitely book again for Ladakh!',
      avatarImage: '/images/gulmarg2.webp',
    },
    {
      name: 'Sneha Reddy',
      location: 'Hyderabad',
      avatar: 'S',
      rating: 5,
      text: 'Solo traveler here - felt completely safe and welcomed. The group tour was well-paced with amazing people. Kashmir is truly paradise on earth!',
      avatarImage: '/images/sonamarg2.webp',
    },
  ];

  return (
    <Box component="section" sx={{ bgcolor: 'transparent', py: { xs: 8, md: 10 }, overflow: 'hidden', position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          left: -100,
          top: 110,
          width: 280,
          height: 220,
          border: '2px solid #E5F4F8',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          right: -200,
          bottom: -140,
          width: 760,
          height: 420,
          border: '2px solid #E5F4F8',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          left: { xs: 14, md: 140 },
          top: { xs: 180, md: 230 },
          color: '#33B8CD',
          pointerEvents: 'none',
          opacity: 0.95,
          zIndex: 1,
        }}
      >
        <svg width="54" height="34" viewBox="0 0 54 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 20C3 20 13 7 23 10C33 13 43 28 51 22" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/>
          <path d="M7 22L2 20L5 16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"/>
          <circle cx="32" cy="11" r="2.2" fill="currentColor"/>
        </svg>
      </Box>

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <SectionHeader
          subtitle="Testimonial"
          title="What Client Say About Us"
          description=""
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
            loopedSlides={testimonials.length}
            slideToClickedSlide
            pagination={{ clickable: true }}
            autoplay={{ delay: 4600, disableOnInteraction: false }}
            style={{ paddingBottom: '42px', paddingTop: '6px' }}
          >
            {testimonials.map((testimonial, index) => (
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
                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, mb: 2, flexWrap: 'wrap' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.4 }}>
                        <Avatar src={testimonial.avatarImage} sx={{ width: 64, height: 64, bgcolor: 'primary.main', fontWeight: 700, fontSize: '1.7rem' }}>
                          {testimonial.avatar}
                        </Avatar>
                        <Box>
                          <Typography sx={{ fontSize: { xs: '1.2rem', md: '1.85rem' }, fontWeight: 700, color: '#1F2937', lineHeight: 1.2 }}>
                            {testimonial.name}
                          </Typography>
                          <Typography sx={{ color: '#6B7280', fontSize: { xs: '0.95rem', md: '1rem' } }}>{testimonial.location}</Typography>
                        </Box>
                      </Box>
                      <Rating value={testimonial.rating} readOnly size="medium" sx={{ color: '#F6A623' }} />
                    </Box>

                    <Typography sx={{ color: '#1F2937', lineHeight: 1.55, fontSize: { xs: '1.05rem', md: '1.2rem' } }}>
                      {`"${testimonial.text}"`}
                    </Typography>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
