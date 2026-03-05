import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

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
    <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h2" 
            sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 'bold', mb: 2 }}
          >
            What Our Travelers Say
          </Typography>
          <Typography 
            variant="body1" 
            color="text.secondary" 
            sx={{ fontSize: '1.125rem' }}
          >
            Real experiences from real travelers
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  position: 'relative',
                  transition: 'all 0.3s',
                  '&:hover': { boxShadow: 6 }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <FormatQuoteIcon 
                    sx={{ 
                      fontSize: 48, 
                      color: 'primary.light', 
                      opacity: 0.3,
                      position: 'absolute',
                      top: 16,
                      right: 16,
                    }} 
                    aria-hidden="true"
                  />
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                    <Avatar 
                      sx={{ 
                        bgcolor: 'primary.main', 
                        width: 56, 
                        height: 56,
                        fontSize: '1.5rem',
                      }}
                    >
                      {testimonial.avatar}
                    </Avatar>
                    <Box>
                      <Typography variant="h4" sx={{ fontSize: '1.125rem', fontWeight: 'bold' }}>
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.location}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 0.5, mt: 0.5 }}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} style={{ color: '#FFC107' }} aria-hidden="true">★</span>
                        ))}
                      </Box>
                    </Box>
                  </Box>

                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    "{testimonial.text}"
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
